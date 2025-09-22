// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _LMA, _LMAR, _LMARi, _MAe, _MR, _NT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListMemberAccountsRequest = struct(n0, _LMAR, 0, [_NT, _MR], [0, 1]);
export var ListMemberAccountsResponse = struct(n0, _LMARi, 0, [_MAe, _NT], [64 | 0, 0]);
export var MemberAccounts = 64 | 0;

export var ListMemberAccounts = op(
  n0,
  _LMA,
  0,
  () => ListMemberAccountsRequest,
  () => ListMemberAccountsResponse
);
