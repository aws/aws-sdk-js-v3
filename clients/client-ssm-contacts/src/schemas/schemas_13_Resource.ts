// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _K, _LTFR, _LTFRR, _LTFRRi, _RARN, _Ta, _Tag, _TK, _TL, _UR, _URR, _URRn, _V, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RARN], [0]);
export var ListTagsForResourceResult = struct(n0, _LTFRRi, 0, [_Ta], [() => TagsList]);
export var Tag = struct(n0, _Tag, 0, [_K, _V], [0, 0]);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RARN, _TK], [0, 64 | 0]);
export var UntagResourceResult = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

export var TagsList = list(n0, _TL, 0, () => Tag);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResult
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResult
);
