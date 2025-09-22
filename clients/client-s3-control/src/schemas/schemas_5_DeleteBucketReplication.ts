// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _B, _DBRe, _DBRR, _h, _hH, _hL, _xaai, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBucketReplicationRequest = struct(
  n0,
  _DBRR,
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
export var DeleteBucketReplication = op(
  n0,
  _DBRe,
  {
    [_h]: ["DELETE", "/v20180820/bucket/{Bucket}/replication", 200],
  },
  () => DeleteBucketReplicationRequest,
  () => Unit
);
