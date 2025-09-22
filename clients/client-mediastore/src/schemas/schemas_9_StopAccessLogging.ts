// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CN, _SALIt, _SALOt, _SALt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopAccessLoggingInput = struct(n0, _SALIt, 0, [_CN], [0]);
export var StopAccessLoggingOutput = struct(n0, _SALOt, 0, [], []);
export var StopAccessLogging = op(
  n0,
  _SALt,
  0,
  () => StopAccessLoggingInput,
  () => StopAccessLoggingOutput
);
