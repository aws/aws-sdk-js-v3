// smithy-typescript generated code
import { error, list, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import { _ADE, _c, _e, _fL, _hE, _ISE, _M, _m, _p, _RI, _RNFE, _s, _TE, _VE, _VEF, _VEFL, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_M],
  [0],

  __AccessDeniedException
);
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
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_RI],
  [0],

  __ResourceNotFoundException
);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M],
  [0],

  __ThrottlingException
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
  },
  [_m, _fL],
  [0, () => ValidationExceptionFieldList],

  __ValidationException
);
export var ValidationExceptionField = struct(n0, _VEF, 0, [_p, _m], [0, 0]);
export var ValidationExceptionFieldList = list(n0, _VEFL, 0, () => ValidationExceptionField);
