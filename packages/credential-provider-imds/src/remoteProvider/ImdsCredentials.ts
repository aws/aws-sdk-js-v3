import { Credentials } from "@aws-sdk/types";

export interface ImdsCredentials {
  AccessKeyId: string;
  SecretAccessKey: string;
  Token: string;
  Expiration: string;
}

export function isImdsCredentials(arg: any): arg is ImdsCredentials {
  return (
    Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.AccessKeyId === "string" &&
    typeof arg.SecretAccessKey === "string" &&
    typeof arg.Token === "string" &&
    typeof arg.Expiration === "string"
  );
}

export function fromImdsCredentials(creds: ImdsCredentials): Credentials {
  return {
    accessKeyId: creds.AccessKeyId,
    secretAccessKey: creds.SecretAccessKey,
    sessionToken: creds.Token,
    expiration: new Date(creds.Expiration)
  };
}
