// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { UserNotFoundFault as __UserNotFoundFault } from "../models/index";
import { _aQE, _c, _e, _hE, _m, _UNFF, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UserNotFoundFault = error(
  n0,
  _UNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`UserNotFound`, 404],
  },
  [_m],
  [0],

  __UserNotFoundFault
);
