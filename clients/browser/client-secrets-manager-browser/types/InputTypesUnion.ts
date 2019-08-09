import { CancelRotateSecretInput } from "./CancelRotateSecretInput";
import { CreateSecretInput } from "./CreateSecretInput";
import { DeleteResourcePolicyInput } from "./DeleteResourcePolicyInput";
import { DeleteSecretInput } from "./DeleteSecretInput";
import { DescribeSecretInput } from "./DescribeSecretInput";
import { GetRandomPasswordInput } from "./GetRandomPasswordInput";
import { GetResourcePolicyInput } from "./GetResourcePolicyInput";
import { GetSecretValueInput } from "./GetSecretValueInput";
import { ListSecretVersionIdsInput } from "./ListSecretVersionIdsInput";
import { ListSecretsInput } from "./ListSecretsInput";
import { PutResourcePolicyInput } from "./PutResourcePolicyInput";
import { PutSecretValueInput } from "./PutSecretValueInput";
import { RestoreSecretInput } from "./RestoreSecretInput";
import { RotateSecretInput } from "./RotateSecretInput";
import { TagResourceInput } from "./TagResourceInput";
import { UntagResourceInput } from "./UntagResourceInput";
import { UpdateSecretInput } from "./UpdateSecretInput";
import { UpdateSecretVersionStageInput } from "./UpdateSecretVersionStageInput";
export type InputTypesUnion =
  | CancelRotateSecretInput
  | CreateSecretInput
  | DeleteResourcePolicyInput
  | DeleteSecretInput
  | DescribeSecretInput
  | GetRandomPasswordInput
  | GetResourcePolicyInput
  | GetSecretValueInput
  | ListSecretVersionIdsInput
  | ListSecretsInput
  | PutResourcePolicyInput
  | PutSecretValueInput
  | RestoreSecretInput
  | RotateSecretInput
  | TagResourceInput
  | UntagResourceInput
  | UpdateSecretInput
  | UpdateSecretVersionStageInput;
