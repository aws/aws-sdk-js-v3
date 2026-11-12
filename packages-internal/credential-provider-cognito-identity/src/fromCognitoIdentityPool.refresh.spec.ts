import { GetCredentialsForIdentityCommand, GetIdCommand } from "@aws-sdk/nested-clients/cognito-identity";
import { afterEach, describe, expect, it, vi } from "vitest";

import { fromCognitoIdentityPool } from "./fromCognitoIdentityPool";

const START_MS = new Date("2024-01-01T00:00:00Z").getTime();

describe("fromCognitoIdentityPool credential refresh", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("contacts Cognito again after invalidation instead of satisfying the outer refresh from an inner cache", async () => {
    vi.spyOn(Date, "now").mockReturnValue(START_MS);
    let sequence = 0;
    const send = vi.fn(async (command) => {
      if (command instanceof GetIdCommand) {
        return { IdentityId: "identity-id" };
      }
      if (command instanceof GetCredentialsForIdentityCommand) {
        sequence++;
        return {
          Credentials: {
            AccessKeyId: `AKID-${sequence}`,
            SecretKey: "SECRET",
            SessionToken: "TOKEN",
            Expiration: new Date(Date.now() + 6 * 3600_000),
          },
        };
      }
      throw new Error("unexpected command");
    });
    const provider = fromCognitoIdentityPool({
      client: { send } as any,
      identityPoolId: "pool-id",
      cache: {
        getItem: async () => undefined,
        setItem: async () => undefined,
        removeItem: async () => undefined,
      },
    }) as ReturnType<typeof fromCognitoIdentityPool> & {
      invalidate(identity: { accessKeyId: string }): void;
    };

    await expect(provider()).resolves.toMatchObject({ accessKeyId: "AKID-1" });
    provider.invalidate({ accessKeyId: "AKID-1" });
    await expect(provider()).resolves.toMatchObject({ accessKeyId: "AKID-2" });

    expect(send.mock.calls.filter(([command]) => command instanceof GetCredentialsForIdentityCommand)).toHaveLength(2);
  });
});
