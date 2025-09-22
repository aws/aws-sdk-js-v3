// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  AssessmentRunInProgressException as __AssessmentRunInProgressException,
  UnsupportedFeatureException as __UnsupportedFeatureException,
} from "../models/index";
import {
  _aRA,
  _aRAs,
  _aRAT,
  _ARIPE,
  _aTA,
  _aTAs,
  _c,
  _cR,
  _DAR,
  _DARR,
  _DAT,
  _DATe,
  _DATR,
  _DATRe,
  _e,
  _GAR,
  _GARR,
  _GARRe,
  _m,
  _rFF,
  _rT,
  _sta,
  _u,
  _UFE,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssessmentRunInProgressException = error(
  n0,
  _ARIPE,
  {
    [_e]: _c,
  },
  [_m, _aRAs, _aRAT, _cR],
  [0, 64 | 0, 2, 2],

  __AssessmentRunInProgressException
);
export var DeleteAssessmentRunRequest = struct(n0, _DARR, 0, [_aRA], [0]);
export var DeleteAssessmentTargetRequest = struct(n0, _DATR, 0, [_aTAs], [0]);
export var DeleteAssessmentTemplateRequest = struct(n0, _DATRe, 0, [_aTA], [0]);
export var GetAssessmentReportRequest = struct(n0, _GARR, 0, [_aRA, _rFF, _rT], [0, 0, 0]);
export var GetAssessmentReportResponse = struct(n0, _GARRe, 0, [_sta, _u], [0, 0]);
export var UnsupportedFeatureException = error(
  n0,
  _UFE,
  {
    [_e]: _c,
  },
  [_m, _cR],
  [0, 2],

  __UnsupportedFeatureException
);
export var AssessmentRunInProgressArnList = 64 | 0;

export var DeleteAssessmentRun = op(
  n0,
  _DAR,
  0,
  () => DeleteAssessmentRunRequest,
  () => Unit
);
export var DeleteAssessmentTarget = op(
  n0,
  _DAT,
  0,
  () => DeleteAssessmentTargetRequest,
  () => Unit
);
export var DeleteAssessmentTemplate = op(
  n0,
  _DATe,
  0,
  () => DeleteAssessmentTemplateRequest,
  () => Unit
);
export var GetAssessmentReport = op(
  n0,
  _GAR,
  0,
  () => GetAssessmentReportRequest,
  () => GetAssessmentReportResponse
);
