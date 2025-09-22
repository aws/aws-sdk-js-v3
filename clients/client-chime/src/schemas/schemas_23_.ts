// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _DSDGFA, _DSDGFAR, _DSDGFARi, _GN, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateSigninDelegateGroupsFromAccountRequest = struct(n0, _DSDGFAR, 0, [_AI, _GN], [[0, 1], 64 | 0]);
export var DisassociateSigninDelegateGroupsFromAccountResponse = struct(n0, _DSDGFARi, 0, [], []);
export var NonEmptyStringList = 64 | 0;

export var DisassociateSigninDelegateGroupsFromAccount = op(
  n0,
  _DSDGFA,
  {
    [_h]: ["POST", "/accounts/{AccountId}?operation=disassociate-signin-delegate-groups", 200],
  },
  () => DisassociateSigninDelegateGroupsFromAccountRequest,
  () => DisassociateSigninDelegateGroupsFromAccountResponse
);
