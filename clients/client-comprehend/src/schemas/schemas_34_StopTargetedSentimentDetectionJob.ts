// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _JI, _JS, _STSDJRto, _STSDJRtop, _STSDJt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopTargetedSentimentDetectionJobRequest = struct(n0, _STSDJRto, 0, [_JI], [0]);
export var StopTargetedSentimentDetectionJobResponse = struct(n0, _STSDJRtop, 0, [_JI, _JS], [0, 0]);
export var StopTargetedSentimentDetectionJob = op(
  n0,
  _STSDJt,
  0,
  () => StopTargetedSentimentDetectionJobRequest,
  () => StopTargetedSentimentDetectionJobResponse
);
