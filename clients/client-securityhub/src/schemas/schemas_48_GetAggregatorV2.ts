// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ARg, _AVA, _GAV, _GAVR, _GAVRe, _h, _LR, _RLM, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetAggregatorV2Request = struct(n0, _GAVR, 0, [_AVA], [[0, 1]]);
export var GetAggregatorV2Response = struct(n0, _GAVRe, 0, [_AVA, _ARg, _RLM, _LR], [0, 0, 0, 64 | 0]);
export var GetAggregatorV2 = op(
  n0,
  _GAV,
  {
    [_h]: ["GET", "/aggregatorv2/get/{AggregatorV2Arn+}", 200],
  },
  () => GetAggregatorV2Request,
  () => GetAggregatorV2Response
);
