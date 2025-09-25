// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDV, _DDVR, _DDVRe, _dI, _dVI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDetectorVersionRequest = struct(n0, _DDVR, 0, [_dI, _dVI], [0, 0]);
export var DeleteDetectorVersionResult = struct(n0, _DDVRe, 0, [], []);
export var DeleteDetectorVersion = op(
  n0,
  _DDV,
  0,
  () => DeleteDetectorVersionRequest,
  () => DeleteDetectorVersionResult
);
