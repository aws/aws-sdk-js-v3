// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _a,
  _ac,
  _aI,
  _aK,
  _AR,
  _aS,
  _C,
  _cA,
  _CC,
  _CCNG,
  _CCNGR,
  _CCNGRr,
  _CCR,
  _CCRr,
  _cI,
  _cIl,
  _CL,
  _cl,
  _CLT,
  _cLT,
  _clu,
  _cN,
  _CNG,
  _cNG,
  _CNGC,
  _cNGC,
  _CNGCL,
  _cNGI,
  _cNGIo,
  _CNGL,
  _cNGN,
  _cNGo,
  _CNGS,
  _CNGSC,
  _CNGSCR,
  _co,
  _CQ,
  _CQR,
  _CQRr,
  _CS,
  _CSC,
  _CSCR,
  _cT,
  _dPTID,
  _EI,
  _eI,
  _EIL,
  _en,
  _GC,
  _GCNG,
  _GCNGR,
  _GCNGRe,
  _GCR,
  _GCRe,
  _GQ,
  _GQR,
  _GQRe,
  _hQ,
  _i,
  _IC,
  _iC,
  _iIPA,
  _IL,
  _iT,
  _LC,
  _LCNG,
  _LCNGR,
  _LCNGRi,
  _LCR,
  _LCRi,
  _LQ,
  _LQR,
  _LQRi,
  _m,
  _mA,
  _mIC,
  _mICa,
  _mo,
  _mR,
  _N,
  _n,
  _ne,
  _NR,
  _nT,
  _nTe,
  _pN,
  _pO,
  _pV,
  _Q,
  _q,
  _qI,
  _QL,
  _qN,
  _QS,
  _qu,
  _S,
  _s,
  _sA,
  _SAK,
  _SC,
  _sC,
  _sc,
  _sCc,
  _SCR,
  _SCS,
  _sCS,
  _SCSl,
  _sDITIS,
  _sGI,
  _sI,
  _si,
  _SO,
  _sO,
  _SR,
  _sV,
  _t,
  _ty,
  _UCNG,
  _UCNGR,
  _UCNGRp,
  _UCNGSCR,
  _UQ,
  _UQR,
  _UQRp,
  _v,
  n0,
} from "./schemas_0";
import { Endpoints } from "./schemas_2_Cluster";

/* eslint no-var: 0 */

