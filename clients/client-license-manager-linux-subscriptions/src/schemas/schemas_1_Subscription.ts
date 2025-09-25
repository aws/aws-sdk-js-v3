// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import {
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _AI,
  _AID,
  _AU,
  _c,
  _DS,
  _DSP,
  _DSPR,
  _DSPRe,
  _e,
  _F,
  _Fi,
  _FL,
  _GRSP,
  _GRSPR,
  _GRSPRe,
  _GSS,
  _GSSR,
  _GSSRe,
  _h,
  _hQ,
  _HR,
  _I,
  _IC,
  _IID,
  _IL,
  _In,
  _ISE,
  _IT,
  _LLS,
  _LLSI,
  _LLSIR,
  _LLSIRi,
  _LLSR,
  _LLSRi,
  _LRSP,
  _LRSPR,
  _LRSPRi,
  _LSD,
  _LSDRT,
  _LSDS,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _LUT,
  _m,
  _MR,
  _N,
  _NT,
  _O,
  _OI,
  _OV,
  _PC,
  _R,
  _rA,
  _RNFE,
  _RSP,
  _RSPe,
  _RSPeg,
  _RSPL,
  _RSPR,
  _RSPRe,
  _RWSP,
  _S,
  _s,
  _SA,
  _SL,
  _SM,
  _SN,
  _SPA,
  _SPCT,
  _SPS,
  _SPSM,
  _SPSu,
  _SPSub,
  _SPUT,
  _SR,
  _Su,
  _Sub,
  _T,
  _t,
  _TE,
  _tK,
  _TKL,
  _TR,
  _TRR,
  _TRRa,
  _Ty,
  _UO,
  _UR,
  _URR,
  _URRn,
  _USS,
  _USSR,
  _USSRp,
  _V,
  _VE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeregisterSubscriptionProviderRequest = struct(n0, _DSPR, 0, [_SPA], [0]);
