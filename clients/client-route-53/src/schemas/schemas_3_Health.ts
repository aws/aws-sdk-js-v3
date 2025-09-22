// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  HealthCheckInUse as __HealthCheckInUse,
  HealthCheckVersionMismatch as __HealthCheckVersionMismatch,
  NoSuchHealthCheck as __NoSuchHealthCheck,
  ThrottlingException as __ThrottlingException,
} from "../models/index";
import {
  _AI,
  _ATd,
  _c,
  _CHC,
  _CTFR,
  _CTFRR,
  _CTFRRh,
  _CTh,
  _DHC,
  _DHCR,
  _DHCRe,
  _Dis,
  _e,
  _ESNI,
  _FQDN,
  _FT,
  _GHC,
  _GHCLFR,
  _GHCLFRR,
  _GHCLFRRe,
  _GHCR,
  _GHCRe,
  _GHCS,
  _GHCSR,
  _GHCSRe,
  _HC,
  _HCI,
  _HCIU,
  _HCO,
  _HCOe,
  _HCV,
  _HCVM,
  _hE,
  _HT,
  _ht,
  _IDHS,
  _In,
  _IPA,
  _K,
  _LTFR,
  _LTFRi,
  _LTFRR,
  _LTFRRi,
  _LTFRRis,
  _LTFRRist,
  _m,
  _NSHC,
  _Po,
  _R,
  _RE,
  _Re,
  _REN,
  _RENL,
  _RI,
  _RIes,
  _RP,
  _RT,
  _RTK,
  _RTS,
  _RTSe,
  _RTSL,
  _S,
  _SR,
  _SSe,
  _Ta,
  _Tag,
  _TE,
  _TKL,
  _TL,
  _TRIL,
  _UHC,
  _UHCR,
  _UHCRp,
  _V,
  _xN,
  n0,
} from "./schemas_0";
import { AlarmIdentifier, ChildHealthCheckList, HealthCheck, HealthCheckRegionList } from "./schemas_5_Hosted";

/* eslint no-var: 0 */

export var ChangeTagsForResourceRequest = struct(
  n0,
  _CTFRR,
  0,
  [_RT, _RI, _ATd, _RTK],
  [
    [0, 1],
    [0, 1],
    [() => TagList, 0],
    [() => TagKeyList, 0],
  ]
);
export var ChangeTagsForResourceResponse = struct(n0, _CTFRRh, 0, [], []);
export var DeleteHealthCheckRequest = struct(n0, _DHCR, 0, [_HCI], [[0, 1]]);
export var DeleteHealthCheckResponse = struct(n0, _DHCRe, 0, [], []);
export var GetHealthCheckLastFailureReasonRequest = struct(n0, _GHCLFRR, 0, [_HCI], [[0, 1]]);
export var GetHealthCheckLastFailureReasonResponse = struct(
  n0,
  _GHCLFRRe,
  0,
  [_HCO],
  [[() => HealthCheckObservations, 0]]
);
export var GetHealthCheckRequest = struct(n0, _GHCR, 0, [_HCI], [[0, 1]]);
export var GetHealthCheckResponse = struct(n0, _GHCRe, 0, [_HC], [[() => HealthCheck, 0]]);
export var GetHealthCheckStatusRequest = struct(n0, _GHCSR, 0, [_HCI], [[0, 1]]);
export var GetHealthCheckStatusResponse = struct(n0, _GHCSRe, 0, [_HCO], [[() => HealthCheckObservations, 0]]);
export var HealthCheckInUse = error(
  n0,
  _HCIU,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __HealthCheckInUse
);
export var HealthCheckObservation = struct(n0, _HCOe, 0, [_R, _IPA, _SR], [0, 0, () => StatusReport]);
export var HealthCheckVersionMismatch = error(
  n0,
  _HCVM,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __HealthCheckVersionMismatch
);
export var ListTagsForResourceRequest = struct(
  n0,
  _LTFRR,
  0,
  [_RT, _RI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_RTS], [[() => ResourceTagSet, 0]]);
