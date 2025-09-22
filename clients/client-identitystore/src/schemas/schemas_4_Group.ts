// smithy-typescript generated code
import { list, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _Ad,
  _C,
  _E,
  _Em,
  _F,
  _FN,
  _GDN,
  _GN,
  _HP,
  _HS,
  _L,
  _MN,
  _N,
  _P,
  _PC,
  _PN,
  _PNh,
  _R,
  _SA,
  _SST,
  _T,
  _UN,
  _V,
  n0,
} from "./schemas_0";
import { SensitiveBooleanType } from "./schemas_6_User";

/* eslint no-var: 0 */

export var GroupDisplayName = sim(n0, _GDN, 0, 8);
export var SensitiveStringType = sim(n0, _SST, 0, 8);
export var UserName = sim(n0, _UN, 0, 8);
export var Address = struct(
  n0,
  _A,
  0,
  [_SA, _L, _R, _PC, _C, _F, _T, _P],
  [
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveBooleanType, 0],
  ]
);
export var Email = struct(
  n0,
  _Em,
  0,
  [_V, _T, _P],
  [
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveBooleanType, 0],
  ]
);
export var Name = struct(
  n0,
  _N,
  0,
  [_F, _FN, _GN, _MN, _HP, _HS],
  [
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
  ]
);
export var PhoneNumber = struct(
  n0,
  _PNh,
  0,
  [_V, _T, _P],
  [
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveBooleanType, 0],
  ]
);
export var Addresses = list(n0, _Ad, 0, [() => Address, 0]);
export var Emails = list(n0, _E, 0, [() => Email, 0]);
export var PhoneNumbers = list(n0, _PN, 0, [() => PhoneNumber, 0]);
