// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AUr,
  _BICN,
  _CCop,
  _Cont,
  _CRR,
  _CSHCTIS,
  _DICe,
  _DICI,
  _DRCes,
  _E,
  _I,
  _ICA,
  _ICCRR,
  _ICCSn,
  _ICN,
  _ICRC,
  _ICSn,
  _ICSP,
  _MDDTIS,
  _MMRIM,
  _MMRIMa,
  _MNo,
  _NOADR,
  _NOCCR,
  _SPt,
  _UICRC,
  _UICRCI,
  _UICRCO,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteInferenceComponentInput = struct(n0, _DICI, 0, [_ICN], [0]);
export var InferenceComponentComputeResourceRequirements = struct(
  n0,
  _ICCRR,
  0,
  [_NOCCR, _NOADR, _MMRIM, _MMRIMa],
  [1, 1, 1, 1]
);
export var InferenceComponentContainerSpecification = struct(n0, _ICCSn, 0, [_I, _AUr, _E], [0, 0, 128 | 0]);
export var InferenceComponentRuntimeConfig = struct(n0, _ICRC, 0, [_CCop], [1]);
export var InferenceComponentSpecification = struct(
  n0,
  _ICSn,
  0,
  [_MNo, _Cont, _SPt, _CRR, _BICN],
  [
    0,
    () => InferenceComponentContainerSpecification,
    () => InferenceComponentStartupParameters,
    () => InferenceComponentComputeResourceRequirements,
    0,
  ]
);
export var InferenceComponentStartupParameters = struct(n0, _ICSP, 0, [_MDDTIS, _CSHCTIS], [1, 1]);
export var UpdateInferenceComponentRuntimeConfigInput = struct(
  n0,
  _UICRCI,
  0,
  [_ICN, _DRCes],
  [0, () => InferenceComponentRuntimeConfig]
);
export var UpdateInferenceComponentRuntimeConfigOutput = struct(n0, _UICRCO, 0, [_ICA], [0]);
export var DeleteInferenceComponent = op(
  n0,
  _DICe,
  0,
  () => DeleteInferenceComponentInput,
  () => Unit
);
export var UpdateInferenceComponentRuntimeConfig = op(
  n0,
  _UICRC,
  0,
  () => UpdateInferenceComponentRuntimeConfigInput,
  () => UpdateInferenceComponentRuntimeConfigOutput
);
