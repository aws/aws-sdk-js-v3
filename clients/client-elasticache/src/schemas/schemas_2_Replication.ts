// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  APICallRateForCustomerExceededFault as __APICallRateForCustomerExceededFault,
  InvalidKMSKeyFault as __InvalidKMSKeyFault,
  NodeGroupNotFoundFault as __NodeGroupNotFoundFault,
  NodeGroupsPerReplicationGroupQuotaExceededFault as __NodeGroupsPerReplicationGroupQuotaExceededFault,
  NoOperationFault as __NoOperationFault,
  ReplicationGroupAlreadyUnderMigrationFault as __ReplicationGroupAlreadyUnderMigrationFault,
  ReplicationGroupNotUnderMigrationFault as __ReplicationGroupNotUnderMigrationFault,
  TestFailoverNotAvailableFault as __TestFailoverNotAvailableFault,
} from "../models/index";
import {
  _Ad,
  _AF,
  _AFS,
  _AI,
  _AMVU,
  _APICRFCEF,
  _aQE,
  _AREE,
  _ARN,
  _ATE,
  _ATLMD,
  _ATS,
  _c,
  _CCIa,
  _CE,
  _CEl,
  _CI,
  _CIL,
  _CM,
  _CMM,
  _CMo,
  _CMR,
  _CNE,
  _CNEL,
  _CNI,
  _CNT,
  _CR,
  _CS,
  _D,
  _DRC,
  _DRCM,
  _DRCR,
  _DRG,
  _DRGe,
  _DRGM,
  _DRGMe,
  _DRGR,
  _DTa,
  _E,
  _e,
  _F,
  _FSI,
  _GRGI,
  _GRGIl,
  _GRGMR,
  _hE,
  _ID,
  _IKMSKF,
  _IRC,
  _IRCM,
  _IRCR,
  _KKI,
  _LDC,
  _M,
  _m,
  _MAZ,
  _MC,
  _MCOA,
  _MR,
  _MRGSC,
  _MRGSCM,
  _MRGSCR,
  _NG,
  _NGCo,
  _NGI,
  _NGL,
  _NGM,
  _NGML,
  _NGMo,
  _NGNFF,
  _NGo,
  _NGPRGQEF,
  _NGTR,
  _NGTRL,
  _NGTRLo,
  _NGTRo,
  _NGTRod,
  _NGTRode,
  _NOF,
  _NRC,
  _NT,
  _PAZ,
  _PAZr,
  _PCI,
  _PE,
  _PMV,
  _Po,
  _POA,
  _POAr,
  _PP,
  _RC,
  _RCes,
  _RCLep,
  _RE,
  _Re,
  _REe,
  _RG,
  _RGAUMF,
  _RGCT,
  _RGe,
  _RGIe,
  _RGL,
  _RGM,
  _RGNUMF,
  _RGOA,
  _RGOAL,
  _RGPMV,
  _RPC,
  _RS,
  _RTR,
  _SCI,
  _Sl,
  _SM,
  _SMM,
  _SMR,
  _SMt,
  _SRL,
  _St,
  _SW,
  _TEE,
  _TEM,
  _TF,
  _TFM,
  _TFNAF,
  _TFR,
  _TM,
  _TMM,
  _TMR,
  _UG,
  _UGI,
  _UGITA,
  _UGITR,
  _UGUS,
  _xN,
  Endpoint,
  LogDeliveryConfigurationList,
  n0,
  PendingLogDeliveryConfigurationList,
} from "./schemas_0";
import { ReshardingConfigurationList } from "./schemas_17_Snapshot";
import { PreferredAvailabilityZoneList, PreferredOutpostArnList } from "./schemas_22_Replica";

/* eslint no-var: 0 */

