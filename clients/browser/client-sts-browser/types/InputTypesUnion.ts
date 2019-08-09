import { AssumeRoleInput } from "./AssumeRoleInput";
import { AssumeRoleWithSAMLInput } from "./AssumeRoleWithSAMLInput";
import { AssumeRoleWithWebIdentityInput } from "./AssumeRoleWithWebIdentityInput";
import { DecodeAuthorizationMessageInput } from "./DecodeAuthorizationMessageInput";
import { GetAccessKeyInfoInput } from "./GetAccessKeyInfoInput";
import { GetCallerIdentityInput } from "./GetCallerIdentityInput";
import { GetFederationTokenInput } from "./GetFederationTokenInput";
import { GetSessionTokenInput } from "./GetSessionTokenInput";
export type InputTypesUnion =
  | AssumeRoleInput
  | AssumeRoleWithSAMLInput
  | AssumeRoleWithWebIdentityInput
  | DecodeAuthorizationMessageInput
  | GetAccessKeyInfoInput
  | GetCallerIdentityInput
  | GetFederationTokenInput
  | GetSessionTokenInput;
