// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DM, _DMR, _MA, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMonitorRequest = struct(n0, _DMR, 0, [_MA], [0]);
export var DeleteMonitor = op(
  n0,
  _DM,
  2,
  () => DeleteMonitorRequest,
  () => Unit
);
