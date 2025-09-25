// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InvalidCrossAccountRoleException as __InvalidCrossAccountRoleException } from "../models/index";
import { _c, _cR, _e, _eC, _ICARE, _m, _rA, _RCAAR, _RCAARR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var InvalidCrossAccountRoleException = error(
  n0,
  _ICARE,
  {
    [_e]: _c,
  },
  [_m, _eC, _cR],
  [0, 0, 2],

  __InvalidCrossAccountRoleException
);
export var RegisterCrossAccountAccessRoleRequest = struct(n0, _RCAARR, 0, [_rA], [0]);
export var RegisterCrossAccountAccessRole = op(
  n0,
  _RCAAR,
  0,
  () => RegisterCrossAccountAccessRoleRequest,
  () => Unit
);
