// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _B, _DBOC, _DBOCR, _EBO, _h, _hH, _xaebo, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBucketOwnershipControlsRequest = struct(
  n0,
  _DBOCR,
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
export var DeleteBucketOwnershipControls = op(
  n0,
  _DBOC,
  {
    [_h]: ["DELETE", "/?ownershipControls", 204],
  },
  () => DeleteBucketOwnershipControlsRequest,
  () => Unit
);
