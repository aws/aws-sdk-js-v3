// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _aI,
  _BIETAC,
  _BIETACE,
  _BIETACEa,
  _BIETACR,
  _BIETACRa,
  _cI,
  _cSI,
  _eCr,
  _eFN,
  _eM,
  _er,
  _h,
  _ME,
  _mE,
  _MEL,
  _METR,
  _sAi,
  _sDT,
  _sKI,
  _sRP,
  _sRPe,
  _sV,
  _tR,
  _VARI,
  _VARIR,
  _VARIRa,
  _vE,
  n0,
} from "./schemas_0";
import { ManualEvidenceLocalFileName } from "./schemas_13_Assessment";

/* eslint no-var: 0 */

export var ManualEvidenceTextResponse = sim(n0, _METR, 0, 8);
export var BatchImportEvidenceToAssessmentControlError = struct(
  n0,
  _BIETACE,
  0,
  [_mE, _eCr, _eM],
  [[() => ManualEvidence, 0], 0, 0]
);
export var BatchImportEvidenceToAssessmentControlRequest = struct(
  n0,
  _BIETACR,
  0,
  [_aI, _cSI, _cI, _mE],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [() => ManualEvidenceList, 0],
  ]
);
export var BatchImportEvidenceToAssessmentControlResponse = struct(
  n0,
  _BIETACRa,
  0,
  [_er],
  [[() => BatchImportEvidenceToAssessmentControlErrors, 0]]
);
export var ManualEvidence = struct(
  n0,
  _ME,
  0,
  [_sRP, _tR, _eFN],
  [0, [() => ManualEvidenceTextResponse, 0], [() => ManualEvidenceLocalFileName, 0]]
);
export var ValidateAssessmentReportIntegrityRequest = struct(n0, _VARIR, 0, [_sRPe], [0]);
export var ValidateAssessmentReportIntegrityResponse = struct(
  n0,
  _VARIRa,
  0,
  [_sV, _sAi, _sDT, _sKI, _vE],
  [2, 0, 0, 0, 64 | 0]
);
export var BatchImportEvidenceToAssessmentControlErrors = list(n0, _BIETACEa, 0, [
  () => BatchImportEvidenceToAssessmentControlError,
  0,
]);
export var ManualEvidenceList = list(n0, _MEL, 0, [() => ManualEvidence, 0]);
export var ValidationErrors = 64 | 0;

export var BatchImportEvidenceToAssessmentControl = op(
  n0,
  _BIETAC,
  {
    [_h]: ["POST", "/assessments/{assessmentId}/controlSets/{controlSetId}/controls/{controlId}/evidence", 200],
  },
  () => BatchImportEvidenceToAssessmentControlRequest,
  () => BatchImportEvidenceToAssessmentControlResponse
);
export var ValidateAssessmentReportIntegrity = op(
  n0,
  _VARI,
  {
    [_h]: ["POST", "/assessmentReports/integrity", 200],
  },
  () => ValidateAssessmentReportIntegrityRequest,
  () => ValidateAssessmentReportIntegrityResponse
);
