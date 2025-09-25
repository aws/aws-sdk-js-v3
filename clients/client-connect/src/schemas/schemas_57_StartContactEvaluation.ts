// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CI, _CT, _EAv, _EFI, _EI, _h, _II, _SCE, _SCER, _SCERt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StartContactEvaluationRequest = struct(n0, _SCER, 0, [_II, _CI, _EFI, _CT], [[0, 1], 0, 0, [0, 4]]);
export var StartContactEvaluationResponse = struct(n0, _SCERt, 0, [_EI, _EAv], [0, 0]);
export var StartContactEvaluation = op(
  n0,
  _SCE,
  {
    [_h]: ["PUT", "/contact-evaluations/{InstanceId}", 200],
  },
  () => StartContactEvaluationRequest,
  () => StartContactEvaluationResponse
);
