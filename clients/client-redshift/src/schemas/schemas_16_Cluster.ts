// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ClusterSubnetGroupNotFoundFault as __ClusterSubnetGroupNotFoundFault,
  InvalidClusterSubnetGroupStateFault as __InvalidClusterSubnetGroupStateFault,
  InvalidClusterSubnetStateFault as __InvalidClusterSubnetStateFault,
} from "../models/index";
import {
  _aQE,
  _c,
  _CSGlu,
  _CSGlus,
  _CSGMlu,
  _CSGNFFl,
  _CSGNl,
  _DCSGe,
  _DCSGesc,
  _DCSGMe,
  _DCSGMesc,
  _e,
  _hE,
  _ICSGSFn,
  _ICSSFn,
  _M,
  _m,
  _MR,
  _TK,
  _TV,
  _xN,
  n0,
  TagKeyList,
  Unit,
} from "./schemas_0";
import { ClusterSubnetGroup } from "./schemas_39_Describe";
import { TagValueList } from "./schemas_65_Describe";

/* eslint no-var: 0 */

export var ClusterSubnetGroupMessage = struct(n0, _CSGMlu, 0, [_M, _CSGlus], [0, [() => ClusterSubnetGroups, 0]]);
export var ClusterSubnetGroupNotFoundFault = error(
  n0,
  _CSGNFFl,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ClusterSubnetGroupNotFoundFault`, 400],
  },
  [_m],
  [0],

  __ClusterSubnetGroupNotFoundFault
);
export var DeleteClusterSubnetGroupMessage = struct(n0, _DCSGMe, 0, [_CSGNl], [0]);
export var DescribeClusterSubnetGroupsMessage = struct(
  n0,
  _DCSGMesc,
  0,
  [_CSGNl, _MR, _M, _TK, _TV],
  [0, 1, 0, [() => TagKeyList, 0], [() => TagValueList, 0]]
);
export var InvalidClusterSubnetGroupStateFault = error(
  n0,
  _ICSGSFn,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidClusterSubnetGroupStateFault`, 400],
  },
  [_m],
  [0],

  __InvalidClusterSubnetGroupStateFault
);
export var InvalidClusterSubnetStateFault = error(
  n0,
  _ICSSFn,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidClusterSubnetStateFault`, 400],
  },
  [_m],
  [0],

  __InvalidClusterSubnetStateFault
);
export var ClusterSubnetGroups = list(n0, _CSGlus, 0, [
  () => ClusterSubnetGroup,
  {
    [_xN]: _CSGlu,
  },
]);
export var DeleteClusterSubnetGroup = op(
  n0,
  _DCSGe,
  0,
  () => DeleteClusterSubnetGroupMessage,
  () => Unit
);
export var DescribeClusterSubnetGroups = op(
  n0,
  _DCSGesc,
  0,
  () => DescribeClusterSubnetGroupsMessage,
  () => ClusterSubnetGroupMessage
);
