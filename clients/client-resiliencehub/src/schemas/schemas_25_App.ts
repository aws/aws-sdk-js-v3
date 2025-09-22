// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aAs, _aSs, _cTl, _DAA, _DAAR, _DAARe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAppAssessmentRequest = struct(n0, _DAAR, 0, [_aAs, _cTl], [0, [0, 4]]);
export var DeleteAppAssessmentResponse = struct(n0, _DAARe, 0, [_aAs, _aSs], [0, 0]);
export var DeleteAppAssessment = op(
  n0,
  _DAA,
  {
    [_h]: ["POST", "/delete-app-assessment", 200],
  },
  () => DeleteAppAssessmentRequest,
  () => DeleteAppAssessmentResponse
);
