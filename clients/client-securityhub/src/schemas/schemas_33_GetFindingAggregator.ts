// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _FAA, _FAR, _GFA, _GFAR, _GFARe, _h, _Regi, _RLM, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetFindingAggregatorRequest = struct(n0, _GFAR, 0, [_FAA], [[0, 1]]);
export var GetFindingAggregatorResponse = struct(n0, _GFARe, 0, [_FAA, _FAR, _RLM, _Regi], [0, 0, 0, 64 | 0]);
export var GetFindingAggregator = op(
  n0,
  _GFA,
  {
    [_h]: ["GET", "/findingAggregator/get/{FindingAggregatorArn+}", 200],
  },
  () => GetFindingAggregatorRequest,
  () => GetFindingAggregatorResponse
);
