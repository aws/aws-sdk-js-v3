// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _JI, _JS, _SDLDJRto, _SDLDJRtop, _SDLDJt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopDominantLanguageDetectionJobRequest = struct(n0, _SDLDJRto, 0, [_JI], [0]);
export var StopDominantLanguageDetectionJobResponse = struct(n0, _SDLDJRtop, 0, [_JI, _JS], [0, 0]);
export var StopDominantLanguageDetectionJob = op(
  n0,
  _SDLDJt,
  0,
  () => StopDominantLanguageDetectionJobRequest,
  () => StopDominantLanguageDetectionJobResponse
);
