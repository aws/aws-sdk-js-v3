// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  CreationLimitExceededException as __CreationLimitExceededException,
  DuplicateRecordException as __DuplicateRecordException,
} from "../models/index";
import { _c, _CLEE, _DRE, _e, _hE, _M, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreationLimitExceededException = error(
  n0,
  _CLEE,
  {
    [_e]: _c,
    [_hE]: 405,
  },
  [_M],
  [0],

  __CreationLimitExceededException
);
export var DuplicateRecordException = error(
  n0,
  _DRE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __DuplicateRecordException
);
