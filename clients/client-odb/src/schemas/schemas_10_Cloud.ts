// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import {
  _cATIM,
  _CC,
  _CCu,
  _DOW,
  _dOW,
  _DOWa,
  _em,
  _hOD,
  _iCATE,
  _lTIW,
  _M,
  _Mo,
  _mo,
  _MW,
  _n,
  _p,
  _pM,
  _sRk,
  _wOM,
  n0,
} from "./schemas_0";
import { SensitiveString } from "./schemas_16_Cloud";

/* eslint no-var: 0 */

export var CustomerContact = struct(n0, _CC, 0, [_em], [[() => SensitiveString, 0]]);
export var DayOfWeek = struct(n0, _DOW, 0, [_n], [0]);
export var MaintenanceWindow = struct(
  n0,
  _MW,
  0,
  [_cATIM, _dOW, _hOD, _iCATE, _lTIW, _mo, _pM, _p, _sRk, _wOM],
  [1, () => DaysOfWeek, 64 | 1, 2, 1, () => Months, 0, 0, 2, 64 | 1]
);
export var Month = struct(n0, _M, 0, [_n], [0]);
export var CustomerContacts = list(n0, _CCu, 0, [() => CustomerContact, 0]);
export var DaysOfWeek = list(n0, _DOWa, 0, () => DayOfWeek);
export var HoursOfDay = 64 | 1;

export var Months = list(n0, _Mo, 0, () => Month);
export var WeeksOfMonth = 64 | 1;
