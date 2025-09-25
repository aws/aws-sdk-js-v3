// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _b, _DME, _DMER, _DMERe, _eL, _eM, _h, _mEI, _pr, _SL, _st, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeMetricsExportRequest = struct(n0, _DMER, 0, [_mEI], [0]);
export var DescribeMetricsExportResponse = struct(n0, _DMERe, 0, [_mEI, _st, _eL, _eM], [0, 0, () => S3Location, 0]);
export var S3Location = struct(n0, _SL, 0, [_b, _pr], [0, 0]);
export var DescribeMetricsExport = op(
  n0,
  _DME,
  {
    [_h]: ["POST", "/describe-metrics-export", 200],
  },
  () => DescribeMetricsExportRequest,
  () => DescribeMetricsExportResponse
);
