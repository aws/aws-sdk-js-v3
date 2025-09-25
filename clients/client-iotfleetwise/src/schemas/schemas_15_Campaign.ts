// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cT, _ht, _IR, _iR, _lMT, _rA, _RAe, _RAR, _RARe, _rASe, _tDN, _TR, _tR, _tTN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var IamResources = struct(n0, _IR, 0, [_rA], [0]);
export var RegisterAccountRequest = struct(n0, _RAR, 0, [_tR, _iR], [() => TimestreamResources, () => IamResources]);
export var RegisterAccountResponse = struct(
  n0,
  _RARe,
  0,
  [_rASe, _tR, _iR, _cT, _lMT],
  [0, () => TimestreamResources, () => IamResources, 4, 4]
);
export var TimestreamResources = struct(n0, _TR, 0, [_tDN, _tTN], [0, 0]);
export var RegisterAccount = op(
  n0,
  _RAe,
  {
    [_ht]: ["POST", "/account/registration", 200],
  },
  () => RegisterAccountRequest,
  () => RegisterAccountResponse
);
