import {
  AddKeyReplicationRegionsCommand,
  CreateAliasCommand,
  CreateKeyCommand,
  DeleteAliasCommand,
  DeleteKeyCommand,
  DeriveKeyUsage,
  DisableDefaultKeyReplicationRegionsCommand,
  EnableDefaultKeyReplicationRegionsCommand,
  ExportKeyCommand,
  GetAliasCommand,
  GetCertificateSigningRequestCommand,
  GetDefaultKeyReplicationRegionsCommand,
  GetKeyCommand,
  GetParametersForExportCommand,
  GetParametersForImportCommand,
  GetPublicKeyCertificateCommand,
  ImportKeyCommand,
  KeyAlgorithm,
  KeyCheckValueAlgorithm,
  KeyClass,
  KeyDerivationFunction,
  KeyDerivationHashAlgorithm,
  KeyExportability,
  KeyMaterialType,
  KeyOrigin,
  KeyReplicationState,
  KeyState,
  KeyUsage,
  ListAliasesCommand,
  ListKeysCommand,
  ListTagsForResourceCommand,
  MultiRegionKeyType,
  PaymentCryptography,
  PaymentCryptographyClient,
  PaymentCryptographyServiceException,
  RemoveKeyReplicationRegionsCommand,
  RestoreKeyCommand,
  SigningAlgorithmType,
  StartKeyUsageCommand,
  StopKeyUsageCommand,
  SymmetricKeyAlgorithm,
  TagResourceCommand,
  Tr34KeyBlockFormat,
  UntagResourceCommand,
  UpdateAliasCommand,
  WrappedKeyMaterialFormat,
  WrappingKeySpec,
  paginateListAliases,
  paginateListKeys,
  paginateListTagsForResource,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PaymentCryptographyClient === "function")
assert(typeof PaymentCryptography === "function")
// commands
assert(typeof AddKeyReplicationRegionsCommand === "function")
assert(typeof CreateAliasCommand === "function")
assert(typeof CreateKeyCommand === "function")
assert(typeof DeleteAliasCommand === "function")
assert(typeof DeleteKeyCommand === "function")
assert(typeof DisableDefaultKeyReplicationRegionsCommand === "function")
assert(typeof EnableDefaultKeyReplicationRegionsCommand === "function")
assert(typeof ExportKeyCommand === "function")
assert(typeof GetAliasCommand === "function")
assert(typeof GetCertificateSigningRequestCommand === "function")
assert(typeof GetDefaultKeyReplicationRegionsCommand === "function")
assert(typeof GetKeyCommand === "function")
assert(typeof GetParametersForExportCommand === "function")
assert(typeof GetParametersForImportCommand === "function")
assert(typeof GetPublicKeyCertificateCommand === "function")
assert(typeof ImportKeyCommand === "function")
assert(typeof ListAliasesCommand === "function")
assert(typeof ListKeysCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof RemoveKeyReplicationRegionsCommand === "function")
assert(typeof RestoreKeyCommand === "function")
assert(typeof StartKeyUsageCommand === "function")
assert(typeof StopKeyUsageCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateAliasCommand === "function")
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
assert(PaymentCryptographyServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListAliases === "function")
assert(typeof paginateListKeys === "function")
assert(typeof paginateListTagsForResource === "function")
console.log(`PaymentCryptography index test passed.`);
