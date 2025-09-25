// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AA, _AN, _DAel, _DAR, _DARe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteActionRequest = struct(n0, _DAR, 0, [_AN], [0]);
export var DeleteActionResponse = struct(n0, _DARe, 0, [_AA], [0]);
export var DeleteAction = op(
  n0,
  _DAel,
  0,
  () => DeleteActionRequest,
  () => DeleteActionResponse
);
