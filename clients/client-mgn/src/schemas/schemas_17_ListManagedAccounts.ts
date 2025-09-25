// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _aI, _ht, _i, _LMA, _LMAR, _LMARi, _MA, _MAa, _mR, _nT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListManagedAccountsRequest = struct(n0, _LMAR, 0, [_mR, _nT], [1, 0]);
export var ListManagedAccountsResponse = struct(n0, _LMARi, 0, [_i, _nT], [() => ManagedAccounts, 0]);
export var ManagedAccount = struct(n0, _MA, 0, [_aI], [0]);
export var ManagedAccounts = list(n0, _MAa, 0, () => ManagedAccount);
export var ListManagedAccounts = op(
  n0,
  _LMA,
  {
    [_ht]: ["POST", "/ListManagedAccounts", 200],
  },
  () => ListManagedAccountsRequest,
  () => ListManagedAccountsResponse
);
