// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _B, _DBP, _DBPR, _h, _hH, _hL, _xaai, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBucketPolicyRequest = struct(
  n0,
  _DBPR,
  0,
  [_AI, _B],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
  ]
);
export var DeleteBucketPolicy = op(
  n0,
  _DBP,
  {
    [_h]: ["DELETE", "/v20180820/bucket/{Bucket}/policy", 200],
  },
  () => DeleteBucketPolicyRequest,
  () => Unit
);
