// smithy-typescript generated code
import { list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _Ac,
  _ALd,
  _AMI,
  _An,
  _Ana,
  _AR,
  _At,
  _BE,
  _C,
  _CS,
  _CT,
  _DA,
  _DTP,
  _DTPR,
  _DTPRe,
  _E,
  _En,
  _GAM,
  _GAMR,
  _GAMRe,
  _GIP,
  _GIPR,
  _GIPRe,
  _GTP,
  _GTPR,
  _GTPRe,
  _IA,
  _IBE,
  _IBTE,
  _IE,
  _IEp,
  _IIAL,
  _IIE,
  _IIEn,
  _IIIAL,
  _IITE,
  _IITEn,
  _IPA,
  _IPAC,
  _IPC,
  _IPI,
  _IPN,
  _IPPC,
  _ISE,
  _ISTE,
  _IT,
  _ITPE,
  _ITPTE,
  _LUT,
  _MDL,
  _Me,
  _MMSB,
  _NC,
  _O,
  _PC,
  _PCo,
  _PNC,
  _PNCu,
  _PS,
  _PSL,
  _PSo,
  _PSPET,
  _PSPV,
  _RF,
  _RSI,
  _SA,
  _SAo,
  _SE,
  _SH,
  _SIA,
  _SIo,
  _SM,
  _SP,
  _SPen,
  _SPV,
  _St,
  _STU,
  _TCS,
  _TEl,
  _Ti,
  _TPA,
  _TPI,
  _TPl,
  _TPN,
  _Ty,
  _UIP,
  _UIPR,
  _UIPRp,
  _UTP,
  _UTPR,
  _UTPRp,
  _V,
  _Va,
  _VEI,
  n0,
} from "./schemas_0";
import { Envelope, SenderIpAddress } from "./schemas_9_Get";

/* eslint no-var: 0 */

export var SmtpPassword = sim(n0, _SP, 0, 8);
export var DeleteTrafficPolicyRequest = struct(n0, _DTPR, 0, [_TPI], [0]);
export var DeleteTrafficPolicyResponse = struct(n0, _DTPRe, 0, [], []);
export var GetArchiveMessageRequest = struct(n0, _GAMR, 0, [_AMI], [0]);
export var GetArchiveMessageResponse = struct(
  n0,
  _GAMRe,
  0,
  [_MDL, _Me, _En],
  [0, [() => Metadata, 0], () => Envelope]
);
export var GetIngressPointRequest = struct(n0, _GIPR, 0, [_IPI], [0]);
export var GetIngressPointResponse = struct(
  n0,
  _GIPRe,
  0,
  [_IPI, _IPN, _IPA, _St, _Ty, _AR, _RSI, _TPI, _IPAC, _NC, _CT, _LUT],
  [0, 0, 0, 0, 0, 0, 0, 0, () => IngressPointAuthConfiguration, () => NetworkConfiguration, 4, 4]
);
export var GetTrafficPolicyRequest = struct(n0, _GTPR, 0, [_TPI], [0]);
export var GetTrafficPolicyResponse = struct(
  n0,
  _GTPRe,
  0,
  [_TPN, _TPI, _TPA, _PS, _MMSB, _DA, _CT, _LUT],
  [0, 0, 0, () => PolicyStatementList, 1, 0, 4, 4]
);
export var IngressAnalysis = struct(n0, _IA, 0, [_Ana, _RF], [0, 0]);
export var IngressBooleanExpression = struct(n0, _IBE, 0, [_E, _O], [() => IngressBooleanToEvaluate, 0]);
export var IngressIpv4Expression = struct(n0, _IIE, 0, [_E, _O, _V], [() => IngressIpToEvaluate, 0, 64 | 0]);
export var IngressIpv6Expression = struct(n0, _IIEn, 0, [_E, _O, _V], [() => IngressIpv6ToEvaluate, 0, 64 | 0]);
export var IngressIsInAddressList = struct(n0, _IIIAL, 0, [_At, _ALd], [0, 64 | 0]);
export var IngressPointAuthConfiguration = struct(
  n0,
  _IPAC,
  0,
  [_IPPC, _SA],
  [() => IngressPointPasswordConfiguration, 0]
);
export var IngressPointPasswordConfiguration = struct(n0, _IPPC, 0, [_SPV, _PSPV, _PSPET], [0, 0, 4]);
export var IngressStringExpression = struct(n0, _ISE, 0, [_E, _O, _V], [() => IngressStringToEvaluate, 0, 64 | 0]);
export var IngressTlsProtocolExpression = struct(
  n0,
  _ITPE,
  0,
  [_E, _O, _Va],
  [() => IngressTlsProtocolToEvaluate, 0, 0]
);
export var Metadata = struct(
  n0,
  _Me,
  0,
  [_Ti, _IPI, _TPI, _RSI, _SH, _SIA, _TCS, _TPl, _SM, _SIo, _SPen, _CS, _SAo],
  [4, 0, 0, 0, 0, [() => SenderIpAddress, 0], 0, 0, 0, 0, 0, 0, 0]
);
export var PolicyStatement = struct(n0, _PSo, 0, [_C, _Ac], [() => PolicyConditions, 0]);
export var PrivateNetworkConfiguration = struct(n0, _PNC, 0, [_VEI], [0]);
export var PublicNetworkConfiguration = struct(n0, _PNCu, 0, [_IT], [0]);
export var UpdateIngressPointRequest = struct(
  n0,
  _UIPR,
  0,
  [_IPI, _IPN, _STU, _RSI, _TPI, _IPC],
  [0, 0, 0, 0, 0, [() => IngressPointConfiguration, 0]]
);
export var UpdateIngressPointResponse = struct(n0, _UIPRp, 0, [], []);
export var UpdateTrafficPolicyRequest = struct(
  n0,
  _UTPR,
  0,
  [_TPI, _TPN, _PS, _DA, _MMSB],
  [0, 0, () => PolicyStatementList, 0, 1]
);
export var UpdateTrafficPolicyResponse = struct(n0, _UTPRp, 0, [], []);
export var IngressAddressListArnList = 64 | 0;

