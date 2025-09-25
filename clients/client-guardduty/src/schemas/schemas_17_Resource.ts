// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _hL,
  _hQ,
  _ht,
  _jN,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _RA,
  _rA,
  _Ta,
  _ta,
  _TK,
  _tK,
  _TRa,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceRequest = struct(
  n0,
  _LTFRR,
  0,
  [_RA],
  [
    [
      0,
      {
        [_jN]: _rA,
        [_hL]: 1,
      },
    ],
  ]
);
export var ListTagsForResourceResponse = struct(
  n0,
  _LTFRRi,
  0,
  [_Ta],
  [
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var TagResourceRequest = struct(
  n0,
  _TRR,
  0,
  [_RA, _Ta],
  [
    [
      0,
      {
        [_jN]: _rA,
        [_hL]: 1,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_RA, _TK],
  [
    [
      0,
      {
        [_jN]: _rA,
        [_hL]: 1,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _tK,
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_ht]: ["GET", "/tags/{ResourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TRa,
  {
    [_ht]: ["POST", "/tags/{ResourceArn}", 204],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_ht]: ["DELETE", "/tags/{ResourceArn}", 204],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
