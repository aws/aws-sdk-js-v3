// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  APICallRateForCustomerExceededFault as __APICallRateForCustomerExceededFault,
  ClusterAlreadyExistsFault as __ClusterAlreadyExistsFault,
  ClusterQuotaForCustomerExceededFault as __ClusterQuotaForCustomerExceededFault,
  InsufficientClusterCapacityFault as __InsufficientClusterCapacityFault,
  InvalidCredentialsException as __InvalidCredentialsException,
  InvalidKMSKeyFault as __InvalidKMSKeyFault,
  InvalidMultiRegionClusterStateFault as __InvalidMultiRegionClusterStateFault,
  InvalidNodeStateFault as __InvalidNodeStateFault,
  InvalidVPCNetworkStateFault as __InvalidVPCNetworkStateFault,
  MultiRegionClusterAlreadyExistsFault as __MultiRegionClusterAlreadyExistsFault,
  NodeQuotaForClusterExceededFault as __NodeQuotaForClusterExceededFault,
  NodeQuotaForCustomerExceededFault as __NodeQuotaForCustomerExceededFault,
  NoOperationFault as __NoOperationFault,
  ServiceUpdateNotFoundFault as __ServiceUpdateNotFoundFault,
  ShardNotFoundFault as __ShardNotFoundFault,
  ShardsPerClusterQuotaExceededFault as __ShardsPerClusterQuotaExceededFault,
  TestFailoverNotAvailableFault as __TestFailoverNotAvailableFault,
} from "../models/index";
import {
  _ACLN,
  _ACLs,
  _ACLTA,
  _ACLUS,
  _Ad,
  _AMv,
  _AMVU,
  _APICRFCEF,
  _aQE,
  _ARN,
  _AZ,
  _BUC,
  _BUCR,
  _BUCRa,
  _C,
  _c,
  _CAEF,
  _CCR,
  _CCr,
  _CCRr,
  _CE,
  _CL,
  _Cl,
  _CMRC,
  _CMRCR,
  _CMRCRr,
  _CN,
  _CNl,
  _CPU,
  _CQFCEF,
  _CT,
  _D,
  _DC,
  _DCe,
  _DCR,
  _DCRe,
  _DCRes,
  _DCResc,
  _DMRC,
  _DMRCe,
  _DMRCR,
  _DMRCRe,
  _DMRCRes,
  _DMRCResc,
  _DSe,
  _DSRes,
  _DSResc,
  _DT,
  _E,
  _e,
  _EM,
  _En,
  _EPV,
  _ETr,
  _EV,
  _FS,
  _FSN,
  _FSR,
  _FSRa,
  _hE,
  _ICCF,
  _ICE,
  _ID,
  _IKMSKF,
  _IMRCSF,
  _INSF,
  _IVPCNSF,
  _KKI,
  _m,
  _MR,
  _MRC,
  _MRCAEF,
  _MRCL,
  _MRCN,
  _MRCNS,
  _MRCu,
  _MRPGN,
  _MW,
  _N,
  _NL,
  _No,
  _Nod,
  _NOF,
  _NON,
  _NOS,
  _NQFCEF,
  _NQFCEFo,
  _NRPS,
  _NS,
  _NT,
  _NTe,
  _NTex,
  _PCr,
  _PGN,
  _PGS,
  _PMSU,
  _PMSUL,
  _Po,
  _PP,
  _PU,
  _R,
  _RCe,
  _RCep,
  _RCepl,
  _RCLe,
  _RCR,
  _Re,
  _RS,
  _S,
  _SA,
  _SAL,
  _SAn,
  _SC,
  _SCD,
  _SCh,
  _SCR,
  _SD,
  _SG,
  _SGI,
  _SGIe,
  _SGIL,
  _SGM,
  _SGML,
  _SGN,
  _Sh,
  _Sha,
  _SL,
  _Sl,
  _SLn,
  _SM,
  _SN,
  _Sna,
  _SNFF,
  _SNh,
  _So,
  _SPCQEF,
  _SRL,
  _SSD,
  _STA,
  _STS,
  _SU,
  _SUe,
  _SUN,
  _SUNFF,
  _SUNTA,
  _SUR,
  _SW,
  _Ta,
  _TFNAF,
  _TLSE,
  _UC,
  _UCL,
  _UCn,
  _UCp,
  _UCR,
  _UCRp,
  _UMRC,
  _UMRCR,
  _UMRCRp,
  _US,
  _xN,
  n0,
} from "./schemas_0";
import { Snapshot } from "./schemas_9_Cluster";
import { TagList } from "./schemas_16_Create";

/* eslint no-var: 0 */

