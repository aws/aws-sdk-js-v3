// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { UsageLimitNotFoundFault as __UsageLimitNotFoundFault } from "../models/index";
import { _aQE, _c, _DUL, _DULM, _e, _hE, _m, _ULI, _ULNFF, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteUsageLimitMessage = struct(n0, _DULM, 0, [_ULI], [0]);
export var UsageLimitNotFoundFault = error(
  n0,
  _ULNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`UsageLimitNotFound`, 404],
  },
  [_m],
  [0],

  __UsageLimitNotFoundFault
);
export var DeleteUsageLimit = op(
  n0,
  _DUL,
  0,
  () => DeleteUsageLimitMessage,
  () => Unit
);
