// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cI, _DCL, _DCLR, _DCLRe, _DLes, _DLRes, _lC, _lCT, _Lo, _lo, _pNr, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeConnectionLoaRequest = struct(n0, _DCLR, 0, [_cI, _pNr, _lCT], [0, 0, 0]);
export var DescribeConnectionLoaResponse = struct(n0, _DCLRe, 0, [_lo], [() => Loa]);
export var DescribeLoaRequest = struct(n0, _DLRes, 0, [_cI, _pNr, _lCT], [0, 0, 0]);
export var Loa = struct(n0, _Lo, 0, [_lC, _lCT], [21, 0]);
export var DescribeConnectionLoa = op(
  n0,
  _DCL,
  0,
  () => DescribeConnectionLoaRequest,
  () => DescribeConnectionLoaResponse
);
export var DescribeLoa = op(
  n0,
  _DLes,
  0,
  () => DescribeLoaRequest,
  () => Loa
);
