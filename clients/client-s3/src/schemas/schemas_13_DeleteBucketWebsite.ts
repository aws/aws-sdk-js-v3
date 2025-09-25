// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _B, _DBW, _DBWR, _EBO, _h, _hH, _xaebo, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBucketWebsiteRequest = struct(
  n0,
  _DBWR,
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
export var DeleteBucketWebsite = op(
  n0,
  _DBW,
  {
    [_h]: ["DELETE", "/?website", 204],
  },
  () => DeleteBucketWebsiteRequest,
  () => Unit
);
