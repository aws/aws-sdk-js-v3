// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _BSU,
  _BSUR,
  _BSURa,
  _BUU,
  _BUUR,
  _BUURa,
  _ECr,
  _EM,
  _h,
  _UE,
  _UELs,
  _UEse,
  _UI,
  _UIL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchSuspendUserRequest = struct(n0, _BSUR, 0, [_AI, _UIL], [[0, 1], 64 | 0]);
export var BatchSuspendUserResponse = struct(n0, _BSURa, 0, [_UE], [() => UserErrorList]);
export var BatchUnsuspendUserRequest = struct(n0, _BUUR, 0, [_AI, _UIL], [[0, 1], 64 | 0]);
export var BatchUnsuspendUserResponse = struct(n0, _BUURa, 0, [_UE], [() => UserErrorList]);
export var UserError = struct(n0, _UEse, 0, [_UI, _ECr, _EM], [0, 0, 0]);
export var UserErrorList = list(n0, _UELs, 0, () => UserError);
export var UserIdList = 64 | 0;

export var BatchSuspendUser = op(
  n0,
  _BSU,
  {
    [_h]: ["POST", "/accounts/{AccountId}/users?operation=suspend", 200],
  },
  () => BatchSuspendUserRequest,
  () => BatchSuspendUserResponse
);
export var BatchUnsuspendUser = op(
  n0,
  _BUU,
  {
    [_h]: ["POST", "/accounts/{AccountId}/users?operation=unsuspend", 200],
  },
  () => BatchUnsuspendUserRequest,
  () => BatchUnsuspendUserResponse
);
