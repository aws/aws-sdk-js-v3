const _A = "Arn";
const _AKI = "AccessKeyId";
const _AP = "AssumedPrincipal";
const _AR = "AssumeRole";
const _ARI = "AssumedRoleId";
const _ARR = "AssumeRoleRequest";
const _ARRs = "AssumeRoleResponse";
const _ARRss = "AssumeRootRequest";
const _ARRssu = "AssumeRootResponse";
const _ARU = "AssumedRoleUser";
const _ARWSAML = "AssumeRoleWithSAML";
const _ARWSAMLR = "AssumeRoleWithSAMLRequest";
const _ARWSAMLRs = "AssumeRoleWithSAMLResponse";
const _ARWWI = "AssumeRoleWithWebIdentity";
const _ARWWIR = "AssumeRoleWithWebIdentityRequest";
const _ARWWIRs = "AssumeRoleWithWebIdentityResponse";
const _ARs = "AssumeRoot";
const _Ac = "Account";
const _Au = "Audience";
const _C = "Credentials";
const _CA = "ContextAssertion";
const _DAM = "DecodeAuthorizationMessage";
const _DAMR = "DecodeAuthorizationMessageRequest";
const _DAMRe = "DecodeAuthorizationMessageResponse";
const _DM = "DecodedMessage";
const _DS = "DurationSeconds";
const _E = "Expiration";
const _EI = "ExternalId";
const _EM = "EncodedMessage";
const _ETE = "ExpiredTokenException";
const _ETITE = "ExpiredTradeInTokenException";
const _FU = "FederatedUser";
const _FUI = "FederatedUserId";
const _GAKI = "GetAccessKeyInfo";
const _GAKIR = "GetAccessKeyInfoRequest";
const _GAKIRe = "GetAccessKeyInfoResponse";
const _GCI = "GetCallerIdentity";
const _GCIR = "GetCallerIdentityRequest";
const _GCIRe = "GetCallerIdentityResponse";
const _GDAT = "GetDelegatedAccessToken";
const _GDATR = "GetDelegatedAccessTokenRequest";
const _GDATRe = "GetDelegatedAccessTokenResponse";
const _GFT = "GetFederationToken";
const _GFTR = "GetFederationTokenRequest";
const _GFTRe = "GetFederationTokenResponse";
const _GST = "GetSessionToken";
const _GSTR = "GetSessionTokenRequest";
const _GSTRe = "GetSessionTokenResponse";
const _GWIT = "GetWebIdentityToken";
const _GWITR = "GetWebIdentityTokenRequest";
const _GWITRe = "GetWebIdentityTokenResponse";
const _I = "Issuer";
const _IAME = "InvalidAuthorizationMessageException";
const _IDPCEE = "IDPCommunicationErrorException";
const _IDPRCE = "IDPRejectedClaimException";
const _IITE = "InvalidIdentityTokenException";
const _JWTPSEE = "JWTPayloadSizeExceededException";
const _K = "Key";
const _MPDE = "MalformedPolicyDocumentException";
const _N = "Name";
const _NQ = "NameQualifier";
const _OWIFDE = "OutboundWebIdentityFederationDisabledException";
const _P = "Policy";
const _PA = "PolicyArns";
const _PAr = "PrincipalArn";
const _PAro = "ProviderArn";
const _PC = "ProvidedContexts";
const _PCLT = "ProvidedContextsListType";
const _PCr = "ProvidedContext";
const _PDT = "PolicyDescriptorType";
const _PI = "ProviderId";
const _PPS = "PackedPolicySize";
const _PPTLE = "PackedPolicyTooLargeException";
const _Pr = "Provider";
const _RA = "RoleArn";
const _RDE = "RegionDisabledException";
const _RSN = "RoleSessionName";
const _S = "Subject";
const _SA = "SigningAlgorithm";
const _SAK = "SecretAccessKey";
const _SAMLA = "SAMLAssertion";
const _SAMLAT = "SAMLAssertionType";
const _SDEE = "SessionDurationEscalationException";
const _SFWIT = "SubjectFromWebIdentityToken";
const _SI = "SourceIdentity";
const _SN = "SerialNumber";
const _ST = "SubjectType";
const _STe = "SessionToken";
const _T = "Tags";
const _TC = "TokenCode";
const _TIT = "TradeInToken";
const _TP = "TargetPrincipal";
const _TPA = "TaskPolicyArn";
const _TTK = "TransitiveTagKeys";
const _Ta = "Tag";
const _UI = "UserId";
const _V = "Value";
const _WIT = "WebIdentityToken";
const _a = "arn";
const _aKST = "accessKeySecretType";
const _aQE = "awsQueryError";
const _c = "client";
const _cTT = "clientTokenType";
const _e = "error";
const _hE = "httpError";
const _m = "message";
const _pDLT = "policyDescriptorListType";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.sts";
const _tITT = "tradeInTokenType";
const _tLT = "tagListType";
const _wITT = "webIdentityTokenType";
const n0 = "com.amazonaws.sts";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  ExpiredTokenException as __ExpiredTokenException,
  ExpiredTradeInTokenException as __ExpiredTradeInTokenException,
  IDPCommunicationErrorException as __IDPCommunicationErrorException,
  IDPRejectedClaimException as __IDPRejectedClaimException,
  InvalidAuthorizationMessageException as __InvalidAuthorizationMessageException,
  InvalidIdentityTokenException as __InvalidIdentityTokenException,
  JWTPayloadSizeExceededException as __JWTPayloadSizeExceededException,
  MalformedPolicyDocumentException as __MalformedPolicyDocumentException,
  OutboundWebIdentityFederationDisabledException as __OutboundWebIdentityFederationDisabledException,
  PackedPolicyTooLargeException as __PackedPolicyTooLargeException,
  RegionDisabledException as __RegionDisabledException,
  SessionDurationEscalationException as __SessionDurationEscalationException,
} from "../models/errors";
import { STSServiceException as __STSServiceException } from "../models/STSServiceException";

