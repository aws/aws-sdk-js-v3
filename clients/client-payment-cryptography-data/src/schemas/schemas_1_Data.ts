// smithy-typescript generated code
import { error, op, sim, struct, struct as uni } from "@smithy/core/schema";

import { VerificationFailedException as __VerificationFailedException } from "../models/index";
import {
  _A,
  _AA,
  _AC,
  _ACSCV,
  _ACSCVm,
  _ACT,
  _AEA,
  _Al,
  _AM,
  _AMr,
  _ARA,
  _ARC,
  _ARCT,
  _ARCu,
  _ARKA,
  _ARKCV,
  _ARKI,
  _ARV,
  _ARVT,
  _As,
  _ATC,
  _c,
  _CAR,
  _CED,
  _CEDT,
  _CEPB,
  _CGA,
  _CHVV,
  _CMDT,
  _CPA,
  _CPPA,
  _CPPI,
  _CPPKCV,
  _CSU,
  _CTi,
  _CVA,
  _CVAM,
  _CVAMr,
  _CVV,
  _CVVa,
  _D,
  _DA,
  _DAu,
  _DC,
  _DCVC,
  _DCVV,
  _DD,
  _DDA,
  _DDCVC,
  _DDI,
  _DDO,
  _DDT,
  _DIA,
  _DIAu,
  _DKDT,
  _DKV,
  _DMA,
  _DT,
  _DTT,
  _E,
  _e,
  _EA,
  _EAn,
  _EC,
  _ECA,
  _ED,
  _EDAn,
  _EDI,
  _EDO,
  _EEA,
  _EKA,
  _EKCV,
  _EKI,
  _EM,
  _Em,
  _EPB,
  _EPBT,
  _EWK,
  _GA,
  _GCVD,
  _GCVDI,
  _GCVDO,
  _GKA,
  _GKCV,
  _GKI,
  _GM,
  _GMEPC,
  _GMEPCI,
  _GMEPCO,
  _GMI,
  _GMO,
  _GPD,
  _GPDI,
  _GPDO,
  _h,
  _hE,
  _HELBA,
  _IDA,
  _IF,
  _IFs,
  _IFso,
  _IFsoo,
  _IKI,
  _INP,
  _IP,
  _IPFO,
  _IPO,
  _IPV,
  _IRP,
  _ITA,
  _IV,
  _IWK,
  _KA,
  _KCV,
  _KI,
  _KSN,
  _M,
  _MA,
  _Ma,
  _MAD,
  _MAE,
  _Mas,
  _MCA,
  _MD,
  _MDT,
  _MKDM,
  _ML,
  _Mo,
  _MOT,
  _MT,
  _NEPB,
  _NPPA,
  _NPPI,
  _NPPKCV,
  _ODA,
  _OKI,
  _OTA,
  _OWK,
  _PAD,
  _PADT,
  _PAN,
  _PANT,
  _PB,
  _PBF,
  _PBLE,
  _PBLP,
  _PBPT,
  _PCMOT,
  _PD,
  _PDL,
  _PGA,
  _PO,
  _POT,
  _PSN,
  _PT,
  _PTl,
  _PTOT,
  _PTT,
  _PVA,
  _PVD,
  _PVDPC,
  _PVDT,
  _PVKI,
  _R,
  _S,
  _SC,
  _SCT,
  _SDD,
  _SDDT,
  _SKA,
  _SKD,
  _SKDA,
  _SKDM,
  _SKDV,
  _SKE,
  _SKEC,
  _SKM,
  _SKV,
  _SMCKA,
  _SMCKCV,
  _SMCKI,
  _SMIKA,
  _SMIKCV,
  _SMIKI,
  _TD,
  _TDr,
  _TDT,
  _TDTr,
  _TIF,
  _TPD,
  _TPDI,
  _TPDIF,
  _TPDIFr,
  _TPDO,
  _UN,
  _V,
  _VA,
  _VADO,
  _VAi,
  _VARC,
  _VARCI,
  _VARCO,
  _VCVD,
  _VCVDI,
  _VCVDO,
  _VD,
  _VDL,
  _VDT,
  _VFE,
  _VKA,
  _VKCV,
  _VKI,
  _VM,
  _VMI,
  _VMO,
  _VP,
  _VPD,
  _VPDI,
  _VPDO,
  _VPV,
  _VPVV,
  _VV,
  _VVT,
  _WK,
  n0,
} from "./schemas_0";
import {
  CipherTextType,
  DukptEncryptionAttributes,
  InitializationVectorType,
  SymmetricEncryptionAttributes,
  WrappedKey,
} from "./schemas_2_Data";

