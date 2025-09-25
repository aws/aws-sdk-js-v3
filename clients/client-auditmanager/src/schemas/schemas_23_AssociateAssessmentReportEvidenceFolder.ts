// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAREF, _AAREFR, _AAREFRs, _aI, _eFI, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateAssessmentReportEvidenceFolderRequest = struct(n0, _AAREFR, 0, [_aI, _eFI], [[0, 1], 0]);
export var AssociateAssessmentReportEvidenceFolderResponse = struct(n0, _AAREFRs, 0, [], []);
export var AssociateAssessmentReportEvidenceFolder = op(
  n0,
  _AAREF,
  {
    [_h]: ["PUT", "/assessments/{assessmentId}/associateToAssessmentReport", 200],
  },
  () => AssociateAssessmentReportEvidenceFolderRequest,
  () => AssociateAssessmentReportEvidenceFolderResponse
);
