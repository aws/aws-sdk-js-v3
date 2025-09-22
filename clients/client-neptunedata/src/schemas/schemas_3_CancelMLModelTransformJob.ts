// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cl, _CMLMTJa, _CMLMTJIa, _CMLMTJOa, _h, _hQ, _i, _nIRA, _s, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelMLModelTransformJobInput = struct(
  n0,
  _CMLMTJIa,
  0,
  [_i, _nIRA, _cl],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nIRA,
      },
    ],
    [
      2,
      {
        [_hQ]: _cl,
      },
    ],
  ]
);
export var CancelMLModelTransformJobOutput = struct(n0, _CMLMTJOa, 0, [_s], [0]);
export var CancelMLModelTransformJob = op(
  n0,
  _CMLMTJa,
  {
    [_h]: ["DELETE", "/ml/modeltransform/{id}", 200],
  },
  () => CancelMLModelTransformJobInput,
  () => CancelMLModelTransformJobOutput
);
