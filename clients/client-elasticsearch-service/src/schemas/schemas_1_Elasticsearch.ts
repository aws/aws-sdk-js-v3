// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _a, _ARN, _h, _hQ, _K, _LT, _LTR, _LTRi, _Ta, _TL, _V, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsRequest = struct(
  n0,
  _LTR,
  0,
  [_ARN],
  [
    [
      0,
      {
        [_hQ]: _a,
      },
    ],
  ]
);
export var ListTagsResponse = struct(n0, _LTRi, 0, [_TL], [() => TagList]);
export var Tag = struct(n0, _Ta, 0, [_K, _V], [0, 0]);
export var TagList = list(n0, _TL, 0, () => Tag);
export var ListTags = op(
  n0,
  _LT,
  {
    [_h]: ["GET", "/2015-01-01/tags", 200],
  },
  () => ListTagsRequest,
  () => ListTagsResponse
);
