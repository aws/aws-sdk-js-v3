import {
  AlgorithmSpec,
  CancelKeyDeletionCommand,
  ConnectCustomKeyStoreCommand,
  ConnectionErrorCodeType,
  ConnectionStateType,
  CreateAliasCommand,
  CreateCustomKeyStoreCommand,
  CreateGrantCommand,
  CreateKeyCommand,
  CustomKeyStoreType,
  CustomerMasterKeySpec,
  DataKeyPairSpec,
  DataKeySpec,
  DecryptCommand,
  DeleteAliasCommand,
  DeleteCustomKeyStoreCommand,
  DeleteImportedKeyMaterialCommand,
  DeriveSharedSecretCommand,
  DescribeCustomKeyStoresCommand,
  DescribeKeyCommand,
  DisableKeyCommand,
  DisableKeyRotationCommand,
  DisconnectCustomKeyStoreCommand,
  EnableKeyCommand,
  EnableKeyRotationCommand,
  EncryptCommand,
  EncryptionAlgorithmSpec,
  ExpirationModelType,
  GenerateDataKeyCommand,
  GenerateDataKeyPairCommand,
  GenerateDataKeyPairWithoutPlaintextCommand,
  GenerateDataKeyWithoutPlaintextCommand,
  GenerateMacCommand,
  GenerateRandomCommand,
  GetKeyPolicyCommand,
  GetKeyRotationStatusCommand,
  GetParametersForImportCommand,
  GetPublicKeyCommand,
  GrantOperation,
  ImportKeyMaterialCommand,
  ImportState,
  ImportType,
  IncludeKeyMaterial,
  KMS,
  KMSClient,
  KMSServiceException,
  KeyAgreementAlgorithmSpec,
  KeyEncryptionMechanism,
  KeyManagerType,
  KeyMaterialState,
  KeySpec,
  KeyState,
  KeyUsageType,
  ListAliasesCommand,
  ListGrantsCommand,
  ListKeyPoliciesCommand,
  ListKeyRotationsCommand,
  ListKeysCommand,
  ListResourceTagsCommand,
  ListRetirableGrantsCommand,
  MacAlgorithmSpec,
  MessageType,
  MultiRegionKeyType,
  OriginType,
  PutKeyPolicyCommand,
  ReEncryptCommand,
  ReplicateKeyCommand,
  RetireGrantCommand,
  RevokeGrantCommand,
  RotateKeyOnDemandCommand,
  RotationType,
  ScheduleKeyDeletionCommand,
  SignCommand,
  SigningAlgorithmSpec,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAliasCommand,
  UpdateCustomKeyStoreCommand,
  UpdateKeyDescriptionCommand,
  UpdatePrimaryRegionCommand,
  VerifyCommand,
  VerifyMacCommand,
  WrappingKeySpec,
  XksProxyConnectivityType,
  paginateDescribeCustomKeyStores,
  paginateListAliases,
  paginateListGrants,
  paginateListKeyPolicies,
  paginateListKeyRotations,
  paginateListKeys,
  paginateListResourceTags,
  paginateListRetirableGrants,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof KMSClient === "function");
