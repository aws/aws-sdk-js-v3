// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _jo, _RSJ, _RSJR, _RSJRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RestartSimulationJobRequest = struct(n0, _RSJR, 0, [_jo], [0]);
export var RestartSimulationJobResponse = struct(n0, _RSJRe, 0, [], []);
export var RestartSimulationJob = op(
  n0,
  _RSJ,
  {
    [_h]: ["POST", "/restartSimulationJob", 200],
  },
  () => RestartSimulationJobRequest,
  () => RestartSimulationJobResponse
);
