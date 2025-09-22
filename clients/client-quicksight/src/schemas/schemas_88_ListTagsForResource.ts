// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _LTFR, _LTFRR, _LTFRRi, _RAeso, _RI, _St, _Ta, n0, TagList } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RAeso], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_Ta, _RI, _St], [() => TagList, 0, [1, 32]]);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/resources/{ResourceArn}/tags", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
