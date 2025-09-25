// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ClusterSecurityGroupNotFoundFault as __ClusterSecurityGroupNotFoundFault } from "../models/index";
import {
  _aQE,
  _c,
  _CSG,
  _CSGl,
  _CSGMl,
  _CSGN,
  _CSGNFF,
  _DCSGes,
  _DCSGMes,
  _e,
  _hE,
  _M,
  _m,
  _MR,
  _TK,
  _TV,
  _xN,
  n0,
  TagKeyList,
} from "./schemas_0";
import { ClusterSecurityGroup } from "./schemas_50_ClusterSecurity";
import { TagValueList } from "./schemas_65_Describe";

/* eslint no-var: 0 */

export var ClusterSecurityGroupMessage = struct(n0, _CSGMl, 0, [_M, _CSGl], [0, [() => ClusterSecurityGroups, 0]]);
export var ClusterSecurityGroupNotFoundFault = error(
  n0,
  _CSGNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ClusterSecurityGroupNotFound`, 404],
  },
  [_m],
  [0],

  __ClusterSecurityGroupNotFoundFault
);
export var DescribeClusterSecurityGroupsMessage = struct(
  n0,
  _DCSGMes,
  0,
  [_CSGN, _MR, _M, _TK, _TV],
  [0, 1, 0, [() => TagKeyList, 0], [() => TagValueList, 0]]
);
export var ClusterSecurityGroups = list(n0, _CSGl, 0, [
  () => ClusterSecurityGroup,
  {
    [_xN]: _CSG,
  },
]);
export var DescribeClusterSecurityGroups = op(
  n0,
  _DCSGes,
  0,
  () => DescribeClusterSecurityGroupsMessage,
  () => ClusterSecurityGroupMessage
);
