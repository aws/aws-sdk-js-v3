// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InstanceRefreshInProgressFault as __InstanceRefreshInProgressFault } from "../models/index";
import {
  _AARN,
  _AC,
  _ACR,
  _AIT,
  _Al,
  _Ala,
  _AM,
  _AN,
  _ANc,
  _aQE,
  _AR,
  _AS,
  _ASG,
  _ASGARN,
  _ASGN,
  _ASGNT,
  _ASGNu,
  _ASGT,
  _ASGu,
  _ASI,
  _ASID,
  _ASIT,
  _ATcc,
  _ATd,
  _ATMMB,
  _ATMMBR,
  _AZ,
  _AZD,
  _AZIP,
  _AZv,
  _BEBM,
  _BEBMR,
  _BM,
  _BP,
  _BPF,
  _BPFR,
  _BTa,
  _c,
  _CASG,
  _CASGT,
  _CD,
  _CDS,
  _CM,
  _CMS,
  _Co,
  _Coo,
  _CP,
  _Cp,
  _CPFR,
  _CR,
  _CRI,
  _CRP,
  _CRRGA,
  _CRS,
  _CRT,
  _CT,
  _DASGe,
  _DASI,
  _DASIT,
  _DC,
  _DCe,
  _DCes,
  _DCT,
  _Di,
  _DIR,
  _DIRA,
  _DIRT,
  _DIW,
  _DPe,
  _DPTe,
  _DR,
  _DSI,
  _DWPAe,
  _DWPe,
  _DWPTe,
  _e,
  _EIT,
  _EIW,
  _EM,
  _EMn,
  _Ena,
  _ET,
  _Ex,
  _F,
  _Gr,
  _HCGP,
  _HCT,
  _hE,
  _HS,
  _HTe,
  _I,
  _i,
  _ID,
  _Id,
  _IF,
  _IG,
  _II,
  _IIn,
  _IIns,
  _IMP,
  _In,
  _IR,
  _IRI,
  _IRIn,
  _IRIPF,
  _IRLPP,
  _IRn,
  _IRns,
  _IRP,
  _IRPD,
  _IRWPP,
  _IT,
  _ITU,
  _ITUOR,
  _IW,
  _IZHCB,
  _L,
  _LBN,
  _LCN,
  _LHN,
  _LHS,
  _LHSi,
  _LHSL,
  _LPP,
  _LS,
  _LSo,
  _LST,
  _LT,
  _LTI,
  _LTi,
  _LTN,
  _LTO,
  _LTS,
  _M,
  _m,
  _Ma,
  _MAM,
  _MAS,
  _MAT,
  _MCB,
  _MCBB,
  _Me,
  _Met,
  _MGBPVC,
  _MGBPVCR,
  _MGPC,
  _MHP,
  _MHPa,
  _MIL,
  _MILB,
  _MIP,
  _MIUB,
  _MMB,
  _MMBR,
  _MN,
  _Mo,
  _MR,
  _MS,
  _MSa,
  _MSet,
  _MSetr,
  _MSPAPOOODP,
  _N,
  _NBG,
  _NBGR,
  _NIC,
  _NICR,
  _NIPFSI,
  _NM,
  _NT,
  _NTARN,
  _O,
  _ODAS,
  _ODBC,
  _ODMPPOLP,
  _ODPABC,
  _PARN,
  _PARNT,
  _PC,
  _PCe,
  _PCOR,
  _PD,
  _PDOR,
  _Pe,
  _PFRR,
  _PFRSR,
  _PFSI,
  _PG,
  _PMS,
  _PMT,
  _PN,
  _PNo,
  _PNr,
  _Pr,
  _PS,
  _PSC,
  _PSMSre,
  _PSP,
  _PSPT,
  _PTo,
  _PTol,
  _PToli,
  _R,
  _RARN,
  _RD,
  _RDe,
  _Re,
  _RHS,
  _RL,
  _RP,
  _RR,
  _RST,
  _S,
  _SA,
  _SAS,
  _SAt,
  _SAte,
  _SBT,
  _SIH,
  _SIHQ,
  _SIP,
  _SIPI,
  _SIR,
  _SIRA,
  _SIRT,
  _SIt,
  _SLRARN,
  _SMk,
  _SMP,
  _SMPPOLP,
  _SP,
  _SPc,
  _SPca,
  _SPu,
  _SR,
  _SRGP,
  _SRu,
  _ST,
  _St,
  _Stat,
  _Str,
  _SZSV,
  _T,
  _TGARN,
  _TLSGB,
  _TLSGBR,
  _TP,
  _TS,
  _TTC,
  _TTMDQ,
  _TTMDQa,
  _TTMS,
  _TV,
  _U,
  _UASG,
  _UASGT,
  _VCC,
  _VCCR,
  _Ve,
  _VPCZI,
  _WC,
  _WPC,
  _WPP,
  _WPS,
  _xN,
  _ZSE,
  n0,
  Unit,
} from "./schemas_0";
import { Metric, MetricDimensions, PredictiveScalingMetricSpecification } from "./schemas_3_Scaling";
import { InstanceReusePolicy } from "./schemas_7_WarmPool";
import { TrafficSources } from "./schemas_9_Groups";
import { Filters, TagDescriptionList, Tags } from "./schemas_15_Tags";

