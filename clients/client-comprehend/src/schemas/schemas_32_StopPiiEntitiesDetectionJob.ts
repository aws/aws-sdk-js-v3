// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _JI, _JS, _SPEDJRto, _SPEDJRtop, _SPEDJt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopPiiEntitiesDetectionJobRequest = struct(n0, _SPEDJRto, 0, [_JI], [0]);
export var StopPiiEntitiesDetectionJobResponse = struct(n0, _SPEDJRtop, 0, [_JI, _JS], [0, 0]);
export var StopPiiEntitiesDetectionJob = op(
  n0,
  _SPEDJt,
  0,
  () => StopPiiEntitiesDetectionJobRequest,
  () => StopPiiEntitiesDetectionJobResponse
);
