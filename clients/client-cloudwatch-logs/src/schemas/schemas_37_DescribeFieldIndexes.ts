// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _DFI, _DFIR, _DFIRe, _fET, _FI, _fI, _FIi, _fIN, _lET, _lGI, _lGIo, _lST, _nT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeFieldIndexesRequest = struct(n0, _DFIR, 0, [_lGIo, _nT], [64 | 0, 0]);
export var DescribeFieldIndexesResponse = struct(n0, _DFIRe, 0, [_fI, _nT], [() => FieldIndexes, 0]);
export var FieldIndex = struct(n0, _FI, 0, [_lGI, _fIN, _lST, _fET, _lET], [0, 0, 1, 1, 1]);
export var DescribeFieldIndexesLogGroupIdentifiers = 64 | 0;

export var FieldIndexes = list(n0, _FIi, 0, () => FieldIndex);
export var DescribeFieldIndexes = op(
  n0,
  _DFI,
  0,
  () => DescribeFieldIndexesRequest,
  () => DescribeFieldIndexesResponse
);
