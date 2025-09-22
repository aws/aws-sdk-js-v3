// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { TooManyTagsException as __TooManyTagsException } from "../models/index";
import {
  _c,
  _e,
  _h,
  _hE,
  _hQ,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _M,
  _rA,
  _RAes,
  _RN,
  _Ta,
  _TK,
  _tK,
  _TMTE,
  _TR,
  _TRR,
  _TRRa,
  _URn,
  _URR,
  _URRn,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceRequest = struct(
  n0,
  _LTFRR,
  0,
  [_RAes],
  [
    [
      0,
      {
        [_hQ]: _rA,
      },
    ],
  ]
);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_Ta], [() => TagList]);
export var TagResourceRequest = struct(
  n0,
  _TRR,
  0,
  [_RAes, _Ta],
  [
    [
      0,
      {
        [_hQ]: _rA,
      },
    ],
    () => TagList,
  ]
);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TooManyTagsException = error(
  n0,
  _TMTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _RN],
  [0, 0],

  __TooManyTagsException
);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_RAes, _TK],
  [
    [
      0,
      {
        [_hQ]: _rA,
      },
    ],
    [
      64 | 0,
      {
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
    [_h]: ["GET", "/tags", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags", 204],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _URn,
  {
    [_h]: ["DELETE", "/tags", 204],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
