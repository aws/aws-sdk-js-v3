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
const _FPA = "FederatedProviderArn";
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
const _GSC = "GetScopedCredentials";
const _GSCR = "GetScopedCredentialsRequest";
const _GSCRe = "GetScopedCredentialsResponse";
const _GST = "GetSessionToken";
const _GSTR = "GetSessionTokenRequest";
const _GSTRe = "GetSessionTokenResponse";
const _GWIT = "GetWebIdentityToken";
const _GWITR = "GetWebIdentityTokenRequest";
const _GWITRe = "GetWebIdentityTokenResponse";
const _I = "Issuer";
const _IAME = "InvalidAuthorizationMessageException";
const _ICAE = "InvalidContextAssertionException";
const _IDPCEE = "IDPCommunicationErrorException";
const _IDPRCE = "IDPRejectedClaimException";
const _IITE = "InvalidIdentityTokenException";
const _IP = "IdentityProvider";
const _ISCE = "InvalidSubjectCredentialsException";
const _ISLE = "InsufficientSessionLifetimeException";
const _JWTPSEE = "JWTPayloadSizeExceededException";
const _K = "Key";
const _MPDE = "MalformedPolicyDocumentException";
const _MSTS = "MinimumSessionTokenSize";
const _N = "Name";
const _NQ = "NameQualifier";
const _OI = "OriginIdentity";
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
const _SIe = "SessionInfo";
const _SM = "SubjectMode";
const _SN = "SerialNumber";
const _SPC = "ScopedPoliciesCount";
const _SS = "ScopedSession";
const _SSD = "ScopedSessionDescription";
const _SSI = "ScopedSessionId";
const _ST = "SubjectType";
const _STS = "SessionTokenSize";
const _STU = "SessionTokenUtilization";
const _STe = "SessionToken";
const _Sc = "Scope";
const _T = "Tags";
const _TC = "TokenCode";
const _TCr = "TransactionContext";
const _TIPC = "TrustedIdentityPropagationContext";
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
const _oIIT = "originIdentityIssuerType";
const _oIST = "originIdentitySubjectType";
const _oISTT = "originIdentitySubjectTypeType";
const _pDLT = "policyDescriptorListType";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.sts";
const _tCIPMT = "transactionContextIdentityProviderMapType";
const _tCVT = "transactionContextValueType";
const _tITT = "tradeInTokenType";
const _tLT = "tagListType";
const _wITT = "webIdentityTokenType";
const n0 = "com.amazonaws.sts";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  ExpiredTokenException,
  ExpiredTradeInTokenException,
  IDPCommunicationErrorException,
  IDPRejectedClaimException,
  InsufficientSessionLifetimeException,
  InvalidAuthorizationMessageException,
  InvalidContextAssertionException,
  InvalidIdentityTokenException,
  InvalidSubjectCredentialsException,
  JWTPayloadSizeExceededException,
  MalformedPolicyDocumentException,
  OutboundWebIdentityFederationDisabledException,
  PackedPolicyTooLargeException,
  RegionDisabledException,
  SessionDurationEscalationException,
} from "../models/errors";
import { STSServiceException } from "../models/STSServiceException";

