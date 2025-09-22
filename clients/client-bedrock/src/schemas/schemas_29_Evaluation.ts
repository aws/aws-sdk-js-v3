// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import { _EJI, _ht, _jI, _SEJ, _SEJR, _SEJRt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var EvaluationJobIdentifier = sim(n0, _EJI, 0, 8);
export var StopEvaluationJobRequest = struct(n0, _SEJR, 0, [_jI], [[() => EvaluationJobIdentifier, 1]]);
export var StopEvaluationJobResponse = struct(n0, _SEJRt, 0, [], []);
export var StopEvaluationJob = op(
  n0,
  _SEJ,
  {
    [_ht]: ["POST", "/evaluation-job/{jobIdentifier}/stop", 200],
  },
  () => StopEvaluationJobRequest,
  () => StopEvaluationJobResponse
);
