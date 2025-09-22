// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CRS, _CRSR, _CRSRr, _CT, _LW, _MA, _MN, _PM, _RF, _RSD, _S, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateRetrainingSchedulerRequest = struct(
  n0,
  _CRSR,
  0,
  [_MN, _RSD, _RF, _LW, _PM, _CT],
  [0, 4, 0, 0, 0, [0, 4]]
);
export var CreateRetrainingSchedulerResponse = struct(n0, _CRSRr, 0, [_MN, _MA, _S], [0, 0, 0]);
export var CreateRetrainingScheduler = op(
  n0,
  _CRS,
  0,
  () => CreateRetrainingSchedulerRequest,
  () => CreateRetrainingSchedulerResponse
);
