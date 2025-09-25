// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { StorageTypeNotSupportedFault as __StorageTypeNotSupportedFault } from "../models/index";
import {
  _aQE,
  _BRP,
  _c,
  _DBIAB,
  _e,
  _hE,
  _KKI,
  _m,
  _PSU,
  _SDBIA,
  _SDBIABRM,
  _SDBIABRR,
  _SDBIABRt,
  _STNSF,
  n0,
} from "./schemas_0";
import { DBInstanceAutomatedBackup } from "./schemas_5_Automated";

/* eslint no-var: 0 */

export var StartDBInstanceAutomatedBackupsReplicationMessage = struct(
  n0,
  _SDBIABRM,
  0,
  [_SDBIA, _BRP, _KKI, _PSU],
  [0, 1, 0, 0]
);
export var StartDBInstanceAutomatedBackupsReplicationResult = struct(
  n0,
  _SDBIABRR,
  0,
  [_DBIAB],
  [[() => DBInstanceAutomatedBackup, 0]]
);
export var StorageTypeNotSupportedFault = error(
  n0,
  _STNSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`StorageTypeNotSupported`, 400],
  },
  [_m],
  [0],

  __StorageTypeNotSupportedFault
);
export var StartDBInstanceAutomatedBackupsReplication = op(
  n0,
  _SDBIABRt,
  0,
  () => StartDBInstanceAutomatedBackupsReplicationMessage,
  () => StartDBInstanceAutomatedBackupsReplicationResult
);
