// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _ADDJP,
  _ADDJU,
  _AI,
  _AIF,
  _AIFI,
  _AIFO,
  _AIG,
  _AIGI,
  _AIGO,
  _AL,
  _AMSG,
  _Ap,
  _Ar,
  _AS,
  _ASP,
  _ASR,
  _ASSG,
  _AT,
  _ATP,
  _AV,
  _BA,
  _BACL,
  _BDM,
  _BP,
  _BPAC,
  _BPACM,
  _BPAPOODP,
  _BPSGR,
  _CA,
  _CAI,
  _CBA,
  _CDT,
  _CI,
  _Cl,
  _CLon,
  _Clu,
  _Co,
  _Con,
  _Conf,
  _Cont,
  _CRO,
  _CRP,
  _CRRGA,
  _CRTPP,
  _CV,
  _DC,
  _DCI,
  _DCO,
  _Dev,
  _DT,
  _EAZ,
  _EBD,
  _EBDb,
  _EBDC,
  _EBDCb,
  _EBDCL,
  _EBDL,
  _EC,
  _ECIITT,
  _EDT,
  _EIA,
  _EKN,
  _EMMSG,
  _EMSSG,
  _EO,
  _ERVI,
  _ERVS,
  _ERVT,
  _ES,
  _ESI,
  _ESIc,
  _GBPAC,
  _GBPACI,
  _GBPACO,
  _HV,
  _I,
  _IC,
  _ICT,
  _IF,
  _IFC,
  _IFCL,
  _IFI,
  _IFL,
  _IFMC,
  _IFn,
  _IFPS,
  _IFRS,
  _IFS,
  _IFSCR,
  _IFT,
  _IFTn,
  _IG,
  _IGC,
  _IGCL,
  _IGI,
  _IGIn,
  _IGL,
  _IGMC,
  _IGMCL,
  _IGn,
  _IGS,
  _IGSCR,
  _IGT,
  _IGTn,
  _IIP,
  _Ins,
  _Io,
  _IR,
  _IRP,
  _ITC,
  _ITCL,
  _ITCn,
  _ITn,
  _ITP,
  _ITS,
  _ITSL,
  _ITSn,
  _ITT,
  _ITTn,
  _JFI,
  _JFIC,
  _JFR,
  _KA,
  _KAP,
  _KJFAWNS,
  _LEKKI,
  _LIF,
  _LIFI,
  _LIFO,
  _LIG,
  _LIGI,
  _LIGO,
  _LS,
  _LSAC,
  _LSACV,
  _LU,
  _M,
  _Ma,
  _Mar,
  _MIF,
  _MIFI,
  _MIG,
  _MIGI,
  _MIT,
  _MPDN,
  _MRa,
  _MRi,
  _MSP,
  _N,
  _NIH,
  _NSP,
  _NSPL,
  _OA,
  _ODCRO,
  _ODPS,
  _ODRS,
  _ODRSn,
  _ODS,
  _OSRL,
  _P,
  _PBPAC,
  _PBPACI,
  _PBPACO,
  _PG,
  _PGC,
  _PGCL,
  _PGCl,
  _Pl,
  _PODC,
  _PPSGRR,
  _PR,
  _Pr,
  _PRo,
  _PS,
  _PSC,
  _RAV,
  _RAVu,
  _RDT,
  _Rea,
  _REAZ,
  _RESI,
  _RIC,
  _RICu,
  _RJF,
  _RJFI,
  _RJFO,
  _RL,
  _RS,
  _RT,
  _RUOB,
  _S,
  _SASG,
  _SC,
  _SCL,
  _SCR,
  _SDB,
  _SIGB,
  _SIT,
  _SPC,
  _SPh,
  _SPS,
  _SPu,
  _SR,
  _SRS,
  _SRSp,
  _SS,
  _St,
  _Sta,
  _T,
  _TA,
  _TDM,
  _Thr,
  _Ti,
  _TODC,
  _TP,
  _TSC,
  _UNR,
  _US,
  _V,
  _VPI,
  _VS,
  _VT,
  _VTAU,
  _WC,
  n0,
  Unit,
} from "./schemas_0";
import { AutoScalingPolicy, AutoScalingPolicyDescription } from "./schemas_1_Instance";
import { ManagedScalingPolicy } from "./schemas_3_Policy";
import { BootstrapActionConfig, PlacementType, StepConfigList } from "./schemas_7_Job";
import { AutoTerminationPolicy } from "./schemas_13_Policy";
import { TagList } from "./schemas_15_Describe";
import { ClusterStatus } from "./schemas_23_Describe";

