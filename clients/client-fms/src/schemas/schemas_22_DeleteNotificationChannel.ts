// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DNC, _DNCR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteNotificationChannelRequest = struct(n0, _DNCR, 0, [], []);
export var DeleteNotificationChannel = op(
  n0,
  _DNC,
  0,
  () => DeleteNotificationChannelRequest,
  () => Unit
);
