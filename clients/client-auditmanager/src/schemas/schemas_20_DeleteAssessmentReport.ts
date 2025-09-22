// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _aRI, _DARel, _DARR, _DARRe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAssessmentReportRequest = struct(
  n0,
  _DARR,
  0,
  [_aI, _aRI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteAssessmentReportResponse = struct(n0, _DARRe, 0, [], []);
export var DeleteAssessmentReport = op(
  n0,
  _DARel,
  {
    [_h]: ["DELETE", "/assessments/{assessmentId}/reports/{assessmentReportId}", 200],
  },
  () => DeleteAssessmentReportRequest,
  () => DeleteAssessmentReportResponse
);
