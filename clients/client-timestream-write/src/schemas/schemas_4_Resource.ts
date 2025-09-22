// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _K, _LTFR, _LTFRR, _LTFRRi, _RARN, _T, _Tag, _TLa, _V, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RARN], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_T], [() => TagList]);
export var Tag = struct(n0, _Tag, 0, [_K, _V], [0, 0]);
export var TagList = list(n0, _TLa, 0, () => Tag);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
