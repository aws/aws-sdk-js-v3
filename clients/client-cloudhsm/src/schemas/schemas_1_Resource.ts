// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ATTR,
  _ATTRR,
  _ATTRRd,
  _K,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _RA,
  _RTFR,
  _RTFRR,
  _RTFRRe,
  _S,
  _T,
  _TKL,
  _TL,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AddTagsToResourceRequest = struct(n0, _ATTRR, 0, [_RA, _TL], [0, () => TagList]);
export var AddTagsToResourceResponse = struct(n0, _ATTRRd, 0, [_S], [0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RA], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_TL], [() => TagList]);
export var RemoveTagsFromResourceRequest = struct(n0, _RTFRR, 0, [_RA, _TKL], [0, 64 | 0]);
export var RemoveTagsFromResourceResponse = struct(n0, _RTFRRe, 0, [_S], [0]);
export var Tag = struct(n0, _T, 0, [_K, _V], [0, 0]);
export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var AddTagsToResource = op(
  n0,
  _ATTR,
  0,
  () => AddTagsToResourceRequest,
  () => AddTagsToResourceResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var RemoveTagsFromResource = op(
  n0,
  _RTFR,
  0,
  () => RemoveTagsFromResourceRequest,
  () => RemoveTagsFromResourceResponse
);
