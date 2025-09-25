// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidARNFault as __InvalidARNFault,
  ParameterGroupNotFoundFault as __ParameterGroupNotFoundFault,
  TagNotFoundFault as __TagNotFoundFault,
} from "../models/index";
import {
  _AP,
  _aQE,
  _AV,
  _c,
  _D,
  _DP,
  _DPG,
  _DPGe,
  _DPGR,
  _DPGRe,
  _DPGRes,
  _DPGResc,
  _DPR,
  _DPRe,
  _DTa,
  _e,
  _hE,
  _IARNF,
  _LT,
  _LTR,
  _LTRi,
  _m,
  _MEV,
  _MR,
  _N,
  _NTex,
  _Pa,
  _Par,
  _PG,
  _PGa,
  _PGL,
  _PGN,
  _PGNFF,
  _PL,
  _PN,
  _PNa,
  _PNV,
  _PNVa,
  _PNVL,
  _PV,
  _RA,
  _RPG,
  _RPGR,
  _RPGRe,
  _Ta,
  _TK,
  _TL,
  _TNFF,
  _TR,
  _TRR,
  _TRRa,
  _UPG,
  _UPGR,
  _UPGRp,
  _UR,
  _URR,
  _URRn,
  _Va,
  _xN,
  n0,
} from "./schemas_0";
import { ParameterGroup } from "./schemas_12_Parameter";
import { TagList } from "./schemas_16_Create";

/* eslint no-var: 0 */

export var DeleteParameterGroupRequest = struct(n0, _DPGR, 0, [_PGN], [0]);
export var DeleteParameterGroupResponse = struct(n0, _DPGRe, 0, [_PG], [() => ParameterGroup]);
export var DescribeParameterGroupsRequest = struct(n0, _DPGRes, 0, [_PGN, _MR, _NTex], [0, 1, 0]);
export var DescribeParameterGroupsResponse = struct(n0, _DPGResc, 0, [_NTex, _PGa], [0, [() => ParameterGroupList, 0]]);
export var DescribeParametersRequest = struct(n0, _DPR, 0, [_PGN, _MR, _NTex], [0, 1, 0]);
export var DescribeParametersResponse = struct(n0, _DPRe, 0, [_NTex, _Pa], [0, [() => ParametersList, 0]]);
export var InvalidARNFault = error(
  n0,
  _IARNF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidARN`, 400],
  },
  [_m],
  [0],

  __InvalidARNFault
);
export var ListTagsRequest = struct(n0, _LTR, 0, [_RA], [0]);
export var ListTagsResponse = struct(n0, _LTRi, 0, [_TL], [[() => TagList, 0]]);
export var Parameter = struct(n0, _Par, 0, [_N, _Va, _D, _DTa, _AV, _MEV], [0, 0, 0, 0, 0, 0]);
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
export var ResetParameterGroupRequest = struct(n0, _RPGR, 0, [_PGN, _AP, _PNa], [0, 2, 64 | 0]);
export var ResetParameterGroupResponse = struct(n0, _RPGRe, 0, [_PG], [() => ParameterGroup]);
export var TagNotFoundFault = error(
  n0,
  _TNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`TagNotFound`, 404],
  },
  [_m],
  [0],

  __TagNotFoundFault
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RA, _Ta], [0, [() => TagList, 0]]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [_TL], [[() => TagList, 0]]);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RA, _TK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [_TL], [[() => TagList, 0]]);
export var UpdateParameterGroupRequest = struct(n0, _UPGR, 0, [_PGN, _PNVa], [0, [() => ParameterNameValueList, 0]]);
export var UpdateParameterGroupResponse = struct(n0, _UPGRp, 0, [_PG], [() => ParameterGroup]);
export var KeyList = 64 | 0;

export var ParameterGroupList = list(n0, _PGL, 0, [
  () => ParameterGroup,
  {
    [_xN]: _PG,
  },
]);
export var ParameterNameList = 64 | 0;

export var ParameterNameValueList = list(n0, _PNVL, 0, [
  () => ParameterNameValue,
  {
    [_xN]: _PNV,
  },
]);
export var ParametersList = list(n0, _PL, 0, [
  () => Parameter,
  {
    [_xN]: _Par,
  },
]);
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
export var DescribeParameters = op(
  n0,
  _DP,
  0,
  () => DescribeParametersRequest,
  () => DescribeParametersResponse
);
export var ListTags = op(
  n0,
  _LT,
  0,
  () => ListTagsRequest,
  () => ListTagsResponse
);
export var ResetParameterGroup = op(
  n0,
  _RPG,
  0,
  () => ResetParameterGroupRequest,
  () => ResetParameterGroupResponse
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
export var UpdateParameterGroup = op(
  n0,
  _UPG,
  0,
  () => UpdateParameterGroupRequest,
  () => UpdateParameterGroupResponse
);
