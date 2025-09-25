// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _hQ, _LTFR, _LTFRR, _LTFRRi, _RA, _Ta, n0, TagList } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceRequest = struct(
  n0,
  _LTFRR,
  0,
  [_RA],
  [
    [
      0,
      {
        [_hQ]: _RA,
      },
    ],
  ]
);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_Ta], [() => TagList]);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/v2/email/tags", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
