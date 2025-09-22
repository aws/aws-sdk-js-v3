// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _JI, _SRNIJRto, _SRNIJRtop, _SRNIJt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopRxNormInferenceJobRequest = struct(n0, _SRNIJRto, 0, [_JI], [0]);
export var StopRxNormInferenceJobResponse = struct(n0, _SRNIJRtop, 0, [_JI], [0]);
export var StopRxNormInferenceJob = op(
  n0,
  _SRNIJt,
  0,
  () => StopRxNormInferenceJobRequest,
  () => StopRxNormInferenceJobResponse
);
