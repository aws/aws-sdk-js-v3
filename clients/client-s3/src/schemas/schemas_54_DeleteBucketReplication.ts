// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _B, _DBRe, _DBRR, _EBO, _h, _hH, _xaebo, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBucketReplicationRequest = struct(
  n0,
  _DBRR,
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
export var DeleteBucketReplication = op(
  n0,
  _DBRe,
  {
    [_h]: ["DELETE", "/?replication", 204],
  },
  () => DeleteBucketReplicationRequest,
  () => Unit
);
