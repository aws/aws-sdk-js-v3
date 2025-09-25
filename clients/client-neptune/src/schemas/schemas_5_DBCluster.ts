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
  _aQE,
  _AR,
  _ART,
  _AS,
  _AZ,
  _AZL,
  _AZv,
  _BRP,
  _c,
  _CAC,
  _CCT,
  _CGI,
  _CPMV,
  _CSN,
  _CTTS,
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
  _DBCOG,
  _DBCOGM,
  _DBCOGN,
  _DBCOGS,
  _DBCPG,
  _DBCPGN,
  _DBCPGNFF,
  _DBCPGS,
  _DBCQEF,
  _DBCR,
  _DBCRl,
  _DBIC,
  _DBII,
  _DBSGN,
  _DBSGu,
  _DCRI,
  _DDBC,
  _DDBCe,
  _DDBCM,
  _DDBCMe,
  _DDBCR,
  _DN,
  _DODBIO,
  _DODBIOM,
  _DP,
  _E,
  _e,
  _ECLE,
  _ECLEn,
  _EIAMDA,
  _En,
  _ERT,
  _EV,
  _F,
  _FDBSI,
  _FN,
  _GCI,
  _hE,
  _HZI,
  _I,
  _IAMDAE,
  _ICW,
  _IDBCCF,
  _IDBSSF,
  _IOONAMT,
  _IRF,
  _ISCCF,
  _KKI,
  _LM,
  _LRT,
  _M,
  _m,
  _MAZ,
  _MAZC,
  _MC,
  _MCa,
  _MIPDI,
  _MIPDIa,
  _MIPG,
  _MIPGa,
  _MR,
  _MSS,
  _MSSa,
  _MU,
  _ODBIO,
  _ODBIOL,
  _ODBIOM,
  _ODBIOr,
  _OGN,
  _P,
  _PBW,
  _PCLE,
  _PMV,
  _PMW,
  _PP,
  _PRRDBC,
  _PRRDBCM,
  _PRRDBCR,
  _PT,
  _RA,
  _RDBCFS,
  _RDBCFSM,
  _RDBCFSR,
  _RDBCTPIT,
  _RDBCTPITM,
  _RDBCTPITR,
  _RE,
  _RRC,
  _RRI,
  _RRIe,
  _RRIL,
  _RSI,
  _RT,
  _RTT,
  _S,
  _SDBCI,
  _SE,
  _SEM,
  _SFS,
  _SGD,
  _SIAMDA,
  _SIn,
  _SIup,
  _SPI,
  _SSE,
  _ST,
  _SVSC,
  _SVSCI,
  _T,
  _ULRT,
  _V,
  _VSG,
  _VSGI,
  _xN,
  AvailabilityZones,
  FilterList,
  n0,
  PendingCloudwatchLogsExports,
  TagList,
  VpcSecurityGroupMembershipList,
} from "./schemas_0";
import { AvailabilityZone } from "./schemas_11_BInstance";
import { VpcSecurityGroupIdList } from "./schemas_12_Cluster";

/* eslint no-var: 0 */

