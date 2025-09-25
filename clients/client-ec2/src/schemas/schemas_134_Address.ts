// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aI,
  _AIl,
  _DR,
  _dR,
  _eQN,
  _MATV,
  _MATVR,
  _MATVRo,
  _PI,
  _pI,
  _RATC,
  _RATCR,
  _RATCRe,
  _Sta,
  _sta,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var MoveAddressToVpcRequest = struct(
  n0,
  _MATVR,
  0,
  [_DR, _PI],
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
        [_eQN]: `PublicIp`,
        [_xN]: _pI,
      },
    ],
  ]
);
export var MoveAddressToVpcResult = struct(
  n0,
  _MATVRo,
  0,
  [_AIl, _Sta],
  [
    [
      0,
      {
        [_eQN]: `AllocationId`,
        [_xN]: _aI,
      },
    ],
    [
      0,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
      },
    ],
  ]
);
export var RestoreAddressToClassicRequest = struct(
  n0,
  _RATCR,
  0,
  [_DR, _PI],
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
        [_eQN]: `PublicIp`,
        [_xN]: _pI,
      },
    ],
  ]
);
export var RestoreAddressToClassicResult = struct(
  n0,
  _RATCRe,
  0,
  [_PI, _Sta],
  [
    [
      0,
      {
        [_eQN]: `PublicIp`,
        [_xN]: _pI,
      },
    ],
    [
      0,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
      },
    ],
  ]
);
export var MoveAddressToVpc = op(
  n0,
  _MATV,
  0,
  () => MoveAddressToVpcRequest,
  () => MoveAddressToVpcResult
);
export var RestoreAddressToClassic = op(
  n0,
  _RATC,
  0,
  () => RestoreAddressToClassicRequest,
  () => RestoreAddressToClassicResult
);
