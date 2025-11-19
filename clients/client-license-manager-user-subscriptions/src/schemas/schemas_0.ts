const _A = "Attribute";
const _AD = "AssociationDate";
const _ADE = "AccessDeniedException";
const _ADIP = "ActiveDirectoryIdentityProvider";
const _ADS = "ActiveDirectorySettings";
const _ADT = "ActiveDirectoryType";
const _AS = "AddSubnets";
const _AU = "AssociateUser";
const _AUR = "AssociateUserRequest";
const _AURs = "AssociateUserResponse";
const _CE = "ConflictException";
const _CLSE = "CreateLicenseServerEndpoint";
const _CLSER = "CreateLicenseServerEndpointRequest";
const _CLSERr = "CreateLicenseServerEndpointResponse";
const _CP = "CredentialsProvider";
const _CT = "CreationTime";
const _D = "Domain";
const _DCP = "DomainCredentialsProvider";
const _DD = "DisassociationDate";
const _DI = "DirectoryId";
const _DIL = "DomainIpv4List";
const _DILo = "DomainIpv6List";
const _DIP = "DeregisterIdentityProvider";
const _DIPR = "DeregisterIdentityProviderRequest";
const _DIPRe = "DeregisterIdentityProviderResponse";
const _DLSE = "DeleteLicenseServerEndpoint";
const _DLSER = "DeleteLicenseServerEndpointRequest";
const _DLSERe = "DeleteLicenseServerEndpointResponse";
const _DN = "DomainName";
const _DNS = "DomainNetworkSettings";
const _DU = "DisassociateUser";
const _DUR = "DisassociateUserRequest";
const _DURi = "DisassociateUserResponse";
const _E = "Endpoint";
const _F = "Filter";
const _FL = "FilterList";
const _FM = "FailureMessage";
const _Fi = "Filters";
const _HS = "HealthStatus";
const _IA = "Ipv4Address";
const _IAp = "Ipv6Address";
const _II = "InstanceId";
const _IP = "IdentityProvider";
const _IPA = "IdentityProviderArn";
const _IPS = "IdentityProviderSummary";
const _IPSL = "IdentityProviderSummaryList";
const _IPSd = "IdentityProviderSummaries";
const _IS = "InstanceSummary";
const _ISAD = "IsSharedActiveDirectory";
const _ISE = "InternalServerException";
const _ISL = "InstanceSummaryList";
const _ISn = "InstanceSummaries";
const _IUA = "InstanceUserArn";
const _IUS = "InstanceUserSummary";
const _IUSL = "InstanceUserSummaryList";
const _IUSn = "InstanceUserSummaries";
const _LI = "ListInstances";
const _LIP = "ListIdentityProviders";
const _LIPR = "ListIdentityProvidersRequest";
const _LIPRi = "ListIdentityProvidersResponse";
const _LIR = "ListInstancesRequest";
const _LIRi = "ListInstancesResponse";
const _LLSE = "ListLicenseServerEndpoints";
const _LLSER = "ListLicenseServerEndpointsRequest";
const _LLSERi = "ListLicenseServerEndpointsResponse";
const _LPS = "ListProductSubscriptions";
const _LPSR = "ListProductSubscriptionsRequest";
const _LPSRi = "ListProductSubscriptionsResponse";
const _LS = "LicenseServer";
const _LSCD = "LastStatusCheckDate";
const _LSE = "LicenseServerEndpoint";
const _LSEA = "LicenseServerEndpointArn";
const _LSEI = "LicenseServerEndpointId";
const _LSEL = "LicenseServerEndpointList";
const _LSEPS = "LicenseServerEndpointProvisioningStatus";
const _LSEi = "LicenseServerEndpoints";
const _LSL = "LicenseServerList";
const _LSS = "LicenseServerSettings";
const _LSi = "LicenseServers";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _LUA = "ListUserAssociations";
const _LUAR = "ListUserAssociationsRequest";
const _LUARi = "ListUserAssociationsResponse";
const _MR = "MaxResults";
const _NT = "NextToken";
const _O = "Operation";
const _OAI = "OwnerAccountId";
const _P = "Product";
const _PS = "ProvisioningStatus";
const _PUA = "ProductUserArn";
const _PUS = "ProductUserSummaries";
const _PUSL = "ProductUserSummaryList";
const _PUSr = "ProductUserSummary";
const _Pr = "Products";
const _RA = "ResourceArn";
const _RIP = "RegisterIdentityProvider";
const _RIPR = "RegisterIdentityProviderRequest";
const _RIPRe = "RegisterIdentityProviderResponse";
const _RNFE = "ResourceNotFoundException";
const _RS = "RemoveSubnets";
const _RSCP = "RdsSalCredentialsProvider";
const _RSS = "RdsSalSettings";
const _S = "Subnets";
const _SE = "ServerEndpoint";
const _SED = "SubscriptionEndDate";
const _SGI = "SecurityGroupId";
const _SI = "SecretId";
const _SM = "StatusMessage";
const _SMCP = "SecretsManagerCredentialsProvider";
const _SPS = "StartProductSubscription";
const _SPSR = "StartProductSubscriptionRequest";
const _SPSRt = "StartProductSubscriptionResponse";
const _SPSRto = "StopProductSubscriptionRequest";
const _SPSRtop = "StopProductSubscriptionResponse";
const _SPSt = "StopProductSubscription";
const _SQEE = "ServiceQuotaExceededException";
const _SS = "ServerSettings";
const _SSD = "SubscriptionStartDate";
const _ST = "ServerType";
const _Se = "Settings";
const _St = "Status";
const _T = "Tags";
const _TE = "ThrottlingException";
const _TK = "TagKeys";
const _TKL = "TagKeyList";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _U = "Username";
const _UIPS = "UpdateIdentityProviderSettings";
const _UIPSR = "UpdateIdentityProviderSettingsRequest";
const _UIPSRp = "UpdateIdentityProviderSettingsResponse";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _US = "UpdateSettings";
const _V = "Value";
const _VE = "ValidationException";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _m = "message";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.licensemanagerusersubscriptions";
const _tK = "tagKeys";
const n0 = "com.amazonaws.licensemanagerusersubscriptions";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/errors";
import { LicenseManagerUserSubscriptionsServiceException as __LicenseManagerUserSubscriptionsServiceException } from "../models/LicenseManagerUserSubscriptionsServiceException";

