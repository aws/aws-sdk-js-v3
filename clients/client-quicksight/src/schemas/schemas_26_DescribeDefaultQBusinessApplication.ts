// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _AIp, _DDQBAe, _DDQBARes, _DDQBAResc, _h, _hQ, _n, _Na, _RI, _St, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeDefaultQBusinessApplicationRequest = struct(
  n0,
  _DDQBARes,
  0,
  [_AAI, _Na],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
  ]
);
export var DescribeDefaultQBusinessApplicationResponse = struct(n0, _DDQBAResc, 0, [_RI, _St, _AIp], [0, [1, 32], 0]);
export var DescribeDefaultQBusinessApplication = op(
  n0,
  _DDQBAe,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/default-qbusiness-application", 200],
  },
  () => DescribeDefaultQBusinessApplicationRequest,
  () => DescribeDefaultQBusinessApplicationResponse
);
