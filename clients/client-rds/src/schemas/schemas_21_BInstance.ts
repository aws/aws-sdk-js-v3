// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { AuthorizationNotFoundFault as __AuthorizationNotFoundFault } from "../models/index";
import { _ANFF, _aQE, _c, _e, _hE, _m, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AuthorizationNotFoundFault = error(
  n0,
  _ANFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`AuthorizationNotFound`, 404],
  },
  [_m],
  [0],

  __AuthorizationNotFoundFault
);
