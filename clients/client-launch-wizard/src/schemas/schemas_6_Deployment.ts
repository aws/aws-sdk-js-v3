// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  InternalServerException as __InternalServerException,
  ValidationException as __ValidationException,
} from "../models/index";
import { _cl, _e, _hE, _ISE, _m, _se, _VE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_m],
  [0],

  __InternalServerException
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _cl,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ValidationException
);
