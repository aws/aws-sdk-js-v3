// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _ASGN, _ASGNu, _DNCA, _DNCe, _DNCTe, _MR, _NC, _NCo, _NT, _NTo, _TARN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeNotificationConfigurationsAnswer = struct(
  n0,
  _DNCA,
  0,
  [_NC, _NT],
  [() => NotificationConfigurations, 0]
);
export var DescribeNotificationConfigurationsType = struct(n0, _DNCTe, 0, [_ASGNu, _NT, _MR], [64 | 0, 0, 1]);
export var NotificationConfiguration = struct(n0, _NCo, 0, [_ASGN, _TARN, _NTo], [0, 0, 0]);
export var AutoScalingGroupNames = 64 | 0;

export var NotificationConfigurations = list(n0, _NC, 0, () => NotificationConfiguration);
export var DescribeNotificationConfigurations = op(
  n0,
  _DNCe,
  0,
  () => DescribeNotificationConfigurationsType,
  () => DescribeNotificationConfigurationsAnswer
);
