// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _B,
  _CA,
  _CM,
  _CMD,
  _CRSBA,
  _EBO,
  _GBP,
  _GBPO,
  _GBPR,
  _h,
  _hH,
  _PBP,
  _PBPR,
  _Po,
  _xacrsba,
  _xaebo,
  _xasca,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetBucketPolicyOutput = struct(n0, _GBPO, 0, [_Po], [[0, 16]]);
export var GetBucketPolicyRequest = struct(
  n0,
  _GBPR,
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
export var PutBucketPolicyRequest = struct(
  n0,
  _PBPR,
  0,
  [_B, _CMD, _CA, _CRSBA, _Po, _EBO],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _CM,
      },
    ],
    [
      0,
      {
        [_hH]: _xasca,
      },
    ],
    [
      2,
      {
        [_hH]: _xacrsba,
      },
    ],
    [0, 16],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var GetBucketPolicy = op(
  n0,
  _GBP,
  {
    [_h]: ["GET", "/?policy", 200],
  },
  () => GetBucketPolicyRequest,
  () => GetBucketPolicyOutput
);
export var PutBucketPolicy = op(
  n0,
  _PBP,
  {
    [_h]: ["PUT", "/?policy", 200],
  },
  () => PutBucketPolicyRequest,
  () => Unit
);
