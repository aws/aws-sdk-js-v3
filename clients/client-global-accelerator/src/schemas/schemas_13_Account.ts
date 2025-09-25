// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _LCARA, _LCARAR, _LCARARi, _ROAAI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListCrossAccountResourceAccountsRequest = struct(n0, _LCARAR, 0, [], []);
export var ListCrossAccountResourceAccountsResponse = struct(n0, _LCARARi, 0, [_ROAAI], [64 | 0]);
export var AwsAccountIds = 64 | 0;

export var ListCrossAccountResourceAccounts = op(
  n0,
  _LCARA,
  0,
  () => ListCrossAccountResourceAccountsRequest,
  () => ListCrossAccountResourceAccountsResponse
);
