// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _EI, _EN, _UE, _UEI, _UEO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateEvaluationInput = struct(n0, _UEI, 0, [_EI, _EN], [0, 0]);
export var UpdateEvaluationOutput = struct(n0, _UEO, 0, [_EI], [0]);
export var UpdateEvaluation = op(
  n0,
  _UE,
  0,
  () => UpdateEvaluationInput,
  () => UpdateEvaluationOutput
);
