// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  DBClusterAlreadyExistsFault as __DBClusterAlreadyExistsFault,
  DBClusterParameterGroupNotFoundFault as __DBClusterParameterGroupNotFoundFault,
  DBClusterQuotaExceededFault as __DBClusterQuotaExceededFault,
  InsufficientDBClusterCapacityFault as __InsufficientDBClusterCapacityFault,
  InsufficientStorageClusterCapacityFault as __InsufficientStorageClusterCapacityFault,
  InvalidDBSnapshotStateFault as __InvalidDBSnapshotStateFault,
  InvalidRestoreFault as __InvalidRestoreFault,
} from "../models/index";
import {
  _AI,
  _AMVUl,
  _aQE,
  _AR,
  _AU,
  _AZv,
  _BRP,
  _c,
  _CCT,
  _CDBC,
  _CDBCM,
  _CDBCR,
  _CGI,
  _CLEC,
  _CMUS,
  _D,
  _DBC,
  _DBCA,
  _DBCAEF,
  _DBCI,
  _DBCL,
  _DBCl,
  _DBCM,
  _DBCML,
  _DBCMl,
  _DBCMlu,
  _DBCPG,
  _DBCPGN,
  _DBCPGNFF,
  _DBCPGS,
  _DBCQEF,
  _DBCR,
  _DBCRl,
  _DBED,
  _DBEV,
  _DBEVD,
  _DBEVL,
  _DBEVM,
  _DBEVn,
  _DBII,
  _DBPGF,
  _DBSG,
  _DBSGN,
  _DCRI,
  _DDBC,
  _DDBCe,
  _DDBCM,
  _DDBCMe,
  _DDBCR,
  _DDBEV,
  _DDBEVM,
  _DLT,
  _DO,
  _DP,
  _E,
  _e,
  _ECLE,
  _ECLEn,
  _ELT,
  _ELTx,
  _End,
  _ERT,
  _EV,
  _F,
  _FDBC,
  _FDBCM,
  _FDBCR,
  _FDBSI,
  _GCI,
  _hE,
  _HZI,
  _ICW,
  _IDBCCF,
  _IDBSSF,
  _IMVU,
  _IRF,
  _ISCCF,
  _KKI,
  _LRT,
  _LSCS,
  _LST,
  _M,
  _m,
  _MAZ,
  _MC,
  _MCa,
  _MDBC,
  _MDBCM,
  _MDBCR,
  _MMUP,
  _MR,
  _MU,
  _MUP,
  _MUS,
  _MUSKKI,
  _NDBCI,
  _P,
  _PBW,
  _PMW,
  _PP,
  _PSU,
  _PT,
  _RA,
  _RDBCFS,
  _RDBCFSM,
  _RDBCFSR,
  _RDBCTPIT,
  _RDBCTPITM,
  _RDBCTPITR,
  _RE,
  _RMUP,
  _RRI,
  _RRIe,
  _RRIL,
  _RSI,
  _RT,
  _RTT,
  _S,
  _SA,
  _SCACI,
  _SCRWR,
  _SDBC,
  _SDBCI,
  _SDBCM,
  _SDBCMt,
  _SDBCR,
  _SDBCRt,
  _SDBCt,
  _SE,
  _SFS,
  _SIn,
  _SLETCL,
  _SS,
  _ST,
  _SVFS,
  _SVSC,
  _SVSCI,
  _T,
  _TDBII,
  _ULRT,
  _UT,
  _VSG,
  _VSGI,
  _VSGIL,
  _VSGIp,
  _VUT,
  _VUTL,
  _xN,
  AvailabilityZones,
  FilterList,
  n0,
  VpcSecurityGroupMembershipList,
} from "./schemas_0";
import { TagList } from "./schemas_12_BCluster";

/* eslint no-var: 0 */

