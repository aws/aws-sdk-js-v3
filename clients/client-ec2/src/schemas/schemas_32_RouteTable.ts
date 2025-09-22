// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AIs, _aIs, _DR, _dR, _DRTi, _DRTRi, _eQN, _xN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateRouteTableRequest = struct(
  n0,
  _DRTRi,
  0,
  [_DR, _AIs],
  [
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      0,
      {
        [_eQN]: `AssociationId`,
        [_xN]: _aIs,
      },
    ],
  ]
);
export var DisassociateRouteTable = op(
  n0,
  _DRTi,
  0,
  () => DisassociateRouteTableRequest,
  () => Unit
);
