// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ARI,
  _ARR,
  _AT,
  _ATRR,
  _Co,
  _D,
  _ET,
  _FA,
  _FAi,
  _FN,
  _GARR,
  _GARRR,
  _GARRRe,
  _H,
  _LA,
  _MR,
  _NT,
  _P,
  _RT,
  _S,
  _ST,
  _US,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AnalysisTypeReportResult = struct(
  n0,
  _ATRR,
  0,
  [_P, _FA, _LA, _D, _H, _US],
  [0, 4, 4, 0, () => Hits, () => UniqueSources]
);
export var GetAnalysisReportResultsRequest = struct(n0, _GARRR, 0, [_FN, _ARI, _FAi, _NT, _MR], [0, 0, 0, 0, 1]);
export var GetAnalysisReportResultsResponse = struct(
  n0,
  _GARRRe,
  0,
  [_S, _ST, _ET, _RT, _AT, _NT, _ARR],
  [0, 4, 4, 4, 0, 0, () => AnalysisReportResults]
);
export var Hits = struct(n0, _H, 0, [_Co], [1]);
export var UniqueSources = struct(n0, _US, 0, [_Co], [1]);
export var AnalysisReportResults = list(n0, _ARR, 0, () => AnalysisTypeReportResult);
export var GetAnalysisReportResults = op(
  n0,
  _GARR,
  0,
  () => GetAnalysisReportResultsRequest,
  () => GetAnalysisReportResultsResponse
);
