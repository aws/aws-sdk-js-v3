// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  AuthorizationAlreadyExistsFault as __AuthorizationAlreadyExistsFault,
  AuthorizationQuotaExceededFault as __AuthorizationQuotaExceededFault,
} from "../models/index";
import { _AAEF, _aQE, _AQEF, _c, _e, _hE, _m, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AuthorizationAlreadyExistsFault = error(
  n0,
  _AAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`AuthorizationAlreadyExists`, 400],
  },
  [_m],
  [0],

  __AuthorizationAlreadyExistsFault
);
export var AuthorizationQuotaExceededFault = error(
  n0,
  _AQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`AuthorizationQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __AuthorizationQuotaExceededFault
);
