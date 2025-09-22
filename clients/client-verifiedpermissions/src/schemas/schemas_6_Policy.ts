// smithy-typescript generated code
import { error, list, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import { _c, _CE, _e, _hE, _m, _RC, _RCL, _reso, _rI, _rT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m, _reso],
  [0, () => ResourceConflictList],

  __ConflictException
);
export var ResourceConflict = struct(n0, _RC, 0, [_rI, _rT], [0, 0]);
export var ResourceConflictList = list(n0, _RCL, 0, () => ResourceConflict);
