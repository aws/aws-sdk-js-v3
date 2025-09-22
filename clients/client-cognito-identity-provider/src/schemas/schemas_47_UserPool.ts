// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { UserImportInProgressException as __UserImportInProgressException } from "../models/index";
import { _c, _DUP, _DUPR, _e, _hE, _m, _UIIPE, _UPI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteUserPoolRequest = struct(n0, _DUPR, 0, [_UPI], [0]);
export var UserImportInProgressException = error(
  n0,
  _UIIPE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __UserImportInProgressException
);
export var DeleteUserPool = op(
  n0,
  _DUP,
  0,
  () => DeleteUserPoolRequest,
  () => Unit
);