/* eslint no-var: 0 */

export var AccessDeniedException: StaticErrorSchema = [
  -3,
  n0,
  _ADE,
  {
    [_e]: _c,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);

export var ActiveDirectoryIdentityProvider: StaticStructureSchema = [
  3,
  n0,
  _ADIP,
  0,
  [_DI, _ADS, _ADT, _ISAD],
  [0, () => ActiveDirectorySettings, 0, 2],
];
export var ActiveDirectorySettings: StaticStructureSchema = [
  3,
  n0,
  _ADS,
  0,
  [_DN, _DIL, _DILo, _DCP, _DNS],
  [0, 64 | 0, 64 | 0, () => CredentialsProvider, () => DomainNetworkSettings],
];
export var AssociateUserRequest: StaticStructureSchema = [
  3,
  n0,
  _AUR,
  0,
  [_U, _II, _IP, _D, _T],
  [0, 0, () => IdentityProvider, 0, [() => Tags, 0]],
];
export var AssociateUserResponse: StaticStructureSchema = [3, n0, _AURs, 0, [_IUS], [() => InstanceUserSummary]];
export var ConflictException: StaticErrorSchema = [
  -3,
  n0,
  _CE,
  {
    [_e]: _s,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);

export var CreateLicenseServerEndpointRequest: StaticStructureSchema = [
  3,
  n0,
  _CLSER,
  0,
  [_IPA, _LSS, _T],
  [0, () => LicenseServerSettings, [() => Tags, 0]],
];
export var CreateLicenseServerEndpointResponse: StaticStructureSchema = [3, n0, _CLSERr, 0, [_IPA, _LSEA], [0, 0]];
export var DeleteLicenseServerEndpointRequest: StaticStructureSchema = [3, n0, _DLSER, 0, [_LSEA, _ST], [0, 0]];
export var DeleteLicenseServerEndpointResponse: StaticStructureSchema = [
  3,
  n0,
  _DLSERe,
  0,
  [_LSE],
  [() => LicenseServerEndpoint],
];
export var DeregisterIdentityProviderRequest: StaticStructureSchema = [
  3,
  n0,
  _DIPR,
  0,
  [_IP, _P, _IPA],
  [() => IdentityProvider, 0, 0],
];
export var DeregisterIdentityProviderResponse: StaticStructureSchema = [
  3,
  n0,
  _DIPRe,
  0,
  [_IPS],
  [() => IdentityProviderSummary],
];
export var DisassociateUserRequest: StaticStructureSchema = [
  3,
  n0,
  _DUR,
  0,
  [_U, _II, _IP, _IUA, _D],
  [0, 0, () => IdentityProvider, 0, 0],
];
export var DisassociateUserResponse: StaticStructureSchema = [3, n0, _DURi, 0, [_IUS], [() => InstanceUserSummary]];
export var DomainNetworkSettings: StaticStructureSchema = [3, n0, _DNS, 0, [_S], [64 | 0]];
export var Filter: StaticStructureSchema = [3, n0, _F, 0, [_A, _O, _V], [0, 0, 0]];
export var IdentityProviderSummary: StaticStructureSchema = [
  3,
  n0,
  _IPS,
  0,
  [_IP, _Se, _P, _St, _IPA, _FM, _OAI],
  [() => IdentityProvider, () => Settings, 0, 0, 0, 0, 0],
];
export var InstanceSummary: StaticStructureSchema = [
  3,
  n0,
  _IS,
  0,
  [_II, _St, _Pr, _LSCD, _SM, _OAI, _IP],
  [0, 0, 64 | 0, 0, 0, 0, () => IdentityProvider],
];
export var InstanceUserSummary: StaticStructureSchema = [
  3,
  n0,
  _IUS,
  0,
  [_U, _II, _IP, _St, _IUA, _SM, _D, _AD, _DD],
  [0, 0, () => IdentityProvider, 0, 0, 0, 0, 0, 0],
];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var LicenseServer: StaticStructureSchema = [3, n0, _LS, 0, [_PS, _HS, _IA, _IAp], [0, 0, 0, 0]];
export var LicenseServerEndpoint: StaticStructureSchema = [
  3,
  n0,
  _LSE,
  0,
  [_IPA, _ST, _SE, _SM, _LSEI, _LSEA, _LSEPS, _LSi, _CT],
  [0, 0, () => ServerEndpoint, 0, 0, 0, 0, () => LicenseServerList, 4],
];
export var LicenseServerSettings: StaticStructureSchema = [3, n0, _LSS, 0, [_ST, _SS], [0, () => ServerSettings]];
export var ListIdentityProvidersRequest: StaticStructureSchema = [
  3,
  n0,
  _LIPR,
  0,
  [_MR, _Fi, _NT],
  [1, () => FilterList, 0],
];
export var ListIdentityProvidersResponse: StaticStructureSchema = [
  3,
  n0,
  _LIPRi,
  0,
  [_IPSd, _NT],
  [() => IdentityProviderSummaryList, 0],
];
export var ListInstancesRequest: StaticStructureSchema = [3, n0, _LIR, 0, [_MR, _NT, _Fi], [1, 0, () => FilterList]];
export var ListInstancesResponse: StaticStructureSchema = [
  3,
  n0,
  _LIRi,
  0,
  [_ISn, _NT],
  [() => InstanceSummaryList, 0],
];
export var ListLicenseServerEndpointsRequest: StaticStructureSchema = [
  3,
  n0,
  _LLSER,
  0,
  [_MR, _Fi, _NT],
  [1, () => FilterList, 0],
];
export var ListLicenseServerEndpointsResponse: StaticStructureSchema = [
  3,
  n0,
  _LLSERi,
  0,
  [_LSEi, _NT],
  [() => LicenseServerEndpointList, 0],
];
export var ListProductSubscriptionsRequest: StaticStructureSchema = [
  3,
  n0,
  _LPSR,
  0,
  [_P, _IP, _MR, _Fi, _NT],
  [0, () => IdentityProvider, 1, () => FilterList, 0],
];
export var ListProductSubscriptionsResponse: StaticStructureSchema = [
  3,
  n0,
  _LPSRi,
  0,
  [_PUS, _NT],
  [() => ProductUserSummaryList, 0],
];
export var ListTagsForResourceRequest: StaticStructureSchema = [3, n0, _LTFRR, 0, [_RA], [[0, 1]]];
export var ListTagsForResourceResponse: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_T], [[() => Tags, 0]]];
export var ListUserAssociationsRequest: StaticStructureSchema = [
  3,
  n0,
  _LUAR,
  0,
  [_II, _IP, _MR, _Fi, _NT],
  [0, () => IdentityProvider, 1, () => FilterList, 0],
];
export var ListUserAssociationsResponse: StaticStructureSchema = [
  3,
  n0,
  _LUARi,
  0,
  [_IUSn, _NT],
  [() => InstanceUserSummaryList, 0],
];
export var ProductUserSummary: StaticStructureSchema = [
  3,
  n0,
  _PUSr,
  0,
  [_U, _P, _IP, _St, _PUA, _SM, _D, _SSD, _SED],
  [0, 0, () => IdentityProvider, 0, 0, 0, 0, 0, 0],
];
export var RdsSalSettings: StaticStructureSchema = [3, n0, _RSS, 0, [_RSCP], [() => CredentialsProvider]];
export var RegisterIdentityProviderRequest: StaticStructureSchema = [
  3,
  n0,
  _RIPR,
  0,
  [_IP, _P, _Se, _T],
  [() => IdentityProvider, 0, () => Settings, [() => Tags, 0]],
];
export var RegisterIdentityProviderResponse: StaticStructureSchema = [
  3,
  n0,
  _RIPRe,
  0,
  [_IPS],
  [() => IdentityProviderSummary],
];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var SecretsManagerCredentialsProvider: StaticStructureSchema = [3, n0, _SMCP, 0, [_SI], [0]];
export var ServerEndpoint: StaticStructureSchema = [3, n0, _SE, 0, [_E], [0]];
export var ServiceQuotaExceededException: StaticErrorSchema = [
  -3,
  n0,
  _SQEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException, __ServiceQuotaExceededException);

