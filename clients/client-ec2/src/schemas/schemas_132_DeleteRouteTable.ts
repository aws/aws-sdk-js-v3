// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _dR, _DRT, _DRTR, _eQN, _RTI, _rTI, _xN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRouteTableRequest = struct(
  n0,
  _DRTR,
  0,
  [_DR, _RTI],
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
        [_eQN]: `RouteTableId`,
        [_xN]: _rTI,
      },
    ],
  ]
);
export var DeleteRouteTable = op(
  n0,
  _DRT,
  0,
  () => DeleteRouteTableRequest,
  () => Unit
);
