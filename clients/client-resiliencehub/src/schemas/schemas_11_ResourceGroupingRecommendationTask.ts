// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aA, _DRGRT, _DRGRTR, _DRGRTRe, _eM, _gI, _h, _SRGRT, _SRGRTR, _SRGRTRt, _st, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeResourceGroupingRecommendationTaskRequest = struct(n0, _DRGRTR, 0, [_aA, _gI], [0, 0]);
export var DescribeResourceGroupingRecommendationTaskResponse = struct(n0, _DRGRTRe, 0, [_gI, _st, _eM], [0, 0, 0]);
export var StartResourceGroupingRecommendationTaskRequest = struct(n0, _SRGRTR, 0, [_aA], [0]);
export var StartResourceGroupingRecommendationTaskResponse = struct(
  n0,
  _SRGRTRt,
  0,
  [_aA, _gI, _st, _eM],
  [0, 0, 0, 0]
);
export var DescribeResourceGroupingRecommendationTask = op(
  n0,
  _DRGRT,
  {
    [_h]: ["POST", "/describe-resource-grouping-recommendation-task", 200],
  },
  () => DescribeResourceGroupingRecommendationTaskRequest,
  () => DescribeResourceGroupingRecommendationTaskResponse
);
export var StartResourceGroupingRecommendationTask = op(
  n0,
  _SRGRT,
  {
    [_h]: ["POST", "/start-resource-grouping-recommendation-task", 200],
  },
  () => StartResourceGroupingRecommendationTaskRequest,
  () => StartResourceGroupingRecommendationTaskResponse
);
