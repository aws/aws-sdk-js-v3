// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DE, _DEI, _DEO, _EI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEvaluationInput = struct(n0, _DEI, 0, [_EI], [0]);
export var DeleteEvaluationOutput = struct(n0, _DEO, 0, [_EI], [0]);
export var DeleteEvaluation = op(
  n0,
  _DE,
  0,
  () => DeleteEvaluationInput,
  () => DeleteEvaluationOutput
);