/* eslint no-var: 0 */

export var accessKeySecretType: StaticSimpleSchema = [0, n0, _aKST, 8, 0];
export var clientTokenType: StaticSimpleSchema = [0, n0, _cTT, 8, 0];
export var SAMLAssertionType: StaticSimpleSchema = [0, n0, _SAMLAT, 8, 0];
export var tradeInTokenType: StaticSimpleSchema = [0, n0, _tITT, 8, 0];
export var webIdentityTokenType: StaticSimpleSchema = [0, n0, _wITT, 8, 0];
export var AssumedRoleUser: StaticStructureSchema = [3, n0, _ARU, 0, [_ARI, _A], [0, 0]];
export var AssumeRoleRequest: StaticStructureSchema = [
  3,
  n0,
  _ARR,
  0,
  [_RA, _RSN, _PA, _P, _DS, _T, _TTK, _EI, _SN, _TC, _SI, _PC],
  [0, 0, () => policyDescriptorListType, 0, 1, () => tagListType, 64 | 0, 0, 0, 0, 0, () => ProvidedContextsListType],
];
export var AssumeRoleResponse: StaticStructureSchema = [
  3,
  n0,
  _ARRs,
  0,
  [_C, _ARU, _PPS, _SI],
  [[() => Credentials, 0], () => AssumedRoleUser, 1, 0],
];
export var AssumeRoleWithSAMLRequest: StaticStructureSchema = [
  3,
  n0,
  _ARWSAMLR,
  0,
  [_RA, _PAr, _SAMLA, _PA, _P, _DS],
  [0, 0, [() => SAMLAssertionType, 0], () => policyDescriptorListType, 0, 1],
];
export var AssumeRoleWithSAMLResponse: StaticStructureSchema = [
  3,
  n0,
  _ARWSAMLRs,
  0,
  [_C, _ARU, _PPS, _S, _ST, _I, _Au, _NQ, _SI],
  [[() => Credentials, 0], () => AssumedRoleUser, 1, 0, 0, 0, 0, 0, 0],
];
export var AssumeRoleWithWebIdentityRequest: StaticStructureSchema = [
  3,
  n0,
  _ARWWIR,
  0,
  [_RA, _RSN, _WIT, _PI, _PA, _P, _DS],
  [0, 0, [() => clientTokenType, 0], 0, () => policyDescriptorListType, 0, 1],
];
export var AssumeRoleWithWebIdentityResponse: StaticStructureSchema = [
  3,
  n0,
  _ARWWIRs,
  0,
  [_C, _SFWIT, _ARU, _PPS, _Pr, _Au, _SI],
  [[() => Credentials, 0], 0, () => AssumedRoleUser, 1, 0, 0, 0],
];
export var AssumeRootRequest: StaticStructureSchema = [
  3,
  n0,
  _ARRss,
  0,
  [_TP, _TPA, _DS],
  [0, () => PolicyDescriptorType, 1],
];
export var AssumeRootResponse: StaticStructureSchema = [3, n0, _ARRssu, 0, [_C, _SI], [[() => Credentials, 0], 0]];
export var Credentials: StaticStructureSchema = [
  3,
  n0,
  _C,
  0,
  [_AKI, _SAK, _STe, _E],
  [0, [() => accessKeySecretType, 0], 0, 4],
];
export var DecodeAuthorizationMessageRequest: StaticStructureSchema = [3, n0, _DAMR, 0, [_EM], [0]];
export var DecodeAuthorizationMessageResponse: StaticStructureSchema = [3, n0, _DAMRe, 0, [_DM], [0]];
export var ExpiredTokenException: StaticErrorSchema = [
  -3,
  n0,
  _ETE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ExpiredTokenException`, 400],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ExpiredTokenException, __ExpiredTokenException);

export var ExpiredTradeInTokenException: StaticErrorSchema = [
  -3,
  n0,
  _ETITE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ExpiredTradeInTokenException`, 400],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ExpiredTradeInTokenException, __ExpiredTradeInTokenException);

