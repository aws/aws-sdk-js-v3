// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ABK,
  _ARC,
  _CF,
  _CFH,
  _CFHl,
  _DRCH,
  _DRCHR,
  _DRCHRe,
  _h,
  _hQ,
  _I,
  _IH,
  _MTTRIM,
  _NT,
  _OPI,
  _ORI,
  _RCT,
  _Se,
  _SH,
  _SHe,
  _SIH,
  _SNer,
  _SNt,
  _Ta,
  _TH,
  _THa,
  _TVa,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CloudFormationHealth = struct(n0, _CFH, 0, [_SNt, _I, _ARC], [0, () => InsightHealth, 1]);
export var DescribeResourceCollectionHealthRequest = struct(
  n0,
  _DRCHR,
  0,
  [_RCT, _NT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var DescribeResourceCollectionHealthResponse = struct(
  n0,
  _DRCHRe,
  0,
  [_CF, _Se, _NT, _Ta],
  [() => CloudFormationHealths, () => ServiceHealths, 0, () => TagHealths]
);
export var InsightHealth = struct(n0, _IH, 0, [_OPI, _ORI, _MTTRIM], [1, 1, 1]);
export var ServiceHealth = struct(n0, _SH, 0, [_SNer, _I, _ARC], [0, () => ServiceInsightHealth, 1]);
export var ServiceInsightHealth = struct(n0, _SIH, 0, [_OPI, _ORI], [1, 1]);
export var TagHealth = struct(n0, _TH, 0, [_ABK, _TVa, _I, _ARC], [0, 0, () => InsightHealth, 1]);
export var CloudFormationHealths = list(n0, _CFHl, 0, () => CloudFormationHealth);
export var ServiceHealths = list(n0, _SHe, 0, () => ServiceHealth);
export var TagHealths = list(n0, _THa, 0, () => TagHealth);
export var DescribeResourceCollectionHealth = op(
  n0,
  _DRCH,
  {
    [_h]: ["GET", "/accounts/health/resource-collection/{ResourceCollectionType}", 200],
  },
  () => DescribeResourceCollectionHealthRequest,
  () => DescribeResourceCollectionHealthResponse
);
