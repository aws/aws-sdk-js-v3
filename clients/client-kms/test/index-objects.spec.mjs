import {
  AlgorithmSpec,
  AlreadyExistsException,
  CancelKeyDeletionCommand,
  CloudHsmClusterInUseException,
  CloudHsmClusterInvalidConfigurationException,
  CloudHsmClusterNotActiveException,
  CloudHsmClusterNotFoundException,
  CloudHsmClusterNotRelatedException,
  ConflictException,
  ConnectCustomKeyStoreCommand,
  ConnectionErrorCodeType,
  ConnectionStateType,
  CreateAliasCommand,
  CreateCustomKeyStoreCommand,
  CreateGrantCommand,
  CreateKeyCommand,
  CustomKeyStoreHasCMKsException,
  CustomKeyStoreInvalidStateException,
  CustomKeyStoreNameInUseException,
  CustomKeyStoreNotFoundException,
  CustomKeyStoreType,
  CustomerMasterKeySpec,
  DataKeyPairSpec,
  DataKeySpec,
  DecryptCommand,
  DeleteAliasCommand,
  DeleteCustomKeyStoreCommand,
  DeleteImportedKeyMaterialCommand,
  DependencyTimeoutException,
  DeriveSharedSecretCommand,
  DescribeCustomKeyStoresCommand,
  DescribeKeyCommand,
  DisableKeyCommand,
  DisableKeyRotationCommand,
  DisabledException,
  DisconnectCustomKeyStoreCommand,
  DryRunOperationException,
  EnableKeyCommand,
  EnableKeyRotationCommand,
  EncryptCommand,
  EncryptionAlgorithmSpec,
  ExpirationModelType,
  ExpiredImportTokenException,
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
  IncorrectKeyException,
  IncorrectKeyMaterialException,
  IncorrectTrustAnchorException,
  InvalidAliasNameException,
  InvalidArnException,
  InvalidCiphertextException,
  InvalidGrantIdException,
  InvalidGrantTokenException,
  InvalidImportTokenException,
  InvalidKeyUsageException,
  InvalidMarkerException,
  KMS,
  KMSClient,
  KMSInternalException,
  KMSInvalidMacException,
  KMSInvalidSignatureException,
  KMSInvalidStateException,
  KMSServiceException,
  KeyAgreementAlgorithmSpec,
  KeyEncryptionMechanism,
  KeyManagerType,
  KeyMaterialState,
  KeySpec,
  KeyState,
  KeyUnavailableException,
  KeyUsageType,
  LimitExceededException,
  ListAliasesCommand,
  ListGrantsCommand,
  ListKeyPoliciesCommand,
  ListKeyRotationsCommand,
  ListKeysCommand,
  ListResourceTagsCommand,
  ListRetirableGrantsCommand,
  MacAlgorithmSpec,
  MalformedPolicyDocumentException,
  MessageType,
  MultiRegionKeyType,
  NotFoundException,
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
  TagException,
  TagResourceCommand,
  UnsupportedOperationException,
  UntagResourceCommand,
  UpdateAliasCommand,
  UpdateCustomKeyStoreCommand,
  UpdateKeyDescriptionCommand,
  UpdatePrimaryRegionCommand,
  VerifyCommand,
  VerifyMacCommand,
  WrappingKeySpec,
  XksKeyAlreadyInUseException,
  XksKeyInvalidConfigurationException,
  XksKeyNotFoundException,
  XksProxyConnectivityType,
  XksProxyIncorrectAuthenticationCredentialException,
  XksProxyInvalidConfigurationException,
  XksProxyInvalidResponseException,
  XksProxyUriEndpointInUseException,
  XksProxyUriInUseException,
  XksProxyUriUnreachableException,
  XksProxyVpcEndpointServiceInUseException,
  XksProxyVpcEndpointServiceInvalidConfigurationException,
  XksProxyVpcEndpointServiceNotFoundException,
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
assert(AlreadyExistsException.prototype instanceof KMSServiceException);
assert(CloudHsmClusterInUseException.prototype instanceof KMSServiceException);
assert(CloudHsmClusterInvalidConfigurationException.prototype instanceof KMSServiceException);
assert(CloudHsmClusterNotActiveException.prototype instanceof KMSServiceException);
assert(CloudHsmClusterNotFoundException.prototype instanceof KMSServiceException);
assert(CloudHsmClusterNotRelatedException.prototype instanceof KMSServiceException);
assert(ConflictException.prototype instanceof KMSServiceException);
assert(CustomKeyStoreHasCMKsException.prototype instanceof KMSServiceException);
assert(CustomKeyStoreInvalidStateException.prototype instanceof KMSServiceException);
assert(CustomKeyStoreNameInUseException.prototype instanceof KMSServiceException);
assert(CustomKeyStoreNotFoundException.prototype instanceof KMSServiceException);
assert(DependencyTimeoutException.prototype instanceof KMSServiceException);
assert(DisabledException.prototype instanceof KMSServiceException);
assert(DryRunOperationException.prototype instanceof KMSServiceException);
assert(ExpiredImportTokenException.prototype instanceof KMSServiceException);
assert(IncorrectKeyException.prototype instanceof KMSServiceException);
assert(IncorrectKeyMaterialException.prototype instanceof KMSServiceException);
assert(IncorrectTrustAnchorException.prototype instanceof KMSServiceException);
assert(InvalidAliasNameException.prototype instanceof KMSServiceException);
assert(InvalidArnException.prototype instanceof KMSServiceException);
assert(InvalidCiphertextException.prototype instanceof KMSServiceException);
assert(InvalidGrantIdException.prototype instanceof KMSServiceException);
assert(InvalidGrantTokenException.prototype instanceof KMSServiceException);
assert(InvalidImportTokenException.prototype instanceof KMSServiceException);
assert(InvalidKeyUsageException.prototype instanceof KMSServiceException);
assert(InvalidMarkerException.prototype instanceof KMSServiceException);
assert(KeyUnavailableException.prototype instanceof KMSServiceException);
assert(KMSInternalException.prototype instanceof KMSServiceException);
assert(KMSInvalidMacException.prototype instanceof KMSServiceException);
assert(KMSInvalidSignatureException.prototype instanceof KMSServiceException);
assert(KMSInvalidStateException.prototype instanceof KMSServiceException);
assert(LimitExceededException.prototype instanceof KMSServiceException);
assert(MalformedPolicyDocumentException.prototype instanceof KMSServiceException);
assert(NotFoundException.prototype instanceof KMSServiceException);
assert(TagException.prototype instanceof KMSServiceException);
assert(UnsupportedOperationException.prototype instanceof KMSServiceException);
assert(XksKeyAlreadyInUseException.prototype instanceof KMSServiceException);
assert(XksKeyInvalidConfigurationException.prototype instanceof KMSServiceException);
assert(XksKeyNotFoundException.prototype instanceof KMSServiceException);
assert(XksProxyIncorrectAuthenticationCredentialException.prototype instanceof KMSServiceException);
assert(XksProxyInvalidConfigurationException.prototype instanceof KMSServiceException);
assert(XksProxyInvalidResponseException.prototype instanceof KMSServiceException);
assert(XksProxyUriEndpointInUseException.prototype instanceof KMSServiceException);
assert(XksProxyUriInUseException.prototype instanceof KMSServiceException);
assert(XksProxyUriUnreachableException.prototype instanceof KMSServiceException);
assert(XksProxyVpcEndpointServiceInUseException.prototype instanceof KMSServiceException);
assert(XksProxyVpcEndpointServiceInvalidConfigurationException.prototype instanceof KMSServiceException);
assert(XksProxyVpcEndpointServiceNotFoundException.prototype instanceof KMSServiceException);
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
