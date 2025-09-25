// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { DeleteConflictException as __DeleteConflictException } from "../models/index";
import {
  _aQE,
  _c,
  _DCE,
  _DG,
  _DGR,
  _DP,
  _DPR,
  _DR,
  _DRR,
  _DU,
  _DUR,
  _e,
  _GN,
  _hE,
  _m,
  _PA,
  _RN,
  _UN,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteConflictException = error(
  n0,
  _DCE,
  {
    [_e]: _c,
    [_hE]: 409,
    [_aQE]: [`DeleteConflict`, 409],
  },
  [_m],
  [0],

  __DeleteConflictException
);
export var DeleteGroupRequest = struct(n0, _DGR, 0, [_GN], [0]);
export var DeletePolicyRequest = struct(n0, _DPR, 0, [_PA], [0]);
export var DeleteRoleRequest = struct(n0, _DRR, 0, [_RN], [0]);
export var DeleteUserRequest = struct(n0, _DUR, 0, [_UN], [0]);
export var DeleteGroup = op(
  n0,
  _DG,
  0,
  () => DeleteGroupRequest,
  () => Unit
);
export var DeletePolicy = op(
  n0,
  _DP,
  0,
  () => DeletePolicyRequest,
  () => Unit
);
export var DeleteRole = op(
  n0,
  _DR,
  0,
  () => DeleteRoleRequest,
  () => Unit
);
export var DeleteUser = op(
  n0,
  _DU,
  0,
  () => DeleteUserRequest,
  () => Unit
);
