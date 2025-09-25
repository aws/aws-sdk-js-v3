// smithy-typescript generated code
import { error, list, struct } from "@smithy/core/schema";

import {
  InternalServerException as __InternalServerException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import { _c, _e, _Fi, _hE, _ISE, _M, _N, _QC, _R, _s, _SCe, _TE, _VE, _VEF, _VEFL, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __InternalServerException
);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M, _QC, _SCe],
  [0, 0, 0],

  __ThrottlingException
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _R, _Fi],
  [0, 0, () => ValidationExceptionFieldList],

  __ValidationException
);
export var ValidationExceptionField = struct(n0, _VEF, 0, [_N, _M], [0, 0]);
export var Unit = "unit" as const;

export var ValidationExceptionFieldList = list(n0, _VEFL, 0, () => ValidationExceptionField);
