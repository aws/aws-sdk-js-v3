// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _a,
  _h,
  _hQ,
  _K,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _RARN,
  _Tag,
  _Tag_,
  _TK,
  _TKa,
  _TKL,
  _TL,
  _TV,
  _UR,
  _URR,
  _V,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var TagKey = sim(n0, _TK, 0, 8);
export var TagValue = sim(n0, _TV, 0, 8);
export var ListTagsForResourceRequest = struct(
  n0,
  _LTFRR,
  0,
  [_RARN],
  [
    [
      0,
      {
        [_hQ]: _a,
      },
    ],
  ]
);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_Tag], [[() => TagList, 0]]);
export var Tag = struct(
  n0,
  _Tag_,
  0,
  [_K, _V],
  [
    [() => TagKey, 0],
    [() => TagValue, 0],
  ]
);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RARN, _TKa], [0, [() => TagKeyList, 0]]);
export var TagKeyList = list(n0, _TKL, 0, [() => TagKey, 0]);
export var TagList = list(n0, _TL, 0, [() => Tag, 0]);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["POST", "/tags?operation=untag-resource", 204],
  },
  () => UntagResourceRequest,
  () => Unit
);
