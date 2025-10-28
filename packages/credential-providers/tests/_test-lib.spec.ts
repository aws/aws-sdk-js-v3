import { describe, test as it } from "vitest";

describe("placeholder for testing lib", () => {
  it("", () => {});
});

export type CredentialTestParameters = {
  // has caller context client
  withCaller: boolean;
  // has region specified on the caller client
  codeRegion: boolean;
  // AWS_REGION is set
  envRegion: boolean;
  // profile regions are set
  profileRegion: boolean;
  // provider itself has a clientConfig.region
  providerRegion: boolean;
  // profile name
  profile: string | undefined;
};

function serializeParams(params: CredentialTestParameters) {
  let buffer = "";
  for (const [key, value] of Object.entries(params)) {
    if (typeof value === "boolean") {
      if (value) {
        buffer += ` ${key},`;
      }
    } else {
      buffer += ` ${key} = ${value},`;
    }
  }
  return buffer;
}

export function test() {
  for (const withCaller of [true, false]) {
    for (const codeRegion of [true, false]) {
      for (const envRegion of [true, false]) {
        for (const profileRegion of [true, false]) {
          for (const providerRegion of [true, false]) {
            for (const profile of ["default", "alt", undefined]) {
              if (!codeRegion && !profileRegion && !envRegion) {
                continue;
              }

              const params = {
                withCaller,
                codeRegion,
                envRegion,
                profileRegion,
                providerRegion,
                profile,
              };

              it(`${serializeParams(params)}`, async () => {
                // const region = await resolveStsRegion(params);
                //
                // if (providerRegion) {
                //   expect(region).toBe("provider-region");
                //   return;
                // }
                //
                // if (profileRegion) {
                //   expect(region).toBe(`${profile ?? "default"}-profile-region`);
                //   return;
                // }
                //
                // if (codeRegion && withCaller) {
                //   expect(region).toBe("code-region");
                //   return;
                // }
                //
                // if (envRegion) {
                //   expect(region).toBe("env-region");
                //   return;
                // }
                //
                // expect(region).toBe("us-east-1");
              });
            }
          }
        }
      }
    }
  }
}