export var FederatedUser: StaticStructureSchema = [3, n0, _FU, 0, [_FUI, _A], [0, 0]];
export var GetAccessKeyInfoRequest: StaticStructureSchema = [3, n0, _GAKIR, 0, [_AKI], [0]];
export var GetAccessKeyInfoResponse: StaticStructureSchema = [3, n0, _GAKIRe, 0, [_Ac], [0]];
export var GetCallerIdentityRequest: StaticStructureSchema = [3, n0, _GCIR, 0, [], []];
export var GetCallerIdentityResponse: StaticStructureSchema = [3, n0, _GCIRe, 0, [_UI, _Ac, _A], [0, 0, 0]];
export var GetDelegatedAccessTokenRequest: StaticStructureSchema = [
  3,
  n0,
  _GDATR,
  0,
  [_TIT],
  [[() => tradeInTokenType, 0]],
];
export var GetDelegatedAccessTokenResponse: StaticStructureSchema = [
  3,
  n0,
  _GDATRe,
  0,
  [_C, _PPS, _AP],
  [[() => Credentials, 0], 1, 0],
];
export var GetFederationTokenRequest: StaticStructureSchema = [
  3,
  n0,
  _GFTR,
  0,
  [_N, _P, _PA, _DS, _T],
  [0, 0, () => policyDescriptorListType, 1, () => tagListType],
];
export var GetFederationTokenResponse: StaticStructureSchema = [
  3,
  n0,
  _GFTRe,
  0,
  [_C, _FU, _PPS],
  [[() => Credentials, 0], () => FederatedUser, 1],
];
export var GetSessionTokenRequest: StaticStructureSchema = [3, n0, _GSTR, 0, [_DS, _SN, _TC], [1, 0, 0]];
export var GetSessionTokenResponse: StaticStructureSchema = [3, n0, _GSTRe, 0, [_C], [[() => Credentials, 0]]];
export var GetWebIdentityTokenRequest: StaticStructureSchema = [
  3,
  n0,
  _GWITR,
  0,
  [_Au, _DS, _SA, _T],
  [64 | 0, 1, 0, () => tagListType],
];
export var GetWebIdentityTokenResponse: StaticStructureSchema = [
  3,
  n0,
  _GWITRe,
  0,
  [_WIT, _E],
  [[() => webIdentityTokenType, 0], 4],
];
export var IDPCommunicationErrorException: StaticErrorSchema = [
  -3,
  n0,
  _IDPCEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`IDPCommunicationError`, 400],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(IDPCommunicationErrorException, __IDPCommunicationErrorException);

export var IDPRejectedClaimException: StaticErrorSchema = [
  -3,
  n0,
  _IDPRCE,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`IDPRejectedClaim`, 403],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(IDPRejectedClaimException, __IDPRejectedClaimException);

export var InvalidAuthorizationMessageException: StaticErrorSchema = [
  -3,
  n0,
  _IAME,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidAuthorizationMessageException`, 400],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidAuthorizationMessageException, __InvalidAuthorizationMessageException);

export var InvalidIdentityTokenException: StaticErrorSchema = [
  -3,
  n0,
  _IITE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidIdentityToken`, 400],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidIdentityTokenException, __InvalidIdentityTokenException);

export var JWTPayloadSizeExceededException: StaticErrorSchema = [
  -3,
  n0,
  _JWTPSEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`JWTPayloadSizeExceededException`, 400],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(JWTPayloadSizeExceededException, __JWTPayloadSizeExceededException);

