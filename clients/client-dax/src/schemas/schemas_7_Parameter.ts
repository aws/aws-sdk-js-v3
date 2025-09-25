// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ParameterGroupNotFoundFault as __ParameterGroupNotFoundFault } from "../models/index";
import {
  _aQE,
  _c,
  _DM,
  _DPG,
  _DPGe,
  _DPGR,
  _DPGRe,
  _DPGRes,
  _DPGResc,
  _e,
  _hE,
  _m,
  _MR,
  _NTe,
  _PG,
  _PGa,
  _PGL,
  _PGN,
  _PGNa,
  _PGNFF,
  _PN,
  _PNV,
  _PNVa,
  _PNVL,
  _PV,
  _UPG,
  _UPGR,
  _UPGRp,
  n0,
} from "./schemas_0";
import { ParameterGroup } from "./schemas_9_Parameter";

/* eslint no-var: 0 */

export var DeleteParameterGroupRequest = struct(n0, _DPGR, 0, [_PGN], [0]);
export var DeleteParameterGroupResponse = struct(n0, _DPGRe, 0, [_DM], [0]);
export var DescribeParameterGroupsRequest = struct(n0, _DPGRes, 0, [_PGNa, _MR, _NTe], [64 | 0, 1, 0]);
export var DescribeParameterGroupsResponse = struct(n0, _DPGResc, 0, [_NTe, _PGa], [0, () => ParameterGroupList]);
export var ParameterGroupNotFoundFault = error(
  n0,
  _PGNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ParameterGroupNotFound`, 404],
  },
  [_m],
  [0],

  __ParameterGroupNotFoundFault
);
export var ParameterNameValue = struct(n0, _PNV, 0, [_PN, _PV], [0, 0]);
export var UpdateParameterGroupRequest = struct(n0, _UPGR, 0, [_PGN, _PNVa], [0, () => ParameterNameValueList]);
export var UpdateParameterGroupResponse = struct(n0, _UPGRp, 0, [_PG], [() => ParameterGroup]);
export var ParameterGroupList = list(n0, _PGL, 0, () => ParameterGroup);
export var ParameterGroupNameList = 64 | 0;

export var ParameterNameValueList = list(n0, _PNVL, 0, () => ParameterNameValue);
export var DeleteParameterGroup = op(
  n0,
  _DPG,
  0,
  () => DeleteParameterGroupRequest,
  () => DeleteParameterGroupResponse
);
export var DescribeParameterGroups = op(
  n0,
  _DPGe,
  0,
  () => DescribeParameterGroupsRequest,
  () => DescribeParameterGroupsResponse
);
export var UpdateParameterGroup = op(
  n0,
  _UPG,
  0,
  () => UpdateParameterGroupRequest,
  () => UpdateParameterGroupResponse
);
