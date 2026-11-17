import { describe, expect, test as it } from "vitest";

import { CREDENTIAL_DAEMON_DOC } from "./constants";
import { parseCredentialDaemonReply, parseRfc3339Utc } from "./parseCredentialDaemonReply";

const reply = (result: Record<string, unknown>) => ({ jsonrpc: "2.0", id: 1, result });
const material = (overrides: Record<string, unknown> = {}) => ({
  type: "session_credentials",
  access_key_id: "AKID",
  secret_access_key: "SECRET",
  ...overrides,
});
const errorReply = (error: unknown) => ({ jsonrpc: "2.0", id: 1, error });
const parse = (value: unknown) => () => parseCredentialDaemonReply(value, "dev");
const protocolError = (text?: string) => ({
  name: "CredentialDaemonProviderError",
  code: "PROTOCOL_ERROR",
  tryNextLink: false,
  ...(text && { message: expect.stringContaining(text) }),
});

describe(parseCredentialDaemonReply.name, () => {
  it("maps session credentials", () => {
    expect(
      parseCredentialDaemonReply(
        reply({
          material: material({ session_token: "TOKEN", account_id: "123456789012" }),
          expires_at: "2030-01-02T03:04:05Z",
        }),
        "dev"
      )
    ).toEqual({
      accessKeyId: "AKID",
      secretAccessKey: "SECRET",
      sessionToken: "TOKEN",
      accountId: "123456789012",
      expiration: new Date("2030-01-02T03:04:05.000Z"),
    });
  });

  it("ignores unknown fields, the id and result.credential", () => {
    expect(
      parseCredentialDaemonReply(
        {
          jsonrpc: "2.0",
          id: "unexpected-id",
          extra: true,
          result: {
            credential: "some-other-name",
            provenance: { source: "sso" },
            material: material({ unknown: 1 }),
            expires_at: "2030-01-02T03:04:05Z",
          },
        },
        "dev"
      )
    ).toEqual({
      accessKeyId: "AKID",
      secretAccessKey: "SECRET",
      expiration: new Date("2030-01-02T03:04:05.000Z"),
    });
  });

  it.each([null, "", undefined])("ignores optional fields set to %j", (value) => {
    const credentials = parseCredentialDaemonReply(
      reply({ material: material({ session_token: value, account_id: value }), expires_at: "2030-01-02T03:04:05Z" }),
      "dev"
    );
    expect(credentials).not.toHaveProperty("sessionToken");
    expect(credentials).not.toHaveProperty("accountId");
  });

  it.each(["session_token", "account_id"])("rejects a non-string %s", (field) => {
    expect(parse(reply({ material: material({ [field]: 5 }), expires_at: "2030-01-02T03:04:05Z" }))).toThrowError(
      expect.objectContaining(protocolError(`result.material.${field} is not a string`))
    );
  });

  it("returns already-expired credentials unchanged", () => {
    expect(
      parseCredentialDaemonReply(reply({ material: material(), expires_at: "2000-01-01T00:00:00Z" }), "dev").expiration
    ).toEqual(new Date("2000-01-01T00:00:00.000Z"));
  });

  describe("envelope", () => {
    it.each([
      ["null", null],
      ["an array", []],
      ["a string", "x"],
      ["a number", 1],
    ])("rejects %s", (_, value) => {
      expect(parse(value)).toThrowError(expect.objectContaining(protocolError("not a JSON object")));
    });

    it.each([["1.0"], [undefined], [2]])("rejects jsonrpc %j", (jsonrpc) => {
      expect(
        parse({ jsonrpc, id: 1, result: { material: material(), expires_at: "2030-01-02T03:04:05Z" } })
      ).toThrowError(expect.objectContaining(protocolError("jsonrpc")));
    });

    it("rejects both result and error", () => {
      expect(parse({ jsonrpc: "2.0", id: 1, result: {}, error: {} })).toThrowError(
        expect.objectContaining(protocolError("exactly one of result or error"))
      );
    });

    it("reply-result-and-error: leaves the secret key and the daemon's error message out", () => {
      let error: any;
      try {
        parseCredentialDaemonReply(
          {
            jsonrpc: "2.0",
            id: 1,
            result: { material: material({ secret_access_key: "s3cr3t" }), expires_at: "2030-01-02T03:04:05Z" },
            error: { code: -32000, message: "denied", data: { code: "POLICY_DENIED" } },
          },
          "dev"
        );
      } catch (e) {
        error = e;
      }
      expect(error).toMatchObject(protocolError("exactly one of result or error"));
      expect(error.message).not.toContain("s3cr3t");
      expect(error.message).not.toContain("denied");
    });

    it("rejects neither result nor error", () => {
      expect(parse({ jsonrpc: "2.0", id: 1 })).toThrowError(
        expect.objectContaining(protocolError("exactly one of result or error"))
      );
    });

    it("does not take result or error from the prototype", () => {
      const value = Object.create({ result: { material: material(), expires_at: "2030-01-02T03:04:05Z" } });
      value.jsonrpc = "2.0";
      expect(parse(value)).toThrowError(expect.objectContaining(protocolError("exactly one of result or error")));
    });
  });

  describe("errors from the daemon", () => {
    it("maps REAUTH_REQUIRED", () => {
      expect(parse(errorReply({ code: -32000, message: "expired", data: { code: "REAUTH_REQUIRED" } }))).toThrowError(
        expect.objectContaining({
          name: "CredentialDaemonProviderError",
          code: "REAUTH_REQUIRED",
          tryNextLink: false,
          message: expect.stringMatching(/sign in again.*expired/),
        })
      );
    });

    it("maps CREDENTIAL_NOT_FOUND and names the credential", () => {
      expect(parse(errorReply({ code: -32000, message: "nope", data: { code: "CREDENTIAL_NOT_FOUND" } }))).toThrowError(
        expect.objectContaining({
          code: "CREDENTIAL_NOT_FOUND",
          message:
            `The credential daemon has no credential named 'dev' for this user; sign in again, ` +
            `see ${CREDENTIAL_DAEMON_DOC}. The credential daemon said: nope`,
        })
      );
    });

    it("maps another data.code to REQUEST_REJECTED and names it", () => {
      expect(parse(errorReply({ code: -32000, message: "denied", data: { code: "POLICY_DENIED" } }))).toThrowError(
        expect.objectContaining({
          code: "REQUEST_REJECTED",
          message:
            "The credential daemon rejected the request for credential 'dev' (POLICY_DENIED). " +
            "The credential daemon said: denied",
        })
      );
    });

    it.each([[{ code: -32601, message: "Method not found" }], [{}], [{ data: "x" }], [{ data: { code: 5 } }]])(
      "maps an error without a string data.code to REQUEST_REJECTED: %j",
      (error) => {
        expect(parse(errorReply(error))).toThrowError(
          expect.objectContaining({
            code: "REQUEST_REJECTED",
            message: expect.not.stringContaining("("),
          })
        );
      }
    );

    it("strips control characters from daemon text", () => {
      expect(
        parse(errorReply({ message: "line1\nline2\u001b[31m\u0085end", data: { code: "BAD\r\nCODE\u0000" } }))
      ).toThrowError(
        expect.objectContaining({
          code: "REQUEST_REJECTED",
          message:
            "The credential daemon rejected the request for credential 'dev' (BADCODE). " +
            "The credential daemon said: line1line2[31mend",
        })
      );
    });

    it.each([["x"], [[]]])("rejects an error that is not an object: %j", (error) => {
      expect(parse(errorReply(error))).toThrowError(expect.objectContaining(protocolError("error is not an object")));
    });

    it("treats a null error with no result as having neither", () => {
      expect(parse(errorReply(null))).toThrowError(
        expect.objectContaining(protocolError("exactly one of result or error"))
      );
    });

    it("maps the error when result is null", () => {
      expect(
        parse({
          jsonrpc: "2.0",
          id: 1,
          result: null,
          error: { code: -32000, message: "x", data: { code: "REAUTH_REQUIRED" } },
        })
      ).toThrowError(expect.objectContaining({ code: "REAUTH_REQUIRED" }));
    });
  });

  describe("result", () => {
    it.each([["x"], [[]]])("rejects a result that is not an object: %j", (result) => {
      expect(parse({ jsonrpc: "2.0", id: 1, result })).toThrowError(
        expect.objectContaining(protocolError("result is not an object"))
      );
    });

    it("treats a null result with no error as having neither", () => {
      expect(parse({ jsonrpc: "2.0", id: 1, result: null })).toThrowError(
        expect.objectContaining(protocolError("exactly one of result or error"))
      );
    });

    it("returns the credentials when error is null", () => {
      expect(
        parseCredentialDaemonReply(
          { jsonrpc: "2.0", id: 1, result: { material: material(), expires_at: "2030-01-02T03:04:05Z" }, error: null },
          "dev"
        )
      ).toEqual({ accessKeyId: "AKID", secretAccessKey: "SECRET", expiration: new Date("2030-01-02T03:04:05.000Z") });
    });

    it.each([[undefined], [null], ["x"]])("rejects material %j", (value) => {
      expect(parse(reply({ material: value, expires_at: "2030-01-02T03:04:05Z" }))).toThrowError(
        expect.objectContaining(protocolError("result.material is not an object"))
      );
    });

    it.each([[undefined], [""], [null], [3]])("rejects material.type %j", (type) => {
      expect(parse(reply({ material: material({ type }), expires_at: "2030-01-02T03:04:05Z" }))).toThrowError(
        expect.objectContaining(protocolError("result.material.type"))
      );
    });

    it("gives UNSUPPORTED_MATERIAL before checking the other fields", () => {
      expect(parse(reply({ material: { type: "x509\u0007_certificate" } }))).toThrowError(
        expect.objectContaining({
          code: "UNSUPPORTED_MATERIAL",
          message: expect.stringContaining("unsupported credential material type 'x509_certificate'"),
        })
      );
    });

    it("material-access-token: gives UNSUPPORTED_MATERIAL without the token value", () => {
      let error: any;
      try {
        parseCredentialDaemonReply(
          reply({ material: { type: "access_token", token: "secret" }, expires_at: "2030-01-02T03:04:05Z" }),
          "dev"
        );
      } catch (e) {
        error = e;
      }
      expect(error).toMatchObject({
        name: "CredentialDaemonProviderError",
        code: "UNSUPPORTED_MATERIAL",
        tryNextLink: false,
        message: expect.stringContaining("unsupported credential material type 'access_token'"),
      });
      expect(error.message).not.toContain("secret");
    });

    it.each(["access_key_id", "secret_access_key"])("requires a non-empty %s", (field) => {
      for (const value of [undefined, "", null, 1]) {
        expect(
          parse(reply({ material: material({ [field]: value }), expires_at: "2030-01-02T03:04:05Z" }))
        ).toThrowError(expect.objectContaining(protocolError(`result.material.${field} is not a non-empty string`)));
      }
    });

    it("requires a non-empty expires_at", () => {
      for (const value of [undefined, "", null, 1]) {
        expect(parse(reply({ material: material(), expires_at: value }))).toThrowError(
          expect.objectContaining(protocolError("result.expires_at is not a non-empty string"))
        );
      }
    });

    it("rejects an expires_at that is not an RFC 3339 UTC timestamp", () => {
      expect(parse(reply({ material: material(), expires_at: "2030-01-02T03:04:05+00:00" }))).toThrowError(
        expect.objectContaining(protocolError("result.expires_at is not an RFC 3339 UTC timestamp"))
      );
    });

    it("does not echo credential values in its errors", () => {
      try {
        parseCredentialDaemonReply(
          reply({ material: material({ access_key_id: "AKIDSECRETVALUE", session_token: 7 }), expires_at: "x" }),
          "dev"
        );
        expect.fail("expected an error");
      } catch (e) {
        expect(e.message).not.toContain("AKIDSECRETVALUE");
        expect(e.message).not.toContain("SECRET");
      }
    });
  });
});

