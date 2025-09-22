// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DIisa, _DIRi, _DIRis, _DR, _eQN, _IIm, _R, _r, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisableImageRequest = struct(n0, _DIRi, 0, [_IIm, _DR], [0, 2]);
export var DisableImageResult = struct(
  n0,
  _DIRis,
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
export var DisableImage = op(
  n0,
  _DIisa,
  0,
  () => DisableImageRequest,
  () => DisableImageResult
);
