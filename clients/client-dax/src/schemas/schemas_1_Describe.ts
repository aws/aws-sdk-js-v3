// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ClusterAlreadyExistsFault as __ClusterAlreadyExistsFault,
  ClusterQuotaForCustomerExceededFault as __ClusterQuotaForCustomerExceededFault,
  InsufficientClusterCapacityFault as __InsufficientClusterCapacityFault,
  InvalidVPCNetworkStateFault as __InvalidVPCNetworkStateFault,
  NodeNotFoundFault as __NodeNotFoundFault,
  NodeQuotaForClusterExceededFault as __NodeQuotaForClusterExceededFault,
  NodeQuotaForCustomerExceededFault as __NodeQuotaForCustomerExceededFault,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
} from "../models/index";
import {
  _A,
  _AN,
  _aQE,
  _AV,
  _AZ,
  _AZv,
  _C,
  _c,
  _CA,
  _CAEF,
  _CC,
  _CCR,
  _CCRr,
  _CDE,
  _CEET,
  _CL,
  _Cl,
  _CN,
  _CNl,
  _CQFCEF,
  _CT,
  _D,
  _Da,
  _DC,
  _DCe,
  _DCR,
  _DCRe,
  _DCRes,
  _DCResc,
  _DDP,
  _DDPR,
  _DDPRe,
  _DE,
  _DER,
  _DERe,
  _DP,
  _DPR,
  _DPRe,
  _DRF,
  _DRFR,
  _DRFRe,
  _DT,
  _Du,
  _E,
  _e,
  _EL,
  _En,
  _Ena,
  _ET,
  _Ev,
  _hE,
  _ICCF,
  _IM,
  _IRA,
  _IRF,
  _IRFR,
  _IRFRn,
  _IVPCNSF,
  _M,
  _m,
  _MR,
  _N,
  _NC,
  _NCT,
  _NI,
  _NITR,
  _NITRo,
  _NL,
  _NNFF,
  _No,
  _NQFCEF,
  _NQFCEFo,
  _NRF,
  _NS,
  _NT,
  _NTA,
  _NTe,
  _NTS,
  _NTSV,
  _NTSVL,
  _NTSVo,
  _P,
  _Pa,
  _PAS,
  _PG,
  _PGN,
  _PGS,
  _PL,
  _PMW,
  _PN,
  _Po,
  _PT,
  _PV,
  _RF,
  _RNe,
  _RNR,
  _RNRe,
  _S,
  _SG,
  _SGe,
  _SGI,
  _SGIe,
  _SGM,
  _SGML,
  _SGN,
  _SN,
  _So,
  _SQEE,
  _SSED,
  _SSES,
  _ST,
  _STt,
  _T,
  _TA,
  _TN,
  _TS,
  _UC,
  _UCR,
  _UCRp,
  _URL,
  _V,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_4_Cluster";

/* eslint no-var: 0 */

export var Cluster = struct(
  n0,
  _C,
  0,
  [_CN, _D, _CA, _TN, _AN, _NT, _S, _CDE, _NITR, _N, _PMW, _NC, _SG, _SGe, _IRA, _PG, _SSED, _CEET],
  [
    0,
    0,
    0,
    1,
    1,
    0,
    0,
    () => Endpoint,
    64 | 0,
    () => NodeList,
    0,
    () => NotificationConfiguration,
    0,
    () => SecurityGroupMembershipList,
    0,
    () => ParameterGroupStatus,
    () => SSEDescription,
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
  [_CN, _NT, _D, _RF, _AZ, _SGN, _SGI, _PMW, _NTA, _IRA, _PGN, _T, _SSES, _CEET],
  [0, 0, 0, 1, 64 | 0, 0, 64 | 0, 0, 0, 0, 0, () => TagList, () => SSESpecification, 0]
);
export var CreateClusterResponse = struct(n0, _CCRr, 0, [_C], [() => Cluster]);
export var DecreaseReplicationFactorRequest = struct(n0, _DRFR, 0, [_CN, _NRF, _AZ, _NITR], [0, 1, 64 | 0, 64 | 0]);
export var DecreaseReplicationFactorResponse = struct(n0, _DRFRe, 0, [_C], [() => Cluster]);
export var DeleteClusterRequest = struct(n0, _DCR, 0, [_CN], [0]);
export var DeleteClusterResponse = struct(n0, _DCRe, 0, [_C], [() => Cluster]);
export var DescribeClustersRequest = struct(n0, _DCRes, 0, [_CNl, _MR, _NTe], [64 | 0, 1, 0]);
export var DescribeClustersResponse = struct(n0, _DCResc, 0, [_NTe, _Cl], [0, () => ClusterList]);
export var DescribeDefaultParametersRequest = struct(n0, _DDPR, 0, [_MR, _NTe], [1, 0]);
export var DescribeDefaultParametersResponse = struct(n0, _DDPRe, 0, [_NTe, _P], [0, () => ParameterList]);
export var DescribeEventsRequest = struct(n0, _DER, 0, [_SN, _ST, _STt, _ET, _Du, _MR, _NTe], [0, 0, 4, 4, 1, 1, 0]);
export var DescribeEventsResponse = struct(n0, _DERe, 0, [_NTe, _E], [0, () => EventList]);
export var DescribeParametersRequest = struct(n0, _DPR, 0, [_PGN, _So, _MR, _NTe], [0, 0, 1, 0]);
export var DescribeParametersResponse = struct(n0, _DPRe, 0, [_NTe, _P], [0, () => ParameterList]);
export var Endpoint = struct(n0, _En, 0, [_A, _Po, _URL], [0, 1, 0]);
export var Event = struct(n0, _Ev, 0, [_SN, _ST, _M, _Da], [0, 0, 0, 4]);
export var IncreaseReplicationFactorRequest = struct(n0, _IRFR, 0, [_CN, _NRF, _AZ], [0, 1, 64 | 0]);
export var IncreaseReplicationFactorResponse = struct(n0, _IRFRn, 0, [_C], [() => Cluster]);
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
export var Node = struct(n0, _No, 0, [_NI, _En, _NCT, _AZv, _NS, _PGS], [0, () => Endpoint, 4, 0, 0, 0]);
export var NodeNotFoundFault = error(
  n0,
  _NNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`NodeNotFound`, 404],
  },
  [_m],
  [0],

  __NodeNotFoundFault
);
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
export var NodeTypeSpecificValue = struct(n0, _NTSV, 0, [_NT, _V], [0, 0]);
export var NotificationConfiguration = struct(n0, _NC, 0, [_TA, _TS], [0, 0]);
export var Parameter = struct(
  n0,
  _Pa,
  0,
  [_PN, _PT, _PV, _NTSVo, _D, _So, _DT, _AV, _IM, _CT],
  [0, 0, 0, () => NodeTypeSpecificValueList, 0, 0, 0, 0, 0, 0]
);
export var ParameterGroupStatus = struct(n0, _PGS, 0, [_PGN, _PAS, _NITRo], [0, 0, 64 | 0]);
export var RebootNodeRequest = struct(n0, _RNR, 0, [_CN, _NI], [0, 0]);
export var RebootNodeResponse = struct(n0, _RNRe, 0, [_C], [() => Cluster]);
export var SecurityGroupMembership = struct(n0, _SGM, 0, [_SGIe, _S], [0, 0]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
    [_aQE]: [`ServiceQuotaExceeded`, 402],
  },
  [],
  [],

  __ServiceQuotaExceededException
);
export var SSEDescription = struct(n0, _SSED, 0, [_S], [0]);
export var SSESpecification = struct(n0, _SSES, 0, [_Ena], [2]);
export var UpdateClusterRequest = struct(
  n0,
  _UCR,
  0,
  [_CN, _D, _PMW, _NTA, _NTS, _PGN, _SGI],
  [0, 0, 0, 0, 0, 0, 64 | 0]
);
export var UpdateClusterResponse = struct(n0, _UCRp, 0, [_C], [() => Cluster]);
export var Unit = "unit" as const;

