// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  IdempotentParameterMismatchException as __IdempotentParameterMismatchException,
  LimitExceededException as __LimitExceededException,
} from "../models/index";
import { _C, _c, _e, _IPME, _LEE, _M, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var IdempotentParameterMismatchException = error(
  n0,
  _IPME,
  {
    [_e]: _c,
  },
  [_M, _C],
  [0, 0],

  __IdempotentParameterMismatchException
);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
  },
  [_M, _C],
  [0, 0],

  __LimitExceededException
);
