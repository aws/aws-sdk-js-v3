// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _av,
  _da,
  _GRGT,
  _GRGTI,
  _GRGTO,
  _ma,
  _mi,
  _nOR,
  _rAep,
  _rD,
  _rGAe,
  _RGTRDL,
  _RGTS,
  _RWRD,
  _sta,
  _tF,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetReportGroupTrendInput = struct(n0, _GRGTI, 0, [_rGAe, _nOR, _tF], [0, 1, 0]);
export var GetReportGroupTrendOutput = struct(
  n0,
  _GRGTO,
  0,
  [_sta, _rD],
  [() => ReportGroupTrendStats, () => ReportGroupTrendRawDataList]
);
export var ReportGroupTrendStats = struct(n0, _RGTS, 0, [_av, _ma, _mi], [0, 0, 0]);
export var ReportWithRawData = struct(n0, _RWRD, 0, [_rAep, _da], [0, 0]);
export var ReportGroupTrendRawDataList = list(n0, _RGTRDL, 0, () => ReportWithRawData);
export var GetReportGroupTrend = op(
  n0,
  _GRGT,
  0,
  () => GetReportGroupTrendInput,
  () => GetReportGroupTrendOutput
);
