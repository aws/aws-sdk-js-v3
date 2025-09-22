// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ClusterParameterGroupNotFoundFault as __ClusterParameterGroupNotFoundFault,
  InvalidClusterParameterGroupStateFault as __InvalidClusterParameterGroupStateFault,
} from "../models/index";
import {
  _aQE,
  _c,
  _CPGD,
  _CPGl,
  _CPGM,
  _CPGNFF,
  _CPGNM,
  _DCPe,
  _DCPG,
  _DCPGe,
  _DCPGM,
  _DCPGMe,
  _DCPM,
  _e,
  _hE,
  _ICPGSF,
  _M,
  _m,
  _MCPG,
  _MCPGM,
  _MR,
  _P,
  _PG,
  _PGL,
  _PGN,
  _PGS,
  _RAP,
  _RCPG,
  _RCPGM,
  _So,
  _TK,
  _TV,
  _xN,
  n0,
  TagKeyList,
  Unit,
} from "./schemas_0";
import { ParametersList } from "./schemas_36_Cluster";
import { ClusterParameterGroup } from "./schemas_43_Parameter";
import { TagValueList } from "./schemas_65_Describe";

/* eslint no-var: 0 */

export var ClusterParameterGroupDetails = struct(n0, _CPGD, 0, [_P, _M], [[() => ParametersList, 0], 0]);
export var ClusterParameterGroupNameMessage = struct(n0, _CPGNM, 0, [_PGN, _PGS], [0, 0]);
export var ClusterParameterGroupNotFoundFault = error(
  n0,
  _CPGNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ClusterParameterGroupNotFound`, 404],
  },
  [_m],
  [0],

  __ClusterParameterGroupNotFoundFault
);
export var ClusterParameterGroupsMessage = struct(n0, _CPGM, 0, [_M, _PG], [0, [() => ParameterGroupList, 0]]);
export var DeleteClusterParameterGroupMessage = struct(n0, _DCPGM, 0, [_PGN], [0]);
export var DescribeClusterParameterGroupsMessage = struct(
  n0,
  _DCPGMe,
  0,
  [_PGN, _MR, _M, _TK, _TV],
  [0, 1, 0, [() => TagKeyList, 0], [() => TagValueList, 0]]
);
export var DescribeClusterParametersMessage = struct(n0, _DCPM, 0, [_PGN, _So, _MR, _M], [0, 0, 1, 0]);
export var InvalidClusterParameterGroupStateFault = error(
  n0,
  _ICPGSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidClusterParameterGroupState`, 400],
  },
  [_m],
  [0],

  __InvalidClusterParameterGroupStateFault
);
export var ModifyClusterParameterGroupMessage = struct(n0, _MCPGM, 0, [_PGN, _P], [0, [() => ParametersList, 0]]);
export var ResetClusterParameterGroupMessage = struct(
  n0,
  _RCPGM,
  0,
  [_PGN, _RAP, _P],
  [0, 2, [() => ParametersList, 0]]
);
export var ParameterGroupList = list(n0, _PGL, 0, [
  () => ClusterParameterGroup,
  {
    [_xN]: _CPGl,
  },
]);
export var DeleteClusterParameterGroup = op(
  n0,
  _DCPG,
  0,
  () => DeleteClusterParameterGroupMessage,
  () => Unit
);
export var DescribeClusterParameterGroups = op(
  n0,
  _DCPGe,
  0,
  () => DescribeClusterParameterGroupsMessage,
  () => ClusterParameterGroupsMessage
);
export var DescribeClusterParameters = op(
  n0,
  _DCPe,
  0,
  () => DescribeClusterParametersMessage,
  () => ClusterParameterGroupDetails
);
export var ModifyClusterParameterGroup = op(
  n0,
  _MCPG,
  0,
  () => ModifyClusterParameterGroupMessage,
  () => ClusterParameterGroupNameMessage
);
export var ResetClusterParameterGroup = op(
  n0,
  _RCPG,
  0,
  () => ResetClusterParameterGroupMessage,
  () => ClusterParameterGroupNameMessage
);
