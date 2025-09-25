// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DTB, _DTBR, _h, _tBARN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTableBucketRequest = struct(n0, _DTBR, 0, [_tBARN], [[0, 1]]);
export var DeleteTableBucket = op(
  n0,
  _DTB,
  {
    [_h]: ["DELETE", "/buckets/{tableBucketARN}", 204],
  },
  () => DeleteTableBucketRequest,
  () => Unit
);
