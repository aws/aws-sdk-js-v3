// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _htt, _LTFR, _LTFRR, _LTFRRi, _rA, _ta, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rA], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_ta], [128 | 0]);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_htt]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
