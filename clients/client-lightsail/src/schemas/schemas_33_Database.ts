// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _aI,
  _aZ,
  _cA,
  _cCI,
  _CRD,
  _CRDR,
  _CRDRr,
  _dBR,
  _eBR,
  _GRDMUP,
  _GRDMUPR,
  _GRDMUPRe,
  _ht,
  _mDN,
  _mU,
  _mUP,
  _o,
  _pAu,
  _pBW,
  _pMW,
  _pV,
  _rDBI,
  _rDBIe,
  _rDN,
  _rMUP,
  _SS,
  _ta,
  _URD,
  _URDR,
  _URDRp,
  n0,
  OperationList,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var SensitiveString = sim(n0, _SS, 0, 8);
export var CreateRelationalDatabaseRequest = struct(
  n0,
  _CRDR,
  0,
  [_rDN, _aZ, _rDBIe, _rDBI, _mDN, _mU, _mUP, _pBW, _pMW, _pAu, _ta],
  [0, 0, 0, 0, 0, 0, [() => SensitiveString, 0], 0, 0, 2, () => TagList]
);
export var CreateRelationalDatabaseResult = struct(n0, _CRDRr, 0, [_o], [() => OperationList]);
export var GetRelationalDatabaseMasterUserPasswordRequest = struct(n0, _GRDMUPR, 0, [_rDN, _pV], [0, 0]);
export var GetRelationalDatabaseMasterUserPasswordResult = struct(
  n0,
  _GRDMUPRe,
  0,
  [_mUP, _cA],
  [[() => SensitiveString, 0], 4]
);
export var UpdateRelationalDatabaseRequest = struct(
  n0,
  _URDR,
  0,
  [_rDN, _mUP, _rMUP, _pBW, _pMW, _eBR, _dBR, _pAu, _aI, _cCI, _rDBIe],
  [0, [() => SensitiveString, 0], 2, 0, 0, 2, 2, 2, 2, 0, 0]
);
export var UpdateRelationalDatabaseResult = struct(n0, _URDRp, 0, [_o], [() => OperationList]);
export var CreateRelationalDatabase = op(
  n0,
  _CRD,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/CreateRelationalDatabase", 200],
  },
  () => CreateRelationalDatabaseRequest,
  () => CreateRelationalDatabaseResult
);
export var GetRelationalDatabaseMasterUserPassword = op(
  n0,
  _GRDMUP,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetRelationalDatabaseMasterUserPassword", 200],
  },
  () => GetRelationalDatabaseMasterUserPasswordRequest,
  () => GetRelationalDatabaseMasterUserPasswordResult
);
export var UpdateRelationalDatabase = op(
  n0,
  _URD,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/UpdateRelationalDatabase", 200],
  },
  () => UpdateRelationalDatabaseRequest,
  () => UpdateRelationalDatabaseResult
);
