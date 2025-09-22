// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _hQ, _LTi, _LTR, _LTRi, _Re, _Ta, _TK, _tK, _TR, _TRR, _UR, _URR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsRequest = struct(n0, _LTR, 0, [_Re], [[0, 1]]);
export var ListTagsResponse = struct(n0, _LTRi, 0, [_Ta], [128 | 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_Re, _Ta], [[0, 1], 128 | 0]);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_Re, _TK],
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
export var TagKeyList = 64 | 0;

export var Tags = 128 | 0;

export var ListTags = op(
  n0,
  _LTi,
  {
    [_h]: ["GET", "/2017-03-31/tags/{Resource}", 200],
  },
  () => ListTagsRequest,
  () => ListTagsResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/2017-03-31/tags/{Resource}", 204],
  },
  () => TagResourceRequest,
  () => Unit
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/2017-03-31/tags/{Resource}", 204],
  },
  () => UntagResourceRequest,
  () => Unit
);
