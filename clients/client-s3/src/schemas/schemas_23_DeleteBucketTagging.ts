// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _B, _DBT, _DBTR, _EBO, _h, _hH, _xaebo, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBucketTaggingRequest = struct(
  n0,
  _DBTR,
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
export var DeleteBucketTagging = op(
  n0,
  _DBT,
  {
    [_h]: ["DELETE", "/?tagging", 204],
  },
  () => DeleteBucketTaggingRequest,
  () => Unit
);
