// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CPIo, _CPIR, _CPIRo, _DR, _dR, _eQN, _II, _OI, _oI, _PCr, _R, _r, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ConfirmProductInstanceRequest = struct(
  n0,
  _CPIR,
  0,
  [_II, _PCr, _DR],
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
export var ConfirmProductInstanceResult = struct(
  n0,
  _CPIRo,
  0,
  [_R, _OI],
  [
    [
      2,
      {
        [_eQN]: `Return`,
        [_xN]: _r,
      },
    ],
    [
      0,
      {
        [_eQN]: `OwnerId`,
        [_xN]: _oI,
      },
    ],
  ]
);
export var ConfirmProductInstance = op(
  n0,
  _CPIo,
  0,
  () => ConfirmProductInstanceRequest,
  () => ConfirmProductInstanceResult
);
