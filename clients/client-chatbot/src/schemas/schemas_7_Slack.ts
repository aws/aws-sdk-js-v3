// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  DeleteSlackUserIdentityException as __DeleteSlackUserIdentityException,
  DeleteSlackWorkspaceAuthorizationFault as __DeleteSlackWorkspaceAuthorizationFault,
} from "../models/index";
import {
  _CCA,
  _DSUI,
  _DSUIE,
  _DSUIR,
  _DSUIRe,
  _DSWA,
  _DSWAF,
  _DSWAR,
  _DSWARe,
  _e,
  _h,
  _hE,
  _M,
  _s,
  _STI,
  _SUI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSlackUserIdentityException = error(
  n0,
  _DSUIE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __DeleteSlackUserIdentityException
);
export var DeleteSlackUserIdentityRequest = struct(n0, _DSUIR, 0, [_CCA, _STI, _SUI], [0, 0, 0]);
export var DeleteSlackUserIdentityResult = struct(n0, _DSUIRe, 0, [], []);
export var DeleteSlackWorkspaceAuthorizationFault = error(
  n0,
  _DSWAF,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __DeleteSlackWorkspaceAuthorizationFault
);
export var DeleteSlackWorkspaceAuthorizationRequest = struct(n0, _DSWAR, 0, [_STI], [0]);
export var DeleteSlackWorkspaceAuthorizationResult = struct(n0, _DSWARe, 0, [], []);
export var DeleteSlackUserIdentity = op(
  n0,
  _DSUI,
  {
    [_h]: ["POST", "/delete-slack-user-identity", 204],
  },
  () => DeleteSlackUserIdentityRequest,
  () => DeleteSlackUserIdentityResult
);
export var DeleteSlackWorkspaceAuthorization = op(
  n0,
  _DSWA,
  {
    [_h]: ["POST", "/delete-slack-workspace-authorization", 204],
  },
  () => DeleteSlackWorkspaceAuthorizationRequest,
  () => DeleteSlackWorkspaceAuthorizationResult
);
