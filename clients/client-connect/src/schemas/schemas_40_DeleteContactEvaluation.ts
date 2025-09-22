// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DCE, _DCER, _EI, _h, _II, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteContactEvaluationRequest = struct(
  n0,
  _DCER,
  0,
  [_II, _EI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteContactEvaluation = op(
  n0,
  _DCE,
  {
    [_h]: ["DELETE", "/contact-evaluations/{InstanceId}/{EvaluationId}", 200],
  },
  () => DeleteContactEvaluationRequest,
  () => Unit
);
