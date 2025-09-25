// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _B, _DBP, _DBPR, _EBO, _h, _hH, _xaebo, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBucketPolicyRequest = struct(
  n0,
  _DBPR,
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
export var DeleteBucketPolicy = op(
  n0,
  _DBP,
  {
    [_h]: ["DELETE", "/?policy", 204],
  },
  () => DeleteBucketPolicyRequest,
  () => Unit
);
