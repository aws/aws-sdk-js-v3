// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _B, _EBO, _GBV, _GBVO, _GBVR, _h, _hH, _MDf, _MFAD, _S, _VC, _xaebo, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetBucketVersioningOutput = struct(
  n0,
  _GBVO,
  {
    [_xN]: _VC,
  },
  [_S, _MFAD],
  [
    0,
    [
      0,
      {
        [_xN]: _MDf,
      },
    ],
  ]
);
export var GetBucketVersioningRequest = struct(
  n0,
  _GBVR,
  0,
  [_B, _EBO],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var GetBucketVersioning = op(
  n0,
  _GBV,
  {
    [_h]: ["GET", "/?versioning", 200],
  },
  () => GetBucketVersioningRequest,
  () => GetBucketVersioningOutput
);