/* eslint no-var: 0 */

export var ApplicationCryptogramType = sim(n0, _ACT, 0, 8);
export var AuthRequestCryptogramType = sim(n0, _ARCT, 0, 8);
export var AuthResponseValueType = sim(n0, _ARVT, 0, 8);
export var CardExpiryDateType = sim(n0, _CEDT, 0, 8);
export var CommandMessageDataType = sim(n0, _CMDT, 0, 8);
export var DecimalizationTableType = sim(n0, _DTT, 0, 8);
export var EncryptedPinBlockType = sim(n0, _EPBT, 0, 8);
export var HexEvenLengthBetween16And32 = sim(n0, _HELBA, 0, 8);
export var MacOutputType = sim(n0, _MOT, 0, 8);
export var MacType = sim(n0, _MT, 0, 8);
export var MessageDataType = sim(n0, _MDT, 0, 8);
export var PinBlockLengthEquals16 = sim(n0, _PBLE, 0, 8);
export var PinChangeMacOutputType = sim(n0, _PCMOT, 0, 8);
export var PinOffsetType = sim(n0, _POT, 0, 8);
export var PinValidationDataType = sim(n0, _PVDT, 0, 8);
export var PlainTextOutputType = sim(n0, _PTOT, 0, 8);
export var PlainTextType = sim(n0, _PTT, 0, 8);
export var PrimaryAccountNumberType = sim(n0, _PANT, 0, 8);
export var ProprietaryAuthenticationDataType = sim(n0, _PADT, 0, 8);
export var ServiceCodeType = sim(n0, _SCT, 0, 8);
export var SessionDerivationDataType = sim(n0, _SDDT, 0, 8);
export var TrackDataType = sim(n0, _TDT, 0, 8);
export var TransactionDataType = sim(n0, _TDTr, 0, 8);
export var ValidationDataType = sim(n0, _VDT, 0, 8);
export var VerificationValueType = sim(n0, _VVT, 0, 8);
export var AmexAttributes = struct(
  n0,
  _AA,
  0,
  [_MKDM, _PAN, _PSN, _ATC, _ARKI, _CPA],
  [0, [() => PrimaryAccountNumberType, 0], 0, 0, 0, [() => CurrentPinAttributes, 0]]
);
export var AmexCardSecurityCodeVersion1 = struct(n0, _ACSCV, 0, [_CED], [[() => CardExpiryDateType, 0]]);
export var AmexCardSecurityCodeVersion2 = struct(
  n0,
  _ACSCVm,
  0,
  [_CED, _SC],
  [
    [() => CardExpiryDateType, 0],
    [() => ServiceCodeType, 0],
  ]
);
export var AsymmetricEncryptionAttributes = struct(n0, _AEA, 0, [_PT], [0]);
export var CardHolderVerificationValue = struct(n0, _CHVV, 0, [_UN, _PSN, _ATC], [0, 0, 0]);
export var CardVerificationValue1 = struct(
  n0,
  _CVV,
  0,
  [_CED, _SC],
  [
    [() => CardExpiryDateType, 0],
    [() => ServiceCodeType, 0],
  ]
);
export var CardVerificationValue2 = struct(n0, _CVVa, 0, [_CED], [[() => CardExpiryDateType, 0]]);
export var CryptogramVerificationArpcMethod1 = struct(n0, _CVAM, 0, [_ARC], [0]);
export var CryptogramVerificationArpcMethod2 = struct(
  n0,
  _CVAMr,
  0,
  [_CSU, _PAD],
  [0, [() => ProprietaryAuthenticationDataType, 0]]
);
export var CurrentPinAttributes = struct(n0, _CPA, 0, [_CPPI, _CEPB], [0, [() => PinBlockLengthEquals16, 0]]);
export var DecryptDataInput = struct(
  n0,
  _DDI,
  0,
  [_KI, _CTi, _DA, _WK],
  [
    [0, 1],
    [() => CipherTextType, 0],
    [() => EncryptionDecryptionAttributes, 0],
    [() => WrappedKey, 0],
  ]
);
export var DecryptDataOutput = struct(n0, _DDO, 0, [_KA, _KCV, _PTl], [0, 0, [() => PlainTextOutputType, 0]]);
export var DiscoverDynamicCardVerificationCode = struct(
  n0,
  _DDCVC,
  0,
  [_CED, _UN, _ATC],
  [[() => CardExpiryDateType, 0], 0, 0]
);
export var DukptAttributes = struct(n0, _DAu, 0, [_KSN, _DDT], [0, 0]);
export var DukptDerivationAttributes = struct(n0, _DDA, 0, [_KSN, _DKDT, _DKV], [0, 0, 0]);
export var DynamicCardVerificationCode = struct(
  n0,
  _DCVC,
  0,
  [_UN, _PSN, _ATC, _TD],
  [0, 0, 0, [() => TrackDataType, 0]]
);
export var DynamicCardVerificationValue = struct(
  n0,
  _DCVV,
  0,
  [_PSN, _CED, _SC, _ATC],
  [0, [() => CardExpiryDateType, 0], [() => ServiceCodeType, 0], 0]
);
export var Emv2000Attributes = struct(
  n0,
  _EA,
  0,
  [_MKDM, _PAN, _PSN, _ATC],
  [0, [() => PrimaryAccountNumberType, 0], 0, 0]
);
export var EmvCommonAttributes = struct(
  n0,
  _ECA,
  0,
  [_MKDM, _PAN, _PSN, _AC, _Mo, _PBPT, _PBLP],
  [0, [() => PrimaryAccountNumberType, 0], 0, [() => ApplicationCryptogramType, 0], 0, 0, 0]
);
export var EmvEncryptionAttributes = struct(
  n0,
  _EEA,
  0,
  [_MKDM, _PAN, _PSN, _SDD, _Mo, _IV],
  [
    0,
    [() => PrimaryAccountNumberType, 0],
    0,
    [() => SessionDerivationDataType, 0],
    0,
    [() => InitializationVectorType, 0],
  ]
);
export var EncryptDataInput = struct(
  n0,
  _EDI,
  0,
  [_KI, _PTl, _EAn, _WK],
  [
    [0, 1],
    [() => PlainTextType, 0],
    [() => EncryptionDecryptionAttributes, 0],
    [() => WrappedKey, 0],
  ]
);
export var EncryptDataOutput = struct(n0, _EDO, 0, [_KA, _KCV, _CTi], [0, 0, [() => CipherTextType, 0]]);
export var GenerateCardValidationDataInput = struct(
  n0,
  _GCVDI,
  0,
  [_KI, _PAN, _GA, _VDL],
  [0, [() => PrimaryAccountNumberType, 0], [() => CardGenerationAttributes, 0], 1]
);
export var GenerateCardValidationDataOutput = struct(
  n0,
  _GCVDO,
  0,
  [_KA, _KCV, _VD],
  [0, 0, [() => ValidationDataType, 0]]
);
export var GenerateMacEmvPinChangeInput = struct(
  n0,
  _GMEPCI,
  0,
  [_NPPI, _NEPB, _PBF, _SMIKI, _SMCKI, _MD, _DMA],
  [
    0,
    [() => PinBlockLengthEquals16, 0],
    0,
    0,
    0,
    [() => CommandMessageDataType, 0],
    [() => DerivationMethodAttributes, 0],
  ]
);
export var GenerateMacEmvPinChangeOutput = struct(
  n0,
  _GMEPCO,
  0,
  [_NPPA, _SMIKA, _SMCKA, _Ma, _EPB, _NPPKCV, _SMIKCV, _SMCKCV, _VADO],
  [
    0,
    0,
    0,
    [() => PinChangeMacOutputType, 0],
    [() => EncryptedPinBlockType, 0],
    0,
    0,
    0,
    () => VisaAmexDerivationOutputs,
  ]
);
export var GenerateMacInput = struct(
  n0,
  _GMI,
  0,
  [_KI, _MD, _GA, _ML],
  [0, [() => MessageDataType, 0], [() => MacAttributes, 0], 1]
);
export var GenerateMacOutput = struct(n0, _GMO, 0, [_KA, _KCV, _Ma], [0, 0, [() => MacOutputType, 0]]);
export var GeneratePinDataInput = struct(
  n0,
  _GPDI,
  0,
  [_GKI, _EKI, _GA, _PDL, _PAN, _PBF, _EWK],
  [0, 0, [() => PinGenerationAttributes, 0], 1, [() => PrimaryAccountNumberType, 0], 0, [() => WrappedKey, 0]]
);
export var GeneratePinDataOutput = struct(
  n0,
  _GPDO,
  0,
  [_GKA, _GKCV, _EKA, _EKCV, _EPB, _PD],
  [0, 0, 0, 0, [() => EncryptedPinBlockType, 0], [() => PinData, 0]]
);
export var Ibm3624NaturalPin = struct(
  n0,
  _INP,
  0,
  [_DT, _PVDPC, _PVD],
  [[() => DecimalizationTableType, 0], 0, [() => PinValidationDataType, 0]]
);
export var Ibm3624PinFromOffset = struct(
  n0,
  _IPFO,
  0,
  [_DT, _PVDPC, _PVD, _PO],
  [[() => DecimalizationTableType, 0], 0, [() => PinValidationDataType, 0], [() => PinOffsetType, 0]]
);
export var Ibm3624PinOffset = struct(
  n0,
  _IPO,
  0,
  [_EPB, _DT, _PVDPC, _PVD],
  [[() => EncryptedPinBlockType, 0], [() => DecimalizationTableType, 0], 0, [() => PinValidationDataType, 0]]
);
export var Ibm3624PinVerification = struct(
  n0,
  _IPV,
  0,
  [_DT, _PVDPC, _PVD, _PO],
  [[() => DecimalizationTableType, 0], 0, [() => PinValidationDataType, 0], [() => PinOffsetType, 0]]
);
export var Ibm3624RandomPin = struct(
  n0,
  _IRP,
  0,
  [_DT, _PVDPC, _PVD],
  [[() => DecimalizationTableType, 0], 0, [() => PinValidationDataType, 0]]
);
export var MacAlgorithmDukpt = struct(n0, _MAD, 0, [_KSN, _DKV, _DDT], [0, 0, 0]);
export var MacAlgorithmEmv = struct(
  n0,
  _MAE,
  0,
  [_MKDM, _PAN, _PSN, _SKDM, _SKDV],
  [0, [() => PrimaryAccountNumberType, 0], 0, 0, [() => SessionKeyDerivationValue, 0]]
);
export var MasterCardAttributes = struct(
  n0,
  _MCA,
  0,
  [_MKDM, _PAN, _PSN, _AC],
  [0, [() => PrimaryAccountNumberType, 0], 0, [() => ApplicationCryptogramType, 0]]
);
export var SessionKeyAmex = struct(n0, _SKA, 0, [_PAN, _PSN], [[() => PrimaryAccountNumberType, 0], 0]);
export var SessionKeyEmv2000 = struct(n0, _SKE, 0, [_PAN, _PSN, _ATC], [[() => PrimaryAccountNumberType, 0], 0, 0]);
export var SessionKeyEmvCommon = struct(n0, _SKEC, 0, [_PAN, _PSN, _ATC], [[() => PrimaryAccountNumberType, 0], 0, 0]);
export var SessionKeyMastercard = struct(
  n0,
  _SKM,
  0,
  [_PAN, _PSN, _ATC, _UN],
  [[() => PrimaryAccountNumberType, 0], 0, 0, 0]
);
export var SessionKeyVisa = struct(n0, _SKV, 0, [_PAN, _PSN], [[() => PrimaryAccountNumberType, 0], 0]);
export var TranslatePinDataInput = struct(
  n0,
  _TPDI,
  0,
  [_IKI, _OKI, _ITA, _OTA, _EPB, _IDA, _ODA, _IWK, _OWK],
  [
    0,
    0,
    [() => TranslationIsoFormats, 0],
    [() => TranslationIsoFormats, 0],
    [() => HexEvenLengthBetween16And32, 0],
    () => DukptDerivationAttributes,
    () => DukptDerivationAttributes,
    [() => WrappedKey, 0],
    [() => WrappedKey, 0],
  ]
);
export var TranslatePinDataOutput = struct(n0, _TPDO, 0, [_PB, _KA, _KCV], [[() => EncryptedPinBlockType, 0], 0, 0]);
export var TranslationPinDataIsoFormat034 = struct(n0, _TPDIF, 0, [_PAN], [[() => PrimaryAccountNumberType, 0]]);
export var TranslationPinDataIsoFormat1 = struct(n0, _TPDIFr, 0, [], []);
export var VerificationFailedException = error(
  n0,
  _VFE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_R, _M],
  [0, 0],

  __VerificationFailedException
);
export var VerifyAuthRequestCryptogramInput = struct(
  n0,
  _VARCI,
  0,
  [_KI, _TDr, _ARCu, _MKDM, _SKDA, _ARA],
  [
    0,
    [() => TransactionDataType, 0],
    [() => AuthRequestCryptogramType, 0],
    0,
    [() => SessionKeyDerivation, 0],
    [() => CryptogramAuthResponse, 0],
  ]
);
export var VerifyAuthRequestCryptogramOutput = struct(
  n0,
  _VARCO,
  0,
  [_KA, _KCV, _ARV],
  [0, 0, [() => AuthResponseValueType, 0]]
);
export var VerifyCardValidationDataInput = struct(
  n0,
  _VCVDI,
  0,
  [_KI, _PAN, _VA, _VD],
  [0, [() => PrimaryAccountNumberType, 0], [() => CardVerificationAttributes, 0], [() => ValidationDataType, 0]]
);
export var VerifyCardValidationDataOutput = struct(n0, _VCVDO, 0, [_KA, _KCV], [0, 0]);
export var VerifyMacInput = struct(
  n0,
  _VMI,
  0,
  [_KI, _MD, _Ma, _VA, _ML],
  [0, [() => MessageDataType, 0], [() => MacType, 0], [() => MacAttributes, 0], 1]
);
export var VerifyMacOutput = struct(n0, _VMO, 0, [_KA, _KCV], [0, 0]);
export var VerifyPinDataInput = struct(
  n0,
  _VPDI,
  0,
  [_VKI, _EKI, _VA, _EPB, _PAN, _PBF, _PDL, _DAu, _EWK],
  [
    0,
    0,
    [() => PinVerificationAttributes, 0],
    [() => EncryptedPinBlockType, 0],
    [() => PrimaryAccountNumberType, 0],
    0,
    1,
    () => DukptAttributes,
    [() => WrappedKey, 0],
  ]
);
export var VerifyPinDataOutput = struct(n0, _VPDO, 0, [_VKA, _VKCV, _EKA, _EKCV], [0, 0, 0, 0]);
export var VisaAmexDerivationOutputs = struct(n0, _VADO, 0, [_ARKA, _ARKCV, _CPPA, _CPPKCV], [0, 0, 0, 0]);
export var VisaAttributes = struct(
  n0,
  _VAi,
  0,
  [_MKDM, _PAN, _PSN, _ATC, _ARKI, _CPA],
  [0, [() => PrimaryAccountNumberType, 0], 0, 0, 0, [() => CurrentPinAttributes, 0]]
);
export var VisaPin = struct(n0, _VP, 0, [_PVKI], [1]);
export var VisaPinVerification = struct(n0, _VPV, 0, [_PVKI, _VV], [1, [() => VerificationValueType, 0]]);
export var VisaPinVerificationValue = struct(n0, _VPVV, 0, [_EPB, _PVKI], [[() => EncryptedPinBlockType, 0], 1]);
export var CardGenerationAttributes = uni(
  n0,
  _CGA,
  0,
  [_ACSCV, _ACSCVm, _CVV, _CVVa, _CHVV, _DCVC, _DCVV],
  [
    [() => AmexCardSecurityCodeVersion1, 0],
    [() => AmexCardSecurityCodeVersion2, 0],
    [() => CardVerificationValue1, 0],
    [() => CardVerificationValue2, 0],
    () => CardHolderVerificationValue,
    [() => DynamicCardVerificationCode, 0],
    [() => DynamicCardVerificationValue, 0],
  ]
);
export var CardVerificationAttributes = uni(
  n0,
  _CVA,
  0,
  [_ACSCV, _ACSCVm, _CVV, _CVVa, _CHVV, _DCVC, _DCVV, _DDCVC],
  [
    [() => AmexCardSecurityCodeVersion1, 0],
    [() => AmexCardSecurityCodeVersion2, 0],
    [() => CardVerificationValue1, 0],
    [() => CardVerificationValue2, 0],
    () => CardHolderVerificationValue,
    [() => DynamicCardVerificationCode, 0],
    [() => DynamicCardVerificationValue, 0],
    [() => DiscoverDynamicCardVerificationCode, 0],
  ]
);
export var CryptogramAuthResponse = uni(
  n0,
  _CAR,
  0,
  [_AM, _AMr],
  [() => CryptogramVerificationArpcMethod1, [() => CryptogramVerificationArpcMethod2, 0]]
);
export var DerivationMethodAttributes = uni(
  n0,
  _DMA,
  0,
  [_EC, _A, _V, _E, _Mas],
  [
    [() => EmvCommonAttributes, 0],
    [() => AmexAttributes, 0],
    [() => VisaAttributes, 0],
    [() => Emv2000Attributes, 0],
    [() => MasterCardAttributes, 0],
  ]
);
export var EncryptionDecryptionAttributes = uni(
  n0,
  _EDAn,
  0,
  [_S, _As, _D, _Em],
  [
    [() => SymmetricEncryptionAttributes, 0],
    () => AsymmetricEncryptionAttributes,
    [() => DukptEncryptionAttributes, 0],
    [() => EmvEncryptionAttributes, 0],
  ]
);
export var MacAttributes = uni(
  n0,
  _MA,
  0,
  [_Al, _EM, _DIA, _DIAu, _DC],
  [0, [() => MacAlgorithmEmv, 0], () => MacAlgorithmDukpt, () => MacAlgorithmDukpt, () => MacAlgorithmDukpt]
);
export var PinData = uni(
  n0,
  _PD,
  0,
  [_PO, _VV],
  [
    [() => PinOffsetType, 0],
    [() => VerificationValueType, 0],
  ]
);
export var PinGenerationAttributes = uni(
  n0,
  _PGA,
  0,
  [_VP, _VPVV, _IPO, _INP, _IRP, _IPFO],
  [
    () => VisaPin,
    [() => VisaPinVerificationValue, 0],
    [() => Ibm3624PinOffset, 0],
    [() => Ibm3624NaturalPin, 0],
    [() => Ibm3624RandomPin, 0],
    [() => Ibm3624PinFromOffset, 0],
  ]
);
export var PinVerificationAttributes = uni(
  n0,
  _PVA,
  0,
  [_VP, _IP],
  [
    [() => VisaPinVerification, 0],
    [() => Ibm3624PinVerification, 0],
  ]
);
export var SessionKeyDerivation = uni(
  n0,
  _SKD,
  0,
  [_EC, _Mas, _E, _A, _V],
  [
    [() => SessionKeyEmvCommon, 0],
    [() => SessionKeyMastercard, 0],
    [() => SessionKeyEmv2000, 0],
    [() => SessionKeyAmex, 0],
    [() => SessionKeyVisa, 0],
  ]
);
export var SessionKeyDerivationValue = uni(n0, _SKDV, 0, [_AC, _ATC], [[() => ApplicationCryptogramType, 0], 0]);
export var TranslationIsoFormats = uni(
  n0,
  _TIF,
  0,
  [_IF, _IFs, _IFso, _IFsoo],
  [
    [() => TranslationPinDataIsoFormat034, 0],
    () => TranslationPinDataIsoFormat1,
    [() => TranslationPinDataIsoFormat034, 0],
    [() => TranslationPinDataIsoFormat034, 0],
  ]
);
export var DecryptData = op(
  n0,
  _DD,
  {
    [_h]: ["POST", "/keys/{KeyIdentifier}/decrypt", 200],
  },
  () => DecryptDataInput,
  () => DecryptDataOutput
);
export var EncryptData = op(
  n0,
  _ED,
  {
    [_h]: ["POST", "/keys/{KeyIdentifier}/encrypt", 200],
  },
  () => EncryptDataInput,
  () => EncryptDataOutput
);
export var GenerateCardValidationData = op(
  n0,
  _GCVD,
  {
    [_h]: ["POST", "/cardvalidationdata/generate", 200],
  },
  () => GenerateCardValidationDataInput,
  () => GenerateCardValidationDataOutput
);
export var GenerateMac = op(
  n0,
  _GM,
  {
    [_h]: ["POST", "/mac/generate", 200],
  },
  () => GenerateMacInput,
  () => GenerateMacOutput
);
export var GenerateMacEmvPinChange = op(
  n0,
  _GMEPC,
  {
    [_h]: ["POST", "/macemvpinchange/generate", 200],
  },
  () => GenerateMacEmvPinChangeInput,
  () => GenerateMacEmvPinChangeOutput
);
export var GeneratePinData = op(
  n0,
  _GPD,
  {
    [_h]: ["POST", "/pindata/generate", 200],
  },
  () => GeneratePinDataInput,
  () => GeneratePinDataOutput
);
export var TranslatePinData = op(
  n0,
  _TPD,
  {
    [_h]: ["POST", "/pindata/translate", 200],
  },
  () => TranslatePinDataInput,
  () => TranslatePinDataOutput
);
export var VerifyAuthRequestCryptogram = op(
  n0,
  _VARC,
  {
    [_h]: ["POST", "/cryptogram/verify", 200],
  },
  () => VerifyAuthRequestCryptogramInput,
  () => VerifyAuthRequestCryptogramOutput
);
export var VerifyCardValidationData = op(
  n0,
  _VCVD,
  {
    [_h]: ["POST", "/cardvalidationdata/verify", 200],
  },
  () => VerifyCardValidationDataInput,
  () => VerifyCardValidationDataOutput
);
export var VerifyMac = op(
  n0,
  _VM,
  {
    [_h]: ["POST", "/mac/verify", 200],
  },
  () => VerifyMacInput,
  () => VerifyMacOutput
);
export var VerifyPinData = op(
  n0,
  _VPD,
  {
    [_h]: ["POST", "/pindata/verify", 200],
  },
  () => VerifyPinDataInput,
  () => VerifyPinDataOutput
);
