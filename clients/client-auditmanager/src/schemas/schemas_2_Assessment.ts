// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aAC,
  _ac,
  _aCCBNE,
  _AFSR,
  _aFSR,
  _AFSRL,
  _aFSRs,
  _aI,
  _cCBNE,
  _cCC,
  _CDI,
  _cDI,
  _CDIL,
  _cDIo,
  _cEC,
  _cIBA,
  _CIM,
  _cIM,
  _CIMBA,
  _CIMBAI,
  _CIMI,
  _com,
  _cSN,
  _cT,
  _cTr,
  _dA,
  _dR,
  _EI,
  _eIvi,
  _eT,
  _fD,
  _fI,
  _fN,
  _GI,
  _GIBA,
  _GIBAR,
  _GIBARe,
  _GIR,
  _GIRe,
  _h,
  _hQ,
  _I,
  _i,
  _IBA,
  _iEC,
  _in,
  _LACIBCD,
  _LACIBCDR,
  _LACIBCDRi,
  _LAFSR,
  _LAFSRR,
  _LAFSRRi,
  _LCDI,
  _LCDIBA,
  _LCDIBAR,
  _LCDIBARi,
  _LCDIR,
  _LCDIRi,
  _LCIBCD,
  _LCIBCDR,
  _LCIBCDRi,
  _lU,
  _mR,
  _n,
  _nEC,
  _nT,
  _rI,
  _rTe,
  _s,
  _sA,
  _SAFS,
  _SAFSR,
  _SAFSRt,
  _sCC,
  _tACC,
  _tCC,
  _UAFS,
  _UAFSR,
  _UAFSRp,
  n0,
} from "./schemas_0";
import { ComplianceType } from "./schemas_28_Assessment";

/* eslint no-var: 0 */

