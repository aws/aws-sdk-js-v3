// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AIG,
  _AIGR,
  _AIGRs,
  _AIR,
  _AIRR,
  _AIRRu,
  _CIG,
  _CIGR,
  _CIGRr,
  _DI,
  _DIG,
  _DIGe,
  _DIGi,
  _DIGR,
  _DIGRe,
  _DIGRes,
  _DIGResc,
  _DIGRi,
  _DIGRis,
  _GD,
  _gD,
  _GI,
  _gI,
  _GIr,
  _GN,
  _gN,
  _iR,
  _IRI,
  _IRL,
  _MR,
  _NT,
  _R,
  _rD,
  _RIR,
  _RIRR,
  _RIRRe,
  _T,
  _UR,
  _uR,
  _UROIG,
  _UROIGR,
  _UROIGRp,
  _WIG,
  _WIGL,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateIpGroupsRequest = struct(n0, _AIGR, 0, [_DI, _GI], [0, 64 | 0]);
export var AssociateIpGroupsResult = struct(n0, _AIGRs, 0, [], []);
export var AuthorizeIpRulesRequest = struct(n0, _AIRR, 0, [_GIr, _UR], [0, () => IpRuleList]);
export var AuthorizeIpRulesResult = struct(n0, _AIRRu, 0, [], []);
export var CreateIpGroupRequest = struct(n0, _CIGR, 0, [_GN, _GD, _UR, _T], [0, 0, () => IpRuleList, () => TagList]);
export var CreateIpGroupResult = struct(n0, _CIGRr, 0, [_GIr], [0]);
export var DeleteIpGroupRequest = struct(n0, _DIGR, 0, [_GIr], [0]);
export var DeleteIpGroupResult = struct(n0, _DIGRe, 0, [], []);
export var DescribeIpGroupsRequest = struct(n0, _DIGRes, 0, [_GI, _NT, _MR], [64 | 0, 0, 1]);
export var DescribeIpGroupsResult = struct(n0, _DIGResc, 0, [_R, _NT], [() => WorkspacesIpGroupsList, 0]);
export var DisassociateIpGroupsRequest = struct(n0, _DIGRi, 0, [_DI, _GI], [0, 64 | 0]);
export var DisassociateIpGroupsResult = struct(n0, _DIGRis, 0, [], []);
export var IpRuleItem = struct(n0, _IRI, 0, [_iR, _rD], [0, 0]);
export var RevokeIpRulesRequest = struct(n0, _RIRR, 0, [_GIr, _UR], [0, 64 | 0]);
export var RevokeIpRulesResult = struct(n0, _RIRRe, 0, [], []);
export var UpdateRulesOfIpGroupRequest = struct(n0, _UROIGR, 0, [_GIr, _UR], [0, () => IpRuleList]);
export var UpdateRulesOfIpGroupResult = struct(n0, _UROIGRp, 0, [], []);
export var WorkspacesIpGroup = struct(n0, _WIG, 0, [_gI, _gN, _gD, _uR], [0, 0, 0, () => IpRuleList]);
export var IpGroupIdList = 64 | 0;

export var IpRevokedRuleList = 64 | 0;

export var IpRuleList = list(n0, _IRL, 0, () => IpRuleItem);
export var WorkspacesIpGroupsList = list(n0, _WIGL, 0, () => WorkspacesIpGroup);
export var AssociateIpGroups = op(
  n0,
  _AIG,
  0,
  () => AssociateIpGroupsRequest,
  () => AssociateIpGroupsResult
);
export var AuthorizeIpRules = op(
  n0,
  _AIR,
  0,
  () => AuthorizeIpRulesRequest,
  () => AuthorizeIpRulesResult
);
export var CreateIpGroup = op(
  n0,
  _CIG,
  0,
  () => CreateIpGroupRequest,
  () => CreateIpGroupResult
);
export var DeleteIpGroup = op(
  n0,
  _DIG,
  0,
  () => DeleteIpGroupRequest,
  () => DeleteIpGroupResult
);
export var DescribeIpGroups = op(
  n0,
  _DIGe,
  0,
  () => DescribeIpGroupsRequest,
  () => DescribeIpGroupsResult
);
export var DisassociateIpGroups = op(
  n0,
  _DIGi,
  0,
  () => DisassociateIpGroupsRequest,
  () => DisassociateIpGroupsResult
);
export var RevokeIpRules = op(
  n0,
  _RIR,
  0,
  () => RevokeIpRulesRequest,
  () => RevokeIpRulesResult
);
export var UpdateRulesOfIpGroup = op(
  n0,
  _UROIG,
  0,
  () => UpdateRulesOfIpGroupRequest,
  () => UpdateRulesOfIpGroupResult
);
