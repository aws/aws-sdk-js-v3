// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _JI, _JS, _SKPDJRto, _SKPDJRtop, _SKPDJt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopKeyPhrasesDetectionJobRequest = struct(n0, _SKPDJRto, 0, [_JI], [0]);
export var StopKeyPhrasesDetectionJobResponse = struct(n0, _SKPDJRtop, 0, [_JI, _JS], [0, 0]);
export var StopKeyPhrasesDetectionJob = op(
  n0,
  _SKPDJt,
  0,
  () => StopKeyPhrasesDetectionJobRequest,
  () => StopKeyPhrasesDetectionJobResponse
);
