// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InvalidRoleException as __InvalidRoleException } from "../models/index";
import { _aN, _c, _DA, _DAI, _er, _IREn, _m, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteApplicationInput = struct(n0, _DAI, 0, [_aN], [0]);
export var InvalidRoleException = error(
  n0,
  _IREn,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidRoleException
);
export var DeleteApplication = op(
  n0,
  _DA,
  0,
  () => DeleteApplicationInput,
  () => Unit
);
