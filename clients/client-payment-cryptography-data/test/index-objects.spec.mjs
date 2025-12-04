import {
  DecryptDataCommand,
  DukptDerivationType,
  DukptEncryptionMode,
  DukptKeyVariant,
  EmvEncryptionMode,
  EmvMajorKeyDerivationMode,
  EncryptDataCommand,
  EncryptionMode,
  GenerateCardValidationDataCommand,
  GenerateMacCommand,
  GenerateMacEmvPinChangeCommand,
  GeneratePinDataCommand,
  KeyCheckValueAlgorithm,
  KeyDerivationFunction,
  KeyDerivationHashAlgorithm,
  MacAlgorithm,
  MajorKeyDerivationMode,
  PaddingType,
  PaymentCryptographyData,
  PaymentCryptographyDataClient,
  PaymentCryptographyDataServiceException,
  PinBlockFormatForEmvPinChange,
  PinBlockFormatForPinData,
  PinBlockLengthPosition,
  PinBlockPaddingType,
  ReEncryptDataCommand,
  SessionKeyDerivationMode,
  SymmetricKeyAlgorithm,
  TranslateKeyMaterialCommand,
  TranslatePinDataCommand,
  VerifyAuthRequestCryptogramCommand,
  VerifyCardValidationDataCommand,
  VerifyMacCommand,
  VerifyPinDataCommand,
  WrappedKeyMaterialFormat,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PaymentCryptographyDataClient === "function")
assert(typeof PaymentCryptographyData === "function")
// commands
assert(typeof DecryptDataCommand === "function")
assert(typeof EncryptDataCommand === "function")
assert(typeof GenerateCardValidationDataCommand === "function")
assert(typeof GenerateMacCommand === "function")
assert(typeof GenerateMacEmvPinChangeCommand === "function")
assert(typeof GeneratePinDataCommand === "function")
assert(typeof ReEncryptDataCommand === "function")
assert(typeof TranslateKeyMaterialCommand === "function")
assert(typeof TranslatePinDataCommand === "function")
assert(typeof VerifyAuthRequestCryptogramCommand === "function")
assert(typeof VerifyCardValidationDataCommand === "function")
assert(typeof VerifyMacCommand === "function")
assert(typeof VerifyPinDataCommand === "function")
// enums
assert(typeof DukptDerivationType === "object");
assert(typeof DukptEncryptionMode === "object");
assert(typeof DukptKeyVariant === "object");
assert(typeof EmvEncryptionMode === "object");
assert(typeof EmvMajorKeyDerivationMode === "object");
assert(typeof EncryptionMode === "object");
assert(typeof KeyCheckValueAlgorithm === "object");
assert(typeof KeyDerivationFunction === "object");
assert(typeof KeyDerivationHashAlgorithm === "object");
assert(typeof MacAlgorithm === "object");
assert(typeof MajorKeyDerivationMode === "object");
assert(typeof PaddingType === "object");
assert(typeof PinBlockFormatForEmvPinChange === "object");
assert(typeof PinBlockFormatForPinData === "object");
assert(typeof PinBlockLengthPosition === "object");
assert(typeof PinBlockPaddingType === "object");
assert(typeof SessionKeyDerivationMode === "object");
assert(typeof SymmetricKeyAlgorithm === "object");
assert(typeof WrappedKeyMaterialFormat === "object");
// errors
assert(PaymentCryptographyDataServiceException.prototype instanceof Error)
console.log(`PaymentCryptographyData index test passed.`);
