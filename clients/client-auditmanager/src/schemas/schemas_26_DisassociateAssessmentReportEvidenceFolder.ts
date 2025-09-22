// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _DAREF, _DAREFR, _DAREFRi, _eFI, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateAssessmentReportEvidenceFolderRequest = struct(n0, _DAREFR, 0, [_aI, _eFI], [[0, 1], 0]);
export var DisassociateAssessmentReportEvidenceFolderResponse = struct(n0, _DAREFRi, 0, [], []);
export var DisassociateAssessmentReportEvidenceFolder = op(
  n0,
  _DAREF,
  {
    [_h]: ["PUT", "/assessments/{assessmentId}/disassociateFromAssessmentReport", 200],
  },
  () => DisassociateAssessmentReportEvidenceFolderRequest,
  () => DisassociateAssessmentReportEvidenceFolderResponse
);
