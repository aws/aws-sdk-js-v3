// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _AD,
  _ADIP,
  _ADS,
  _ADT,
  _AS,
  _AU,
  _AUR,
  _AURs,
  _D,
  _DCP,
  _DD,
  _DI,
  _DIL,
  _DIP,
  _DIPR,
  _DIPRe,
  _DN,
  _DNS,
  _DU,
  _DUR,
  _DURi,
  _Fi,
  _FM,
  _h,
  _II,
  _IP,
  _IPA,
  _IPS,
  _IPSd,
  _IPSL,
  _IS,
  _ISAD,
  _ISL,
  _ISn,
  _IUA,
  _IUS,
  _IUSL,
  _IUSn,
  _LI,
  _LIP,
  _LIPR,
  _LIPRi,
  _LIR,
  _LIRi,
  _LPS,
  _LPSR,
  _LPSRi,
  _LSCD,
  _LUA,
  _LUAR,
  _LUARi,
  _MR,
  _NT,
  _OAI,
  _P,
  _Pr,
  _PUA,
  _PUS,
  _PUSL,
  _PUSr,
  _RIP,
  _RIPR,
  _RIPRe,
  _RS,
  _S,
  _Se,
  _SED,
  _SGI,
  _SM,
  _SPS,
  _SPSR,
  _SPSRt,
  _SPSRto,
  _SPSRtop,
  _SPSt,
  _SSD,
  _St,
  _T,
  _U,
  _UIPS,
  _UIPSR,
  _UIPSRp,
  _US,
  n0,
} from "./schemas_0";
import { FilterList } from "./schemas_1_List";
import { Tags } from "./schemas_3_Resource";
import { CredentialsProvider } from "./schemas_6_List";

/* eslint no-var: 0 */

export var ActiveDirectoryIdentityProvider = struct(
  n0,
  _ADIP,
  0,
  [_DI, _ADS, _ADT, _ISAD],
  [0, () => ActiveDirectorySettings, 0, 2]
);
export var ActiveDirectorySettings = struct(
  n0,
  _ADS,
  0,
  [_DN, _DIL, _DCP, _DNS],
  [0, 64 | 0, () => CredentialsProvider, () => DomainNetworkSettings]
);
export var AssociateUserRequest = struct(
  n0,
  _AUR,
  0,
  [_U, _II, _IP, _D, _T],
  [0, 0, () => IdentityProvider, 0, [() => Tags, 0]]
);
export var AssociateUserResponse = struct(n0, _AURs, 0, [_IUS], [() => InstanceUserSummary]);
export var DeregisterIdentityProviderRequest = struct(n0, _DIPR, 0, [_IP, _P, _IPA], [() => IdentityProvider, 0, 0]);
export var DeregisterIdentityProviderResponse = struct(n0, _DIPRe, 0, [_IPS], [() => IdentityProviderSummary]);
export var DisassociateUserRequest = struct(
  n0,
  _DUR,
  0,
  [_U, _II, _IP, _IUA, _D],
  [0, 0, () => IdentityProvider, 0, 0]
);
export var DisassociateUserResponse = struct(n0, _DURi, 0, [_IUS], [() => InstanceUserSummary]);
export var DomainNetworkSettings = struct(n0, _DNS, 0, [_S], [64 | 0]);
export var IdentityProviderSummary = struct(
  n0,
  _IPS,
  0,
  [_IP, _Se, _P, _St, _IPA, _FM, _OAI],
  [() => IdentityProvider, () => Settings, 0, 0, 0, 0, 0]
);
export var InstanceSummary = struct(
  n0,
  _IS,
  0,
  [_II, _St, _Pr, _LSCD, _SM, _OAI, _IP],
  [0, 0, 64 | 0, 0, 0, 0, () => IdentityProvider]
);
export var InstanceUserSummary = struct(
  n0,
  _IUS,
  0,
  [_U, _II, _IP, _St, _IUA, _SM, _D, _AD, _DD],
  [0, 0, () => IdentityProvider, 0, 0, 0, 0, 0, 0]
);
export var ListIdentityProvidersRequest = struct(n0, _LIPR, 0, [_MR, _Fi, _NT], [1, () => FilterList, 0]);
export var ListIdentityProvidersResponse = struct(n0, _LIPRi, 0, [_IPSd, _NT], [() => IdentityProviderSummaryList, 0]);
export var ListInstancesRequest = struct(n0, _LIR, 0, [_MR, _NT, _Fi], [1, 0, () => FilterList]);
export var ListInstancesResponse = struct(n0, _LIRi, 0, [_ISn, _NT], [() => InstanceSummaryList, 0]);
export var ListProductSubscriptionsRequest = struct(
  n0,
  _LPSR,
  0,
  [_P, _IP, _MR, _Fi, _NT],
  [0, () => IdentityProvider, 1, () => FilterList, 0]
);
export var ListProductSubscriptionsResponse = struct(n0, _LPSRi, 0, [_PUS, _NT], [() => ProductUserSummaryList, 0]);
export var ListUserAssociationsRequest = struct(
  n0,
  _LUAR,
  0,
  [_II, _IP, _MR, _Fi, _NT],
  [0, () => IdentityProvider, 1, () => FilterList, 0]
);
export var ListUserAssociationsResponse = struct(n0, _LUARi, 0, [_IUSn, _NT], [() => InstanceUserSummaryList, 0]);
export var ProductUserSummary = struct(
  n0,
  _PUSr,
  0,
  [_U, _P, _IP, _St, _PUA, _SM, _D, _SSD, _SED],
  [0, 0, () => IdentityProvider, 0, 0, 0, 0, 0, 0]
);
export var RegisterIdentityProviderRequest = struct(
  n0,
  _RIPR,
  0,
  [_IP, _P, _Se, _T],
  [() => IdentityProvider, 0, () => Settings, [() => Tags, 0]]
);
export var RegisterIdentityProviderResponse = struct(n0, _RIPRe, 0, [_IPS], [() => IdentityProviderSummary]);
export var Settings = struct(n0, _Se, 0, [_S, _SGI], [64 | 0, 0]);
export var StartProductSubscriptionRequest = struct(
  n0,
  _SPSR,
  0,
  [_U, _IP, _P, _D, _T],
  [0, () => IdentityProvider, 0, 0, [() => Tags, 0]]
);
export var StartProductSubscriptionResponse = struct(n0, _SPSRt, 0, [_PUSr], [() => ProductUserSummary]);
export var StopProductSubscriptionRequest = struct(
  n0,
  _SPSRto,
  0,
  [_U, _IP, _P, _PUA, _D],
  [0, () => IdentityProvider, 0, 0, 0]
);
export var StopProductSubscriptionResponse = struct(n0, _SPSRtop, 0, [_PUSr], [() => ProductUserSummary]);
export var UpdateIdentityProviderSettingsRequest = struct(
  n0,
  _UIPSR,
  0,
  [_IP, _P, _IPA, _US],
  [() => IdentityProvider, 0, 0, () => UpdateSettings]
);
export var UpdateIdentityProviderSettingsResponse = struct(n0, _UIPSRp, 0, [_IPS], [() => IdentityProviderSummary]);
export var UpdateSettings = struct(n0, _US, 0, [_AS, _RS, _SGI], [64 | 0, 64 | 0, 0]);
export var IdentityProviderSummaryList = list(n0, _IPSL, 0, () => IdentityProviderSummary);
export var InstanceSummaryList = list(n0, _ISL, 0, () => InstanceSummary);
export var InstanceUserSummaryList = list(n0, _IUSL, 0, () => InstanceUserSummary);
export var IpV4List = 64 | 0;

