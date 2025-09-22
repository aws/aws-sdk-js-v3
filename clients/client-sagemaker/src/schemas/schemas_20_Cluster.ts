// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _ACNS,
  _ACNSL,
  _AE,
  _AO,
  _Ar,
  _ASTu,
  _ASu,
  _AZ,
  _AZI,
  _BACN,
  _BACNE,
  _BACNEL,
  _BACNR,
  _BACNRa,
  _BDCN,
  _BDCNE,
  _BDCNEL,
  _BDCNLIE,
  _BDCNLIEL,
  _BDCNR,
  _BDCNRa,
  _CAl,
  _CASCO,
  _CCu,
  _CED,
  _CES,
  _CESl,
  _CEu,
  _CIGD,
  _CIGDL,
  _CII,
  _CIP,
  _CISD,
  _Cl,
  _CMl,
  _CND,
  _CNl,
  _CNS,
  _CNSl,
  _Co,
  _CR,
  _CRIGD,
  _CRIGDL,
  _CRl,
  _CSlu,
  _CT,
  _CTA,
  _CTB,
  _CTl,
  _D,
  _DC,
  _DCEe,
  _DCel,
  _DCER,
  _DCERe,
  _DCes,
  _DCN,
  _DCNR,
  _DCNRe,
  _DCRe,
  _DCRel,
  _DCRes,
  _DCResc,
  _DII,
  _EC,
  _ECD,
  _ECn,
  _ED,
  _EE,
  _EI,
  _EMv,
  _ERAE,
  _ERx,
  _ETA,
  _ETB,
  _ETv,
  _Ev,
  _F,
  _FC,
  _FM,
  _FNLI,
  _FSLC,
  _ICns,
  _Id,
  _IG,
  _IGM,
  _IGN,
  _IGn,
  _IGNC,
  _IGS,
  _IGSM,
  _IGTD,
  _II,
  _IIm,
  _IMns,
  _INLI,
  _Ins,
  _ISC,
  _ISns,
  _IT,
  _ITCB,
  _LCC,
  _LCE,
  _LCER,
  _LCERi,
  _LCNi,
  _LCNR,
  _LCNRi,
  _LES,
  _LSUT,
  _LT,
  _M,
  _Me,
  _MR,
  _NAR,
  _NARL,
  _ND,
  _NI,
  _NIo,
  _NLI,
  _NLIo,
  _NPM,
  _NR,
  _NT,
  _NTA,
  _Or,
  _OSDHC,
  _OVC,
  _PDH,
  _Pl,
  _PPI,
  _PPIr,
  _RIG,
  _RT,
  _SAE,
  _SBo,
  _SGI,
  _SIub,
  _SNLI,
  _SO,
  _SOP,
  _St,
  _Su,
  _SUC,
  _TCa,
  _TPA,
  _TPC,
  _TPS,
  _TSC,
  _Ty,
  _UCp,
  _UCR,
  _UCRp,
  _UCS,
  _UCSIG,
  _UCSIGS,
  _UCSR,
  _UCSRp,
  _USI,
  _VC,
  n0,
  VpcConfig,
} from "./schemas_0";
import { ClusterInstanceStorageConfigs, ClusterLifeCycleConfig } from "./schemas_11_Cluster";
import {
  ClusterAutoScalingConfig,
  ClusterInstanceGroupSpecifications,
  ClusterOrchestrator,
  ClusterRestrictedInstanceGroupSpecifications,
  ClusterTieredStorageConfig,
  DeploymentConfiguration,
  FSxLustreConfig,
  ScheduledUpdateConfig,
} from "./schemas_76_Cluster";

/* eslint no-var: 0 */