/* eslint no-var: 0 */

export var AddInstanceFleetInput = struct(n0, _AIFI, 0, [_CI, _IF], [0, () => InstanceFleetConfig]);
export var AddInstanceFleetOutput = struct(n0, _AIFO, 0, [_CI, _IFI, _CA], [0, 0, 0]);
export var AddInstanceGroupsInput = struct(n0, _AIGI, 0, [_IG, _JFI], [() => InstanceGroupConfigList, 0]);
export var AddInstanceGroupsOutput = struct(n0, _AIGO, 0, [_JFI, _IGI, _CA], [0, 64 | 0, 0]);
export var Application = struct(n0, _A, 0, [_N, _V, _Ar, _AI], [0, 0, 64 | 0, 128 | 0]);
export var BlockPublicAccessConfiguration = struct(
  n0,
  _BPAC,
  0,
  [_BPSGR, _PPSGRR, _Cl, _Con, _P],
  [2, () => PortRanges, 0, () => ConfigurationList, 128 | 0]
);
export var BlockPublicAccessConfigurationMetadata = struct(n0, _BPACM, 0, [_CDT, _CBA], [4, 0]);
export var Cluster = struct(
  n0,
  _Clu,
  0,
  [
    _I,
    _N,
    _St,
    _EIA,
    _ICT,
    _LU,
    _LEKKI,
    _RAV,
    _RAVu,
    _RL,
    _AT,
    _TP,
    _UNR,
    _VTAU,
    _Ap,
    _T,
    _SR,
    _NIH,
    _MPDN,
    _Con,
    _SC,
    _ASR,
    _SDB,
    _CAI,
    _ERVS,
    _RUOB,
    _KA,
    _CA,
    _OA,
    _SCL,
    _PG,
    _OSRL,
    _ERVI,
    _ERVT,
    _ES,
  ],
  [
    0,
    0,
    () => ClusterStatus,
    () => Ec2InstanceAttributes,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    2,
    2,
    2,
    () => ApplicationList,
    () => TagList,
    0,
    1,
    0,
    () => ConfigurationList,
    0,
    0,
    0,
    0,
    1,
    0,
    () => KerberosAttributes,
    0,
    0,
    1,
    () => PlacementGroupConfigList,
    0,
    1,
    1,
    2,
  ]
);
export var Configuration = struct(n0, _Conf, 0, [_Cl, _Con, _P], [0, () => ConfigurationList, 128 | 0]);
export var DescribeClusterInput = struct(n0, _DCI, 0, [_CI], [0]);
export var DescribeClusterOutput = struct(n0, _DCO, 0, [_Clu], [() => Cluster]);
export var EbsBlockDevice = struct(n0, _EBD, 0, [_VS, _Dev], [() => VolumeSpecification, 0]);
export var EbsBlockDeviceConfig = struct(n0, _EBDC, 0, [_VS, _VPI], [() => VolumeSpecification, 1]);
export var EbsConfiguration = struct(n0, _EC, 0, [_EBDCb, _EO], [() => EbsBlockDeviceConfigList, 2]);
export var Ec2InstanceAttributes = struct(
  n0,
  _EIA,
  0,
  [_EKN, _ESI, _RESI, _EAZ, _REAZ, _IIP, _EMMSG, _EMSSG, _SASG, _AMSG, _ASSG],
  [0, 0, 64 | 0, 0, 64 | 0, 0, 0, 0, 0, 64 | 0, 64 | 0]
);
export var GetBlockPublicAccessConfigurationInput = struct(n0, _GBPACI, 0, [], []);
export var GetBlockPublicAccessConfigurationOutput = struct(
  n0,
  _GBPACO,
  0,
  [_BPAC, _BPACM],
  [() => BlockPublicAccessConfiguration, () => BlockPublicAccessConfigurationMetadata]
);
export var InstanceFleet = struct(
  n0,
  _IF,
  0,
  [_I, _N, _St, _IFT, _TODC, _TSC, _PODC, _PSC, _ITS, _LS, _RS, _Cont],
  [
    0,
    0,
    () => InstanceFleetStatus,
    0,
    1,
    1,
    1,
    1,
    () => InstanceTypeSpecificationList,
    () => InstanceFleetProvisioningSpecifications,
    () => InstanceFleetResizingSpecifications,
    0,
  ]
);
export var InstanceFleetConfig = struct(
  n0,
  _IFC,
  0,
  [_N, _IFT, _TODC, _TSC, _ITC, _LS, _RS, _Cont],
  [
    0,
    0,
    1,
    1,
    () => InstanceTypeConfigList,
    () => InstanceFleetProvisioningSpecifications,
    () => InstanceFleetResizingSpecifications,
    0,
  ]
);
export var InstanceFleetModifyConfig = struct(
  n0,
  _IFMC,
  0,
  [_IFI, _TODC, _TSC, _RS, _ITC, _Cont],
  [0, 1, 1, () => InstanceFleetResizingSpecifications, () => InstanceTypeConfigList, 0]
);
export var InstanceFleetProvisioningSpecifications = struct(
  n0,
  _IFPS,
  0,
  [_SS, _ODS],
  [() => SpotProvisioningSpecification, () => OnDemandProvisioningSpecification]
);
export var InstanceFleetResizingSpecifications = struct(
  n0,
  _IFRS,
  0,
  [_SRS, _ODRS],
  [() => SpotResizingSpecification, () => OnDemandResizingSpecification]
);
export var InstanceFleetStateChangeReason = struct(n0, _IFSCR, 0, [_Co, _M], [0, 0]);
export var InstanceFleetStatus = struct(
  n0,
  _IFS,
  0,
  [_Sta, _SCR, _Ti],
  [0, () => InstanceFleetStateChangeReason, () => InstanceFleetTimeline]
);
export var InstanceFleetTimeline = struct(n0, _IFTn, 0, [_CDT, _RDT, _EDT], [4, 4, 4]);
export var InstanceGroup = struct(
  n0,
  _IGn,
  0,
  [_I, _N, _Ma, _IGT, _BP, _ITn, _RIC, _RICu, _St, _Con, _CV, _LSAC, _LSACV, _EBDb, _EO, _SPh, _ASP, _CAI],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    () => InstanceGroupStatus,
    () => ConfigurationList,
    1,
    () => ConfigurationList,
    1,
    () => EbsBlockDeviceList,
    2,
    () => ShrinkPolicy,
    () => AutoScalingPolicyDescription,
    0,
  ]
);
export var InstanceGroupConfig = struct(
  n0,
  _IGC,
  0,
  [_N, _Ma, _IR, _BP, _ITn, _IC, _Con, _EC, _ASP, _CAI],
  [0, 0, 0, 0, 0, 1, () => ConfigurationList, () => EbsConfiguration, () => AutoScalingPolicy, 0]
);
export var InstanceGroupModifyConfig = struct(
  n0,
  _IGMC,
  0,
  [_IGIn, _IC, _ECIITT, _SPh, _RT, _Con],
  [0, 1, 64 | 0, () => ShrinkPolicy, 0, () => ConfigurationList]
);
export var InstanceGroupStateChangeReason = struct(n0, _IGSCR, 0, [_Co, _M], [0, 0]);
export var InstanceGroupStatus = struct(
  n0,
  _IGS,
  0,
  [_Sta, _SCR, _Ti],
  [0, () => InstanceGroupStateChangeReason, () => InstanceGroupTimeline]
);
export var InstanceGroupTimeline = struct(n0, _IGTn, 0, [_CDT, _RDT, _EDT], [4, 4, 4]);
export var InstanceResizePolicy = struct(n0, _IRP, 0, [_ITT, _ITP, _ITTn], [64 | 0, 64 | 0, 1]);
export var InstanceTypeConfig = struct(
  n0,
  _ITCn,
  0,
  [_ITn, _WC, _BP, _BPAPOODP, _EC, _Con, _CAI, _Pr],
  [0, 1, 0, 1, () => EbsConfiguration, () => ConfigurationList, 0, 1]
);
export var InstanceTypeSpecification = struct(
  n0,
  _ITSn,
  0,
  [_ITn, _WC, _BP, _BPAPOODP, _Con, _EBDb, _EO, _CAI, _Pr],
  [0, 1, 0, 1, () => ConfigurationList, () => EbsBlockDeviceList, 2, 0, 1]
);
export var JobFlowInstancesConfig = struct(
  n0,
  _JFIC,
  0,
  [_MIT, _SIT, _IC, _IG, _IFn, _EKN, _Pl, _KJFAWNS, _TP, _UNR, _HV, _ESI, _ESIc, _EMMSG, _EMSSG, _SASG, _AMSG, _ASSG],
  [
    0,
    0,
    1,
    () => InstanceGroupConfigList,
    () => InstanceFleetConfigList,
    0,
    () => PlacementType,
    2,
    2,
    2,
    0,
    0,
    64 | 0,
    0,
    0,
    0,
    64 | 0,
    64 | 0,
  ]
);
export var KerberosAttributes = struct(n0, _KA, 0, [_Rea, _KAP, _CRTPP, _ADDJU, _ADDJP], [0, 0, 0, 0, 0]);
export var ListInstanceFleetsInput = struct(n0, _LIFI, 0, [_CI, _Mar], [0, 0]);
export var ListInstanceFleetsOutput = struct(n0, _LIFO, 0, [_IFn, _Mar], [() => InstanceFleetList, 0]);
export var ListInstanceGroupsInput = struct(n0, _LIGI, 0, [_CI, _Mar], [0, 0]);
export var ListInstanceGroupsOutput = struct(n0, _LIGO, 0, [_IG, _Mar], [() => InstanceGroupList, 0]);
export var ModifyInstanceFleetInput = struct(n0, _MIFI, 0, [_CI, _IF], [0, () => InstanceFleetModifyConfig]);
export var ModifyInstanceGroupsInput = struct(n0, _MIGI, 0, [_CI, _IG], [0, () => InstanceGroupModifyConfigList]);
export var OnDemandCapacityReservationOptions = struct(n0, _ODCRO, 0, [_US, _CRP, _CRRGA], [0, 0, 0]);
export var OnDemandProvisioningSpecification = struct(
  n0,
  _ODPS,
  0,
  [_AS, _CRO],
  [0, () => OnDemandCapacityReservationOptions]
);
export var OnDemandResizingSpecification = struct(
  n0,
  _ODRSn,
  0,
  [_TDM, _AS, _CRO],
  [1, 0, () => OnDemandCapacityReservationOptions]
);
export var PlacementGroupConfig = struct(n0, _PGC, 0, [_IR, _PS], [0, 0]);
export var PortRange = struct(n0, _PR, 0, [_MRi, _MRa], [1, 1]);
export var PutBlockPublicAccessConfigurationInput = struct(
  n0,
  _PBPACI,
  0,
  [_BPAC],
  [() => BlockPublicAccessConfiguration]
);
export var PutBlockPublicAccessConfigurationOutput = struct(n0, _PBPACO, 0, [], []);
export var RunJobFlowInput = struct(
  n0,
  _RJFI,
  0,
  [
    _N,
    _LU,
    _LEKKI,
    _AI,
    _AV,
    _RL,
    _Ins,
    _S,
    _BA,
    _SPu,
    _NSP,
    _Ap,
    _Con,
    _VTAU,
    _JFR,
    _SR,
    _T,
    _SC,
    _ASR,
    _SDB,
    _CAI,
    _ERVS,
    _RUOB,
    _KA,
    _SCL,
    _MSP,
    _PGCl,
    _ATP,
    _OSRL,
    _ERVI,
    _ERVT,
    _ES,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    () => JobFlowInstancesConfig,
    () => StepConfigList,
    () => BootstrapActionConfigList,
    64 | 0,
    () => NewSupportedProductsList,
    () => ApplicationList,
    () => ConfigurationList,
    2,
    0,
    0,
    () => TagList,
    0,
    0,
    0,
    0,
    1,
    0,
    () => KerberosAttributes,
    1,
    () => ManagedScalingPolicy,
    () => PlacementGroupConfigList,
    () => AutoTerminationPolicy,
    0,
    1,
    1,
    2,
  ]
);
export var RunJobFlowOutput = struct(n0, _RJFO, 0, [_JFI, _CA], [0, 0]);
export var ShrinkPolicy = struct(n0, _SPh, 0, [_DT, _IRP], [1, () => InstanceResizePolicy]);
export var SpotProvisioningSpecification = struct(n0, _SPS, 0, [_TDM, _TA, _BDM, _AS], [1, 0, 1, 0]);
export var SpotResizingSpecification = struct(n0, _SRSp, 0, [_TDM, _AS], [1, 0]);
export var SupportedProductConfig = struct(n0, _SPC, 0, [_N, _Ar], [0, 64 | 0]);
export var VolumeSpecification = struct(n0, _VS, 0, [_VT, _Io, _SIGB, _Thr], [0, 1, 1, 1]);
export var ApplicationList = list(n0, _AL, 0, () => Application);
export var BootstrapActionConfigList = list(n0, _BACL, 0, () => BootstrapActionConfig);
export var ConfigurationList = list(n0, _CLon, 0, () => Configuration);
export var EbsBlockDeviceConfigList = list(n0, _EBDCL, 0, () => EbsBlockDeviceConfig);
export var EbsBlockDeviceList = list(n0, _EBDL, 0, () => EbsBlockDevice);
export var EC2InstanceIdsList = 64 | 0;

