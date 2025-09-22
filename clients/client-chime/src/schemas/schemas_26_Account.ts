// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _AI, _ASDGWA, _ASDGWAR, _ASDGWARs, _GNr, _h, _SDG, _SDGi, _SDGL, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateSigninDelegateGroupsWithAccountRequest = struct(
  n0,
  _ASDGWAR,
  0,
  [_AI, _SDG],
  [[0, 1], () => SigninDelegateGroupList]
);
export var AssociateSigninDelegateGroupsWithAccountResponse = struct(n0, _ASDGWARs, 0, [], []);
export var SigninDelegateGroup = struct(n0, _SDGi, 0, [_GNr], [0]);
export var SigninDelegateGroupList = list(n0, _SDGL, 0, () => SigninDelegateGroup);
export var AssociateSigninDelegateGroupsWithAccount = op(
  n0,
  _ASDGWA,
  {
    [_h]: ["POST", "/accounts/{AccountId}?operation=associate-signin-delegate-groups", 200],
  },
  () => AssociateSigninDelegateGroupsWithAccountRequest,
  () => AssociateSigninDelegateGroupsWithAccountResponse
);
