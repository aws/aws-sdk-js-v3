// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DTBP, _DTBPR, _h, _tBARN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTableBucketPolicyRequest = struct(n0, _DTBPR, 0, [_tBARN], [[0, 1]]);
export var DeleteTableBucketPolicy = op(
  n0,
  _DTBP,
  {
    [_h]: ["DELETE", "/buckets/{tableBucketARN}/policy", 204],
  },
  () => DeleteTableBucketPolicyRequest,
  () => Unit
);
