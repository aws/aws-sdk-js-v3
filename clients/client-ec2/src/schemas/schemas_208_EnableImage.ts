// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _EIna, _EIR, _EIRn, _eQN, _IIm, _R, _r, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var EnableImageRequest = struct(n0, _EIR, 0, [_IIm, _DR], [0, 2]);
export var EnableImageResult = struct(
  n0,
  _EIRn,
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
export var EnableImage = op(
  n0,
  _EIna,
  0,
  () => EnableImageRequest,
  () => EnableImageResult
);
