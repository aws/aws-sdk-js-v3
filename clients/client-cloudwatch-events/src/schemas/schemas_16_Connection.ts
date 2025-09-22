// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _EBN, _EP, _Ev, _RAP, _Res, _RPe, _RPR, _SI, _TEP, _TEPR, _TEPRe, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var RemovePermissionRequest = struct(n0, _RPR, 0, [_SI, _RAP, _EBN], [0, 2, 0]);
export var TestEventPatternRequest = struct(n0, _TEPR, 0, [_EP, _Ev], [0, 0]);
export var TestEventPatternResponse = struct(n0, _TEPRe, 0, [_Res], [2]);
export var RemovePermission = op(
  n0,
  _RPe,
  0,
  () => RemovePermissionRequest,
  () => Unit
);
export var TestEventPattern = op(
  n0,
  _TEP,
  0,
  () => TestEventPatternRequest,
  () => TestEventPatternResponse
);
