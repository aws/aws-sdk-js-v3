// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _bCP,
  _bCr,
  _BGR,
  _BGRI,
  _BGRO,
  _bM,
  _bO,
  _buc,
  _CCRS,
  _cCS,
  _cr,
  _dINS,
  _eCT,
  _eCx,
  _eD,
  _eI,
  _eK,
  _ex,
  _lCi,
  _lCP,
  _lM,
  _na,
  _pa,
  _pac,
  _R,
  _r,
  _rA,
  _Re,
  _REC,
  _rGAe,
  _rNF,
  _sCt,
  _sD,
  _SREC,
  _st,
  _t,
  _tot,
  _tr,
  _TRS,
  _tS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchGetReportsInput = struct(n0, _BGRI, 0, [_rA], [64 | 0]);
export var BatchGetReportsOutput = struct(n0, _BGRO, 0, [_r, _rNF], [() => Reports, 64 | 0]);
export var CodeCoverageReportSummary = struct(n0, _CCRS, 0, [_lCP, _lCi, _lM, _bCP, _bCr, _bM], [1, 1, 1, 1, 1, 1]);
export var Report = struct(
  n0,
  _R,
  0,
  [_a, _t, _na, _rGAe, _eI, _st, _cr, _ex, _eCx, _tr, _tS, _cCS],
  [0, 0, 0, 0, 0, 0, 4, 4, () => ReportExportConfig, 2, () => TestReportSummary, () => CodeCoverageReportSummary]
);
export var ReportExportConfig = struct(n0, _REC, 0, [_eCT, _sD], [0, () => S3ReportExportConfig]);
export var S3ReportExportConfig = struct(n0, _SREC, 0, [_buc, _bO, _pa, _pac, _eK, _eD], [0, 0, 0, 0, 0, 2]);
export var TestReportSummary = struct(n0, _TRS, 0, [_tot, _sCt, _dINS], [1, 128 | 1, 1]);
export var Reports = list(n0, _Re, 0, () => Report);
export var ReportStatusCounts = 128 | 1;

export var BatchGetReports = op(
  n0,
  _BGR,
  0,
  () => BatchGetReportsInput,
  () => BatchGetReportsOutput
);