/* eslint no-var: 0 */
const _s_registry = new TypeRegistry(_s);
export var STSServiceException$: StaticErrorSchema = [-3, _s, "STSServiceException", 0, [], []];
_s_registry.registerError(STSServiceException$, STSServiceException);
const n0_registry = new TypeRegistry(n0);
export var ExpiredTokenException$: StaticErrorSchema = [-3, n0, _ETE,
  { [_aQE]: [`ExpiredTokenException`, 400], [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
n0_registry.registerError(ExpiredTokenException$, ExpiredTokenException);
export var ExpiredTradeInTokenException$: StaticErrorSchema = [-3, n0, _ETITE,
  { [_aQE]: [`ExpiredTradeInTokenException`, 400], [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
n0_registry.registerError(ExpiredTradeInTokenException$, ExpiredTradeInTokenException);
export var IDPCommunicationErrorException$: StaticErrorSchema = [-3, n0, _IDPCEE,
  { [_aQE]: [`IDPCommunicationError`, 400], [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
n0_registry.registerError(IDPCommunicationErrorException$, IDPCommunicationErrorException);
export var IDPRejectedClaimException$: StaticErrorSchema = [-3, n0, _IDPRCE,
  { [_aQE]: [`IDPRejectedClaim`, 403], [_e]: _c, [_hE]: 403 },
  [_m],
  [0]
];
n0_registry.registerError(IDPRejectedClaimException$, IDPRejectedClaimException);
export var InsufficientSessionLifetimeException$: StaticErrorSchema = [-3, n0, _ISLE,
  { [_aQE]: [`InsufficientSessionLifetime`, 400], [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
n0_registry.registerError(InsufficientSessionLifetimeException$, InsufficientSessionLifetimeException);
export var InvalidAuthorizationMessageException$: StaticErrorSchema = [-3, n0, _IAME,
  { [_aQE]: [`InvalidAuthorizationMessageException`, 400], [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
n0_registry.registerError(InvalidAuthorizationMessageException$, InvalidAuthorizationMessageException);
export var InvalidContextAssertionException$: StaticErrorSchema = [-3, n0, _ICAE,
  { [_aQE]: [`InvalidContextAssertion`, 400], [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
n0_registry.registerError(InvalidContextAssertionException$, InvalidContextAssertionException);
export var InvalidIdentityTokenException$: StaticErrorSchema = [-3, n0, _IITE,
  { [_aQE]: [`InvalidIdentityToken`, 400], [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
n0_registry.registerError(InvalidIdentityTokenException$, InvalidIdentityTokenException);
export var InvalidSubjectCredentialsException$: StaticErrorSchema = [-3, n0, _ISCE,
  { [_aQE]: [`InvalidSubjectCredentials`, 400], [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
n0_registry.registerError(InvalidSubjectCredentialsException$, InvalidSubjectCredentialsException);
export var JWTPayloadSizeExceededException$: StaticErrorSchema = [-3, n0, _JWTPSEE,
  { [_aQE]: [`JWTPayloadSizeExceededException`, 400], [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
n0_registry.registerError(JWTPayloadSizeExceededException$, JWTPayloadSizeExceededException);
export var MalformedPolicyDocumentException$: StaticErrorSchema = [-3, n0, _MPDE,
  { [_aQE]: [`MalformedPolicyDocument`, 400], [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
n0_registry.registerError(MalformedPolicyDocumentException$, MalformedPolicyDocumentException);
export var OutboundWebIdentityFederationDisabledException$: StaticErrorSchema = [-3, n0, _OWIFDE,
  { [_aQE]: [`OutboundWebIdentityFederationDisabledException`, 403], [_e]: _c, [_hE]: 403 },
  [_m],
  [0]
];
n0_registry.registerError(OutboundWebIdentityFederationDisabledException$, OutboundWebIdentityFederationDisabledException);
export var PackedPolicyTooLargeException$: StaticErrorSchema = [-3, n0, _PPTLE,
  { [_aQE]: [`PackedPolicyTooLarge`, 400], [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
n0_registry.registerError(PackedPolicyTooLargeException$, PackedPolicyTooLargeException);
export var RegionDisabledException$: StaticErrorSchema = [-3, n0, _RDE,
  { [_aQE]: [`RegionDisabledException`, 403], [_e]: _c, [_hE]: 403 },
  [_m],
  [0]
];
n0_registry.registerError(RegionDisabledException$, RegionDisabledException);
export var SessionDurationEscalationException$: StaticErrorSchema = [-3, n0, _SDEE,
  { [_aQE]: [`SessionDurationEscalationException`, 403], [_e]: _c, [_hE]: 403 },
  [_m],
  [0]
];
n0_registry.registerError(SessionDurationEscalationException$, SessionDurationEscalationException);
/**
 * TypeRegistry instances containing modeled errors.
 * @internal
 *
 */
export const errorTypeRegistries = [
  _s_registry,
  n0_registry,
]
var accessKeySecretType: StaticSimpleSchema = [0, n0, _aKST, 8, 0];
var clientTokenType: StaticSimpleSchema = [0, n0, _cTT, 8, 0];
var originIdentityIssuerType: StaticSimpleSchema = [0, n0, _oIIT, 8, 0];
var originIdentitySubjectType: StaticSimpleSchema = [0, n0, _oIST, 8, 0];
var originIdentitySubjectTypeType: StaticSimpleSchema = [0, n0, _oISTT, 8, 0];
var SAMLAssertionType: StaticSimpleSchema = [0, n0, _SAMLAT, 8, 0];
var tradeInTokenType: StaticSimpleSchema = [0, n0, _tITT, 8, 0];
var transactionContextValueType: StaticSimpleSchema = [0, n0, _tCVT, 8, 0];
var webIdentityTokenType: StaticSimpleSchema = [0, n0, _wITT, 8, 0];
export var AssumedRoleUser$: StaticStructureSchema = [3, n0, _ARU,
  0,
  [_ARI, _A],
  [0, 0], 2
];
export var AssumeRoleRequest$: StaticStructureSchema = [3, n0, _ARR,
  0,
  [_RA, _RSN, _PA, _P, _DS, _T, _TTK, _EI, _SN, _TC, _SI, _PC, _MSTS],
  [0, 0, () => policyDescriptorListType, 0, 1, () => tagListType, 64 | 0, 0, 0, 0, 0, () => ProvidedContextsListType, 1], 2
];
export var AssumeRoleResponse$: StaticStructureSchema = [3, n0, _ARRs,
  0,
  [_C, _ARU, _PPS, _SI, _STU, _STS],
  [[() => Credentials$, 0], () => AssumedRoleUser$, 1, 0, 1, 1]
];
export var AssumeRoleWithSAMLRequest$: StaticStructureSchema = [3, n0, _ARWSAMLR,
  0,
  [_RA, _PAr, _SAMLA, _PA, _P, _DS, _MSTS],
  [0, 0, [() => SAMLAssertionType, 0], () => policyDescriptorListType, 0, 1, 1], 3
];
export var AssumeRoleWithSAMLResponse$: StaticStructureSchema = [3, n0, _ARWSAMLRs,
  0,
  [_C, _ARU, _PPS, _S, _ST, _I, _Au, _NQ, _SI, _STU, _STS, _TIPC],
  [[() => Credentials$, 0], () => AssumedRoleUser$, 1, 0, 0, 0, 0, 0, 0, 1, 1, [() => TrustedIdentityPropagationContext$, 0]]
];
export var AssumeRoleWithWebIdentityRequest$: StaticStructureSchema = [3, n0, _ARWWIR,
  0,
  [_RA, _RSN, _WIT, _PI, _PA, _P, _DS, _MSTS],
  [0, 0, [() => clientTokenType, 0], 0, () => policyDescriptorListType, 0, 1, 1], 3
];
export var AssumeRoleWithWebIdentityResponse$: StaticStructureSchema = [3, n0, _ARWWIRs,
  0,
  [_C, _SFWIT, _ARU, _PPS, _Pr, _Au, _SI, _STU, _STS, _TIPC],
  [[() => Credentials$, 0], 0, () => AssumedRoleUser$, 1, 0, 0, 0, 1, 1, [() => TrustedIdentityPropagationContext$, 0]]
];
export var AssumeRootRequest$: StaticStructureSchema = [3, n0, _ARRss,
  0,
  [_TP, _TPA, _DS, _MSTS],
  [0, () => PolicyDescriptorType$, 1, 1], 2
];
export var AssumeRootResponse$: StaticStructureSchema = [3, n0, _ARRssu,
  0,
  [_C, _SI, _STU, _STS],
  [[() => Credentials$, 0], 0, 1, 1]
];
export var Credentials$: StaticStructureSchema = [3, n0, _C,
  0,
  [_AKI, _SAK, _STe, _E],
  [0, [() => accessKeySecretType, 0], 0, 4], 4
];
export var DecodeAuthorizationMessageRequest$: StaticStructureSchema = [3, n0, _DAMR,
  0,
  [_EM],
  [0], 1
];
export var DecodeAuthorizationMessageResponse$: StaticStructureSchema = [3, n0, _DAMRe,
  0,
  [_DM],
  [0]
];
export var FederatedUser$: StaticStructureSchema = [3, n0, _FU,
  0,
  [_FUI, _A],
  [0, 0], 2
];
export var GetAccessKeyInfoRequest$: StaticStructureSchema = [3, n0, _GAKIR,
  0,
  [_AKI],
  [0], 1
];
export var GetAccessKeyInfoResponse$: StaticStructureSchema = [3, n0, _GAKIRe,
  0,
  [_Ac],
  [0]
];
export var GetCallerIdentityRequest$: StaticStructureSchema = [3, n0, _GCIR,
  0,
  [],
  []
];
export var GetCallerIdentityResponse$: StaticStructureSchema = [3, n0, _GCIRe,
  0,
  [_UI, _Ac, _A],
  [0, 0, 0]
];
export var GetDelegatedAccessTokenRequest$: StaticStructureSchema = [3, n0, _GDATR,
  0,
  [_TIT],
  [[() => tradeInTokenType, 0]], 1
];
export var GetDelegatedAccessTokenResponse$: StaticStructureSchema = [3, n0, _GDATRe,
  0,
  [_C, _PPS, _AP],
  [[() => Credentials$, 0], 1, 0]
];
export var GetFederationTokenRequest$: StaticStructureSchema = [3, n0, _GFTR,
  0,
  [_N, _P, _PA, _DS, _T, _MSTS],
  [0, 0, () => policyDescriptorListType, 1, () => tagListType, 1], 1
];
export var GetFederationTokenResponse$: StaticStructureSchema = [3, n0, _GFTRe,
  0,
  [_C, _FU, _PPS, _STU, _STS],
  [[() => Credentials$, 0], () => FederatedUser$, 1, 1, 1]
];
export var GetScopedCredentialsRequest$: StaticStructureSchema = [3, n0, _GSCR,
  0,
  [_P, _DS, _MSTS, _SSD],
  [0, 1, 1, 0]
];
export var GetScopedCredentialsResponse$: StaticStructureSchema = [3, n0, _GSCRe,
  0,
  [_C, _SIe, _STU, _STS, _SPC, _SI],
  [[() => Credentials$, 0], () => ScopedSession$, 1, 1, 1, 0]
];
export var GetSessionTokenRequest$: StaticStructureSchema = [3, n0, _GSTR,
  0,
  [_DS, _SN, _TC, _MSTS],
  [1, 0, 0, 1]
];
export var GetSessionTokenResponse$: StaticStructureSchema = [3, n0, _GSTRe,
  0,
  [_C, _STU, _STS],
  [[() => Credentials$, 0], 1, 1]
];
export var GetWebIdentityTokenRequest$: StaticStructureSchema = [3, n0, _GWITR,
  0,
  [_Au, _SA, _DS, _Sc, _SM, _T],
  [64 | 0, 0, 1, 0, 0, () => tagListType], 2
];
export var GetWebIdentityTokenResponse$: StaticStructureSchema = [3, n0, _GWITRe,
  0,
  [_WIT, _E],
  [[() => webIdentityTokenType, 0], 4]
];
export var OriginIdentity$: StaticStructureSchema = [3, n0, _OI,
  0,
  [_S, _ST, _I, _FPA],
  [[() => originIdentitySubjectType, 0], [() => originIdentitySubjectTypeType, 0], [() => originIdentityIssuerType, 0], 0]
];
export var PolicyDescriptorType$: StaticStructureSchema = [3, n0, _PDT,
  0,
  [_a],
  [0]
];
export var ProvidedContext$: StaticStructureSchema = [3, n0, _PCr,
  0,
  [_PAro, _CA],
  [0, 0]
];
export var ScopedSession$: StaticStructureSchema = [3, n0, _SS,
  0,
  [_SSI, _A],
  [0, 0], 2
];
export var Tag$: StaticStructureSchema = [3, n0, _Ta,
  0,
  [_K, _V],
  [0, 0], 2
];
export var TransactionContext$: StaticStructureSchema = [3, n0, _TCr,
  0,
  [_IP],
  [[() => transactionContextIdentityProviderMapType, 0]]
];
export var TrustedIdentityPropagationContext$: StaticStructureSchema = [3, n0, _TIPC,
  8,
  [_OI, _TCr],
  [[() => OriginIdentity$, 0], [() => TransactionContext$, 0]]
];
var policyDescriptorListType: StaticListSchema = [1, n0, _pDLT,
  0, () => PolicyDescriptorType$
];
var ProvidedContextsListType: StaticListSchema = [1, n0, _PCLT,
  0, () => ProvidedContext$
];
var tagKeyListType = 64 | 0;
var tagListType: StaticListSchema = [1, n0, _tLT,
  0, () => Tag$
];
var webIdentityTokenAudienceListType = 64 | 0;
var transactionContextIdentityProviderMapType: StaticMapSchema = [2, n0, _tCIPMT,
  0, [0,
    0]
  , [() => transactionContextValueType,
    0]
];
export var AssumeRole$: StaticOperationSchema = [9, n0, _AR,
  0, () => AssumeRoleRequest$, () => AssumeRoleResponse$
];
export var AssumeRoleWithSAML$: StaticOperationSchema = [9, n0, _ARWSAML,
  0, () => AssumeRoleWithSAMLRequest$, () => AssumeRoleWithSAMLResponse$
];
export var AssumeRoleWithWebIdentity$: StaticOperationSchema = [9, n0, _ARWWI,
  0, () => AssumeRoleWithWebIdentityRequest$, () => AssumeRoleWithWebIdentityResponse$
];
export var AssumeRoot$: StaticOperationSchema = [9, n0, _ARs,
  0, () => AssumeRootRequest$, () => AssumeRootResponse$
];
export var DecodeAuthorizationMessage$: StaticOperationSchema = [9, n0, _DAM,
  0, () => DecodeAuthorizationMessageRequest$, () => DecodeAuthorizationMessageResponse$
];
export var GetAccessKeyInfo$: StaticOperationSchema = [9, n0, _GAKI,
  0, () => GetAccessKeyInfoRequest$, () => GetAccessKeyInfoResponse$
];
export var GetCallerIdentity$: StaticOperationSchema = [9, n0, _GCI,
  0, () => GetCallerIdentityRequest$, () => GetCallerIdentityResponse$
];
export var GetDelegatedAccessToken$: StaticOperationSchema = [9, n0, _GDAT,
  0, () => GetDelegatedAccessTokenRequest$, () => GetDelegatedAccessTokenResponse$
];
export var GetFederationToken$: StaticOperationSchema = [9, n0, _GFT,
  0, () => GetFederationTokenRequest$, () => GetFederationTokenResponse$
];
export var GetScopedCredentials$: StaticOperationSchema = [9, n0, _GSC,
  0, () => GetScopedCredentialsRequest$, () => GetScopedCredentialsResponse$
];
export var GetSessionToken$: StaticOperationSchema = [9, n0, _GST,
  0, () => GetSessionTokenRequest$, () => GetSessionTokenResponse$
];
export var GetWebIdentityToken$: StaticOperationSchema = [9, n0, _GWIT,
  0, () => GetWebIdentityTokenRequest$, () => GetWebIdentityTokenResponse$
];
