// smithy-typescript generated code
import { map, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _An,
  _EAD,
  _EAIM,
  _EAIv,
  _EAv,
  _EI,
  _EN,
  _ENM,
  _h,
  _II,
  _NA,
  _No,
  _NV,
  _SCERu,
  _SCERub,
  _SCEu,
  _SV,
  _UCE,
  _UCER,
  _UCERp,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var EvaluationAnswerInput = struct(n0, _EAIv, 0, [_V], [() => EvaluationAnswerData]);
export var EvaluationNote = struct(n0, _EN, 0, [_V], [0]);
export var SubmitContactEvaluationRequest = struct(
  n0,
  _SCERu,
  0,
  [_II, _EI, _An, _No],
  [[0, 1], [0, 1], () => EvaluationAnswersInputMap, () => EvaluationNotesMap]
);
export var SubmitContactEvaluationResponse = struct(n0, _SCERub, 0, [_EI, _EAv], [0, 0]);
export var UpdateContactEvaluationRequest = struct(
  n0,
  _UCER,
  0,
  [_II, _EI, _An, _No],
  [[0, 1], [0, 1], () => EvaluationAnswersInputMap, () => EvaluationNotesMap]
);
export var UpdateContactEvaluationResponse = struct(n0, _UCERp, 0, [_EI, _EAv], [0, 0]);
export var EvaluationAnswersInputMap = map(n0, _EAIM, 0, 0, () => EvaluationAnswerInput);
export var EvaluationNotesMap = map(n0, _ENM, 0, 0, () => EvaluationNote);
export var EvaluationAnswerData = uni(n0, _EAD, 0, [_SV, _NV, _NA], [0, 1, 2]);
export var SubmitContactEvaluation = op(
  n0,
  _SCEu,
  {
    [_h]: ["POST", "/contact-evaluations/{InstanceId}/{EvaluationId}/submit", 200],
  },
  () => SubmitContactEvaluationRequest,
  () => SubmitContactEvaluationResponse
);
export var UpdateContactEvaluation = op(
  n0,
  _UCE,
  {
    [_h]: ["POST", "/contact-evaluations/{InstanceId}/{EvaluationId}", 200],
  },
  () => UpdateContactEvaluationRequest,
  () => UpdateContactEvaluationResponse
);
