// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _hQ, _LTFR, _LTFRR, _LTFRRi, _nT, _rAes, _tag, n0, TagList } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceRequest = struct(
  n0,
  _LTFRR,
  0,
  [_rAes, _nT],
  [
    [
      0,
      {
        [_hQ]: _rAes,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_tag, _nT], [() => TagList, 0]);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
