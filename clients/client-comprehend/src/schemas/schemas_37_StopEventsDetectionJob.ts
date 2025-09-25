// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _JI, _JS, _SEDJRtopv, _SEDJRtopve, _SEDJtop, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopEventsDetectionJobRequest = struct(n0, _SEDJRtopv, 0, [_JI], [0]);
export var StopEventsDetectionJobResponse = struct(n0, _SEDJRtopve, 0, [_JI, _JS], [0, 0]);
export var StopEventsDetectionJob = op(
  n0,
  _SEDJtop,
  0,
  () => StopEventsDetectionJobRequest,
  () => StopEventsDetectionJobResponse
);
