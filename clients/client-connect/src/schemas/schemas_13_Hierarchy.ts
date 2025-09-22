// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _ACn,
  _AF,
  _ATC,
  _CUHG,
  _CUHGR,
  _CUHGRr,
  _DUHGe,
  _DUHGRe,
  _DUHGRes,
  _h,
  _HGA,
  _HGI,
  _HGi,
  _HGS,
  _HGSL,
  _HP,
  _hQ,
  _I,
  _II,
  _LF,
  _LFe,
  _LIe,
  _LMR,
  _LMT,
  _LO,
  _LT,
  _LTe,
  _LUHG,
  _LUHGR,
  _LUHGRi,
  _mR,
  _MRa,
  _N,
  _NT,
  _nT,
  _OC,
  _PGI,
  _SC,
  _SCe,
  _SF,
  _SUHG,
  _SUHGR,
  _SUHGRe,
  _Ta,
  _UHG,
  _UHGL,
  _UHGSC,
  _UHGSCL,
  _UHGSF,
  _UHGSL,
  _UUHGN,
  _UUHGNR,
  n0,
  StringCondition,
  Unit,
} from "./schemas_0";
import { ControlPlaneAttributeFilter } from "./schemas_87_Search";

/* eslint no-var: 0 */

export var CreateUserHierarchyGroupRequest = struct(n0, _CUHGR, 0, [_N, _PGI, _II, _Ta], [0, 0, [0, 1], 128 | 0]);
export var CreateUserHierarchyGroupResponse = struct(n0, _CUHGRr, 0, [_HGI, _HGA], [0, 0]);
export var DescribeUserHierarchyGroupRequest = struct(
  n0,
  _DUHGRe,
  0,
  [_HGI, _II],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeUserHierarchyGroupResponse = struct(n0, _DUHGRes, 0, [_HGi], [() => HierarchyGroup]);
export var HierarchyGroup = struct(
  n0,
  _HGi,
  0,
  [_I, _A, _N, _LIe, _HP, _Ta, _LMT, _LMR],
  [0, 0, 0, 0, () => HierarchyPath, 128 | 0, 4, 0]
);
export var HierarchyGroupSummary = struct(n0, _HGS, 0, [_I, _A, _N, _LMT, _LMR], [0, 0, 0, 4, 0]);
export var HierarchyPath = struct(
  n0,
  _HP,
  0,
  [_LO, _LT, _LTe, _LF, _LFe],
  [
    () => HierarchyGroupSummary,
    () => HierarchyGroupSummary,
    () => HierarchyGroupSummary,
    () => HierarchyGroupSummary,
    () => HierarchyGroupSummary,
  ]
);
export var ListUserHierarchyGroupsRequest = struct(
  n0,
  _LUHGR,
  0,
  [_II, _NT, _MRa],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListUserHierarchyGroupsResponse = struct(
  n0,
  _LUHGRi,
  0,
  [_UHGSL, _NT],
  [() => HierarchyGroupSummaryList, 0]
);
export var SearchUserHierarchyGroupsRequest = struct(
  n0,
  _SUHGR,
  0,
  [_II, _NT, _MRa, _SF, _SCe],
  [0, 0, 1, () => UserHierarchyGroupSearchFilter, () => UserHierarchyGroupSearchCriteria]
);
export var SearchUserHierarchyGroupsResponse = struct(
  n0,
  _SUHGRe,
  0,
  [_UHG, _NT, _ATC],
  [() => UserHierarchyGroupList, 0, 1]
);
export var UpdateUserHierarchyGroupNameRequest = struct(n0, _UUHGNR, 0, [_N, _HGI, _II], [0, [0, 1], [0, 1]]);
export var UserHierarchyGroupSearchCriteria = struct(
  n0,
  _UHGSC,
  0,
  [_OC, _ACn, _SC],
  [() => UserHierarchyGroupSearchConditionList, () => UserHierarchyGroupSearchConditionList, () => StringCondition]
);
export var UserHierarchyGroupSearchFilter = struct(n0, _UHGSF, 0, [_AF], [() => ControlPlaneAttributeFilter]);
export var HierarchyGroupSummaryList = list(n0, _HGSL, 0, () => HierarchyGroupSummary);
export var UserHierarchyGroupList = list(n0, _UHGL, 0, () => HierarchyGroup);
export var UserHierarchyGroupSearchConditionList = list(n0, _UHGSCL, 0, () => UserHierarchyGroupSearchCriteria);
export var CreateUserHierarchyGroup = op(
  n0,
  _CUHG,
  {
    [_h]: ["PUT", "/user-hierarchy-groups/{InstanceId}", 200],
  },
  () => CreateUserHierarchyGroupRequest,
  () => CreateUserHierarchyGroupResponse
);
export var DescribeUserHierarchyGroup = op(
  n0,
  _DUHGe,
  {
    [_h]: ["GET", "/user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}", 200],
  },
  () => DescribeUserHierarchyGroupRequest,
  () => DescribeUserHierarchyGroupResponse
);
export var ListUserHierarchyGroups = op(
  n0,
  _LUHG,
  {
    [_h]: ["GET", "/user-hierarchy-groups-summary/{InstanceId}", 200],
  },
  () => ListUserHierarchyGroupsRequest,
  () => ListUserHierarchyGroupsResponse
);
export var SearchUserHierarchyGroups = op(
  n0,
  _SUHG,
  {
    [_h]: ["POST", "/search-user-hierarchy-groups", 200],
  },
  () => SearchUserHierarchyGroupsRequest,
  () => SearchUserHierarchyGroupsResponse
);
export var UpdateUserHierarchyGroupName = op(
  n0,
  _UUHGN,
  {
    [_h]: ["POST", "/user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}/name", 200],
  },
  () => UpdateUserHierarchyGroupNameRequest,
  () => Unit
);
