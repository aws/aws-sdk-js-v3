// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  ExecutionTimeoutException as __ExecutionTimeoutException,
  ServiceUnavailableException as __ServiceUnavailableException,
} from "../models/index";
import { _e, _ETE, _hE, _m, _se, _SUE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ExecutionTimeoutException = error(
  n0,
  _ETE,
  {
    [_e]: _se,
    [_hE]: 504,
  },
  [_m],
  [0],

  __ExecutionTimeoutException
);
export var ServiceUnavailableException = error(
  n0,
  _SUE,
  {
    [_e]: _se,
    [_hE]: 503,
  },
  [_m],
  [0],

  __ServiceUnavailableException
);