export var ListTagsForResourcesRequest = struct(
  n0,
  _LTFRRis,
  0,
  [_RT, _RIes],
  [
    [0, 1],
    [() => TagResourceIdList, 0],
  ]
);
export var ListTagsForResourcesResponse = struct(n0, _LTFRRist, 0, [_RTSe], [[() => ResourceTagSetList, 0]]);
export var NoSuchHealthCheck = error(
  n0,
  _NSHC,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __NoSuchHealthCheck
);
export var ResourceTagSet = struct(n0, _RTS, 0, [_RT, _RI, _Ta], [0, 0, [() => TagList, 0]]);
export var StatusReport = struct(n0, _SR, 0, [_S, _CTh], [0, 4]);
export var Tag = struct(n0, _Tag, 0, [_K, _V], [0, 0]);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ThrottlingException
);
export var UpdateHealthCheckRequest = struct(
  n0,
  _UHCR,
  0,
  [_HCI, _HCV, _IPA, _Po, _RP, _FQDN, _SSe, _FT, _In, _Dis, _HT, _CHC, _ESNI, _Re, _AI, _IDHS, _RE],
  [
    [0, 1],
    1,
    0,
    1,
    0,
    0,
    0,
    1,
    2,
    2,
    1,
    [() => ChildHealthCheckList, 0],
    2,
    [() => HealthCheckRegionList, 0],
    () => AlarmIdentifier,
    0,
    [() => ResettableElementNameList, 0],
  ]
);
export var UpdateHealthCheckResponse = struct(n0, _UHCRp, 0, [_HC], [[() => HealthCheck, 0]]);
export var HealthCheckObservations = list(n0, _HCO, 0, [
  () => HealthCheckObservation,
  {
    [_xN]: _HCOe,
  },
]);
export var ResettableElementNameList = list(n0, _RENL, 0, [
  0,
  {
    [_xN]: _REN,
  },
]);
export var ResourceTagSetList = list(n0, _RTSL, 0, [
  () => ResourceTagSet,
  {
    [_xN]: _RTS,
  },
]);
export var TagKeyList = list(n0, _TKL, 0, [
  0,
  {
    [_xN]: _K,
  },
]);
export var TagList = list(n0, _TL, 0, [
  () => Tag,
  {
    [_xN]: _Tag,
  },
]);
export var TagResourceIdList = list(n0, _TRIL, 0, [
  0,
  {
    [_xN]: _RI,
  },
]);
export var ChangeTagsForResource = op(
  n0,
  _CTFR,
  {
    [_ht]: ["POST", "/2013-04-01/tags/{ResourceType}/{ResourceId}", 200],
  },
  () => ChangeTagsForResourceRequest,
  () => ChangeTagsForResourceResponse
);
export var DeleteHealthCheck = op(
  n0,
  _DHC,
  {
    [_ht]: ["DELETE", "/2013-04-01/healthcheck/{HealthCheckId}", 200],
  },
  () => DeleteHealthCheckRequest,
  () => DeleteHealthCheckResponse
);
export var GetHealthCheck = op(
  n0,
  _GHC,
  {
    [_ht]: ["GET", "/2013-04-01/healthcheck/{HealthCheckId}", 200],
  },
  () => GetHealthCheckRequest,
  () => GetHealthCheckResponse
);
export var GetHealthCheckLastFailureReason = op(
  n0,
  _GHCLFR,
  {
    [_ht]: ["GET", "/2013-04-01/healthcheck/{HealthCheckId}/lastfailurereason", 200],
  },
  () => GetHealthCheckLastFailureReasonRequest,
  () => GetHealthCheckLastFailureReasonResponse
);
export var GetHealthCheckStatus = op(
  n0,
  _GHCS,
  {
    [_ht]: ["GET", "/2013-04-01/healthcheck/{HealthCheckId}/status", 200],
  },
  () => GetHealthCheckStatusRequest,
  () => GetHealthCheckStatusResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_ht]: ["GET", "/2013-04-01/tags/{ResourceType}/{ResourceId}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var ListTagsForResources = op(
  n0,
  _LTFRi,
  {
    [_ht]: ["POST", "/2013-04-01/tags/{ResourceType}", 200],
  },
  () => ListTagsForResourcesRequest,
  () => ListTagsForResourcesResponse
);
export var UpdateHealthCheck = op(
  n0,
  _UHC,
  {
    [_ht]: ["POST", "/2013-04-01/healthcheck/{HealthCheckId}", 200],
  },
  () => UpdateHealthCheckRequest,
  () => UpdateHealthCheckResponse
);
