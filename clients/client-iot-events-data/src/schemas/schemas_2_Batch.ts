// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  InternalFailureException as __InternalFailureException,
  InvalidRequestException as __InvalidRequestException,
  ServiceUnavailableException as __ServiceUnavailableException,
  ThrottlingException as __ThrottlingException,
} from "../models/index";
import { _c, _e, _hE, _IFE, _IRE, _me, _se, _SUE, _TE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var InternalFailureException = error(
  n0,
  _IFE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_me],
  [0],

  __InternalFailureException
);
export var InvalidRequestException = error(
  n0,
  _IRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_me],
  [0],

  __InvalidRequestException
);
export var ServiceUnavailableException = error(
  n0,
  _SUE,
  {
    [_e]: _se,
    [_hE]: 503,
  },
  [_me],
  [0],

  __ServiceUnavailableException
);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_me],
  [0],

  __ThrottlingException
);
