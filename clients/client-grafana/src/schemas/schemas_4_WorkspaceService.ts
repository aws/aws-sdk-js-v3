// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ac,
  _cB,
  _cod,
  _CWSA,
  _CWSAR,
  _CWSARr,
  _er,
  _gR,
  _h,
  _i,
  _m,
  _n,
  _r,
  _ty,
  _U,
  _UE,
  _UEL,
  _UI,
  _UIB,
  _uIB,
  _UL,
  _UP,
  _UPR,
  _UPRp,
  _us,
  _wI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateWorkspaceServiceAccountRequest = struct(n0, _CWSAR, 0, [_n, _gR, _wI], [0, 0, [0, 1]]);
export var CreateWorkspaceServiceAccountResponse = struct(n0, _CWSARr, 0, [_i, _n, _gR, _wI], [0, 0, 0, 0]);
export var UpdateError = struct(n0, _UE, 0, [_cod, _m, _cB], [1, 0, () => UpdateInstruction]);
export var UpdateInstruction = struct(n0, _UI, 0, [_ac, _r, _us], [0, 0, () => UserList]);
export var UpdatePermissionsRequest = struct(n0, _UPR, 0, [_uIB, _wI], [() => UpdateInstructionBatch, [0, 1]]);
export var UpdatePermissionsResponse = struct(n0, _UPRp, 0, [_er], [() => UpdateErrorList]);
export var User = struct(n0, _U, 0, [_i, _ty], [0, 0]);
export var UpdateErrorList = list(n0, _UEL, 0, () => UpdateError);
export var UpdateInstructionBatch = list(n0, _UIB, 0, () => UpdateInstruction);
export var UserList = list(n0, _UL, 0, () => User);
export var CreateWorkspaceServiceAccount = op(
  n0,
  _CWSA,
  {
    [_h]: ["POST", "/workspaces/{workspaceId}/serviceaccounts", 200],
  },
  () => CreateWorkspaceServiceAccountRequest,
  () => CreateWorkspaceServiceAccountResponse
);
export var UpdatePermissions = op(
  n0,
  _UP,
  {
    [_h]: ["PATCH", "/workspaces/{workspaceId}/permissions", 200],
  },
  () => UpdatePermissionsRequest,
  () => UpdatePermissionsResponse
);
