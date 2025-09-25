// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _aRI, _GARU, _GARUR, _GARURe, _h, _hN, _li, _pSU, _URL, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetAssessmentReportUrlRequest = struct(
  n0,
  _GARUR,
  0,
  [_aRI, _aI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetAssessmentReportUrlResponse = struct(n0, _GARURe, 0, [_pSU], [() => URL]);
export var URL = struct(n0, _URL, 0, [_hN, _li], [0, 0]);
export var GetAssessmentReportUrl = op(
  n0,
  _GARU,
  {
    [_h]: ["GET", "/assessments/{assessmentId}/reports/{assessmentReportId}/url", 200],
  },
  () => GetAssessmentReportUrlRequest,
  () => GetAssessmentReportUrlResponse
);
