// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _JI, _SSNOMEDCTIJRto, _SSNOMEDCTIJRtop, _SSNOMEDCTIJt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopSNOMEDCTInferenceJobRequest = struct(n0, _SSNOMEDCTIJRto, 0, [_JI], [0]);
export var StopSNOMEDCTInferenceJobResponse = struct(n0, _SSNOMEDCTIJRtop, 0, [_JI], [0]);
export var StopSNOMEDCTInferenceJob = op(
  n0,
  _SSNOMEDCTIJt,
  0,
  () => StopSNOMEDCTInferenceJobRequest,
  () => StopSNOMEDCTInferenceJobResponse
);
