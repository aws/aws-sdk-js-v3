// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _De,
  _DI,
  _DRL,
  _DRLR,
  _DRLRe,
  _EN,
  _F,
  _I,
  _L,
  _Lim,
  _LL,
  _MR,
  _N,
  _NTe,
  _Ty,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeRecommendationLimitationsRequest = struct(
  n0,
  _DRLR,
  0,
  [_F, _MR, _NTe],
  [[() => FilterList, 0], 1, 0]
);
export var DescribeRecommendationLimitationsResponse = struct(n0, _DRLRe, 0, [_NTe, _L], [0, () => LimitationList]);
export var Limitation = struct(n0, _Lim, 0, [_DI, _EN, _N, _De, _I, _Ty], [0, 0, 0, 0, 0, 0]);
export var LimitationList = list(n0, _LL, 0, () => Limitation);
export var DescribeRecommendationLimitations = op(
  n0,
  _DRL,
  0,
  () => DescribeRecommendationLimitationsRequest,
  () => DescribeRecommendationLimitationsResponse
);
