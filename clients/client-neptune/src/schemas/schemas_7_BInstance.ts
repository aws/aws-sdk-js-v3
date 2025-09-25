// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  AuthorizationNotFoundFault as __AuthorizationNotFoundFault,
  DBInstanceAlreadyExistsFault as __DBInstanceAlreadyExistsFault,
  DBSecurityGroupNotFoundFault as __DBSecurityGroupNotFoundFault,
  DomainNotFoundFault as __DomainNotFoundFault,
  InstanceQuotaExceededFault as __InstanceQuotaExceededFault,
  InsufficientDBInstanceCapacityFault as __InsufficientDBInstanceCapacityFault,
  ProvisionedIopsNotAvailableInAZFault as __ProvisionedIopsNotAvailableInAZFault,
} from "../models/index";
import {
  _A,
  _AMVU,
  _ANFF,
  _aQE,
  _AS,
  _AZ,
  _AZv,
  _BRP,
  _c,
  _CACI,
  _CCT,
  _CDBCS,
  _CDBCSM,
  _CDBCSMr,
  _CDBCSR,
  _CDBCSr,
  _CDBCSRr,
  _CDBI,
  _CDBIM,
  _CDBIR,
  _CSN,
  _CT,
  _CTTS,
  _DBCI,
  _DBCS,
  _DBCSA,
  _DBCSI,
  _DBCSL,
  _DBCSl,
  _DBCSM,
  _DBI,
  _DBIA,
  _DBIAEF,
  _DBIC,
  _DBII,
  _DBIS,
  _DBISI,
  _DBISIL,
  _DBN,
  _DBPG,
  _DBPGa,
  _DBPGN,
  _DBPGS,
  _DBPGSL,
  _DBSG,
  _DBSGe,
  _DBSGM,
  _DBSGML,
  _DBSGN,
  _DBSGNe,
  _DBSGNFF,
  _DBSGNL,
  _DBSGu,
  _DDBCS,
  _DDBCSe,
  _DDBCSM,
  _DDBCSMe,
  _DDBCSR,
  _DIAMRN,
  _DIP,
  _DM,
  _DML,
  _DMo,
  _DNFF,
  _Do,
  _DP,
  _DRI,
  _E,
  _e,
  _ECLE,
  _ECLEn,
  _EIAMDA,
  _EMRA,
  _En,
  _EPI,
  _EV,
  _F,
  _FQDN,
  _hE,
  _HZI,
  _I,
  _IAMDAE,
  _IAMRN,
  _ICT,
  _IDBICF,
  _IP,
  _IQEF,
  _IS,
  _KKI,
  _LM,
  _LRT,
  _M,
  _m,
  _MAZ,
  _Me,
  _MI,
  _MR,
  _MRA,
  _MU,
  _MUP,
  _No,
  _OGM,
  _OGML,
  _OGMp,
  _OGN,
  _P,
  _PA,
  _PAS,
  _PBW,
  _PCLE,
  _PIE,
  _PIKMSKI,
  _PINAIAZF,
  _PMV,
  _PMW,
  _PP,
  _PSU,
  _PT,
  _RRDBCI,
  _RRDBCIe,
  _RRDBCIL,
  _RRDBII,
  _RRDBIIe,
  _RRDBIIL,
  _RRSDBII,
  _S,
  _SAZ,
  _SCT,
  _SDBCSA,
  _SDBCSI,
  _SE,
  _SIt,
  _SS,
  _ST,
  _STn,
  _STt,
  _T,
  _TCA,
  _TCP,
  _TDBCSI,
  _Ti,
  _VI,
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
import { DBSubnetGroup } from "./schemas_11_BInstance";
import { VpcSecurityGroupIdList } from "./schemas_12_Cluster";

/* eslint no-var: 0 */

export var SensitiveString = sim(n0, _SS, 0, 8);
export var AuthorizationNotFoundFault = error(
  n0,
  _ANFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`AuthorizationNotFound`, 404],
  },
  [_m],
  [0],

  __AuthorizationNotFoundFault
);
export var CopyDBClusterSnapshotMessage = struct(
  n0,
  _CDBCSM,
  0,
  [_SDBCSI, _TDBCSI, _KKI, _PSU, _CT, _T],
  [0, 0, 0, 0, 2, [() => TagList, 0]]
);
export var CopyDBClusterSnapshotResult = struct(n0, _CDBCSR, 0, [_DBCS], [[() => DBClusterSnapshot, 0]]);
export var CreateDBClusterSnapshotMessage = struct(n0, _CDBCSMr, 0, [_DBCSI, _DBCI, _T], [0, 0, [() => TagList, 0]]);
export var CreateDBClusterSnapshotResult = struct(n0, _CDBCSRr, 0, [_DBCS], [[() => DBClusterSnapshot, 0]]);
export var CreateDBInstanceMessage = struct(
  n0,
  _CDBIM,
  0,
  [
    _DBN,
    _DBII,
    _AS,
    _DBIC,
    _En,
    _MU,
    _MUP,
    _DBSG,
    _VSGI,
    _AZ,
    _DBSGN,
    _PMW,
    _DBPGN,
    _BRP,
    _PBW,
    _P,
    _MAZ,
    _EV,
    _AMVU,
    _LM,
    _I,
    _OGN,
    _CSN,
    _PA,
    _T,
    _DBCI,
    _ST,
    _TCA,
    _TCP,
    _SE,
    _KKI,
    _Do,
    _CTTS,
    _MI,
    _MRA,
    _DIAMRN,
    _PT,
    _Ti,
    _EIAMDA,
    _EPI,
    _PIKMSKI,
    _ECLE,
    _DP,
  ],
  [
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    [() => DBSecurityGroupNameList, 0],
    [() => VpcSecurityGroupIdList, 0],
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    2,
    0,
    2,
    0,
    1,
    0,
    0,
    2,
    [() => TagList, 0],
    0,
    0,
    0,
    [() => SensitiveString, 0],
    2,
    0,
    0,
    2,
    1,
    0,
    0,
    1,
    0,
    2,
    2,
    0,
    64 | 0,
    2,
  ]
);
export var CreateDBInstanceResult = struct(n0, _CDBIR, 0, [_DBI], [[() => DBInstance, 0]]);
export var DBClusterSnapshot = struct(
  n0,
  _DBCS,
  0,
  [
    _AZv,
    _DBCSI,
    _DBCI,
    _SCT,
    _En,
    _AS,
    _S,
    _P,
    _VI,
    _CCT,
    _MU,
    _EV,
    _LM,
    _STn,
    _PP,
    _SE,
    _KKI,
    _DBCSA,
    _SDBCSA,
    _IAMDAE,
    _ST,
  ],
  [[() => AvailabilityZones, 0], 0, 0, 4, 0, 1, 0, 1, 0, 4, 0, 0, 0, 0, 1, 2, 0, 0, 0, 2, 0]
);
export var DBClusterSnapshotMessage = struct(n0, _DBCSM, 0, [_M, _DBCSl], [0, [() => DBClusterSnapshotList, 0]]);
export var DBInstance = struct(
  n0,
  _DBI,
  0,
  [
    _DBII,
    _DBIC,
    _En,
    _DBIS,
    _MU,
    _DBN,
    _E,
    _AS,
    _ICT,
    _PBW,
    _BRP,
    _DBSG,
    _VSG,
    _DBPGa,
    _AZ,
    _DBSGu,
    _PMW,
    _PMV,
    _LRT,
    _MAZ,
    _EV,
    _AMVU,
    _RRSDBII,
    _RRDBII,
    _RRDBCI,
    _LM,
    _I,
    _OGM,
    _CSN,
    _SAZ,
    _PA,
    _SIt,
    _ST,
    _TCA,
    _DIP,
    _DBCI,
    _SE,
    _KKI,
    _DRI,
    _CACI,
    _DM,
    _CTTS,
    _MI,
    _EMRA,
    _MRA,
    _PT,
    _DBIA,
    _Ti,
    _IAMDAE,
    _PIE,
    _PIKMSKI,
    _ECLEn,
    _DP,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    () => Endpoint,
    1,
    4,
    0,
    1,
    [() => DBSecurityGroupMembershipList, 0],
    [() => VpcSecurityGroupMembershipList, 0],
    [() => DBParameterGroupStatusList, 0],
    0,
    [() => DBSubnetGroup, 0],
    0,
    () => PendingModifiedValues,
    4,
    2,
    0,
    2,
    0,
    [() => ReadReplicaDBInstanceIdentifierList, 0],
    [() => ReadReplicaDBClusterIdentifierList, 0],
    0,
    1,
    [() => OptionGroupMembershipList, 0],
    0,
    0,
    2,
    [() => DBInstanceStatusInfoList, 0],
    0,
    0,
    1,
    0,
    2,
    0,
    0,
    0,
    [() => DomainMembershipList, 0],
    2,
    1,
    0,
    0,
    1,
    0,
    0,
    2,
    2,
    0,
    64 | 0,
    2,
  ]
);
export var DBInstanceAlreadyExistsFault = error(
  n0,
  _DBIAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DBInstanceAlreadyExists`, 400],
  },
  [_m],
  [0],

  __DBInstanceAlreadyExistsFault
);
export var DBInstanceStatusInfo = struct(n0, _DBISI, 0, [_STt, _No, _S, _Me], [0, 2, 0, 0]);
export var DBParameterGroupStatus = struct(n0, _DBPGS, 0, [_DBPGN, _PAS], [0, 0]);
export var DBSecurityGroupMembership = struct(n0, _DBSGM, 0, [_DBSGNe, _S], [0, 0]);
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
export var DeleteDBClusterSnapshotMessage = struct(n0, _DDBCSM, 0, [_DBCSI], [0]);
export var DeleteDBClusterSnapshotResult = struct(n0, _DDBCSR, 0, [_DBCS], [[() => DBClusterSnapshot, 0]]);
export var DescribeDBClusterSnapshotsMessage = struct(
  n0,
  _DDBCSMe,
  0,
  [_DBCI, _DBCSI, _STn, _F, _MR, _M, _IS, _IP],
  [0, 0, 0, [() => FilterList, 0], 1, 0, 2, 2]
);
export var DomainMembership = struct(n0, _DMo, 0, [_Do, _S, _FQDN, _IAMRN], [0, 0, 0, 0]);
export var DomainNotFoundFault = error(
  n0,
  _DNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`DomainNotFoundFault`, 404],
  },
  [_m],
  [0],

  __DomainNotFoundFault
);
export var Endpoint = struct(n0, _E, 0, [_A, _P, _HZI], [0, 1, 0]);
export var InstanceQuotaExceededFault = error(
  n0,
  _IQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InstanceQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __InstanceQuotaExceededFault
);
export var InsufficientDBInstanceCapacityFault = error(
  n0,
  _IDBICF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InsufficientDBInstanceCapacity`, 400],
  },
  [_m],
  [0],

  __InsufficientDBInstanceCapacityFault
);
export var OptionGroupMembership = struct(n0, _OGMp, 0, [_OGN, _S], [0, 0]);
export var PendingModifiedValues = struct(
  n0,
  _PMV,
  0,
  [_DBIC, _AS, _MUP, _P, _BRP, _MAZ, _EV, _LM, _I, _DBII, _ST, _CACI, _DBSGN, _PCLE],
  [0, 1, 0, 1, 1, 2, 0, 0, 1, 0, 0, 0, 0, () => PendingCloudwatchLogsExports]
);
export var ProvisionedIopsNotAvailableInAZFault = error(
  n0,
  _PINAIAZF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ProvisionedIopsNotAvailableInAZFault`, 400],
  },
  [_m],
  [0],

  __ProvisionedIopsNotAvailableInAZFault
);
export var DBClusterSnapshotList = list(n0, _DBCSL, 0, [
  () => DBClusterSnapshot,
  {
    [_xN]: _DBCS,
  },
]);
export var DBInstanceStatusInfoList = list(n0, _DBISIL, 0, [
  () => DBInstanceStatusInfo,
  {
    [_xN]: _DBISI,
  },
]);
export var DBParameterGroupStatusList = list(n0, _DBPGSL, 0, [
  () => DBParameterGroupStatus,
  {
    [_xN]: _DBPG,
  },
]);
export var DBSecurityGroupMembershipList = list(n0, _DBSGML, 0, [
  () => DBSecurityGroupMembership,
  {
    [_xN]: _DBSGe,
  },
]);
export var DBSecurityGroupNameList = list(n0, _DBSGNL, 0, [
  0,
  {
    [_xN]: _DBSGNe,
  },
]);
export var DomainMembershipList = list(n0, _DML, 0, [
  () => DomainMembership,
  {
    [_xN]: _DMo,
  },
]);
export var OptionGroupMembershipList = list(n0, _OGML, 0, [
  () => OptionGroupMembership,
  {
    [_xN]: _OGMp,
  },
]);
export var ReadReplicaDBClusterIdentifierList = list(n0, _RRDBCIL, 0, [
  0,
  {
    [_xN]: _RRDBCIe,
  },
]);
export var ReadReplicaDBInstanceIdentifierList = list(n0, _RRDBIIL, 0, [
  0,
  {
    [_xN]: _RRDBIIe,
  },
]);
export var CopyDBClusterSnapshot = op(
  n0,
  _CDBCS,
  0,
  () => CopyDBClusterSnapshotMessage,
  () => CopyDBClusterSnapshotResult
);
export var CreateDBClusterSnapshot = op(
  n0,
  _CDBCSr,
  0,
  () => CreateDBClusterSnapshotMessage,
  () => CreateDBClusterSnapshotResult
);
export var CreateDBInstance = op(
  n0,
  _CDBI,
  0,
  () => CreateDBInstanceMessage,
  () => CreateDBInstanceResult
);
export var DeleteDBClusterSnapshot = op(
  n0,
  _DDBCS,
  0,
  () => DeleteDBClusterSnapshotMessage,
  () => DeleteDBClusterSnapshotResult
);
export var DescribeDBClusterSnapshots = op(
  n0,
  _DDBCSe,
  0,
  () => DescribeDBClusterSnapshotsMessage,
  () => DBClusterSnapshotMessage
);
