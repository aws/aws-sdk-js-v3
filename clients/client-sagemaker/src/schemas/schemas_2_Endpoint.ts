// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AIC,
  _AICC,
  _AINC,
  _AIOC,
  _Ar,
  _ATcc,
  _CC,
  _CCTH,
  _CDCo,
  _CEC,
  _CECI,
  _CECO,
  _CECr,
  _CIC,
  _CMa,
  _CO,
  _COa,
  _COL,
  _CRC,
  _CRP,
  _CSBC,
  _CSCl,
  _CSHCTIS,
  _CT,
  _CTA,
  _CTB,
  _CTC,
  _CTom,
  _CTont,
  _D,
  _DCC,
  _DEC,
  _DECe,
  _DECI,
  _DECIe,
  _DECO,
  _DIEes,
  _DIERes,
  _DIEResc,
  _DSCa,
  _DSU,
  _ECA,
  _ECN,
  _ECna,
  _ECndp,
  _ECS,
  _ECSL,
  _ECx,
  _EEn,
  _EM,
  _EN,
  _ENI,
  _ERA,
  _ES,
  _ESSMA,
  _ETr,
  _FA,
  _FH,
  _FR,
  _FT,
  _G,
  _IAV,
  _ICn,
  _ICnfr,
  _IIC,
  _IIRI,
  _ISP,
  _IT,
  _IVW,
  _KK,
  _KKI,
  _L,
  _LA,
  _LEC,
  _LECI,
  _LECO,
  _LH,
  _LI,
  _LMT,
  _MCIPI,
  _MDDTIS,
  _MICa,
  _MICi,
  _MIS,
  _MNo,
  _MPIMB,
  _MR,
  _MRA,
  _MRC,
  _MT,
  _MVCS,
  _MVCSL,
  _MVod,
  _N,
  _NC,
  _NCa,
  _NOS,
  _NT,
  _OC,
  _PA,
  _PI,
  _PV,
  _PVCDC,
  _PVCRC,
  _PVL,
  _PVMIS,
  _PVr,
  _PVRC,
  _RAo,
  _RCo,
  _RSo,
  _SB,
  _SBC,
  _SBo,
  _SBU,
  _Sc,
  _SCe,
  _SCha,
  _Se,
  _SFP,
  _SMC,
  _SO,
  _SOP,
  _SPV,
  _SRt,
  _St,
  _STu,
  _T,
  _TC,
  _Ty,
  _UL,
  _VC,
  _VN,
  _VSIGB,
  n0,
  TagList,
  Unit,
  VpcConfig,
} from "./schemas_0";
import { ProductionVariantServerlessConfig } from "./schemas_12_Endpoint";
import {
  InferenceExperimentDataStorageConfig,
  ModelInfrastructureConfig,
  ShadowModeConfig,
} from "./schemas_37_Notebook";
import { InferenceExperimentSchedule } from "./schemas_65_Inference";
import { CaptureContentTypeHeader } from "./schemas_82_Experiment";

/* eslint no-var: 0 */

