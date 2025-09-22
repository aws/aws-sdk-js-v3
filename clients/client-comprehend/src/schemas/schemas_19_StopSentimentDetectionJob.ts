// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _JI, _JS, _SSDJRto, _SSDJRtop, _SSDJt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopSentimentDetectionJobRequest = struct(n0, _SSDJRto, 0, [_JI], [0]);
export var StopSentimentDetectionJobResponse = struct(n0, _SSDJRtop, 0, [_JI, _JS], [0, 0]);
export var StopSentimentDetectionJob = op(
  n0,
  _SSDJt,
  0,
  () => StopSentimentDetectionJobRequest,
  () => StopSentimentDetectionJobResponse
);