/* eslint no-var: 0 */

export var AcceleratorCountRequest = struct(n0, _ACR, 0, [_M, _Ma], [1, 1]);
export var AcceleratorTotalMemoryMiBRequest = struct(n0, _ATMMBR, 0, [_M, _Ma], [1, 1]);
export var Alarm = struct(n0, _Al, 0, [_AN, _AARN], [0, 0]);
export var AlarmSpecification = struct(n0, _AS, 0, [_Ala], [64 | 0]);
export var AutoScalingGroup = struct(
  n0,
  _ASG,
  0,
  [
    _ASGN,
    _ASGARN,
    _LCN,
    _LT,
    _MIP,
    _MS,
    _MSa,
    _DC,
    _PC,
    _DCe,
    _AZ,
    _LBN,
    _TGARN,
    _HCT,
    _HCGP,
    _I,
    _CT,
    _SP,
    _PG,
    _VPCZI,
    _EM,
    _S,
    _T,
    _TP,
    _NIPFSI,
    _SLRARN,
    _MIL,
    _CR,
    _WPC,
    _WPS,
    _Co,
    _DCT,
    _DIW,
    _TS,
    _IMP,
    _AZD,
    _AZIP,
    _CRS,
  ],
  [
    0,
    0,
    0,
    () => LaunchTemplateSpecification,
    [() => MixedInstancesPolicy, 0],
    1,
    1,
    1,
    1,
    1,
    64 | 0,
    64 | 0,
    64 | 0,
    0,
    1,
    () => Instances,
    4,
    () => SuspendedProcesses,
    0,
    0,
    () => EnabledMetrics,
    0,
    () => TagDescriptionList,
    64 | 0,
    2,
    0,
    1,
    2,
    () => WarmPoolConfiguration,
    1,
    0,
    0,
    1,
    () => TrafficSources,
    () => InstanceMaintenancePolicy,
    () => AvailabilityZoneDistribution,
    () => AvailabilityZoneImpairmentPolicy,
    () => CapacityReservationSpecification,
  ]
);
export var AutoScalingGroupNamesType = struct(
  n0,
  _ASGNT,
  0,
  [_ASGNu, _IIn, _NT, _MR, _F],
  [64 | 0, 2, 0, 1, () => Filters]
);
export var AutoScalingGroupsType = struct(n0, _ASGT, 0, [_ASGu, _NT], [[() => AutoScalingGroups, 0], 0]);
export var AutoScalingInstanceDetails = struct(
  n0,
  _ASID,
  0,
  [_IIns, _IT, _ASGN, _AZv, _LS, _HS, _LCN, _LT, _PFSI, _WC],
  [0, 0, 0, 0, 0, 0, 0, () => LaunchTemplateSpecification, 2, 0]
);
export var AutoScalingInstancesType = struct(n0, _ASIT, 0, [_ASI, _NT], [() => AutoScalingInstances, 0]);
export var AvailabilityZoneDistribution = struct(n0, _AZD, 0, [_CDS], [0]);
export var AvailabilityZoneImpairmentPolicy = struct(n0, _AZIP, 0, [_ZSE, _IZHCB], [2, 0]);
export var BaselineEbsBandwidthMbpsRequest = struct(n0, _BEBMR, 0, [_M, _Ma], [1, 1]);
export var BaselinePerformanceFactorsRequest = struct(n0, _BPFR, 0, [_Cp], [[() => CpuPerformanceFactorRequest, 0]]);
export var CapacityReservationSpecification = struct(n0, _CRS, 0, [_CRP, _CRT], [0, () => CapacityReservationTarget]);
export var CapacityReservationTarget = struct(n0, _CRT, 0, [_CRI, _CRRGA], [64 | 0, 64 | 0]);
export var CpuPerformanceFactorRequest = struct(
  n0,
  _CPFR,
  0,
  [_R],
  [
    [
      () => PerformanceFactorReferenceSetRequest,
      {
        [_xN]: _Re,
      },
    ],
  ]
);
export var CreateAutoScalingGroupType = struct(
  n0,
  _CASGT,
  0,
  [
    _ASGN,
    _LCN,
    _LT,
    _MIP,
    _IIns,
    _MS,
    _MSa,
    _DC,
    _DCe,
    _AZ,
    _LBN,
    _TGARN,
    _HCT,
    _HCGP,
    _PG,
    _VPCZI,
    _TP,
    _NIPFSI,
    _CR,
    _LHSL,
    _T,
    _SLRARN,
    _MIL,
    _Co,
    _DCT,
    _DIW,
    _TS,
    _IMP,
    _AZD,
    _AZIP,
    _SZSV,
    _CRS,
  ],
  [
    0,
    0,
    () => LaunchTemplateSpecification,
    [() => MixedInstancesPolicy, 0],
    0,
    1,
    1,
    1,
    1,
    64 | 0,
    64 | 0,
    64 | 0,
    0,
    1,
    0,
    0,
    64 | 0,
    2,
    2,
    () => LifecycleHookSpecifications,
    () => Tags,
    0,
    1,
    0,
    0,
    1,
    () => TrafficSources,
    () => InstanceMaintenancePolicy,
    () => AvailabilityZoneDistribution,
    () => AvailabilityZoneImpairmentPolicy,
    2,
    () => CapacityReservationSpecification,
  ]
);
export var CustomizedMetricSpecification = struct(
  n0,
  _CMS,
  0,
  [_MN, _N, _Di, _St, _U, _Pe, _Me],
  [0, 0, () => MetricDimensions, 0, 0, 1, () => TargetTrackingMetricDataQueries]
);
export var DescribeAutoScalingInstancesType = struct(n0, _DASIT, 0, [_II, _MR, _NT], [64 | 0, 1, 0]);
export var DescribeInstanceRefreshesAnswer = struct(n0, _DIRA, 0, [_IR, _NT], [[() => InstanceRefreshes, 0], 0]);
export var DescribeInstanceRefreshesType = struct(n0, _DIRT, 0, [_ASGN, _IRIn, _NT, _MR], [0, 64 | 0, 0, 1]);
export var DescribePoliciesType = struct(n0, _DPTe, 0, [_ASGN, _PNo, _PTo, _NT, _MR], [0, 64 | 0, 64 | 0, 0, 1]);
export var DescribeWarmPoolAnswer = struct(
  n0,
  _DWPAe,
  0,
  [_WPC, _I, _NT],
  [() => WarmPoolConfiguration, () => Instances, 0]
);
export var DescribeWarmPoolType = struct(n0, _DWPTe, 0, [_ASGN, _MR, _NT], [0, 1, 0]);
export var DesiredConfiguration = struct(
  n0,
  _DCes,
  0,
  [_LT, _MIP],
  [() => LaunchTemplateSpecification, [() => MixedInstancesPolicy, 0]]
);
export var EnabledMetric = struct(n0, _EMn, 0, [_Met, _Gr], [0, 0]);
export var Instance = struct(
  n0,
  _In,
  0,
  [_IIns, _IT, _AZv, _LS, _HS, _LCN, _LT, _PFSI, _WC],
  [0, 0, 0, 0, 0, 0, () => LaunchTemplateSpecification, 2, 0]
);
export var InstanceMaintenancePolicy = struct(n0, _IMP, 0, [_MHP, _MHPa], [1, 1]);
export var InstanceRefresh = struct(
  n0,
  _IRn,
  0,
  [_IRI, _ASGN, _S, _SR, _ST, _ET, _PCe, _ITU, _PD, _Pr, _DCes, _RD],
  [
    0,
    0,
    0,
    0,
    4,
    4,
    1,
    1,
    () => InstanceRefreshProgressDetails,
    () => RefreshPreferences,
    [() => DesiredConfiguration, 0],
    () => RollbackDetails,
  ]
);
export var InstanceRefreshInProgressFault = error(
  n0,
  _IRIPF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InstanceRefreshInProgress`, 400],
  },
  [_m],
  [0],

  __InstanceRefreshInProgressFault
);
export var InstanceRefreshLivePoolProgress = struct(n0, _IRLPP, 0, [_PCe, _ITU], [1, 1]);
export var InstanceRefreshProgressDetails = struct(
  n0,
  _IRPD,
  0,
  [_LPP, _WPP],
  [() => InstanceRefreshLivePoolProgress, () => InstanceRefreshWarmPoolProgress]
);
export var InstanceRefreshWarmPoolProgress = struct(n0, _IRWPP, 0, [_PCe, _ITU], [1, 1]);
export var InstanceRequirements = struct(
  n0,
  _IRns,
  0,
  [
    _VCC,
    _MMB,
    _CM,
    _MGBPVC,
    _EIT,
    _IG,
    _SMPPOLP,
    _MSPAPOOODP,
    _ODMPPOLP,
    _BM,
    _BP,
    _RHS,
    _NIC,
    _LSo,
    _LST,
    _TLSGB,
    _BEBM,
    _ATcc,
    _AC,
    _AM,
    _ANc,
    _ATMMB,
    _NBG,
    _AIT,
    _BPF,
  ],
  [
    () => VCpuCountRequest,
    () => MemoryMiBRequest,
    64 | 0,
    () => MemoryGiBPerVCpuRequest,
    64 | 0,
    64 | 0,
    1,
    1,
    1,
    0,
    0,
    2,
    () => NetworkInterfaceCountRequest,
    0,
    64 | 0,
    () => TotalLocalStorageGBRequest,
    () => BaselineEbsBandwidthMbpsRequest,
    64 | 0,
    () => AcceleratorCountRequest,
    64 | 0,
    64 | 0,
    () => AcceleratorTotalMemoryMiBRequest,
    () => NetworkBandwidthGbpsRequest,
    64 | 0,
    [() => BaselinePerformanceFactorsRequest, 0],
  ]
);
export var InstancesDistribution = struct(n0, _ID, 0, [_ODAS, _ODBC, _ODPABC, _SAS, _SIP, _SMP], [0, 1, 1, 0, 1, 0]);
export var LaunchTemplate = struct(n0, _LT, 0, [_LTS, _O], [() => LaunchTemplateSpecification, [() => Overrides, 0]]);
export var LaunchTemplateOverrides = struct(
  n0,
  _LTO,
  0,
  [_IT, _WC, _LTS, _IRns],
  [0, 0, () => LaunchTemplateSpecification, [() => InstanceRequirements, 0]]
);
export var LaunchTemplateSpecification = struct(n0, _LTS, 0, [_LTI, _LTN, _Ve], [0, 0, 0]);
export var LifecycleHookSpecification = struct(
  n0,
  _LHS,
  0,
  [_LHN, _LTi, _NM, _HTe, _DR, _NTARN, _RARN],
  [0, 0, 0, 1, 0, 0, 0]
);
export var MemoryGiBPerVCpuRequest = struct(n0, _MGBPVCR, 0, [_M, _Ma], [1, 1]);
export var MemoryMiBRequest = struct(n0, _MMBR, 0, [_M, _Ma], [1, 1]);
export var MixedInstancesPolicy = struct(
  n0,
  _MIP,
  0,
  [_LT, _ID],
  [[() => LaunchTemplate, 0], () => InstancesDistribution]
);
export var NetworkBandwidthGbpsRequest = struct(n0, _NBGR, 0, [_M, _Ma], [1, 1]);
export var NetworkInterfaceCountRequest = struct(n0, _NICR, 0, [_M, _Ma], [1, 1]);
export var PerformanceFactorReferenceRequest = struct(n0, _PFRR, 0, [_IF], [0]);
export var PoliciesType = struct(n0, _PTol, 0, [_SPc, _NT], [() => ScalingPolicies, 0]);
export var PolicyARNType = struct(n0, _PARNT, 0, [_PARN, _Ala], [0, () => Alarms]);
export var PredefinedMetricSpecification = struct(n0, _PMS, 0, [_PMT, _RL], [0, 0]);
export var PredictiveScalingConfiguration = struct(
  n0,
  _PSC,
  0,
  [_MSetr, _Mo, _SBT, _MCBB, _MCB],
  [() => PredictiveScalingMetricSpecifications, 0, 1, 0, 1]
);
export var PutScalingPolicyType = struct(
  n0,
  _PSPT,
  0,
  [_ASGN, _PN, _PToli, _ATd, _MAS, _MAM, _SA, _Coo, _MAT, _SAt, _EIW, _TTC, _Ena, _PSC],
  [
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    0,
    () => StepAdjustments,
    1,
    () => TargetTrackingConfiguration,
    2,
    () => PredictiveScalingConfiguration,
  ]
);
export var RefreshPreferences = struct(
  n0,
  _RP,
  0,
  [_MHP, _IW, _CP, _CD, _SMk, _AR, _SIPI, _SIt, _AS, _MHPa, _BTa],
  [1, 1, 64 | 1, 1, 2, 2, 0, 0, () => AlarmSpecification, 1, 1]
);
export var RollbackDetails = struct(
  n0,
  _RD,
  0,
  [_RR, _RST, _PCOR, _ITUOR, _PDOR],
  [0, 4, 1, 1, () => InstanceRefreshProgressDetails]
);
export var ScalingPolicy = struct(
  n0,
  _SPca,
  0,
  [_ASGN, _PN, _PARN, _PToli, _ATd, _MAS, _MAM, _SA, _Coo, _SAt, _MAT, _EIW, _Ala, _TTC, _Ena, _PSC],
  [
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    () => StepAdjustments,
    0,
    1,
    () => Alarms,
    () => TargetTrackingConfiguration,
    2,
    () => PredictiveScalingConfiguration,
  ]
);
export var SetInstanceHealthQuery = struct(n0, _SIHQ, 0, [_IIns, _HS, _SRGP], [0, 0, 2]);
export var StartInstanceRefreshAnswer = struct(n0, _SIRA, 0, [_IRI], [0]);
export var StartInstanceRefreshType = struct(
  n0,
  _SIRT,
  0,
  [_ASGN, _Str, _DCes, _Pr],
  [0, 0, [() => DesiredConfiguration, 0], () => RefreshPreferences]
);
export var StepAdjustment = struct(n0, _SAte, 0, [_MILB, _MIUB, _SA], [1, 1, 1]);
export var SuspendedProcess = struct(n0, _SPu, 0, [_PNr, _SRu], [0, 0]);
export var TargetTrackingConfiguration = struct(
  n0,
  _TTC,
  0,
  [_PMS, _CMS, _TV, _DSI],
  [() => PredefinedMetricSpecification, () => CustomizedMetricSpecification, 1, 2]
);
export var TargetTrackingMetricDataQuery = struct(
  n0,
  _TTMDQ,
  0,
  [_Id, _Ex, _MSet, _L, _Pe, _RDe],
  [0, 0, () => TargetTrackingMetricStat, 0, 1, 2]
);
export var TargetTrackingMetricStat = struct(n0, _TTMS, 0, [_Met, _Stat, _U, _Pe], [() => Metric, 0, 0, 1]);
export var TotalLocalStorageGBRequest = struct(n0, _TLSGBR, 0, [_M, _Ma], [1, 1]);
export var UpdateAutoScalingGroupType = struct(
  n0,
  _UASGT,
  0,
  [
    _ASGN,
    _LCN,
    _LT,
    _MIP,
    _MS,
    _MSa,
    _DC,
    _DCe,
    _AZ,
    _HCT,
    _HCGP,
    _PG,
    _VPCZI,
    _TP,
    _NIPFSI,
    _SLRARN,
    _MIL,
    _CR,
    _Co,
    _DCT,
    _DIW,
    _IMP,
    _AZD,
    _AZIP,
    _SZSV,
    _CRS,
  ],
  [
    0,
    0,
    () => LaunchTemplateSpecification,
    [() => MixedInstancesPolicy, 0],
    1,
    1,
    1,
    1,
    64 | 0,
    0,
    1,
    0,
    0,
    64 | 0,
    2,
    0,
    1,
    2,
    0,
    0,
    1,
    () => InstanceMaintenancePolicy,
    () => AvailabilityZoneDistribution,
    () => AvailabilityZoneImpairmentPolicy,
    2,
    () => CapacityReservationSpecification,
  ]
);
export var VCpuCountRequest = struct(n0, _VCCR, 0, [_M, _Ma], [1, 1]);
export var WarmPoolConfiguration = struct(
  n0,
  _WPC,
  0,
  [_MGPC, _MS, _PS, _S, _IRP],
  [1, 1, 0, 0, () => InstanceReusePolicy]
);
export var AcceleratorManufacturers = 64 | 0;

export var AcceleratorNames = 64 | 0;

export var AcceleratorTypes = 64 | 0;

export var AlarmList = 64 | 0;

export var Alarms = list(n0, _Ala, 0, () => Alarm);
export var AllowedInstanceTypes = 64 | 0;

export var AutoScalingGroups = list(n0, _ASGu, 0, [() => AutoScalingGroup, 0]);
export var AutoScalingInstances = list(n0, _ASI, 0, () => AutoScalingInstanceDetails);
export var AvailabilityZones = 64 | 0;

export var CapacityReservationIds = 64 | 0;

export var CapacityReservationResourceGroupArns = 64 | 0;

export var CheckpointPercentages = 64 | 1;

export var CpuManufacturers = 64 | 0;

export var EnabledMetrics = list(n0, _EM, 0, () => EnabledMetric);
export var ExcludedInstanceTypes = 64 | 0;

export var InstanceGenerations = 64 | 0;

export var InstanceRefreshes = list(n0, _IR, 0, [() => InstanceRefresh, 0]);
export var InstanceRefreshIds = 64 | 0;

export var Instances = list(n0, _I, 0, () => Instance);
export var LifecycleHookSpecifications = list(n0, _LHSi, 0, () => LifecycleHookSpecification);
export var LocalStorageTypes = 64 | 0;

export var Overrides = list(n0, _O, 0, [() => LaunchTemplateOverrides, 0]);
export var PerformanceFactorReferenceSetRequest = list(n0, _PFRSR, 0, [
  () => PerformanceFactorReferenceRequest,
  {
    [_xN]: _i,
  },
]);
export var PolicyNames = 64 | 0;

export var PolicyTypes = 64 | 0;

export var PredictiveScalingMetricSpecifications = list(n0, _PSMSre, 0, () => PredictiveScalingMetricSpecification);
export var ScalingPolicies = list(n0, _SPc, 0, () => ScalingPolicy);
export var StepAdjustments = list(n0, _SAt, 0, () => StepAdjustment);
export var SuspendedProcesses = list(n0, _SP, 0, () => SuspendedProcess);
export var TargetTrackingMetricDataQueries = list(n0, _TTMDQa, 0, () => TargetTrackingMetricDataQuery);
export var CreateAutoScalingGroup = op(
  n0,
  _CASG,
  0,
  () => CreateAutoScalingGroupType,
  () => Unit
);
export var DescribeAutoScalingGroups = op(
  n0,
  _DASGe,
  0,
  () => AutoScalingGroupNamesType,
  () => AutoScalingGroupsType
);
export var DescribeAutoScalingInstances = op(
  n0,
  _DASI,
  0,
  () => DescribeAutoScalingInstancesType,
  () => AutoScalingInstancesType
);
export var DescribeInstanceRefreshes = op(
  n0,
  _DIR,
  0,
  () => DescribeInstanceRefreshesType,
  () => DescribeInstanceRefreshesAnswer
);
export var DescribePolicies = op(
  n0,
  _DPe,
  0,
  () => DescribePoliciesType,
  () => PoliciesType
);
export var DescribeWarmPool = op(
  n0,
  _DWPe,
  0,
  () => DescribeWarmPoolType,
  () => DescribeWarmPoolAnswer
);
export var PutScalingPolicy = op(
  n0,
  _PSP,
  0,
  () => PutScalingPolicyType,
  () => PolicyARNType
);
export var SetInstanceHealth = op(
  n0,
  _SIH,
  0,
  () => SetInstanceHealthQuery,
  () => Unit
);
export var StartInstanceRefresh = op(
  n0,
  _SIR,
  0,
  () => StartInstanceRefreshType,
  () => StartInstanceRefreshAnswer
);
export var UpdateAutoScalingGroup = op(
  n0,
  _UASG,
  0,
  () => UpdateAutoScalingGroupType,
  () => Unit
);
