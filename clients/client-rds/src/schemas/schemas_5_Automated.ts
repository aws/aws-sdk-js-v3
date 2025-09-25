// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidDBClusterAutomatedBackupStateFault as __InvalidDBClusterAutomatedBackupStateFault,
  InvalidDBInstanceAutomatedBackupStateFault as __InvalidDBInstanceAutomatedBackupStateFault,
} from "../models/index";
import {
  _ABRPA,
  _aQE,
  _AS,
  _AZ,
  _AZv,
  _BRP,
  _BTa,
  _c,
  _CCT,
  _DBCA,
  _DBCAB,
  _DBCABA,
  _DBCABL,
  _DBCABl,
  _DBCABM,
  _DBCI,
  _DBIA,
  _DBIAB,
  _DBIABA,
  _DBIABL,
  _DBIABM,
  _DBIABn,
  _DBIABR,
  _DBII,
  _DCRI,
  _DDBCAB,
  _DDBCABe,
  _DDBCABM,
  _DDBCABMe,
  _DDBCABR,
  _DDBIAB,
  _DDBIABe,
  _DDBIABM,
  _DDBIABMe,
  _DDBIABR,
  _DLV,
  _DRI,
  _E,
  _e,
  _EMn,
  _Enc,
  _ETa,
  _EV,
  _Fi,
  _hE,
  _I,
  _IAMDAE,
  _ICTn,
  _IDBCABSF,
  _IDBIABSF,
  _KKI,
  _LM,
  _LT,
  _m,
  _Ma,
  _MR,
  _MT,
  _MU,
  _OGN,
  _P,
  _R,
  _RW,
  _SDBIA,
  _SDBIABRMt,
  _SDBIABRRt,
  _SDBIABRto,
  _SE,
  _ST,
  _St,
  _STt,
  _TCA,
  _Ti,
  _VI,
  _xN,
  AvailabilityZones,
  DBInstanceAutomatedBackupsReplicationList,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DBClusterAutomatedBackup = struct(
  n0,
  _DBCAB,
  0,
  [
    _E,
    _VI,
    _DBCABA,
    _DBCI,
    _RW,
    _MU,
    _DCRI,
    _R,
    _LM,
    _St,
    _IAMDAE,
    _CCT,
    _SE,
    _AS,
    _EV,
    _DBCA,
    _BRP,
    _EMn,
    _AZv,
    _P,
    _KKI,
    _ST,
    _I,
    _ABRPA,
    _STt,
  ],
  [
    0,
    0,
    0,
    0,
    () => RestoreWindow,
    0,
    0,
    0,
    0,
    0,
    2,
    4,
    2,
    1,
    0,
    0,
    1,
    0,
    [() => AvailabilityZones, 0],
    1,
    0,
    0,
    1,
    0,
    1,
  ]
);
export var DBClusterAutomatedBackupMessage = struct(
  n0,
  _DBCABM,
  0,
  [_Ma, _DBCABl],
  [0, [() => DBClusterAutomatedBackupList, 0]]
);
export var DBInstanceAutomatedBackup = struct(
  n0,
  _DBIAB,
  0,
  [
    _DBIA,
    _DRI,
    _R,
    _DBII,
    _RW,
    _AS,
    _St,
    _P,
    _AZ,
    _VI,
    _ICTn,
    _MU,
    _E,
    _EV,
    _LM,
    _I,
    _OGN,
    _TCA,
    _Enc,
    _ST,
    _KKI,
    _Ti,
    _IAMDAE,
    _BRP,
    _DBIABA,
    _DBIABR,
    _BTa,
    _STt,
    _ABRPA,
    _DLV,
    _MT,
  ],
  [
    0,
    0,
    0,
    0,
    () => RestoreWindow,
    1,
    0,
    1,
    0,
    0,
    4,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    2,
    0,
    0,
    0,
    2,
    1,
    0,
    [() => DBInstanceAutomatedBackupsReplicationList, 0],
    0,
    1,
    0,
    2,
    2,
  ]
);
export var DBInstanceAutomatedBackupMessage = struct(
  n0,
  _DBIABM,
  0,
  [_Ma, _DBIABn],
  [0, [() => DBInstanceAutomatedBackupList, 0]]
);
export var DeleteDBClusterAutomatedBackupMessage = struct(n0, _DDBCABM, 0, [_DCRI], [0]);
export var DeleteDBClusterAutomatedBackupResult = struct(
  n0,
  _DDBCABR,
  0,
  [_DBCAB],
  [[() => DBClusterAutomatedBackup, 0]]
);
export var DeleteDBInstanceAutomatedBackupMessage = struct(n0, _DDBIABM, 0, [_DRI, _DBIABA], [0, 0]);
export var DeleteDBInstanceAutomatedBackupResult = struct(
  n0,
  _DDBIABR,
  0,
  [_DBIAB],
  [[() => DBInstanceAutomatedBackup, 0]]
);
export var DescribeDBClusterAutomatedBackupsMessage = struct(
  n0,
  _DDBCABMe,
  0,
  [_DCRI, _DBCI, _Fi, _MR, _Ma],
  [0, 0, [() => FilterList, 0], 1, 0]
);
export var DescribeDBInstanceAutomatedBackupsMessage = struct(
  n0,
  _DDBIABMe,
  0,
  [_DRI, _DBII, _Fi, _MR, _Ma, _DBIABA],
  [0, 0, [() => FilterList, 0], 1, 0, 0]
);
export var InvalidDBClusterAutomatedBackupStateFault = error(
  n0,
  _IDBCABSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidDBClusterAutomatedBackupStateFault`, 400],
  },
  [_m],
  [0],

  __InvalidDBClusterAutomatedBackupStateFault
);
export var InvalidDBInstanceAutomatedBackupStateFault = error(
  n0,
  _IDBIABSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidDBInstanceAutomatedBackupState`, 400],
  },
  [_m],
  [0],

  __InvalidDBInstanceAutomatedBackupStateFault
);
export var RestoreWindow = struct(n0, _RW, 0, [_ETa, _LT], [4, 4]);
export var StopDBInstanceAutomatedBackupsReplicationMessage = struct(n0, _SDBIABRMt, 0, [_SDBIA], [0]);
export var StopDBInstanceAutomatedBackupsReplicationResult = struct(
  n0,
  _SDBIABRRt,
  0,
  [_DBIAB],
  [[() => DBInstanceAutomatedBackup, 0]]
);
export var DBClusterAutomatedBackupList = list(n0, _DBCABL, 0, [
  () => DBClusterAutomatedBackup,
  {
    [_xN]: _DBCAB,
  },
]);
export var DBInstanceAutomatedBackupList = list(n0, _DBIABL, 0, [
  () => DBInstanceAutomatedBackup,
  {
    [_xN]: _DBIAB,
  },
]);
export var DeleteDBClusterAutomatedBackup = op(
  n0,
  _DDBCAB,
  0,
  () => DeleteDBClusterAutomatedBackupMessage,
  () => DeleteDBClusterAutomatedBackupResult
);
export var DeleteDBInstanceAutomatedBackup = op(
  n0,
  _DDBIAB,
  0,
  () => DeleteDBInstanceAutomatedBackupMessage,
  () => DeleteDBInstanceAutomatedBackupResult
);
export var DescribeDBClusterAutomatedBackups = op(
  n0,
  _DDBCABe,
  0,
  () => DescribeDBClusterAutomatedBackupsMessage,
  () => DBClusterAutomatedBackupMessage
);
export var DescribeDBInstanceAutomatedBackups = op(
  n0,
  _DDBIABe,
  0,
  () => DescribeDBInstanceAutomatedBackupsMessage,
  () => DBInstanceAutomatedBackupMessage
);
export var StopDBInstanceAutomatedBackupsReplication = op(
  n0,
  _SDBIABRto,
  0,
  () => StopDBInstanceAutomatedBackupsReplicationMessage,
  () => StopDBInstanceAutomatedBackupsReplicationResult
);
