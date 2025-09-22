// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _GTBP,
  _GTBPR,
  _GTBPRe,
  _GTP,
  _GTPR,
  _GTPRe,
  _h,
  _n,
  _na,
  _PTBP,
  _PTBPR,
  _PTP,
  _PTPR,
  _rP,
  _tBARN,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetTableBucketPolicyRequest = struct(n0, _GTBPR, 0, [_tBARN], [[0, 1]]);
export var GetTableBucketPolicyResponse = struct(n0, _GTBPRe, 0, [_rP], [0]);
export var GetTablePolicyRequest = struct(
  n0,
  _GTPR,
  0,
  [_tBARN, _n, _na],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetTablePolicyResponse = struct(n0, _GTPRe, 0, [_rP], [0]);
export var PutTableBucketPolicyRequest = struct(n0, _PTBPR, 0, [_tBARN, _rP], [[0, 1], 0]);
export var PutTablePolicyRequest = struct(n0, _PTPR, 0, [_tBARN, _n, _na, _rP], [[0, 1], [0, 1], [0, 1], 0]);
export var GetTableBucketPolicy = op(
  n0,
  _GTBP,
  {
    [_h]: ["GET", "/buckets/{tableBucketARN}/policy", 200],
  },
  () => GetTableBucketPolicyRequest,
  () => GetTableBucketPolicyResponse
);
export var GetTablePolicy = op(
  n0,
  _GTP,
  {
    [_h]: ["GET", "/tables/{tableBucketARN}/{namespace}/{name}/policy", 200],
  },
  () => GetTablePolicyRequest,
  () => GetTablePolicyResponse
);
export var PutTableBucketPolicy = op(
  n0,
  _PTBP,
  {
    [_h]: ["PUT", "/buckets/{tableBucketARN}/policy", 200],
  },
  () => PutTableBucketPolicyRequest,
  () => Unit
);
export var PutTablePolicy = op(
  n0,
  _PTP,
  {
    [_h]: ["PUT", "/tables/{tableBucketARN}/{namespace}/{name}/policy", 200],
  },
  () => PutTablePolicyRequest,
  () => Unit
);
