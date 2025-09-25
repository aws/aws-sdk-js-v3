// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AI,
  _B,
  _CRSBA,
  _GAPP,
  _GAPPR,
  _GAPPRe,
  _GBP,
  _GBPR,
  _GBPRe,
  _h,
  _hCR,
  _hH,
  _hL,
  _N,
  _PAPP,
  _PAPPR,
  _PBP,
  _PBPR,
  _Po,
  _xaai,
  _xacrsba,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetAccessPointPolicyRequest = struct(
  n0,
  _GAPPR,
  0,
  [_AI, _N],
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
export var GetAccessPointPolicyResult = struct(n0, _GAPPRe, 0, [_Po], [0]);
export var GetBucketPolicyRequest = struct(
  n0,
  _GBPR,
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
export var GetBucketPolicyResult = struct(n0, _GBPRe, 0, [_Po], [0]);
export var PutAccessPointPolicyRequest = struct(
  n0,
  _PAPPR,
  0,
  [_AI, _N, _Po],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
    0,
  ]
);
export var PutBucketPolicyRequest = struct(
  n0,
  _PBPR,
  0,
  [_AI, _B, _CRSBA, _Po],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
    [
      2,
      {
        [_hH]: _xacrsba,
      },
    ],
    0,
  ]
);
export var GetAccessPointPolicy = op(
  n0,
  _GAPP,
  {
    [_h]: ["GET", "/v20180820/accesspoint/{Name}/policy", 200],
  },
  () => GetAccessPointPolicyRequest,
  () => GetAccessPointPolicyResult
);
export var GetBucketPolicy = op(
  n0,
  _GBP,
  {
    [_h]: ["GET", "/v20180820/bucket/{Bucket}/policy", 200],
  },
  () => GetBucketPolicyRequest,
  () => GetBucketPolicyResult
);
export var PutAccessPointPolicy = op(
  n0,
  _PAPP,
  {
    [_h]: ["PUT", "/v20180820/accesspoint/{Name}/policy", 200],
  },
  () => PutAccessPointPolicyRequest,
  () => Unit
);
export var PutBucketPolicy = op(
  n0,
  _PBP,
  {
    [_h]: ["PUT", "/v20180820/bucket/{Bucket}/policy", 200],
    [_hCR]: 1,
  },
  () => PutBucketPolicyRequest,
  () => Unit
);
