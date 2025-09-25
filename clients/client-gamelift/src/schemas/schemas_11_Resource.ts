// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _LTFR, _LTFRR, _LTFRRi, _RARN, _Ta, _TK, _TR, _TRR, _TRRa, _UR, _URR, _URRn, n0, TagList } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RARN], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_Ta], [() => TagList]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RARN, _Ta], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RARN, _TK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

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
