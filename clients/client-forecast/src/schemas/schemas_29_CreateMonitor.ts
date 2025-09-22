// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CM, _CMR, _CMRr, _MA, _MN, _RA, _Ta, n0, Tags } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateMonitorRequest = struct(n0, _CMR, 0, [_MN, _RA, _Ta], [0, 0, [() => Tags, 0]]);
export var CreateMonitorResponse = struct(n0, _CMRr, 0, [_MA], [0]);
export var CreateMonitor = op(
  n0,
  _CM,
  0,
  () => CreateMonitorRequest,
  () => CreateMonitorResponse
);
