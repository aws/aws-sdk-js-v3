// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DTBE, _DTBER, _h, _tBARN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTableBucketEncryptionRequest = struct(n0, _DTBER, 0, [_tBARN], [[0, 1]]);
export var DeleteTableBucketEncryption = op(
  n0,
  _DTBE,
  {
    [_h]: ["DELETE", "/buckets/{tableBucketARN}/encryption", 204],
  },
  () => DeleteTableBucketEncryptionRequest,
  () => Unit
);
