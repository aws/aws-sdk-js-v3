import { CancelKeyDeletionInput } from "./CancelKeyDeletionInput";
import { ConnectCustomKeyStoreInput } from "./ConnectCustomKeyStoreInput";
import { CreateAliasInput } from "./CreateAliasInput";
import { CreateCustomKeyStoreInput } from "./CreateCustomKeyStoreInput";
import { CreateGrantInput } from "./CreateGrantInput";
import { CreateKeyInput } from "./CreateKeyInput";
import { DecryptInput } from "./DecryptInput";
import { DeleteAliasInput } from "./DeleteAliasInput";
import { DeleteCustomKeyStoreInput } from "./DeleteCustomKeyStoreInput";
import { DeleteImportedKeyMaterialInput } from "./DeleteImportedKeyMaterialInput";
import { DescribeCustomKeyStoresInput } from "./DescribeCustomKeyStoresInput";
import { DescribeKeyInput } from "./DescribeKeyInput";
import { DisableKeyInput } from "./DisableKeyInput";
import { DisableKeyRotationInput } from "./DisableKeyRotationInput";
import { DisconnectCustomKeyStoreInput } from "./DisconnectCustomKeyStoreInput";
import { EnableKeyInput } from "./EnableKeyInput";
import { EnableKeyRotationInput } from "./EnableKeyRotationInput";
import { EncryptInput } from "./EncryptInput";
import { GenerateDataKeyInput } from "./GenerateDataKeyInput";
import { GenerateDataKeyWithoutPlaintextInput } from "./GenerateDataKeyWithoutPlaintextInput";
import { GenerateRandomInput } from "./GenerateRandomInput";
import { GetKeyPolicyInput } from "./GetKeyPolicyInput";
import { GetKeyRotationStatusInput } from "./GetKeyRotationStatusInput";
import { GetParametersForImportInput } from "./GetParametersForImportInput";
import { ImportKeyMaterialInput } from "./ImportKeyMaterialInput";
import { ListAliasesInput } from "./ListAliasesInput";
import { ListGrantsInput } from "./ListGrantsInput";
import { ListKeyPoliciesInput } from "./ListKeyPoliciesInput";
import { ListKeysInput } from "./ListKeysInput";
import { ListResourceTagsInput } from "./ListResourceTagsInput";
import { ListRetirableGrantsInput } from "./ListRetirableGrantsInput";
import { PutKeyPolicyInput } from "./PutKeyPolicyInput";
import { ReEncryptInput } from "./ReEncryptInput";
import { RetireGrantInput } from "./RetireGrantInput";
import { RevokeGrantInput } from "./RevokeGrantInput";
import { ScheduleKeyDeletionInput } from "./ScheduleKeyDeletionInput";
import { TagResourceInput } from "./TagResourceInput";
import { UntagResourceInput } from "./UntagResourceInput";
import { UpdateAliasInput } from "./UpdateAliasInput";
import { UpdateCustomKeyStoreInput } from "./UpdateCustomKeyStoreInput";
import { UpdateKeyDescriptionInput } from "./UpdateKeyDescriptionInput";
export type InputTypesUnion =
  | CancelKeyDeletionInput
  | ConnectCustomKeyStoreInput
  | CreateAliasInput
  | CreateCustomKeyStoreInput
  | CreateGrantInput
  | CreateKeyInput
  | DecryptInput
  | DeleteAliasInput
  | DeleteCustomKeyStoreInput
  | DeleteImportedKeyMaterialInput
  | DescribeCustomKeyStoresInput
  | DescribeKeyInput
  | DisableKeyInput
  | DisableKeyRotationInput
  | DisconnectCustomKeyStoreInput
  | EnableKeyInput
  | EnableKeyRotationInput
  | EncryptInput
  | GenerateDataKeyInput
  | GenerateDataKeyWithoutPlaintextInput
  | GenerateRandomInput
  | GetKeyPolicyInput
  | GetKeyRotationStatusInput
  | GetParametersForImportInput
  | ImportKeyMaterialInput
  | ListAliasesInput
  | ListGrantsInput
  | ListKeyPoliciesInput
  | ListKeysInput
  | ListResourceTagsInput
  | ListRetirableGrantsInput
  | PutKeyPolicyInput
  | ReEncryptInput
  | RetireGrantInput
  | RevokeGrantInput
  | ScheduleKeyDeletionInput
  | TagResourceInput
  | UntagResourceInput
  | UpdateAliasInput
  | UpdateCustomKeyStoreInput
  | UpdateKeyDescriptionInput;
