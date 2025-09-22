// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _aI, _aIc, _BDTR, _BDTRE, _BDTREa, _BDTRR, _BDTRRa, _cod, _er, _h, _m, ErrorMessage, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var BatchDeleteTaxRegistrationError = struct(n0, _BDTRE, 0, [_aI, _m, _cod], [0, [() => ErrorMessage, 0], 0]);
export var BatchDeleteTaxRegistrationRequest = struct(n0, _BDTRR, 0, [_aIc], [64 | 0]);
export var BatchDeleteTaxRegistrationResponse = struct(
  n0,
  _BDTRRa,
  0,
  [_er],
  [[() => BatchDeleteTaxRegistrationErrors, 0]]
);
export var AccountIds = 64 | 0;

export var BatchDeleteTaxRegistrationErrors = list(n0, _BDTREa, 0, [() => BatchDeleteTaxRegistrationError, 0]);
export var BatchDeleteTaxRegistration = op(
  n0,
  _BDTR,
  {
    [_h]: ["POST", "/BatchDeleteTaxRegistration", 200],
  },
  () => BatchDeleteTaxRegistrationRequest,
  () => BatchDeleteTaxRegistrationResponse
);
