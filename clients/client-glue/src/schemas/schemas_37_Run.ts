// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CMLTRa, _CMLTRR, _CMLTRRa, _St, _TIr, _TRI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelMLTaskRunRequest = struct(n0, _CMLTRR, 0, [_TIr, _TRI], [0, 0]);
export var CancelMLTaskRunResponse = struct(n0, _CMLTRRa, 0, [_TIr, _TRI, _St], [0, 0, 0]);
export var CancelMLTaskRun = op(
  n0,
  _CMLTRa,
  0,
  () => CancelMLTaskRunRequest,
  () => CancelMLTaskRunResponse
);
