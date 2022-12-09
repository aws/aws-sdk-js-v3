import { fromProcess } from "@aws-sdk/credential-provider-process";
import { Credentials, Profile } from "@aws-sdk/types";

import { FromIniInit } from "./fromIni";

export interface ProcessProfile extends Profile {
  credential_process: string;
}

export const isProcessProfile = (arg: any): arg is ProcessProfile =>
  Boolean(arg) &&
  typeof arg === "object" &&
  typeof arg.credential_process === "string";

export const resolveProcessCredentials = async (
  options: FromIniInit,
  profile: string,
): Promise<Credentials> =>
  fromProcess({
    ...options,
    profile,
  })();