export var AddClusterNodeSpecification = struct(n0, _ACNS, 0, [_IGN, _ITCB], [0, 1]);
export var AdditionalEnis = struct(n0, _AE, 0, [_EE], [64 | 0]);
export var BatchAddClusterNodesError = struct(n0, _BACNE, 0, [_IGN, _EC, _FC, _Me], [0, 0, 1, 0]);
export var BatchAddClusterNodesRequest = struct(
  n0,
  _BACNR,
  0,
  [_CNl, _CTl, _NTA],
  [0, [0, 4], () => AddClusterNodeSpecificationList]
);
export var BatchAddClusterNodesResponse = struct(
  n0,
  _BACNRa,
  0,
  [_Su, _F],
  [() => NodeAdditionResultList, () => BatchAddClusterNodesErrorList]
);
export var BatchDeleteClusterNodeLogicalIdsError = struct(n0, _BDCNLIE, 0, [_Co, _Me, _NLI], [0, 0, 0]);
export var BatchDeleteClusterNodesError = struct(n0, _BDCNE, 0, [_Co, _Me, _NI], [0, 0, 0]);
export var BatchDeleteClusterNodesRequest = struct(n0, _BDCNR, 0, [_CNl, _NIo, _NLIo], [0, 64 | 0, 64 | 0]);
export var BatchDeleteClusterNodesResponse = struct(
  n0,
  _BDCNRa,
  0,
  [_F, _Su, _FNLI, _SNLI],
  [() => BatchDeleteClusterNodesErrorList, 64 | 0, () => BatchDeleteClusterNodeLogicalIdsErrorList, 64 | 0]
);
export var CapacityReservation = struct(n0, _CR, 0, [_Ar, _Ty], [0, 0]);
export var ClusterAutoScalingConfigOutput = struct(n0, _CASCO, 0, [_M, _ASTu, _St, _FM], [0, 0, 0, 0]);
export var ClusterEventDetail = struct(
  n0,
  _CED,
  0,
  [_EI, _CAl, _CNl, _IGN, _II, _RT, _ETv, _ED, _D],
  [0, 0, 0, 0, 0, 0, 4, () => EventDetails, 0]
);
export var ClusterEventSummary = struct(
  n0,
  _CES,
  0,
  [_EI, _CAl, _CNl, _IGN, _II, _RT, _ETv, _D],
  [0, 0, 0, 0, 0, 0, 4, 0]
);
export var ClusterInstanceGroupDetails = struct(
  n0,
  _CIGD,
  0,
  [_CCu, _TCa, _IGN, _IT, _LCC, _ERx, _TPC, _ISC, _OSDHC, _St, _TPA, _TPS, _OVC, _SUC, _CII, _DII],
  [
    1,
    1,
    0,
    0,
    () => ClusterLifeCycleConfig,
    0,
    1,
    () => ClusterInstanceStorageConfigs,
    64 | 0,
    0,
    0,
    0,
    () => VpcConfig,
    () => ScheduledUpdateConfig,
    0,
    0,
  ]
);
export var ClusterInstancePlacement = struct(n0, _CIP, 0, [_AZ, _AZI], [0, 0]);
export var ClusterInstanceStatusDetails = struct(n0, _CISD, 0, [_St, _Me], [0, 0]);
export var ClusterMetadata = struct(n0, _CMl, 0, [_FM, _ERAE, _SAE], [0, 64 | 0, 0]);
export var ClusterNodeDetails = struct(
  n0,
  _CND,
  0,
  [_IGN, _II, _NLI, _ISns, _IT, _LT, _LSUT, _LCC, _OVC, _TPC, _ISC, _PPI, _PPIr, _PDH, _Pl, _CII, _DII, _USI],
  [
    0,
    0,
    0,
    () => ClusterInstanceStatusDetails,
    0,
    4,
    4,
    () => ClusterLifeCycleConfig,
    () => VpcConfig,
    1,
    () => ClusterInstanceStorageConfigs,
    0,
    0,
    0,
    () => ClusterInstancePlacement,
    0,
    0,
    () => UltraServerInfo,
  ]
);
export var ClusterNodeSummary = struct(
  n0,
  _CNS,
  0,
  [_IGN, _II, _NLI, _IT, _LT, _LSUT, _ISns, _USI],
  [0, 0, 0, 0, 4, 4, () => ClusterInstanceStatusDetails, () => UltraServerInfo]
);
export var ClusterRestrictedInstanceGroupDetails = struct(
  n0,
  _CRIGD,
  0,
  [_CCu, _TCa, _IGN, _IT, _ERx, _TPC, _ISC, _OSDHC, _St, _TPA, _TPS, _OVC, _SUC, _ECn],
  [
    1,
    1,
    0,
    0,
    0,
    1,
    () => ClusterInstanceStorageConfigs,
    64 | 0,
    0,
    0,
    0,
    () => VpcConfig,
    () => ScheduledUpdateConfig,
    () => EnvironmentConfigDetails,
  ]
);
export var DeleteClusterRequest = struct(n0, _DCRe, 0, [_CNl], [0]);
export var DeleteClusterResponse = struct(n0, _DCRel, 0, [_CAl], [0]);
export var DescribeClusterEventRequest = struct(n0, _DCER, 0, [_EI, _CNl], [0, 0]);
export var DescribeClusterEventResponse = struct(n0, _DCERe, 0, [_ED], [() => ClusterEventDetail]);
export var DescribeClusterNodeRequest = struct(n0, _DCNR, 0, [_CNl, _NI, _NLI], [0, 0, 0]);
export var DescribeClusterNodeResponse = struct(n0, _DCNRe, 0, [_ND], [() => ClusterNodeDetails]);
export var DescribeClusterRequest = struct(n0, _DCRes, 0, [_CNl], [0]);
export var DescribeClusterResponse = struct(
  n0,
  _DCResc,
  0,
  [_CAl, _CNl, _CSlu, _CT, _FM, _IG, _RIG, _VC, _Or, _TSC, _NR, _NPM, _CRl, _ASu],
  [
    0,
    0,
    0,
    4,
    0,
    () => ClusterInstanceGroupDetailsList,
    () => ClusterRestrictedInstanceGroupDetailsList,
    () => VpcConfig,
    () => ClusterOrchestrator,
    () => ClusterTieredStorageConfig,
    0,
    0,
    0,
    () => ClusterAutoScalingConfigOutput,
  ]
);
export var EnvironmentConfigDetails = struct(n0, _ECD, 0, [_FSLC, _SOP], [() => FSxLustreConfig, 0]);
export var EventDetails = struct(n0, _ED, 0, [_EMv], [() => EventMetadata]);
export var InstanceGroupMetadata = struct(
  n0,
  _IGM,
  0,
  [_FM, _AZI, _CR, _SIub, _SGI, _AO],
  [0, 0, () => CapacityReservation, 0, 64 | 0, 0]
);
export var InstanceGroupScalingMetadata = struct(n0, _IGSM, 0, [_ICns, _TCa, _FM], [1, 1, 0]);
export var InstanceMetadata = struct(
  n0,
  _IMns,
  0,
  [_CEu, _AE, _CR, _FM, _LES, _NLI],
  [0, () => AdditionalEnis, () => CapacityReservation, 0, 0, 0]
);
export var ListClusterEventsRequest = struct(
  n0,
  _LCER,
  0,
  [_CNl, _IGN, _NI, _ETA, _ETB, _SBo, _SO, _RT, _MR, _NT],
  [0, 0, 0, 4, 4, 0, 0, 0, 1, 0]
);
export var ListClusterEventsResponse = struct(n0, _LCERi, 0, [_NT, _Ev], [0, () => ClusterEventSummaries]);
export var ListClusterNodesRequest = struct(
  n0,
  _LCNR,
  0,
  [_CNl, _CTA, _CTB, _IGNC, _MR, _NT, _SBo, _SO, _INLI],
  [0, 4, 4, 0, 1, 0, 0, 0, 2]
);
export var ListClusterNodesResponse = struct(n0, _LCNRi, 0, [_NT, _CNSl], [0, () => ClusterNodeSummaries]);
export var NodeAdditionResult = struct(n0, _NAR, 0, [_NLI, _IGN, _St], [0, 0, 0]);
export var UltraServerInfo = struct(n0, _USI, 0, [_Id], [0]);
export var UpdateClusterRequest = struct(
  n0,
  _UCR,
  0,
  [_CNl, _IG, _RIG, _TSC, _NR, _IGTD, _CRl, _ASu],
  [
    0,
    () => ClusterInstanceGroupSpecifications,
    () => ClusterRestrictedInstanceGroupSpecifications,
    () => ClusterTieredStorageConfig,
    0,
    64 | 0,
    0,
    () => ClusterAutoScalingConfig,
  ]
);
export var UpdateClusterResponse = struct(n0, _UCRp, 0, [_CAl], [0]);
export var UpdateClusterSoftwareInstanceGroupSpecification = struct(n0, _UCSIGS, 0, [_IGN], [0]);
export var UpdateClusterSoftwareRequest = struct(
  n0,
  _UCSR,
  0,
  [_CNl, _IG, _DC, _IIm],
  [0, () => UpdateClusterSoftwareInstanceGroups, () => DeploymentConfiguration, 0]
);
export var UpdateClusterSoftwareResponse = struct(n0, _UCSRp, 0, [_CAl], [0]);
export var AddClusterNodeSpecificationList = list(n0, _ACNSL, 0, () => AddClusterNodeSpecification);
export var BatchAddClusterNodesErrorList = list(n0, _BACNEL, 0, () => BatchAddClusterNodesError);
export var BatchDeleteClusterNodeLogicalIdsErrorList = list(
  n0,
  _BDCNLIEL,
  0,
  () => BatchDeleteClusterNodeLogicalIdsError
);
export var BatchDeleteClusterNodesErrorList = list(n0, _BDCNEL, 0, () => BatchDeleteClusterNodesError);
export var ClusterEventSummaries = list(n0, _CESl, 0, () => ClusterEventSummary);
export var ClusterInstanceGroupDetailsList = list(n0, _CIGDL, 0, () => ClusterInstanceGroupDetails);
export var ClusterInstanceGroupsToDelete = 64 | 0;

