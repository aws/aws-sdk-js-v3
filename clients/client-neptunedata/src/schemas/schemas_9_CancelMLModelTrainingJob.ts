// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cl, _CMLMTJ, _CMLMTJI, _CMLMTJO, _h, _hQ, _i, _nIRA, _s, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelMLModelTrainingJobInput = struct(
  n0,
  _CMLMTJI,
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
export var CancelMLModelTrainingJobOutput = struct(n0, _CMLMTJO, 0, [_s], [0]);
export var CancelMLModelTrainingJob = op(
  n0,
  _CMLMTJ,
  {
    [_h]: ["DELETE", "/ml/modeltraining/{id}", 200],
  },
  () => CancelMLModelTrainingJobInput,
  () => CancelMLModelTrainingJobOutput
);
