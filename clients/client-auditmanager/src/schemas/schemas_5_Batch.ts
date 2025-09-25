// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aI,
  _AREE,
  _AREEs,
  _BAARE,
  _BAARER,
  _BAARERa,
  _BDARE,
  _BDARER,
  _BDARERa,
  _BDDBA,
  _BDDBAE,
  _BDDBAEa,
  _BDDBAR,
  _BDDBARa,
  _dI,
  _dIe,
  _eCr,
  _eFI,
  _eI,
  _eIv,
  _eM,
  _er,
  _h,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssessmentReportEvidenceError = struct(n0, _AREE, 0, [_eI, _eCr, _eM], [0, 0, 0]);
export var BatchAssociateAssessmentReportEvidenceRequest = struct(
  n0,
  _BAARER,
  0,
  [_aI, _eFI, _eIv],
  [[0, 1], 0, 64 | 0]
);
export var BatchAssociateAssessmentReportEvidenceResponse = struct(
  n0,
  _BAARERa,
  0,
  [_eIv, _er],
  [64 | 0, () => AssessmentReportEvidenceErrors]
);
export var BatchDeleteDelegationByAssessmentError = struct(n0, _BDDBAE, 0, [_dI, _eCr, _eM], [0, 0, 0]);
export var BatchDeleteDelegationByAssessmentRequest = struct(n0, _BDDBAR, 0, [_dIe, _aI], [64 | 0, [0, 1]]);
export var BatchDeleteDelegationByAssessmentResponse = struct(
  n0,
  _BDDBARa,
  0,
  [_er],
  [[() => BatchDeleteDelegationByAssessmentErrors, 0]]
);
export var BatchDisassociateAssessmentReportEvidenceRequest = struct(
  n0,
  _BDARER,
  0,
  [_aI, _eFI, _eIv],
  [[0, 1], 0, 64 | 0]
);
export var BatchDisassociateAssessmentReportEvidenceResponse = struct(
  n0,
  _BDARERa,
  0,
  [_eIv, _er],
  [64 | 0, () => AssessmentReportEvidenceErrors]
);
export var AssessmentReportEvidenceErrors = list(n0, _AREEs, 0, () => AssessmentReportEvidenceError);
export var BatchDeleteDelegationByAssessmentErrors = list(
  n0,
  _BDDBAEa,
  8,
  () => BatchDeleteDelegationByAssessmentError
);
export var DelegationIds = 64 | 0;

export var EvidenceIds = 64 | 0;

export var BatchAssociateAssessmentReportEvidence = op(
  n0,
  _BAARE,
  {
    [_h]: ["PUT", "/assessments/{assessmentId}/batchAssociateToAssessmentReport", 200],
  },
  () => BatchAssociateAssessmentReportEvidenceRequest,
  () => BatchAssociateAssessmentReportEvidenceResponse
);
export var BatchDeleteDelegationByAssessment = op(
  n0,
  _BDDBA,
  {
    [_h]: ["PUT", "/assessments/{assessmentId}/delegations", 200],
  },
  () => BatchDeleteDelegationByAssessmentRequest,
  () => BatchDeleteDelegationByAssessmentResponse
);
export var BatchDisassociateAssessmentReportEvidence = op(
  n0,
  _BDARE,
  {
    [_h]: ["PUT", "/assessments/{assessmentId}/batchDisassociateFromAssessmentReport", 200],
  },
  () => BatchDisassociateAssessmentReportEvidenceRequest,
  () => BatchDisassociateAssessmentReportEvidenceResponse
);
