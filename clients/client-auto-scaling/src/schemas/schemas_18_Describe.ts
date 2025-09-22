// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ASNT, _DASNT, _DASNTA, _DLHTA, _DLHTes, _LHT, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeAutoScalingNotificationTypesAnswer = struct(n0, _DASNTA, 0, [_ASNT], [64 | 0]);
export var DescribeLifecycleHookTypesAnswer = struct(n0, _DLHTA, 0, [_LHT], [64 | 0]);
export var AutoScalingNotificationTypes = 64 | 0;

export var DescribeAutoScalingNotificationTypes = op(
  n0,
  _DASNT,
  0,
  () => Unit,
  () => DescribeAutoScalingNotificationTypesAnswer
);
export var DescribeLifecycleHookTypes = op(
  n0,
  _DLHTes,
  0,
  () => Unit,
  () => DescribeLifecycleHookTypesAnswer
);
