// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _JI, _SICDCMIJRto, _SICDCMIJRtop, _SICDCMIJt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopICD10CMInferenceJobRequest = struct(n0, _SICDCMIJRto, 0, [_JI], [0]);
export var StopICD10CMInferenceJobResponse = struct(n0, _SICDCMIJRtop, 0, [_JI], [0]);
export var StopICD10CMInferenceJob = op(
  n0,
  _SICDCMIJt,
  0,
  () => StopICD10CMInferenceJobRequest,
  () => StopICD10CMInferenceJobResponse
);
