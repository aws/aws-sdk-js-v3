// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import { _ACT, _AI, _EA, _h, _N, _PAC, _PACR, _PN, _T, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var EmailAddress = sim(n0, _EA, 0, 8);
export var Name = sim(n0, _N, 0, 8);
export var PhoneNumber = sim(n0, _PN, 0, 8);
export var Title = sim(n0, _T, 0, 8);
export var PutAlternateContactRequest = struct(
  n0,
  _PACR,
  0,
  [_N, _T, _EA, _PN, _ACT, _AI],
  [[() => Name, 0], [() => Title, 0], [() => EmailAddress, 0], [() => PhoneNumber, 0], 0, 0]
);
export var PutAlternateContact = op(
  n0,
  _PAC,
  {
    [_h]: ["POST", "/putAlternateContact", 200],
  },
  () => PutAlternateContactRequest,
  () => Unit
);
