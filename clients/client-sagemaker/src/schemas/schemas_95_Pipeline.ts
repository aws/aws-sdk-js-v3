// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CRT,
  _CTa,
  _FR,
  _OP,
  _PEA,
  _SPERto,
  _SPERtop,
  _SPESF,
  _SPESFR,
  _SPESFRe,
  _SPESS,
  _SPESSR,
  _SPESSRe,
  _SPEt,
  n0,
} from "./schemas_0";
import { OutputParameterList } from "./schemas_162_Execution";

/* eslint no-var: 0 */

export var SendPipelineExecutionStepFailureRequest = struct(n0, _SPESFR, 0, [_CTa, _FR, _CRT], [0, 0, [0, 4]]);
export var SendPipelineExecutionStepFailureResponse = struct(n0, _SPESFRe, 0, [_PEA], [0]);
export var SendPipelineExecutionStepSuccessRequest = struct(
  n0,
  _SPESSR,
  0,
  [_CTa, _OP, _CRT],
  [0, () => OutputParameterList, [0, 4]]
);
export var SendPipelineExecutionStepSuccessResponse = struct(n0, _SPESSRe, 0, [_PEA], [0]);
export var StopPipelineExecutionRequest = struct(n0, _SPERto, 0, [_PEA, _CRT], [0, [0, 4]]);
export var StopPipelineExecutionResponse = struct(n0, _SPERtop, 0, [_PEA], [0]);
export var SendPipelineExecutionStepFailure = op(
  n0,
  _SPESF,
  0,
  () => SendPipelineExecutionStepFailureRequest,
  () => SendPipelineExecutionStepFailureResponse
);
export var SendPipelineExecutionStepSuccess = op(
  n0,
  _SPESS,
  0,
  () => SendPipelineExecutionStepSuccessRequest,
  () => SendPipelineExecutionStepSuccessResponse
);
export var StopPipelineExecution = op(
  n0,
  _SPEt,
  0,
  () => StopPipelineExecutionRequest,
  () => StopPipelineExecutionResponse
);
