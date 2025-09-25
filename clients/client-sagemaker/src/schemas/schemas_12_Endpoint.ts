// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CJN,
  _CPH,
  _CPIo,
  _CUp,
  _ECnd,
  _EMn,
  _EN,
  _EOCn,
  _EPnv,
  _EPnvi,
  _FR,
  _IB,
  _IET,
  _IIC,
  _IMn,
  _IRJS,
  _IRJSn,
  _ISN,
  _IST,
  _IT,
  _JN,
  _K,
  _LIRJS,
  _LIRJSR,
  _LIRJSRi,
  _MCaxo,
  _MCode,
  _Met,
  _MIa,
  _ML,
  _MR,
  _MSIMB,
  _MST,
  _MU,
  _NT,
  _PCro,
  _PVSC,
  _RJIB,
  _RMec,
  _SCe,
  _St,
  _Ste,
  _STte,
  _Va,
  _VN,
  _VT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var EndpointOutputConfiguration = struct(
  n0,
  _EOCn,
  0,
  [_EN, _VN, _IT, _IIC, _SCe],
  [0, 0, 0, 1, () => ProductionVariantServerlessConfig]
);
export var EnvironmentParameter = struct(n0, _EPnv, 0, [_K, _VT, _Va], [0, 0, 0]);
export var InferenceMetrics = struct(n0, _IMn, 0, [_MIa, _ML], [1, 1]);
export var InferenceRecommendationsJobStep = struct(
  n0,
  _IRJS,
  0,
  [_STte, _JN, _St, _IB],
  [0, 0, 0, () => RecommendationJobInferenceBenchmark]
);
export var ListInferenceRecommendationsJobStepsRequest = struct(
  n0,
  _LIRJSR,
  0,
  [_JN, _St, _STte, _MR, _NT],
  [0, 0, 0, 1, 0]
);
export var ListInferenceRecommendationsJobStepsResponse = struct(
  n0,
  _LIRJSRi,
  0,
  [_Ste, _NT],
  [() => InferenceRecommendationsJobSteps, 0]
);
export var ModelConfiguration = struct(n0, _MCode, 0, [_ISN, _EPnvi, _CJN], [0, () => EnvironmentParameters, 0]);
export var ProductionVariantServerlessConfig = struct(n0, _PVSC, 0, [_MSIMB, _MCaxo, _PCro], [1, 1, 1]);
export var RecommendationJobInferenceBenchmark = struct(
  n0,
  _RJIB,
  0,
  [_Met, _EMn, _ECnd, _MCode, _FR, _IET, _IST],
  [
    () => RecommendationMetrics,
    () => InferenceMetrics,
    () => EndpointOutputConfiguration,
    () => ModelConfiguration,
    0,
    4,
    4,
  ]
);
export var RecommendationMetrics = struct(
  n0,
  _RMec,
  0,
  [_CPH, _CPIo, _MIa, _ML, _CUp, _MU, _MST],
  [1, 1, 1, 1, 1, 1, 1]
);
export var EnvironmentParameters = list(n0, _EPnvi, 0, () => EnvironmentParameter);
export var InferenceRecommendationsJobSteps = list(n0, _IRJSn, 0, () => InferenceRecommendationsJobStep);
export var ListInferenceRecommendationsJobSteps = op(
  n0,
  _LIRJS,
  0,
  () => ListInferenceRecommendationsJobStepsRequest,
  () => ListInferenceRecommendationsJobStepsResponse
);
