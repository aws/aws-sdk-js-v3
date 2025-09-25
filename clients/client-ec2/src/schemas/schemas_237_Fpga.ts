// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _At, _DFIe, _DFIR, _DFIRe, _DR, _eQN, _FII, _R, _r, _RFIA, _RFIAR, _RFIARe, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteFpgaImageRequest = struct(n0, _DFIR, 0, [_DR, _FII], [2, 0]);
export var DeleteFpgaImageResult = struct(
  n0,
  _DFIRe,
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
export var ResetFpgaImageAttributeRequest = struct(n0, _RFIAR, 0, [_DR, _FII, _At], [2, 0, 0]);
export var ResetFpgaImageAttributeResult = struct(
  n0,
  _RFIARe,
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
export var DeleteFpgaImage = op(
  n0,
  _DFIe,
  0,
  () => DeleteFpgaImageRequest,
  () => DeleteFpgaImageResult
);
export var ResetFpgaImageAttribute = op(
  n0,
  _RFIA,
  0,
  () => ResetFpgaImageAttributeRequest,
  () => ResetFpgaImageAttributeResult
);
