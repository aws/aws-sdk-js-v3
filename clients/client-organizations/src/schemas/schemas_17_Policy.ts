// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  PolicyChangesInProgressException as __PolicyChangesInProgressException,
  PolicyTypeNotEnabledException as __PolicyTypeNotEnabledException,
} from "../models/index";
import { _c, _e, _hE, _M, _PCIPE, _PTNEE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PolicyChangesInProgressException = error(
  n0,
  _PCIPE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __PolicyChangesInProgressException
);
export var PolicyTypeNotEnabledException = error(
  n0,
  _PTNEE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __PolicyTypeNotEnabledException
);
