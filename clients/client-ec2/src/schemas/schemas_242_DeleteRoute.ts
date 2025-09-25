// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DCB, _dCB, _DICB, _dICB, _DPLI, _DR, _dR, _DRel, _DRR, _eQN, _RTI, _rTI, _xN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRouteRequest = struct(
  n0,
  _DRR,
  0,
  [_DPLI, _DR, _RTI, _DCB, _DICB],
  [
    0,
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
    [
      0,
      {
        [_eQN]: `DestinationCidrBlock`,
        [_xN]: _dCB,
      },
    ],
    [
      0,
      {
        [_eQN]: `DestinationIpv6CidrBlock`,
        [_xN]: _dICB,
      },
    ],
  ]
);
export var DeleteRoute = op(
  n0,
  _DRel,
  0,
  () => DeleteRouteRequest,
  () => Unit
);
