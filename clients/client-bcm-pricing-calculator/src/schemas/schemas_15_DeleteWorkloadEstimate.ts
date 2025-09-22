// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DWE, _DWER, _DWERe, _ide, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteWorkloadEstimateRequest = struct(n0, _DWER, 0, [_ide], [0]);
export var DeleteWorkloadEstimateResponse = struct(n0, _DWERe, 0, [], []);
export var DeleteWorkloadEstimate = op(
  n0,
  _DWE,
  2,
  () => DeleteWorkloadEstimateRequest,
  () => DeleteWorkloadEstimateResponse
);
