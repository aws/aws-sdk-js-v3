import {
  fromImdsCredentials,
  ImdsCredentials,
  isImdsCredentials
} from "./ImdsCredentials";
import { Credentials } from "@aws-sdk/types";

const creds: ImdsCredentials = Object.freeze({
  AccessKeyId: "foo",
  SecretAccessKey: "bar",
  Token: "baz",
  Expiration: new Date().toISOString()
});

describe("isImdsCredentials", () => {
  it("should accept valid ImdsCredentials objects", () => {
    expect(isImdsCredentials(creds)).toBe(true);
  });

  it("should reject credentials without an AccessKeyId", () => {
    expect(isImdsCredentials({ ...creds, AccessKeyId: void 0 })).toBe(false);
  });

  it("should reject credentials without a SecretAccessKey", () => {
    expect(isImdsCredentials({ ...creds, SecretAccessKey: void 0 })).toBe(
      false
    );
  });

  it("should reject credentials without a Token", () => {
    expect(isImdsCredentials({ ...creds, Token: void 0 })).toBe(false);
  });

  it("should reject credentials without an Expiration", () => {
    expect(isImdsCredentials({ ...creds, Expiration: void 0 })).toBe(false);
  });

  it("should reject scalar values", () => {
    for (let scalar of ["string", 1, true, null, void 0]) {
      expect(isImdsCredentials(scalar)).toBe(false);
    }
  });
});

describe("fromImdsCredentials", () => {
  it("should convert IMDS credentials to a credentials object", () => {
    const converted: Credentials = fromImdsCredentials(creds);
    expect(converted.accessKeyId).toEqual(creds.AccessKeyId);
    expect(converted.secretAccessKey).toEqual(creds.SecretAccessKey);
    expect(converted.sessionToken).toEqual(creds.Token);
    expect(converted.expiration).toEqual(new Date(creds.Expiration));
  });
});