export var MalformedPolicyDocumentException: StaticErrorSchema = [
  -3,
  n0,
  _MPDE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`MalformedPolicyDocument`, 400],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(MalformedPolicyDocumentException, __MalformedPolicyDocumentException);

export var OutboundWebIdentityFederationDisabledException: StaticErrorSchema = [
  -3,
  n0,
  _OWIFDE,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`OutboundWebIdentityFederationDisabledException`, 403],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(
  OutboundWebIdentityFederationDisabledException,
  __OutboundWebIdentityFederationDisabledException
);

export var PackedPolicyTooLargeException: StaticErrorSchema = [
  -3,
  n0,
  _PPTLE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`PackedPolicyTooLarge`, 400],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(PackedPolicyTooLargeException, __PackedPolicyTooLargeException);

export var PolicyDescriptorType: StaticStructureSchema = [3, n0, _PDT, 0, [_a], [0]];
export var ProvidedContext: StaticStructureSchema = [3, n0, _PCr, 0, [_PAro, _CA], [0, 0]];
export var RegionDisabledException: StaticErrorSchema = [
  -3,
  n0,
  _RDE,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`RegionDisabledException`, 403],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(RegionDisabledException, __RegionDisabledException);

export var SessionDurationEscalationException: StaticErrorSchema = [
  -3,
  n0,
  _SDEE,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`SessionDurationEscalationException`, 403],
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(SessionDurationEscalationException, __SessionDurationEscalationException);

export var Tag: StaticStructureSchema = [3, n0, _Ta, 0, [_K, _V], [0, 0]];
export var STSServiceException: StaticErrorSchema = [-3, _s, "STSServiceException", 0, [], []];
TypeRegistry.for(_s).registerError(STSServiceException, __STSServiceException);

export var policyDescriptorListType: StaticListSchema = [1, n0, _pDLT, 0, () => PolicyDescriptorType];
export var ProvidedContextsListType: StaticListSchema = [1, n0, _PCLT, 0, () => ProvidedContext];
export var tagKeyListType = 64 | 0;

export var tagListType: StaticListSchema = [1, n0, _tLT, 0, () => Tag];
export var webIdentityTokenAudienceListType = 64 | 0;

export var AssumeRole: StaticOperationSchema = [9, n0, _AR, 0, () => AssumeRoleRequest, () => AssumeRoleResponse];
export var AssumeRoleWithSAML: StaticOperationSchema = [
  9,
  n0,
  _ARWSAML,
  0,
  () => AssumeRoleWithSAMLRequest,
  () => AssumeRoleWithSAMLResponse,
];
export var AssumeRoleWithWebIdentity: StaticOperationSchema = [
  9,
  n0,
  _ARWWI,
  0,
  () => AssumeRoleWithWebIdentityRequest,
  () => AssumeRoleWithWebIdentityResponse,
];
export var AssumeRoot: StaticOperationSchema = [9, n0, _ARs, 0, () => AssumeRootRequest, () => AssumeRootResponse];
export var DecodeAuthorizationMessage: StaticOperationSchema = [
  9,
  n0,
  _DAM,
  0,
  () => DecodeAuthorizationMessageRequest,
  () => DecodeAuthorizationMessageResponse,
];
export var GetAccessKeyInfo: StaticOperationSchema = [
  9,
  n0,
  _GAKI,
  0,
  () => GetAccessKeyInfoRequest,
  () => GetAccessKeyInfoResponse,
];
export var GetCallerIdentity: StaticOperationSchema = [
  9,
  n0,
  _GCI,
  0,
  () => GetCallerIdentityRequest,
  () => GetCallerIdentityResponse,
];
export var GetDelegatedAccessToken: StaticOperationSchema = [
  9,
  n0,
  _GDAT,
  0,
  () => GetDelegatedAccessTokenRequest,
  () => GetDelegatedAccessTokenResponse,
];
export var GetFederationToken: StaticOperationSchema = [
  9,
  n0,
  _GFT,
  0,
  () => GetFederationTokenRequest,
  () => GetFederationTokenResponse,
];
export var GetSessionToken: StaticOperationSchema = [
  9,
  n0,
  _GST,
  0,
  () => GetSessionTokenRequest,
  () => GetSessionTokenResponse,
];
export var GetWebIdentityToken: StaticOperationSchema = [
  9,
  n0,
  _GWIT,
  0,
  () => GetWebIdentityTokenRequest,
  () => GetWebIdentityTokenResponse,
];
