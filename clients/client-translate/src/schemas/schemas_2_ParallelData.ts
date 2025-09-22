// smithy-typescript generated code
import { error, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import { _c, _CE, _e, _Fo, _hE, _M, _PDC, _SU, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ConflictException
);
export var ParallelDataConfig = struct(n0, _PDC, 0, [_SU, _Fo], [0, 0]);
