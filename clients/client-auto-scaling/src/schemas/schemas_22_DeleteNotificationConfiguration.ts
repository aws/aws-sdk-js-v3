// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ASGN, _DNC, _DNCT, _TARN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteNotificationConfigurationType = struct(n0, _DNCT, 0, [_ASGN, _TARN], [0, 0]);
export var DeleteNotificationConfiguration = op(
  n0,
  _DNC,
  0,
  () => DeleteNotificationConfigurationType,
  () => Unit
);
