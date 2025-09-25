// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _LTFR, _LTFRM, _LTFRR, _RA, _RAL, _TLag, n0, TagList } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceMessage = struct(n0, _LTFRM, 0, [_RA, _RAL], [0, 64 | 0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRR, 0, [_TLag], [[() => TagList, 0]]);
export var ArnList = 64 | 0;

export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceMessage,
  () => ListTagsForResourceResponse
);
