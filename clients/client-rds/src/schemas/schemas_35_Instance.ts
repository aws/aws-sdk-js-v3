// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AuthorizationAlreadyExistsFault as __AuthorizationAlreadyExistsFault,
  AuthorizationQuotaExceededFault as __AuthorizationQuotaExceededFault,
  DBSecurityGroupNotFoundFault as __DBSecurityGroupNotFoundFault,
} from "../models/index";
import {
  _AAEF,
  _ADBSGI,
  _ADBSGIM,
  _ADBSGIR,
  _aQE,
  _AQEF,
  _c,
  _CIDRIP,
  _DBSG,
  _DBSGe,
  _DBSGMe,
  _DBSGN,
  _DBSGNFF,
  _DDBSG,
  _DDBSGes,
  _DDBSGM,
  _DDBSGMes,
  _e,
  _ECSGI,
  _ECSGN,
  _ECSGOI,
  _Fi,
  _hE,
  _m,
  _Ma,
  _MR,
  _RDBSGI,
  _RDBSGIM,
  _RDBSGIR,
  _xN,
  FilterList,
  n0,
  Unit,
} from "./schemas_0";
import { DBSecurityGroup } from "./schemas_12_BSecurity";

/* eslint no-var: 0 */

export var AuthorizationAlreadyExistsFault = error(
  n0,
  _AAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`AuthorizationAlreadyExists`, 400],
  },
  [_m],
  [0],

  __AuthorizationAlreadyExistsFault
);
export var AuthorizationQuotaExceededFault = error(
  n0,
  _AQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`AuthorizationQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __AuthorizationQuotaExceededFault
);
export var AuthorizeDBSecurityGroupIngressMessage = struct(
  n0,
  _ADBSGIM,
  0,
  [_DBSGN, _CIDRIP, _ECSGN, _ECSGI, _ECSGOI],
  [0, 0, 0, 0, 0]
);
export var AuthorizeDBSecurityGroupIngressResult = struct(n0, _ADBSGIR, 0, [_DBSG], [[() => DBSecurityGroup, 0]]);
export var DBSecurityGroupMessage = struct(n0, _DBSGMe, 0, [_Ma, _DBSGe], [0, [() => DBSecurityGroups, 0]]);
export var DBSecurityGroupNotFoundFault = error(
  n0,
  _DBSGNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`DBSecurityGroupNotFound`, 404],
  },
  [_m],
  [0],

  __DBSecurityGroupNotFoundFault
);
export var DeleteDBSecurityGroupMessage = struct(n0, _DDBSGM, 0, [_DBSGN], [0]);
export var DescribeDBSecurityGroupsMessage = struct(
  n0,
  _DDBSGMes,
  0,
  [_DBSGN, _Fi, _MR, _Ma],
  [0, [() => FilterList, 0], 1, 0]
);
export var RevokeDBSecurityGroupIngressMessage = struct(
  n0,
  _RDBSGIM,
  0,
  [_DBSGN, _CIDRIP, _ECSGN, _ECSGI, _ECSGOI],
  [0, 0, 0, 0, 0]
);
export var RevokeDBSecurityGroupIngressResult = struct(n0, _RDBSGIR, 0, [_DBSG], [[() => DBSecurityGroup, 0]]);
export var DBSecurityGroups = list(n0, _DBSGe, 0, [
  () => DBSecurityGroup,
  {
    [_xN]: _DBSG,
  },
]);
export var AuthorizeDBSecurityGroupIngress = op(
  n0,
  _ADBSGI,
  0,
  () => AuthorizeDBSecurityGroupIngressMessage,
  () => AuthorizeDBSecurityGroupIngressResult
);
export var DeleteDBSecurityGroup = op(
  n0,
  _DDBSG,
  0,
  () => DeleteDBSecurityGroupMessage,
  () => Unit
);
export var DescribeDBSecurityGroups = op(
  n0,
  _DDBSGes,
  0,
  () => DescribeDBSecurityGroupsMessage,
  () => DBSecurityGroupMessage
);
export var RevokeDBSecurityGroupIngress = op(
  n0,
  _RDBSGI,
  0,
  () => RevokeDBSecurityGroupIngressMessage,
  () => RevokeDBSecurityGroupIngressResult
);
