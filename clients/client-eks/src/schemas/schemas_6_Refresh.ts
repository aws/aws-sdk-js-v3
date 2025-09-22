// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cN, _DIRes, _DIRR, _DIRRe, _eA, _ht, _m, _s, _sAt, _SIR, _SIRR, _SIRRt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeInsightsRefreshRequest = struct(n0, _DIRR, 0, [_cN], [[0, 1]]);
export var DescribeInsightsRefreshResponse = struct(n0, _DIRRe, 0, [_m, _s, _sAt, _eA], [0, 0, 4, 4]);
export var StartInsightsRefreshRequest = struct(n0, _SIRR, 0, [_cN], [[0, 1]]);
export var StartInsightsRefreshResponse = struct(n0, _SIRRt, 0, [_m, _s], [0, 0]);
export var DescribeInsightsRefresh = op(
  n0,
  _DIRes,
  {
    [_ht]: ["GET", "/clusters/{clusterName}/insights-refresh", 200],
  },
  () => DescribeInsightsRefreshRequest,
  () => DescribeInsightsRefreshResponse
);
export var StartInsightsRefresh = op(
  n0,
  _SIR,
  {
    [_ht]: ["POST", "/clusters/{clusterName}/insights-refresh", 200],
  },
  () => StartInsightsRefreshRequest,
  () => StartInsightsRefreshResponse
);
