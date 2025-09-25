// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { UnauthorizedException as __UnauthorizedException } from "../models/index";
import { _AI, _c, _DAe, _DAI, _DAO, _e, _h, _hE, _M, _UE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeregisterApplicationInput = struct(n0, _DAI, 0, [_AI], [0]);
export var DeregisterApplicationOutput = struct(n0, _DAO, 0, [], []);
export var UnauthorizedException = error(
  n0,
  _UE,
  {
    [_e]: _c,
    [_hE]: 401,
  },
  [_M],
  [0],

  __UnauthorizedException
);
export var DeregisterApplication = op(
  n0,
  _DAe,
  {
    [_h]: ["POST", "/deregister-application", 200],
  },
  () => DeregisterApplicationInput,
  () => DeregisterApplicationOutput
);
