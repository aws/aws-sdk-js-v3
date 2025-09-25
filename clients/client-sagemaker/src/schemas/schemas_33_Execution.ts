// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _LPPFE, _LPPFER, _LPPFERi, _MR, _N, _NT, _Par, _PEA, _PLa, _PP, _Va, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListPipelineParametersForExecutionRequest = struct(n0, _LPPFER, 0, [_PEA, _NT, _MR], [0, 0, 1]);
export var ListPipelineParametersForExecutionResponse = struct(n0, _LPPFERi, 0, [_PP, _NT], [() => ParameterList, 0]);
export var Parameter = struct(n0, _Par, 0, [_N, _Va], [0, 0]);
export var ParameterList = list(n0, _PLa, 0, () => Parameter);
export var ListPipelineParametersForExecution = op(
  n0,
  _LPPFE,
  0,
  () => ListPipelineParametersForExecutionRequest,
  () => ListPipelineParametersForExecutionResponse
);
