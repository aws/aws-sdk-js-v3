// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _LTFR, _LTFRR, _LTFRRi, _rARN, _ta, n0, TagList } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rARN], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_ta], [() => TagList]);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_ht]: ["POST", "/listTagsForResource", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
