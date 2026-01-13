const _AI = "AmiId";
const _AID = "AccountID";
const _AU = "AllowUpdate";
const _DS = "DualSubscription";
const _DSP = "DeregisterSubscriptionProvider";
const _DSPR = "DeregisterSubscriptionProviderRequest";
const _DSPRe = "DeregisterSubscriptionProviderResponse";
const _F = "Filter";
const _FL = "FilterList";
const _Fi = "Filters";
const _GRSP = "GetRegisteredSubscriptionProvider";
const _GRSPR = "GetRegisteredSubscriptionProviderRequest";
const _GRSPRe = "GetRegisteredSubscriptionProviderResponse";
const _GSS = "GetServiceSettings";
const _GSSR = "GetServiceSettingsRequest";
const _GSSRe = "GetServiceSettingsResponse";
const _HR = "HomeRegions";
const _I = "Instance";
const _IC = "InstanceCount";
const _IID = "InstanceID";
const _IL = "InstanceList";
const _ISE = "InternalServerException";
const _IT = "InstanceType";
const _In = "Instances";
const _LLS = "ListLinuxSubscriptions";
const _LLSI = "ListLinuxSubscriptionInstances";
const _LLSIR = "ListLinuxSubscriptionInstancesRequest";
const _LLSIRi = "ListLinuxSubscriptionInstancesResponse";
const _LLSR = "ListLinuxSubscriptionsRequest";
const _LLSRi = "ListLinuxSubscriptionsResponse";
const _LRSP = "ListRegisteredSubscriptionProviders";
const _LRSPR = "ListRegisteredSubscriptionProvidersRequest";
const _LRSPRi = "ListRegisteredSubscriptionProvidersResponse";
const _LSD = "LinuxSubscriptionsDiscovery";
const _LSDRT = "LastSuccessfulDataRetrievalTime";
const _LSDS = "LinuxSubscriptionsDiscoverySettings";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _LUT = "LastUpdatedTime";
const _MR = "MaxResults";
const _N = "Name";
const _NT = "NextToken";
const _O = "Operator";
const _OI = "OrganizationIntegration";
const _OV = "OsVersion";
const _PC = "ProductCode";
const _R = "Region";
const _RNFE = "ResourceNotFoundException";
const _RSP = "RegisteredSubscriptionProviders";
const _RSPL = "RegisteredSubscriptionProviderList";
const _RSPR = "RegisterSubscriptionProviderRequest";
const _RSPRe = "RegisterSubscriptionProviderResponse";
const _RSPe = "RegisteredSubscriptionProvider";
const _RSPeg = "RegisterSubscriptionProvider";
const _RWSP = "RegisteredWithSubscriptionProvider";
const _S = "Status";
const _SA = "SecretArn";
const _SL = "SubscriptionList";
const _SM = "StatusMessage";
const _SN = "SubscriptionName";
const _SPA = "SubscriptionProviderArn";
const _SPCT = "SubscriptionProviderCreateTime";
const _SPS = "SubscriptionProviderSource";
const _SPSM = "SubscriptionProviderStatusMessage";
const _SPSu = "SubscriptionProviderStatus";
const _SPSub = "SubscriptionProviderSources";
const _SPUT = "SubscriptionProviderUpdateTime";
const _SR = "SourceRegions";
const _Su = "Subscriptions";
const _Sub = "Subscription";
const _T = "Tags";
const _TE = "ThrottlingException";
const _TKL = "TagKeyList";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _Ty = "Type";
const _UO = "UsageOperation";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _USS = "UpdateServiceSettings";
const _USSR = "UpdateServiceSettingsRequest";
const _USSRp = "UpdateServiceSettingsResponse";
const _V = "Values";
const _VE = "ValidationException";
const _c = "client";
const _e = "error";
const _h = "http";
const _hQ = "httpQuery";
const _m = "message";
const _rA = "resourceArn";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.licensemanagerlinuxsubscriptions";
const _t = "tags";
const _tK = "tagKeys";
const n0 = "com.amazonaws.licensemanagerlinuxsubscriptions";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  InternalServerException,
  ResourceNotFoundException,
  ThrottlingException,
  ValidationException,
} from "../models/errors";
import {
  LicenseManagerLinuxSubscriptionsServiceException,
} from "../models/LicenseManagerLinuxSubscriptionsServiceException";

