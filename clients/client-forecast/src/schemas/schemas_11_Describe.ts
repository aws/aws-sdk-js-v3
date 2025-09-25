// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AA,
  _AMLOS,
  _AN,
  _AWQL,
  _BTWO,
  _CP,
  _CPR,
  _CPRa,
  _CPRo,
  _CPRon,
  _CPRr,
  _CPRre,
  _DGA,
  _EC,
  _EM,
  _EMr,
  _EPv,
  _ER,
  _ETv,
  _FC,
  _FD,
  _Fe,
  _Fea,
  _FF,
  _FH,
  _FM,
  _FMN,
  _FMP,
  _FP,
  _FT,
  _FTo,
  _GAM,
  _GAMR,
  _GAMRe,
  _HPOC,
  _HPTJC,
  _IAP,
  _IC,
  _IDC,
  _IPR,
  _IPRn,
  _LV,
  _MAPE,
  _MASE,
  _Me,
  _MV,
  _MVi,
  _N,
  _NOBW,
  _OM,
  _PA,
  _PAML,
  _PER,
  _PHPO,
  _PN,
  _PR,
  _Q,
  _RMSE,
  _SF,
  _SFu,
  _ST,
  _Ta,
  _TP,
  _TW,
  _TWE,
  _TWSe,
  _V,
  _Va,
  _WAPE,
  _WQL,
  _WQLe,
  _WS,
  n0,
  Tags,
} from "./schemas_0";
import { EncryptionConfig } from "./schemas_4_Predictor";

/* eslint no-var: 0 */

export var CategoricalParameterRange = struct(n0, _CPR, 0, [_N, _Va], [0, 64 | 0]);
export var ContinuousParameterRange = struct(n0, _CPRo, 0, [_N, _MV, _MVi, _ST], [0, 1, 1, 0]);
export var CreatePredictorRequest = struct(
  n0,
  _CPRr,
  0,
  [_PN, _AA, _FH, _FT, _PAML, _AMLOS, _PHPO, _TP, _EPv, _HPOC, _IDC, _FC, _EC, _Ta, _OM],
  [
    0,
    0,
    1,
    64 | 0,
    2,
    0,
    2,
    128 | 0,
    () => EvaluationParameters,
    () => HyperParameterTuningJobConfig,
    () => InputDataConfig,
    () => FeaturizationConfig,
    () => EncryptionConfig,
    [() => Tags, 0],
    0,
  ]
);
export var CreatePredictorResponse = struct(n0, _CPRre, 0, [_PA], [0]);
export var ErrorMetric = struct(n0, _EM, 0, [_FTo, _WAPE, _RMSE, _MASE, _MAPE], [0, 1, 1, 1, 1]);
export var EvaluationParameters = struct(n0, _EPv, 0, [_NOBW, _BTWO], [1, 1]);
export var EvaluationResult = struct(n0, _ER, 0, [_AA, _TW], [0, () => TestWindows]);
export var Featurization = struct(n0, _Fe, 0, [_AN, _FP], [0, () => FeaturizationPipeline]);
export var FeaturizationConfig = struct(n0, _FC, 0, [_FF, _FD, _Fea], [0, 64 | 0, () => Featurizations]);
export var FeaturizationMethod = struct(n0, _FM, 0, [_FMN, _FMP], [0, 128 | 0]);
export var GetAccuracyMetricsRequest = struct(n0, _GAMR, 0, [_PA], [0]);
export var GetAccuracyMetricsResponse = struct(
  n0,
  _GAMRe,
  0,
  [_PER, _IAP, _AMLOS, _OM],
  [() => PredictorEvaluationResults, 2, 0, 0]
);
export var HyperParameterTuningJobConfig = struct(n0, _HPTJC, 0, [_PR], [() => ParameterRanges]);
export var InputDataConfig = struct(n0, _IDC, 0, [_DGA, _SF], [0, () => SupplementaryFeatures]);
export var IntegerParameterRange = struct(n0, _IPR, 0, [_N, _MV, _MVi, _ST], [0, 1, 1, 0]);
export var Metrics = struct(
  n0,
  _Me,
  0,
  [_RMSE, _WQL, _EMr, _AWQL],
  [1, () => WeightedQuantileLosses, () => ErrorMetrics, 1]
);
export var ParameterRanges = struct(
  n0,
  _PR,
  0,
  [_CPRa, _CPRon, _IPRn],
  [() => CategoricalParameterRanges, () => ContinuousParameterRanges, () => IntegerParameterRanges]
);
export var SupplementaryFeature = struct(n0, _SFu, 0, [_N, _V], [0, 0]);
export var WeightedQuantileLoss = struct(n0, _WQLe, 0, [_Q, _LV], [1, 1]);
export var WindowSummary = struct(n0, _WS, 0, [_TWSe, _TWE, _IC, _ETv, _Me], [4, 4, 1, 0, () => Metrics]);
export var CategoricalParameterRanges = list(n0, _CPRa, 0, () => CategoricalParameterRange);
export var ContinuousParameterRanges = list(n0, _CPRon, 0, () => ContinuousParameterRange);
export var ErrorMetrics = list(n0, _EMr, 0, () => ErrorMetric);
export var FeaturizationPipeline = list(n0, _FP, 0, () => FeaturizationMethod);
export var Featurizations = list(n0, _Fea, 0, () => Featurization);
export var IntegerParameterRanges = list(n0, _IPRn, 0, () => IntegerParameterRange);
export var PredictorEvaluationResults = list(n0, _PER, 0, () => EvaluationResult);
export var SupplementaryFeatures = list(n0, _SF, 0, () => SupplementaryFeature);
export var TestWindows = list(n0, _TW, 0, () => WindowSummary);
export var WeightedQuantileLosses = list(n0, _WQL, 0, () => WeightedQuantileLoss);
export var FeaturizationMethodParameters = 128 | 0;

export var TrainingParameters = 128 | 0;

export var CreatePredictor = op(
  n0,
  _CP,
  0,
  () => CreatePredictorRequest,
  () => CreatePredictorResponse
);
export var GetAccuracyMetrics = op(
  n0,
  _GAM,
  2,
  () => GetAccuracyMetricsRequest,
  () => GetAccuracyMetricsResponse
);
