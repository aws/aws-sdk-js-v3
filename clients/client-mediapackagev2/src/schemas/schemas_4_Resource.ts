// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _h,
  _hQ,
  _jN,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _RAe,
  _T,
  _t,
  _TK,
  _tK,
  _TR,
  _TRR,
  _UR,
  _URR,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RAe], [[0, 1]]);
export var ListTagsForResourceResponse = struct(
  n0,
  _LTFRRi,
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
export var TagResourceRequest = struct(
  n0,
  _TRR,
  0,
  [_RAe, _T],
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
export var UntagResourceRequest = struct(
  n0,
  _URR,
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
export var TagKeyList = 64 | 0;

export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{ResourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{ResourceArn}", 204],
  },
  () => TagResourceRequest,
  () => Unit
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{ResourceArn}", 204],
  },
  () => UntagResourceRequest,
  () => Unit
);
