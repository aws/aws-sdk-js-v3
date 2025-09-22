// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  TooManyRegistrationsForTargetIdException as __TooManyRegistrationsForTargetIdException,
  TooManyTargetsException as __TooManyTargetsException,
} from "../models/index";
import { _aQE, _c, _e, _hE, _M, _TMRFTIE, _TMTEo, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var TooManyRegistrationsForTargetIdException = error(
  n0,
  _TMRFTIE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TooManyRegistrationsForTargetId`, 400],
  },
  [_M],
  [0],

  __TooManyRegistrationsForTargetIdException
);
export var TooManyTargetsException = error(
  n0,
  _TMTEo,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TooManyTargets`, 400],
  },
  [_M],
  [0],

  __TooManyTargetsException
);
