// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DD, _DDR, _DDRe, _dI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDetectorRequest = struct(n0, _DDR, 0, [_dI], [0]);
export var DeleteDetectorResult = struct(n0, _DDRe, 0, [], []);
export var DeleteDetector = op(
  n0,
  _DD,
  0,
  () => DeleteDetectorRequest,
  () => DeleteDetectorResult
);
