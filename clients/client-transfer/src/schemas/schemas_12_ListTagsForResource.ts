// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _Ar, _LTFR, _LTFRR, _LTFRRi, _MRa, _NT, _T, n0, Tags } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_Ar, _MRa, _NT], [0, 1, 0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_Ar, _NT, _T], [0, 0, () => Tags]);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
