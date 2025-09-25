// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _JI, _SEDVJRto, _SEDVJRtop, _SEDVJt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopEntitiesDetectionV2JobRequest = struct(n0, _SEDVJRto, 0, [_JI], [0]);
export var StopEntitiesDetectionV2JobResponse = struct(n0, _SEDVJRtop, 0, [_JI], [0]);
export var StopEntitiesDetectionV2Job = op(
  n0,
  _SEDVJt,
  0,
  () => StopEntitiesDetectionV2JobRequest,
  () => StopEntitiesDetectionV2JobResponse
);
