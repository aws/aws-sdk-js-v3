// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _ATA, _ATAc, _ATc, _ATct, _ATLc, _D, _DATes, _DATRes, _DATResc, _h, _MRa, _N, _NTe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ActionTarget = struct(n0, _ATc, 0, [_ATA, _N, _D], [0, 0, 0]);
export var DescribeActionTargetsRequest = struct(n0, _DATRes, 0, [_ATAc, _NTe, _MRa], [64 | 0, 0, 1]);
export var DescribeActionTargetsResponse = struct(n0, _DATResc, 0, [_ATct, _NTe], [() => ActionTargetList, 0]);
export var ActionTargetList = list(n0, _ATLc, 0, () => ActionTarget);
export var ArnList = 64 | 0;

export var DescribeActionTargets = op(
  n0,
  _DATes,
  {
    [_h]: ["POST", "/actionTargets/get", 200],
  },
  () => DescribeActionTargetsRequest,
  () => DescribeActionTargetsResponse
);
