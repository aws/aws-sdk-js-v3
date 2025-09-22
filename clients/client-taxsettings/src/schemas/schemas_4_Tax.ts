// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import { _c, _CE, _e, _eC, _hE, _m, ErrorMessage, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m, _eC],
  [[() => ErrorMessage, 0], 0],

  __ConflictException
);
