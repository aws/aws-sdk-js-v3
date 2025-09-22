// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aAI,
  _aI,
  _aO,
  _aRS,
  _at,
  _ca,
  _cCo,
  _cSI,
  _d,
  _dN,
  _dS,
  _E,
  _eAAI,
  _eBT,
  _eFI,
  _eI,
  _EL,
  _eN,
  _eSv,
  _ev,
  _GE,
  _GEBEF,
  _GEBEFR,
  _GEBEFRe,
  _GER,
  _GERe,
  _GSIS,
  _GSISR,
  _GSISRe,
  _h,
  _hQ,
  _i,
  _iI,
  _mR,
  _n,
  _nT,
  _R,
  _Re,
  _rIe,
  _SM,
  _sM,
  _SML,
  _ti,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Evidence = struct(
  n0,
  _E,
  0,
  [_dS, _eAAI, _ti, _eSv, _eN, _eBT, _rIe, _at, _iI, _cCo, _aO, _aAI, _eFI, _i, _aRS],
  [0, 0, 4, 0, 0, 0, () => Resources, 128 | 0, 0, 0, 0, 0, 0, 0, 0]
);
export var GetEvidenceByEvidenceFolderRequest = struct(
  n0,
  _GEBEFR,
  0,
  [_aI, _cSI, _eFI, _nT, _mR],
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
export var GetEvidenceByEvidenceFolderResponse = struct(n0, _GEBEFRe, 0, [_ev, _nT], [() => EvidenceList, 0]);
export var GetEvidenceRequest = struct(
  n0,
  _GER,
  0,
  [_aI, _cSI, _eFI, _eI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetEvidenceResponse = struct(n0, _GERe, 0, [_ev], [() => Evidence]);
export var GetServicesInScopeRequest = struct(n0, _GSISR, 0, [], []);
export var GetServicesInScopeResponse = struct(n0, _GSISRe, 0, [_sM], [() => ServiceMetadataList]);
export var Resource = struct(n0, _R, 0, [_a, _v, _cCo], [0, 0, 0]);
export var ServiceMetadata = struct(n0, _SM, 0, [_n, _dN, _d, _ca], [0, 0, 0, 0]);
export var EvidenceList = list(n0, _EL, 0, () => Evidence);
export var Resources = list(n0, _Re, 0, () => Resource);
export var ServiceMetadataList = list(n0, _SML, 0, () => ServiceMetadata);
export var EvidenceAttributes = 128 | 0;

export var GetEvidence = op(
  n0,
  _GE,
  {
    [_h]: [
      "GET",
      "/assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}/evidence/{evidenceId}",
      200,
    ],
  },
  () => GetEvidenceRequest,
  () => GetEvidenceResponse
);
export var GetEvidenceByEvidenceFolder = op(
  n0,
  _GEBEF,
  {
    [_h]: [
      "GET",
      "/assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}/evidence",
      200,
    ],
  },
  () => GetEvidenceByEvidenceFolderRequest,
  () => GetEvidenceByEvidenceFolderResponse
);
export var GetServicesInScope = op(
  n0,
  _GSIS,
  {
    [_h]: ["GET", "/services", 200],
  },
  () => GetServicesInScopeRequest,
  () => GetServicesInScopeResponse
);