export var AssessmentFrameworkShareRequest = struct(
  n0,
  _AFSR,
  0,
  [_i, _fI, _fN, _fD, _s, _sA, _dA, _dR, _eT, _cTr, _lU, _com, _sCC, _cCC, _cT],
  [0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 1, 1, [() => ComplianceType, 0]]
);
export var ControlDomainInsights = struct(
  n0,
  _CDI,
  0,
  [_n, _i, _cCBNE, _tCC, _eIvi, _lU],
  [0, 0, 1, 1, () => EvidenceInsights, 4]
);
export var ControlInsightsMetadataByAssessmentItem = struct(
  n0,
  _CIMBAI,
  0,
  [_n, _i, _eIvi, _cSN, _lU],
  [0, 0, () => EvidenceInsights, 0, 4]
);
export var ControlInsightsMetadataItem = struct(n0, _CIMI, 0, [_n, _i, _eIvi, _lU], [0, 0, () => EvidenceInsights, 4]);
export var EvidenceInsights = struct(n0, _EI, 0, [_nEC, _cEC, _iEC], [1, 1, 1]);
export var GetInsightsByAssessmentRequest = struct(n0, _GIBAR, 0, [_aI], [[0, 1]]);
export var GetInsightsByAssessmentResponse = struct(n0, _GIBARe, 0, [_in], [() => InsightsByAssessment]);
export var GetInsightsRequest = struct(n0, _GIR, 0, [], []);
export var GetInsightsResponse = struct(n0, _GIRe, 0, [_in], [() => Insights]);
export var Insights = struct(n0, _I, 0, [_aAC, _nEC, _cEC, _iEC, _aCCBNE, _tACC, _lU], [1, 1, 1, 1, 1, 1, 4]);
export var InsightsByAssessment = struct(n0, _IBA, 0, [_nEC, _cEC, _iEC, _aCCBNE, _tACC, _lU], [1, 1, 1, 1, 1, 4]);
export var ListAssessmentControlInsightsByControlDomainRequest = struct(
  n0,
  _LACIBCDR,
  0,
  [_cDI, _aI, _nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _cDI,
      },
    ],
    [
      0,
      {
        [_hQ]: _aI,
      },
    ],
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
export var ListAssessmentControlInsightsByControlDomainResponse = struct(
  n0,
  _LACIBCDRi,
  0,
  [_cIBA, _nT],
  [() => ControlInsightsMetadataByAssessment, 0]
);
export var ListAssessmentFrameworkShareRequestsRequest = struct(
  n0,
  _LAFSRR,
  0,
  [_rTe, _nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _rTe,
      },
    ],
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
export var ListAssessmentFrameworkShareRequestsResponse = struct(
  n0,
  _LAFSRRi,
  0,
  [_aFSR, _nT],
  [[() => AssessmentFrameworkShareRequestList, 0], 0]
);
export var ListControlDomainInsightsByAssessmentRequest = struct(
  n0,
  _LCDIBAR,
  0,
  [_aI, _nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _aI,
      },
    ],
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
export var ListControlDomainInsightsByAssessmentResponse = struct(
  n0,
  _LCDIBARi,
  0,
  [_cDIo, _nT],
  [() => ControlDomainInsightsList, 0]
);
export var ListControlDomainInsightsRequest = struct(
  n0,
  _LCDIR,
  0,
  [_nT, _mR],
  [
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
export var ListControlDomainInsightsResponse = struct(
  n0,
  _LCDIRi,
  0,
  [_cDIo, _nT],
  [() => ControlDomainInsightsList, 0]
);
export var ListControlInsightsByControlDomainRequest = struct(
  n0,
  _LCIBCDR,
  0,
  [_cDI, _nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _cDI,
      },
    ],
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
export var ListControlInsightsByControlDomainResponse = struct(
  n0,
  _LCIBCDRi,
  0,
  [_cIM, _nT],
  [() => ControlInsightsMetadata, 0]
);
export var StartAssessmentFrameworkShareRequest = struct(n0, _SAFSR, 0, [_fI, _dA, _dR, _com], [[0, 1], 0, 0, 0]);
export var StartAssessmentFrameworkShareResponse = struct(
  n0,
  _SAFSRt,
  0,
  [_aFSRs],
  [[() => AssessmentFrameworkShareRequest, 0]]
);
export var UpdateAssessmentFrameworkShareRequest = struct(n0, _UAFSR, 0, [_rI, _rTe, _ac], [[0, 1], 0, 0]);
export var UpdateAssessmentFrameworkShareResponse = struct(
  n0,
  _UAFSRp,
  0,
  [_aFSRs],
  [[() => AssessmentFrameworkShareRequest, 0]]
);
export var AssessmentFrameworkShareRequestList = list(n0, _AFSRL, 0, [() => AssessmentFrameworkShareRequest, 0]);
export var ControlDomainInsightsList = list(n0, _CDIL, 0, () => ControlDomainInsights);
export var ControlInsightsMetadata = list(n0, _CIM, 0, () => ControlInsightsMetadataItem);
export var ControlInsightsMetadataByAssessment = list(n0, _CIMBA, 0, () => ControlInsightsMetadataByAssessmentItem);
export var GetInsights = op(
  n0,
  _GI,
  {
    [_h]: ["GET", "/insights", 200],
  },
  () => GetInsightsRequest,
  () => GetInsightsResponse
);
export var GetInsightsByAssessment = op(
  n0,
  _GIBA,
  {
    [_h]: ["GET", "/insights/assessments/{assessmentId}", 200],
  },
  () => GetInsightsByAssessmentRequest,
  () => GetInsightsByAssessmentResponse
);
export var ListAssessmentControlInsightsByControlDomain = op(
  n0,
  _LACIBCD,
  {
    [_h]: ["GET", "/insights/controls-by-assessment", 200],
  },
  () => ListAssessmentControlInsightsByControlDomainRequest,
  () => ListAssessmentControlInsightsByControlDomainResponse
);
export var ListAssessmentFrameworkShareRequests = op(
  n0,
  _LAFSR,
  {
    [_h]: ["GET", "/assessmentFrameworkShareRequests", 200],
  },
  () => ListAssessmentFrameworkShareRequestsRequest,
  () => ListAssessmentFrameworkShareRequestsResponse
);
export var ListControlDomainInsights = op(
  n0,
  _LCDI,
  {
    [_h]: ["GET", "/insights/control-domains", 200],
  },
  () => ListControlDomainInsightsRequest,
  () => ListControlDomainInsightsResponse
);
export var ListControlDomainInsightsByAssessment = op(
  n0,
  _LCDIBA,
  {
    [_h]: ["GET", "/insights/control-domains-by-assessment", 200],
  },
  () => ListControlDomainInsightsByAssessmentRequest,
  () => ListControlDomainInsightsByAssessmentResponse
);
export var ListControlInsightsByControlDomain = op(
  n0,
  _LCIBCD,
  {
    [_h]: ["GET", "/insights/controls", 200],
  },
  () => ListControlInsightsByControlDomainRequest,
  () => ListControlInsightsByControlDomainResponse
);
export var StartAssessmentFrameworkShare = op(
  n0,
  _SAFS,
  {
    [_h]: ["POST", "/assessmentFrameworks/{frameworkId}/shareRequests", 200],
  },
  () => StartAssessmentFrameworkShareRequest,
  () => StartAssessmentFrameworkShareResponse
);
export var UpdateAssessmentFrameworkShare = op(
  n0,
  _UAFS,
  {
    [_h]: ["PUT", "/assessmentFrameworkShareRequests/{requestId}", 200],
  },
  () => UpdateAssessmentFrameworkShareRequest,
  () => UpdateAssessmentFrameworkShareResponse
);
