import { setCredentialFeature } from "@aws-sdk/core/client";
import type { Credentials, Profile } from "@aws-sdk/types";

import type { FromIniInit } from "./fromIni";

/**
 * @internal
 */
export interface ProcessProfile extends Profile {
  credential_process: string;
}

/**
 * @internal
 */
export const isProcessProfile = (arg: any): arg is ProcessProfile =>
  Boolean(arg) && typeof arg === "object" && typeof arg.credential_process === "string";

/**
 * @internal
 */
export const resolveProcessCredentials = async (options: FromIniInit, profile: string): Promise<Credentials> => {
  const { fromProcess } = await import("@aws-sdk/credential-provider-process");
  const credentials = await fromProcess({
    ...options,
    profile,
  })();
  return setCredentialFeature(credentials, "CREDENTIALS_PROFILE_PROCESS", "v");
};
