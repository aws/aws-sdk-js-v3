// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _FAA, _FAR, _h, _Regi, _RLM, _UFA, _UFAR, _UFARp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateFindingAggregatorRequest = struct(n0, _UFAR, 0, [_FAA, _RLM, _Regi], [0, 0, 64 | 0]);
export var UpdateFindingAggregatorResponse = struct(n0, _UFARp, 0, [_FAA, _FAR, _RLM, _Regi], [0, 0, 0, 64 | 0]);
export var UpdateFindingAggregator = op(
  n0,
  _UFA,
  {
    [_h]: ["PATCH", "/findingAggregator/update", 200],
  },
  () => UpdateFindingAggregatorRequest,
  () => UpdateFindingAggregatorResponse
);
