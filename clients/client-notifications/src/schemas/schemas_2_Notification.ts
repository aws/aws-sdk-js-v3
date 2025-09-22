// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _aD, _cT, _d, _GNC, _GNCR, _GNCRe, _ht, _n, _st, _su, _UNC, _UNCR, _UNCRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetNotificationConfigurationRequest = struct(n0, _GNCR, 0, [_a], [[0, 1]]);
export var GetNotificationConfigurationResponse = struct(
  n0,
  _GNCRe,
  0,
  [_a, _n, _d, _st, _cT, _aD, _su],
  [0, 0, 0, 0, 5, 0, 0]
);
export var UpdateNotificationConfigurationRequest = struct(n0, _UNCR, 0, [_a, _n, _d, _aD], [[0, 1], 0, 0, 0]);
export var UpdateNotificationConfigurationResponse = struct(n0, _UNCRp, 0, [_a], [0]);
export var GetNotificationConfiguration = op(
  n0,
  _GNC,
  {
    [_ht]: ["GET", "/notification-configurations/{arn}", 200],
  },
  () => GetNotificationConfigurationRequest,
  () => GetNotificationConfigurationResponse
);
export var UpdateNotificationConfiguration = op(
  n0,
  _UNC,
  {
    [_ht]: ["PUT", "/notification-configurations/{arn}", 200],
  },
  () => UpdateNotificationConfigurationRequest,
  () => UpdateNotificationConfigurationResponse
);
