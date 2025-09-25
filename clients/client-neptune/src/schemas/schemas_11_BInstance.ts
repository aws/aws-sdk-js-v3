// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  DBSubnetGroupAlreadyExistsFault as __DBSubnetGroupAlreadyExistsFault,
  DBSubnetGroupQuotaExceededFault as __DBSubnetGroupQuotaExceededFault,
  DBSubnetQuotaExceededFault as __DBSubnetQuotaExceededFault,
  SubnetAlreadyInUse as __SubnetAlreadyInUse,
} from "../models/index";
import {
  _aQE,
  _AZ,
  _c,
  _CDBSG,
  _CDBSGM,
  _CDBSGR,
  _DBSGA,
  _DBSGAEF,
  _DBSGD,
  _DBSGMu,
  _DBSGN,
  _DBSGQEF,
  _DBSGu,
  _DBSGub,
  _DBSQEF,
  _DDBSGe,
  _DDBSGMe,
  _e,
  _F,
  _hE,
  _M,
  _m,
  _MDBSG,
  _MDBSGM,
  _MDBSGR,
  _MR,
  _N,
  _SAIU,
  _SAZu,
  _SGS,
  _SILu,
  _SIu,
  _SIub,
  _SL,
  _SSu,
  _Su,
  _Sub,
  _T,
  _VI,
  _xN,
  FilterList,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AvailabilityZone = struct(n0, _AZ, 0, [_N], [0]);
export var CreateDBSubnetGroupMessage = struct(
  n0,
  _CDBSGM,
  0,
  [_DBSGN, _DBSGD, _SIu, _T],
  [0, 0, [() => SubnetIdentifierList, 0], [() => TagList, 0]]
);
export var CreateDBSubnetGroupResult = struct(n0, _CDBSGR, 0, [_DBSGu], [[() => DBSubnetGroup, 0]]);
export var DBSubnetGroup = struct(
  n0,
  _DBSGu,
  0,
  [_DBSGN, _DBSGD, _VI, _SGS, _Su, _DBSGA],
  [0, 0, 0, 0, [() => SubnetList, 0], 0]
);
export var DBSubnetGroupAlreadyExistsFault = error(
  n0,
  _DBSGAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DBSubnetGroupAlreadyExists`, 400],
  },
  [_m],
  [0],

  __DBSubnetGroupAlreadyExistsFault
);
export var DBSubnetGroupMessage = struct(n0, _DBSGMu, 0, [_M, _DBSGub], [0, [() => DBSubnetGroups, 0]]);
export var DBSubnetGroupQuotaExceededFault = error(
  n0,
  _DBSGQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DBSubnetGroupQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __DBSubnetGroupQuotaExceededFault
);
export var DBSubnetQuotaExceededFault = error(
  n0,
  _DBSQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DBSubnetQuotaExceededFault`, 400],
  },
  [_m],
  [0],

  __DBSubnetQuotaExceededFault
);
export var DescribeDBSubnetGroupsMessage = struct(
  n0,
  _DDBSGMe,
  0,
  [_DBSGN, _F, _MR, _M],
  [0, [() => FilterList, 0], 1, 0]
);
export var ModifyDBSubnetGroupMessage = struct(
  n0,
  _MDBSGM,
  0,
  [_DBSGN, _DBSGD, _SIu],
  [0, 0, [() => SubnetIdentifierList, 0]]
);
export var ModifyDBSubnetGroupResult = struct(n0, _MDBSGR, 0, [_DBSGu], [[() => DBSubnetGroup, 0]]);
export var Subnet = struct(n0, _Sub, 0, [_SIub, _SAZu, _SSu], [0, () => AvailabilityZone, 0]);
export var SubnetAlreadyInUse = error(
  n0,
  _SAIU,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SubnetAlreadyInUse`, 400],
  },
  [_m],
  [0],

  __SubnetAlreadyInUse
);
export var DBSubnetGroups = list(n0, _DBSGub, 0, [
  () => DBSubnetGroup,
  {
    [_xN]: _DBSGu,
  },
]);
export var SubnetIdentifierList = list(n0, _SILu, 0, [
  0,
  {
    [_xN]: _SIub,
  },
]);
export var SubnetList = list(n0, _SL, 0, [
  () => Subnet,
  {
    [_xN]: _Sub,
  },
]);
export var CreateDBSubnetGroup = op(
  n0,
  _CDBSG,
  0,
  () => CreateDBSubnetGroupMessage,
  () => CreateDBSubnetGroupResult
);
export var DescribeDBSubnetGroups = op(
  n0,
  _DDBSGe,
  0,
  () => DescribeDBSubnetGroupsMessage,
  () => DBSubnetGroupMessage
);
export var ModifyDBSubnetGroup = op(
  n0,
  _MDBSG,
  0,
  () => ModifyDBSubnetGroupMessage,
  () => ModifyDBSubnetGroupResult
);