export var ClusterNodeIds = 64 | 0;

export var ClusterNodeLogicalIdList = 64 | 0;

export var ClusterNodeSummaries = list(n0, _CNSl, 0, () => ClusterNodeSummary);
export var ClusterRestrictedInstanceGroupDetailsList = list(
  n0,
  _CRIGDL,
  0,
  () => ClusterRestrictedInstanceGroupDetails
);
export var EfaEnis = 64 | 0;

export var EksRoleAccessEntries = 64 | 0;

export var NodeAdditionResultList = list(n0, _NARL, 0, () => NodeAdditionResult);
export var UpdateClusterSoftwareInstanceGroups = list(
  n0,
  _UCSIG,
  0,
  () => UpdateClusterSoftwareInstanceGroupSpecification
);
export var EventMetadata = uni(
  n0,
  _EMv,
  0,
  [_Cl, _IGn, _IGS, _Ins],
  [() => ClusterMetadata, () => InstanceGroupMetadata, () => InstanceGroupScalingMetadata, () => InstanceMetadata]
);
export var BatchAddClusterNodes = op(
  n0,
  _BACN,
  0,
  () => BatchAddClusterNodesRequest,
  () => BatchAddClusterNodesResponse
);
export var BatchDeleteClusterNodes = op(
  n0,
  _BDCN,
  0,
  () => BatchDeleteClusterNodesRequest,
  () => BatchDeleteClusterNodesResponse
);
export var DeleteCluster = op(
  n0,
  _DCel,
  0,
  () => DeleteClusterRequest,
  () => DeleteClusterResponse
);
export var DescribeCluster = op(
  n0,
  _DCes,
  0,
  () => DescribeClusterRequest,
  () => DescribeClusterResponse
);
export var DescribeClusterEvent = op(
  n0,
  _DCEe,
  0,
  () => DescribeClusterEventRequest,
  () => DescribeClusterEventResponse
);
export var DescribeClusterNode = op(
  n0,
  _DCN,
  0,
  () => DescribeClusterNodeRequest,
  () => DescribeClusterNodeResponse
);
export var ListClusterEvents = op(
  n0,
  _LCE,
  0,
  () => ListClusterEventsRequest,
  () => ListClusterEventsResponse
);
export var ListClusterNodes = op(
  n0,
  _LCNi,
  0,
  () => ListClusterNodesRequest,
  () => ListClusterNodesResponse
);
export var UpdateCluster = op(
  n0,
  _UCp,
  0,
  () => UpdateClusterRequest,
  () => UpdateClusterResponse
);
export var UpdateClusterSoftware = op(
  n0,
  _UCS,
  0,
  () => UpdateClusterSoftwareRequest,
  () => UpdateClusterSoftwareResponse
);
