// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AIC,
  _AICv,
  _ARCu,
  _ATcc,
  _AUr,
  _BGUP,
  _BICN,
  _CCC,
  _CEI,
  _CEO,
  _CEr,
  _CICu,
  _Cont,
  _CRC,
  _CRP,
  _CRR,
  _CSana,
  _CSap,
  _CSapt,
  _CSCu,
  _CSPu,
  _CT,
  _CTA,
  _CTB,
  _CW,
  _DC,
  _DCC,
  _DCCe,
  _DCCS,
  _DEes,
  _DEIe,
  _DEO,
  _DIC,
  _DICes,
  _DICIe,
  _DICO,
  _DIe,
  _DIep,
  _DSCes,
  _DSU,
  _DW,
  _DWAC,
  _DWACe,
  _DWACL,
  _E,
  _EA,
  _ECN,
  _ECna,
  _ECR,
  _ECRc,
  _ECRI,
  _ECRL,
  _ECx,
  _EN,
  _End,
  _ENE,
  _ERVP,
  _ES,
  _ESL,
  _ESn,
  _FR,
  _ICA,
  _ICCSS,
  _ICN,
  _ICnf,
  _ICRCS,
  _ICS,
  _ICSL,
  _ICSnf,
  _ICSS,
  _IT,
  _KKI,
  _LDC,
  _LEI,
  _LEi,
  _LEO,
  _LIC,
  _LICI,
  _LICO,
  _LMT,
  _LMTA,
  _LMTB,
  _LSS,
  _MBS,
  _MCaxo,
  _METIS,
  _MIS,
  _MNo,
  _MR,
  _MRA,
  _NCa,
  _NT,
  _PCro,
  _PDS,
  _PPVS,
  _PPVSL,
  _PV,
  _PVCRS,
  _PVSLr,
  _PVSLro,
  _PVSr,
  _PVSro,
  _PVSUC,
  _RAVP,
  _RC,
  _RCo,
  _RDCet,
  _RI,
  _RMBS,
  _RTe,
  _RUP,
  _SBo,
  _SE,
  _SIp,
  _SM,
  _SO,
  _Sp,
  _SPt,
  _SPV,
  _St,
  _STt,
  _SUCe,
  _T,
  _TICo,
  _TRC,
  _TRCr,
  _TWIS,
  _Ty,
  _UBCE,
  _UE,
  _UEI,
  _UEO,
  _UEWAC,
  _UEWACI,
  _UEWACO,
  _Va,
  _VN,
  _VNE,
  _VPa,
  _VPL,
  _VPT,
  _VSar,
  _WIIS,
  n0,
  TagList,
} from "./schemas_0";
import {
  AsyncInferenceConfig,
  ExplainerConfig,
  ProductionVariantManagedInstanceScaling,
  ProductionVariantRoutingConfig,
} from "./schemas_2_Endpoint";
import { ProductionVariantServerlessConfig } from "./schemas_12_Endpoint";
import { AutoRollbackConfig, InferenceComponentDeploymentConfig } from "./schemas_76_Cluster";
import {
  InferenceComponentComputeResourceRequirements,
  InferenceComponentStartupParameters,
} from "./schemas_85_Inference";

/* eslint no-var: 0 */

