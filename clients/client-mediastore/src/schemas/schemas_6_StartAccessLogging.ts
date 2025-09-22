// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CN, _SAL, _SALI, _SALO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StartAccessLoggingInput = struct(n0, _SALI, 0, [_CN], [0]);
export var StartAccessLoggingOutput = struct(n0, _SALO, 0, [], []);
export var StartAccessLogging = op(
  n0,
  _SAL,
  0,
  () => StartAccessLoggingInput,
  () => StartAccessLoggingOutput
);
