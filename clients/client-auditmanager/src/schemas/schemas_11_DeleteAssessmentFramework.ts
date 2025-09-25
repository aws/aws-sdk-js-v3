// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DAF, _DAFR, _DAFRe, _fI, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAssessmentFrameworkRequest = struct(n0, _DAFR, 0, [_fI], [[0, 1]]);
export var DeleteAssessmentFrameworkResponse = struct(n0, _DAFRe, 0, [], []);
export var DeleteAssessmentFramework = op(
  n0,
  _DAF,
  {
    [_h]: ["DELETE", "/assessmentFrameworks/{frameworkId}", 200],
  },
  () => DeleteAssessmentFrameworkRequest,
  () => DeleteAssessmentFrameworkResponse
);
