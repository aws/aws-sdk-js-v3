// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CTo, _CTr, _DRJ, _DRJI, _DRJO, _h, _RD, _RJ, _RJI, _RPAe, _RTep, _SBN, _SK, _SM, _St, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeReportJobInput = struct(n0, _DRJI, 0, [_RJI], [[0, 1]]);
export var DescribeReportJobOutput = struct(n0, _DRJO, 0, [_RJ], [() => ReportJob]);
export var ReportDestination = struct(n0, _RD, 0, [_SBN, _SK], [0, 64 | 0]);
export var ReportJob = struct(
  n0,
  _RJ,
  0,
  [_RJI, _RPAe, _RTep, _CTr, _CTo, _St, _SM, _RD],
  [0, 0, 0, 4, 4, 0, 0, () => ReportDestination]
);
export var DescribeReportJob = op(
  n0,
  _DRJ,
  {
    [_h]: ["GET", "/audit/report-jobs/{ReportJobId}", 200],
  },
  () => DescribeReportJobInput,
  () => DescribeReportJobOutput
);
