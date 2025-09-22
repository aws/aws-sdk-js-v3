// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DTe, _DTR, _hQ, _ht, _RAe, _TK, _tK, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTagsRequest = struct(
  n0,
  _DTR,
  0,
  [_RAe, _TK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var DeleteTags = op(
  n0,
  _DTe,
  {
    [_ht]: ["DELETE", "/prod/tags/{ResourceArn}", 204],
  },
  () => DeleteTagsRequest,
  () => Unit
);
