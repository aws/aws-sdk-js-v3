// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DNC, _DNCR, _ETv, _h, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteNotificationConfigurationRequest = struct(n0, _DNCR, 0, [_ETv], [[0, 1]]);
export var DeleteNotificationConfiguration = op(
  n0,
  _DNC,
  {
    [_h]: ["DELETE", "/notification-configurations/{EventType}", 200],
  },
  () => DeleteNotificationConfigurationRequest,
  () => Unit
);
