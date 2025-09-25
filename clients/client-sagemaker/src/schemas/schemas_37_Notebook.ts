// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CIE,
  _CIER,
  _CIERr,
  _CTon,
  _D,
  _Des,
  _DMV,
  _DSCa,
  _DSes,
  _EN,
  _ICnfr,
  _ICns,
  _IEA,
  _IEDSC,
  _IT,
  _ITn,
  _KK,
  _MIC,
  _MNo,
  _MVA,
  _MVC,
  _MVCL,
  _MVod,
  _N,
  _RAo,
  _Re,
  _RTIC,
  _Sc,
  _SIERto,
  _SIERtop,
  _SIEt,
  _SMC,
  _SMVC,
  _SMVCL,
  _SMVh,
  _SMVN,
  _SMVNh,
  _SPa,
  _T,
  _Ty,
  _UIEp,
  _UIER,
  _UIERp,
  _VN,
  n0,
  TagList,
} from "./schemas_0";
import { InferenceExperimentSchedule } from "./schemas_65_Inference";
import { CaptureContentTypeHeader } from "./schemas_82_Experiment";

/* eslint no-var: 0 */

export var CreateInferenceExperimentRequest = struct(
  n0,
  _CIER,
  0,
  [_N, _Ty, _Sc, _D, _RAo, _EN, _MVod, _DSCa, _SMC, _KK, _T],
  [
    0,
    0,
    () => InferenceExperimentSchedule,
    0,
    0,
    0,
    () => ModelVariantConfigList,
    () => InferenceExperimentDataStorageConfig,
    () => ShadowModeConfig,
    0,
    () => TagList,
  ]
);
export var CreateInferenceExperimentResponse = struct(n0, _CIERr, 0, [_IEA], [0]);
export var InferenceExperimentDataStorageConfig = struct(
  n0,
  _IEDSC,
  0,
  [_Des, _KK, _CTon],
  [0, 0, () => CaptureContentTypeHeader]
);
export var ModelInfrastructureConfig = struct(n0, _MIC, 0, [_ITn, _RTIC], [0, () => RealTimeInferenceConfig]);
export var ModelVariantConfig = struct(n0, _MVC, 0, [_MNo, _VN, _ICnfr], [0, 0, () => ModelInfrastructureConfig]);
export var RealTimeInferenceConfig = struct(n0, _RTIC, 0, [_IT, _ICns], [0, 1]);
export var ShadowModeConfig = struct(n0, _SMC, 0, [_SMVN, _SMVh], [0, () => ShadowModelVariantConfigList]);
export var ShadowModelVariantConfig = struct(n0, _SMVC, 0, [_SMVNh, _SPa], [0, 1]);
export var StopInferenceExperimentRequest = struct(
  n0,
  _SIERto,
  0,
  [_N, _MVA, _DMV, _DSes, _Re],
  [0, 128 | 0, () => ModelVariantConfigList, 0, 0]
);
export var StopInferenceExperimentResponse = struct(n0, _SIERtop, 0, [_IEA], [0]);
export var UpdateInferenceExperimentRequest = struct(
  n0,
  _UIER,
  0,
  [_N, _Sc, _D, _MVod, _DSCa, _SMC],
  [
    0,
    () => InferenceExperimentSchedule,
    0,
    () => ModelVariantConfigList,
    () => InferenceExperimentDataStorageConfig,
    () => ShadowModeConfig,
  ]
);
export var UpdateInferenceExperimentResponse = struct(n0, _UIERp, 0, [_IEA], [0]);
export var ModelVariantConfigList = list(n0, _MVCL, 0, () => ModelVariantConfig);
export var ShadowModelVariantConfigList = list(n0, _SMVCL, 0, () => ShadowModelVariantConfig);
export var ModelVariantActionMap = 128 | 0;

export var CreateInferenceExperiment = op(
  n0,
  _CIE,
  0,
  () => CreateInferenceExperimentRequest,
  () => CreateInferenceExperimentResponse
);
export var StopInferenceExperiment = op(
  n0,
  _SIEt,
  0,
  () => StopInferenceExperimentRequest,
  () => StopInferenceExperimentResponse
);
export var UpdateInferenceExperiment = op(
  n0,
  _UIEp,
  0,
  () => UpdateInferenceExperimentRequest,
  () => UpdateInferenceExperimentResponse
);
