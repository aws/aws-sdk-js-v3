// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DEBET, _DEBETR, _DEBETRe, _eDS, _eTN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEventsByEventTypeRequest = struct(n0, _DEBETR, 0, [_eTN], [0]);
export var DeleteEventsByEventTypeResult = struct(n0, _DEBETRe, 0, [_eTN, _eDS], [0, 0]);
export var DeleteEventsByEventType = op(
  n0,
  _DEBET,
  0,
  () => DeleteEventsByEventTypeRequest,
  () => DeleteEventsByEventTypeResult
);
