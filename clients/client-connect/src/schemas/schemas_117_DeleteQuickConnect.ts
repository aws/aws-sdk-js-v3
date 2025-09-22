// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DQC, _DQCR, _h, _II, _QCIu, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteQuickConnectRequest = struct(
  n0,
  _DQCR,
  0,
  [_II, _QCIu],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteQuickConnect = op(
  n0,
  _DQC,
  {
    [_h]: ["DELETE", "/quick-connects/{InstanceId}/{QuickConnectId}", 200],
  },
  () => DeleteQuickConnectRequest,
  () => Unit
);
