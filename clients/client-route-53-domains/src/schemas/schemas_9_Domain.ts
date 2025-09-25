// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { DomainLimitExceeded as __DomainLimitExceeded } from "../models/index";
import { _ADTFAAA, _ADTFAAAR, _ADTFAAARc, _c, _DLEo, _DN, _e, _hE, _m, _OI, _P, n0 } from "./schemas_0";
import { Password } from "./schemas_15_Account";

/* eslint no-var: 0 */

export var AcceptDomainTransferFromAnotherAwsAccountRequest = struct(
  n0,
  _ADTFAAAR,
  0,
  [_DN, _P],
  [0, [() => Password, 0]]
);
export var AcceptDomainTransferFromAnotherAwsAccountResponse = struct(n0, _ADTFAAARc, 0, [_OI], [0]);
export var DomainLimitExceeded = error(
  n0,
  _DLEo,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __DomainLimitExceeded
);
export var AcceptDomainTransferFromAnotherAwsAccount = op(
  n0,
  _ADTFAAA,
  0,
  () => AcceptDomainTransferFromAnotherAwsAccountRequest,
  () => AcceptDomainTransferFromAnotherAwsAccountResponse
);
