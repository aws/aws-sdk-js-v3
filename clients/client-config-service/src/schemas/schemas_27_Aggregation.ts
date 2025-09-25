// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _AA, _AAA, _AAg, _AAI, _AAL, _AARu, _CTr, _DAAe, _DAARe, _DAARes, _L, _NT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AggregationAuthorization = struct(n0, _AA, 0, [_AAA, _AAI, _AARu, _CTr], [0, 0, 0, 4]);
export var DescribeAggregationAuthorizationsRequest = struct(n0, _DAARe, 0, [_L, _NT], [1, 0]);
export var DescribeAggregationAuthorizationsResponse = struct(
  n0,
  _DAARes,
  0,
  [_AAg, _NT],
  [() => AggregationAuthorizationList, 0]
);
export var AggregationAuthorizationList = list(n0, _AAL, 0, () => AggregationAuthorization);
export var DescribeAggregationAuthorizations = op(
  n0,
  _DAAe,
  0,
  () => DescribeAggregationAuthorizationsRequest,
  () => DescribeAggregationAuthorizationsResponse
);
