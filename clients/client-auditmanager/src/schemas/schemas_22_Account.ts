// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DAe, _DARer, _DARere, _GAS, _GASR, _GASRe, _h, _s, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeregisterAccountRequest = struct(n0, _DARer, 0, [], []);
export var DeregisterAccountResponse = struct(n0, _DARere, 0, [_s], [0]);
export var GetAccountStatusRequest = struct(n0, _GASR, 0, [], []);
export var GetAccountStatusResponse = struct(n0, _GASRe, 0, [_s], [0]);
export var DeregisterAccount = op(
  n0,
  _DAe,
  {
    [_h]: ["POST", "/account/deregisterAccount", 200],
  },
  () => DeregisterAccountRequest,
  () => DeregisterAccountResponse
);
export var GetAccountStatus = op(
  n0,
  _GAS,
  {
    [_h]: ["GET", "/account/status", 200],
  },
  () => GetAccountStatusRequest,
  () => GetAccountStatusResponse
);
