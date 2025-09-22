// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GLR, _GLRR, _GLRRe, _lR, _lRP, _u, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetLogRecordRequest = struct(n0, _GLRR, 0, [_lRP, _u], [0, 2]);
export var GetLogRecordResponse = struct(n0, _GLRRe, 0, [_lR], [128 | 0]);
export var LogRecord = 128 | 0;

export var GetLogRecord = op(
  n0,
  _GLR,
  0,
  () => GetLogRecordRequest,
  () => GetLogRecordResponse
);
