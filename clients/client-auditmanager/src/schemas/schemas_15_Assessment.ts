// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _AC,
  _AEF,
  _AEFs,
  _aI,
  _aNu,
  _aREC,
  _aRSC,
  _au,
  _cBo,
  _CC,
  _CCB,
  _CCo,
  _cI,
  _cN,
  _co,
  _cont,
  _cSI,
  _cSon,
  _d,
  _da,
  _dS,
  _eASSC,
  _eBTCCC,
  _eBTCCIC,
  _eBTCDC,
  _eBTMC,
  _eBTUAC,
  _eC,
  _eF,
  _eFI,
  _eFv,
  _eRIC,
  _eS,
  _GEF,
  _GEFBA,
  _GEFBAC,
  _GEFBACR,
  _GEFBACRe,
  _GEFBAR,
  _GEFBARe,
  _GEFR,
  _GEFRe,
  _h,
  _hQ,
  _i,
  _mR,
  _n,
  _nT,
  _pD,
  _r,
  _s,
  _tE,
  _UAC,
  _UACR,
  _UACRp,
  n0,
} from "./schemas_0";
import { ControlDescription } from "./schemas_25_Assessment";
import { Username } from "./schemas_33_Assessment";

/* eslint no-var: 0 */

export var ControlCommentBody = sim(n0, _CCB, 0, 8);
export var AssessmentControl = struct(
  n0,
  _AC,
  0,
  [_i, _n, _d, _s, _r, _co, _eS, _eC, _aREC],
  [0, 0, [() => ControlDescription, 0], 0, 0, [() => ControlComments, 0], 64 | 0, 1, 1]
);
export var AssessmentEvidenceFolder = struct(
  n0,
  _AEF,
  0,
  [_n, _da, _aI, _cSI, _cI, _i, _dS, _au, _tE, _aRSC, _cN, _eRIC, _eBTCDC, _eBTMC, _eBTCCC, _eBTCCIC, _eBTUAC, _eASSC],
  [0, 4, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1]
);
export var ControlComment = struct(
  n0,
  _CC,
  0,
  [_aNu, _cBo, _pD],
  [[() => Username, 0], [() => ControlCommentBody, 0], 4]
);
export var GetEvidenceFolderRequest = struct(
  n0,
  _GEFR,
  0,
  [_aI, _cSI, _eFI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetEvidenceFolderResponse = struct(n0, _GEFRe, 0, [_eF], [() => AssessmentEvidenceFolder]);
export var GetEvidenceFoldersByAssessmentControlRequest = struct(
  n0,
  _GEFBACR,
  0,
  [_aI, _cSI, _cI, _nT, _mR],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var GetEvidenceFoldersByAssessmentControlResponse = struct(
  n0,
  _GEFBACRe,
  0,
  [_eFv, _nT],
  [() => AssessmentEvidenceFolders, 0]
);
export var GetEvidenceFoldersByAssessmentRequest = struct(
  n0,
  _GEFBAR,
  0,
  [_aI, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var GetEvidenceFoldersByAssessmentResponse = struct(
  n0,
  _GEFBARe,
  0,
  [_eFv, _nT],
  [() => AssessmentEvidenceFolders, 0]
);
export var UpdateAssessmentControlRequest = struct(
  n0,
  _UACR,
  0,
  [_aI, _cSI, _cI, _cSon, _cBo],
  [[0, 1], [0, 1], [0, 1], 0, [() => ControlCommentBody, 0]]
);
export var UpdateAssessmentControlResponse = struct(n0, _UACRp, 0, [_cont], [[() => AssessmentControl, 0]]);
export var AssessmentEvidenceFolders = list(n0, _AEFs, 0, () => AssessmentEvidenceFolder);
export var ControlComments = list(n0, _CCo, 0, [() => ControlComment, 0]);
export var EvidenceSources = 64 | 0;

export var GetEvidenceFolder = op(
  n0,
  _GEF,
  {
    [_h]: ["GET", "/assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}", 200],
  },
  () => GetEvidenceFolderRequest,
  () => GetEvidenceFolderResponse
);
export var GetEvidenceFoldersByAssessment = op(
  n0,
  _GEFBA,
  {
    [_h]: ["GET", "/assessments/{assessmentId}/evidenceFolders", 200],
  },
  () => GetEvidenceFoldersByAssessmentRequest,
  () => GetEvidenceFoldersByAssessmentResponse
);
export var GetEvidenceFoldersByAssessmentControl = op(
  n0,
  _GEFBAC,
  {
    [_h]: ["GET", "/assessments/{assessmentId}/evidenceFolders-by-assessment-control/{controlSetId}/{controlId}", 200],
  },
  () => GetEvidenceFoldersByAssessmentControlRequest,
  () => GetEvidenceFoldersByAssessmentControlResponse
);
export var UpdateAssessmentControl = op(
  n0,
  _UAC,
  {
    [_h]: ["PUT", "/assessments/{assessmentId}/controlSets/{controlSetId}/controls/{controlId}", 200],
  },
  () => UpdateAssessmentControlRequest,
  () => UpdateAssessmentControlResponse
);
