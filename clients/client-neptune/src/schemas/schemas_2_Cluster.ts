// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  CertificateNotFoundFault as __CertificateNotFoundFault,
  DBClusterEndpointAlreadyExistsFault as __DBClusterEndpointAlreadyExistsFault,
  DBClusterEndpointQuotaExceededFault as __DBClusterEndpointQuotaExceededFault,
  DBSnapshotAlreadyExistsFault as __DBSnapshotAlreadyExistsFault,
  DBUpgradeDependencyFailureFault as __DBUpgradeDependencyFailureFault,
  InvalidDBInstanceStateFault as __InvalidDBInstanceStateFault,
  InvalidDBSecurityGroupStateFault as __InvalidDBSecurityGroupStateFault,
} from "../models/index";
import {
  _AI,
  _AMVU,
  _AMVUl,
  _aQE,
  _AS,
  _AZv,
  _BRP,
  _c,
  _CACI,
  _CDBC,
  _CDBCE,
  _CDBCEM,
  _CDBCEO,
  _CDBCM,
  _CDBCR,
  _CET,
  _CLEC,
  _CNFF,
  _CSN,
  _CTTS,
  _DBC,
  _DBCEA,
  _DBCEAEF,
  _DBCEI,
  _DBCEQEF,
  _DBCERI,
  _DBCI,
  _DBCPGN,
  _DBI,
  _DBIC,
  _DBII,
  _DBIPGN,
  _DBPGN,
  _DBPN,
  _DBSAEF,
  _DBSG,
  _DBSGN,
  _DBUDFF,
  _DDBI,
  _DDBIM,
  _DDBIR,
  _DIAMRN,
  _DLT,
  _DN,
  _Do,
  _DP,
  _DR,
  _DRL,
  _DVDBIM,
  _DVDBIMM,
  _DVDBIMR,
  _E,
  _e,
  _ECLE,
  _EIAMDA,
  _ELT,
  _EM,
  _En,
  _EPI,
  _ET,
  _EV,
  _FDBC,
  _FDBCM,
  _FDBCR,
  _FDBSI,
  _FF,
  _Fr,
  _GCI,
  _hE,
  _I,
  _IDBISF,
  _IDBSGSF,
  _ITSR,
  _KKI,
  _LM,
  _m,
  _MAZ,
  _MDBC,
  _MDBCE,
  _MDBCEM,
  _MDBCEO,
  _MDBCM,
  _MDBCR,
  _MDBI,
  _MDBIM,
  _MDBIR,
  _MI,
  _MRA,
  _MU,
  _MUP,
  _NDBCI,
  _NDBII,
  _OGN,
  _P,
  _PA,
  _PBW,
  _PI,
  _PIKMSKI,
  _PMW,
  _PSU,
  _PT,
  _Ra,
  _RDBI,
  _RDBIM,
  _RDBIR,
  _RL,
  _RSI,
  _S,
  _SDBC,
  _SDBCM,
  _SDBCMt,
  _SDBCR,
  _SDBCRt,
  _SDBCt,
  _SE,
  _SFS,
  _SM,
  _SSt,
  _ST,
  _St,
  _Sto,
  _SVSC,
  _T,
  _TCA,
  _TCP,
  _TDBII,
  _To,
  _VDBIMM,
  _VSGI,
  _VSO,
  _VSOL,
  _xN,
  AvailabilityZones,
  n0,
  TagList,
} from "./schemas_0";
import { DBCluster, ServerlessV2ScalingConfiguration } from "./schemas_5_DBCluster";
import { DBInstance, DBSecurityGroupNameList, SensitiveString } from "./schemas_7_BInstance";
import { VpcSecurityGroupIdList } from "./schemas_12_Cluster";

/* eslint no-var: 0 */

