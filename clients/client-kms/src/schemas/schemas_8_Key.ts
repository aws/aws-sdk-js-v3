// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DD, _KI, _KSe, _PWID, _SKD, _SKDR, _SKDRc, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ScheduleKeyDeletionRequest = struct(n0, _SKDR, 0, [_KI, _PWID], [0, 1]);
export var ScheduleKeyDeletionResponse = struct(n0, _SKDRc, 0, [_KI, _DD, _KSe, _PWID], [0, 4, 0, 1]);
export var ScheduleKeyDeletion = op(
  n0,
  _SKD,
  0,
  () => ScheduleKeyDeletionRequest,
  () => ScheduleKeyDeletionResponse
);
