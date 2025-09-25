// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { UnprocessableEntityException as __UnprocessableEntityException } from "../models/index";
import { _AI, _C, _c, _DA, _DAR, _DARe, _e, _h, _hE, _M, _UEE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAccountRequest = struct(n0, _DAR, 0, [_AI], [[0, 1]]);
export var DeleteAccountResponse = struct(n0, _DARe, 0, [], []);
export var UnprocessableEntityException = error(
  n0,
  _UEE,
  {
    [_e]: _c,
    [_hE]: 422,
  },
  [_C, _M],
  [0, 0],

  __UnprocessableEntityException
);
export var DeleteAccount = op(
  n0,
  _DA,
  {
    [_h]: ["DELETE", "/accounts/{AccountId}", 204],
  },
  () => DeleteAccountRequest,
  () => DeleteAccountResponse
);
