// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AIc,
  _CAN,
  _F,
  _GADRC,
  _GADRCR,
  _GADRCRe,
  _GBK,
  _GN,
  _GRC,
  _GRCL,
  _GRCr,
  _L,
  _NT,
  _RCes,
  _RCF,
  _Re,
  _RT,
  _TDR,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetAggregateDiscoveredResourceCountsRequest = struct(
  n0,
  _GADRCR,
  0,
  [_CAN, _F, _GBK, _L, _NT],
  [0, () => ResourceCountFilters, 0, 1, 0]
);
export var GetAggregateDiscoveredResourceCountsResponse = struct(
  n0,
  _GADRCRe,
  0,
  [_TDR, _GBK, _GRC, _NT],
  [1, 0, () => GroupedResourceCountList, 0]
);
export var GroupedResourceCount = struct(n0, _GRCr, 0, [_GN, _RCes], [0, 1]);
export var ResourceCountFilters = struct(n0, _RCF, 0, [_RT, _AIc, _Re], [0, 0, 0]);
export var GroupedResourceCountList = list(n0, _GRCL, 0, () => GroupedResourceCount);
export var GetAggregateDiscoveredResourceCounts = op(
  n0,
  _GADRC,
  0,
  () => GetAggregateDiscoveredResourceCountsRequest,
  () => GetAggregateDiscoveredResourceCountsResponse
);
