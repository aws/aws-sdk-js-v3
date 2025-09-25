// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CT, _CTR, _ht, _jN, _LT, _LTR, _LTRi, _RA, _T, _t, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateTagsRequest = struct(
  n0,
  _CTR,
  0,
  [_RA, _T],
  [
    [0, 1],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var ListTagsRequest = struct(n0, _LTR, 0, [_RA], [[0, 1]]);
export var ListTagsResponse = struct(
  n0,
  _LTRi,
  0,
  [_T],
  [
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var __mapOf__string = 128 | 0;

export var CreateTags = op(
  n0,
  _CT,
  {
    [_ht]: ["POST", "/v1/tags/{ResourceArn}", 204],
  },
  () => CreateTagsRequest,
  () => Unit
);
export var ListTags = op(
  n0,
  _LT,
  {
    [_ht]: ["GET", "/v1/tags/{ResourceArn}", 200],
  },
  () => ListTagsRequest,
  () => ListTagsResponse
);
