// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSPe, _DSPR, _DSPRe, _N, _SSPRto, _SSPRtop, _SSPt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteStreamProcessorRequest = struct(n0, _DSPR, 0, [_N], [0]);
export var DeleteStreamProcessorResponse = struct(n0, _DSPRe, 0, [], []);
export var StopStreamProcessorRequest = struct(n0, _SSPRto, 0, [_N], [0]);
export var StopStreamProcessorResponse = struct(n0, _SSPRtop, 0, [], []);
export var DeleteStreamProcessor = op(
  n0,
  _DSPe,
  0,
  () => DeleteStreamProcessorRequest,
  () => DeleteStreamProcessorResponse
);
export var StopStreamProcessor = op(
  n0,
  _SSPt,
  0,
  () => StopStreamProcessorRequest,
  () => StopStreamProcessorResponse
);
