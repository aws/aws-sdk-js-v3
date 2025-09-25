// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _B, _DB, _DBR, _EBO, _h, _hH, _xaebo, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBucketRequest = struct(
  n0,
  _DBR,
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
export var DeleteBucket = op(
  n0,
  _DB,
  {
    [_h]: ["DELETE", "/", 204],
  },
  () => DeleteBucketRequest,
  () => Unit
);
