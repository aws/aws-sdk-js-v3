// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _AI, _EA, _ES, _h, _I, _II, _IL, _In, _IU, _IUR, _IURn, _S, _UEL, _UTs, n0 } from "./schemas_0";
import { EmailAddress } from "./schemas_27_User";

/* eslint no-var: 0 */

export var Invite = struct(n0, _I, 0, [_II, _S, _EA, _ES], [0, 0, [() => EmailAddress, 0], 0]);
export var InviteUsersRequest = struct(n0, _IUR, 0, [_AI, _UEL, _UTs], [[0, 1], [() => UserEmailList, 0], 0]);
export var InviteUsersResponse = struct(n0, _IURn, 0, [_In], [[() => InviteList, 0]]);
export var InviteList = list(n0, _IL, 0, [() => Invite, 0]);
export var UserEmailList = list(n0, _UEL, 0, [() => EmailAddress, 0]);
export var InviteUsers = op(
  n0,
  _IU,
  {
    [_h]: ["POST", "/accounts/{AccountId}/users?operation=add", 201],
  },
  () => InviteUsersRequest,
  () => InviteUsersResponse
);
