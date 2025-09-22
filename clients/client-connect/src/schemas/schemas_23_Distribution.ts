// smithy-typescript generated code
import { error, list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  MaximumResultReturnedException as __MaximumResultReturnedException,
  ResourceNotReadyException as __ResourceNotReadyException,
} from "../models/index";
import {
  _A,
  _c,
  _CI,
  _CMI,
  _CMo,
  _CMR,
  _CMRo,
  _CMV,
  _CT,
  _CTDG,
  _CTDGR,
  _CTDGRr,
  _D,
  _e,
  _GCM,
  _GCMR,
  _GCMRe,
  _h,
  _hE,
  _hQ,
  _I,
  _IAns,
  _ID,
  _II,
  _iI,
  _k,
  _LTDG,
  _LTDGR,
  _LTDGRi,
  _M,
  _Metr,
  _MR,
  _mR,
  _MRa,
  _MRRE,
  _N,
  _NT,
  _nT,
  _Nu,
  _RAep,
  _RIep,
  _RIR,
  _RIRe,
  _RNRE,
  _RR,
  _RTes,
  _RTSC,
  _SCe,
  _SRT,
  _SRTR,
  _SRTRe,
  _St,
  _Ta,
  _TDGS,
  _TDGSL,
  _tK,
  _tKCT,
  _TLa,
  _TS,
  _TSC,
  _tV,
  _tVCT,
  _V,
  _va,
  n0,
} from "./schemas_0";
import { DirectoryAlias } from "./schemas_55_Instance";

/* eslint no-var: 0 */

export var ContactMetricInfo = struct(n0, _CMI, 0, [_N], [0]);
export var ContactMetricResult = struct(n0, _CMR, 0, [_N, _V], [0, () => ContactMetricValue]);
export var CreateTrafficDistributionGroupRequest = struct(
  n0,
  _CTDGR,
  0,
  [_N, _D, _II, _CT, _Ta],
  [0, 0, 0, [0, 4], 128 | 0]
);
export var CreateTrafficDistributionGroupResponse = struct(n0, _CTDGRr, 0, [_I, _A], [0, 0]);
export var GetContactMetricsRequest = struct(n0, _GCMR, 0, [_II, _CI, _Metr], [0, 0, () => ContactMetrics]);
export var GetContactMetricsResponse = struct(n0, _GCMRe, 0, [_MR, _I, _A], [() => ContactMetricResults, 0, 0]);
export var ListTrafficDistributionGroupsRequest = struct(
  n0,
  _LTDGR,
  0,
  [_MRa, _NT, _II],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _iI,
      },
    ],
  ]
);
export var ListTrafficDistributionGroupsResponse = struct(
  n0,
  _LTDGRi,
  0,
  [_NT, _TDGSL],
  [0, () => TrafficDistributionGroupSummaryList]
);
export var MaximumResultReturnedException = error(
  n0,
  _MRRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __MaximumResultReturnedException
);
export var ReplicateInstanceRequest = struct(
  n0,
  _RIR,
  0,
  [_II, _RR, _CT, _RAep],
  [[0, 1], 0, [0, 4], [() => DirectoryAlias, 0]]
);
export var ReplicateInstanceResponse = struct(n0, _RIRe, 0, [_I, _A], [0, 0]);
export var ResourceNotReadyException = error(
  n0,
  _RNRE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ResourceNotReadyException
);
export var ResourceTagsSearchCriteria = struct(n0, _RTSC, 0, [_TSC], [() => TagSearchCondition]);
export var SearchResourceTagsRequest = struct(
  n0,
  _SRTR,
  0,
  [_II, _RTes, _NT, _MRa, _SCe],
  [0, 64 | 0, 0, 1, () => ResourceTagsSearchCriteria]
);
export var SearchResourceTagsResponse = struct(n0, _SRTRe, 0, [_Ta, _NT], [() => TagsList, 0]);
export var TagSearchCondition = struct(n0, _TSC, 0, [_tK, _tV, _tKCT, _tVCT], [0, 0, 0, 0]);
export var TagSet = struct(n0, _TS, 0, [_k, _va], [0, 0]);
export var TrafficDistributionGroupSummary = struct(n0, _TDGS, 0, [_I, _A, _N, _IAns, _St, _ID], [0, 0, 0, 0, 0, 2]);
export var ContactMetricResults = list(n0, _CMRo, 0, () => ContactMetricResult);
export var ContactMetrics = list(n0, _CMo, 0, () => ContactMetricInfo);
export var ResourceTypeList = 64 | 0;

export var TagsList = list(n0, _TLa, 0, () => TagSet);
export var TrafficDistributionGroupSummaryList = list(n0, _TDGSL, 0, () => TrafficDistributionGroupSummary);
export var ContactMetricValue = uni(n0, _CMV, 0, [_Nu], [1]);
export var CreateTrafficDistributionGroup = op(
  n0,
  _CTDG,
  {
    [_h]: ["PUT", "/traffic-distribution-group", 200],
  },
  () => CreateTrafficDistributionGroupRequest,
  () => CreateTrafficDistributionGroupResponse
);
export var GetContactMetrics = op(
  n0,
  _GCM,
  {
    [_h]: ["POST", "/metrics/contact", 200],
  },
  () => GetContactMetricsRequest,
  () => GetContactMetricsResponse
);
export var ListTrafficDistributionGroups = op(
  n0,
  _LTDG,
  {
    [_h]: ["GET", "/traffic-distribution-groups", 200],
  },
  () => ListTrafficDistributionGroupsRequest,
  () => ListTrafficDistributionGroupsResponse
);
export var ReplicateInstance = op(
  n0,
  _RIep,
  {
    [_h]: ["POST", "/instance/{InstanceId}/replicate", 200],
  },
  () => ReplicateInstanceRequest,
  () => ReplicateInstanceResponse
);
export var SearchResourceTags = op(
  n0,
  _SRT,
  {
    [_h]: ["POST", "/search-resource-tags", 200],
  },
  () => SearchResourceTagsRequest,
  () => SearchResourceTagsResponse
);
