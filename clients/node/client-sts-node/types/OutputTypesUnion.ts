import { AssumeRoleOutput } from "./AssumeRoleOutput";
import { AssumeRoleWithSAMLOutput } from "./AssumeRoleWithSAMLOutput";
import { AssumeRoleWithWebIdentityOutput } from "./AssumeRoleWithWebIdentityOutput";
import { DecodeAuthorizationMessageOutput } from "./DecodeAuthorizationMessageOutput";
import { GetAccessKeyInfoOutput } from "./GetAccessKeyInfoOutput";
import { GetCallerIdentityOutput } from "./GetCallerIdentityOutput";
import { GetFederationTokenOutput } from "./GetFederationTokenOutput";
import { GetSessionTokenOutput } from "./GetSessionTokenOutput";
export type OutputTypesUnion =
  | AssumeRoleOutput
  | AssumeRoleWithSAMLOutput
  | AssumeRoleWithWebIdentityOutput
  | DecodeAuthorizationMessageOutput
  | GetAccessKeyInfoOutput
  | GetCallerIdentityOutput
  | GetFederationTokenOutput
  | GetSessionTokenOutput;