export var AsyncInferenceClientConfig = struct(n0, _AICC, 0, [_MCIPI], [1]);
export var AsyncInferenceConfig = struct(
  n0,
  _AIC,
  0,
  [_CC, _OC],
  [() => AsyncInferenceClientConfig, () => AsyncInferenceOutputConfig]
);
export var AsyncInferenceNotificationConfig = struct(n0, _AINC, 0, [_STu, _ETr, _IIRI], [0, 0, 64 | 0]);
export var AsyncInferenceOutputConfig = struct(
  n0,
  _AIOC,
  0,
  [_KKI, _SOP, _NC, _SFP],
  [0, 0, () => AsyncInferenceNotificationConfig, 0]
);
export var CaptureOption = struct(n0, _CO, 0, [_CMa], [0]);
export var ClarifyExplainerConfig = struct(
  n0,
  _CEC,
  0,
  [_EEn, _ICn, _SCha],
  [0, () => ClarifyInferenceConfig, () => ClarifyShapConfig]
);
export var ClarifyInferenceConfig = struct(
  n0,
  _CIC,
  0,
  [_FA, _CTont, _MRC, _MPIMB, _PI, _LI, _PA, _LA, _LH, _FH, _FT],
  [0, 0, 1, 1, 1, 1, 0, 0, 64 | 0, 64 | 0, 64 | 0]
);
export var ClarifyShapBaselineConfig = struct(n0, _CSBC, 0, [_MT, _SB, _SBU], [0, 0, 0]);
export var ClarifyShapConfig = struct(
  n0,
  _CSCl,
  0,
  [_SBC, _NOS, _UL, _Se, _TC],
  [() => ClarifyShapBaselineConfig, 1, 2, 1, () => ClarifyTextConfig]
);
export var ClarifyTextConfig = struct(n0, _CTC, 0, [_L, _G], [0, 0]);
export var CreateEndpointConfigInput = struct(
  n0,
  _CECI,
  0,
  [_ECN, _PV, _DCC, _T, _KKI, _AIC, _ECx, _SPV, _ERA, _VC, _ENI],
  [
    0,
    () => ProductionVariantList,
    () => DataCaptureConfig,
    () => TagList,
    0,
    () => AsyncInferenceConfig,
    () => ExplainerConfig,
    () => ProductionVariantList,
    0,
    () => VpcConfig,
    2,
  ]
);
export var CreateEndpointConfigOutput = struct(n0, _CECO, 0, [_ECA], [0]);
export var DataCaptureConfig = struct(
  n0,
  _DCC,
  0,
  [_ECna, _ISP, _DSU, _KKI, _COa, _CCTH],
  [2, 1, 0, 0, () => CaptureOptionList, () => CaptureContentTypeHeader]
);
export var DeleteEndpointConfigInput = struct(n0, _DECI, 0, [_ECN], [0]);
export var DescribeEndpointConfigInput = struct(n0, _DECIe, 0, [_ECN], [0]);
export var DescribeEndpointConfigOutput = struct(
  n0,
  _DECO,
  0,
  [_ECN, _ECA, _PV, _DCC, _KKI, _CT, _AIC, _ECx, _SPV, _ERA, _VC, _ENI],
  [
    0,
    0,
    () => ProductionVariantList,
    () => DataCaptureConfig,
    0,
    4,
    () => AsyncInferenceConfig,
    () => ExplainerConfig,
    () => ProductionVariantList,
    0,
    () => VpcConfig,
    2,
  ]
);
export var DescribeInferenceExperimentRequest = struct(n0, _DIERes, 0, [_N], [0]);
export var DescribeInferenceExperimentResponse = struct(
  n0,
  _DIEResc,
  0,
  [_Ar, _N, _Ty, _Sc, _St, _SRt, _D, _CT, _CTom, _LMT, _RAo, _EM, _MVod, _DSCa, _SMC, _KK],
  [
    0,
    0,
    0,
    () => InferenceExperimentSchedule,
    0,
    0,
    0,
    4,
    4,
    4,
    0,
    () => EndpointMetadata,
    () => ModelVariantConfigSummaryList,
    () => InferenceExperimentDataStorageConfig,
    () => ShadowModeConfig,
    0,
  ]
);
export var EndpointConfigSummary = struct(n0, _ECS, 0, [_ECN, _ECA, _CT], [0, 0, 4]);
export var EndpointMetadata = struct(n0, _EM, 0, [_EN, _ECN, _ES, _FR], [0, 0, 0, 0]);
export var ExplainerConfig = struct(n0, _ECx, 0, [_CEC], [() => ClarifyExplainerConfig]);
export var ListEndpointConfigsInput = struct(
  n0,
  _LECI,
  0,
  [_SBo, _SO, _NT, _MR, _NCa, _CTB, _CTA],
  [0, 0, 0, 1, 0, 4, 4]
);
export var ListEndpointConfigsOutput = struct(n0, _LECO, 0, [_ECndp, _NT], [() => EndpointConfigSummaryList, 0]);
export var ModelVariantConfigSummary = struct(
  n0,
  _MVCS,
  0,
  [_MNo, _VN, _ICnfr, _St],
  [0, 0, () => ModelInfrastructureConfig, 0]
);
export var ProductionVariant = struct(
  n0,
  _PVr,
  0,
  [_VN, _MNo, _IIC, _IT, _IVW, _ATcc, _CDCo, _SCe, _VSIGB, _MDDTIS, _CSHCTIS, _ESSMA, _MIS, _RCo, _IAV, _CRC],
  [
    0,
    0,
    1,
    0,
    1,
    0,
    () => ProductionVariantCoreDumpConfig,
    () => ProductionVariantServerlessConfig,
    1,
    1,
    1,
    2,
    () => ProductionVariantManagedInstanceScaling,
    () => ProductionVariantRoutingConfig,
    0,
    () => ProductionVariantCapacityReservationConfig,
  ]
);
export var ProductionVariantCapacityReservationConfig = struct(n0, _PVCRC, 0, [_CRP, _MRA], [0, 0]);
export var ProductionVariantCoreDumpConfig = struct(n0, _PVCDC, 0, [_DSU, _KKI], [0, 0]);
export var ProductionVariantManagedInstanceScaling = struct(n0, _PVMIS, 0, [_St, _MICi, _MICa], [0, 1, 1]);
export var ProductionVariantRoutingConfig = struct(n0, _PVRC, 0, [_RSo], [0]);
export var AsyncNotificationTopicTypeList = 64 | 0;

export var CaptureOptionList = list(n0, _COL, 0, () => CaptureOption);
export var ClarifyFeatureHeaders = 64 | 0;

export var ClarifyFeatureTypes = 64 | 0;

export var ClarifyLabelHeaders = 64 | 0;

export var EndpointConfigSummaryList = list(n0, _ECSL, 0, () => EndpointConfigSummary);
export var ModelVariantConfigSummaryList = list(n0, _MVCSL, 0, () => ModelVariantConfigSummary);
export var ProductionVariantList = list(n0, _PVL, 0, () => ProductionVariant);
export var CreateEndpointConfig = op(
  n0,
  _CECr,
  0,
  () => CreateEndpointConfigInput,
  () => CreateEndpointConfigOutput
);
export var DeleteEndpointConfig = op(
  n0,
  _DEC,
  0,
  () => DeleteEndpointConfigInput,
  () => Unit
);
export var DescribeEndpointConfig = op(
  n0,
  _DECe,
  0,
  () => DescribeEndpointConfigInput,
  () => DescribeEndpointConfigOutput
);
export var DescribeInferenceExperiment = op(
  n0,
  _DIEes,
  0,
  () => DescribeInferenceExperimentRequest,
  () => DescribeInferenceExperimentResponse
);
export var ListEndpointConfigs = op(
  n0,
  _LEC,
  0,
  () => ListEndpointConfigsInput,
  () => ListEndpointConfigsOutput
);
