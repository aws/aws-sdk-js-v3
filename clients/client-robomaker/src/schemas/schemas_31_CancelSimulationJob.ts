// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CSJ, _CSJR, _CSJRa, _h, _jo, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelSimulationJobRequest = struct(n0, _CSJR, 0, [_jo], [0]);
export var CancelSimulationJobResponse = struct(n0, _CSJRa, 0, [], []);
export var CancelSimulationJob = op(
  n0,
  _CSJ,
  {
    [_h]: ["POST", "/cancelSimulationJob", 200],
  },
  () => CancelSimulationJobRequest,
  () => CancelSimulationJobResponse
);