export var Settings: StaticStructureSchema = [3, n0, _Se, 0, [_S, _SGI], [64 | 0, 0]];
export var StartProductSubscriptionRequest: StaticStructureSchema = [
  3,
  n0,
  _SPSR,
  0,
  [_U, _IP, _P, _D, _T],
  [0, () => IdentityProvider, 0, 0, [() => Tags, 0]],
];
export var StartProductSubscriptionResponse: StaticStructureSchema = [
  3,
  n0,
  _SPSRt,
  0,
  [_PUSr],
  [() => ProductUserSummary],
];
export var StopProductSubscriptionRequest: StaticStructureSchema = [
  3,
  n0,
  _SPSRto,
  0,
  [_U, _IP, _P, _PUA, _D],
  [0, () => IdentityProvider, 0, 0, 0],
];
export var StopProductSubscriptionResponse: StaticStructureSchema = [
  3,
  n0,
  _SPSRtop,
  0,
  [_PUSr],
  [() => ProductUserSummary],
];
export var TagResourceRequest: StaticStructureSchema = [
  3,
  n0,
  _TRR,
  0,
  [_RA, _T],
  [
    [0, 1],
    [() => Tags, 0],
  ],
];
export var TagResourceResponse: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  {
    [_e]: _c,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);

export var UntagResourceRequest: StaticStructureSchema = [
  3,
  n0,
  _URR,
  0,
  [_RA, _TK],
  [
    [0, 1],
    [
      () => TagKeyList,
      {
        [_hQ]: _tK,
      },
    ],
  ],
];
export var UntagResourceResponse: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var UpdateIdentityProviderSettingsRequest: StaticStructureSchema = [
  3,
  n0,
  _UIPSR,
  0,
  [_IP, _P, _IPA, _US],
  [() => IdentityProvider, 0, 0, () => UpdateSettings],
];
export var UpdateIdentityProviderSettingsResponse: StaticStructureSchema = [
  3,
  n0,
  _UIPSRp,
  0,
  [_IPS],
  [() => IdentityProviderSummary],
];
export var UpdateSettings: StaticStructureSchema = [3, n0, _US, 0, [_AS, _RS, _SGI], [64 | 0, 64 | 0, 0]];
export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  {
    [_e]: _c,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var LicenseManagerUserSubscriptionsServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "LicenseManagerUserSubscriptionsServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(
  LicenseManagerUserSubscriptionsServiceException,
  __LicenseManagerUserSubscriptionsServiceException
);