export var AvailabilityZoneList = 64 | 0;

export var ClusterList = list(n0, _CL, 0, () => Cluster);
export var ClusterNameList = 64 | 0;

export var EventList = list(n0, _EL, 0, () => Event);
export var NodeIdentifierList = 64 | 0;

export var NodeList = list(n0, _NL, 0, () => Node);
export var NodeTypeSpecificValueList = list(n0, _NTSVL, 0, () => NodeTypeSpecificValue);
export var ParameterList = list(n0, _PL, 0, () => Parameter);
export var SecurityGroupIdentifierList = 64 | 0;

export var SecurityGroupMembershipList = list(n0, _SGML, 0, () => SecurityGroupMembership);
export var CreateCluster = op(
  n0,
  _CC,
  0,
  () => CreateClusterRequest,
  () => CreateClusterResponse
);
export var DecreaseReplicationFactor = op(
  n0,
  _DRF,
  0,
  () => DecreaseReplicationFactorRequest,
  () => DecreaseReplicationFactorResponse
);
export var DeleteCluster = op(
  n0,
  _DC,
  0,
  () => DeleteClusterRequest,
  () => DeleteClusterResponse
);
export var DescribeClusters = op(
  n0,
  _DCe,
  0,
  () => DescribeClustersRequest,
  () => DescribeClustersResponse
);
export var DescribeDefaultParameters = op(
  n0,
  _DDP,
  0,
  () => DescribeDefaultParametersRequest,
  () => DescribeDefaultParametersResponse
);
export var DescribeEvents = op(
  n0,
  _DE,
  0,
  () => DescribeEventsRequest,
  () => DescribeEventsResponse
);
export var DescribeParameters = op(
  n0,
  _DP,
  0,
  () => DescribeParametersRequest,
  () => DescribeParametersResponse
);
export var IncreaseReplicationFactor = op(
  n0,
  _IRF,
  0,
  () => IncreaseReplicationFactorRequest,
  () => IncreaseReplicationFactorResponse
);
export var RebootNode = op(
  n0,
  _RNe,
  0,
  () => RebootNodeRequest,
  () => RebootNodeResponse
);
export var UpdateCluster = op(
  n0,
  _UC,
  0,
  () => UpdateClusterRequest,
  () => UpdateClusterResponse
);
