// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ag,
  _Agg,
  _CPG,
  _CPGR,
  _CPGRr,
  _DPG,
  _DPGe,
  _DPGR,
  _DPGRe,
  _DPGRes,
  _DPGResc,
  _IF,
  _IPGF,
  _LPG,
  _LPGR,
  _LPGRi,
  _LRIPG,
  _LRIPGR,
  _LRIPGRi,
  _Me,
  _MR,
  _NT,
  _P,
  _Pa,
  _PG,
  _PGA,
  _PGI,
  _PGIr,
  _PGr,
  _RAes,
  _RT,
  _RTe,
  _Ta,
  _UPG,
  _UPGR,
  _UPGRp,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_19_Resource";

/* eslint no-var: 0 */

export var CreateProtectionGroupRequest = struct(
  n0,
  _CPGR,
  0,
  [_PGI, _Ag, _P, _RT, _Me, _Ta],
  [0, 0, 0, 0, 64 | 0, () => TagList]
);
export var CreateProtectionGroupResponse = struct(n0, _CPGRr, 0, [], []);
export var DeleteProtectionGroupRequest = struct(n0, _DPGR, 0, [_PGI], [0]);
export var DeleteProtectionGroupResponse = struct(n0, _DPGRe, 0, [], []);
export var DescribeProtectionGroupRequest = struct(n0, _DPGRes, 0, [_PGI], [0]);
export var DescribeProtectionGroupResponse = struct(n0, _DPGResc, 0, [_PG], [() => ProtectionGroup]);
export var InclusionProtectionGroupFilters = struct(
  n0,
  _IPGF,
  0,
  [_PGIr, _Pa, _RTe, _Agg],
  [64 | 0, 64 | 0, 64 | 0, 64 | 0]
);
export var ListProtectionGroupsRequest = struct(
  n0,
  _LPGR,
  0,
  [_NT, _MR, _IF],
  [0, 1, () => InclusionProtectionGroupFilters]
);
export var ListProtectionGroupsResponse = struct(n0, _LPGRi, 0, [_PGr, _NT], [() => ProtectionGroups, 0]);
export var ListResourcesInProtectionGroupRequest = struct(n0, _LRIPGR, 0, [_PGI, _NT, _MR], [0, 0, 1]);
export var ListResourcesInProtectionGroupResponse = struct(n0, _LRIPGRi, 0, [_RAes, _NT], [64 | 0, 0]);
export var ProtectionGroup = struct(n0, _PG, 0, [_PGI, _Ag, _P, _RT, _Me, _PGA], [0, 0, 0, 0, 64 | 0, 0]);
export var UpdateProtectionGroupRequest = struct(n0, _UPGR, 0, [_PGI, _Ag, _P, _RT, _Me], [0, 0, 0, 0, 64 | 0]);
export var UpdateProtectionGroupResponse = struct(n0, _UPGRp, 0, [], []);
export var ProtectionGroupAggregationFilters = 64 | 0;

export var ProtectionGroupIdFilters = 64 | 0;

export var ProtectionGroupMembers = 64 | 0;

export var ProtectionGroupPatternFilters = 64 | 0;

export var ProtectionGroups = list(n0, _PGr, 0, () => ProtectionGroup);
export var ResourceArnList = 64 | 0;

export var CreateProtectionGroup = op(
  n0,
  _CPG,
  0,
  () => CreateProtectionGroupRequest,
  () => CreateProtectionGroupResponse
);
export var DeleteProtectionGroup = op(
  n0,
  _DPG,
  0,
  () => DeleteProtectionGroupRequest,
  () => DeleteProtectionGroupResponse
);
export var DescribeProtectionGroup = op(
  n0,
  _DPGe,
  0,
  () => DescribeProtectionGroupRequest,
  () => DescribeProtectionGroupResponse
);
export var ListProtectionGroups = op(
  n0,
  _LPG,
  0,
  () => ListProtectionGroupsRequest,
  () => ListProtectionGroupsResponse
);
export var ListResourcesInProtectionGroup = op(
  n0,
  _LRIPG,
  0,
  () => ListResourcesInProtectionGroupRequest,
  () => ListResourcesInProtectionGroupResponse
);
export var UpdateProtectionGroup = op(
  n0,
  _UPG,
  0,
  () => UpdateProtectionGroupRequest,
  () => UpdateProtectionGroupResponse
);