export var Accounting = struct(n0, _A, 0, [_mo, _dPTID], [0, 1]);
export var AccountingRequest = struct(n0, _AR, 0, [_mo, _dPTID], [0, 1]);
export var Cluster = struct(
  n0,
  _C,
  0,
  [_n, _i, _a, _s, _cA, _mA, _sc, _si, _sC, _ne, _en, _eI],
  [
    0,
    0,
    0,
    0,
    5,
    5,
    () => Scheduler,
    0,
    () => ClusterSlurmConfiguration,
    () => Networking,
    () => Endpoints,
    () => ErrorInfoList,
  ]
);
export var ClusterSlurmConfiguration = struct(
  n0,
  _CSC,
  0,
  [_sDITIS, _sCS, _aK, _ac],
  [1, () => SlurmCustomSettings, () => SlurmAuthKey, () => Accounting]
);
export var ClusterSlurmConfigurationRequest = struct(
  n0,
  _CSCR,
  0,
  [_sDITIS, _sCS, _ac],
  [1, () => SlurmCustomSettings, () => AccountingRequest]
);
export var ClusterSummary = struct(n0, _CS, 0, [_n, _i, _a, _cA, _mA, _s], [0, 0, 0, 5, 5, 0]);
export var ComputeNodeGroup = struct(
  n0,
  _CNG,
  0,
  [_n, _i, _a, _cI, _cA, _mA, _s, _aI, _sI, _pO, _cLT, _iIPA, _sCc, _iC, _sO, _sC, _eI],
  [
    0,
    0,
    0,
    0,
    5,
    5,
    0,
    0,
    64 | 0,
    0,
    () => CustomLaunchTemplate,
    0,
    () => ScalingConfiguration,
    () => InstanceList,
    () => SpotOptions,
    () => ComputeNodeGroupSlurmConfiguration,
    () => ErrorInfoList,
  ]
);
export var ComputeNodeGroupConfiguration = struct(n0, _CNGC, 0, [_cNGI], [0]);
export var ComputeNodeGroupSlurmConfiguration = struct(n0, _CNGSC, 0, [_sCS], [() => SlurmCustomSettings]);
export var ComputeNodeGroupSlurmConfigurationRequest = struct(n0, _CNGSCR, 0, [_sCS], [() => SlurmCustomSettings]);
export var ComputeNodeGroupSummary = struct(n0, _CNGS, 0, [_n, _i, _a, _cI, _cA, _mA, _s], [0, 0, 0, 0, 5, 5, 0]);
export var CreateClusterRequest = struct(
  n0,
  _CCR,
  0,
  [_cN, _sc, _si, _ne, _sC, _cT, _t],
  [0, () => SchedulerRequest, 0, () => NetworkingRequest, () => ClusterSlurmConfigurationRequest, [0, 4], 128 | 0]
);
export var CreateClusterResponse = struct(n0, _CCRr, 0, [_cl], [() => Cluster]);
export var CreateComputeNodeGroupRequest = struct(
  n0,
  _CCNGR,
  0,
  [_cIl, _cNGN, _aI, _sI, _pO, _cLT, _iIPA, _sCc, _iC, _sO, _sC, _cT, _t],
  [
    0,
    0,
    0,
    64 | 0,
    0,
    () => CustomLaunchTemplate,
    0,
    () => ScalingConfigurationRequest,
    () => InstanceList,
    () => SpotOptions,
    () => ComputeNodeGroupSlurmConfigurationRequest,
    [0, 4],
    128 | 0,
  ]
);
export var CreateComputeNodeGroupResponse = struct(n0, _CCNGRr, 0, [_cNG], [() => ComputeNodeGroup]);
export var CreateQueueRequest = struct(
  n0,
  _CQR,
  0,
  [_cIl, _qN, _cNGC, _cT, _t],
  [0, 0, () => ComputeNodeGroupConfigurationList, [0, 4], 128 | 0]
);
export var CreateQueueResponse = struct(n0, _CQRr, 0, [_q], [() => Queue]);
export var CustomLaunchTemplate = struct(n0, _CLT, 0, [_i, _v], [0, 0]);
export var ErrorInfo = struct(n0, _EI, 0, [_co, _m], [0, 0]);
export var GetClusterRequest = struct(n0, _GCR, 0, [_cIl], [0]);
export var GetClusterResponse = struct(n0, _GCRe, 0, [_cl], [() => Cluster]);
export var GetComputeNodeGroupRequest = struct(n0, _GCNGR, 0, [_cIl, _cNGIo], [0, 0]);
export var GetComputeNodeGroupResponse = struct(n0, _GCNGRe, 0, [_cNG], [() => ComputeNodeGroup]);
export var GetQueueRequest = struct(n0, _GQR, 0, [_cIl, _qI], [0, 0]);
export var GetQueueResponse = struct(n0, _GQRe, 0, [_q], [() => Queue]);
export var InstanceConfig = struct(n0, _IC, 0, [_iT], [0]);
export var ListClustersRequest = struct(
  n0,
  _LCR,
  0,
  [_nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListClustersResponse = struct(n0, _LCRi, 0, [_clu, _nT], [() => ClusterList, 0]);
export var ListComputeNodeGroupsRequest = struct(n0, _LCNGR, 0, [_cIl, _nT, _mR], [0, 0, 1]);
export var ListComputeNodeGroupsResponse = struct(n0, _LCNGRi, 0, [_cNGo, _nT], [() => ComputeNodeGroupList, 0]);
export var ListQueuesRequest = struct(n0, _LQR, 0, [_cIl, _nT, _mR], [0, 0, 1]);
export var ListQueuesResponse = struct(n0, _LQRi, 0, [_qu, _nT], [() => QueueList, 0]);
export var Networking = struct(n0, _N, 0, [_sI, _sGI, _nTe], [64 | 0, 64 | 0, 0]);
export var NetworkingRequest = struct(n0, _NR, 0, [_sI, _sGI, _nTe], [64 | 0, 64 | 0, 0]);
export var Queue = struct(
  n0,
  _Q,
  0,
  [_n, _i, _a, _cI, _cA, _mA, _s, _cNGC, _eI],
  [0, 0, 0, 0, 5, 5, 0, () => ComputeNodeGroupConfigurationList, () => ErrorInfoList]
);
export var QueueSummary = struct(n0, _QS, 0, [_n, _i, _a, _cI, _cA, _mA, _s], [0, 0, 0, 0, 5, 5, 0]);
export var ScalingConfiguration = struct(n0, _SC, 0, [_mIC, _mICa], [1, 1]);
export var ScalingConfigurationRequest = struct(n0, _SCR, 0, [_mIC, _mICa], [1, 1]);
export var Scheduler = struct(n0, _S, 0, [_ty, _v], [0, 0]);
export var SchedulerRequest = struct(n0, _SR, 0, [_ty, _v], [0, 0]);
export var SlurmAuthKey = struct(n0, _SAK, 0, [_sA, _sV], [0, 0]);
export var SlurmCustomSetting = struct(n0, _SCS, 0, [_pN, _pV], [0, 0]);
export var SpotOptions = struct(n0, _SO, 0, [_aS], [0]);
export var UpdateComputeNodeGroupRequest = struct(
  n0,
  _UCNGR,
  0,
  [_cIl, _cNGIo, _aI, _sI, _cLT, _pO, _sO, _sCc, _iIPA, _sC, _cT],
  [
    0,
    0,
    0,
    64 | 0,
    () => CustomLaunchTemplate,
    0,
    () => SpotOptions,
    () => ScalingConfigurationRequest,
    0,
    () => UpdateComputeNodeGroupSlurmConfigurationRequest,
    [0, 4],
  ]
);
export var UpdateComputeNodeGroupResponse = struct(n0, _UCNGRp, 0, [_cNG], [() => ComputeNodeGroup]);
export var UpdateComputeNodeGroupSlurmConfigurationRequest = struct(
  n0,
  _UCNGSCR,
  0,
  [_sCS],
  [() => SlurmCustomSettings]
);
export var UpdateQueueRequest = struct(
  n0,
  _UQR,
  0,
  [_cIl, _qI, _cNGC, _cT],
  [0, 0, () => ComputeNodeGroupConfigurationList, [0, 4]]
);
export var UpdateQueueResponse = struct(n0, _UQRp, 0, [_q], [() => Queue]);
export var ClusterList = list(n0, _CL, 0, () => ClusterSummary);
export var ComputeNodeGroupConfigurationList = list(n0, _CNGCL, 0, () => ComputeNodeGroupConfiguration);
export var ComputeNodeGroupList = list(n0, _CNGL, 0, () => ComputeNodeGroupSummary);
export var ErrorInfoList = list(n0, _EIL, 0, () => ErrorInfo);
export var InstanceList = list(n0, _IL, 0, () => InstanceConfig);
export var QueueList = list(n0, _QL, 0, () => QueueSummary);
export var SecurityGroupIdList = 64 | 0;

export var SlurmCustomSettings = list(n0, _SCSl, 0, () => SlurmCustomSetting);
export var StringList = 64 | 0;

export var SubnetIdList = 64 | 0;

export var CreateCluster = op(
  n0,
  _CC,
  2,
  () => CreateClusterRequest,
  () => CreateClusterResponse
);
export var CreateComputeNodeGroup = op(
  n0,
  _CCNG,
  2,
  () => CreateComputeNodeGroupRequest,
  () => CreateComputeNodeGroupResponse
);
export var CreateQueue = op(
  n0,
  _CQ,
  2,
  () => CreateQueueRequest,
  () => CreateQueueResponse
);
export var GetCluster = op(
  n0,
  _GC,
  0,
  () => GetClusterRequest,
  () => GetClusterResponse
);
export var GetComputeNodeGroup = op(
  n0,
  _GCNG,
  0,
  () => GetComputeNodeGroupRequest,
  () => GetComputeNodeGroupResponse
);
export var GetQueue = op(
  n0,
  _GQ,
  0,
  () => GetQueueRequest,
  () => GetQueueResponse
);
export var ListClusters = op(
  n0,
  _LC,
  0,
  () => ListClustersRequest,
  () => ListClustersResponse
);
export var ListComputeNodeGroups = op(
  n0,
  _LCNG,
  0,
  () => ListComputeNodeGroupsRequest,
  () => ListComputeNodeGroupsResponse
);
export var ListQueues = op(
  n0,
  _LQ,
  0,
  () => ListQueuesRequest,
  () => ListQueuesResponse
);
export var UpdateComputeNodeGroup = op(
  n0,
  _UCNG,
  2,
  () => UpdateComputeNodeGroupRequest,
  () => UpdateComputeNodeGroupResponse
);
export var UpdateQueue = op(
  n0,
  _UQ,
  2,
  () => UpdateQueueRequest,
  () => UpdateQueueResponse
);
