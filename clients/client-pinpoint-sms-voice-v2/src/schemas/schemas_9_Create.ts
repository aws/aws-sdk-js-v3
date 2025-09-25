// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAd,
  _AB,
  _AD,
  _AS,
  _AU,
  _CCS,
  _CCSR,
  _CCSRr,
  _COOL,
  _COOLR,
  _COOLRr,
  _CP,
  _CPC,
  _CPCR,
  _CPCRr,
  _CPR,
  _CPRr,
  _CR,
  _CRAr,
  _CRARre,
  _CRARrea,
  _CRR,
  _CRRr,
  _CSA,
  _CSN,
  _CT,
  _CTr,
  _CVDN,
  _CVDNR,
  _CVDNRr,
  _CVN,
  _DPE,
  _DPN,
  _ICC,
  _ISEn,
  _Key,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _MLP,
  _MT,
  _MTe,
  _NCu,
  _NETL,
  _NTu,
  _OI,
  _OOLA,
  _OOLN,
  _PA,
  _PCA,
  _PCI,
  _PI,
  _PN,
  _PNA,
  _PNIho,
  _RA,
  _RAA,
  _RAe,
  _RAI,
  _Reg,
  _RIe,
  _RPNe,
  _RPNReq,
  _RPNRequ,
  _RS,
  _RSIe,
  _RSIReq,
  _RSIRequ,
  _RTe,
  _S,
  _SI,
  _SIA,
  _SMOOE,
  _SRE,
  _T,
  _Ta,
  _TL,
  _TR,
  _TRR,
  _TRRa,
  _TWCA,
  _TWCR,
  _TWE,
  _V,
  _VDNA,
  _VDNI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateConfigurationSetRequest = struct(n0, _CCSR, 0, [_CSN, _T, _CT], [0, () => TagList, [0, 4]]);
