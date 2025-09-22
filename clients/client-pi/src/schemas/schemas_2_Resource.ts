// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ke,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _RARN,
  _ST,
  _T,
  _Ta,
  _TK,
  _TL,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_ST, _RARN], [0, 0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_T], [() => TagList]);
export var Tag = struct(n0, _Ta, 0, [_Ke, _V], [0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_ST, _RARN, _T], [0, 0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(n0, _URR, 0, [_ST, _RARN, _TK], [0, 0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