describe(parseRfc3339Utc.name, () => {
  it.each([
    ["2026-01-02T03:04:05Z", "2026-01-02T03:04:05.000Z"],
    ["2026-01-02T03:04:05.1Z", "2026-01-02T03:04:05.100Z"],
    ["2026-01-02T03:04:05.12Z", "2026-01-02T03:04:05.120Z"],
    ["2026-01-02T03:04:05.123Z", "2026-01-02T03:04:05.123Z"],
    ["2026-01-02T03:04:02.123456789Z", "2026-01-02T03:04:02.123Z"],
    ["2026-01-02T03:04:02.999999999Z", "2026-01-02T03:04:02.999Z"],
    ["2024-02-29T23:59:59Z", "2024-02-29T23:59:59.000Z"],
  ])("parses %s", (value, iso) => {
    expect(parseRfc3339Utc(value)?.toISOString()).toBe(iso);
  });

  it.each([
    "2026-13-01T00:00:00Z",
    "2026-00-01T00:00:00Z",
    "2026-02-30T00:00:00Z",
    "2025-02-29T00:00:00Z",
    "2026-01-01T24:00:00Z",
    "2026-01-01T00:60:00Z",
    "2026-01-01T00:00:60Z",
    "2026-01-01T00:00:00",
    "2026-01-01T00:00:00+00:00",
    "2026-01-01T00:00:00.1234567890Z",
    "2026-01-01T00:00:00.Z",
    "2026-01-01 00:00:00Z",
    "2026-01-01t00:00:00z",
    " 2026-01-01T00:00:00Z",
    "1767225600",
  ])("rejects %s", (value) => {
    expect(parseRfc3339Utc(value)).toBeUndefined();
  });
});
