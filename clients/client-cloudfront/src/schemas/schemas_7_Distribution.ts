// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import {
  _ACMCA,
  _AM,
  _C,
  _CAo,
  _CB,
  _CBa,
  _CBL,
  _Ce,
  _CER,
  _CERL,
  _CERu,
  _CFDC,
  _CH,
  _CM,
  _COC,
  _Coo,
  _CPI,
  _CPo,
  _CSe,
  _CTon,
  _DCB,
  _DN,
  _DTTL,
  _E,
  _EC,
  _ECMTTL,
  _ETv,
  _FA,
  _FAL,
  _FARN,
  _FAu,
  _FCa,
  _FLEI,
  _Fo,
  _FV,
  _GC,
  _GRe,
  _H,
  _HN,
  _HTTPP,
  _HTTPSP,
  _HVe,
  _I,
  _IAMCI,
  _IAT,
  _IBn,
  _Id,
  _KG,
  _LFA,
  _LFAa,
  _LFAL,
  _LFARN,
  _Me,
  _Met,
  _ML,
  _MPV,
  _MTTL,
  _MTTLa,
  _N,
  _O,
  _OACI,
  _OAI,
  _OCH,
  _OCHL,
  _OG,
  _OGFC,
  _OGL,
  _OGM,
  _OGML,
  _OGMr,
  _OGr,
  _OI,
  _OKT,
  _OL,
  _OP,
  _OPP,
  _Or,
  _ORPI,
  _ORT,
  _OS,
  _OSP,
  _OSR,
  _PP,
  _Q,
  _QSCK,
  _QSCKL,
  _QSu,
  _R,
  _RC,
  _RCT,
  _RHPI,
  _RLCA,
  _RPP,
  _RTe,
  _SC,
  _SCL,
  _SCt,
  _SCta,
  _SOC,
  _SS,
  _SSLSM,
  _TKG,
  _TKGIL,
  _TOI,
  _TS,
  _VC,
  _VOC,
  _VOI,
  _VPP,
  _WN,
  _xN,
  CookieNames,
  Headers,
  LocationList,
  n0,
  OriginSslProtocols,
  sensitiveStringType,
  TrustedSigners,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AllowedMethods = struct(n0, _AM, 0, [_Q, _I, _CM], [1, [() => MethodsList, 0], [() => CachedMethods, 0]]);