export var EC2InstanceIdsToTerminateList = 64 | 0;

export var InstanceFleetConfigList = list(n0, _IFCL, 0, () => InstanceFleetConfig);
export var InstanceFleetList = list(n0, _IFL, 0, () => InstanceFleet);
export var InstanceGroupConfigList = list(n0, _IGCL, 0, () => InstanceGroupConfig);
export var InstanceGroupIdsList = 64 | 0;

export var InstanceGroupList = list(n0, _IGL, 0, () => InstanceGroup);
export var InstanceGroupModifyConfigList = list(n0, _IGMCL, 0, () => InstanceGroupModifyConfig);
export var InstanceTypeConfigList = list(n0, _ITCL, 0, () => InstanceTypeConfig);
export var InstanceTypeSpecificationList = list(n0, _ITSL, 0, () => InstanceTypeSpecification);
export var NewSupportedProductsList = list(n0, _NSPL, 0, () => SupportedProductConfig);
export var PlacementGroupConfigList = list(n0, _PGCL, 0, () => PlacementGroupConfig);
export var PortRanges = list(n0, _PRo, 0, () => PortRange);
export var SecurityGroupsList = 64 | 0;

export var AddInstanceFleet = op(
  n0,
  _AIF,
  0,
  () => AddInstanceFleetInput,
  () => AddInstanceFleetOutput
);
export var AddInstanceGroups = op(
  n0,
  _AIG,
  0,
  () => AddInstanceGroupsInput,
  () => AddInstanceGroupsOutput
);
export var DescribeCluster = op(
  n0,
  _DC,
  0,
  () => DescribeClusterInput,
  () => DescribeClusterOutput
);
export var GetBlockPublicAccessConfiguration = op(
  n0,
  _GBPAC,
  0,
  () => GetBlockPublicAccessConfigurationInput,
  () => GetBlockPublicAccessConfigurationOutput
);
export var ListInstanceFleets = op(
  n0,
  _LIF,
  0,
  () => ListInstanceFleetsInput,
  () => ListInstanceFleetsOutput
);
export var ListInstanceGroups = op(
  n0,
  _LIG,
  0,
  () => ListInstanceGroupsInput,
  () => ListInstanceGroupsOutput
);
export var ModifyInstanceFleet = op(
  n0,
  _MIF,
  0,
  () => ModifyInstanceFleetInput,
  () => Unit
);
export var ModifyInstanceGroups = op(
  n0,
  _MIG,
  0,
  () => ModifyInstanceGroupsInput,
  () => Unit
);
export var PutBlockPublicAccessConfiguration = op(
  n0,
  _PBPAC,
  0,
  () => PutBlockPublicAccessConfigurationInput,
  () => PutBlockPublicAccessConfigurationOutput
);
export var RunJobFlow = op(
  n0,
  _RJF,
  0,
  () => RunJobFlowInput,
  () => RunJobFlowOutput
);
