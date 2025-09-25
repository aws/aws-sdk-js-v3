// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _AAM, _AQ, _AQc, _AQL, _AQN, _DAA, _DAAM, _M, _U, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AccountAttributesMessage = struct(n0, _AAM, 0, [_AQ], [[() => AccountQuotaList, 0]]);
export var AccountQuota = struct(n0, _AQc, 0, [_AQN, _U, _M], [0, 1, 1]);
export var DescribeAccountAttributesMessage = struct(n0, _DAAM, 0, [], []);
export var AccountQuotaList = list(n0, _AQL, 0, [
  () => AccountQuota,
  {
    [_xN]: _AQc,
  },
]);
export var DescribeAccountAttributes = op(
  n0,
  _DAA,
  0,
  () => DescribeAccountAttributesMessage,
  () => AccountAttributesMessage
);
