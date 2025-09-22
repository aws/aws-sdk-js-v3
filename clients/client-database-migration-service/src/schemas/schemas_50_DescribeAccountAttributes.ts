// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _AQ, _AQc, _AQL, _AQN, _DAA, _DAAM, _DAAR, _M, _U, _UAI, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AccountQuota = struct(n0, _AQ, 0, [_AQN, _U, _M], [0, 1, 1]);
export var DescribeAccountAttributesMessage = struct(n0, _DAAM, 0, [], []);
export var DescribeAccountAttributesResponse = struct(n0, _DAAR, 0, [_AQc, _UAI], [[() => AccountQuotaList, 0], 0]);
export var AccountQuotaList = list(n0, _AQL, 0, [
  () => AccountQuota,
  {
    [_xN]: _AQ,
  },
]);
export var DescribeAccountAttributes = op(
  n0,
  _DAA,
  0,
  () => DescribeAccountAttributesMessage,
  () => DescribeAccountAttributesResponse
);