export var ACLsUpdateStatus = struct(n0, _ACLUS, 0, [_ACLTA], [0]);
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
export var BatchUpdateClusterRequest = struct(n0, _BUCR, 0, [_CN, _SU], [64 | 0, () => ServiceUpdateRequest]);
export var BatchUpdateClusterResponse = struct(
  n0,
  _BUCRa,
  0,
  [_PCr, _UC],
  [
    [() => ClusterList, 0],
    [() => UnprocessedClusterList, 0],
  ]
);
export var Cluster = struct(
  n0,
  _Cl,
  0,
  [
    _N,
    _D,
    _S,
    _PU,
    _MRCN,
    _NOS,
    _Sh,
    _AMv,
    _CE,
    _NT,
    _E,
    _EV,
    _EPV,
    _PGN,
    _PGS,
    _SG,
    _SGN,
    _TLSE,
    _KKI,
    _ARN,
    _STA,
    _STS,
    _SRL,
    _MW,
    _SW,
    _ACLN,
    _AMVU,
    _DT,
    _NTe,
    _ID,
  ],
  [
    0,
    0,
    0,
    [() => ClusterPendingUpdates, 0],
    0,
    1,
    [() => ShardList, 0],
    0,
    () => Endpoint,
    0,
    0,
    0,
    0,
    0,
    0,
    () => SecurityGroupMembershipList,
    0,
    2,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    2,
    0,
    0,
    0,
  ]
);
export var ClusterAlreadyExistsFault = error(
  n0,
  _CAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ClusterAlreadyExists`, 400],
  },
  [_m],
  [0],

  __ClusterAlreadyExistsFault
);
export var ClusterPendingUpdates = struct(
  n0,
  _CPU,
  0,
  [_R, _ACLs, _SUe],
  [() => ReshardingStatus, () => ACLsUpdateStatus, [() => PendingModifiedServiceUpdateList, 0]]
);
export var ClusterQuotaForCustomerExceededFault = error(
  n0,
  _CQFCEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ClusterQuotaForCustomerExceeded`, 400],
  },
  [_m],
  [0],

  __ClusterQuotaForCustomerExceededFault
);
export var CreateClusterRequest = struct(
  n0,
  _CCR,
  0,
  [
    _CNl,
    _NT,
    _MRCN,
    _PGN,
    _D,
    _NS,
    _NRPS,
    _SGN,
    _SGI,
    _MW,
    _Po,
    _STA,
    _TLSE,
    _KKI,
    _SA,
    _SN,
    _SRL,
    _Ta,
    _SW,
    _ACLN,
    _E,
    _EV,
    _AMVU,
    _DT,
    _NTe,
    _ID,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    0,
    [() => SecurityGroupIdsList, 0],
    0,
    1,
    0,
    2,
    0,
    [() => SnapshotArnsList, 0],
    0,
    1,
    [() => TagList, 0],
    0,
    0,
    0,
    0,
    2,
    2,
    0,
    0,
  ]
);
export var CreateClusterResponse = struct(n0, _CCRr, 0, [_Cl], [[() => Cluster, 0]]);
export var CreateMultiRegionClusterRequest = struct(
  n0,
  _CMRCR,
  0,
  [_MRCNS, _D, _E, _EV, _NT, _MRPGN, _NS, _TLSE, _Ta],
  [0, 0, 0, 0, 0, 0, 1, 2, [() => TagList, 0]]
);
export var CreateMultiRegionClusterResponse = struct(n0, _CMRCRr, 0, [_MRC], [[() => MultiRegionCluster, 0]]);
export var DeleteClusterRequest = struct(n0, _DCR, 0, [_CNl, _MRCN, _FSN], [0, 0, 0]);
export var DeleteClusterResponse = struct(n0, _DCRe, 0, [_Cl], [[() => Cluster, 0]]);
export var DeleteMultiRegionClusterRequest = struct(n0, _DMRCR, 0, [_MRCN], [0]);
export var DeleteMultiRegionClusterResponse = struct(n0, _DMRCRe, 0, [_MRC], [[() => MultiRegionCluster, 0]]);
export var DescribeClustersRequest = struct(n0, _DCRes, 0, [_CNl, _MR, _NTex, _SSD], [0, 1, 0, 2]);
export var DescribeClustersResponse = struct(n0, _DCResc, 0, [_NTex, _C], [0, [() => ClusterList, 0]]);
export var DescribeMultiRegionClustersRequest = struct(n0, _DMRCRes, 0, [_MRCN, _MR, _NTex, _SCD], [0, 1, 0, 2]);
export var DescribeMultiRegionClustersResponse = struct(
  n0,
  _DMRCResc,
  0,
  [_NTex, _MRCu],
  [0, [() => MultiRegionClusterList, 0]]
);
export var DescribeSnapshotsRequest = struct(n0, _DSRes, 0, [_CNl, _SN, _So, _NTex, _MR, _SD], [0, 0, 0, 0, 1, 2]);
export var DescribeSnapshotsResponse = struct(n0, _DSResc, 0, [_NTex, _Sna], [0, () => SnapshotList]);
export var Endpoint = struct(n0, _En, 0, [_Ad, _Po], [0, 1]);
export var FailoverShardRequest = struct(n0, _FSR, 0, [_CNl, _SNh], [0, 0]);
export var FailoverShardResponse = struct(n0, _FSRa, 0, [_Cl], [[() => Cluster, 0]]);
export var InsufficientClusterCapacityFault = error(
  n0,
  _ICCF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InsufficientClusterCapacity`, 400],
  },
  [_m],
  [0],

  __InsufficientClusterCapacityFault
);
export var InvalidCredentialsException = error(
  n0,
  _ICE,
  {
    [_e]: _c,
    [_hE]: 408,
    [_aQE]: [`InvalidCredentialsException`, 408],
  },
  [_m],
  [0],

  __InvalidCredentialsException
);
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
export var InvalidMultiRegionClusterStateFault = error(
  n0,
  _IMRCSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidMultiRegionClusterState`, 400],
  },
  [_m],
  [0],

  __InvalidMultiRegionClusterStateFault
);
export var InvalidNodeStateFault = error(
  n0,
  _INSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidNodeState`, 400],
  },
  [_m],
  [0],

  __InvalidNodeStateFault
);
export var InvalidVPCNetworkStateFault = error(
  n0,
  _IVPCNSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidVPCNetworkStateFault`, 400],
  },
  [_m],
  [0],

  __InvalidVPCNetworkStateFault
);
export var MultiRegionCluster = struct(
  n0,
  _MRC,
  0,
  [_MRCN, _D, _S, _NT, _E, _EV, _NOS, _C, _MRPGN, _TLSE, _ARN],
  [0, 0, 0, 0, 0, 0, 1, [() => RegionalClusterList, 0], 0, 2, 0]
);
export var MultiRegionClusterAlreadyExistsFault = error(
  n0,
  _MRCAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`MultiRegionClusterAlreadyExistsFault`, 400],
  },
  [_m],
  [0],

  __MultiRegionClusterAlreadyExistsFault
);
export var Node = struct(n0, _No, 0, [_N, _S, _AZ, _CT, _En], [0, 0, 0, 4, () => Endpoint]);
export var NodeQuotaForClusterExceededFault = error(
  n0,
  _NQFCEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`NodeQuotaForClusterExceeded`, 400],
  },
  [_m],
  [0],

  __NodeQuotaForClusterExceededFault
);
export var NodeQuotaForCustomerExceededFault = error(
  n0,
  _NQFCEFo,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`NodeQuotaForCustomerExceeded`, 400],
  },
  [_m],
  [0],

  __NodeQuotaForCustomerExceededFault
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
export var PendingModifiedServiceUpdate = struct(n0, _PMSU, 0, [_SUN, _S], [0, 0]);
export var RegionalCluster = struct(n0, _RCe, 0, [_CNl, _Re, _S, _ARN], [0, 0, 0, 0]);
export var ReplicaConfigurationRequest = struct(n0, _RCR, 0, [_RCep], [1]);
export var ReshardingStatus = struct(n0, _RS, 0, [_SM], [() => SlotMigration]);
export var SecurityGroupMembership = struct(n0, _SGM, 0, [_SGIe, _S], [0, 0]);
export var ServiceUpdateNotFoundFault = error(
  n0,
  _SUNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ServiceUpdateNotFoundFault`, 404],
  },
  [_m],
  [0],

  __ServiceUpdateNotFoundFault
);
export var ServiceUpdateRequest = struct(n0, _SUR, 0, [_SUNTA], [0]);
export var Shard = struct(n0, _Sha, 0, [_N, _S, _Sl, _Nod, _NON], [0, 0, 0, [() => NodeList, 0], 1]);
export var ShardConfigurationRequest = struct(n0, _SCR, 0, [_SCh], [1]);
export var ShardNotFoundFault = error(
  n0,
  _SNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ShardNotFoundFault`, 404],
  },
  [_m],
  [0],

  __ShardNotFoundFault
);
export var ShardsPerClusterQuotaExceededFault = error(
  n0,
  _SPCQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ShardsPerClusterQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __ShardsPerClusterQuotaExceededFault
);
export var SlotMigration = struct(n0, _SM, 0, [_PP], [1]);
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
export var UnprocessedCluster = struct(n0, _UCn, 0, [_CNl, _ETr, _EM], [0, 0, 0]);
export var UpdateClusterRequest = struct(
  n0,
  _UCR,
  0,
  [_CNl, _D, _SGI, _MW, _STA, _STS, _PGN, _SW, _SRL, _NT, _E, _EV, _RCepl, _SC, _ACLN, _ID],
  [
    0,
    0,
    [() => SecurityGroupIdsList, 0],
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    () => ReplicaConfigurationRequest,
    () => ShardConfigurationRequest,
    0,
    0,
  ]
);
export var UpdateClusterResponse = struct(n0, _UCRp, 0, [_Cl], [[() => Cluster, 0]]);
export var UpdateMultiRegionClusterRequest = struct(
  n0,
  _UMRCR,
  0,
  [_MRCN, _NT, _D, _EV, _SC, _MRPGN, _US],
  [0, 0, 0, 0, () => ShardConfigurationRequest, 0, 0]
);
export var UpdateMultiRegionClusterResponse = struct(n0, _UMRCRp, 0, [_MRC], [[() => MultiRegionCluster, 0]]);
export var ClusterList = list(n0, _CL, 0, [
  () => Cluster,
  {
    [_xN]: _Cl,
  },
]);
export var MultiRegionClusterList = list(n0, _MRCL, 0, [() => MultiRegionCluster, 0]);
export var NodeList = list(n0, _NL, 0, [
  () => Node,
  {
    [_xN]: _No,
  },
]);
export var PendingModifiedServiceUpdateList = list(n0, _PMSUL, 0, [
  () => PendingModifiedServiceUpdate,
  {
    [_xN]: _PMSU,
  },
]);
export var RegionalClusterList = list(n0, _RCLe, 0, [
  () => RegionalCluster,
  {
    [_xN]: _RCe,
  },
]);
export var SecurityGroupIdsList = list(n0, _SGIL, 0, [
  0,
  {
    [_xN]: _SGIe,
  },
]);
export var SecurityGroupMembershipList = list(n0, _SGML, 0, () => SecurityGroupMembership);
export var ShardList = list(n0, _SL, 0, [
  () => Shard,
  {
    [_xN]: _Sha,
  },
]);
export var SnapshotArnsList = list(n0, _SAL, 0, [
  0,
  {
    [_xN]: _SAn,
  },
]);
export var SnapshotList = list(n0, _SLn, 0, () => Snapshot);
export var UnprocessedClusterList = list(n0, _UCL, 0, [
  () => UnprocessedCluster,
  {
    [_xN]: _UCn,
  },
]);
export var BatchUpdateCluster = op(
  n0,
  _BUC,
  0,
  () => BatchUpdateClusterRequest,
  () => BatchUpdateClusterResponse
);
export var CreateCluster = op(
  n0,
  _CCr,
  0,
  () => CreateClusterRequest,
  () => CreateClusterResponse
);
export var CreateMultiRegionCluster = op(
  n0,
  _CMRC,
  0,
  () => CreateMultiRegionClusterRequest,
  () => CreateMultiRegionClusterResponse
);
export var DeleteCluster = op(
  n0,
  _DC,
  0,
  () => DeleteClusterRequest,
  () => DeleteClusterResponse
);
export var DeleteMultiRegionCluster = op(
  n0,
  _DMRC,
  0,
  () => DeleteMultiRegionClusterRequest,
  () => DeleteMultiRegionClusterResponse
);
export var DescribeClusters = op(
  n0,
  _DCe,
  0,
  () => DescribeClustersRequest,
  () => DescribeClustersResponse
);
export var DescribeMultiRegionClusters = op(
  n0,
  _DMRCe,
  0,
  () => DescribeMultiRegionClustersRequest,
  () => DescribeMultiRegionClustersResponse
);
export var DescribeSnapshots = op(
  n0,
  _DSe,
  0,
  () => DescribeSnapshotsRequest,
  () => DescribeSnapshotsResponse
);
export var FailoverShard = op(
  n0,
  _FS,
  0,
  () => FailoverShardRequest,
  () => FailoverShardResponse
);
export var UpdateCluster = op(
  n0,
  _UCp,
  0,
  () => UpdateClusterRequest,
  () => UpdateClusterResponse
);
export var UpdateMultiRegionCluster = op(
  n0,
  _UMRC,
  0,
  () => UpdateMultiRegionClusterRequest,
  () => UpdateMultiRegionClusterResponse
);
