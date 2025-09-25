// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _APA,
  _B,
  _BA,
  _BLN,
  _BLT,
  _BR,
  _Bu,
  _CD,
  _ct,
  _CTon,
  _EBO,
  _h,
  _HB,
  _HBO,
  _HBR,
  _hH,
  _hQ,
  _LAMDBR,
  _LDB,
  _LDBO,
  _LDBR,
  _MDB,
  _mdb,
  _N,
  _xaapa,
  _xaba,
  _xabln,
  _xablt,
  _xabr,
  _xaebo,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Bucket = struct(n0, _B, 0, [_N, _CD, _BR, _BA], [0, 4, 0, 0]);
export var HeadBucketOutput = struct(
  n0,
  _HBO,
  0,
  [_BA, _BLT, _BLN, _BR, _APA],
  [
    [
      0,
      {
        [_hH]: _xaba,
      },
    ],
    [
      0,
      {
        [_hH]: _xablt,
      },
    ],
    [
      0,
      {
        [_hH]: _xabln,
      },
    ],
    [
      0,
      {
        [_hH]: _xabr,
      },
    ],
    [
      2,
      {
        [_hH]: _xaapa,
      },
    ],
  ]
);
export var HeadBucketRequest = struct(
  n0,
  _HBR,
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
export var ListDirectoryBucketsOutput = struct(
  n0,
  _LDBO,
  {
    [_xN]: _LAMDBR,
  },
  [_Bu, _CTon],
  [[() => Buckets, 0], 0]
);
export var ListDirectoryBucketsRequest = struct(
  n0,
  _LDBR,
  0,
  [_CTon, _MDB],
  [
    [
      0,
      {
        [_hQ]: _ct,
      },
    ],
    [
      1,
      {
        [_hQ]: _mdb,
      },
    ],
  ]
);
export var Buckets = list(n0, _Bu, 0, [
  () => Bucket,
  {
    [_xN]: _B,
  },
]);
export var HeadBucket = op(
  n0,
  _HB,
  {
    [_h]: ["HEAD", "/", 200],
  },
  () => HeadBucketRequest,
  () => HeadBucketOutput
);
export var ListDirectoryBuckets = op(
  n0,
  _LDB,
  {
    [_h]: ["GET", "/?x-id=ListDirectoryBuckets", 200],
  },
  () => ListDirectoryBucketsRequest,
  () => ListDirectoryBucketsOutput
);
