// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _dR, _DVCe, _DVCR, _eQN, _VCI, _xN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVpnConnectionRequest = struct(
  n0,
  _DVCR,
  0,
  [_VCI, _DR],
  [
    0,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var DeleteVpnConnection = op(
  n0,
  _DVCe,
  0,
  () => DeleteVpnConnectionRequest,
  () => Unit
);
