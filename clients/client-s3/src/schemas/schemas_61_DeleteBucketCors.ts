// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _B, _DBC, _DBCR, _EBO, _h, _hH, _xaebo, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBucketCorsRequest = struct(
  n0,
  _DBCR,
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
export var DeleteBucketCors = op(
  n0,
  _DBC,
  {
    [_h]: ["DELETE", "/?cors", 204],
  },
  () => DeleteBucketCorsRequest,
  () => Unit
);