export var FilterList: StaticListSchema = [1, n0, _FL, 0, () => Filter];
export var IdentityProviderSummaryList: StaticListSchema = [1, n0, _IPSL, 0, () => IdentityProviderSummary];
export var InstanceSummaryList: StaticListSchema = [1, n0, _ISL, 0, () => InstanceSummary];
export var InstanceUserSummaryList: StaticListSchema = [1, n0, _IUSL, 0, () => InstanceUserSummary];
export var IpV4List = 64 | 0;

export var IpV6List = 64 | 0;

export var LicenseServerEndpointList: StaticListSchema = [1, n0, _LSEL, 0, () => LicenseServerEndpoint];
export var LicenseServerList: StaticListSchema = [1, n0, _LSL, 0, () => LicenseServer];
export var ProductUserSummaryList: StaticListSchema = [1, n0, _PUSL, 0, () => ProductUserSummary];
export var StringList = 64 | 0;

export var Subnets = 64 | 0;

export var TagKeyList: StaticListSchema = [1, n0, _TKL, 8, 0];
export var Tags: StaticMapSchema = [2, n0, _T, 8, 0, 0];
export var CredentialsProvider: StaticStructureSchema = [
  3,
  n0,
  _CP,
  0,
  [_SMCP],
  [() => SecretsManagerCredentialsProvider],
];
export var IdentityProvider: StaticStructureSchema = [3, n0, _IP, 0, [_ADIP], [() => ActiveDirectoryIdentityProvider]];
export var ServerSettings: StaticStructureSchema = [3, n0, _SS, 0, [_RSS], [() => RdsSalSettings]];
export var AssociateUser: StaticOperationSchema = [
  9,
  n0,
  _AU,
  {
    [_h]: ["POST", "/user/AssociateUser", 200],
  },
  () => AssociateUserRequest,
  () => AssociateUserResponse,
];
export var CreateLicenseServerEndpoint: StaticOperationSchema = [
  9,
  n0,
  _CLSE,
  {
    [_h]: ["POST", "/license-server/CreateLicenseServerEndpoint", 200],
  },
  () => CreateLicenseServerEndpointRequest,
  () => CreateLicenseServerEndpointResponse,
];
export var DeleteLicenseServerEndpoint: StaticOperationSchema = [
  9,
  n0,
  _DLSE,
  {
    [_h]: ["POST", "/license-server/DeleteLicenseServerEndpoint", 200],
  },
  () => DeleteLicenseServerEndpointRequest,
  () => DeleteLicenseServerEndpointResponse,
];
export var DeregisterIdentityProvider: StaticOperationSchema = [
  9,
  n0,
  _DIP,
  {
    [_h]: ["POST", "/identity-provider/DeregisterIdentityProvider", 200],
  },
  () => DeregisterIdentityProviderRequest,
  () => DeregisterIdentityProviderResponse,
];
export var DisassociateUser: StaticOperationSchema = [
  9,
  n0,
  _DU,
  {
    [_h]: ["POST", "/user/DisassociateUser", 200],
  },
  () => DisassociateUserRequest,
  () => DisassociateUserResponse,
];
export var ListIdentityProviders: StaticOperationSchema = [
  9,
  n0,
  _LIP,
  {
    [_h]: ["POST", "/identity-provider/ListIdentityProviders", 200],
  },
  () => ListIdentityProvidersRequest,
  () => ListIdentityProvidersResponse,
];
export var ListInstances: StaticOperationSchema = [
  9,
  n0,
  _LI,
  {
    [_h]: ["POST", "/instance/ListInstances", 200],
  },
  () => ListInstancesRequest,
  () => ListInstancesResponse,
];
export var ListLicenseServerEndpoints: StaticOperationSchema = [
  9,
  n0,
  _LLSE,
  {
    [_h]: ["POST", "/license-server/ListLicenseServerEndpoints", 200],
  },
  () => ListLicenseServerEndpointsRequest,
  () => ListLicenseServerEndpointsResponse,
];
export var ListProductSubscriptions: StaticOperationSchema = [
  9,
  n0,
  _LPS,
  {
    [_h]: ["POST", "/user/ListProductSubscriptions", 200],
  },
  () => ListProductSubscriptionsRequest,
  () => ListProductSubscriptionsResponse,
];
export var ListTagsForResource: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{ResourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse,
];
export var ListUserAssociations: StaticOperationSchema = [
  9,
  n0,
  _LUA,
  {
    [_h]: ["POST", "/user/ListUserAssociations", 200],
  },
  () => ListUserAssociationsRequest,
  () => ListUserAssociationsResponse,
];
export var RegisterIdentityProvider: StaticOperationSchema = [
  9,
  n0,
  _RIP,
  {
    [_h]: ["POST", "/identity-provider/RegisterIdentityProvider", 200],
  },
  () => RegisterIdentityProviderRequest,
  () => RegisterIdentityProviderResponse,
];
export var StartProductSubscription: StaticOperationSchema = [
  9,
  n0,
  _SPS,
  {
    [_h]: ["POST", "/user/StartProductSubscription", 200],
  },
  () => StartProductSubscriptionRequest,
  () => StartProductSubscriptionResponse,
];
export var StopProductSubscription: StaticOperationSchema = [
  9,
  n0,
  _SPSt,
  {
    [_h]: ["POST", "/user/StopProductSubscription", 200],
  },
  () => StopProductSubscriptionRequest,
  () => StopProductSubscriptionResponse,
];
export var TagResource: StaticOperationSchema = [
  9,
  n0,
  _TR,
  {
    [_h]: ["PUT", "/tags/{ResourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse,
];
export var UntagResource: StaticOperationSchema = [
  9,
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{ResourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse,
];
export var UpdateIdentityProviderSettings: StaticOperationSchema = [
  9,
  n0,
  _UIPS,
  {
    [_h]: ["POST", "/identity-provider/UpdateIdentityProviderSettings", 200],
  },
  () => UpdateIdentityProviderSettingsRequest,
  () => UpdateIdentityProviderSettingsResponse,
];
