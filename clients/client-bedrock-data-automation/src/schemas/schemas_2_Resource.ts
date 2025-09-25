// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _h,
  _k,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _rARN,
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

export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rARN], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_ta], [() => TagList]);
export var Tag = struct(n0, _T, 0, [_k, _va], [0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rARN, _ta], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(n0, _URR, 0, [_rARN, _tK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["POST", "/listTagsForResource", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tagResource", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["POST", "/untagResource", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
