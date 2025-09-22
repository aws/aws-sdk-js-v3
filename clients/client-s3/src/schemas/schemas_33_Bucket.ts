// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _B, _EBO, _GBL, _GBLO, _GBLR, _h, _hH, _LC, _xaebo, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetBucketLocationOutput = struct(
  n0,
  _GBLO,
  {
    [_xN]: _LC,
  },
  [_LC],
  [0]
);
export var GetBucketLocationRequest = struct(
  n0,
  _GBLR,
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
export var GetBucketLocation = op(
  n0,
  _GBL,
  {
    [_h]: ["GET", "/?location", 200],
  },
  () => GetBucketLocationRequest,
  () => GetBucketLocationOutput
);
