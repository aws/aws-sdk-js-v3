// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CICI, _CICO, _CICr, _EN, _ICA, _ICN, _RC, _Sp, _T, _VN, n0, TagList } from "./schemas_0";
import { InferenceComponentRuntimeConfig, InferenceComponentSpecification } from "./schemas_85_Inference";

/* eslint no-var: 0 */

export var CreateInferenceComponentInput = struct(
  n0,
  _CICI,
  0,
  [_ICN, _EN, _VN, _Sp, _RC, _T],
  [0, 0, 0, () => InferenceComponentSpecification, () => InferenceComponentRuntimeConfig, () => TagList]
);
export var CreateInferenceComponentOutput = struct(n0, _CICO, 0, [_ICA], [0]);
export var CreateInferenceComponent = op(
  n0,
  _CICr,
  0,
  () => CreateInferenceComponentInput,
  () => CreateInferenceComponentOutput
);
