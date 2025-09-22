// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _B, _DBe, _DBR, _h, _hH, _hL, _xaai, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBucketRequest = struct(
  n0,
  _DBR,
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
export var DeleteBucket = op(
  n0,
  _DBe,
  {
    [_h]: ["DELETE", "/v20180820/bucket/{Bucket}", 200],
  },
  () => DeleteBucketRequest,
  () => Unit
);
