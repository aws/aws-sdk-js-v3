// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _D, _DRe, _DRRe, _DRRes, _h, _jN, _RA, _RN, _T, _t, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeRegistryRequest = struct(n0, _DRRe, 0, [_RN], [[0, 1]]);
export var DescribeRegistryResponse = struct(
  n0,
  _DRRes,
  0,
  [_D, _RA, _RN, _T],
  [
    0,
    0,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var DescribeRegistry = op(
  n0,
  _DRe,
  {
    [_h]: ["GET", "/v1/registries/name/{RegistryName}", 200],
  },
  () => DescribeRegistryRequest,
  () => DescribeRegistryResponse
);