assert(typeof KMS === "function");
// commands
assert(typeof CancelKeyDeletionCommand === "function");
assert(typeof ConnectCustomKeyStoreCommand === "function");
assert(typeof CreateAliasCommand === "function");
assert(typeof CreateCustomKeyStoreCommand === "function");
assert(typeof CreateGrantCommand === "function");
assert(typeof CreateKeyCommand === "function");
assert(typeof DecryptCommand === "function");
assert(typeof DeleteAliasCommand === "function");
assert(typeof DeleteCustomKeyStoreCommand === "function");
assert(typeof DeleteImportedKeyMaterialCommand === "function");
assert(typeof DeriveSharedSecretCommand === "function");
assert(typeof DescribeCustomKeyStoresCommand === "function");
assert(typeof DescribeKeyCommand === "function");
assert(typeof DisableKeyCommand === "function");
assert(typeof DisableKeyRotationCommand === "function");
assert(typeof DisconnectCustomKeyStoreCommand === "function");
assert(typeof EnableKeyCommand === "function");
assert(typeof EnableKeyRotationCommand === "function");
assert(typeof EncryptCommand === "function");
assert(typeof GenerateDataKeyCommand === "function");
assert(typeof GenerateDataKeyPairCommand === "function");
assert(typeof GenerateDataKeyPairWithoutPlaintextCommand === "function");
assert(typeof GenerateDataKeyWithoutPlaintextCommand === "function");
assert(typeof GenerateMacCommand === "function");
assert(typeof GenerateRandomCommand === "function");
assert(typeof GetKeyPolicyCommand === "function");
assert(typeof GetKeyRotationStatusCommand === "function");
assert(typeof GetParametersForImportCommand === "function");
assert(typeof GetPublicKeyCommand === "function");
assert(typeof ImportKeyMaterialCommand === "function");
assert(typeof ListAliasesCommand === "function");
assert(typeof ListGrantsCommand === "function");
assert(typeof ListKeyPoliciesCommand === "function");
assert(typeof ListKeyRotationsCommand === "function");
assert(typeof ListKeysCommand === "function");
assert(typeof ListResourceTagsCommand === "function");
assert(typeof ListRetirableGrantsCommand === "function");
assert(typeof PutKeyPolicyCommand === "function");
assert(typeof ReEncryptCommand === "function");
assert(typeof ReplicateKeyCommand === "function");
assert(typeof RetireGrantCommand === "function");
assert(typeof RevokeGrantCommand === "function");
assert(typeof RotateKeyOnDemandCommand === "function");
assert(typeof ScheduleKeyDeletionCommand === "function");
assert(typeof SignCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAliasCommand === "function");
assert(typeof UpdateCustomKeyStoreCommand === "function");
assert(typeof UpdateKeyDescriptionCommand === "function");
assert(typeof UpdatePrimaryRegionCommand === "function");
assert(typeof VerifyCommand === "function");
assert(typeof VerifyMacCommand === "function");
// enums
assert(typeof AlgorithmSpec === "object");
assert(typeof ConnectionErrorCodeType === "object");
assert(typeof ConnectionStateType === "object");
assert(typeof CustomerMasterKeySpec === "object");
assert(typeof CustomKeyStoreType === "object");
assert(typeof DataKeyPairSpec === "object");
assert(typeof DataKeySpec === "object");
assert(typeof EncryptionAlgorithmSpec === "object");
assert(typeof ExpirationModelType === "object");
assert(typeof GrantOperation === "object");
assert(typeof ImportState === "object");
assert(typeof ImportType === "object");
assert(typeof IncludeKeyMaterial === "object");
assert(typeof KeyAgreementAlgorithmSpec === "object");
assert(typeof KeyEncryptionMechanism === "object");
assert(typeof KeyManagerType === "object");
assert(typeof KeyMaterialState === "object");
assert(typeof KeySpec === "object");
assert(typeof KeyState === "object");
assert(typeof KeyUsageType === "object");
assert(typeof MacAlgorithmSpec === "object");
assert(typeof MessageType === "object");
assert(typeof MultiRegionKeyType === "object");
assert(typeof OriginType === "object");
assert(typeof RotationType === "object");
assert(typeof SigningAlgorithmSpec === "object");
assert(typeof WrappingKeySpec === "object");
assert(typeof XksProxyConnectivityType === "object");
// errors
assert(KMSServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeCustomKeyStores === "function");
assert(typeof paginateListAliases === "function");
assert(typeof paginateListGrants === "function");
assert(typeof paginateListKeyPolicies === "function");
assert(typeof paginateListKeyRotations === "function");
assert(typeof paginateListKeys === "function");
assert(typeof paginateListResourceTags === "function");
assert(typeof paginateListRetirableGrants === "function");
console.log(`KMS index test passed.`);
