// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _JI, _SPHIDJRto, _SPHIDJRtop, _SPHIDJt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopPHIDetectionJobRequest = struct(n0, _SPHIDJRto, 0, [_JI], [0]);
export var StopPHIDetectionJobResponse = struct(n0, _SPHIDJRtop, 0, [_JI], [0]);
export var StopPHIDetectionJob = op(
  n0,
  _SPHIDJt,
  0,
  () => StopPHIDetectionJobRequest,
  () => StopPHIDetectionJobResponse
);
