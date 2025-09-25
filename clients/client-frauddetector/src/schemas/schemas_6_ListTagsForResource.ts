// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _LTFR, _LTFRR, _LTFRRi, _mR, _nT, _rARN, _ta, n0, tagList } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rARN, _nT, _mR], [0, 0, 1]);
export var ListTagsForResourceResult = struct(n0, _LTFRRi, 0, [_ta, _nT], [() => tagList, 0]);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResult
);
