// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CFA, _CFAR, _CFARr, _FAA, _FAR, _h, _Regi, _RLM, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateFindingAggregatorRequest = struct(n0, _CFAR, 0, [_RLM, _Regi], [0, 64 | 0]);
export var CreateFindingAggregatorResponse = struct(n0, _CFARr, 0, [_FAA, _FAR, _RLM, _Regi], [0, 0, 0, 64 | 0]);
export var CreateFindingAggregator = op(
  n0,
  _CFA,
  {
    [_h]: ["POST", "/findingAggregator/create", 200],
  },
  () => CreateFindingAggregatorRequest,
  () => CreateFindingAggregatorResponse
);
