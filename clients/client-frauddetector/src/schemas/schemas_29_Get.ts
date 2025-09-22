// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _eDS, _eTN, _GDEBETS, _GDEBETSR, _GDEBETSRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetDeleteEventsByEventTypeStatusRequest = struct(n0, _GDEBETSR, 0, [_eTN], [0]);
export var GetDeleteEventsByEventTypeStatusResult = struct(n0, _GDEBETSRe, 0, [_eTN, _eDS], [0, 0]);
export var GetDeleteEventsByEventTypeStatus = op(
  n0,
  _GDEBETS,
  0,
  () => GetDeleteEventsByEventTypeStatusRequest,
  () => GetDeleteEventsByEventTypeStatusResult
);
