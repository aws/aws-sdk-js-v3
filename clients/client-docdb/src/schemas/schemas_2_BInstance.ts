// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AuthorizationNotFoundFault as __AuthorizationNotFoundFault,
  DBInstanceAlreadyExistsFault as __DBInstanceAlreadyExistsFault,
  DBSecurityGroupNotFoundFault as __DBSecurityGroupNotFoundFault,
  DBSnapshotAlreadyExistsFault as __DBSnapshotAlreadyExistsFault,
  DBSubnetGroupAlreadyExistsFault as __DBSubnetGroupAlreadyExistsFault,
  DBSubnetGroupQuotaExceededFault as __DBSubnetGroupQuotaExceededFault,
  DBSubnetQuotaExceededFault as __DBSubnetQuotaExceededFault,
  DBUpgradeDependencyFailureFault as __DBUpgradeDependencyFailureFault,
  InstanceQuotaExceededFault as __InstanceQuotaExceededFault,
  InsufficientDBInstanceCapacityFault as __InsufficientDBInstanceCapacityFault,
  StorageTypeNotSupportedFault as __StorageTypeNotSupportedFault,
  SubnetAlreadyInUse as __SubnetAlreadyInUse,
} from "../models/index";
import {
  _A,
  _AI,
  _AMVU,
  _ANFF,
  _aQE,
  _AS,
  _AZ,
  _AZL,
  _AZv,
  _BRP,
  _c,
  _CACI,
  _CAI,
  _CD,
  _CDBI,
  _CDBIM,
  _CDBIR,
  _CDBSG,
  _CDBSGM,
  _CDBSGR,
  _CRR,
  _CTTS,
  _DBCI,
  _DBI,
  _DBIA,
  _DBIAEF,
  _DBIC,
  _DBII,
  _DBIL,
  _DBIM,
  _DBIn,
  _DBIS,
  _DBISI,
  _DBISIL,
  _DBSAEF,
  _DBSG,
  _DBSGA,
  _DBSGAEF,
  _DBSGD,
  _DBSGM,
  _DBSGN,
  _DBSGNFF,
  _DBSGQEF,
  _DBSGu,
  _DBSQEF,
  _DBUDFF,
  _DDBI,
  _DDBIe,
  _DDBIM,
  _DDBIMe,
  _DDBIR,
  _DDBSGe,
  _DDBSGMe,
  _DODBIO,
  _DODBIOM,
  _DRI,
  _E,
  _e,
  _ECLEn,
  _End,
  _EPI,
  _EV,
  _F,
  _FF,
  _hE,
  _HZI,
  _I,
  _ICT,
  _IDBICF,
  _IQEF,
  _KKI,
  _LM,
  _LRT,
  _LTTD,
  _LTTE,
  _M,
  _m,
  _MAZ,
  _MDBI,
  _MDBIM,
  _MDBIR,
  _MDBSG,
  _MDBSGM,
  _MDBSGR,
  _Me,
  _MR,
  _MUP,
  _N,
  _NDBII,
  _No,
  _ODBIO,
  _ODBIOL,
  _ODBIOM,
  _ODBIOr,
  _P,
  _PA,
  _PBW,
  _PCLE,
  _PIE,
  _PIKMSKI,
  _PMV,
  _PMW,
  _PT,
  _RDBI,
  _RDBIM,
  _RDBIR,
  _S,
  _SAIU,
  _SAZ,
  _SE,
  _SGS,
  _SILu,
  _SIt,
  _SIu,
  _SIub,
  _SL,
  _SSu,
  _ST,
  _STNSF,
  _STt,
  _Su,
  _Sub,
  _T,
  _V,
  _VI,
  _VSG,
  _VT,
  _xN,
  FilterList,
  n0,
  VpcSecurityGroupMembershipList,
} from "./schemas_0";
import { TagList } from "./schemas_12_BCluster";

