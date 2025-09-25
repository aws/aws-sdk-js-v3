// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSRP, _DSRPI, _ISRP, _ISRPI, _RPH, _SARN, _SN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DecreaseStreamRetentionPeriodInput = struct(n0, _DSRPI, 0, [_SN, _RPH, _SARN], [0, 1, 0]);
export var IncreaseStreamRetentionPeriodInput = struct(n0, _ISRPI, 0, [_SN, _RPH, _SARN], [0, 1, 0]);
export var DecreaseStreamRetentionPeriod = op(
  n0,
  _DSRP,
  0,
  () => DecreaseStreamRetentionPeriodInput,
  () => Unit
);
export var IncreaseStreamRetentionPeriod = op(
  n0,
  _ISRP,
  0,
  () => IncreaseStreamRetentionPeriodInput,
  () => Unit
);
