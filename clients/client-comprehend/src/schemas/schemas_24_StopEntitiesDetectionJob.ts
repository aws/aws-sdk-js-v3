// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _JI, _JS, _SEDJRto, _SEDJRtop, _SEDJto, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopEntitiesDetectionJobRequest = struct(n0, _SEDJRto, 0, [_JI], [0]);
export var StopEntitiesDetectionJobResponse = struct(n0, _SEDJRtop, 0, [_JI, _JS], [0, 0]);
export var StopEntitiesDetectionJob = op(
  n0,
  _SEDJto,
  0,
  () => StopEntitiesDetectionJobRequest,
  () => StopEntitiesDetectionJobResponse
);