export var Ipv4Cidrs = 64 | 0;

export var Ipv6Cidrs = 64 | 0;

export var PolicyConditions = list(n0, _PC, 0, () => PolicyCondition);
export var PolicyStatementList = list(n0, _PSL, 0, () => PolicyStatement);
export var IngressBooleanToEvaluate = uni(
  n0,
  _IBTE,
  0,
  [_An, _IIAL],
  [() => IngressAnalysis, () => IngressIsInAddressList]
);
export var IngressIpToEvaluate = uni(n0, _IITE, 0, [_At], [0]);
export var IngressIpv6ToEvaluate = uni(n0, _IITEn, 0, [_At], [0]);
export var IngressPointConfiguration = uni(n0, _IPC, 0, [_SP, _SA], [[() => SmtpPassword, 0], 0]);
export var IngressStringToEvaluate = uni(n0, _ISTE, 0, [_At, _An], [0, () => IngressAnalysis]);
export var IngressTlsProtocolToEvaluate = uni(n0, _ITPTE, 0, [_At], [0]);
export var NetworkConfiguration = uni(
  n0,
  _NC,
  0,
  [_PNCu, _PNC],
  [() => PublicNetworkConfiguration, () => PrivateNetworkConfiguration]
);
export var PolicyCondition = uni(
  n0,
  _PCo,
  0,
  [_SE, _IE, _IEp, _TEl, _BE],
  [
    () => IngressStringExpression,
    () => IngressIpv4Expression,
    () => IngressIpv6Expression,
    () => IngressTlsProtocolExpression,
    () => IngressBooleanExpression,
  ]
);
export var DeleteTrafficPolicy = op(
  n0,
  _DTP,
  2,
  () => DeleteTrafficPolicyRequest,
  () => DeleteTrafficPolicyResponse
);
export var GetArchiveMessage = op(
  n0,
  _GAM,
  0,
  () => GetArchiveMessageRequest,
  () => GetArchiveMessageResponse
);
export var GetIngressPoint = op(
  n0,
  _GIP,
  0,
  () => GetIngressPointRequest,
  () => GetIngressPointResponse
);
export var GetTrafficPolicy = op(
  n0,
  _GTP,
  0,
  () => GetTrafficPolicyRequest,
  () => GetTrafficPolicyResponse
);
export var UpdateIngressPoint = op(
  n0,
  _UIP,
  2,
  () => UpdateIngressPointRequest,
  () => UpdateIngressPointResponse
);
export var UpdateTrafficPolicy = op(
  n0,
  _UTP,
  2,
  () => UpdateTrafficPolicyRequest,
  () => UpdateTrafficPolicyResponse
);