/* eslint no-var: 0 */

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
export var AvailabilityZone = struct(n0, _AZ, 0, [_N], [0]);
export var CertificateDetails = struct(n0, _CD, 0, [_CAI, _VT], [0, 4]);
export var CreateDBInstanceMessage = struct(
  n0,
  _CDBIM,
  0,
  [_DBII, _DBIC, _E, _AZ, _PMW, _AMVU, _T, _DBCI, _CTTS, _PT, _EPI, _PIKMSKI, _CACI],
  [0, 0, 0, 0, 0, 2, [() => TagList, 0], 0, 2, 1, 2, 0, 0]
);
export var CreateDBInstanceResult = struct(n0, _CDBIR, 0, [_DBI], [[() => DBInstance, 0]]);
export var CreateDBSubnetGroupMessage = struct(
  n0,
  _CDBSGM,
  0,
  [_DBSGN, _DBSGD, _SIu, _T],
  [0, 0, [() => SubnetIdentifierList, 0], [() => TagList, 0]]
);
export var CreateDBSubnetGroupResult = struct(n0, _CDBSGR, 0, [_DBSG], [[() => DBSubnetGroup, 0]]);
export var DBInstance = struct(
  n0,
  _DBI,
  0,
  [
    _DBII,
    _DBIC,
    _E,
    _DBIS,
    _End,
    _ICT,
    _PBW,
    _BRP,
    _VSG,
    _AZ,
    _DBSG,
    _PMW,
    _PMV,
    _LRT,
    _EV,
    _AMVU,
    _PA,
    _SIt,
    _DBCI,
    _SE,
    _KKI,
    _DRI,
    _CACI,
    _CTTS,
    _PT,
    _DBIA,
    _ECLEn,
    _CD,
    _PIE,
    _PIKMSKI,
  ],
  [
    0,
    0,
    0,
    0,
    () => Endpoint,
    4,
    0,
    1,
    [() => VpcSecurityGroupMembershipList, 0],
    0,
    [() => DBSubnetGroup, 0],
    0,
    () => PendingModifiedValues,
    4,
    0,
    2,
    2,
    [() => DBInstanceStatusInfoList, 0],
    0,
    2,
    0,
    0,
    0,
    2,
    1,
    0,
    64 | 0,
    () => CertificateDetails,
    2,
    0,
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
export var DBInstanceMessage = struct(n0, _DBIM, 0, [_M, _DBIn], [0, [() => DBInstanceList, 0]]);
export var DBInstanceStatusInfo = struct(n0, _DBISI, 0, [_STt, _No, _S, _Me], [0, 2, 0, 0]);
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
export var DBSubnetGroup = struct(
  n0,
  _DBSG,
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
export var DBSubnetGroupMessage = struct(n0, _DBSGM, 0, [_M, _DBSGu], [0, [() => DBSubnetGroups, 0]]);
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
export var DeleteDBInstanceMessage = struct(n0, _DDBIM, 0, [_DBII], [0]);
export var DeleteDBInstanceResult = struct(n0, _DDBIR, 0, [_DBI], [[() => DBInstance, 0]]);
export var DescribeDBInstancesMessage = struct(n0, _DDBIMe, 0, [_DBII, _F, _MR, _M], [0, [() => FilterList, 0], 1, 0]);
export var DescribeDBSubnetGroupsMessage = struct(
  n0,
  _DDBSGMe,
  0,
  [_DBSGN, _F, _MR, _M],
  [0, [() => FilterList, 0], 1, 0]
);
export var DescribeOrderableDBInstanceOptionsMessage = struct(
  n0,
  _DODBIOM,
  0,
  [_E, _EV, _DBIC, _LM, _V, _F, _MR, _M],
  [0, 0, 0, 0, 2, [() => FilterList, 0], 1, 0]
);
export var Endpoint = struct(n0, _End, 0, [_A, _P, _HZI], [0, 1, 0]);
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
export var ModifyDBInstanceMessage = struct(
  n0,
  _MDBIM,
  0,
  [_DBII, _DBIC, _AI, _PMW, _AMVU, _NDBII, _CACI, _CTTS, _PT, _EPI, _PIKMSKI, _CRR],
  [0, 0, 2, 0, 2, 0, 0, 2, 1, 2, 0, 2]
);
export var ModifyDBInstanceResult = struct(n0, _MDBIR, 0, [_DBI], [[() => DBInstance, 0]]);
export var ModifyDBSubnetGroupMessage = struct(
  n0,
  _MDBSGM,
  0,
  [_DBSGN, _DBSGD, _SIu],
  [0, 0, [() => SubnetIdentifierList, 0]]
);
export var ModifyDBSubnetGroupResult = struct(n0, _MDBSGR, 0, [_DBSG], [[() => DBSubnetGroup, 0]]);
export var OrderableDBInstanceOption = struct(
  n0,
  _ODBIO,
  0,
  [_E, _EV, _DBIC, _LM, _AZv, _V, _ST],
  [0, 0, 0, 0, [() => AvailabilityZoneList, 0], 2, 0]
);
export var OrderableDBInstanceOptionsMessage = struct(
  n0,
  _ODBIOM,
  0,
  [_ODBIOr, _M],
  [[() => OrderableDBInstanceOptionsList, 0], 0]
);
export var PendingCloudwatchLogsExports = struct(n0, _PCLE, 0, [_LTTE, _LTTD], [64 | 0, 64 | 0]);
export var PendingModifiedValues = struct(
  n0,
  _PMV,
  0,
  [_DBIC, _AS, _MUP, _P, _BRP, _MAZ, _EV, _LM, _I, _DBII, _ST, _CACI, _DBSGN, _PCLE],
  [0, 1, 0, 1, 1, 2, 0, 0, 1, 0, 0, 0, 0, () => PendingCloudwatchLogsExports]
);
export var RebootDBInstanceMessage = struct(n0, _RDBIM, 0, [_DBII, _FF], [0, 2]);
export var RebootDBInstanceResult = struct(n0, _RDBIR, 0, [_DBI], [[() => DBInstance, 0]]);
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
export var Subnet = struct(n0, _Sub, 0, [_SIub, _SAZ, _SSu], [0, () => AvailabilityZone, 0]);
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
export var AvailabilityZoneList = list(n0, _AZL, 0, [
  () => AvailabilityZone,
  {
    [_xN]: _AZ,
  },
]);
export var DBInstanceList = list(n0, _DBIL, 0, [
  () => DBInstance,
  {
    [_xN]: _DBI,
  },
]);
export var DBInstanceStatusInfoList = list(n0, _DBISIL, 0, [
  () => DBInstanceStatusInfo,
  {
    [_xN]: _DBISI,
  },
]);
export var DBSubnetGroups = list(n0, _DBSGu, 0, [
  () => DBSubnetGroup,
  {
    [_xN]: _DBSG,
  },
]);
export var OrderableDBInstanceOptionsList = list(n0, _ODBIOL, 0, [
  () => OrderableDBInstanceOption,
  {
    [_xN]: _ODBIO,
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
export var CreateDBInstance = op(
  n0,
  _CDBI,
  0,
  () => CreateDBInstanceMessage,
  () => CreateDBInstanceResult
);
export var CreateDBSubnetGroup = op(
  n0,
  _CDBSG,
  0,
  () => CreateDBSubnetGroupMessage,
  () => CreateDBSubnetGroupResult
);
export var DeleteDBInstance = op(
  n0,
  _DDBI,
  0,
  () => DeleteDBInstanceMessage,
  () => DeleteDBInstanceResult
);
export var DescribeDBInstances = op(
  n0,
  _DDBIe,
  0,
  () => DescribeDBInstancesMessage,
  () => DBInstanceMessage
);
export var DescribeDBSubnetGroups = op(
  n0,
  _DDBSGe,
  0,
  () => DescribeDBSubnetGroupsMessage,
  () => DBSubnetGroupMessage
);
export var DescribeOrderableDBInstanceOptions = op(
  n0,
  _DODBIO,
  0,
  () => DescribeOrderableDBInstanceOptionsMessage,
  () => OrderableDBInstanceOptionsMessage
);
export var ModifyDBInstance = op(
  n0,
  _MDBI,
  0,
  () => ModifyDBInstanceMessage,
  () => ModifyDBInstanceResult
);
export var ModifyDBSubnetGroup = op(
  n0,
  _MDBSG,
  0,
  () => ModifyDBSubnetGroupMessage,
  () => ModifyDBSubnetGroupResult
);
export var RebootDBInstance = op(
  n0,
  _RDBI,
  0,
  () => RebootDBInstanceMessage,
  () => RebootDBInstanceResult
);
