// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidSubnet as __InvalidSubnet,
  SubnetGroupInUseFault as __SubnetGroupInUseFault,
  SubnetInUse as __SubnetInUse,
  SubnetNotAllowedFault as __SubnetNotAllowedFault,
  SubnetQuotaExceededFault as __SubnetQuotaExceededFault,
} from "../models/index";
import {
  _aQE,
  _ARN,
  _AZ,
  _c,
  _D,
  _DSG,
  _DSGe,
  _DSGR,
  _DSGRe,
  _DSGRes,
  _DSGResc,
  _e,
  _hE,
  _I,
  _IS,
  _m,
  _MR,
  _N,
  _NTex,
  _SGIUF,
  _SGL,
  _SGN,
  _SGu,
  _SGub,
  _SI,
  _SIL,
  _SIU,
  _SIu,
  _SLu,
  _SNAF,
  _SNT,
  _SQEFu,
  _Su,
  _Sub,
  _USG,
  _USGR,
  _USGRp,
  _VI,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AvailabilityZone = struct(n0, _AZ, 0, [_N], [0]);
export var DeleteSubnetGroupRequest = struct(n0, _DSGR, 0, [_SGN], [0]);
export var DeleteSubnetGroupResponse = struct(n0, _DSGRe, 0, [_SGu], [[() => SubnetGroup, 0]]);
export var DescribeSubnetGroupsRequest = struct(n0, _DSGRes, 0, [_SGN, _MR, _NTex], [0, 1, 0]);
export var DescribeSubnetGroupsResponse = struct(n0, _DSGResc, 0, [_NTex, _SGub], [0, [() => SubnetGroupList, 0]]);
export var InvalidSubnet = error(
  n0,
  _IS,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidSubnet`, 400],
  },
  [_m],
  [0],

  __InvalidSubnet
);
export var Subnet = struct(n0, _Su, 0, [_I, _AZ, _SNT], [0, () => AvailabilityZone, 64 | 0]);
export var SubnetGroup = struct(
  n0,
  _SGu,
  0,
  [_N, _D, _VI, _Sub, _ARN, _SNT],
  [0, 0, 0, [() => SubnetList, 0], 0, 64 | 0]
);
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
export var SubnetNotAllowedFault = error(
  n0,
  _SNAF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SubnetNotAllowedFault`, 400],
  },
  [_m],
  [0],

  __SubnetNotAllowedFault
);
export var SubnetQuotaExceededFault = error(
  n0,
  _SQEFu,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SubnetQuotaExceededFault`, 400],
  },
  [_m],
  [0],

  __SubnetQuotaExceededFault
);
export var UpdateSubnetGroupRequest = struct(n0, _USGR, 0, [_SGN, _D, _SI], [0, 0, [() => SubnetIdentifierList, 0]]);
export var UpdateSubnetGroupResponse = struct(n0, _USGRp, 0, [_SGu], [[() => SubnetGroup, 0]]);
export var NetworkTypeList = 64 | 0;

export var SubnetGroupList = list(n0, _SGL, 0, [() => SubnetGroup, 0]);
export var SubnetIdentifierList = list(n0, _SIL, 0, [
  0,
  {
    [_xN]: _SIu,
  },
]);
export var SubnetList = list(n0, _SLu, 0, [
  () => Subnet,
  {
    [_xN]: _Su,
  },
]);
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
