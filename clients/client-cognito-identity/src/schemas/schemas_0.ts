const _ACF = "AllowClassicFlow";
const _AI = "AccountId";
const _AKI = "AccessKeyId";
const _ARR = "AmbiguousRoleResolution";
const _AUI = "AllowUnauthenticatedIdentities";
const _C = "Credentials";
const _CD = "CreationDate";
const _CI = "ClientId";
const _CIP = "CognitoIdentityProvider";
const _CIPI = "CreateIdentityPoolInput";
const _CIPL = "CognitoIdentityProviderList";
const _CIPo = "CognitoIdentityProviders";
const _CIPr = "CreateIdentityPool";
const _CME = "ConcurrentModificationException";
const _CRA = "CustomRoleArn";
const _Cl = "Claim";
const _DI = "DeleteIdentities";
const _DII = "DeleteIdentitiesInput";
const _DIIe = "DescribeIdentityInput";
const _DIP = "DeleteIdentityPool";
const _DIPI = "DeleteIdentityPoolInput";
const _DIPIe = "DescribeIdentityPoolInput";
const _DIPe = "DescribeIdentityPool";
const _DIR = "DeleteIdentitiesResponse";
const _DIe = "DescribeIdentity";
const _DPN = "DeveloperProviderName";
const _DUARE = "DeveloperUserAlreadyRegisteredException";
const _DUI = "DeveloperUserIdentifier";
const _DUIL = "DeveloperUserIdentifierList";
const _DUIe = "DestinationUserIdentifier";
const _E = "Expiration";
const _EC = "ErrorCode";
const _ESE = "ExternalServiceException";
const _GCFI = "GetCredentialsForIdentity";
const _GCFII = "GetCredentialsForIdentityInput";
const _GCFIR = "GetCredentialsForIdentityResponse";
const _GI = "GetId";
const _GII = "GetIdInput";
const _GIPR = "GetIdentityPoolRoles";
const _GIPRI = "GetIdentityPoolRolesInput";
const _GIPRR = "GetIdentityPoolRolesResponse";
const _GIR = "GetIdResponse";
const _GOIT = "GetOpenIdToken";
const _GOITFDI = "GetOpenIdTokenForDeveloperIdentity";
const _GOITFDII = "GetOpenIdTokenForDeveloperIdentityInput";
const _GOITFDIR = "GetOpenIdTokenForDeveloperIdentityResponse";
const _GOITI = "GetOpenIdTokenInput";
const _GOITR = "GetOpenIdTokenResponse";
const _GPTAM = "GetPrincipalTagAttributeMap";
const _GPTAMI = "GetPrincipalTagAttributeMapInput";
const _GPTAMR = "GetPrincipalTagAttributeMapResponse";
const _HD = "HideDisabled";
const _I = "Identities";
const _ID = "IdentityDescription";
const _IEE = "InternalErrorException";
const _II = "IdentityId";
const _IIPCE = "InvalidIdentityPoolConfigurationException";
const _IITD = "IdentityIdsToDelete";
const _IL = "IdentitiesList";
const _IP = "IdentityPool";
const _IPE = "InvalidParameterException";
const _IPI = "IdentityPoolId";
const _IPL = "IdentityPoolsList";
const _IPN = "IdentityPoolName";
const _IPNd = "IdentityProviderName";
const _IPSD = "IdentityPoolShortDescription";
const _IPT = "IdentityProviderToken";
const _IPTd = "IdentityPoolTags";
const _IPd = "IdentityPools";
const _L = "Logins";
const _LDI = "LookupDeveloperIdentity";
const _LDII = "LookupDeveloperIdentityInput";
const _LDIR = "LookupDeveloperIdentityResponse";
const _LEE = "LimitExceededException";
const _LI = "ListIdentities";
const _LII = "ListIdentitiesInput";
const _LIP = "ListIdentityPools";
const _LIPI = "ListIdentityPoolsInput";
const _LIPR = "ListIdentityPoolsResponse";
const _LIR = "ListIdentitiesResponse";
const _LM = "LoginsMap";
const _LMD = "LastModifiedDate";
const _LTFR = "ListTagsForResource";
const _LTFRI = "ListTagsForResourceInput";
const _LTFRR = "ListTagsForResourceResponse";
const _LTR = "LoginsToRemove";
const _MDI = "MergeDeveloperIdentities";
const _MDII = "MergeDeveloperIdentitiesInput";
const _MDIR = "MergeDeveloperIdentitiesResponse";
const _MR = "MaxResults";
const _MRL = "MappingRulesList";
const _MRa = "MappingRule";
const _MT = "MatchType";
const _NAE = "NotAuthorizedException";
const _NT = "NextToken";
const _OICPARN = "OpenIdConnectProviderARNs";
const _OIDCT = "OIDCToken";
const _PN = "ProviderName";
const _PT = "PrincipalTags";
const _R = "Roles";
const _RA = "ResourceArn";
const _RARN = "RoleARN";
const _RC = "RulesConfiguration";
const _RCE = "ResourceConflictException";
const _RCT = "RulesConfigurationType";
const _RM = "RoleMappings";
const _RMM = "RoleMappingMap";
const _RMo = "RoleMapping";
const _RNFE = "ResourceNotFoundException";
const _Ru = "Rules";
const _SIPR = "SetIdentityPoolRoles";
const _SIPRI = "SetIdentityPoolRolesInput";
const _SK = "SecretKey";
const _SKS = "SecretKeyString";
const _SLP = "SupportedLoginProviders";
const _SPARN = "SamlProviderARNs";
const _SPTAM = "SetPrincipalTagAttributeMap";
const _SPTAMI = "SetPrincipalTagAttributeMapInput";
const _SPTAMR = "SetPrincipalTagAttributeMapResponse";
const _SSTC = "ServerSideTokenCheck";
const _ST = "SessionToken";
const _SUI = "SourceUserIdentifier";
const _T = "Token";
const _TD = "TokenDuration";
const _TK = "TagKeys";
const _TMRE = "TooManyRequestsException";
const _TR = "TagResource";
const _TRI = "TagResourceInput";
const _TRR = "TagResourceResponse";
const _Ta = "Tags";
const _Ty = "Type";
const _UD = "UseDefaults";
const _UDI = "UnlinkDeveloperIdentity";
const _UDII = "UnlinkDeveloperIdentityInput";
const _UI = "UnlinkIdentity";
const _UII = "UnprocessedIdentityIds";
const _UIIL = "UnprocessedIdentityIdList";
const _UIIn = "UnlinkIdentityInput";
const _UIInp = "UnprocessedIdentityId";
const _UIP = "UpdateIdentityPool";
const _UR = "UntagResource";
const _URI = "UntagResourceInput";
const _URR = "UntagResourceResponse";
const _V = "Value";
const _c = "client";
const _e = "error";
const _hE = "httpError";
const _m = "message";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.cognitoidentity";
const n0 = "com.amazonaws.cognitoidentity";

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

