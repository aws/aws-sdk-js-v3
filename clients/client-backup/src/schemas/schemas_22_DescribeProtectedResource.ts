// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DPR, _DPRI, _DPRO, _h, _LBT, _LBVA, _LRETM, _LRJCD, _LRPA, _LRRPCD, _RA, _RN, _RT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeProtectedResourceInput = struct(n0, _DPRI, 0, [_RA], [[0, 1]]);
export var DescribeProtectedResourceOutput = struct(
  n0,
  _DPRO,
  0,
  [_RA, _RT, _LBT, _RN, _LBVA, _LRPA, _LRETM, _LRJCD, _LRRPCD],
  [0, 0, 4, 0, 0, 0, 1, 4, 4]
);
export var DescribeProtectedResource = op(
  n0,
  _DPR,
  {
    [_h]: ["GET", "/resources/{ResourceArn}", 200],
  },
  () => DescribeProtectedResourceInput,
  () => DescribeProtectedResourceOutput
);