export var CacheBehavior = struct(
  n0,
  _CB,
  0,
  [
    _PP,
    _TOI,
    _TS,
    _TKG,
    _VPP,
    _AM,
    _SS,
    _C,
    _LFA,
    _FA,
    _FLEI,
    _RLCA,
    _CPI,
    _ORPI,
    _RHPI,
    _GC,
    _FV,
    _MTTL,
    _DTTL,
    _MTTLa,
  ],
  [
    0,
    0,
    [() => TrustedSigners, 0],
    [() => TrustedKeyGroups, 0],
    0,
    [() => AllowedMethods, 0],
    2,
    2,
    [() => LambdaFunctionAssociations, 0],
    [() => FunctionAssociations, 0],
    0,
    0,
    0,
    0,
    0,
    () => GrpcConfig,
    [() => ForwardedValues, 0],
    1,
    1,
    1,
  ]
);
export var CacheBehaviors = struct(n0, _CBa, 0, [_Q, _I], [1, [() => CacheBehaviorList, 0]]);
export var CachedMethods = struct(n0, _CM, 0, [_Q, _I], [1, [() => MethodsList, 0]]);
export var CookiePreference = struct(n0, _CPo, 0, [_Fo, _WN], [0, [() => CookieNames, 0]]);
export var CustomErrorResponse = struct(n0, _CER, 0, [_EC, _RPP, _RC, _ECMTTL], [1, 0, 0, 1]);
export var CustomErrorResponses = struct(n0, _CERu, 0, [_Q, _I], [1, [() => CustomErrorResponseList, 0]]);
export var CustomHeaders = struct(n0, _CH, 0, [_Q, _I], [1, [() => OriginCustomHeadersList, 0]]);
export var CustomOriginConfig = struct(
  n0,
  _COC,
  0,
  [_HTTPP, _HTTPSP, _OPP, _OSP, _ORT, _OKT, _IAT],
  [1, 1, 0, [() => OriginSslProtocols, 0], 1, 1, 0]
);
export var DefaultCacheBehavior = struct(
  n0,
  _DCB,
  0,
  [_TOI, _TS, _TKG, _VPP, _AM, _SS, _C, _LFA, _FA, _FLEI, _RLCA, _CPI, _ORPI, _RHPI, _GC, _FV, _MTTL, _DTTL, _MTTLa],
  [
    0,
    [() => TrustedSigners, 0],
    [() => TrustedKeyGroups, 0],
    0,
    [() => AllowedMethods, 0],
    2,
    2,
    [() => LambdaFunctionAssociations, 0],
    [() => FunctionAssociations, 0],
    0,
    0,
    0,
    0,
    0,
    () => GrpcConfig,
    [() => ForwardedValues, 0],
    1,
    1,
    1,
  ]
);
export var ForwardedValues = struct(
  n0,
  _FV,
  0,
  [_QSu, _Coo, _H, _QSCK],
  [2, [() => CookiePreference, 0], [() => Headers, 0], [() => QueryStringCacheKeys, 0]]
);
export var FunctionAssociation = struct(n0, _FAu, 0, [_FARN, _ETv], [0, 0]);
export var FunctionAssociations = struct(n0, _FA, 0, [_Q, _I], [1, [() => FunctionAssociationList, 0]]);
export var GeoRestriction = struct(n0, _GRe, 0, [_RTe, _Q, _I], [0, 1, [() => LocationList, 0]]);
export var GrpcConfig = struct(n0, _GC, 0, [_E], [2]);
export var LambdaFunctionAssociation = struct(n0, _LFAa, 0, [_LFARN, _ETv, _IBn], [0, 0, 2]);
export var LambdaFunctionAssociations = struct(n0, _LFA, 0, [_Q, _I], [1, [() => LambdaFunctionAssociationList, 0]]);
export var Origin = struct(
  n0,
  _Or,
  0,
  [_Id, _DN, _OP, _CH, _SOC, _COC, _VOC, _CAo, _CTon, _RCT, _OS, _OACI],
  [
    0,
    0,
    0,
    [() => CustomHeaders, 0],
    () => S3OriginConfig,
    [() => CustomOriginConfig, 0],
    () => VpcOriginConfig,
    1,
    1,
    1,
    () => OriginShield,
    0,
  ]
);
export var OriginCustomHeader = struct(n0, _OCH, 0, [_HN, _HVe], [0, [() => sensitiveStringType, 0]]);
export var OriginGroup = struct(
  n0,
  _OGr,
  0,
  [_Id, _FCa, _Me, _SC],
  [0, [() => OriginGroupFailoverCriteria, 0], [() => OriginGroupMembers, 0], 0]
);
export var OriginGroupFailoverCriteria = struct(n0, _OGFC, 0, [_SCt], [[() => StatusCodes, 0]]);
export var OriginGroupMember = struct(n0, _OGM, 0, [_OI], [0]);
export var OriginGroupMembers = struct(n0, _OGMr, 0, [_Q, _I], [1, [() => OriginGroupMemberList, 0]]);
export var OriginGroups = struct(n0, _OG, 0, [_Q, _I], [1, [() => OriginGroupList, 0]]);
export var Origins = struct(n0, _O, 0, [_Q, _I], [1, [() => OriginList, 0]]);
export var OriginShield = struct(n0, _OS, 0, [_E, _OSR], [2, 0]);
export var QueryStringCacheKeys = struct(n0, _QSCK, 0, [_Q, _I], [1, [() => QueryStringCacheKeysList, 0]]);
export var Restrictions = struct(n0, _R, 0, [_GRe], [[() => GeoRestriction, 0]]);
export var S3OriginConfig = struct(n0, _SOC, 0, [_OAI, _ORT], [0, 1]);
export var StatusCodes = struct(n0, _SCt, 0, [_Q, _I], [1, [() => StatusCodeList, 0]]);
export var TrustedKeyGroups = struct(n0, _TKG, 0, [_E, _Q, _I], [2, 1, [() => TrustedKeyGroupIdList, 0]]);
export var ViewerCertificate = struct(
  n0,
  _VC,
  0,
  [_CFDC, _IAMCI, _ACMCA, _SSLSM, _MPV, _Ce, _CSe],
  [2, 0, 0, 0, 0, 0, 0]
);
export var VpcOriginConfig = struct(n0, _VOC, 0, [_VOI, _ORT, _OKT], [0, 1, 1]);
export var CacheBehaviorList = list(n0, _CBL, 0, [
  () => CacheBehavior,
  {
    [_xN]: _CB,
  },
]);
export var CustomErrorResponseList = list(n0, _CERL, 0, [
  () => CustomErrorResponse,
  {
    [_xN]: _CER,
  },
]);
export var FunctionAssociationList = list(n0, _FAL, 0, [
  () => FunctionAssociation,
  {
    [_xN]: _FAu,
  },
]);
export var LambdaFunctionAssociationList = list(n0, _LFAL, 0, [
  () => LambdaFunctionAssociation,
  {
    [_xN]: _LFAa,
  },
]);
export var MethodsList = list(n0, _ML, 0, [
  0,
  {
    [_xN]: _Met,
  },
]);
export var OriginCustomHeadersList = list(n0, _OCHL, 0, [
  () => OriginCustomHeader,
  {
    [_xN]: _OCH,
  },
]);
export var OriginGroupList = list(n0, _OGL, 0, [
  () => OriginGroup,
  {
    [_xN]: _OGr,
  },
]);
export var OriginGroupMemberList = list(n0, _OGML, 0, [
  () => OriginGroupMember,
  {
    [_xN]: _OGM,
  },
]);
export var OriginList = list(n0, _OL, 0, [
  () => Origin,
  {
    [_xN]: _Or,
  },
]);
export var QueryStringCacheKeysList = list(n0, _QSCKL, 0, [
  0,
  {
    [_xN]: _N,
  },
]);
export var StatusCodeList = list(n0, _SCL, 0, [
  1,
  {
    [_xN]: _SCta,
  },
]);
export var TrustedKeyGroupIdList = list(n0, _TKGIL, 0, [
  0,
  {
    [_xN]: _KG,
  },
]);
