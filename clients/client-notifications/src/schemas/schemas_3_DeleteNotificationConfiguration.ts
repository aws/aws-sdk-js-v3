// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _DNC, _DNCR, _DNCRe, _ht, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteNotificationConfigurationRequest = struct(n0, _DNCR, 0, [_a], [[0, 1]]);
export var DeleteNotificationConfigurationResponse = struct(n0, _DNCRe, 0, [], []);
export var DeleteNotificationConfiguration = op(
  n0,
  _DNC,
  {
    [_ht]: ["DELETE", "/notification-configurations/{arn}", 200],
  },
  () => DeleteNotificationConfigurationRequest,
  () => DeleteNotificationConfigurationResponse
);