export var CloudwatchLogsExportConfiguration = struct(n0, _CLEC, 0, [_ELT, _DLT], [64 | 0, 64 | 0]);
export var ClusterMasterUserSecret = struct(n0, _CMUS, 0, [_SA, _SS, _KKI], [0, 0, 0]);
export var CreateDBClusterMessage = struct(
  n0,
  _CDBCM,
  0,
  [
    _AZv,
    _BRP,
    _DBCI,
    _DBCPGN,
    _VSGI,
    _DBSGN,
    _E,
    _EV,
    _P,
    _MU,
    _MUP,
    _PBW,
    _PMW,
    _T,
    _SE,
    _KKI,
    _PSU,
    _ECLE,
    _DP,
    _GCI,
    _ST,
    _SVSC,
    _MMUP,
    _MUSKKI,
  ],
  [
    [() => AvailabilityZones, 0],
    1,
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
    [() => TagList, 0],
    2,
    0,
    0,
    64 | 0,
    2,
    0,
    0,
    () => ServerlessV2ScalingConfiguration,
    2,
    0,
  ]
);
export var CreateDBClusterResult = struct(n0, _CDBCR, 0, [_DBC], [[() => DBCluster, 0]]);
export var DBCluster = struct(
  n0,
  _DBC,
  0,
  [
    _AZv,
    _BRP,
    _DBCI,
    _DBCPG,
    _DBSG,
    _S,
    _PP,
    _ERT,
    _End,
    _RE,
    _MAZ,
    _E,
    _EV,
    _LRT,
    _P,
    _MU,
    _PBW,
    _PMW,
    _RSI,
    _RRI,
    _DBCM,
    _VSG,
    _HZI,
    _SE,
    _KKI,
    _DCRI,
    _DBCA,
    _AR,
    _CGI,
    _CCT,
    _ECLEn,
    _DP,
    _ST,
    _SVSC,
    _MUS,
  ],
  [
    [() => AvailabilityZones, 0],
    1,
    0,
    0,
    0,
    0,
    0,
    4,
    0,
    0,
    2,
    0,
    0,
    4,
    1,
    0,
    0,
    0,
    0,
    [() => ReadReplicaIdentifierList, 0],
    [() => DBClusterMemberList, 0],
    [() => VpcSecurityGroupMembershipList, 0],
    0,
    2,
    0,
    0,
    0,
    [() => DBClusterRoles, 0],
    0,
    4,
    64 | 0,
    2,
    0,
    () => ServerlessV2ScalingConfigurationInfo,
    () => ClusterMasterUserSecret,
  ]
);
export var DBClusterAlreadyExistsFault = error(
  n0,
  _DBCAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DBClusterAlreadyExistsFault`, 400],
  },
  [_m],
  [0],

  __DBClusterAlreadyExistsFault
);
export var DBClusterMember = struct(n0, _DBCMl, 0, [_DBII, _ICW, _DBCPGS, _PT], [0, 2, 0, 1]);
export var DBClusterMessage = struct(n0, _DBCMlu, 0, [_M, _DBCl], [0, [() => DBClusterList, 0]]);
export var DBClusterParameterGroupNotFoundFault = error(
  n0,
  _DBCPGNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`DBClusterParameterGroupNotFound`, 404],
  },
  [_m],
  [0],

  __DBClusterParameterGroupNotFoundFault
);
export var DBClusterQuotaExceededFault = error(
  n0,
  _DBCQEF,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`DBClusterQuotaExceededFault`, 403],
  },
  [_m],
  [0],

  __DBClusterQuotaExceededFault
);
export var DBClusterRole = struct(n0, _DBCR, 0, [_RA, _S], [0, 0]);
export var DBEngineVersion = struct(
  n0,
  _DBEV,
  0,
  [_E, _EV, _DBPGF, _DBED, _DBEVD, _VUT, _ELTx, _SLETCL, _SCACI, _SCRWR, _SVFS],
  [0, 0, 0, 0, 0, [() => ValidUpgradeTargetList, 0], 64 | 0, 2, 64 | 0, 2, () => ServerlessV2FeaturesSupport]
);
export var DBEngineVersionMessage = struct(n0, _DBEVM, 0, [_M, _DBEVn], [0, [() => DBEngineVersionList, 0]]);
export var DeleteDBClusterMessage = struct(n0, _DDBCM, 0, [_DBCI, _SFS, _FDBSI], [0, 2, 0]);
export var DeleteDBClusterResult = struct(n0, _DDBCR, 0, [_DBC], [[() => DBCluster, 0]]);
export var DescribeDBClustersMessage = struct(n0, _DDBCMe, 0, [_DBCI, _F, _MR, _M], [0, [() => FilterList, 0], 1, 0]);
export var DescribeDBEngineVersionsMessage = struct(
  n0,
  _DDBEVM,
  0,
  [_E, _EV, _DBPGF, _F, _MR, _M, _DO, _LSCS, _LST],
  [0, 0, 0, [() => FilterList, 0], 1, 0, 2, 2, 2]
);
export var FailoverDBClusterMessage = struct(n0, _FDBCM, 0, [_DBCI, _TDBII], [0, 0]);
export var FailoverDBClusterResult = struct(n0, _FDBCR, 0, [_DBC], [[() => DBCluster, 0]]);
export var InsufficientDBClusterCapacityFault = error(
  n0,
  _IDBCCF,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`InsufficientDBClusterCapacityFault`, 403],
  },
  [_m],
  [0],

  __InsufficientDBClusterCapacityFault
);
export var InsufficientStorageClusterCapacityFault = error(
  n0,
  _ISCCF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InsufficientStorageClusterCapacity`, 400],
  },
  [_m],
  [0],

  __InsufficientStorageClusterCapacityFault
);
export var InvalidDBSnapshotStateFault = error(
  n0,
  _IDBSSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidDBSnapshotState`, 400],
  },
  [_m],
  [0],

  __InvalidDBSnapshotStateFault
);
export var InvalidRestoreFault = error(
  n0,
  _IRF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidRestoreFault`, 400],
  },
  [_m],
  [0],

  __InvalidRestoreFault
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
    _PBW,
    _PMW,
    _CLEC,
    _EV,
    _AMVUl,
    _DP,
    _ST,
    _SVSC,
    _MMUP,
    _MUSKKI,
    _RMUP,
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
    () => CloudwatchLogsExportConfiguration,
    0,
    2,
    2,
    0,
    () => ServerlessV2ScalingConfiguration,
    2,
    0,
    2,
  ]
);
export var ModifyDBClusterResult = struct(n0, _MDBCR, 0, [_DBC], [[() => DBCluster, 0]]);
export var RestoreDBClusterFromSnapshotMessage = struct(
  n0,
  _RDBCFSM,
  0,
  [_AZv, _DBCI, _SIn, _E, _EV, _P, _DBSGN, _VSGI, _T, _KKI, _ECLE, _DP, _DBCPGN, _SVSC, _ST],
  [
    [() => AvailabilityZones, 0],
    0,
    0,
    0,
    0,
    1,
    0,
    [() => VpcSecurityGroupIdList, 0],
    [() => TagList, 0],
    0,
    64 | 0,
    2,
    0,
    () => ServerlessV2ScalingConfiguration,
    0,
  ]
);
export var RestoreDBClusterFromSnapshotResult = struct(n0, _RDBCFSR, 0, [_DBC], [[() => DBCluster, 0]]);
export var RestoreDBClusterToPointInTimeMessage = struct(
  n0,
  _RDBCTPITM,
  0,
  [_DBCI, _RT, _SDBCI, _RTT, _ULRT, _P, _DBSGN, _VSGI, _T, _KKI, _ECLE, _DP, _SVSC, _ST],
  [
    0,
    0,
    0,
    4,
    2,
    1,
    0,
    [() => VpcSecurityGroupIdList, 0],
    [() => TagList, 0],
    0,
    64 | 0,
    2,
    () => ServerlessV2ScalingConfiguration,
    0,
  ]
);
export var RestoreDBClusterToPointInTimeResult = struct(n0, _RDBCTPITR, 0, [_DBC], [[() => DBCluster, 0]]);
export var ServerlessV2FeaturesSupport = struct(n0, _SVFS, 0, [_MC, _MCa], [1, 1]);
export var ServerlessV2ScalingConfiguration = struct(n0, _SVSC, 0, [_MC, _MCa], [1, 1]);
export var ServerlessV2ScalingConfigurationInfo = struct(n0, _SVSCI, 0, [_MC, _MCa], [1, 1]);
export var StartDBClusterMessage = struct(n0, _SDBCM, 0, [_DBCI], [0]);
export var StartDBClusterResult = struct(n0, _SDBCR, 0, [_DBC], [[() => DBCluster, 0]]);
export var StopDBClusterMessage = struct(n0, _SDBCMt, 0, [_DBCI], [0]);
export var StopDBClusterResult = struct(n0, _SDBCRt, 0, [_DBC], [[() => DBCluster, 0]]);
export var UpgradeTarget = struct(n0, _UT, 0, [_E, _EV, _D, _AU, _IMVU], [0, 0, 0, 2, 2]);
export var CACertificateIdentifiersList = 64 | 0;

