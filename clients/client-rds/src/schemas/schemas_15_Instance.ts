// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  DBSubnetGroupAlreadyExistsFault as __DBSubnetGroupAlreadyExistsFault,
  DBSubnetGroupDoesNotCoverEnoughAZs as __DBSubnetGroupDoesNotCoverEnoughAZs,
  DBSubnetGroupQuotaExceededFault as __DBSubnetGroupQuotaExceededFault,
  DBSubnetQuotaExceededFault as __DBSubnetQuotaExceededFault,
  SubnetAlreadyInUse as __SubnetAlreadyInUse,
} from "../models/index";
import {
  _aQE,
  _c,
  _CDBSGMre,
  _CDBSGre,
  _CDBSGRr,
  _DBI,
  _DBII,
  _DBSGAEFu,
  _DBSGDNCEAZ,
  _DBSGDu,
  _DBSGNu,
  _DBSGQEFu,
  _DBSGu,
  _DBSQEF,
  _e,
  _hE,
  _m,
  _MDBSGMo,
  _MDBSGo,
  _MDBSGR,
  _SAIU,
  _SDBI,
  _SDBIM,
  _SDBIR,
  _SILu,
  _SIu,
  _SIub,
  _T,
  _xN,
  DBInstance,
  DBSubnetGroup,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateDBSubnetGroupMessage = struct(
  n0,
  _CDBSGMre,
  0,
  [_DBSGNu, _DBSGDu, _SIu, _T],
  [0, 0, [() => SubnetIdentifierList, 0], [() => TagList, 0]]
);
export var CreateDBSubnetGroupResult = struct(n0, _CDBSGRr, 0, [_DBSGu], [[() => DBSubnetGroup, 0]]);
export var DBSubnetGroupAlreadyExistsFault = error(
  n0,
  _DBSGAEFu,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DBSubnetGroupAlreadyExists`, 400],
  },
  [_m],
  [0],

  __DBSubnetGroupAlreadyExistsFault
);
export var DBSubnetGroupDoesNotCoverEnoughAZs = error(
  n0,
  _DBSGDNCEAZ,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DBSubnetGroupDoesNotCoverEnoughAZs`, 400],
  },
  [_m],
  [0],

  __DBSubnetGroupDoesNotCoverEnoughAZs
);
export var DBSubnetGroupQuotaExceededFault = error(
  n0,
  _DBSGQEFu,
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
export var ModifyDBSubnetGroupMessage = struct(
  n0,
  _MDBSGMo,
  0,
  [_DBSGNu, _DBSGDu, _SIu],
  [0, 0, [() => SubnetIdentifierList, 0]]
);
export var ModifyDBSubnetGroupResult = struct(n0, _MDBSGR, 0, [_DBSGu], [[() => DBSubnetGroup, 0]]);
export var StartDBInstanceMessage = struct(n0, _SDBIM, 0, [_DBII], [0]);
export var StartDBInstanceResult = struct(n0, _SDBIR, 0, [_DBI], [[() => DBInstance, 0]]);
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
export var SubnetIdentifierList = list(n0, _SILu, 0, [
  0,
  {
    [_xN]: _SIub,
  },
]);
export var CreateDBSubnetGroup = op(
  n0,
  _CDBSGre,
  0,
  () => CreateDBSubnetGroupMessage,
  () => CreateDBSubnetGroupResult
);
export var ModifyDBSubnetGroup = op(
  n0,
  _MDBSGo,
  0,
  () => ModifyDBSubnetGroupMessage,
  () => ModifyDBSubnetGroupResult
);
export var StartDBInstance = op(
  n0,
  _SDBI,
  0,
  () => StartDBInstanceMessage,
  () => StartDBInstanceResult
);
