// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DETe, _DETRel, _DETRele, _n, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEventTypeRequest = struct(n0, _DETRel, 0, [_n], [0]);
export var DeleteEventTypeResult = struct(n0, _DETRele, 0, [], []);
export var DeleteEventType = op(
  n0,
  _DETe,
  0,
  () => DeleteEventTypeRequest,
  () => DeleteEventTypeResult
);
