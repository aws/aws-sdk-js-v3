import { CancelRotateSecretOutput } from "./CancelRotateSecretOutput";
import { CreateSecretOutput } from "./CreateSecretOutput";
import { DeleteResourcePolicyOutput } from "./DeleteResourcePolicyOutput";
import { DeleteSecretOutput } from "./DeleteSecretOutput";
import { DescribeSecretOutput } from "./DescribeSecretOutput";
import { GetRandomPasswordOutput } from "./GetRandomPasswordOutput";
import { GetResourcePolicyOutput } from "./GetResourcePolicyOutput";
import { GetSecretValueOutput } from "./GetSecretValueOutput";
import { ListSecretVersionIdsOutput } from "./ListSecretVersionIdsOutput";
import { ListSecretsOutput } from "./ListSecretsOutput";
import { PutResourcePolicyOutput } from "./PutResourcePolicyOutput";
import { PutSecretValueOutput } from "./PutSecretValueOutput";
import { RestoreSecretOutput } from "./RestoreSecretOutput";
import { RotateSecretOutput } from "./RotateSecretOutput";
import { TagResourceOutput } from "./TagResourceOutput";
import { UntagResourceOutput } from "./UntagResourceOutput";
import { UpdateSecretOutput } from "./UpdateSecretOutput";
import { UpdateSecretVersionStageOutput } from "./UpdateSecretVersionStageOutput";
export type OutputTypesUnion =
  | CancelRotateSecretOutput
  | CreateSecretOutput
  | DeleteResourcePolicyOutput
  | DeleteSecretOutput
  | DescribeSecretOutput
  | GetRandomPasswordOutput
  | GetResourcePolicyOutput
  | GetSecretValueOutput
  | ListSecretVersionIdsOutput
  | ListSecretsOutput
  | PutResourcePolicyOutput
  | PutSecretValueOutput
  | RestoreSecretOutput
  | RotateSecretOutput
  | TagResourceOutput
  | UntagResourceOutput
  | UpdateSecretOutput
  | UpdateSecretVersionStageOutput;
