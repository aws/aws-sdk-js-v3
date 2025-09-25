// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  CustomAvailabilityZoneNotFoundFault as __CustomAvailabilityZoneNotFoundFault,
  DBClusterAutomatedBackupQuotaExceededFault as __DBClusterAutomatedBackupQuotaExceededFault,
  DBClusterSnapshotAlreadyExistsFault as __DBClusterSnapshotAlreadyExistsFault,
  DBSnapshotAlreadyExistsFault as __DBSnapshotAlreadyExistsFault,
  SnapshotQuotaExceededFault as __SnapshotQuotaExceededFault,
} from "../models/index";
import {
  _aQE,
  _c,
  _CAZNFF,
  _CDBCSMr,
  _CDBCSr,
  _CDBCSRr,
  _CDBS,
  _CDBSM,
  _CDBSMr,
  _CDBSR,
  _CDBSr,
  _CDBSRr,
  _COG,
  _CTo,
  _DAB,
  _DBC,
  _DBCABQEF,
  _DBCI,
  _DBCS,
  _DBCSAEF,
  _DBCSI,
  _DBI,
  _DBII,
  _DBS,
  _DBSAEF,
  _DBSIn,
  _DDBC,
  _DDBCM,
  _DDBCR,
  _DDBI,
  _DDBIM,
  _DDBIR,
  _e,
  _FDBSI,
  _hE,
  _KKI,
  _m,
  _OGN,
  _PSU,
  _SAZ,
  _SDBIMt,
  _SDBIRt,
  _SDBIt,
  _SDBSI,
  _SFS,
  _SQEF,
  _STn,
  _T,
  _TCAZ,
  _TDBSI,
  DBInstance,
  n0,
  TagList,
} from "./schemas_0";
import { DBCluster } from "./schemas_18_Cluster";
import { DBSnapshot } from "./schemas_70_Snapshot";
import { DBClusterSnapshot } from "./schemas_73_DBCluster";

/* eslint no-var: 0 */

export var CopyDBSnapshotMessage = struct(
  n0,
  _CDBSM,
  0,
  [_SDBSI, _TDBSI, _KKI, _T, _CTo, _PSU, _OGN, _TCAZ, _COG, _SAZ, _STn],
  [0, 0, 0, [() => TagList, 0], 2, 0, 0, 0, 2, 0, 0]
);
export var CopyDBSnapshotResult = struct(n0, _CDBSR, 0, [_DBS], [[() => DBSnapshot, 0]]);
export var CreateDBClusterSnapshotMessage = struct(n0, _CDBCSMr, 0, [_DBCSI, _DBCI, _T], [0, 0, [() => TagList, 0]]);
export var CreateDBClusterSnapshotResult = struct(n0, _CDBCSRr, 0, [_DBCS], [[() => DBClusterSnapshot, 0]]);
export var CreateDBSnapshotMessage = struct(n0, _CDBSMr, 0, [_DBSIn, _DBII, _T], [0, 0, [() => TagList, 0]]);
export var CreateDBSnapshotResult = struct(n0, _CDBSRr, 0, [_DBS], [[() => DBSnapshot, 0]]);
export var CustomAvailabilityZoneNotFoundFault = error(
  n0,
  _CAZNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`CustomAvailabilityZoneNotFound`, 404],
  },
  [_m],
  [0],

  __CustomAvailabilityZoneNotFoundFault
);
export var DBClusterAutomatedBackupQuotaExceededFault = error(
  n0,
  _DBCABQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DBClusterAutomatedBackupQuotaExceededFault`, 400],
  },
  [_m],
  [0],

  __DBClusterAutomatedBackupQuotaExceededFault
);
export var DBClusterSnapshotAlreadyExistsFault = error(
  n0,
  _DBCSAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DBClusterSnapshotAlreadyExistsFault`, 400],
  },
  [_m],
  [0],

  __DBClusterSnapshotAlreadyExistsFault
);
export var DBSnapshotAlreadyExistsFault = error(
  n0,
  _DBSAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DBSnapshotAlreadyExists`, 400],
  },
  [_m],
  [0],

  __DBSnapshotAlreadyExistsFault
);
export var DeleteDBClusterMessage = struct(n0, _DDBCM, 0, [_DBCI, _SFS, _FDBSI, _DAB], [0, 2, 0, 2]);
export var DeleteDBClusterResult = struct(n0, _DDBCR, 0, [_DBC], [[() => DBCluster, 0]]);
export var DeleteDBInstanceMessage = struct(n0, _DDBIM, 0, [_DBII, _SFS, _FDBSI, _DAB], [0, 2, 0, 2]);
export var DeleteDBInstanceResult = struct(n0, _DDBIR, 0, [_DBI], [[() => DBInstance, 0]]);
export var SnapshotQuotaExceededFault = error(
  n0,
  _SQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SnapshotQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __SnapshotQuotaExceededFault
);
export var StopDBInstanceMessage = struct(n0, _SDBIMt, 0, [_DBII, _DBSIn], [0, 0]);
export var StopDBInstanceResult = struct(n0, _SDBIRt, 0, [_DBI], [[() => DBInstance, 0]]);
export var CopyDBSnapshot = op(
  n0,
  _CDBS,
  0,
  () => CopyDBSnapshotMessage,
  () => CopyDBSnapshotResult
);
export var CreateDBClusterSnapshot = op(
  n0,
  _CDBCSr,
  0,
  () => CreateDBClusterSnapshotMessage,
  () => CreateDBClusterSnapshotResult
);
export var CreateDBSnapshot = op(
  n0,
  _CDBSr,
  0,
  () => CreateDBSnapshotMessage,
  () => CreateDBSnapshotResult
);
export var DeleteDBCluster = op(
  n0,
  _DDBC,
  0,
  () => DeleteDBClusterMessage,
  () => DeleteDBClusterResult
);
export var DeleteDBInstance = op(
  n0,
  _DDBI,
  0,
  () => DeleteDBInstanceMessage,
  () => DeleteDBInstanceResult
);
export var StopDBInstance = op(
  n0,
  _SDBIt,
  0,
  () => StopDBInstanceMessage,
  () => StopDBInstanceResult
);
