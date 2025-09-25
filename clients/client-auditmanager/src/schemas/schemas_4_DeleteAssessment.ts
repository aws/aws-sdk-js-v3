// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _DA, _DAR, _DARe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAssessmentRequest = struct(n0, _DAR, 0, [_aI], [[0, 1]]);
export var DeleteAssessmentResponse = struct(n0, _DARe, 0, [], []);
export var DeleteAssessment = op(
  n0,
  _DA,
  {
    [_h]: ["DELETE", "/assessments/{assessmentId}", 200],
  },
  () => DeleteAssessmentRequest,
  () => DeleteAssessmentResponse
);