/* eslint no-var: 0 */
export var DeregisterSubscriptionProviderRequest$: StaticStructureSchema = [3, n0, _DSPR,
  0,
  [_SPA],
  [0]
];
export var DeregisterSubscriptionProviderResponse$: StaticStructureSchema = [3, n0, _DSPRe,
  0,
  [],
  []
];
export var Filter$: StaticStructureSchema = [3, n0, _F,
  0,
  [_N, _V, _O],
  [0, 64 | 0, 0]
];
export var GetRegisteredSubscriptionProviderRequest$: StaticStructureSchema = [3, n0, _GRSPR,
  0,
  [_SPA],
  [0]
];
export var GetRegisteredSubscriptionProviderResponse$: StaticStructureSchema = [3, n0, _GRSPRe,
  0,
  [_SPA, _SPS, _SA, _SPSu, _SPSM, _LSDRT],
  [0, 0, 0, 0, 0, 0]
];
export var GetServiceSettingsRequest$: StaticStructureSchema = [3, n0, _GSSR,
  0,
  [],
  []
];
export var GetServiceSettingsResponse$: StaticStructureSchema = [3, n0, _GSSRe,
  0,
  [_LSD, _LSDS, _S, _SM, _HR],
  [0, () => LinuxSubscriptionsDiscoverySettings$, 0, 128 | 0, 64 | 0]
];
export var Instance$: StaticStructureSchema = [3, n0, _I,
  0,
  [_AI, _IID, _IT, _AID, _S, _R, _UO, _PC, _LUT, _SN, _OV, _SPCT, _SPUT, _DS, _RWSP],
  [0, 0, 0, 0, 0, 0, 0, 64 | 0, 0, 0, 0, 0, 0, 0, 0]
];
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _s },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(InternalServerException$, InternalServerException);
export var LinuxSubscriptionsDiscoverySettings$: StaticStructureSchema = [3, n0, _LSDS,
  0,
  [_SR, _OI],
  [64 | 0, 0]
];
export var ListLinuxSubscriptionInstancesRequest$: StaticStructureSchema = [3, n0, _LLSIR,
  0,
  [_Fi, _MR, _NT],
  [() => FilterList, 1, 0]
];
export var ListLinuxSubscriptionInstancesResponse$: StaticStructureSchema = [3, n0, _LLSIRi,
  0,
  [_In, _NT],
  [() => InstanceList, 0]
];
export var ListLinuxSubscriptionsRequest$: StaticStructureSchema = [3, n0, _LLSR,
  0,
  [_Fi, _MR, _NT],
  [() => FilterList, 1, 0]
];
export var ListLinuxSubscriptionsResponse$: StaticStructureSchema = [3, n0, _LLSRi,
  0,
  [_Su, _NT],
  [() => SubscriptionList, 0]
];
export var ListRegisteredSubscriptionProvidersRequest$: StaticStructureSchema = [3, n0, _LRSPR,
  0,
  [_SPSub, _MR, _NT],
  [64 | 0, 1, 0]
];
export var ListRegisteredSubscriptionProvidersResponse$: StaticStructureSchema = [3, n0, _LRSPRi,
  0,
  [_RSP, _NT],
  [() => RegisteredSubscriptionProviderList, 0]
];
export var ListTagsForResourceRequest$: StaticStructureSchema = [3, n0, _LTFRR,
  0,
  [_rA],
  [[0, 1]]
];
export var ListTagsForResourceResponse$: StaticStructureSchema = [3, n0, _LTFRRi,
  0,
  [_t],
  [[() => Tags, 0]]
];
export var RegisteredSubscriptionProvider$: StaticStructureSchema = [3, n0, _RSPe,
  0,
  [_SPA, _SPS, _SA, _SPSu, _SPSM, _LSDRT],
  [0, 0, 0, 0, 0, 0]
];
export var RegisterSubscriptionProviderRequest$: StaticStructureSchema = [3, n0, _RSPR,
  0,
  [_SPS, _SA, _T],
  [0, 0, [() => Tags, 0]]
];
export var RegisterSubscriptionProviderResponse$: StaticStructureSchema = [3, n0, _RSPRe,
  0,
  [_SPS, _SPA, _SPSu],
  [0, 0, 0]
];
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _c },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var Subscription$: StaticStructureSchema = [3, n0, _Sub,
  0,
  [_N, _Ty, _IC],
  [0, 0, 1]
];
export var TagResourceRequest$: StaticStructureSchema = [3, n0, _TRR,
  0,
  [_rA, _t],
  [[0, 1], [() => Tags, 0]]
];
export var TagResourceResponse$: StaticStructureSchema = [3, n0, _TRRa,
  0,
  [],
  []
];
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE,
  { [_e]: _c },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(ThrottlingException$, ThrottlingException);