export var BlueGreenUpdatePolicy = struct(n0, _BGUP, 0, [_TRC, _TWIS, _METIS], [() => TrafficRoutingConfig, 1, 1]);
export var CapacitySize = struct(n0, _CSap, 0, [_Ty, _Va], [0, 1]);
export var CreateEndpointInput = struct(
  n0,
  _CEI,
  0,
  [_EN, _ECN, _DC, _T],
  [0, 0, () => DeploymentConfig, () => TagList]
);
export var CreateEndpointOutput = struct(n0, _CEO, 0, [_EA], [0]);
export var DataCaptureConfigSummary = struct(n0, _DCCS, 0, [_ECna, _CSapt, _CSPu, _DSU, _KKI], [2, 0, 1, 0, 0]);
export var DeployedImage = struct(n0, _DIe, 0, [_SIp, _RI, _RTe], [0, 0, 4]);
export var DeploymentConfig = struct(
  n0,
  _DC,
  0,
  [_BGUP, _RUP, _ARCu],
  [() => BlueGreenUpdatePolicy, () => RollingUpdatePolicy, () => AutoRollbackConfig]
);
export var DescribeEndpointInput = struct(n0, _DEIe, 0, [_EN], [0]);
export var DescribeEndpointOutput = struct(
  n0,
  _DEO,
  0,
  [_EN, _EA, _ECN, _PV, _DCC, _ES, _FR, _CT, _LMT, _LDC, _AIC, _PDS, _ECx, _SPV],
  [
    0,
    0,
    0,
    () => ProductionVariantSummaryList,
    () => DataCaptureConfigSummary,
    0,
    0,
    4,
    4,
    () => DeploymentConfig,
    () => AsyncInferenceConfig,
    () => PendingDeploymentSummary,
    () => ExplainerConfig,
    () => ProductionVariantSummaryList,
  ]
);
export var DescribeInferenceComponentInput = struct(n0, _DICIe, 0, [_ICN], [0]);
export var DescribeInferenceComponentOutput = struct(
  n0,
  _DICO,
  0,
  [_ICN, _ICA, _EN, _EA, _VN, _FR, _Sp, _RC, _CT, _LMT, _ICS, _LDC],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    () => InferenceComponentSpecificationSummary,
    () => InferenceComponentRuntimeConfigSummary,
    4,
    4,
    0,
    () => InferenceComponentDeploymentConfig,
  ]
);
export var DesiredWeightAndCapacity = struct(
  n0,
  _DWAC,
  0,
  [_VN, _DW, _DIC, _SUCe],
  [0, 1, 1, () => ProductionVariantServerlessUpdateConfig]
);
export var Ec2CapacityReservation = struct(n0, _ECR, 0, [_ECRI, _TICo, _AICv, _UBCE], [0, 1, 1, 1]);
export var EndpointSummary = struct(n0, _ESn, 0, [_EN, _EA, _CT, _LMT, _ES], [0, 0, 4, 4, 0]);
export var InferenceComponentContainerSpecificationSummary = struct(
  n0,
  _ICCSS,
  0,
  [_DIe, _AUr, _E],
  [() => DeployedImage, 0, 128 | 0]
);
export var InferenceComponentRuntimeConfigSummary = struct(n0, _ICRCS, 0, [_DCCe, _CCC], [1, 1]);
export var InferenceComponentSpecificationSummary = struct(
  n0,
  _ICSS,
  0,
  [_MNo, _Cont, _SPt, _CRR, _BICN],
  [
    0,
    () => InferenceComponentContainerSpecificationSummary,
    () => InferenceComponentStartupParameters,
    () => InferenceComponentComputeResourceRequirements,
    0,
  ]
);
export var InferenceComponentSummary = struct(
  n0,
  _ICSnf,
  0,
  [_CT, _ICA, _ICN, _EA, _EN, _VN, _ICS, _LMT],
  [4, 0, 0, 0, 0, 0, 0, 4]
);
export var ListEndpointsInput = struct(
  n0,
  _LEI,
  0,
  [_SBo, _SO, _NT, _MR, _NCa, _CTB, _CTA, _LMTB, _LMTA, _SE],
  [0, 0, 0, 1, 0, 4, 4, 4, 4, 0]
);
export var ListEndpointsOutput = struct(n0, _LEO, 0, [_End, _NT], [() => EndpointSummaryList, 0]);
export var ListInferenceComponentsInput = struct(
  n0,
  _LICI,
  0,
  [_SBo, _SO, _NT, _MR, _NCa, _CTB, _CTA, _LMTB, _LMTA, _SE, _ENE, _VNE],
  [0, 0, 0, 1, 0, 4, 4, 4, 4, 0, 0, 0]
);
export var ListInferenceComponentsOutput = struct(n0, _LICO, 0, [_ICnf, _NT], [() => InferenceComponentSummaryList, 0]);
export var PendingDeploymentSummary = struct(
  n0,
  _PDS,
  0,
  [_ECN, _PV, _STt, _SPV],
  [0, () => PendingProductionVariantSummaryList, 4, () => PendingProductionVariantSummaryList]
);
export var PendingProductionVariantSummary = struct(
  n0,
  _PPVS,
  0,
  [_VN, _DIep, _CW, _DW, _CICu, _DIC, _IT, _ATcc, _VSar, _CSCu, _DSCes, _MIS, _RCo],
  [
    0,
    () => DeployedImages,
    1,
    1,
    1,
    1,
    0,
    0,
    () => ProductionVariantStatusList,
    () => ProductionVariantServerlessConfig,
    () => ProductionVariantServerlessConfig,
    () => ProductionVariantManagedInstanceScaling,
    () => ProductionVariantRoutingConfig,
  ]
);
export var ProductionVariantCapacityReservationSummary = struct(
  n0,
  _PVCRS,
  0,
  [_MRA, _CRP, _TICo, _AICv, _UBCE, _ECRc],
  [0, 0, 1, 1, 1, () => Ec2CapacityReservationsList]
);
export var ProductionVariantServerlessUpdateConfig = struct(n0, _PVSUC, 0, [_MCaxo, _PCro], [1, 1]);
export var ProductionVariantStatus = struct(n0, _PVSr, 0, [_St, _SM, _STt], [0, 0, 4]);
export var ProductionVariantSummary = struct(
  n0,
  _PVSro,
  0,
  [_VN, _DIep, _CW, _DW, _CICu, _DIC, _VSar, _CSCu, _DSCes, _MIS, _RCo, _CRC],
  [
    0,
    () => DeployedImages,
    1,
    1,
    1,
    1,
    () => ProductionVariantStatusList,
    () => ProductionVariantServerlessConfig,
    () => ProductionVariantServerlessConfig,
    () => ProductionVariantManagedInstanceScaling,
    () => ProductionVariantRoutingConfig,
    () => ProductionVariantCapacityReservationSummary,
  ]
);
export var RollingUpdatePolicy = struct(
  n0,
  _RUP,
  0,
  [_MBS, _WIIS, _METIS, _RMBS],
  [() => CapacitySize, 1, 1, () => CapacitySize]
);
export var TrafficRoutingConfig = struct(
  n0,
  _TRCr,
  0,
  [_Ty, _WIIS, _CSana, _LSS],
  [0, 1, () => CapacitySize, () => CapacitySize]
);
export var UpdateEndpointInput = struct(
  n0,
  _UEI,
  0,
  [_EN, _ECN, _RAVP, _ERVP, _DC, _RDCet],
  [0, 0, 2, () => VariantPropertyList, () => DeploymentConfig, 2]
);
export var UpdateEndpointOutput = struct(n0, _UEO, 0, [_EA], [0]);
export var UpdateEndpointWeightsAndCapacitiesInput = struct(
  n0,
  _UEWACI,
  0,
  [_EN, _DWACe],
  [0, () => DesiredWeightAndCapacityList]
);
export var UpdateEndpointWeightsAndCapacitiesOutput = struct(n0, _UEWACO, 0, [_EA], [0]);
export var VariantProperty = struct(n0, _VPa, 0, [_VPT], [0]);
export var DeployedImages = list(n0, _DIep, 0, () => DeployedImage);
export var DesiredWeightAndCapacityList = list(n0, _DWACL, 0, () => DesiredWeightAndCapacity);
export var Ec2CapacityReservationsList = list(n0, _ECRL, 0, () => Ec2CapacityReservation);
export var EndpointSummaryList = list(n0, _ESL, 0, () => EndpointSummary);
export var InferenceComponentSummaryList = list(n0, _ICSL, 0, () => InferenceComponentSummary);
export var PendingProductionVariantSummaryList = list(n0, _PPVSL, 0, () => PendingProductionVariantSummary);
export var ProductionVariantStatusList = list(n0, _PVSLr, 0, () => ProductionVariantStatus);
export var ProductionVariantSummaryList = list(n0, _PVSLro, 0, () => ProductionVariantSummary);
export var VariantPropertyList = list(n0, _VPL, 0, () => VariantProperty);
export var CreateEndpoint = op(
  n0,
  _CEr,
  0,
  () => CreateEndpointInput,
  () => CreateEndpointOutput
);
export var DescribeEndpoint = op(
  n0,
  _DEes,
  0,
  () => DescribeEndpointInput,
  () => DescribeEndpointOutput
);
export var DescribeInferenceComponent = op(
  n0,
  _DICes,
  0,
  () => DescribeInferenceComponentInput,
  () => DescribeInferenceComponentOutput
);
export var ListEndpoints = op(
  n0,
  _LEi,
  0,
  () => ListEndpointsInput,
  () => ListEndpointsOutput
);
export var ListInferenceComponents = op(
  n0,
  _LIC,
  0,
  () => ListInferenceComponentsInput,
  () => ListInferenceComponentsOutput
);
export var UpdateEndpoint = op(
  n0,
  _UE,
  0,
  () => UpdateEndpointInput,
  () => UpdateEndpointOutput
);
export var UpdateEndpointWeightsAndCapacities = op(
  n0,
  _UEWAC,
  0,
  () => UpdateEndpointWeightsAndCapacitiesInput,
  () => UpdateEndpointWeightsAndCapacitiesOutput
);
