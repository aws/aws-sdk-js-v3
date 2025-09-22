// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CT, _DPDFE, _DPDFER, _DPDFERe, _PD, _PEA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribePipelineDefinitionForExecutionRequest = struct(n0, _DPDFER, 0, [_PEA], [0]);
export var DescribePipelineDefinitionForExecutionResponse = struct(n0, _DPDFERe, 0, [_PD, _CT], [0, 4]);
export var DescribePipelineDefinitionForExecution = op(
  n0,
  _DPDFE,
  0,
  () => DescribePipelineDefinitionForExecutionRequest,
  () => DescribePipelineDefinitionForExecutionResponse
);
