// smithy-typescript generated code
import { list, map, op, sim, struct } from "@smithy/core/schema";

import {
  _BGF,
  _BGFE,
  _BGFEa,
  _BGFR,
  _BGFRa,
  _cA,
  _cAI,
  _CL,
  _co,
  _cod,
  _CS,
  _cS,
  _CUU,
  _CUUR,
  _CUURr,
  _de,
  _dI,
  _dN,
  _dT,
  _eC,
  _eL,
  _F,
  _f,
  _fF,
  _FI,
  _Fi,
  _fI,
  _FIi,
  _fIi,
  _FP,
  _fP,
  _gI,
  _ht,
  _i,
  _iC,
  _m,
  _n,
  _na,
  _p,
  _R,
  _r,
  _Re,
  _re,
  _rec,
  _Res,
  _rH,
  _RHM,
  _rIul,
  _rU,
  _rV,
  _s,
  _se,
  _SF,
  _sF,
  _SFu,
  _sL,
  _sN,
  _sRI,
  _SU,
  _sU,
  _te,
  _ti,
  _ty,
  _u,
  _uA,
  _V,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var S3Url = sim(n0, _SU, 0, 8);
export var BatchGetFindingsError = struct(n0, _BGFE, 0, [_sN, _fI, _eC, _m], [0, 0, 0, 0]);
export var BatchGetFindingsRequest = struct(n0, _BGFR, 0, [_fIi], [() => FindingIdentifiers]);
export var BatchGetFindingsResponse = struct(n0, _BGFRa, 0, [_f, _fF], [() => Findings, () => BatchGetFindingsErrors]);
export var CodeLine = struct(n0, _CL, 0, [_n, _co], [1, 0]);
export var CreateUploadUrlRequest = struct(n0, _CUUR, 0, [_sN], [0]);
export var CreateUploadUrlResponse = struct(
  n0,
  _CUURr,
  0,
  [_sU, _rH, _cAI],
  [[() => S3Url, 0], [() => RequestHeaderMap, 0], 0]
);
export var FilePath = struct(n0, _FP, 0, [_na, _p, _sL, _eL, _cS], [0, 0, 1, 1, () => CodeSnippet]);
export var Finding = struct(
  n0,
  _F,
  0,
  [_cA, _de, _gI, _i, _uA, _ty, _s, _r, _v, _se, _re, _ti, _dT, _dI, _dN, _rIul],
  [4, 0, 0, 0, 4, 0, 0, () => Resource, () => Vulnerability, 0, () => Remediation, 0, 64 | 0, 0, 0, 0]
);
export var FindingIdentifier = struct(n0, _FI, 0, [_sN, _fI], [0, 0]);
export var Recommendation = struct(n0, _R, 0, [_te, _u], [0, 0]);
export var Remediation = struct(n0, _Re, 0, [_rec, _sF], [() => Recommendation, () => SuggestedFixes]);
export var Resource = struct(n0, _Res, 0, [_i, _sRI], [0, 0]);
export var SuggestedFix = struct(n0, _SF, 0, [_de, _cod], [0, 0]);
export var Vulnerability = struct(n0, _V, 0, [_rU, _rV, _i, _fP, _iC], [64 | 0, 64 | 0, 0, () => FilePath, 1]);
export var BatchGetFindingsErrors = list(n0, _BGFEa, 0, () => BatchGetFindingsError);
export var CodeSnippet = list(n0, _CS, 0, () => CodeLine);
export var DetectorTags = 64 | 0;

export var FindingIdentifiers = list(n0, _FIi, 0, () => FindingIdentifier);
export var Findings = list(n0, _Fi, 0, () => Finding);
export var ReferenceUrls = 64 | 0;

export var RelatedVulnerabilities = 64 | 0;

export var SuggestedFixes = list(n0, _SFu, 0, () => SuggestedFix);
export var RequestHeaderMap = map(n0, _RHM, 8, 0, 0);
export var BatchGetFindings = op(
  n0,
  _BGF,
  {
    [_ht]: ["POST", "/batchGetFindings", 200],
  },
  () => BatchGetFindingsRequest,
  () => BatchGetFindingsResponse
);
export var CreateUploadUrl = op(
  n0,
  _CUU,
  {
    [_ht]: ["POST", "/uploadUrl", 200],
  },
  () => CreateUploadUrlRequest,
  () => CreateUploadUrlResponse
);
