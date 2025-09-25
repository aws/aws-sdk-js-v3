// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ARg, _AVA, _h, _LR, _RLM, _UAV, _UAVR, _UAVRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateAggregatorV2Request = struct(n0, _UAVR, 0, [_AVA, _RLM, _LR], [[0, 1], 0, 64 | 0]);
export var UpdateAggregatorV2Response = struct(n0, _UAVRp, 0, [_AVA, _ARg, _RLM, _LR], [0, 0, 0, 64 | 0]);
export var UpdateAggregatorV2 = op(
  n0,
  _UAV,
  {
    [_h]: ["PATCH", "/aggregatorv2/update/{AggregatorV2Arn+}", 200],
  },
  () => UpdateAggregatorV2Request,
  () => UpdateAggregatorV2Response
);
