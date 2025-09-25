// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GNC, _GNCR, _GNCRe, _SRN, _STA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetNotificationChannelRequest = struct(n0, _GNCR, 0, [], []);
export var GetNotificationChannelResponse = struct(n0, _GNCRe, 0, [_STA, _SRN], [0, 0]);
export var GetNotificationChannel = op(
  n0,
  _GNC,
  0,
  () => GetNotificationChannelRequest,
  () => GetNotificationChannelResponse
);
