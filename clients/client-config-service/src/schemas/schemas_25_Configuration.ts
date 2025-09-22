// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _L, _LTFR, _LTFRR, _LTFRRi, _NT, _RA, _Ta, _TKa, _TL, _TR, _TRR, _UR, _URR, n0, Unit } from "./schemas_0";
import { Tag } from "./schemas_18_Put";

/* eslint no-var: 0 */

export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RA, _L, _NT], [0, 1, 0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_Ta, _NT], [() => TagList, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RA, _Ta], [0, () => TagList]);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RA, _TKa], [0, 64 | 0]);
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
  () => Unit
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => Unit
);
