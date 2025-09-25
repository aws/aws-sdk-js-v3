// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DIAWE, _ES, _GA, _GAR, _GARe, _h, _MHS, _MSR, _PAE, _SEe, _SLH, _SQ, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetAccountRequest = struct(n0, _GAR, 0, [], []);
export var GetAccountResponse = struct(n0, _GARe, 0, [_SQ, _SEe, _DIAWE, _ES, _PAE], [() => SendQuota, 2, 2, 0, 2]);
export var SendQuota = struct(n0, _SQ, 0, [_MHS, _MSR, _SLH], [1, 1, 1]);
export var GetAccount = op(
  n0,
  _GA,
  {
    [_h]: ["GET", "/v1/email/account", 200],
  },
  () => GetAccountRequest,
  () => GetAccountResponse
);
