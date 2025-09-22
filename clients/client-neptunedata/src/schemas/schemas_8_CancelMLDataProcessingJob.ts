// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cl, _CMLDPJ, _CMLDPJI, _CMLDPJO, _h, _hQ, _i, _nIRA, _s, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelMLDataProcessingJobInput = struct(
  n0,
  _CMLDPJI,
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
export var CancelMLDataProcessingJobOutput = struct(n0, _CMLDPJO, 0, [_s], [0]);
export var CancelMLDataProcessingJob = op(
  n0,
  _CMLDPJ,
  {
    [_h]: ["DELETE", "/ml/dataprocessing/{id}", 200],
  },
  () => CancelMLDataProcessingJobInput,
  () => CancelMLDataProcessingJobOutput
);
