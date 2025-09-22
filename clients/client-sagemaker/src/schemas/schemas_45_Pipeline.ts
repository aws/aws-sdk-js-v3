// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CRT,
  _MPES,
  _PCa,
  _PEA,
  _PED,
  _PEDN,
  _PNi,
  _PP,
  _PVI,
  _RPE,
  _RPER,
  _RPERe,
  _SEC,
  _SNte,
  _SPE,
  _SPEA,
  _SPER,
  _SPERt,
  _SSel,
  _SSele,
  _SSL,
  _UPE,
  _UPER,
  _UPERp,
  n0,
} from "./schemas_0";
import { ParameterList } from "./schemas_33_Execution";

/* eslint no-var: 0 */

export var ParallelismConfiguration = struct(n0, _PCa, 0, [_MPES], [1]);
export var RetryPipelineExecutionRequest = struct(
  n0,
  _RPER,
  0,
  [_PEA, _CRT, _PCa],
  [0, [0, 4], () => ParallelismConfiguration]
);
export var RetryPipelineExecutionResponse = struct(n0, _RPERe, 0, [_PEA], [0]);
export var SelectedStep = struct(n0, _SSel, 0, [_SNte], [0]);
export var SelectiveExecutionConfig = struct(n0, _SEC, 0, [_SPEA, _SSele], [0, () => SelectedStepList]);
export var StartPipelineExecutionRequest = struct(
  n0,
  _SPER,
  0,
  [_PNi, _PEDN, _PP, _PED, _CRT, _PCa, _SEC, _PVI],
  [0, 0, () => ParameterList, 0, [0, 4], () => ParallelismConfiguration, () => SelectiveExecutionConfig, 1]
);
export var StartPipelineExecutionResponse = struct(n0, _SPERt, 0, [_PEA], [0]);
export var UpdatePipelineExecutionRequest = struct(
  n0,
  _UPER,
  0,
  [_PEA, _PED, _PEDN, _PCa],
  [0, 0, 0, () => ParallelismConfiguration]
);
export var UpdatePipelineExecutionResponse = struct(n0, _UPERp, 0, [_PEA], [0]);
export var SelectedStepList = list(n0, _SSL, 0, () => SelectedStep);
export var RetryPipelineExecution = op(
  n0,
  _RPE,
  0,
  () => RetryPipelineExecutionRequest,
  () => RetryPipelineExecutionResponse
);
export var StartPipelineExecution = op(
  n0,
  _SPE,
  0,
  () => StartPipelineExecutionRequest,
  () => StartPipelineExecutionResponse
);
export var UpdatePipelineExecution = op(
  n0,
  _UPE,
  0,
  () => UpdatePipelineExecutionRequest,
  () => UpdatePipelineExecutionResponse
);
