// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _B, _b, _CD, _cD, _h, _jN, _LOSBI, _LSB, _LSBR, _LSBRi, _N, _n, _NT, _nT, _SBI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListS3BucketsRequest = struct(
  n0,
  _LSBR,
  0,
  [_NT],
  [
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var ListS3BucketsResponse = struct(
  n0,
  _LSBRi,
  0,
  [_B, _NT],
  [
    [
      () => ListOfS3BucketInfo,
      {
        [_jN]: _b,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var S3BucketInfo = struct(
  n0,
  _SBI,
  0,
  [_CD, _N],
  [
    [
      0,
      {
        [_jN]: _cD,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
  ]
);
export var ListOfS3BucketInfo = list(n0, _LOSBI, 0, [() => S3BucketInfo, 0]);
export var ListS3Buckets = op(
  n0,
  _LSB,
  {
    [_h]: ["POST", "/s3Buckets", 200],
  },
  () => ListS3BucketsRequest,
  () => ListS3BucketsResponse
);
