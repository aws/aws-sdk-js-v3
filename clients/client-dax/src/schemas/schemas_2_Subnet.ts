// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  SubnetGroupInUseFault as __SubnetGroupInUseFault,
  SubnetGroupNotFoundFault as __SubnetGroupNotFoundFault,
  SubnetInUse as __SubnetInUse,
} from "../models/index";
import {
  _aQE,
  _c,
  _D,
  _DM,
  _DSG,
  _DSGe,
  _DSGR,
  _DSGRe,
  _DSGRes,
  _DSGResc,
  _e,
  _hE,
  _m,
  _MR,
  _NTe,
  _SG,
  _SGIUF,
  _SGL,
  _SGN,
  _SGNFF,
  _SGNu,
  _SGu,
  _SI,
  _SIU,
  _USG,
  _USGR,
  _USGRp,
  n0,
} from "./schemas_0";
import { SubnetGroup } from "./schemas_5_Subnet";

/* eslint no-var: 0 */

export var DeleteSubnetGroupRequest = struct(n0, _DSGR, 0, [_SGN], [0]);
export var DeleteSubnetGroupResponse = struct(n0, _DSGRe, 0, [_DM], [0]);
export var DescribeSubnetGroupsRequest = struct(n0, _DSGRes, 0, [_SGNu, _MR, _NTe], [64 | 0, 1, 0]);
export var DescribeSubnetGroupsResponse = struct(n0, _DSGResc, 0, [_NTe, _SGu], [0, () => SubnetGroupList]);
export var SubnetGroupInUseFault = error(
  n0,
  _SGIUF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SubnetGroupInUse`, 400],
  },
  [_m],
  [0],

  __SubnetGroupInUseFault
);
export var SubnetGroupNotFoundFault = error(
  n0,
  _SGNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`SubnetGroupNotFoundFault`, 404],
  },
  [_m],
  [0],

  __SubnetGroupNotFoundFault
);
export var SubnetInUse = error(
  n0,
  _SIU,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SubnetInUse`, 400],
  },
  [_m],
  [0],

  __SubnetInUse
);
export var UpdateSubnetGroupRequest = struct(n0, _USGR, 0, [_SGN, _D, _SI], [0, 0, 64 | 0]);
export var UpdateSubnetGroupResponse = struct(n0, _USGRp, 0, [_SG], [() => SubnetGroup]);
export var SubnetGroupList = list(n0, _SGL, 0, () => SubnetGroup);
export var SubnetGroupNameList = 64 | 0;

export var DeleteSubnetGroup = op(
  n0,
  _DSG,
  0,
  () => DeleteSubnetGroupRequest,
  () => DeleteSubnetGroupResponse
);
export var DescribeSubnetGroups = op(
  n0,
  _DSGe,
  0,
  () => DescribeSubnetGroupsRequest,
  () => DescribeSubnetGroupsResponse
);
export var UpdateSubnetGroup = op(
  n0,
  _USG,
  0,
  () => UpdateSubnetGroupRequest,
  () => UpdateSubnetGroupResponse
);