export var APICallRateForCustomerExceededFault = error(
  n0,
  _APICRFCEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`APICallRateForCustomerExceeded`, 400],
  },
  [_m],
  [0],

  __APICallRateForCustomerExceededFault
);
export var CompleteMigrationMessage = struct(n0, _CMM, 0, [_RGIe, _F], [0, 2]);
export var CompleteMigrationResponse = struct(n0, _CMR, 0, [_RG], [[() => ReplicationGroup, 0]]);
export var ConfigureShard = struct(
  n0,
  _CS,
  0,
  [_NGI, _NRC, _PAZr, _POAr],
  [0, 1, [() => PreferredAvailabilityZoneList, 0], [() => PreferredOutpostArnList, 0]]
);
export var CustomerNodeEndpoint = struct(n0, _CNE, 0, [_Ad, _Po], [0, 1]);
export var DecreaseReplicaCountMessage = struct(
  n0,
  _DRCM,
  0,
  [_RGIe, _NRC, _RC, _RTR, _AI],
  [0, 1, [() => ReplicaConfigurationList, 0], 64 | 0, 2]
);
export var DecreaseReplicaCountResult = struct(n0, _DRCR, 0, [_RG], [[() => ReplicationGroup, 0]]);
export var DeleteReplicationGroupMessage = struct(n0, _DRGM, 0, [_RGIe, _RPC, _FSI], [0, 2, 0]);
export var DeleteReplicationGroupResult = struct(n0, _DRGR, 0, [_RG], [[() => ReplicationGroup, 0]]);
export var DescribeReplicationGroupsMessage = struct(n0, _DRGMe, 0, [_RGIe, _MR, _M], [0, 1, 0]);
export var GlobalReplicationGroupInfo = struct(n0, _GRGIl, 0, [_GRGI, _GRGMR], [0, 0]);
export var IncreaseReplicaCountMessage = struct(
  n0,
  _IRCM,
  0,
  [_RGIe, _NRC, _RC, _AI],
  [0, 1, [() => ReplicaConfigurationList, 0], 2]
);
export var IncreaseReplicaCountResult = struct(n0, _IRCR, 0, [_RG], [[() => ReplicationGroup, 0]]);
export var InvalidKMSKeyFault = error(
  n0,
  _IKMSKF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidKMSKeyFault`, 400],
  },
  [_m],
  [0],

  __InvalidKMSKeyFault
);
export var ModifyReplicationGroupShardConfigurationMessage = struct(
  n0,
  _MRGSCM,
  0,
  [_RGIe, _NGCo, _AI, _RCes, _NGTR, _NGTRo],
  [
    0,
    1,
    2,
    [() => ReshardingConfigurationList, 0],
    [() => NodeGroupsToRemoveList, 0],
    [() => NodeGroupsToRetainList, 0],
  ]
);
export var ModifyReplicationGroupShardConfigurationResult = struct(
  n0,
  _MRGSCR,
  0,
  [_RG],
  [[() => ReplicationGroup, 0]]
);
export var NodeGroup = struct(
  n0,
  _NG,
  0,
  [_NGI, _St, _PE, _RE, _Sl, _NGM],
  [0, 0, () => Endpoint, () => Endpoint, 0, [() => NodeGroupMemberList, 0]]
);
export var NodeGroupMember = struct(
  n0,
  _NGMo,
  0,
  [_CCIa, _CNI, _REe, _PAZ, _POA, _CR],
  [0, 0, () => Endpoint, 0, 0, 0]
);
export var NodeGroupNotFoundFault = error(
  n0,
  _NGNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`NodeGroupNotFoundFault`, 404],
  },
  [_m],
  [0],

  __NodeGroupNotFoundFault
);
export var NodeGroupsPerReplicationGroupQuotaExceededFault = error(
  n0,
  _NGPRGQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`NodeGroupsPerReplicationGroupQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __NodeGroupsPerReplicationGroupQuotaExceededFault
);
export var NoOperationFault = error(
  n0,
  _NOF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`NoOperationFault`, 400],
  },
  [_m],
  [0],

  __NoOperationFault
);
export var ReplicationGroup = struct(
  n0,
  _RG,
  0,
  [
    _RGIe,
    _D,
    _GRGIl,
    _St,
    _PMV,
    _MC,
    _NGo,
    _SCI,
    _AF,
    _MAZ,
    _CE,
    _SRL,
    _SW,
    _CEl,
    _CNT,
    _ATE,
    _ATLMD,
    _TEE,
    _AREE,
    _MCOA,
    _KKI,
    _ARN,
    _UGI,
    _LDC,
    _RGCT,
    _DTa,
    _AMVU,
    _NT,
    _ID,
    _TEM,
    _CM,
    _E,
  ],
  [
    0,
    0,
    () => GlobalReplicationGroupInfo,
    0,
    () => ReplicationGroupPendingModifiedValues,
    [() => ClusterIdList, 0],
    [() => NodeGroupList, 0],
    0,
    0,
    0,
    () => Endpoint,
    1,
    0,
    2,
    0,
    2,
    4,
    2,
    2,
    [() => ReplicationGroupOutpostArnList, 0],
    0,
    0,
    64 | 0,
    [() => LogDeliveryConfigurationList, 0],
    4,
    0,
    2,
    0,
    0,
    0,
    0,
    0,
  ]
);
export var ReplicationGroupAlreadyUnderMigrationFault = error(
  n0,
  _RGAUMF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ReplicationGroupAlreadyUnderMigrationFault`, 400],
  },
  [_m],
  [0],

  __ReplicationGroupAlreadyUnderMigrationFault
);
export var ReplicationGroupMessage = struct(n0, _RGM, 0, [_M, _RGe], [0, [() => ReplicationGroupList, 0]]);
export var ReplicationGroupNotUnderMigrationFault = error(
  n0,
  _RGNUMF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ReplicationGroupNotUnderMigrationFault`, 400],
  },
  [_m],
  [0],

  __ReplicationGroupNotUnderMigrationFault
);
export var ReplicationGroupPendingModifiedValues = struct(
  n0,
  _RGPMV,
  0,
  [_PCI, _AFS, _Re, _ATS, _UG, _LDC, _TEE, _TEM, _CM],
  [0, 0, () => ReshardingStatus, 0, () => UserGroupsUpdateStatus, () => PendingLogDeliveryConfigurationList, 2, 0, 0]
);
export var ReshardingStatus = struct(n0, _RS, 0, [_SM], [() => SlotMigration]);
export var SlotMigration = struct(n0, _SM, 0, [_PP], [1]);
export var StartMigrationMessage = struct(n0, _SMM, 0, [_RGIe, _CNEL], [0, () => CustomerNodeEndpointList]);
export var StartMigrationResponse = struct(n0, _SMR, 0, [_RG], [[() => ReplicationGroup, 0]]);
export var TestFailoverMessage = struct(n0, _TFM, 0, [_RGIe, _NGI], [0, 0]);
export var TestFailoverNotAvailableFault = error(
  n0,
  _TFNAF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TestFailoverNotAvailableFault`, 400],
  },
  [_m],
  [0],

  __TestFailoverNotAvailableFault
);
export var TestFailoverResult = struct(n0, _TFR, 0, [_RG], [[() => ReplicationGroup, 0]]);
export var TestMigrationMessage = struct(n0, _TMM, 0, [_RGIe, _CNEL], [0, () => CustomerNodeEndpointList]);
export var TestMigrationResponse = struct(n0, _TMR, 0, [_RG], [[() => ReplicationGroup, 0]]);
export var UserGroupsUpdateStatus = struct(n0, _UGUS, 0, [_UGITA, _UGITR], [64 | 0, 64 | 0]);
export var ClusterIdList = list(n0, _CIL, 0, [
  0,
  {
    [_xN]: _CI,
  },
]);
export var CustomerNodeEndpointList = list(n0, _CNEL, 0, () => CustomerNodeEndpoint);
export var NodeGroupList = list(n0, _NGL, 0, [
  () => NodeGroup,
  {
    [_xN]: _NG,
  },
]);
export var NodeGroupMemberList = list(n0, _NGML, 0, [
  () => NodeGroupMember,
  {
    [_xN]: _NGMo,
  },
]);
export var NodeGroupsToRemoveList = list(n0, _NGTRL, 0, [
  0,
  {
    [_xN]: _NGTRod,
  },
]);
export var NodeGroupsToRetainList = list(n0, _NGTRLo, 0, [
  0,
  {
    [_xN]: _NGTRode,
  },
]);
export var RemoveReplicasList = 64 | 0;

export var ReplicaConfigurationList = list(n0, _RCLep, 0, [
  () => ConfigureShard,
  {
    [_xN]: _CS,
  },
]);
export var ReplicationGroupList = list(n0, _RGL, 0, [
  () => ReplicationGroup,
  {
    [_xN]: _RG,
  },
]);
export var ReplicationGroupOutpostArnList = list(n0, _RGOAL, 0, [
  0,
  {
    [_xN]: _RGOA,
  },
]);
export var CompleteMigration = op(
  n0,
  _CMo,
  0,
  () => CompleteMigrationMessage,
  () => CompleteMigrationResponse
);
export var DecreaseReplicaCount = op(
  n0,
  _DRC,
  0,
  () => DecreaseReplicaCountMessage,
  () => DecreaseReplicaCountResult
);
export var DeleteReplicationGroup = op(
  n0,
  _DRG,
  0,
  () => DeleteReplicationGroupMessage,
  () => DeleteReplicationGroupResult
);
export var DescribeReplicationGroups = op(
  n0,
  _DRGe,
  0,
  () => DescribeReplicationGroupsMessage,
  () => ReplicationGroupMessage
);
export var IncreaseReplicaCount = op(
  n0,
  _IRC,
  0,
  () => IncreaseReplicaCountMessage,
  () => IncreaseReplicaCountResult
);
export var ModifyReplicationGroupShardConfiguration = op(
  n0,
  _MRGSC,
  0,
  () => ModifyReplicationGroupShardConfigurationMessage,
  () => ModifyReplicationGroupShardConfigurationResult
);
export var StartMigration = op(
  n0,
  _SMt,
  0,
  () => StartMigrationMessage,
  () => StartMigrationResponse
);
export var TestFailover = op(
  n0,
  _TF,
  0,
  () => TestFailoverMessage,
  () => TestFailoverResult
);
export var TestMigration = op(
  n0,
  _TM,
  0,
  () => TestMigrationMessage,
  () => TestMigrationResponse
);
