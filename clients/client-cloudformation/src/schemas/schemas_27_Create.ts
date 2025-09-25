// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRS, _DRSI, _DRSO, _ET, _PC, _RRe, _RSe, _RSI, _RTe, _S, _SF, _SR, _ST, n0 } from "./schemas_0";
import { ScanFilters } from "./schemas_3_Resource";

/* eslint no-var: 0 */

export var DescribeResourceScanInput = struct(n0, _DRSI, 0, [_RSI], [0]);
export var DescribeResourceScanOutput = struct(
  n0,
  _DRSO,
  0,
  [_RSI, _S, _SR, _ST, _ET, _PC, _RTe, _RSe, _RRe, _SF],
  [0, 0, 0, 4, 4, 1, 64 | 0, 1, 1, () => ScanFilters]
);
export var ResourceTypes = 64 | 0;

export var DescribeResourceScan = op(
  n0,
  _DRS,
  0,
  () => DescribeResourceScanInput,
  () => DescribeResourceScanOutput
);
