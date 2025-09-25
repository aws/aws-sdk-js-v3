// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _LTFR, _LTFRR, _LTFRRi, _rAes, _t, n0, Tags } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rAes], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_t], [[() => Tags, 0]]);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
