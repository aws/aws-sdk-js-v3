// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { AlreadyExistsFault as __AlreadyExistsFault } from "../models/index";
import { _AEF, _aQE, _c, _e, _hE, _m, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AlreadyExistsFault = error(
  n0,
  _AEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`AlreadyExists`, 400],
  },
  [_m],
  [0],

  __AlreadyExistsFault
);
