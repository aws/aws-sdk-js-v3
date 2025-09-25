// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  LimitExceededException as __LimitExceededException,
} from "../models/index";
import { _c, _CE, _e, _hE, _LEE, _m, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __ConflictException
);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __LimitExceededException
);