export var ClusterPendingModifiedValues = struct(
  n0,
  _CPMV,
  0,
  [_PCLE, _DBCI, _IAMDAE, _EV, _BRP, _ST, _AS, _I],
  [() => PendingCloudwatchLogsExports, 0, 2, 0, 1, 0, 1, 1]
);
export var DBCluster = struct(
  n0,
  _DBC,
  0,
  [
    _AS,
    _AZv,
    _BRP,
    _CSN,
    _DN,
    _DBCI,
    _DBCPG,
    _DBSGu,
    _S,
    _PP,
    _ERT,
    _E,
    _RE,
    _MAZ,
    _En,
    _EV,
    _LRT,
    _P,
    _MU,
    _DBCOGM,
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
    _IAMDAE,
    _CGI,
    _CCT,
    _CTTS,
    _ECLEn,
    _PMV,
    _DP,
    _CAC,
    _ART,
    _SVSC,
    _GCI,
    _IOONAMT,
    _ST,
  ],
  [
    1,
    [() => AvailabilityZones, 0],
    1,
    0,
    0,
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
    [() => DBClusterOptionGroupMemberships, 0],
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
    2,
    0,
    4,
    2,
    64 | 0,
    () => ClusterPendingModifiedValues,
    2,
    2,
    4,
    () => ServerlessV2ScalingConfigurationInfo,
    0,
    4,
    0,
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
export var DBClusterOptionGroupStatus = struct(n0, _DBCOGS, 0, [_DBCOGN, _S], [0, 0]);
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
export var DBClusterRole = struct(n0, _DBCR, 0, [_RA, _S, _FN], [0, 0, 0]);
export var DeleteDBClusterMessage = struct(n0, _DDBCM, 0, [_DBCI, _SFS, _FDBSI], [0, 2, 0]);
export var DeleteDBClusterResult = struct(n0, _DDBCR, 0, [_DBC], [[() => DBCluster, 0]]);
export var DescribeDBClustersMessage = struct(n0, _DDBCMe, 0, [_DBCI, _F, _MR, _M], [0, [() => FilterList, 0], 1, 0]);
export var DescribeOrderableDBInstanceOptionsMessage = struct(
  n0,
  _DODBIOM,
  0,
  [_En, _EV, _DBIC, _LM, _V, _F, _MR, _M],
  [0, 0, 0, 0, 2, [() => FilterList, 0], 1, 0]
);
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
export var OrderableDBInstanceOption = struct(
  n0,
  _ODBIO,
  0,
  [
    _En,
    _EV,
    _DBIC,
    _LM,
    _AZv,
    _MAZC,
    _RRC,
    _V,
    _SSE,
    _ST,
    _SIup,
    _SEM,
    _SIAMDA,
    _SPI,
    _MSS,
    _MSSa,
    _MIPDI,
    _MIPDIa,
    _MIPG,
    _MIPGa,
    _SGD,
  ],
  [0, 0, 0, 0, [() => AvailabilityZoneList, 0], 2, 2, 2, 2, 0, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2]
);
export var OrderableDBInstanceOptionsMessage = struct(
  n0,
  _ODBIOM,
  0,
  [_ODBIOr, _M],
  [[() => OrderableDBInstanceOptionsList, 0], 0]
);
export var PromoteReadReplicaDBClusterMessage = struct(n0, _PRRDBCM, 0, [_DBCI], [0]);
export var PromoteReadReplicaDBClusterResult = struct(n0, _PRRDBCR, 0, [_DBC], [[() => DBCluster, 0]]);
export var RestoreDBClusterFromSnapshotMessage = struct(
  n0,
  _RDBCFSM,
  0,
  [
    _AZv,
    _DBCI,
    _SIn,
    _En,
    _EV,
    _P,
    _DBSGN,
    _DN,
    _OGN,
    _VSGI,
    _T,
    _KKI,
    _EIAMDA,
    _ECLE,
    _DBCPGN,
    _DP,
    _CTTS,
    _SVSC,
    _ST,
  ],
  [
    [() => AvailabilityZones, 0],
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    [() => VpcSecurityGroupIdList, 0],
    [() => TagList, 0],
    0,
    2,
    64 | 0,
    0,
    2,
    2,
    () => ServerlessV2ScalingConfiguration,
    0,
  ]
);
export var RestoreDBClusterFromSnapshotResult = struct(n0, _RDBCFSR, 0, [_DBC], [[() => DBCluster, 0]]);
export var RestoreDBClusterToPointInTimeMessage = struct(
  n0,
  _RDBCTPITM,
  0,
  [_DBCI, _RT, _SDBCI, _RTT, _ULRT, _P, _DBSGN, _OGN, _VSGI, _T, _KKI, _EIAMDA, _ECLE, _DBCPGN, _DP, _SVSC, _ST],
  [
    0,
    0,
    0,
    4,
    2,
    1,
    0,
    0,
    [() => VpcSecurityGroupIdList, 0],
    [() => TagList, 0],
    0,
    2,
    64 | 0,
    0,
    2,
    () => ServerlessV2ScalingConfiguration,
    0,
  ]
);
export var RestoreDBClusterToPointInTimeResult = struct(n0, _RDBCTPITR, 0, [_DBC], [[() => DBCluster, 0]]);
export var ServerlessV2ScalingConfiguration = struct(n0, _SVSC, 0, [_MC, _MCa], [1, 1]);
export var ServerlessV2ScalingConfigurationInfo = struct(n0, _SVSCI, 0, [_MC, _MCa], [1, 1]);
export var AvailabilityZoneList = list(n0, _AZL, 0, [
  () => AvailabilityZone,
  {
    [_xN]: _AZ,
  },
]);
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
export var DBClusterOptionGroupMemberships = list(n0, _DBCOGM, 0, [
  () => DBClusterOptionGroupStatus,
  {
    [_xN]: _DBCOG,
  },
]);
export var DBClusterRoles = list(n0, _DBCRl, 0, [
  () => DBClusterRole,
  {
    [_xN]: _DBCR,
  },
]);
export var OrderableDBInstanceOptionsList = list(n0, _ODBIOL, 0, [
  () => OrderableDBInstanceOption,
  {
    [_xN]: _ODBIO,
  },
]);
export var ReadReplicaIdentifierList = list(n0, _RRIL, 0, [
  0,
  {
    [_xN]: _RRIe,
  },
]);
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
export var DescribeOrderableDBInstanceOptions = op(
  n0,
  _DODBIO,
  0,
  () => DescribeOrderableDBInstanceOptionsMessage,
  () => OrderableDBInstanceOptionsMessage
);
export var PromoteReadReplicaDBCluster = op(
  n0,
  _PRRDBC,
  0,
  () => PromoteReadReplicaDBClusterMessage,
  () => PromoteReadReplicaDBClusterResult
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
