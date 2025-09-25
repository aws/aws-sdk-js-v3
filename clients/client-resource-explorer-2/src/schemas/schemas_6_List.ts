// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AI,
  _AIL,
  _h,
  _I,
  _IL,
  _In,
  _LI,
  _LIFM,
  _LIFMI,
  _LIFMO,
  _LII,
  _LIO,
  _LMV,
  _LMVI,
  _LMVO,
  _LSRT,
  _LSRTI,
  _LSRTO,
  _LV,
  _LVI,
  _LVO,
  _MI,
  _MIL,
  _MR,
  _MVa,
  _NT,
  _R,
  _Re,
  _RTe,
  _RTes,
  _RTL,
  _Se,
  _SP,
  _SRT,
  _Ty,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Index = struct(n0, _I, 0, [_R, _A, _Ty], [0, 0, 0]);
export var ListIndexesForMembersInput = struct(n0, _LIFMI, 0, [_AIL, _MR, _NT], [64 | 0, 1, 0]);
export var ListIndexesForMembersOutput = struct(n0, _LIFMO, 0, [_In, _NT], [() => MemberIndexList, 0]);
export var ListIndexesInput = struct(n0, _LII, 0, [_Ty, _Re, _MR, _NT], [0, 64 | 0, 1, 0]);
export var ListIndexesOutput = struct(n0, _LIO, 0, [_In, _NT], [() => IndexList, 0]);
export var ListManagedViewsInput = struct(n0, _LMVI, 0, [_MR, _NT, _SP], [1, 0, 0]);
export var ListManagedViewsOutput = struct(n0, _LMVO, 0, [_NT, _MVa], [0, 64 | 0]);
export var ListSupportedResourceTypesInput = struct(n0, _LSRTI, 0, [_NT, _MR], [0, 1]);
export var ListSupportedResourceTypesOutput = struct(n0, _LSRTO, 0, [_RTe, _NT], [() => ResourceTypeList, 0]);
export var ListViewsInput = struct(n0, _LVI, 0, [_NT, _MR], [0, 1]);
export var ListViewsOutput = struct(n0, _LVO, 0, [_V, _NT], [64 | 0, 0]);
export var MemberIndex = struct(n0, _MI, 0, [_AI, _R, _A, _Ty], [0, 0, 0, 0]);
export var SupportedResourceType = struct(n0, _SRT, 0, [_Se, _RTes], [0, 0]);
export var AccountIdList = 64 | 0;

export var IndexList = list(n0, _IL, 0, () => Index);
export var ManagedViewArnList = 64 | 0;

export var MemberIndexList = list(n0, _MIL, 0, () => MemberIndex);
export var ResourceTypeList = list(n0, _RTL, 0, () => SupportedResourceType);
export var ListIndexes = op(
  n0,
  _LI,
  {
    [_h]: ["POST", "/ListIndexes", 200],
  },
  () => ListIndexesInput,
  () => ListIndexesOutput
);
export var ListIndexesForMembers = op(
  n0,
  _LIFM,
  {
    [_h]: ["POST", "/ListIndexesForMembers", 200],
  },
  () => ListIndexesForMembersInput,
  () => ListIndexesForMembersOutput
);
export var ListManagedViews = op(
  n0,
  _LMV,
  {
    [_h]: ["POST", "/ListManagedViews", 200],
  },
  () => ListManagedViewsInput,
  () => ListManagedViewsOutput
);
export var ListSupportedResourceTypes = op(
  n0,
  _LSRT,
  {
    [_h]: ["POST", "/ListSupportedResourceTypes", 200],
  },
  () => ListSupportedResourceTypesInput,
  () => ListSupportedResourceTypesOutput
);
export var ListViews = op(
  n0,
  _LV,
  {
    [_h]: ["POST", "/ListViews", 200],
  },
  () => ListViewsInput,
  () => ListViewsOutput
);
