// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AIc, _DLP, _DLPe, _DLPR, _DLPRe, _DLPRes, _DLPResc, _LP, _P, _PN, _PSN, _Ra, _RGN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteLogPatternRequest = struct(n0, _DLPR, 0, [_RGN, _PSN, _PN], [0, 0, 0]);
export var DeleteLogPatternResponse = struct(n0, _DLPRe, 0, [], []);
export var DescribeLogPatternRequest = struct(n0, _DLPRes, 0, [_RGN, _PSN, _PN, _AIc], [0, 0, 0, 0]);
export var DescribeLogPatternResponse = struct(n0, _DLPResc, 0, [_RGN, _AIc, _LP], [0, 0, () => LogPattern]);
export var LogPattern = struct(n0, _LP, 0, [_PSN, _PN, _P, _Ra], [0, 0, 0, 1]);
export var DeleteLogPattern = op(
  n0,
  _DLP,
  0,
  () => DeleteLogPatternRequest,
  () => DeleteLogPatternResponse
);
export var DescribeLogPattern = op(
  n0,
  _DLPe,
  0,
  () => DescribeLogPatternRequest,
  () => DescribeLogPatternResponse
);
