// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  CodeMismatchException as __CodeMismatchException,
  ExpiredCodeException as __ExpiredCodeException,
} from "../models/index";
import { _c, _CME, _e, _ECE, _hE, _m, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CodeMismatchException = error(
  n0,
  _CME,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __CodeMismatchException
);
export var ExpiredCodeException = error(
  n0,
  _ECE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ExpiredCodeException
);
