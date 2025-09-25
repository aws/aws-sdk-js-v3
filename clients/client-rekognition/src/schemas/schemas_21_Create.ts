// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import { _C, _c, _CI, _CRT, _CU, _CUR, _CURr, _e, _L, _M, _SQEE, _UI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateUserRequest = struct(n0, _CUR, 0, [_CI, _UI, _CRT], [0, 0, [0, 4]]);
export var CreateUserResponse = struct(n0, _CURr, 0, [], []);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
  },
  [_M, _C, _L],
  [0, 0, 0],

  __ServiceQuotaExceededException
);
export var CreateUser = op(
  n0,
  _CU,
  0,
  () => CreateUserRequest,
  () => CreateUserResponse
);