export var DBClusterList = list(n0, _DBCL, 0, [
  () => DBCluster,
  {
    [_xN]: _DBC,
  },
]);
export var DBClusterMemberList = list(n0, _DBCML, 0, [
  () => DBClusterMember,
  {
    [_xN]: _DBCMl,
  },
]);
export var DBClusterRoles = list(n0, _DBCRl, 0, [
  () => DBClusterRole,
  {
    [_xN]: _DBCR,
  },
]);
export var DBEngineVersionList = list(n0, _DBEVL, 0, [
  () => DBEngineVersion,
  {
    [_xN]: _DBEV,
  },
]);
export var ReadReplicaIdentifierList = list(n0, _RRIL, 0, [
  0,
  {
    [_xN]: _RRIe,
  },
]);
export var ValidUpgradeTargetList = list(n0, _VUTL, 0, [
  () => UpgradeTarget,
  {
    [_xN]: _UT,
  },
]);
export var VpcSecurityGroupIdList = list(n0, _VSGIL, 0, [
  0,
  {
    [_xN]: _VSGIp,
  },
]);
export var CreateDBCluster = op(
  n0,
  _CDBC,
  0,
  () => CreateDBClusterMessage,
  () => CreateDBClusterResult
);
export var DeleteDBCluster = op(
  n0,
  _DDBC,
  0,
  () => DeleteDBClusterMessage,
  () => DeleteDBClusterResult
);
export var DescribeDBClusters = op(
  n0,
  _DDBCe,
  0,
  () => DescribeDBClustersMessage,
  () => DBClusterMessage
);
export var DescribeDBEngineVersions = op(
  n0,
  _DDBEV,
  0,
  () => DescribeDBEngineVersionsMessage,
  () => DBEngineVersionMessage
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
export var RestoreDBClusterFromSnapshot = op(
  n0,
  _RDBCFS,
  0,
  () => RestoreDBClusterFromSnapshotMessage,
  () => RestoreDBClusterFromSnapshotResult
);
export var RestoreDBClusterToPointInTime = op(
  n0,
  _RDBCTPIT,
  0,
  () => RestoreDBClusterToPointInTimeMessage,
  () => RestoreDBClusterToPointInTimeResult
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
