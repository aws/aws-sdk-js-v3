// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _B, _DBL, _DBLR, _EBO, _h, _hH, _xaebo, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBucketLifecycleRequest = struct(
  n0,
  _DBLR,
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
export var DeleteBucketLifecycle = op(
  n0,
  _DBL,
  {
    [_h]: ["DELETE", "/?lifecycle", 204],
  },
  () => DeleteBucketLifecycleRequest,
  () => Unit
);
