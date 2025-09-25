// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _AI, _AS, _As, _CDI, _DI, _DN, _L, _LADA, _LADAR, _LADARi, _LUDT, _NT, _RT, _S, _ST, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssessmentSummary = struct(
  n0,
  _AS,
  0,
  [_AI, _DI, _DN, _ST, _LUDT, _S, _CDI, _RT],
  [0, 0, 0, 4, 4, 0, 64 | 0, 0]
);
export var ListADAssessmentsRequest = struct(n0, _LADAR, 0, [_DI, _NT, _L], [0, 0, 1]);
export var ListADAssessmentsResult = struct(n0, _LADARi, 0, [_As, _NT], [() => Assessments, 0]);
export var Assessments = list(n0, _As, 0, () => AssessmentSummary);
export var ListADAssessments = op(
  n0,
  _LADA,
  0,
  () => ListADAssessmentsRequest,
  () => ListADAssessmentsResult
);