import { CognitoIdentityServiceException } from "../models/CognitoIdentityServiceException";
import {
  ConcurrentModificationException,
  DeveloperUserAlreadyRegisteredException,
  ExternalServiceException,
  InternalErrorException,
  InvalidIdentityPoolConfigurationException,
  InvalidParameterException,
  LimitExceededException,
  NotAuthorizedException,
  ResourceConflictException,
  ResourceNotFoundException,
  TooManyRequestsException,
} from "../models/errors";

/* eslint no-var: 0 */
var IdentityProviderToken: StaticSimpleSchema = [0, n0, _IPT, 8, 0];
var OIDCToken: StaticSimpleSchema = [0, n0, _OIDCT, 8, 0];
var SecretKeyString: StaticSimpleSchema = [0, n0, _SKS, 8, 0];
export var CognitoIdentityProvider$: StaticStructureSchema = [3, n0, _CIP,
  0,
  [_PN, _CI, _SSTC],
  [0, 0, 2]
];
export var ConcurrentModificationException$: StaticErrorSchema = [-3, n0, _CME,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(ConcurrentModificationException$, ConcurrentModificationException);
export var CreateIdentityPoolInput$: StaticStructureSchema = [3, n0, _CIPI,
  0,
  [_IPN, _AUI, _ACF, _SLP, _DPN, _OICPARN, _CIPo, _SPARN, _IPTd],
  [0, 2, 2, 128 | 0, 0, 64 | 0, () => CognitoIdentityProviderList, 64 | 0, 128 | 0]
];
export var Credentials$: StaticStructureSchema = [3, n0, _C,
  0,
  [_AKI, _SK, _ST, _E],
  [0, [() => SecretKeyString, 0], 0, 4]
];
export var DeleteIdentitiesInput$: StaticStructureSchema = [3, n0, _DII,
  0,
  [_IITD],
  [64 | 0]
];
export var DeleteIdentitiesResponse$: StaticStructureSchema = [3, n0, _DIR,
  0,
  [_UII],
  [() => UnprocessedIdentityIdList]
];
export var DeleteIdentityPoolInput$: StaticStructureSchema = [3, n0, _DIPI,
  0,
  [_IPI],
  [0]
];
export var DescribeIdentityInput$: StaticStructureSchema = [3, n0, _DIIe,
  0,
  [_II],
  [0]
];
export var DescribeIdentityPoolInput$: StaticStructureSchema = [3, n0, _DIPIe,
  0,
  [_IPI],
  [0]
];
export var DeveloperUserAlreadyRegisteredException$: StaticErrorSchema = [-3, n0, _DUARE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(DeveloperUserAlreadyRegisteredException$, DeveloperUserAlreadyRegisteredException);
export var ExternalServiceException$: StaticErrorSchema = [-3, n0, _ESE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(ExternalServiceException$, ExternalServiceException);
export var GetCredentialsForIdentityInput$: StaticStructureSchema = [3, n0, _GCFII,
  0,
  [_II, _L, _CRA],
  [0, [() => LoginsMap, 0], 0]
];
export var GetCredentialsForIdentityResponse$: StaticStructureSchema = [3, n0, _GCFIR,
  0,
  [_II, _C],
  [0, [() => Credentials$, 0]]
];
export var GetIdentityPoolRolesInput$: StaticStructureSchema = [3, n0, _GIPRI,
  0,
  [_IPI],
  [0]
];
export var GetIdentityPoolRolesResponse$: StaticStructureSchema = [3, n0, _GIPRR,
  0,
  [_IPI, _R, _RM],
  [0, 128 | 0, () => RoleMappingMap]
];
export var GetIdInput$: StaticStructureSchema = [3, n0, _GII,
  0,
  [_AI, _IPI, _L],
  [0, 0, [() => LoginsMap, 0]]
];
export var GetIdResponse$: StaticStructureSchema = [3, n0, _GIR,
  0,
  [_II],
  [0]
];
export var GetOpenIdTokenForDeveloperIdentityInput$: StaticStructureSchema = [3, n0, _GOITFDII,
  0,
  [_IPI, _II, _L, _PT, _TD],
  [0, 0, [() => LoginsMap, 0], 128 | 0, 1]
];
export var GetOpenIdTokenForDeveloperIdentityResponse$: StaticStructureSchema = [3, n0, _GOITFDIR,
  0,
  [_II, _T],
  [0, [() => OIDCToken, 0]]
];
export var GetOpenIdTokenInput$: StaticStructureSchema = [3, n0, _GOITI,
  0,
  [_II, _L],
  [0, [() => LoginsMap, 0]]
];
export var GetOpenIdTokenResponse$: StaticStructureSchema = [3, n0, _GOITR,
  0,
  [_II, _T],
  [0, [() => OIDCToken, 0]]
];
export var GetPrincipalTagAttributeMapInput$: StaticStructureSchema = [3, n0, _GPTAMI,
  0,
  [_IPI, _IPNd],
  [0, 0]
];
export var GetPrincipalTagAttributeMapResponse$: StaticStructureSchema = [3, n0, _GPTAMR,
  0,
  [_IPI, _IPNd, _UD, _PT],
  [0, 0, 2, 128 | 0]
];
export var IdentityDescription$: StaticStructureSchema = [3, n0, _ID,
  0,
  [_II, _L, _CD, _LMD],
  [0, 64 | 0, 4, 4]
];
export var IdentityPool$: StaticStructureSchema = [3, n0, _IP,
  0,
  [_IPI, _IPN, _AUI, _ACF, _SLP, _DPN, _OICPARN, _CIPo, _SPARN, _IPTd],
  [0, 0, 2, 2, 128 | 0, 0, 64 | 0, () => CognitoIdentityProviderList, 64 | 0, 128 | 0]
];
export var IdentityPoolShortDescription$: StaticStructureSchema = [3, n0, _IPSD,
  0,
  [_IPI, _IPN],
  [0, 0]
];
export var InternalErrorException$: StaticErrorSchema = [-3, n0, _IEE,
  { [_e]: _s },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(InternalErrorException$, InternalErrorException);
export var InvalidIdentityPoolConfigurationException$: StaticErrorSchema = [-3, n0, _IIPCE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(InvalidIdentityPoolConfigurationException$, InvalidIdentityPoolConfigurationException);
export var InvalidParameterException$: StaticErrorSchema = [-3, n0, _IPE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(InvalidParameterException$, InvalidParameterException);
export var LimitExceededException$: StaticErrorSchema = [-3, n0, _LEE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(LimitExceededException$, LimitExceededException);
export var ListIdentitiesInput$: StaticStructureSchema = [3, n0, _LII,
  0,
  [_IPI, _MR, _NT, _HD],
  [0, 1, 0, 2]
];
export var ListIdentitiesResponse$: StaticStructureSchema = [3, n0, _LIR,
  0,
  [_IPI, _I, _NT],
  [0, () => IdentitiesList, 0]
];
export var ListIdentityPoolsInput$: StaticStructureSchema = [3, n0, _LIPI,
  0,
  [_MR, _NT],
  [1, 0]
];
export var ListIdentityPoolsResponse$: StaticStructureSchema = [3, n0, _LIPR,
  0,
  [_IPd, _NT],
  [() => IdentityPoolsList, 0]
];
export var ListTagsForResourceInput$: StaticStructureSchema = [3, n0, _LTFRI,
  0,
  [_RA],
  [0]
];
export var ListTagsForResourceResponse$: StaticStructureSchema = [3, n0, _LTFRR,
  0,
  [_Ta],
  [128 | 0]
];
export var LookupDeveloperIdentityInput$: StaticStructureSchema = [3, n0, _LDII,
  0,
  [_IPI, _II, _DUI, _MR, _NT],
  [0, 0, 0, 1, 0]
];
export var LookupDeveloperIdentityResponse$: StaticStructureSchema = [3, n0, _LDIR,
  0,
  [_II, _DUIL, _NT],
  [0, 64 | 0, 0]
];
export var MappingRule$: StaticStructureSchema = [3, n0, _MRa,
  0,
  [_Cl, _MT, _V, _RARN],
  [0, 0, 0, 0]
];
export var MergeDeveloperIdentitiesInput$: StaticStructureSchema = [3, n0, _MDII,
  0,
  [_SUI, _DUIe, _DPN, _IPI],
  [0, 0, 0, 0]
];
export var MergeDeveloperIdentitiesResponse$: StaticStructureSchema = [3, n0, _MDIR,
  0,
  [_II],
  [0]
];
export var NotAuthorizedException$: StaticErrorSchema = [-3, n0, _NAE,
  { [_e]: _c, [_hE]: 403 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(NotAuthorizedException$, NotAuthorizedException);
export var ResourceConflictException$: StaticErrorSchema = [-3, n0, _RCE,
  { [_e]: _c, [_hE]: 409 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(ResourceConflictException$, ResourceConflictException);
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var RoleMapping$: StaticStructureSchema = [3, n0, _RMo,
  0,
  [_Ty, _ARR, _RC],
  [0, 0, () => RulesConfigurationType$]
];
export var RulesConfigurationType$: StaticStructureSchema = [3, n0, _RCT,
  0,
  [_Ru],
  [() => MappingRulesList]
];
export var SetIdentityPoolRolesInput$: StaticStructureSchema = [3, n0, _SIPRI,
  0,
  [_IPI, _R, _RM],
  [0, 128 | 0, () => RoleMappingMap]
];
export var SetPrincipalTagAttributeMapInput$: StaticStructureSchema = [3, n0, _SPTAMI,
  0,
  [_IPI, _IPNd, _UD, _PT],
  [0, 0, 2, 128 | 0]
];
export var SetPrincipalTagAttributeMapResponse$: StaticStructureSchema = [3, n0, _SPTAMR,
  0,
  [_IPI, _IPNd, _UD, _PT],
  [0, 0, 2, 128 | 0]
];
export var TagResourceInput$: StaticStructureSchema = [3, n0, _TRI,
  0,
  [_RA, _Ta],
  [0, 128 | 0]
];
export var TagResourceResponse$: StaticStructureSchema = [3, n0, _TRR,
  0,
  [],
  []
];
export var TooManyRequestsException$: StaticErrorSchema = [-3, n0, _TMRE,
  { [_e]: _c, [_hE]: 429 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(TooManyRequestsException$, TooManyRequestsException);
export var UnlinkDeveloperIdentityInput$: StaticStructureSchema = [3, n0, _UDII,
  0,
  [_II, _IPI, _DPN, _DUI],
  [0, 0, 0, 0]
];
export var UnlinkIdentityInput$: StaticStructureSchema = [3, n0, _UIIn,
  0,
  [_II, _L, _LTR],
  [0, [() => LoginsMap, 0], 64 | 0]
];
export var UnprocessedIdentityId$: StaticStructureSchema = [3, n0, _UIInp,
  0,
  [_II, _EC],
  [0, 0]
];
export var UntagResourceInput$: StaticStructureSchema = [3, n0, _URI,
  0,
  [_RA, _TK],
  [0, 64 | 0]
];
export var UntagResourceResponse$: StaticStructureSchema = [3, n0, _URR,
  0,
  [],
  []
];
var __Unit = "unit" as const;
export var CognitoIdentityServiceException$: StaticErrorSchema = [-3, _sm, "CognitoIdentityServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(CognitoIdentityServiceException$, CognitoIdentityServiceException);
var CognitoIdentityProviderList: StaticListSchema = [1, n0, _CIPL,
  0, () => CognitoIdentityProvider$
];
var DeveloperUserIdentifierList = 64 | 0;
var IdentitiesList: StaticListSchema = [1, n0, _IL,
  0, () => IdentityDescription$
];
var IdentityIdList = 64 | 0;
var IdentityPoolsList: StaticListSchema = [1, n0, _IPL,
  0, () => IdentityPoolShortDescription$
];
var IdentityPoolTagsListType = 64 | 0;
var LoginsList = 64 | 0;
var MappingRulesList: StaticListSchema = [1, n0, _MRL,
  0, () => MappingRule$
];
var OIDCProviderList = 64 | 0;
var SAMLProviderList = 64 | 0;
var UnprocessedIdentityIdList: StaticListSchema = [1, n0, _UIIL,
  0, () => UnprocessedIdentityId$
];
var IdentityPoolTagsType = 128 | 0;
var IdentityProviders = 128 | 0;
var LoginsMap: StaticMapSchema = [2, n0, _LM,
  0, [0,
    0]
  , [() => IdentityProviderToken,
    0]
];
var PrincipalTags = 128 | 0;
var RoleMappingMap: StaticMapSchema = [2, n0, _RMM,
  0, 0, () => RoleMapping$
];
var RolesMap = 128 | 0;
export var CreateIdentityPool$: StaticOperationSchema = [9, n0, _CIPr,
  0, () => CreateIdentityPoolInput$, () => IdentityPool$
];
export var DeleteIdentities$: StaticOperationSchema = [9, n0, _DI,
  0, () => DeleteIdentitiesInput$, () => DeleteIdentitiesResponse$
];
export var DeleteIdentityPool$: StaticOperationSchema = [9, n0, _DIP,
  0, () => DeleteIdentityPoolInput$, () => __Unit
];
export var DescribeIdentity$: StaticOperationSchema = [9, n0, _DIe,
  0, () => DescribeIdentityInput$, () => IdentityDescription$
];
export var DescribeIdentityPool$: StaticOperationSchema = [9, n0, _DIPe,
  0, () => DescribeIdentityPoolInput$, () => IdentityPool$
];
export var GetCredentialsForIdentity$: StaticOperationSchema = [9, n0, _GCFI,
  0, () => GetCredentialsForIdentityInput$, () => GetCredentialsForIdentityResponse$
];
export var GetId$: StaticOperationSchema = [9, n0, _GI,
  0, () => GetIdInput$, () => GetIdResponse$
];
export var GetIdentityPoolRoles$: StaticOperationSchema = [9, n0, _GIPR,
  0, () => GetIdentityPoolRolesInput$, () => GetIdentityPoolRolesResponse$
];
export var GetOpenIdToken$: StaticOperationSchema = [9, n0, _GOIT,
  0, () => GetOpenIdTokenInput$, () => GetOpenIdTokenResponse$
];
export var GetOpenIdTokenForDeveloperIdentity$: StaticOperationSchema = [9, n0, _GOITFDI,
  0, () => GetOpenIdTokenForDeveloperIdentityInput$, () => GetOpenIdTokenForDeveloperIdentityResponse$
];
export var GetPrincipalTagAttributeMap$: StaticOperationSchema = [9, n0, _GPTAM,
  0, () => GetPrincipalTagAttributeMapInput$, () => GetPrincipalTagAttributeMapResponse$
];
export var ListIdentities$: StaticOperationSchema = [9, n0, _LI,
  0, () => ListIdentitiesInput$, () => ListIdentitiesResponse$
];
export var ListIdentityPools$: StaticOperationSchema = [9, n0, _LIP,
  0, () => ListIdentityPoolsInput$, () => ListIdentityPoolsResponse$
];
export var ListTagsForResource$: StaticOperationSchema = [9, n0, _LTFR,
  0, () => ListTagsForResourceInput$, () => ListTagsForResourceResponse$
];
export var LookupDeveloperIdentity$: StaticOperationSchema = [9, n0, _LDI,
  0, () => LookupDeveloperIdentityInput$, () => LookupDeveloperIdentityResponse$
];
export var MergeDeveloperIdentities$: StaticOperationSchema = [9, n0, _MDI,
  0, () => MergeDeveloperIdentitiesInput$, () => MergeDeveloperIdentitiesResponse$
];
export var SetIdentityPoolRoles$: StaticOperationSchema = [9, n0, _SIPR,
  0, () => SetIdentityPoolRolesInput$, () => __Unit
];
export var SetPrincipalTagAttributeMap$: StaticOperationSchema = [9, n0, _SPTAM,
  0, () => SetPrincipalTagAttributeMapInput$, () => SetPrincipalTagAttributeMapResponse$
];
export var TagResource$: StaticOperationSchema = [9, n0, _TR,
  0, () => TagResourceInput$, () => TagResourceResponse$
];
export var UnlinkDeveloperIdentity$: StaticOperationSchema = [9, n0, _UDI,
  0, () => UnlinkDeveloperIdentityInput$, () => __Unit
];
export var UnlinkIdentity$: StaticOperationSchema = [9, n0, _UI,
  0, () => UnlinkIdentityInput$, () => __Unit
];
export var UntagResource$: StaticOperationSchema = [9, n0, _UR,
  0, () => UntagResourceInput$, () => UntagResourceResponse$
];
export var UpdateIdentityPool$: StaticOperationSchema = [9, n0, _UIP,
  0, () => IdentityPool$, () => IdentityPool$
];
