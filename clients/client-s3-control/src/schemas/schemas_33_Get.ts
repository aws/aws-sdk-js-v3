// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _B, _CD, _GB, _GBR, _GBRe, _h, _hH, _hL, _PABE, _xaai, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetBucketRequest = struct(
  n0,
  _GBR,
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
export var GetBucketResult = struct(n0, _GBRe, 0, [_B, _PABE, _CD], [0, 2, 4]);
export var GetBucket = op(
  n0,
  _GB,
  {
    [_h]: ["GET", "/v20180820/bucket/{Bucket}", 200],
  },
  () => GetBucketRequest,
  () => GetBucketResult
);
