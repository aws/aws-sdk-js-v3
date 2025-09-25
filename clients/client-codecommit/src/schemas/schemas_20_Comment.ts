// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  ClientRequestTokenRequiredException as __ClientRequestTokenRequiredException,
  IdempotencyParameterMismatchException as __IdempotencyParameterMismatchException,
  InvalidClientRequestTokenException as __InvalidClientRequestTokenException,
} from "../models/index";
import { _c, _CRTRE, _e, _ICRTE, _IPME, _m, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ClientRequestTokenRequiredException = error(
  n0,
  _CRTRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ClientRequestTokenRequiredException
);
export var IdempotencyParameterMismatchException = error(
  n0,
  _IPME,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __IdempotencyParameterMismatchException
);
export var InvalidClientRequestTokenException = error(
  n0,
  _ICRTE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidClientRequestTokenException
);
