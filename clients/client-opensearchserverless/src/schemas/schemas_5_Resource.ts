// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _k, _LTFR, _LTFRR, _LTFRRi, _rA, _T, _Ta, _ta, _tK, _UR, _URR, _URRn, _v, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rA], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_ta], [() => Tags]);
export var Tag = struct(n0, _T, 0, [_k, _v], [0, 0]);
export var UntagResourceRequest = struct(n0, _URR, 0, [_rA, _tK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeys = 64 | 0;

export var Tags = list(n0, _Ta, 0, () => Tag);
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
