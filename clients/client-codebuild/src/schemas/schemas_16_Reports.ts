// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _fi, _LR, _LRFRG, _LRFRGI, _LRFRGO, _LRI, _LRO, _mR, _nT, _r, _RF, _rGAe, _sO, _st, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListReportsForReportGroupInput = struct(
  n0,
  _LRFRGI,
  0,
  [_rGAe, _nT, _sO, _mR, _fi],
  [0, 0, 0, 1, () => ReportFilter]
);
export var ListReportsForReportGroupOutput = struct(n0, _LRFRGO, 0, [_nT, _r], [0, 64 | 0]);
export var ListReportsInput = struct(n0, _LRI, 0, [_sO, _nT, _mR, _fi], [0, 0, 1, () => ReportFilter]);
export var ListReportsOutput = struct(n0, _LRO, 0, [_nT, _r], [0, 64 | 0]);
export var ReportFilter = struct(n0, _RF, 0, [_st], [0]);
export var ReportArns = 64 | 0;

export var ListReports = op(
  n0,
  _LR,
  0,
  () => ListReportsInput,
  () => ListReportsOutput
);
export var ListReportsForReportGroup = op(
  n0,
  _LRFRG,
  0,
  () => ListReportsForReportGroupInput,
  () => ListReportsForReportGroupOutput
);
