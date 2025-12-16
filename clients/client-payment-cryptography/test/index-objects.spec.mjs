import {
  AccessDeniedException,
  AccessDeniedException$,
  AddKeyReplicationRegions$,
  AddKeyReplicationRegionsCommand,
  AddKeyReplicationRegionsInput$,
  AddKeyReplicationRegionsOutput$,
  Alias$,
  CertificateSubjectType$,
  ConflictException,
  ConflictException$,
  CreateAlias$,
  CreateAliasCommand,
  CreateAliasInput$,
  CreateAliasOutput$,
  CreateKey$,
  CreateKeyCommand,
  CreateKeyInput$,
  CreateKeyOutput$,
  DeleteAlias$,
  DeleteAliasCommand,
  DeleteAliasInput$,
  DeleteAliasOutput$,
  DeleteKey$,
  DeleteKeyCommand,
  DeleteKeyInput$,
  DeleteKeyOutput$,
  DeriveKeyUsage,
  DiffieHellmanDerivationData$,
  DisableDefaultKeyReplicationRegions$,
  DisableDefaultKeyReplicationRegionsCommand,
  DisableDefaultKeyReplicationRegionsInput$,
  DisableDefaultKeyReplicationRegionsOutput$,
  EnableDefaultKeyReplicationRegions$,
  EnableDefaultKeyReplicationRegionsCommand,
  EnableDefaultKeyReplicationRegionsInput$,
  EnableDefaultKeyReplicationRegionsOutput$,
  ExportAttributes$,
  ExportDiffieHellmanTr31KeyBlock$,
  ExportDukptInitialKey$,
  ExportKey$,
  ExportKeyCommand,
  ExportKeyCryptogram$,
  ExportKeyInput$,
  ExportKeyMaterial$,
  ExportKeyOutput$,
  ExportTr31KeyBlock$,
  ExportTr34KeyBlock$,
  GetAlias$,
  GetAliasCommand,
  GetAliasInput$,
  GetAliasOutput$,
  GetCertificateSigningRequest$,
  GetCertificateSigningRequestCommand,
  GetCertificateSigningRequestInput$,
  GetCertificateSigningRequestOutput$,
  GetDefaultKeyReplicationRegions$,
  GetDefaultKeyReplicationRegionsCommand,
  GetDefaultKeyReplicationRegionsInput$,
  GetDefaultKeyReplicationRegionsOutput$,
  GetKey$,
  GetKeyCommand,
  GetKeyInput$,
  GetKeyOutput$,
  GetParametersForExport$,
  GetParametersForExportCommand,
  GetParametersForExportInput$,
  GetParametersForExportOutput$,
  GetParametersForImport$,
  GetParametersForImportCommand,
  GetParametersForImportInput$,
  GetParametersForImportOutput$,
  GetPublicKeyCertificate$,
  GetPublicKeyCertificateCommand,
  GetPublicKeyCertificateInput$,
  GetPublicKeyCertificateOutput$,
  ImportDiffieHellmanTr31KeyBlock$,
  ImportKey$,
  ImportKeyCommand,
  ImportKeyCryptogram$,
  ImportKeyInput$,
  ImportKeyMaterial$,
  ImportKeyOutput$,
  ImportTr31KeyBlock$,
  ImportTr34KeyBlock$,
  InternalServerException,
  InternalServerException$,
  Key$,
  KeyAlgorithm,
  KeyAttributes$,
  KeyBlockHeaders$,
  KeyCheckValueAlgorithm,
  KeyClass,
  KeyDerivationFunction,
  KeyDerivationHashAlgorithm,
  KeyExportability,
  KeyMaterialType,
  KeyModesOfUse$,
  KeyOrigin,
  KeyReplicationState,
  KeyState,
  KeySummary$,
  KeyUsage,
  ListAliases$,
  ListAliasesCommand,
  ListAliasesInput$,
  ListAliasesOutput$,
  ListKeys$,
  ListKeysCommand,
  ListKeysInput$,
  ListKeysOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  MultiRegionKeyType,
  PaymentCryptography,
  PaymentCryptographyClient,
  PaymentCryptographyServiceException,
  RemoveKeyReplicationRegions$,
  RemoveKeyReplicationRegionsCommand,
  RemoveKeyReplicationRegionsInput$,
  RemoveKeyReplicationRegionsOutput$,
  ReplicationStatusType$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RestoreKey$,
  RestoreKeyCommand,
  RestoreKeyInput$,
  RestoreKeyOutput$,
  RootCertificatePublicKey$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  SigningAlgorithmType,
  StartKeyUsage$,
  StartKeyUsageCommand,
  StartKeyUsageInput$,
  StartKeyUsageOutput$,
  StopKeyUsage$,
  StopKeyUsageCommand,
  StopKeyUsageInput$,
  StopKeyUsageOutput$,
  SymmetricKeyAlgorithm,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  ThrottlingException,
  ThrottlingException$,
  Tr34KeyBlockFormat,
  TrustedCertificatePublicKey$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
  UpdateAlias$,
  UpdateAliasCommand,
  UpdateAliasInput$,
  UpdateAliasOutput$,
  ValidationException,
  ValidationException$,
  WrappedKey$,
  WrappedKeyMaterialFormat,
  WrappingKeySpec,
  paginateListAliases,
  paginateListKeys,
  paginateListTagsForResource,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PaymentCryptographyClient === "function");
