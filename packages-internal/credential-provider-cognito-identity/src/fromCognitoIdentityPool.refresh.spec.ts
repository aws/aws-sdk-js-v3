import { GetCredentialsForIdentityCommand, GetIdCommand } from "@aws-sdk/nested-clients/cognito-identity";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { fromCognitoIdentityPool } from "./fromCognitoIdentityPool";

const START_MS = new Date("2024-01-01T00:00:00Z").getTime();
const SIX_HOURS = 6 * 3600_000;

/** 6 hours gives a 60 minute advisory window and the fixed 1 minute mandatory window. */
const ADVISORY_WINDOW = 60 * 60_000;
const MANDATORY_WINDOW = 60_000;

describe("fromCognitoIdentityPool credential refresh", () => {
  let now: number;

  beforeEach(() => {
    now = START_MS;
    vi.spyOn(Date, "now").mockImplementation(() => now);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  /**
   * Counts GetId and GetCredentialsForIdentity calls. Each GetCredentialsForIdentity returns a new
   * access key that expires 6 hours from the current mocked time.
   */
  const setup = () => {
    let credentialsCalls = 0;
    let idCalls = 0;
    const send = vi.fn(async (command) => {
      if (command instanceof GetIdCommand) {
        idCalls++;
        return { IdentityId: "identity-id" };
      }
      if (command instanceof GetCredentialsForIdentityCommand) {
        credentialsCalls++;
        return {
          Credentials: {
            AccessKeyId: `AKID-${credentialsCalls}`,
            SecretKey: "SECRET",
            SessionToken: "TOKEN",
            Expiration: new Date(now + SIX_HOURS),
          },
        };
      }
      throw new Error("unexpected command");
    });
    const provider = fromCognitoIdentityPool({
      client: { send } as any,
      identityPoolId: "pool-id",
      cache: {
        getItem: async () => null,
        setItem: async () => undefined,
        removeItem: async () => undefined,
      },
    }) as ReturnType<typeof fromCognitoIdentityPool> & {
      invalidate(identity: { accessKeyId: string }): void;
    };
    return {
      provider,
      getCredentialsCalls: () => credentialsCalls,
      getIdCalls: () => idCalls,
    };
  };

  it("returns the cached credentials without contacting Cognito while they are valid", async () => {
    const { provider, getCredentialsCalls } = setup();

    await expect(provider()).resolves.toMatchObject({ accessKeyId: "AKID-1" });

    // Still well outside the advisory window, so the second call is served from cache.
    now += SIX_HOURS - ADVISORY_WINDOW - 60_000;
    await expect(provider()).resolves.toMatchObject({ accessKeyId: "AKID-1" });

    expect(getCredentialsCalls()).toBe(1);
  });

  it("refreshes from Cognito once the credentials enter the advisory window", async () => {
    const { provider, getCredentialsCalls, getIdCalls } = setup();

    await provider();

    // Inside the 60 minute advisory window, but not yet mandatory. The refresh runs in the background, so this call
    // still gets the cached credentials and the next one gets the refreshed ones.
    now += SIX_HOURS - ADVISORY_WINDOW + 60_000;
    await expect(provider()).resolves.toMatchObject({ accessKeyId: "AKID-1" });
    await new Promise((resolve) => setTimeout(resolve, 0));
    await expect(provider()).resolves.toMatchObject({ accessKeyId: "AKID-2" });

    expect(getCredentialsCalls()).toBe(2);
    // The identity id is cached, so only the credentials call repeats.
    expect(getIdCalls()).toBe(1);
  });

  it("refreshes from Cognito once the credentials enter the mandatory window", async () => {
    const { provider, getCredentialsCalls } = setup();

    await provider();

    // Inside the 1 minute mandatory window.
    now += SIX_HOURS - MANDATORY_WINDOW + 1_000;
    await expect(provider()).resolves.toMatchObject({ accessKeyId: "AKID-2" });

    expect(getCredentialsCalls()).toBe(2);
  });

  it("contacts Cognito again after invalidation instead of satisfying the outer refresh from an inner cache", async () => {
    const { provider, getCredentialsCalls } = setup();

    await expect(provider()).resolves.toMatchObject({ accessKeyId: "AKID-1" });
    provider.invalidate({ accessKeyId: "AKID-1" });
    await expect(provider()).resolves.toMatchObject({ accessKeyId: "AKID-2" });

    expect(getCredentialsCalls()).toBe(2);
  });
});
