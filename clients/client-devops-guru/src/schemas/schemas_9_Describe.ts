// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DAO, _DAOR, _DAORe, _FT, _h, _MTTRIM, _PI, _RIe, _TT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeAccountOverviewRequest = struct(n0, _DAOR, 0, [_FT, _TT], [4, 4]);
export var DescribeAccountOverviewResponse = struct(n0, _DAORe, 0, [_RIe, _PI, _MTTRIM], [1, 1, 1]);
export var DescribeAccountOverview = op(
  n0,
  _DAO,
  {
    [_h]: ["POST", "/accounts/overview", 200],
  },
  () => DescribeAccountOverviewRequest,
  () => DescribeAccountOverviewResponse
);
