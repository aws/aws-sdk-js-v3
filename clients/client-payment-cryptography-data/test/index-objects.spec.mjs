import {
  AccessDeniedException,
  AccessDeniedException$,
  AmexAttributes$,
  AmexCardSecurityCodeVersion1$,
  AmexCardSecurityCodeVersion2$,
  As2805KekValidationType$,
  As2805PekDerivationAttributes$,
  AsymmetricEncryptionAttributes$,
  CardGenerationAttributes$,
  CardHolderVerificationValue$,
  CardVerificationAttributes$,
  CardVerificationValue1$,
  CardVerificationValue2$,
  CryptogramAuthResponse$,
  CryptogramVerificationArpcMethod1$,
  CryptogramVerificationArpcMethod2$,
  CurrentPinAttributes$,
  DecryptData$,
  DecryptDataCommand,
  DecryptDataInput$,
  DecryptDataOutput$,
  DerivationMethodAttributes$,
  DiffieHellmanDerivationData$,
  DiscoverDynamicCardVerificationCode$,
  DukptAttributes$,
  DukptDerivationAttributes$,
  DukptDerivationType,
  DukptEncryptionAttributes$,
  DukptEncryptionMode,
  DukptKeyVariant,
  DynamicCardVerificationCode$,
  DynamicCardVerificationValue$,
  EcdhDerivationAttributes$,
  Emv2000Attributes$,
  EmvCommonAttributes$,
  EmvEncryptionAttributes$,
  EmvEncryptionMode,
  EmvMajorKeyDerivationMode,
  EncryptData$,
  EncryptDataCommand,
  EncryptDataInput$,
  EncryptDataOutput$,
  EncryptionDecryptionAttributes$,
  EncryptionMode,
  GenerateAs2805KekValidation$,
  GenerateAs2805KekValidationCommand,
  GenerateAs2805KekValidationInput$,
  GenerateAs2805KekValidationOutput$,
  GenerateCardValidationData$,
  GenerateCardValidationDataCommand,
  GenerateCardValidationDataInput$,
  GenerateCardValidationDataOutput$,
  GenerateMac$,
  GenerateMacCommand,
  GenerateMacEmvPinChange$,
  GenerateMacEmvPinChangeCommand,
  GenerateMacEmvPinChangeInput$,
  GenerateMacEmvPinChangeOutput$,
  GenerateMacInput$,
  GenerateMacOutput$,
  GeneratePinData$,
  GeneratePinDataCommand,
  GeneratePinDataInput$,
  GeneratePinDataOutput$,
  Ibm3624NaturalPin$,
  Ibm3624PinFromOffset$,
  Ibm3624PinOffset$,
  Ibm3624PinVerification$,
  Ibm3624RandomPin$,
  IncomingDiffieHellmanTr31KeyBlock$,
  IncomingKeyMaterial$,
  InternalServerException,
  InternalServerException$,
  KekValidationRequest$,
  KekValidationResponse$,
  KeyCheckValueAlgorithm,
  KeyDerivationFunction,
  KeyDerivationHashAlgorithm,
  MacAlgorithm,
  MacAlgorithmDukpt$,
  MacAlgorithmEmv$,
  MacAttributes$,
  MajorKeyDerivationMode,
  MasterCardAttributes$,
  OutgoingKeyMaterial$,
  OutgoingTr31KeyBlock$,
  PaddingType,
  PaymentCryptographyData,
  PaymentCryptographyDataClient,
  PaymentCryptographyDataServiceException,
  PinBlockFormatForEmvPinChange,
  PinBlockFormatForPinData,
  PinBlockLengthPosition,
  PinBlockPaddingType,
  PinData$,
  PinGenerationAttributes$,
  PinVerificationAttributes$,
  RandomKeySendVariantMask,
  ReEncryptData$,
  ReEncryptDataCommand,
  ReEncryptDataInput$,
  ReEncryptDataOutput$,
  ReEncryptionAttributes$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  SessionKeyAmex$,
  SessionKeyDerivation$,
  SessionKeyDerivationMode,
  SessionKeyDerivationValue$,
  SessionKeyEmv2000$,
  SessionKeyEmvCommon$,
  SessionKeyMastercard$,
  SessionKeyVisa$,
  SymmetricEncryptionAttributes$,
  SymmetricKeyAlgorithm,
  ThrottlingException,
  ThrottlingException$,
  TranslateKeyMaterial$,
  TranslateKeyMaterialCommand,
  TranslateKeyMaterialInput$,
  TranslateKeyMaterialOutput$,
  TranslatePinData$,
  TranslatePinDataCommand,
  TranslatePinDataInput$,
  TranslatePinDataOutput$,
  TranslationIsoFormats$,
  TranslationPinDataAs2805Format0$,
  TranslationPinDataIsoFormat034$,
  TranslationPinDataIsoFormat1$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  VerificationFailedException,
  VerificationFailedException$,
  VerificationFailedReason,
  VerifyAuthRequestCryptogram$,
  VerifyAuthRequestCryptogramCommand,
  VerifyAuthRequestCryptogramInput$,
  VerifyAuthRequestCryptogramOutput$,
  VerifyCardValidationData$,
  VerifyCardValidationDataCommand,
  VerifyCardValidationDataInput$,
  VerifyCardValidationDataOutput$,
  VerifyMac$,
  VerifyMacCommand,
  VerifyMacInput$,
  VerifyMacOutput$,
  VerifyPinData$,
  VerifyPinDataCommand,
  VerifyPinDataInput$,
  VerifyPinDataOutput$,
  VisaAmexDerivationOutputs$,
  VisaAttributes$,
  VisaPin$,
  VisaPinVerification$,
  VisaPinVerificationValue$,
  WrappedKey$,
  WrappedKeyMaterial$,
  WrappedKeyMaterialFormat,
  WrappedWorkingKey$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PaymentCryptographyDataClient === "function");
