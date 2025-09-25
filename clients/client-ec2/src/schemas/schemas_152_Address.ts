// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AIs, _DAi, _DARi, _DR, _dR, _eQN, _PI, _xN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateAddressRequest = struct(
  n0,
  _DARi,
  0,
  [_AIs, _PI, _DR],
  [
    0,
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
export var DisassociateAddress = op(
  n0,
  _DAi,
  0,
  () => DisassociateAddressRequest,
  () => Unit
);
