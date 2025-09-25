// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ClusterSecurityGroupAlreadyExistsFault as __ClusterSecurityGroupAlreadyExistsFault,
  ClusterSecurityGroupQuotaExceededFault as __ClusterSecurityGroupQuotaExceededFault,
} from "../models/index";
import {
  _aQE,
  _c,
  _CCSG,
  _CCSGM,
  _CCSGR,
  _CIDRIP,
  _CSG,
  _CSGAEF,
  _CSGN,
  _CSGQEF,
  _D,
  _e,
  _ECSG,
  _ECSGe,
  _ECSGL,
  _ECSGN,
  _ECSGOI,
  _hE,
  _IPR,
  _IPRa,
  _IPRL,
  _m,
  _St,
  _T,
  _xN,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ClusterSecurityGroup = struct(
  n0,
  _CSG,
  0,
  [_CSGN, _D, _ECSG, _IPR, _T],
  [0, 0, [() => EC2SecurityGroupList, 0], [() => IPRangeList, 0], [() => TagList, 0]]
);
export var ClusterSecurityGroupAlreadyExistsFault = error(
  n0,
  _CSGAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ClusterSecurityGroupAlreadyExists`, 400],
  },
  [_m],
  [0],

  __ClusterSecurityGroupAlreadyExistsFault
);
export var ClusterSecurityGroupQuotaExceededFault = error(
  n0,
  _CSGQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`QuotaExceeded.ClusterSecurityGroup`, 400],
  },
  [_m],
  [0],

  __ClusterSecurityGroupQuotaExceededFault
);
export var CreateClusterSecurityGroupMessage = struct(n0, _CCSGM, 0, [_CSGN, _D, _T], [0, 0, [() => TagList, 0]]);
export var CreateClusterSecurityGroupResult = struct(n0, _CCSGR, 0, [_CSG], [[() => ClusterSecurityGroup, 0]]);
export var EC2SecurityGroup = struct(n0, _ECSGe, 0, [_St, _ECSGN, _ECSGOI, _T], [0, 0, 0, [() => TagList, 0]]);
export var IPRange = struct(n0, _IPRa, 0, [_St, _CIDRIP, _T], [0, 0, [() => TagList, 0]]);
export var EC2SecurityGroupList = list(n0, _ECSGL, 0, [
  () => EC2SecurityGroup,
  {
    [_xN]: _ECSGe,
  },
]);
export var IPRangeList = list(n0, _IPRL, 0, [
  () => IPRange,
  {
    [_xN]: _IPRa,
  },
]);
export var CreateClusterSecurityGroup = op(
  n0,
  _CCSG,
  0,
  () => CreateClusterSecurityGroupMessage,
  () => CreateClusterSecurityGroupResult
);