assert(typeof PaymentCryptographyData === "function");
// commands
assert(typeof DecryptDataCommand === "function");
assert(typeof DecryptData$ === "object");
assert(typeof EncryptDataCommand === "function");
assert(typeof EncryptData$ === "object");
assert(typeof GenerateAs2805KekValidationCommand === "function");
assert(typeof GenerateAs2805KekValidation$ === "object");
assert(typeof GenerateCardValidationDataCommand === "function");
assert(typeof GenerateCardValidationData$ === "object");
assert(typeof GenerateMacCommand === "function");
assert(typeof GenerateMac$ === "object");
assert(typeof GenerateMacEmvPinChangeCommand === "function");
assert(typeof GenerateMacEmvPinChange$ === "object");
assert(typeof GeneratePinDataCommand === "function");
assert(typeof GeneratePinData$ === "object");
assert(typeof ReEncryptDataCommand === "function");
assert(typeof ReEncryptData$ === "object");
assert(typeof TranslateKeyMaterialCommand === "function");
assert(typeof TranslateKeyMaterial$ === "object");
assert(typeof TranslatePinDataCommand === "function");
assert(typeof TranslatePinData$ === "object");
assert(typeof VerifyAuthRequestCryptogramCommand === "function");
assert(typeof VerifyAuthRequestCryptogram$ === "object");
assert(typeof VerifyCardValidationDataCommand === "function");
assert(typeof VerifyCardValidationData$ === "object");
assert(typeof VerifyMacCommand === "function");
assert(typeof VerifyMac$ === "object");
assert(typeof VerifyPinDataCommand === "function");
assert(typeof VerifyPinData$ === "object");
// structural schemas
assert(typeof AmexAttributes$ === "object");
assert(typeof AmexCardSecurityCodeVersion1$ === "object");
assert(typeof AmexCardSecurityCodeVersion2$ === "object");
assert(typeof As2805KekValidationType$ === "object");
assert(typeof As2805PekDerivationAttributes$ === "object");
assert(typeof AsymmetricEncryptionAttributes$ === "object");
assert(typeof CardGenerationAttributes$ === "object");
assert(typeof CardHolderVerificationValue$ === "object");
assert(typeof CardVerificationAttributes$ === "object");
assert(typeof CardVerificationValue1$ === "object");
assert(typeof CardVerificationValue2$ === "object");
assert(typeof CryptogramAuthResponse$ === "object");
assert(typeof CryptogramVerificationArpcMethod1$ === "object");
assert(typeof CryptogramVerificationArpcMethod2$ === "object");
assert(typeof CurrentPinAttributes$ === "object");
assert(typeof DecryptDataInput$ === "object");
assert(typeof DecryptDataOutput$ === "object");
assert(typeof DerivationMethodAttributes$ === "object");
assert(typeof DiffieHellmanDerivationData$ === "object");
assert(typeof DiscoverDynamicCardVerificationCode$ === "object");
assert(typeof DukptAttributes$ === "object");
assert(typeof DukptDerivationAttributes$ === "object");
assert(typeof DukptEncryptionAttributes$ === "object");
assert(typeof DynamicCardVerificationCode$ === "object");
assert(typeof DynamicCardVerificationValue$ === "object");
assert(typeof EcdhDerivationAttributes$ === "object");
assert(typeof Emv2000Attributes$ === "object");
assert(typeof EmvCommonAttributes$ === "object");
assert(typeof EmvEncryptionAttributes$ === "object");
assert(typeof EncryptDataInput$ === "object");
assert(typeof EncryptDataOutput$ === "object");
assert(typeof EncryptionDecryptionAttributes$ === "object");
assert(typeof GenerateAs2805KekValidationInput$ === "object");
assert(typeof GenerateAs2805KekValidationOutput$ === "object");
assert(typeof GenerateCardValidationDataInput$ === "object");
assert(typeof GenerateCardValidationDataOutput$ === "object");
assert(typeof GenerateMacEmvPinChangeInput$ === "object");
assert(typeof GenerateMacEmvPinChangeOutput$ === "object");
assert(typeof GenerateMacInput$ === "object");
assert(typeof GenerateMacOutput$ === "object");
assert(typeof GeneratePinDataInput$ === "object");
assert(typeof GeneratePinDataOutput$ === "object");
assert(typeof Ibm3624NaturalPin$ === "object");
assert(typeof Ibm3624PinFromOffset$ === "object");
assert(typeof Ibm3624PinOffset$ === "object");
assert(typeof Ibm3624PinVerification$ === "object");
assert(typeof Ibm3624RandomPin$ === "object");
assert(typeof IncomingDiffieHellmanTr31KeyBlock$ === "object");
assert(typeof IncomingKeyMaterial$ === "object");
assert(typeof KekValidationRequest$ === "object");
assert(typeof KekValidationResponse$ === "object");
assert(typeof MacAlgorithmDukpt$ === "object");
assert(typeof MacAlgorithmEmv$ === "object");
assert(typeof MacAttributes$ === "object");
assert(typeof MasterCardAttributes$ === "object");
assert(typeof OutgoingKeyMaterial$ === "object");
assert(typeof OutgoingTr31KeyBlock$ === "object");
assert(typeof PinData$ === "object");
assert(typeof PinGenerationAttributes$ === "object");
assert(typeof PinVerificationAttributes$ === "object");
assert(typeof ReEncryptDataInput$ === "object");
assert(typeof ReEncryptDataOutput$ === "object");
assert(typeof ReEncryptionAttributes$ === "object");
assert(typeof SessionKeyAmex$ === "object");
assert(typeof SessionKeyDerivation$ === "object");
assert(typeof SessionKeyDerivationValue$ === "object");
assert(typeof SessionKeyEmv2000$ === "object");
assert(typeof SessionKeyEmvCommon$ === "object");
assert(typeof SessionKeyMastercard$ === "object");
assert(typeof SessionKeyVisa$ === "object");
assert(typeof SymmetricEncryptionAttributes$ === "object");
assert(typeof TranslateKeyMaterialInput$ === "object");
assert(typeof TranslateKeyMaterialOutput$ === "object");
assert(typeof TranslatePinDataInput$ === "object");
assert(typeof TranslatePinDataOutput$ === "object");
assert(typeof TranslationIsoFormats$ === "object");
assert(typeof TranslationPinDataAs2805Format0$ === "object");
assert(typeof TranslationPinDataIsoFormat034$ === "object");
assert(typeof TranslationPinDataIsoFormat1$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof VerifyAuthRequestCryptogramInput$ === "object");
assert(typeof VerifyAuthRequestCryptogramOutput$ === "object");
assert(typeof VerifyCardValidationDataInput$ === "object");
assert(typeof VerifyCardValidationDataOutput$ === "object");
assert(typeof VerifyMacInput$ === "object");
assert(typeof VerifyMacOutput$ === "object");
assert(typeof VerifyPinDataInput$ === "object");
assert(typeof VerifyPinDataOutput$ === "object");
assert(typeof VisaAmexDerivationOutputs$ === "object");
assert(typeof VisaAttributes$ === "object");
assert(typeof VisaPin$ === "object");
assert(typeof VisaPinVerification$ === "object");
assert(typeof VisaPinVerificationValue$ === "object");
assert(typeof WrappedKey$ === "object");
assert(typeof WrappedKeyMaterial$ === "object");
assert(typeof WrappedWorkingKey$ === "object");
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
assert(typeof RandomKeySendVariantMask === "object");
assert(typeof SessionKeyDerivationMode === "object");
assert(typeof SymmetricKeyAlgorithm === "object");
assert(typeof VerificationFailedReason === "object");
assert(typeof WrappedKeyMaterialFormat === "object");
// errors
assert(AccessDeniedException.prototype instanceof PaymentCryptographyDataServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(InternalServerException.prototype instanceof PaymentCryptographyDataServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof PaymentCryptographyDataServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof PaymentCryptographyDataServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof PaymentCryptographyDataServiceException);
assert(typeof ValidationException$ === "object");
assert(VerificationFailedException.prototype instanceof PaymentCryptographyDataServiceException);
assert(typeof VerificationFailedException$ === "object");
assert(PaymentCryptographyDataServiceException.prototype instanceof Error);
console.log(`PaymentCryptographyData index test passed.`);
