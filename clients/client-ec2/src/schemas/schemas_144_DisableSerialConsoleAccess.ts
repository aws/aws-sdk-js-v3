// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _DSCA, _DSCAR, _DSCARi, _eQN, _SCAE, _sCAE, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisableSerialConsoleAccessRequest = struct(n0, _DSCAR, 0, [_DR], [2]);
export var DisableSerialConsoleAccessResult = struct(
  n0,
  _DSCARi,
  0,
  [_SCAE],
  [
    [
      2,
      {
        [_eQN]: `SerialConsoleAccessEnabled`,
        [_xN]: _sCAE,
      },
    ],
  ]
);
export var DisableSerialConsoleAccess = op(
  n0,
  _DSCA,
  0,
  () => DisableSerialConsoleAccessRequest,
  () => DisableSerialConsoleAccessResult
);