export var CertificateNotFoundFault = error(
  n0,
  _CNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`CertificateNotFound`, 404],
  },
  [_m],
  [0],

  __CertificateNotFoundFault
);
export var CloudwatchLogsExportConfiguration = struct(n0, _CLEC, 0, [_ELT, _DLT], [64 | 0, 64 | 0]);
export var CreateDBClusterEndpointMessage = struct(
  n0,
  _CDBCEM,
  0,
  [_DBCI, _DBCEI, _ET, _SM, _EM, _T],
  [0, 0, 0, 64 | 0, 64 | 0, [() => TagList, 0]]
);
export var CreateDBClusterEndpointOutput = struct(
  n0,
  _CDBCEO,
  0,
  [_DBCEI, _DBCI, _DBCERI, _E, _S, _ET, _CET, _SM, _EM, _DBCEA],
  [0, 0, 0, 0, 0, 0, 0, 64 | 0, 64 | 0, 0]
);
export var CreateDBClusterMessage = struct(
  n0,
  _CDBCM,
  0,
  [
    _AZv,
    _BRP,
    _CSN,
    _CTTS,
    _DN,
    _DBCI,
    _DBCPGN,
    _VSGI,
    _DBSGN,
    _En,
    _EV,
    _P,
    _MU,
    _MUP,
    _OGN,
    _PBW,
    _PMW,
    _RSI,
    _T,
    _SE,
    _KKI,
    _PSU,
    _EIAMDA,
    _ECLE,
    _DP,
    _SVSC,
    _GCI,
    _ST,
  ],
  [
    [() => AvailabilityZones, 0],
    1,
    0,
    2,
    0,
    0,
    0,
    [() => VpcSecurityGroupIdList, 0],
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    [() => TagList, 0],
    2,
    0,
    0,
    2,
    64 | 0,
    2,
    () => ServerlessV2ScalingConfiguration,
    0,
    0,
  ]
);
export var CreateDBClusterResult = struct(n0, _CDBCR, 0, [_DBC], [[() => DBCluster, 0]]);
export var DBClusterEndpointAlreadyExistsFault = error(
  n0,
  _DBCEAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DBClusterEndpointAlreadyExistsFault`, 400],
  },
  [_m],
  [0],

  __DBClusterEndpointAlreadyExistsFault
);
export var DBClusterEndpointQuotaExceededFault = error(
  n0,
  _DBCEQEF,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`DBClusterEndpointQuotaExceededFault`, 403],
  },
  [_m],
  [0],

  __DBClusterEndpointQuotaExceededFault
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
export var DBUpgradeDependencyFailureFault = error(
  n0,
  _DBUDFF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DBUpgradeDependencyFailure`, 400],
  },
  [_m],
  [0],

  __DBUpgradeDependencyFailureFault
);
export var DeleteDBInstanceMessage = struct(n0, _DDBIM, 0, [_DBII, _SFS, _FDBSI], [0, 2, 0]);
export var DeleteDBInstanceResult = struct(n0, _DDBIR, 0, [_DBI], [[() => DBInstance, 0]]);
export var DescribeValidDBInstanceModificationsMessage = struct(n0, _DVDBIMM, 0, [_DBII], [0]);
export var DescribeValidDBInstanceModificationsResult = struct(
  n0,
  _DVDBIMR,
  0,
  [_VDBIMM],
  [[() => ValidDBInstanceModificationsMessage, 0]]
);
export var DoubleRange = struct(n0, _DR, 0, [_Fr, _To], [1, 1]);
export var FailoverDBClusterMessage = struct(n0, _FDBCM, 0, [_DBCI, _TDBII], [0, 0]);
export var FailoverDBClusterResult = struct(n0, _FDBCR, 0, [_DBC], [[() => DBCluster, 0]]);
export var InvalidDBInstanceStateFault = error(
  n0,
  _IDBISF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidDBInstanceState`, 400],
  },
  [_m],
  [0],

  __InvalidDBInstanceStateFault
);
export var InvalidDBSecurityGroupStateFault = error(
  n0,
  _IDBSGSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidDBSecurityGroupState`, 400],
  },
  [_m],
  [0],

  __InvalidDBSecurityGroupStateFault
);
export var ModifyDBClusterEndpointMessage = struct(n0, _MDBCEM, 0, [_DBCEI, _ET, _SM, _EM], [0, 0, 64 | 0, 64 | 0]);
export var ModifyDBClusterEndpointOutput = struct(
  n0,
  _MDBCEO,
  0,
  [_DBCEI, _DBCI, _DBCERI, _E, _S, _ET, _CET, _SM, _EM, _DBCEA],
  [0, 0, 0, 0, 0, 0, 0, 64 | 0, 64 | 0, 0]
);
export var ModifyDBClusterMessage = struct(
  n0,
  _MDBCM,
  0,
  [
    _DBCI,
    _NDBCI,
    _AI,
    _BRP,
    _DBCPGN,
    _VSGI,
    _P,
    _MUP,
    _OGN,
    _PBW,
    _PMW,
    _EIAMDA,
    _CLEC,
    _EV,
    _AMVUl,
    _DBIPGN,
    _DP,
    _CTTS,
    _SVSC,
    _ST,
  ],
  [
    0,
    0,
    2,
    1,
    0,
    [() => VpcSecurityGroupIdList, 0],
    1,
    0,
    0,
    0,
    0,
    2,
    () => CloudwatchLogsExportConfiguration,
    0,
    2,
    0,
    2,
    2,
    () => ServerlessV2ScalingConfiguration,
    0,
  ]
);
export var ModifyDBClusterResult = struct(n0, _MDBCR, 0, [_DBC], [[() => DBCluster, 0]]);
export var ModifyDBInstanceMessage = struct(
  n0,
  _MDBIM,
  0,
  [
    _DBII,
    _AS,
    _DBIC,
    _DBSGN,
    _DBSG,
    _VSGI,
    _AI,
    _MUP,
    _DBPGN,
    _BRP,
    _PBW,
    _PMW,
    _MAZ,
    _EV,
    _AMVUl,
    _AMVU,
    _LM,
    _I,
    _OGN,
    _NDBII,
    _ST,
    _TCA,
    _TCP,
    _CACI,
    _Do,
    _CTTS,
    _MI,
    _DBPN,
    _PA,
    _MRA,
    _DIAMRN,
    _PT,
    _EIAMDA,
    _EPI,
    _PIKMSKI,
    _CLEC,
    _DP,
  ],
  [
    0,
    1,
    0,
    0,
    [() => DBSecurityGroupNameList, 0],
    [() => VpcSecurityGroupIdList, 0],
    2,
    0,
    0,
    1,
    0,
    0,
    2,
    0,
    2,
    2,
    0,
    1,
    0,
    0,
    0,
    0,
    [() => SensitiveString, 0],
    0,
    0,
    2,
    1,
    1,
    2,
    0,
    0,
    1,
    2,
    2,
    0,
    () => CloudwatchLogsExportConfiguration,
    2,
  ]
);
export var ModifyDBInstanceResult = struct(n0, _MDBIR, 0, [_DBI], [[() => DBInstance, 0]]);
export var Range = struct(n0, _Ra, 0, [_Fr, _To, _St], [1, 1, 1]);
export var RebootDBInstanceMessage = struct(n0, _RDBIM, 0, [_DBII, _FF], [0, 2]);
export var RebootDBInstanceResult = struct(n0, _RDBIR, 0, [_DBI], [[() => DBInstance, 0]]);
export var StartDBClusterMessage = struct(n0, _SDBCM, 0, [_DBCI], [0]);
export var StartDBClusterResult = struct(n0, _SDBCR, 0, [_DBC], [[() => DBCluster, 0]]);
export var StopDBClusterMessage = struct(n0, _SDBCMt, 0, [_DBCI], [0]);
export var StopDBClusterResult = struct(n0, _SDBCRt, 0, [_DBC], [[() => DBCluster, 0]]);
export var ValidDBInstanceModificationsMessage = struct(n0, _VDBIMM, 0, [_Sto], [[() => ValidStorageOptionsList, 0]]);
export var ValidStorageOptions = struct(
  n0,
  _VSO,
  0,
  [_ST, _SSt, _PI, _ITSR],
  [0, [() => RangeList, 0], [() => RangeList, 0], [() => DoubleRangeList, 0]]
);
export var DoubleRangeList = list(n0, _DRL, 0, [
  () => DoubleRange,
  {
    [_xN]: _DR,
  },
]);
export var RangeList = list(n0, _RL, 0, [
  () => Range,
  {
    [_xN]: _Ra,
  },
]);
export var ValidStorageOptionsList = list(n0, _VSOL, 0, [
  () => ValidStorageOptions,
  {
    [_xN]: _VSO,
  },
]);
export var CreateDBCluster = op(
  n0,
  _CDBC,
  0,
  () => CreateDBClusterMessage,
  () => CreateDBClusterResult
);
export var CreateDBClusterEndpoint = op(
  n0,
  _CDBCE,
  0,
  () => CreateDBClusterEndpointMessage,
  () => CreateDBClusterEndpointOutput
);
export var DeleteDBInstance = op(
  n0,
  _DDBI,
  0,
  () => DeleteDBInstanceMessage,
  () => DeleteDBInstanceResult
);
export var DescribeValidDBInstanceModifications = op(
  n0,
  _DVDBIM,
  0,
  () => DescribeValidDBInstanceModificationsMessage,
  () => DescribeValidDBInstanceModificationsResult
);
export var FailoverDBCluster = op(
  n0,
  _FDBC,
  0,
  () => FailoverDBClusterMessage,
  () => FailoverDBClusterResult
);
export var ModifyDBCluster = op(
  n0,
  _MDBC,
  0,
  () => ModifyDBClusterMessage,
  () => ModifyDBClusterResult
);
export var ModifyDBClusterEndpoint = op(
  n0,
  _MDBCE,
  0,
  () => ModifyDBClusterEndpointMessage,
  () => ModifyDBClusterEndpointOutput
);
export var ModifyDBInstance = op(
  n0,
  _MDBI,
  0,
  () => ModifyDBInstanceMessage,
  () => ModifyDBInstanceResult
);
export var RebootDBInstance = op(
  n0,
  _RDBI,
  0,
  () => RebootDBInstanceMessage,
  () => RebootDBInstanceResult
);
export var StartDBCluster = op(
  n0,
  _SDBC,
  0,
  () => StartDBClusterMessage,
  () => StartDBClusterResult
);
export var StopDBCluster = op(
  n0,
  _SDBCt,
  0,
  () => StopDBClusterMessage,
  () => StopDBClusterResult
);
