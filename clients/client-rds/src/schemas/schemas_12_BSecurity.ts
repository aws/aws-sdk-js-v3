// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  DBSecurityGroupAlreadyExistsFault as __DBSecurityGroupAlreadyExistsFault,
  DBSecurityGroupNotSupportedFault as __DBSecurityGroupNotSupportedFault,
  DBSecurityGroupQuotaExceededFault as __DBSecurityGroupQuotaExceededFault,
} from "../models/index";
import {
  _aQE,
  _c,
  _CDBSG,
  _CDBSGM,
  _CDBSGR,
  _CIDRIP,
  _DBSG,
  _DBSGA,
  _DBSGAEF,
  _DBSGD,
  _DBSGN,
  _DBSGNSF,
  _DBSGQEF,
  _e,
  _ECSG,
  _ECSGe,
  _ECSGI,
  _ECSGL,
  _ECSGN,
  _ECSGOI,
  _hE,
  _IPR,
  _IPRa,
  _IPRL,
  _m,
  _OI,
  _St,
  _T,
  _VI,
  _xN,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateDBSecurityGroupMessage = struct(n0, _CDBSGM, 0, [_DBSGN, _DBSGD, _T], [0, 0, [() => TagList, 0]]);
export var CreateDBSecurityGroupResult = struct(n0, _CDBSGR, 0, [_DBSG], [[() => DBSecurityGroup, 0]]);
export var DBSecurityGroup = struct(
  n0,
  _DBSG,
  0,
  [_OI, _DBSGN, _DBSGD, _VI, _ECSG, _IPR, _DBSGA],
  [0, 0, 0, 0, [() => EC2SecurityGroupList, 0], [() => IPRangeList, 0], 0]
);
export var DBSecurityGroupAlreadyExistsFault = error(
  n0,
  _DBSGAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DBSecurityGroupAlreadyExists`, 400],
  },
  [_m],
  [0],

  __DBSecurityGroupAlreadyExistsFault
);
export var DBSecurityGroupNotSupportedFault = error(
  n0,
  _DBSGNSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DBSecurityGroupNotSupported`, 400],
  },
  [_m],
  [0],

  __DBSecurityGroupNotSupportedFault
);
export var DBSecurityGroupQuotaExceededFault = error(
  n0,
  _DBSGQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`QuotaExceeded.DBSecurityGroup`, 400],
  },
  [_m],
  [0],

  __DBSecurityGroupQuotaExceededFault
);
export var EC2SecurityGroup = struct(n0, _ECSGe, 0, [_St, _ECSGN, _ECSGI, _ECSGOI], [0, 0, 0, 0]);
export var IPRange = struct(n0, _IPRa, 0, [_St, _CIDRIP], [0, 0]);
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
export var CreateDBSecurityGroup = op(
  n0,
  _CDBSG,
  0,
  () => CreateDBSecurityGroupMessage,
  () => CreateDBSecurityGroupResult
);
