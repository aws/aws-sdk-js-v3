// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DTe,
  _DTTe,
  _F,
  _Fi,
  _K,
  _MR,
  _Na,
  _NT,
  _PAL,
  _RIe,
  _RT,
  _T,
  _Ta,
  _TD,
  _TDL,
  _TT,
  _V,
  _Va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeTagsType = struct(n0, _DTTe, 0, [_F, _NT, _MR], [() => Filters, 0, 1]);
export var Filter = struct(n0, _Fi, 0, [_Na, _V], [0, 64 | 0]);
export var Tag = struct(n0, _Ta, 0, [_RIe, _RT, _K, _Va, _PAL], [0, 0, 0, 0, 2]);
export var TagDescription = struct(n0, _TD, 0, [_RIe, _RT, _K, _Va, _PAL], [0, 0, 0, 0, 2]);
export var TagsType = struct(n0, _TT, 0, [_T, _NT], [() => TagDescriptionList, 0]);
export var Filters = list(n0, _F, 0, () => Filter);
export var TagDescriptionList = list(n0, _TDL, 0, () => TagDescription);
export var Tags = list(n0, _T, 0, () => Tag);
export var Values = 64 | 0;

export var DescribeTags = op(
  n0,
  _DTe,
  0,
  () => DescribeTagsType,
  () => TagsType
);