export var DeregisterSubscriptionProviderResponse = struct(n0, _DSPRe, 0, [], []);
export var Filter = struct(n0, _F, 0, [_N, _V, _O], [0, 64 | 0, 0]);
export var GetRegisteredSubscriptionProviderRequest = struct(n0, _GRSPR, 0, [_SPA], [0]);
export var GetRegisteredSubscriptionProviderResponse = struct(
  n0,
  _GRSPRe,
  0,
  [_SPA, _SPS, _SA, _SPSu, _SPSM, _LSDRT],
  [0, 0, 0, 0, 0, 0]
);
export var GetServiceSettingsRequest = struct(n0, _GSSR, 0, [], []);
export var GetServiceSettingsResponse = struct(
  n0,
  _GSSRe,
  0,
  [_LSD, _LSDS, _S, _SM, _HR],
  [0, () => LinuxSubscriptionsDiscoverySettings, 0, 128 | 0, 64 | 0]
);
export var Instance = struct(
  n0,
  _I,
  0,
  [_AI, _IID, _IT, _AID, _S, _R, _UO, _PC, _LUT, _SN, _OV, _SPCT, _SPUT, _DS, _RWSP],
  [0, 0, 0, 0, 0, 0, 0, 64 | 0, 0, 0, 0, 0, 0, 0, 0]
);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
  },
  [_m],
  [0],

  __InternalServerException
);
export var LinuxSubscriptionsDiscoverySettings = struct(n0, _LSDS, 0, [_SR, _OI], [64 | 0, 0]);
export var ListLinuxSubscriptionInstancesRequest = struct(n0, _LLSIR, 0, [_Fi, _MR, _NT], [() => FilterList, 1, 0]);
export var ListLinuxSubscriptionInstancesResponse = struct(n0, _LLSIRi, 0, [_In, _NT], [() => InstanceList, 0]);
export var ListLinuxSubscriptionsRequest = struct(n0, _LLSR, 0, [_Fi, _MR, _NT], [() => FilterList, 1, 0]);
export var ListLinuxSubscriptionsResponse = struct(n0, _LLSRi, 0, [_Su, _NT], [() => SubscriptionList, 0]);
export var ListRegisteredSubscriptionProvidersRequest = struct(n0, _LRSPR, 0, [_SPSub, _MR, _NT], [64 | 0, 1, 0]);
export var ListRegisteredSubscriptionProvidersResponse = struct(
  n0,
  _LRSPRi,
  0,
  [_RSP, _NT],
  [() => RegisteredSubscriptionProviderList, 0]
);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rA], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_t], [[() => Tags, 0]]);
export var RegisteredSubscriptionProvider = struct(
  n0,
  _RSPe,
  0,
  [_SPA, _SPS, _SA, _SPSu, _SPSM, _LSDRT],
  [0, 0, 0, 0, 0, 0]
);
export var RegisterSubscriptionProviderRequest = struct(n0, _RSPR, 0, [_SPS, _SA, _T], [0, 0, [() => Tags, 0]]);
export var RegisterSubscriptionProviderResponse = struct(n0, _RSPRe, 0, [_SPS, _SPA, _SPSu], [0, 0, 0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ResourceNotFoundException
);
export var Subscription = struct(n0, _Sub, 0, [_N, _Ty, _IC], [0, 0, 1]);
export var TagResourceRequest = struct(
  n0,
  _TRR,
  0,
  [_rA, _t],
  [
    [0, 1],
    [() => Tags, 0],
  ]
);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ThrottlingException
);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_rA, _tK],
  [
    [0, 1],
    [
      () => TagKeyList,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var UpdateServiceSettingsRequest = struct(
  n0,
  _USSR,
  0,
  [_LSD, _LSDS, _AU],
  [0, () => LinuxSubscriptionsDiscoverySettings, 2]
);
export var UpdateServiceSettingsResponse = struct(
  n0,
  _USSRp,
  0,
  [_LSD, _LSDS, _S, _SM, _HR],
  [0, () => LinuxSubscriptionsDiscoverySettings, 0, 128 | 0, 64 | 0]
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ValidationException
);
export var FilterList = list(n0, _FL, 0, () => Filter);
export var InstanceList = list(n0, _IL, 0, () => Instance);
export var ProductCodeList = 64 | 0;

export var RegisteredSubscriptionProviderList = list(n0, _RSPL, 0, () => RegisteredSubscriptionProvider);
export var StringList = 64 | 0;

export var SubscriptionList = list(n0, _SL, 0, () => Subscription);
export var SubscriptionProviderSourceList = 64 | 0;

export var TagKeyList = list(n0, _TKL, 8, 0);
export var StringMap = 128 | 0;

export var Tags = map(n0, _T, 8, 0, 0);
export var DeregisterSubscriptionProvider = op(
  n0,
  _DSP,
  {
    [_h]: ["POST", "/subscription/DeregisterSubscriptionProvider", 200],
  },
  () => DeregisterSubscriptionProviderRequest,
  () => DeregisterSubscriptionProviderResponse
);
export var GetRegisteredSubscriptionProvider = op(
  n0,
  _GRSP,
  {
    [_h]: ["POST", "/subscription/GetRegisteredSubscriptionProvider", 200],
  },
  () => GetRegisteredSubscriptionProviderRequest,
  () => GetRegisteredSubscriptionProviderResponse
);
export var GetServiceSettings = op(
  n0,
  _GSS,
  {
    [_h]: ["POST", "/subscription/GetServiceSettings", 200],
  },
  () => GetServiceSettingsRequest,
  () => GetServiceSettingsResponse
);
export var ListLinuxSubscriptionInstances = op(
  n0,
  _LLSI,
  {
    [_h]: ["POST", "/subscription/ListLinuxSubscriptionInstances", 200],
  },
  () => ListLinuxSubscriptionInstancesRequest,
  () => ListLinuxSubscriptionInstancesResponse
);
export var ListLinuxSubscriptions = op(
  n0,
  _LLS,
  {
    [_h]: ["POST", "/subscription/ListLinuxSubscriptions", 200],
  },
  () => ListLinuxSubscriptionsRequest,
  () => ListLinuxSubscriptionsResponse
);
export var ListRegisteredSubscriptionProviders = op(
  n0,
  _LRSP,
  {
    [_h]: ["POST", "/subscription/ListRegisteredSubscriptionProviders", 200],
  },
  () => ListRegisteredSubscriptionProvidersRequest,
  () => ListRegisteredSubscriptionProvidersResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var RegisterSubscriptionProvider = op(
  n0,
  _RSPeg,
  {
    [_h]: ["POST", "/subscription/RegisterSubscriptionProvider", 200],
  },
  () => RegisterSubscriptionProviderRequest,
  () => RegisterSubscriptionProviderResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["PUT", "/tags/{resourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{resourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
export var UpdateServiceSettings = op(
  n0,
  _USS,
  {
    [_h]: ["POST", "/subscription/UpdateServiceSettings", 200],
  },
  () => UpdateServiceSettingsRequest,
  () => UpdateServiceSettingsResponse
);
