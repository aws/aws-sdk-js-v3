// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _A, _ht, _jN, _TK, _tK, _UR, _URR, _URRn, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_A, _TK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_jN]: _tK,
      },
    ],
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var __listOf__string = 64 | 0;

export var UntagResource = op(
  n0,
  _UR,
  {
    [_ht]: ["PUT", "/2017-08-29/tags/{Arn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
