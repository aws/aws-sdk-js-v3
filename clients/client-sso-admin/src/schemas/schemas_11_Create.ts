// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _IA, _K, _LTFR, _LTFRR, _LTFRRi, _NT, _RA, _T, _Ta, _TK, _TL, _UR, _URR, _URRn, _V, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_IA, _RA, _NT], [0, 0, 0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_T, _NT], [() => TagList, 0]);
export var Tag = struct(n0, _Ta, 0, [_K, _V], [0, 0]);
export var UntagResourceRequest = struct(n0, _URR, 0, [_IA, _RA, _TK], [0, 0, 64 | 0]);
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
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
