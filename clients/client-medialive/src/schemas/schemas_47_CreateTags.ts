// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CTR, _CTr, _ht, _jN, _RAe, _Ta, _ta, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateTagsRequest = struct(
  n0,
  _CTR,
  0,
  [_RAe, _Ta],
  [
    [0, 1],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var CreateTags = op(
  n0,
  _CTr,
  {
    [_ht]: ["POST", "/prod/tags/{ResourceArn}", 204],
  },
  () => CreateTagsRequest,
  () => Unit
);
