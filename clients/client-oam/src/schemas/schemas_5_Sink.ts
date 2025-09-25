// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  InternalServiceFault as __InternalServiceFault,
  InvalidParameterException as __InvalidParameterException,
} from "../models/index";
import { _aET, _c, _e, _hE, _hH, _IPE, _ISF, _M, _m, _s, _xaE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var InternalServiceFault = error(
  n0,
  _ISF,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M, _aET],
  [
    0,
    [
      0,
      {
        [_hH]: _xaE,
      },
    ],
  ],

  __InternalServiceFault
);
export var InvalidParameterException = error(
  n0,
  _IPE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m, _aET],
  [
    0,
    [
      0,
      {
        [_hH]: _xaE,
      },
    ],
  ],

  __InvalidParameterException
);