export var ProductUserSummaryList = list(n0, _PUSL, 0, () => ProductUserSummary);
export var StringList = 64 | 0;

export var Subnets = 64 | 0;

export var IdentityProvider = uni(n0, _IP, 0, [_ADIP], [() => ActiveDirectoryIdentityProvider]);
export var AssociateUser = op(
  n0,
  _AU,
  {
    [_h]: ["POST", "/user/AssociateUser", 200],
  },
  () => AssociateUserRequest,
  () => AssociateUserResponse
);
export var DeregisterIdentityProvider = op(
  n0,
  _DIP,
  {
    [_h]: ["POST", "/identity-provider/DeregisterIdentityProvider", 200],
  },
  () => DeregisterIdentityProviderRequest,
  () => DeregisterIdentityProviderResponse
);
export var DisassociateUser = op(
  n0,
  _DU,
  {
    [_h]: ["POST", "/user/DisassociateUser", 200],
  },
  () => DisassociateUserRequest,
  () => DisassociateUserResponse
);
export var ListIdentityProviders = op(
  n0,
  _LIP,
  {
    [_h]: ["POST", "/identity-provider/ListIdentityProviders", 200],
  },
  () => ListIdentityProvidersRequest,
  () => ListIdentityProvidersResponse
);
export var ListInstances = op(
  n0,
  _LI,
  {
    [_h]: ["POST", "/instance/ListInstances", 200],
  },
  () => ListInstancesRequest,
  () => ListInstancesResponse
);
export var ListProductSubscriptions = op(
  n0,
  _LPS,
  {
    [_h]: ["POST", "/user/ListProductSubscriptions", 200],
  },
  () => ListProductSubscriptionsRequest,
  () => ListProductSubscriptionsResponse
);
export var ListUserAssociations = op(
  n0,
  _LUA,
  {
    [_h]: ["POST", "/user/ListUserAssociations", 200],
  },
  () => ListUserAssociationsRequest,
  () => ListUserAssociationsResponse
);
export var RegisterIdentityProvider = op(
  n0,
  _RIP,
  {
    [_h]: ["POST", "/identity-provider/RegisterIdentityProvider", 200],
  },
  () => RegisterIdentityProviderRequest,
  () => RegisterIdentityProviderResponse
);
export var StartProductSubscription = op(
  n0,
  _SPS,
  {
    [_h]: ["POST", "/user/StartProductSubscription", 200],
  },
  () => StartProductSubscriptionRequest,
  () => StartProductSubscriptionResponse
);
export var StopProductSubscription = op(
  n0,
  _SPSt,
  {
    [_h]: ["POST", "/user/StopProductSubscription", 200],
  },
  () => StopProductSubscriptionRequest,
  () => StopProductSubscriptionResponse
);
export var UpdateIdentityProviderSettings = op(
  n0,
  _UIPS,
  {
    [_h]: ["POST", "/identity-provider/UpdateIdentityProviderSettings", 200],
  },
  () => UpdateIdentityProviderSettingsRequest,
  () => UpdateIdentityProviderSettingsResponse
);
