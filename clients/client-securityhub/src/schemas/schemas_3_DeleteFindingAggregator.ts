// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DFAe, _DFAR, _DFARe, _FAA, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteFindingAggregatorRequest = struct(n0, _DFAR, 0, [_FAA], [[0, 1]]);
export var DeleteFindingAggregatorResponse = struct(n0, _DFARe, 0, [], []);
export var DeleteFindingAggregator = op(
  n0,
  _DFAe,
  {
    [_h]: ["DELETE", "/findingAggregator/delete/{FindingAggregatorArn+}", 200],
  },
  () => DeleteFindingAggregatorRequest,
  () => DeleteFindingAggregatorResponse
);
