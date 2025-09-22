// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CRG,
  _CRGR,
  _CRGRr,
  _k,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _rAes,
  _rGA,
  _RGT,
  _rGT,
  _RGTe,
  _STFR,
  _STFRR,
  _T,
  _t,
  _TL,
  _v,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateResourceGroupRequest = struct(n0, _CRGR, 0, [_rGT], [() => ResourceGroupTags]);
export var CreateResourceGroupResponse = struct(n0, _CRGRr, 0, [_rGA], [0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rAes], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_t], [() => TagList]);
export var ResourceGroupTag = struct(n0, _RGT, 0, [_k, _v], [0, 0]);
export var SetTagsForResourceRequest = struct(n0, _STFRR, 0, [_rAes, _t], [0, () => TagList]);
export var Tag = struct(n0, _T, 0, [_k, _v], [0, 0]);
export var ResourceGroupTags = list(n0, _RGTe, 0, () => ResourceGroupTag);
export var TagList = list(n0, _TL, 0, () => Tag);
export var CreateResourceGroup = op(
  n0,
  _CRG,
  0,
  () => CreateResourceGroupRequest,
  () => CreateResourceGroupResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var SetTagsForResource = op(
  n0,
  _STFR,
  0,
  () => SetTagsForResourceRequest,
  () => Unit
);
