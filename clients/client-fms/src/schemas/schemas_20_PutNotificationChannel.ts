// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _PNC, _PNCR, _SRN, _STA, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var PutNotificationChannelRequest = struct(n0, _PNCR, 0, [_STA, _SRN], [0, 0]);
export var PutNotificationChannel = op(
  n0,
  _PNC,
  0,
  () => PutNotificationChannelRequest,
  () => Unit
);