assert(typeof PaymentCryptography === "function");
// commands
assert(typeof AddKeyReplicationRegionsCommand === "function");
assert(typeof AddKeyReplicationRegions$ === "object");
assert(typeof CreateAliasCommand === "function");
assert(typeof CreateAlias$ === "object");
assert(typeof CreateKeyCommand === "function");
assert(typeof CreateKey$ === "object");
assert(typeof DeleteAliasCommand === "function");
assert(typeof DeleteAlias$ === "object");
assert(typeof DeleteKeyCommand === "function");
assert(typeof DeleteKey$ === "object");
assert(typeof DisableDefaultKeyReplicationRegionsCommand === "function");
assert(typeof DisableDefaultKeyReplicationRegions$ === "object");
assert(typeof EnableDefaultKeyReplicationRegionsCommand === "function");
assert(typeof EnableDefaultKeyReplicationRegions$ === "object");
assert(typeof ExportKeyCommand === "function");
assert(typeof ExportKey$ === "object");
assert(typeof GetAliasCommand === "function");
assert(typeof GetAlias$ === "object");
assert(typeof GetCertificateSigningRequestCommand === "function");
assert(typeof GetCertificateSigningRequest$ === "object");
assert(typeof GetDefaultKeyReplicationRegionsCommand === "function");
assert(typeof GetDefaultKeyReplicationRegions$ === "object");
assert(typeof GetKeyCommand === "function");
assert(typeof GetKey$ === "object");
assert(typeof GetParametersForExportCommand === "function");
assert(typeof GetParametersForExport$ === "object");
assert(typeof GetParametersForImportCommand === "function");
assert(typeof GetParametersForImport$ === "object");
assert(typeof GetPublicKeyCertificateCommand === "function");
assert(typeof GetPublicKeyCertificate$ === "object");
assert(typeof ImportKeyCommand === "function");
assert(typeof ImportKey$ === "object");
assert(typeof ListAliasesCommand === "function");
assert(typeof ListAliases$ === "object");
assert(typeof ListKeysCommand === "function");
assert(typeof ListKeys$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof RemoveKeyReplicationRegionsCommand === "function");
assert(typeof RemoveKeyReplicationRegions$ === "object");
assert(typeof RestoreKeyCommand === "function");
assert(typeof RestoreKey$ === "object");
assert(typeof StartKeyUsageCommand === "function");
assert(typeof StartKeyUsage$ === "object");
assert(typeof StopKeyUsageCommand === "function");
assert(typeof StopKeyUsage$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAliasCommand === "function");
assert(typeof UpdateAlias$ === "object");
// structural schemas
assert(typeof AddKeyReplicationRegionsInput$ === "object");
assert(typeof AddKeyReplicationRegionsOutput$ === "object");
assert(typeof Alias$ === "object");
assert(typeof CertificateSubjectType$ === "object");
assert(typeof CreateAliasInput$ === "object");
assert(typeof CreateAliasOutput$ === "object");
assert(typeof CreateKeyInput$ === "object");
assert(typeof CreateKeyOutput$ === "object");
assert(typeof DeleteAliasInput$ === "object");
assert(typeof DeleteAliasOutput$ === "object");
assert(typeof DeleteKeyInput$ === "object");
assert(typeof DeleteKeyOutput$ === "object");
assert(typeof DiffieHellmanDerivationData$ === "object");
assert(typeof DisableDefaultKeyReplicationRegionsInput$ === "object");
assert(typeof DisableDefaultKeyReplicationRegionsOutput$ === "object");
assert(typeof EnableDefaultKeyReplicationRegionsInput$ === "object");
assert(typeof EnableDefaultKeyReplicationRegionsOutput$ === "object");
assert(typeof ExportAttributes$ === "object");
assert(typeof ExportDiffieHellmanTr31KeyBlock$ === "object");
assert(typeof ExportDukptInitialKey$ === "object");
assert(typeof ExportKeyCryptogram$ === "object");
assert(typeof ExportKeyInput$ === "object");
assert(typeof ExportKeyMaterial$ === "object");
assert(typeof ExportKeyOutput$ === "object");
assert(typeof ExportTr31KeyBlock$ === "object");
assert(typeof ExportTr34KeyBlock$ === "object");
assert(typeof GetAliasInput$ === "object");
assert(typeof GetAliasOutput$ === "object");
assert(typeof GetCertificateSigningRequestInput$ === "object");
assert(typeof GetCertificateSigningRequestOutput$ === "object");
assert(typeof GetDefaultKeyReplicationRegionsInput$ === "object");
assert(typeof GetDefaultKeyReplicationRegionsOutput$ === "object");
assert(typeof GetKeyInput$ === "object");
assert(typeof GetKeyOutput$ === "object");
assert(typeof GetParametersForExportInput$ === "object");
assert(typeof GetParametersForExportOutput$ === "object");
assert(typeof GetParametersForImportInput$ === "object");
assert(typeof GetParametersForImportOutput$ === "object");
assert(typeof GetPublicKeyCertificateInput$ === "object");
assert(typeof GetPublicKeyCertificateOutput$ === "object");
assert(typeof ImportDiffieHellmanTr31KeyBlock$ === "object");
assert(typeof ImportKeyCryptogram$ === "object");
assert(typeof ImportKeyInput$ === "object");
assert(typeof ImportKeyMaterial$ === "object");
assert(typeof ImportKeyOutput$ === "object");
assert(typeof ImportTr31KeyBlock$ === "object");
assert(typeof ImportTr34KeyBlock$ === "object");
assert(typeof Key$ === "object");
assert(typeof KeyAttributes$ === "object");
assert(typeof KeyBlockHeaders$ === "object");
assert(typeof KeyModesOfUse$ === "object");
assert(typeof KeySummary$ === "object");
assert(typeof ListAliasesInput$ === "object");
assert(typeof ListAliasesOutput$ === "object");
assert(typeof ListKeysInput$ === "object");
assert(typeof ListKeysOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof RemoveKeyReplicationRegionsInput$ === "object");
assert(typeof RemoveKeyReplicationRegionsOutput$ === "object");
assert(typeof ReplicationStatusType$ === "object");
assert(typeof RestoreKeyInput$ === "object");
assert(typeof RestoreKeyOutput$ === "object");
assert(typeof RootCertificatePublicKey$ === "object");
assert(typeof StartKeyUsageInput$ === "object");
assert(typeof StartKeyUsageOutput$ === "object");
assert(typeof StopKeyUsageInput$ === "object");
assert(typeof StopKeyUsageOutput$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof TrustedCertificatePublicKey$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
assert(typeof UpdateAliasInput$ === "object");
assert(typeof UpdateAliasOutput$ === "object");
assert(typeof WrappedKey$ === "object");
// enums
assert(typeof DeriveKeyUsage === "object");
assert(typeof KeyAlgorithm === "object");
assert(typeof KeyCheckValueAlgorithm === "object");
assert(typeof KeyClass === "object");
assert(typeof KeyDerivationFunction === "object");
assert(typeof KeyDerivationHashAlgorithm === "object");
assert(typeof KeyExportability === "object");
assert(typeof KeyMaterialType === "object");
assert(typeof KeyOrigin === "object");
assert(typeof KeyReplicationState === "object");
assert(typeof KeyState === "object");
assert(typeof KeyUsage === "object");
assert(typeof MultiRegionKeyType === "object");
assert(typeof SigningAlgorithmType === "object");
assert(typeof SymmetricKeyAlgorithm === "object");
assert(typeof Tr34KeyBlockFormat === "object");
assert(typeof WrappedKeyMaterialFormat === "object");
assert(typeof WrappingKeySpec === "object");
// errors
assert(AccessDeniedException.prototype instanceof PaymentCryptographyServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof PaymentCryptographyServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof PaymentCryptographyServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof PaymentCryptographyServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof PaymentCryptographyServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ServiceUnavailableException.prototype instanceof PaymentCryptographyServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(ThrottlingException.prototype instanceof PaymentCryptographyServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof PaymentCryptographyServiceException);
assert(typeof ValidationException$ === "object");
assert(PaymentCryptographyServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAliases === "function");
assert(typeof paginateListKeys === "function");
assert(typeof paginateListTagsForResource === "function");
console.log(`PaymentCryptography index test passed.`);
