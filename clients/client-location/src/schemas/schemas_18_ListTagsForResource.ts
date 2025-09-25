// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _en, _h, _LTFR, _LTFRR, _LTFRRi, _RA, _Ta, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RA], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_Ta], [128 | 0]);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{ResourceArn}", 200],
    [_en]: ["cp.metadata."],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