export var CreateConfigurationSetResult = struct(n0, _CCSRr, 0, [_CSA, _CSN, _T, _CTr], [0, 0, () => TagList, 4]);
export var CreateOptOutListRequest = struct(n0, _COOLR, 0, [_OOLN, _T, _CT], [0, () => TagList, [0, 4]]);
export var CreateOptOutListResult = struct(n0, _COOLRr, 0, [_OOLA, _OOLN, _T, _CTr], [0, 0, () => TagList, 4]);
export var CreatePoolRequest = struct(
  n0,
  _CPR,
  0,
  [_OI, _ICC, _MT, _DPE, _T, _CT],
  [0, 0, 0, 2, () => TagList, [0, 4]]
);
export var CreatePoolResult = struct(
  n0,
  _CPRr,
  0,
  [_PA, _PI, _S, _MT, _TWE, _TWCA, _TWCR, _SMOOE, _OOLN, _SRE, _DPE, _T, _CTr],
  [0, 0, 0, 0, 2, 0, 0, 2, 0, 2, 2, () => TagList, 4]
);
export var CreateProtectConfigurationRequest = struct(n0, _CPCR, 0, [_CT, _DPE, _T], [[0, 4], 2, () => TagList]);
export var CreateProtectConfigurationResult = struct(
  n0,
  _CPCRr,
  0,
  [_PCA, _PCI, _CTr, _AD, _DPE, _T],
  [0, 0, 4, 2, 2, () => TagList]
);
export var CreateRegistrationAttachmentRequest = struct(
  n0,
  _CRARre,
  0,
  [_AB, _AU, _T, _CT],
  [21, 0, () => TagList, [0, 4]]
);
export var CreateRegistrationAttachmentResult = struct(
  n0,
  _CRARrea,
  0,
  [_RAA, _RAI, _AS, _T, _CTr],
  [0, 0, 0, () => TagList, 4]
);
export var CreateRegistrationRequest = struct(n0, _CRR, 0, [_RTe, _T, _CT], [0, () => TagList, [0, 4]]);
export var CreateRegistrationResult = struct(
  n0,
  _CRRr,
  0,
  [_RA, _RIe, _RTe, _RS, _CVN, _AAd, _T, _CTr],
  [0, 0, 0, 0, 1, 128 | 0, () => TagList, 4]
);
export var CreateVerifiedDestinationNumberRequest = struct(n0, _CVDNR, 0, [_DPN, _T, _CT], [0, () => TagList, [0, 4]]);
export var CreateVerifiedDestinationNumberResult = struct(
  n0,
  _CVDNRr,
  0,
  [_VDNA, _VDNI, _DPN, _S, _T, _CTr],
  [0, 0, 0, 0, () => TagList, 4]
);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RAe], [0]);
export var ListTagsForResourceResult = struct(n0, _LTFRRi, 0, [_RAe, _T], [0, () => TagList]);
export var RequestPhoneNumberRequest = struct(
  n0,
  _RPNReq,
  0,
  [_ICC, _MT, _NCu, _NTu, _OOLN, _PI, _RIe, _ISEn, _DPE, _T, _CT],
  [0, 0, 64 | 0, 0, 0, 0, 0, 2, 2, () => TagList, [0, 4]]
);
export var RequestPhoneNumberResult = struct(
  n0,
  _RPNRequ,
  0,
  [
    _PNA,
    _PNIho,
    _PN,
    _S,
    _ICC,
    _MT,
    _NCu,
    _NTu,
    _MLP,
    _TWE,
    _TWCA,
    _TWCR,
    _SMOOE,
    _OOLN,
    _ISEn,
    _DPE,
    _PI,
    _RIe,
    _T,
    _CTr,
  ],
  [0, 0, 0, 0, 0, 0, 64 | 0, 0, 0, 2, 0, 0, 2, 0, 2, 2, 0, 0, () => TagList, 4]
);
export var RequestSenderIdRequest = struct(
  n0,
  _RSIReq,
  0,
  [_SI, _ICC, _MTe, _DPE, _T, _CT],
  [0, 0, 64 | 0, 2, () => TagList, [0, 4]]
);
export var RequestSenderIdResult = struct(
  n0,
  _RSIRequ,
  0,
  [_SIA, _SI, _ICC, _MTe, _MLP, _DPE, _Reg, _T],
  [0, 0, 0, 64 | 0, 0, 2, 2, () => TagList]
);
export var Tag = struct(n0, _Ta, 0, [_Key, _V], [0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RAe, _T], [0, () => NonEmptyTagList]);
export var TagResourceResult = struct(n0, _TRRa, 0, [], []);
export var NonEmptyTagList = list(n0, _NETL, 0, () => Tag);
export var TagList = list(n0, _TL, 0, () => Tag);
export var CreateConfigurationSet = op(
  n0,
  _CCS,
  0,
  () => CreateConfigurationSetRequest,
  () => CreateConfigurationSetResult
);
export var CreateOptOutList = op(
  n0,
  _COOL,
  0,
  () => CreateOptOutListRequest,
  () => CreateOptOutListResult
);
export var CreatePool = op(
  n0,
  _CP,
  0,
  () => CreatePoolRequest,
  () => CreatePoolResult
);
export var CreateProtectConfiguration = op(
  n0,
  _CPC,
  0,
  () => CreateProtectConfigurationRequest,
  () => CreateProtectConfigurationResult
);
export var CreateRegistration = op(
  n0,
  _CR,
  0,
  () => CreateRegistrationRequest,
  () => CreateRegistrationResult
);
export var CreateRegistrationAttachment = op(
  n0,
  _CRAr,
  0,
  () => CreateRegistrationAttachmentRequest,
  () => CreateRegistrationAttachmentResult
);
export var CreateVerifiedDestinationNumber = op(
  n0,
  _CVDN,
  0,
  () => CreateVerifiedDestinationNumberRequest,
  () => CreateVerifiedDestinationNumberResult
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResult
);
export var RequestPhoneNumber = op(
  n0,
  _RPNe,
  0,
  () => RequestPhoneNumberRequest,
  () => RequestPhoneNumberResult
);
export var RequestSenderId = op(
  n0,
  _RSIe,
  0,
  () => RequestSenderIdRequest,
  () => RequestSenderIdResult
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => TagResourceResult
);
