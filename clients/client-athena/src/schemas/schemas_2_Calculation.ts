// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ca,
  _CB,
  _CC,
  _CDT,
  _CEI,
  _CL,
  _CRT,
  _CSa,
  _CSal,
  _D,
  _GCEC,
  _GCECR,
  _GCECRe,
  _LCE,
  _LCER,
  _LCERi,
  _MR,
  _NT,
  _S,
  _SCE,
  _SCER,
  _SCERt,
  _SCERto,
  _SCERtop,
  _SCEt,
  _SCR,
  _SDT,
  _SF,
  _SI,
  _St,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CalculationConfiguration = struct(n0, _CC, 0, [_CB], [0]);
export var CalculationStatus = struct(n0, _CSa, 0, [_SDT, _CDT, _S, _SCR], [4, 4, 0, 0]);
export var CalculationSummary = struct(n0, _CSal, 0, [_CEI, _D, _St], [0, 0, () => CalculationStatus]);
export var GetCalculationExecutionCodeRequest = struct(n0, _GCECR, 0, [_CEI], [0]);
export var GetCalculationExecutionCodeResponse = struct(n0, _GCECRe, 0, [_CB], [0]);
export var ListCalculationExecutionsRequest = struct(n0, _LCER, 0, [_SI, _SF, _MR, _NT], [0, 0, 1, 0]);
export var ListCalculationExecutionsResponse = struct(n0, _LCERi, 0, [_NT, _Ca], [0, () => CalculationsList]);
export var StartCalculationExecutionRequest = struct(
  n0,
  _SCER,
  0,
  [_SI, _D, _CC, _CB, _CRT],
  [0, 0, () => CalculationConfiguration, 0, 0]
);
export var StartCalculationExecutionResponse = struct(n0, _SCERt, 0, [_CEI, _S], [0, 0]);
export var StopCalculationExecutionRequest = struct(n0, _SCERto, 0, [_CEI], [0]);
export var StopCalculationExecutionResponse = struct(n0, _SCERtop, 0, [_S], [0]);
export var CalculationsList = list(n0, _CL, 0, () => CalculationSummary);
export var GetCalculationExecutionCode = op(
  n0,
  _GCEC,
  0,
  () => GetCalculationExecutionCodeRequest,
  () => GetCalculationExecutionCodeResponse
);
export var ListCalculationExecutions = op(
  n0,
  _LCE,
  0,
  () => ListCalculationExecutionsRequest,
  () => ListCalculationExecutionsResponse
);
export var StartCalculationExecution = op(
  n0,
  _SCE,
  0,
  () => StartCalculationExecutionRequest,
  () => StartCalculationExecutionResponse
);
export var StopCalculationExecution = op(
  n0,
  _SCEt,
  0,
  () => StopCalculationExecutionRequest,
  () => StopCalculationExecutionResponse
);
