// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _bAI,
  _bAT,
  _bI,
  _cDT,
  _CTSDR,
  _CTSDRR,
  _CTSDRRr,
  _h,
  _lI,
  _tar,
  _TSDRBAT,
  _tSDRI,
  _TSDRRT,
  _tSI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateTestSetDiscrepancyReportRequest = struct(
  n0,
  _CTSDRR,
  0,
  [_tSI, _tar],
  [[0, 1], () => TestSetDiscrepancyReportResourceTarget]
);
export var CreateTestSetDiscrepancyReportResponse = struct(
  n0,
  _CTSDRRr,
  0,
  [_tSDRI, _cDT, _tSI, _tar],
  [0, 4, 0, () => TestSetDiscrepancyReportResourceTarget]
);
export var TestSetDiscrepancyReportBotAliasTarget = struct(n0, _TSDRBAT, 0, [_bI, _bAI, _lI], [0, 0, 0]);
export var TestSetDiscrepancyReportResourceTarget = struct(
  n0,
  _TSDRRT,
  0,
  [_bAT],
  [() => TestSetDiscrepancyReportBotAliasTarget]
);
export var CreateTestSetDiscrepancyReport = op(
  n0,
  _CTSDR,
  {
    [_h]: ["POST", "/testsets/{testSetId}/testsetdiscrepancy", 202],
  },
  () => CreateTestSetDiscrepancyReportRequest,
  () => CreateTestSetDiscrepancyReportResponse
);