export var UntagResourceRequest$: StaticStructureSchema = [3, n0, _URR,
  0,
  [_rA, _tK],
  [[0, 1], [() => TagKeyList, { [_hQ]: _tK }]]
];
export var UntagResourceResponse$: StaticStructureSchema = [3, n0, _URRn,
  0,
  [],
  []
];
export var UpdateServiceSettingsRequest$: StaticStructureSchema = [3, n0, _USSR,
  0,
  [_LSD, _LSDS, _AU],
  [0, () => LinuxSubscriptionsDiscoverySettings$, 2]
];
export var UpdateServiceSettingsResponse$: StaticStructureSchema = [3, n0, _USSRp,
  0,
  [_LSD, _LSDS, _S, _SM, _HR],
  [0, () => LinuxSubscriptionsDiscoverySettings$, 0, 128 | 0, 64 | 0]
];
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(ValidationException$, ValidationException);
export var LicenseManagerLinuxSubscriptionsServiceException$: StaticErrorSchema = [-3, _sm, "LicenseManagerLinuxSubscriptionsServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(LicenseManagerLinuxSubscriptionsServiceException$, LicenseManagerLinuxSubscriptionsServiceException);
var FilterList: StaticListSchema = [1, n0, _FL,
  0, () => Filter$
];
var InstanceList: StaticListSchema = [1, n0, _IL,
  0, () => Instance$
];
var ProductCodeList = 64 | 0;
var RegisteredSubscriptionProviderList: StaticListSchema = [1, n0, _RSPL,
  0, () => RegisteredSubscriptionProvider$
];
var StringList = 64 | 0;
var SubscriptionList: StaticListSchema = [1, n0, _SL,
  0, () => Subscription$
];
var SubscriptionProviderSourceList = 64 | 0;
var TagKeyList: StaticListSchema = [1, n0, _TKL,
  8, 0
];
var StringMap = 128 | 0;
var Tags: StaticMapSchema = [2, n0, _T,
  8, 0, 0
];
export var DeregisterSubscriptionProvider$: StaticOperationSchema = [9, n0, _DSP,
  { [_h]: ["POST", "/subscription/DeregisterSubscriptionProvider", 200] }, () => DeregisterSubscriptionProviderRequest$, () => DeregisterSubscriptionProviderResponse$
];
export var GetRegisteredSubscriptionProvider$: StaticOperationSchema = [9, n0, _GRSP,
  { [_h]: ["POST", "/subscription/GetRegisteredSubscriptionProvider", 200] }, () => GetRegisteredSubscriptionProviderRequest$, () => GetRegisteredSubscriptionProviderResponse$
];
export var GetServiceSettings$: StaticOperationSchema = [9, n0, _GSS,
  { [_h]: ["POST", "/subscription/GetServiceSettings", 200] }, () => GetServiceSettingsRequest$, () => GetServiceSettingsResponse$
];
export var ListLinuxSubscriptionInstances$: StaticOperationSchema = [9, n0, _LLSI,
  { [_h]: ["POST", "/subscription/ListLinuxSubscriptionInstances", 200] }, () => ListLinuxSubscriptionInstancesRequest$, () => ListLinuxSubscriptionInstancesResponse$
];
export var ListLinuxSubscriptions$: StaticOperationSchema = [9, n0, _LLS,
  { [_h]: ["POST", "/subscription/ListLinuxSubscriptions", 200] }, () => ListLinuxSubscriptionsRequest$, () => ListLinuxSubscriptionsResponse$
];
export var ListRegisteredSubscriptionProviders$: StaticOperationSchema = [9, n0, _LRSP,
  { [_h]: ["POST", "/subscription/ListRegisteredSubscriptionProviders", 200] }, () => ListRegisteredSubscriptionProvidersRequest$, () => ListRegisteredSubscriptionProvidersResponse$
];
export var ListTagsForResource$: StaticOperationSchema = [9, n0, _LTFR,
  { [_h]: ["GET", "/tags/{resourceArn}", 200] }, () => ListTagsForResourceRequest$, () => ListTagsForResourceResponse$
];
export var RegisterSubscriptionProvider$: StaticOperationSchema = [9, n0, _RSPeg,
  { [_h]: ["POST", "/subscription/RegisterSubscriptionProvider", 200] }, () => RegisterSubscriptionProviderRequest$, () => RegisterSubscriptionProviderResponse$
];
export var TagResource$: StaticOperationSchema = [9, n0, _TR,
  { [_h]: ["PUT", "/tags/{resourceArn}", 200] }, () => TagResourceRequest$, () => TagResourceResponse$
];
export var UntagResource$: StaticOperationSchema = [9, n0, _UR,
  { [_h]: ["DELETE", "/tags/{resourceArn}", 200] }, () => UntagResourceRequest$, () => UntagResourceResponse$
];
export var UpdateServiceSettings$: StaticOperationSchema = [9, n0, _USS,
  { [_h]: ["POST", "/subscription/UpdateServiceSettings", 200] }, () => UpdateServiceSettingsRequest$, () => UpdateServiceSettingsResponse$
];
