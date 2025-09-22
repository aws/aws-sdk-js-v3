// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _ke, _LTFR, _LTFRR, _LTFRRi, _mR, _nT, _rA, _T, _t, _TL, _v, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rA, _nT, _mR], [0, 0, 1]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_nT, _t], [0, () => TagList]);
export var Tag = struct(n0, _T, 0, [_ke, _v], [0, 0]);
export var TagList = list(n0, _TL, 0, () => Tag);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
