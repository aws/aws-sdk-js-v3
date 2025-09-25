// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CFIo, _CFIR, _CFIRo, _CT, _De, _DR, _eQN, _FII, _fII, _N, _SFII, _SRo, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CopyFpgaImageRequest = struct(n0, _CFIR, 0, [_DR, _SFII, _De, _N, _SRo, _CT], [2, 0, 0, 0, 0, 0]);
export var CopyFpgaImageResult = struct(
  n0,
  _CFIRo,
  0,
  [_FII],
  [
    [
      0,
      {
        [_eQN]: `FpgaImageId`,
        [_xN]: _fII,
      },
    ],
  ]
);
export var CopyFpgaImage = op(
  n0,
  _CFIo,
  0,
  () => CopyFpgaImageRequest,
  () => CopyFpgaImageResult
);
