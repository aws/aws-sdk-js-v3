// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CCR, _CCRI, _CCRO, _CRARN, _DCR, _DCRI, _DCRO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelCacheReportInput = struct(n0, _CCRI, 0, [_CRARN], [0]);
export var CancelCacheReportOutput = struct(n0, _CCRO, 0, [_CRARN], [0]);
export var DeleteCacheReportInput = struct(n0, _DCRI, 0, [_CRARN], [0]);
export var DeleteCacheReportOutput = struct(n0, _DCRO, 0, [_CRARN], [0]);
export var CancelCacheReport = op(
  n0,
  _CCR,
  0,
  () => CancelCacheReportInput,
  () => CancelCacheReportOutput
);
export var DeleteCacheReport = op(
  n0,
  _DCR,
  0,
  () => DeleteCacheReportInput,
  () => DeleteCacheReportOutput
);
