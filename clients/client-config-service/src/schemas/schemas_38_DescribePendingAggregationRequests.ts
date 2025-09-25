// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _DPARe, _DPARRe, _DPARRes, _L, _NT, _PAR, _PARe, _PARL, _RAI, _RAR, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribePendingAggregationRequestsRequest = struct(n0, _DPARRe, 0, [_L, _NT], [1, 0]);
export var DescribePendingAggregationRequestsResponse = struct(
  n0,
  _DPARRes,
  0,
  [_PAR, _NT],
  [() => PendingAggregationRequestList, 0]
);
export var PendingAggregationRequest = struct(n0, _PARe, 0, [_RAI, _RAR], [0, 0]);
export var PendingAggregationRequestList = list(n0, _PARL, 0, () => PendingAggregationRequest);
export var DescribePendingAggregationRequests = op(
  n0,
  _DPARe,
  0,
  () => DescribePendingAggregationRequestsRequest,
  () => DescribePendingAggregationRequestsResponse
);
