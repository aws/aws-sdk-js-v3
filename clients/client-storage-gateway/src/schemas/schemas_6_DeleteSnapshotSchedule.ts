// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSS, _DSSI, _DSSO, _VARN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSnapshotScheduleInput = struct(n0, _DSSI, 0, [_VARN], [0]);
export var DeleteSnapshotScheduleOutput = struct(n0, _DSSO, 0, [_VARN], [0]);
export var DeleteSnapshotSchedule = op(
  n0,
  _DSS,
  0,
  () => DeleteSnapshotScheduleInput,
  () => DeleteSnapshotScheduleOutput
);
