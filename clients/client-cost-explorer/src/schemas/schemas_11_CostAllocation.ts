// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CAT,
  _CATL,
  _CATo,
  _LCAT,
  _LCATR,
  _LCATRi,
  _LUD,
  _LUDa,
  _MR,
  _NTe,
  _St,
  _TK,
  _TKa,
  _Ty,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CostAllocationTag = struct(n0, _CAT, 0, [_TK, _Ty, _St, _LUD, _LUDa], [0, 0, 0, 0, 0]);
export var ListCostAllocationTagsRequest = struct(n0, _LCATR, 0, [_St, _TKa, _Ty, _NTe, _MR], [0, 64 | 0, 0, 0, 1]);
export var ListCostAllocationTagsResponse = struct(n0, _LCATRi, 0, [_CATo, _NTe], [() => CostAllocationTagList, 0]);
export var CostAllocationTagKeyList = 64 | 0;

export var CostAllocationTagList = list(n0, _CATL, 0, () => CostAllocationTag);
export var ListCostAllocationTags = op(
  n0,
  _LCAT,
  0,
  () => ListCostAllocationTagsRequest,
  () => ListCostAllocationTagsResponse
);
