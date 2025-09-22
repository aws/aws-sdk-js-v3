// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _eQN, _IIm, _R, _r, _RIFRB, _RIFRBR, _RIFRBRe, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RestoreImageFromRecycleBinRequest = struct(n0, _RIFRBR, 0, [_IIm, _DR], [0, 2]);
export var RestoreImageFromRecycleBinResult = struct(
  n0,
  _RIFRBRe,
  0,
  [_R],
  [
    [
      2,
      {
        [_eQN]: `Return`,
        [_xN]: _r,
      },
    ],
  ]
);
export var RestoreImageFromRecycleBin = op(
  n0,
  _RIFRB,
  0,
  () => RestoreImageFromRecycleBinRequest,
  () => RestoreImageFromRecycleBinResult
);
