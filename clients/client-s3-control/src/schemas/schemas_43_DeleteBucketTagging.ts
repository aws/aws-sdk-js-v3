// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _B, _DBT, _DBTR, _h, _hH, _hL, _xaai, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBucketTaggingRequest = struct(
  n0,
  _DBTR,
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
export var DeleteBucketTagging = op(
  n0,
  _DBT,
  {
    [_h]: ["DELETE", "/v20180820/bucket/{Bucket}/tagging", 204],
  },
  () => DeleteBucketTaggingRequest,
  () => Unit
);
