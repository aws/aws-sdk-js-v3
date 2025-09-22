// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { LimitExceededException as __LimitExceededException } from "../models/index";
import {
  _cl,
  _er,
  _h,
  _hE,
  _hQ,
  _k,
  _LEE,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _me,
  _rAe,
  _T,
  _ta,
  _tK,
  _TL,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  _va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_er]: _cl,
    [_hE]: 410,
  },
  [_me],
  [0],

  __LimitExceededException
);
export var ListTagsForResourceRequest = struct(
  n0,
  _LTFRR,
  0,
  [_rAe],
  [
    [
      0,
      {
        [_hQ]: _rAe,
      },
    ],
  ]
);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_ta], [() => TagList]);
export var Tag = struct(n0, _T, 0, [_k, _va], [0, 0]);
export var TagResourceRequest = struct(
  n0,
  _TRR,
  0,
  [_rAe, _ta],
  [
    [
      0,
      {
        [_hQ]: _rAe,
      },
    ],
    () => TagList,
  ]
);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_rAe, _tK],
  [
    [
      0,
      {
        [_hQ]: _rAe,
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

export var TagList = list(n0, _TL, 0, () => Tag);
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
  _UR,
  {
    [_h]: ["DELETE", "/tags", 204],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
