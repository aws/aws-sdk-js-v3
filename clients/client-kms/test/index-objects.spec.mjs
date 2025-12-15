import {
  AlgorithmSpec,
  AliasListEntry$,
  AlreadyExistsException,
  AlreadyExistsException$,
  CancelKeyDeletion$,
  CancelKeyDeletionCommand,
  CancelKeyDeletionRequest$,
  CancelKeyDeletionResponse$,
  CloudHsmClusterInUseException,
  CloudHsmClusterInUseException$,
  CloudHsmClusterInvalidConfigurationException,
  CloudHsmClusterInvalidConfigurationException$,
  CloudHsmClusterNotActiveException,
  CloudHsmClusterNotActiveException$,
  CloudHsmClusterNotFoundException,
  CloudHsmClusterNotFoundException$,
  CloudHsmClusterNotRelatedException,
  CloudHsmClusterNotRelatedException$,
  ConflictException,
  ConflictException$,
  ConnectCustomKeyStore$,
  ConnectCustomKeyStoreCommand,
  ConnectCustomKeyStoreRequest$,
  ConnectCustomKeyStoreResponse$,
  ConnectionErrorCodeType,
  ConnectionStateType,
  CreateAlias$,
  CreateAliasCommand,
  CreateAliasRequest$,
  CreateCustomKeyStore$,
  CreateCustomKeyStoreCommand,
  CreateCustomKeyStoreRequest$,
  CreateCustomKeyStoreResponse$,
  CreateGrant$,
  CreateGrantCommand,
  CreateGrantRequest$,
  CreateGrantResponse$,
  CreateKey$,
  CreateKeyCommand,
  CreateKeyRequest$,
  CreateKeyResponse$,
  CustomKeyStoreHasCMKsException,
  CustomKeyStoreHasCMKsException$,
  CustomKeyStoreInvalidStateException,
  CustomKeyStoreInvalidStateException$,
  CustomKeyStoreNameInUseException,
  CustomKeyStoreNameInUseException$,
  CustomKeyStoreNotFoundException,
  CustomKeyStoreNotFoundException$,
  CustomKeyStoreType,
  CustomKeyStoresListEntry$,
  CustomerMasterKeySpec,
  DataKeyPairSpec,
  DataKeySpec,
  Decrypt$,
  DecryptCommand,
  DecryptRequest$,
  DecryptResponse$,
  DeleteAlias$,
  DeleteAliasCommand,
  DeleteAliasRequest$,
  DeleteCustomKeyStore$,
  DeleteCustomKeyStoreCommand,
  DeleteCustomKeyStoreRequest$,
  DeleteCustomKeyStoreResponse$,
  DeleteImportedKeyMaterial$,
  DeleteImportedKeyMaterialCommand,
  DeleteImportedKeyMaterialRequest$,
  DeleteImportedKeyMaterialResponse$,
  DependencyTimeoutException,
  DependencyTimeoutException$,
  DeriveSharedSecret$,
  DeriveSharedSecretCommand,
  DeriveSharedSecretRequest$,
  DeriveSharedSecretResponse$,
  DescribeCustomKeyStores$,
  DescribeCustomKeyStoresCommand,
  DescribeCustomKeyStoresRequest$,
  DescribeCustomKeyStoresResponse$,
  DescribeKey$,
  DescribeKeyCommand,
  DescribeKeyRequest$,
  DescribeKeyResponse$,
  DisableKey$,
  DisableKeyCommand,
  DisableKeyRequest$,
  DisableKeyRotation$,
  DisableKeyRotationCommand,
  DisableKeyRotationRequest$,
  DisabledException,
  DisabledException$,
  DisconnectCustomKeyStore$,
  DisconnectCustomKeyStoreCommand,
  DisconnectCustomKeyStoreRequest$,
  DisconnectCustomKeyStoreResponse$,
  DryRunOperationException,
  DryRunOperationException$,
  EnableKey$,
  EnableKeyCommand,
  EnableKeyRequest$,
  EnableKeyRotation$,
  EnableKeyRotationCommand,
  EnableKeyRotationRequest$,
  Encrypt$,
  EncryptCommand,
  EncryptRequest$,
  EncryptResponse$,
  EncryptionAlgorithmSpec,
  ExpirationModelType,
  ExpiredImportTokenException,
  ExpiredImportTokenException$,
  GenerateDataKey$,
  GenerateDataKeyCommand,
  GenerateDataKeyPair$,
  GenerateDataKeyPairCommand,
  GenerateDataKeyPairRequest$,
  GenerateDataKeyPairResponse$,
  GenerateDataKeyPairWithoutPlaintext$,
  GenerateDataKeyPairWithoutPlaintextCommand,
  GenerateDataKeyPairWithoutPlaintextRequest$,
  GenerateDataKeyPairWithoutPlaintextResponse$,
  GenerateDataKeyRequest$,
  GenerateDataKeyResponse$,
  GenerateDataKeyWithoutPlaintext$,
  GenerateDataKeyWithoutPlaintextCommand,
  GenerateDataKeyWithoutPlaintextRequest$,
  GenerateDataKeyWithoutPlaintextResponse$,
  GenerateMac$,
  GenerateMacCommand,
  GenerateMacRequest$,
  GenerateMacResponse$,
  GenerateRandom$,
  GenerateRandomCommand,
  GenerateRandomRequest$,
  GenerateRandomResponse$,
  GetKeyPolicy$,
  GetKeyPolicyCommand,
  GetKeyPolicyRequest$,
  GetKeyPolicyResponse$,
  GetKeyRotationStatus$,
  GetKeyRotationStatusCommand,
  GetKeyRotationStatusRequest$,
  GetKeyRotationStatusResponse$,
  GetParametersForImport$,
  GetParametersForImportCommand,
  GetParametersForImportRequest$,
  GetParametersForImportResponse$,
  GetPublicKey$,
  GetPublicKeyCommand,
  GetPublicKeyRequest$,
  GetPublicKeyResponse$,
  GrantConstraints$,
  GrantListEntry$,
  GrantOperation,
  ImportKeyMaterial$,
  ImportKeyMaterialCommand,
  ImportKeyMaterialRequest$,
  ImportKeyMaterialResponse$,
  ImportState,
  ImportType,
  IncludeKeyMaterial,
  IncorrectKeyException,
  IncorrectKeyException$,
  IncorrectKeyMaterialException,
  IncorrectKeyMaterialException$,
  IncorrectTrustAnchorException,
  IncorrectTrustAnchorException$,
  InvalidAliasNameException,
  InvalidAliasNameException$,
  InvalidArnException,
  InvalidArnException$,
  InvalidCiphertextException,
  InvalidCiphertextException$,
  InvalidGrantIdException,
  InvalidGrantIdException$,
  InvalidGrantTokenException,
  InvalidGrantTokenException$,
  InvalidImportTokenException,
  InvalidImportTokenException$,
  InvalidKeyUsageException,
  InvalidKeyUsageException$,
  InvalidMarkerException,
  InvalidMarkerException$,
  KMS,
  KMSClient,
  KMSInternalException,
  KMSInternalException$,
  KMSInvalidMacException,
  KMSInvalidMacException$,
  KMSInvalidSignatureException,
  KMSInvalidSignatureException$,
  KMSInvalidStateException,
  KMSInvalidStateException$,
  KMSServiceException,
  KeyAgreementAlgorithmSpec,
  KeyEncryptionMechanism,
  KeyListEntry$,
  KeyManagerType,
  KeyMaterialState,
  KeyMetadata$,
  KeySpec,
  KeyState,
  KeyUnavailableException,
  KeyUnavailableException$,
  KeyUsageType,
  LimitExceededException,
  LimitExceededException$,
  ListAliases$,
  ListAliasesCommand,
  ListAliasesRequest$,
  ListAliasesResponse$,
  ListGrants$,
  ListGrantsCommand,
  ListGrantsRequest$,
  ListGrantsResponse$,
  ListKeyPolicies$,
  ListKeyPoliciesCommand,
  ListKeyPoliciesRequest$,
  ListKeyPoliciesResponse$,
  ListKeyRotations$,
  ListKeyRotationsCommand,
  ListKeyRotationsRequest$,
  ListKeyRotationsResponse$,
  ListKeys$,
  ListKeysCommand,
  ListKeysRequest$,
  ListKeysResponse$,
  ListResourceTags$,
  ListResourceTagsCommand,
  ListResourceTagsRequest$,
  ListResourceTagsResponse$,
  ListRetirableGrants$,
  ListRetirableGrantsCommand,
  ListRetirableGrantsRequest$,
  MacAlgorithmSpec,
  MalformedPolicyDocumentException,
  MalformedPolicyDocumentException$,
  MessageType,
  MultiRegionConfiguration$,
  MultiRegionKey$,
  MultiRegionKeyType,
  NotFoundException,
  NotFoundException$,
  OriginType,
  PutKeyPolicy$,
  PutKeyPolicyCommand,
  PutKeyPolicyRequest$,
  ReEncrypt$,
  ReEncryptCommand,
  ReEncryptRequest$,
  ReEncryptResponse$,
  RecipientInfo$,
  ReplicateKey$,
  ReplicateKeyCommand,
  ReplicateKeyRequest$,
  ReplicateKeyResponse$,
  RetireGrant$,
  RetireGrantCommand,
  RetireGrantRequest$,
  RevokeGrant$,
  RevokeGrantCommand,
  RevokeGrantRequest$,
  RotateKeyOnDemand$,
  RotateKeyOnDemandCommand,
  RotateKeyOnDemandRequest$,
  RotateKeyOnDemandResponse$,
  RotationType,
  RotationsListEntry$,
  ScheduleKeyDeletion$,
  ScheduleKeyDeletionCommand,
  ScheduleKeyDeletionRequest$,
  ScheduleKeyDeletionResponse$,
  Sign$,
  SignCommand,
  SignRequest$,
  SignResponse$,
  SigningAlgorithmSpec,
  Tag$,
  TagException,
  TagException$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  UnsupportedOperationException,
  UnsupportedOperationException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateAlias$,
  UpdateAliasCommand,
  UpdateAliasRequest$,
  UpdateCustomKeyStore$,
  UpdateCustomKeyStoreCommand,
  UpdateCustomKeyStoreRequest$,
  UpdateCustomKeyStoreResponse$,
  UpdateKeyDescription$,
  UpdateKeyDescriptionCommand,
  UpdateKeyDescriptionRequest$,
  UpdatePrimaryRegion$,
  UpdatePrimaryRegionCommand,
  UpdatePrimaryRegionRequest$,
  Verify$,
  VerifyCommand,
  VerifyMac$,
  VerifyMacCommand,
  VerifyMacRequest$,
  VerifyMacResponse$,
  VerifyRequest$,
  VerifyResponse$,
  WrappingKeySpec,
  XksKeyAlreadyInUseException,
  XksKeyAlreadyInUseException$,
  XksKeyConfigurationType$,
  XksKeyInvalidConfigurationException,
  XksKeyInvalidConfigurationException$,
  XksKeyNotFoundException,
  XksKeyNotFoundException$,
  XksProxyAuthenticationCredentialType$,
  XksProxyConfigurationType$,
  XksProxyConnectivityType,
  XksProxyIncorrectAuthenticationCredentialException,
  XksProxyIncorrectAuthenticationCredentialException$,
  XksProxyInvalidConfigurationException,
  XksProxyInvalidConfigurationException$,
  XksProxyInvalidResponseException,
  XksProxyInvalidResponseException$,
  XksProxyUriEndpointInUseException,
  XksProxyUriEndpointInUseException$,
  XksProxyUriInUseException,
  XksProxyUriInUseException$,
  XksProxyUriUnreachableException,
  XksProxyUriUnreachableException$,
  XksProxyVpcEndpointServiceInUseException,
  XksProxyVpcEndpointServiceInUseException$,
  XksProxyVpcEndpointServiceInvalidConfigurationException,
  XksProxyVpcEndpointServiceInvalidConfigurationException$,
  XksProxyVpcEndpointServiceNotFoundException,
  XksProxyVpcEndpointServiceNotFoundException$,
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
assert(typeof CancelKeyDeletion$ === "object");
assert(typeof ConnectCustomKeyStoreCommand === "function");
assert(typeof ConnectCustomKeyStore$ === "object");
assert(typeof CreateAliasCommand === "function");
assert(typeof CreateAlias$ === "object");
assert(typeof CreateCustomKeyStoreCommand === "function");
assert(typeof CreateCustomKeyStore$ === "object");
assert(typeof CreateGrantCommand === "function");
assert(typeof CreateGrant$ === "object");
assert(typeof CreateKeyCommand === "function");
assert(typeof CreateKey$ === "object");
assert(typeof DecryptCommand === "function");
assert(typeof Decrypt$ === "object");
assert(typeof DeleteAliasCommand === "function");
assert(typeof DeleteAlias$ === "object");
assert(typeof DeleteCustomKeyStoreCommand === "function");
assert(typeof DeleteCustomKeyStore$ === "object");
assert(typeof DeleteImportedKeyMaterialCommand === "function");
assert(typeof DeleteImportedKeyMaterial$ === "object");
assert(typeof DeriveSharedSecretCommand === "function");
assert(typeof DeriveSharedSecret$ === "object");
assert(typeof DescribeCustomKeyStoresCommand === "function");
assert(typeof DescribeCustomKeyStores$ === "object");
assert(typeof DescribeKeyCommand === "function");
assert(typeof DescribeKey$ === "object");
assert(typeof DisableKeyCommand === "function");
assert(typeof DisableKey$ === "object");
assert(typeof DisableKeyRotationCommand === "function");
assert(typeof DisableKeyRotation$ === "object");
assert(typeof DisconnectCustomKeyStoreCommand === "function");
assert(typeof DisconnectCustomKeyStore$ === "object");
assert(typeof EnableKeyCommand === "function");
assert(typeof EnableKey$ === "object");
assert(typeof EnableKeyRotationCommand === "function");
assert(typeof EnableKeyRotation$ === "object");
assert(typeof EncryptCommand === "function");
assert(typeof Encrypt$ === "object");
assert(typeof GenerateDataKeyCommand === "function");
assert(typeof GenerateDataKey$ === "object");
assert(typeof GenerateDataKeyPairCommand === "function");
assert(typeof GenerateDataKeyPair$ === "object");
assert(typeof GenerateDataKeyPairWithoutPlaintextCommand === "function");
assert(typeof GenerateDataKeyPairWithoutPlaintext$ === "object");
assert(typeof GenerateDataKeyWithoutPlaintextCommand === "function");
assert(typeof GenerateDataKeyWithoutPlaintext$ === "object");
assert(typeof GenerateMacCommand === "function");
assert(typeof GenerateMac$ === "object");
assert(typeof GenerateRandomCommand === "function");
assert(typeof GenerateRandom$ === "object");
assert(typeof GetKeyPolicyCommand === "function");
assert(typeof GetKeyPolicy$ === "object");
assert(typeof GetKeyRotationStatusCommand === "function");
assert(typeof GetKeyRotationStatus$ === "object");
assert(typeof GetParametersForImportCommand === "function");
assert(typeof GetParametersForImport$ === "object");
assert(typeof GetPublicKeyCommand === "function");
assert(typeof GetPublicKey$ === "object");
assert(typeof ImportKeyMaterialCommand === "function");
assert(typeof ImportKeyMaterial$ === "object");
assert(typeof ListAliasesCommand === "function");
assert(typeof ListAliases$ === "object");
assert(typeof ListGrantsCommand === "function");
assert(typeof ListGrants$ === "object");
assert(typeof ListKeyPoliciesCommand === "function");
assert(typeof ListKeyPolicies$ === "object");
assert(typeof ListKeyRotationsCommand === "function");
assert(typeof ListKeyRotations$ === "object");
assert(typeof ListKeysCommand === "function");
assert(typeof ListKeys$ === "object");
assert(typeof ListResourceTagsCommand === "function");
assert(typeof ListResourceTags$ === "object");
assert(typeof ListRetirableGrantsCommand === "function");
assert(typeof ListRetirableGrants$ === "object");
assert(typeof PutKeyPolicyCommand === "function");
assert(typeof PutKeyPolicy$ === "object");
assert(typeof ReEncryptCommand === "function");
assert(typeof ReEncrypt$ === "object");
assert(typeof ReplicateKeyCommand === "function");
assert(typeof ReplicateKey$ === "object");
assert(typeof RetireGrantCommand === "function");
assert(typeof RetireGrant$ === "object");
assert(typeof RevokeGrantCommand === "function");
assert(typeof RevokeGrant$ === "object");
assert(typeof RotateKeyOnDemandCommand === "function");
assert(typeof RotateKeyOnDemand$ === "object");
assert(typeof ScheduleKeyDeletionCommand === "function");
assert(typeof ScheduleKeyDeletion$ === "object");
assert(typeof SignCommand === "function");
assert(typeof Sign$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAliasCommand === "function");
assert(typeof UpdateAlias$ === "object");
assert(typeof UpdateCustomKeyStoreCommand === "function");
assert(typeof UpdateCustomKeyStore$ === "object");
assert(typeof UpdateKeyDescriptionCommand === "function");
assert(typeof UpdateKeyDescription$ === "object");
assert(typeof UpdatePrimaryRegionCommand === "function");
assert(typeof UpdatePrimaryRegion$ === "object");
assert(typeof VerifyCommand === "function");
assert(typeof Verify$ === "object");
assert(typeof VerifyMacCommand === "function");
assert(typeof VerifyMac$ === "object");
// structural schemas
assert(typeof AliasListEntry$ === "object");
assert(typeof CancelKeyDeletionRequest$ === "object");
assert(typeof CancelKeyDeletionResponse$ === "object");
assert(typeof ConnectCustomKeyStoreRequest$ === "object");
assert(typeof ConnectCustomKeyStoreResponse$ === "object");
assert(typeof CreateAliasRequest$ === "object");
assert(typeof CreateCustomKeyStoreRequest$ === "object");
assert(typeof CreateCustomKeyStoreResponse$ === "object");
assert(typeof CreateGrantRequest$ === "object");
assert(typeof CreateGrantResponse$ === "object");
assert(typeof CreateKeyRequest$ === "object");
assert(typeof CreateKeyResponse$ === "object");
assert(typeof CustomKeyStoresListEntry$ === "object");
assert(typeof DecryptRequest$ === "object");
assert(typeof DecryptResponse$ === "object");
assert(typeof DeleteAliasRequest$ === "object");
assert(typeof DeleteCustomKeyStoreRequest$ === "object");
assert(typeof DeleteCustomKeyStoreResponse$ === "object");
assert(typeof DeleteImportedKeyMaterialRequest$ === "object");
assert(typeof DeleteImportedKeyMaterialResponse$ === "object");
assert(typeof DeriveSharedSecretRequest$ === "object");
assert(typeof DeriveSharedSecretResponse$ === "object");
assert(typeof DescribeCustomKeyStoresRequest$ === "object");
assert(typeof DescribeCustomKeyStoresResponse$ === "object");
assert(typeof DescribeKeyRequest$ === "object");
assert(typeof DescribeKeyResponse$ === "object");
assert(typeof DisableKeyRequest$ === "object");
assert(typeof DisableKeyRotationRequest$ === "object");
assert(typeof DisconnectCustomKeyStoreRequest$ === "object");
assert(typeof DisconnectCustomKeyStoreResponse$ === "object");
assert(typeof EnableKeyRequest$ === "object");
assert(typeof EnableKeyRotationRequest$ === "object");
assert(typeof EncryptRequest$ === "object");
assert(typeof EncryptResponse$ === "object");
assert(typeof GenerateDataKeyPairRequest$ === "object");
assert(typeof GenerateDataKeyPairResponse$ === "object");
assert(typeof GenerateDataKeyPairWithoutPlaintextRequest$ === "object");
assert(typeof GenerateDataKeyPairWithoutPlaintextResponse$ === "object");
assert(typeof GenerateDataKeyRequest$ === "object");
assert(typeof GenerateDataKeyResponse$ === "object");
assert(typeof GenerateDataKeyWithoutPlaintextRequest$ === "object");
assert(typeof GenerateDataKeyWithoutPlaintextResponse$ === "object");
assert(typeof GenerateMacRequest$ === "object");
assert(typeof GenerateMacResponse$ === "object");
assert(typeof GenerateRandomRequest$ === "object");
assert(typeof GenerateRandomResponse$ === "object");
assert(typeof GetKeyPolicyRequest$ === "object");
assert(typeof GetKeyPolicyResponse$ === "object");
assert(typeof GetKeyRotationStatusRequest$ === "object");
assert(typeof GetKeyRotationStatusResponse$ === "object");
assert(typeof GetParametersForImportRequest$ === "object");
assert(typeof GetParametersForImportResponse$ === "object");
assert(typeof GetPublicKeyRequest$ === "object");
assert(typeof GetPublicKeyResponse$ === "object");
assert(typeof GrantConstraints$ === "object");
assert(typeof GrantListEntry$ === "object");
assert(typeof ImportKeyMaterialRequest$ === "object");
assert(typeof ImportKeyMaterialResponse$ === "object");
assert(typeof KeyListEntry$ === "object");
assert(typeof KeyMetadata$ === "object");
assert(typeof ListAliasesRequest$ === "object");
assert(typeof ListAliasesResponse$ === "object");
assert(typeof ListGrantsRequest$ === "object");
assert(typeof ListGrantsResponse$ === "object");
assert(typeof ListKeyPoliciesRequest$ === "object");
assert(typeof ListKeyPoliciesResponse$ === "object");
assert(typeof ListKeyRotationsRequest$ === "object");
assert(typeof ListKeyRotationsResponse$ === "object");
assert(typeof ListKeysRequest$ === "object");
assert(typeof ListKeysResponse$ === "object");
assert(typeof ListResourceTagsRequest$ === "object");
assert(typeof ListResourceTagsResponse$ === "object");
assert(typeof ListRetirableGrantsRequest$ === "object");
assert(typeof MultiRegionConfiguration$ === "object");
assert(typeof MultiRegionKey$ === "object");
assert(typeof PutKeyPolicyRequest$ === "object");
assert(typeof RecipientInfo$ === "object");
assert(typeof ReEncryptRequest$ === "object");
assert(typeof ReEncryptResponse$ === "object");
assert(typeof ReplicateKeyRequest$ === "object");
assert(typeof ReplicateKeyResponse$ === "object");
assert(typeof RetireGrantRequest$ === "object");
assert(typeof RevokeGrantRequest$ === "object");
assert(typeof RotateKeyOnDemandRequest$ === "object");
assert(typeof RotateKeyOnDemandResponse$ === "object");
assert(typeof RotationsListEntry$ === "object");
assert(typeof ScheduleKeyDeletionRequest$ === "object");
assert(typeof ScheduleKeyDeletionResponse$ === "object");
assert(typeof SignRequest$ === "object");
assert(typeof SignResponse$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateAliasRequest$ === "object");
assert(typeof UpdateCustomKeyStoreRequest$ === "object");
assert(typeof UpdateCustomKeyStoreResponse$ === "object");
assert(typeof UpdateKeyDescriptionRequest$ === "object");
assert(typeof UpdatePrimaryRegionRequest$ === "object");
assert(typeof VerifyMacRequest$ === "object");
assert(typeof VerifyMacResponse$ === "object");
assert(typeof VerifyRequest$ === "object");
assert(typeof VerifyResponse$ === "object");
assert(typeof XksKeyConfigurationType$ === "object");
assert(typeof XksProxyAuthenticationCredentialType$ === "object");
assert(typeof XksProxyConfigurationType$ === "object");
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
assert(typeof AlreadyExistsException$ === "object");
assert(CloudHsmClusterInUseException.prototype instanceof KMSServiceException);
assert(typeof CloudHsmClusterInUseException$ === "object");
assert(CloudHsmClusterInvalidConfigurationException.prototype instanceof KMSServiceException);
assert(typeof CloudHsmClusterInvalidConfigurationException$ === "object");
assert(CloudHsmClusterNotActiveException.prototype instanceof KMSServiceException);
assert(typeof CloudHsmClusterNotActiveException$ === "object");
assert(CloudHsmClusterNotFoundException.prototype instanceof KMSServiceException);
assert(typeof CloudHsmClusterNotFoundException$ === "object");
assert(CloudHsmClusterNotRelatedException.prototype instanceof KMSServiceException);
assert(typeof CloudHsmClusterNotRelatedException$ === "object");
assert(ConflictException.prototype instanceof KMSServiceException);
assert(typeof ConflictException$ === "object");
assert(CustomKeyStoreHasCMKsException.prototype instanceof KMSServiceException);
assert(typeof CustomKeyStoreHasCMKsException$ === "object");
assert(CustomKeyStoreInvalidStateException.prototype instanceof KMSServiceException);
assert(typeof CustomKeyStoreInvalidStateException$ === "object");
assert(CustomKeyStoreNameInUseException.prototype instanceof KMSServiceException);
assert(typeof CustomKeyStoreNameInUseException$ === "object");
assert(CustomKeyStoreNotFoundException.prototype instanceof KMSServiceException);
assert(typeof CustomKeyStoreNotFoundException$ === "object");
assert(DependencyTimeoutException.prototype instanceof KMSServiceException);
assert(typeof DependencyTimeoutException$ === "object");
assert(DisabledException.prototype instanceof KMSServiceException);
assert(typeof DisabledException$ === "object");
assert(DryRunOperationException.prototype instanceof KMSServiceException);
assert(typeof DryRunOperationException$ === "object");
assert(ExpiredImportTokenException.prototype instanceof KMSServiceException);
assert(typeof ExpiredImportTokenException$ === "object");
assert(IncorrectKeyException.prototype instanceof KMSServiceException);
assert(typeof IncorrectKeyException$ === "object");
assert(IncorrectKeyMaterialException.prototype instanceof KMSServiceException);
assert(typeof IncorrectKeyMaterialException$ === "object");
assert(IncorrectTrustAnchorException.prototype instanceof KMSServiceException);
assert(typeof IncorrectTrustAnchorException$ === "object");
assert(InvalidAliasNameException.prototype instanceof KMSServiceException);
assert(typeof InvalidAliasNameException$ === "object");
assert(InvalidArnException.prototype instanceof KMSServiceException);
assert(typeof InvalidArnException$ === "object");
assert(InvalidCiphertextException.prototype instanceof KMSServiceException);
assert(typeof InvalidCiphertextException$ === "object");
assert(InvalidGrantIdException.prototype instanceof KMSServiceException);
assert(typeof InvalidGrantIdException$ === "object");
assert(InvalidGrantTokenException.prototype instanceof KMSServiceException);
assert(typeof InvalidGrantTokenException$ === "object");
assert(InvalidImportTokenException.prototype instanceof KMSServiceException);
assert(typeof InvalidImportTokenException$ === "object");
assert(InvalidKeyUsageException.prototype instanceof KMSServiceException);
assert(typeof InvalidKeyUsageException$ === "object");
assert(InvalidMarkerException.prototype instanceof KMSServiceException);
assert(typeof InvalidMarkerException$ === "object");
assert(KeyUnavailableException.prototype instanceof KMSServiceException);
assert(typeof KeyUnavailableException$ === "object");
assert(KMSInternalException.prototype instanceof KMSServiceException);
assert(typeof KMSInternalException$ === "object");
assert(KMSInvalidMacException.prototype instanceof KMSServiceException);
assert(typeof KMSInvalidMacException$ === "object");
assert(KMSInvalidSignatureException.prototype instanceof KMSServiceException);
assert(typeof KMSInvalidSignatureException$ === "object");
assert(KMSInvalidStateException.prototype instanceof KMSServiceException);
assert(typeof KMSInvalidStateException$ === "object");
assert(LimitExceededException.prototype instanceof KMSServiceException);
assert(typeof LimitExceededException$ === "object");
assert(MalformedPolicyDocumentException.prototype instanceof KMSServiceException);
assert(typeof MalformedPolicyDocumentException$ === "object");
assert(NotFoundException.prototype instanceof KMSServiceException);
assert(typeof NotFoundException$ === "object");
assert(TagException.prototype instanceof KMSServiceException);
assert(typeof TagException$ === "object");
assert(UnsupportedOperationException.prototype instanceof KMSServiceException);
assert(typeof UnsupportedOperationException$ === "object");
assert(XksKeyAlreadyInUseException.prototype instanceof KMSServiceException);
assert(typeof XksKeyAlreadyInUseException$ === "object");
assert(XksKeyInvalidConfigurationException.prototype instanceof KMSServiceException);
assert(typeof XksKeyInvalidConfigurationException$ === "object");
assert(XksKeyNotFoundException.prototype instanceof KMSServiceException);
assert(typeof XksKeyNotFoundException$ === "object");
assert(XksProxyIncorrectAuthenticationCredentialException.prototype instanceof KMSServiceException);
assert(typeof XksProxyIncorrectAuthenticationCredentialException$ === "object");
assert(XksProxyInvalidConfigurationException.prototype instanceof KMSServiceException);
assert(typeof XksProxyInvalidConfigurationException$ === "object");
assert(XksProxyInvalidResponseException.prototype instanceof KMSServiceException);
assert(typeof XksProxyInvalidResponseException$ === "object");
assert(XksProxyUriEndpointInUseException.prototype instanceof KMSServiceException);
assert(typeof XksProxyUriEndpointInUseException$ === "object");
assert(XksProxyUriInUseException.prototype instanceof KMSServiceException);
assert(typeof XksProxyUriInUseException$ === "object");
assert(XksProxyUriUnreachableException.prototype instanceof KMSServiceException);
assert(typeof XksProxyUriUnreachableException$ === "object");
assert(XksProxyVpcEndpointServiceInUseException.prototype instanceof KMSServiceException);
assert(typeof XksProxyVpcEndpointServiceInUseException$ === "object");
assert(XksProxyVpcEndpointServiceInvalidConfigurationException.prototype instanceof KMSServiceException);
assert(typeof XksProxyVpcEndpointServiceInvalidConfigurationException$ === "object");
assert(XksProxyVpcEndpointServiceNotFoundException.prototype instanceof KMSServiceException);
assert(typeof XksProxyVpcEndpointServiceNotFoundException$ === "object");
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
