// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aT, _ATc, _DAT, _DATe, _DATI, _DATIe, _do, _n, _UAT, _UATI, _v, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var ActivityType = struct(n0, _ATc, 0, [_n, _v], [0, 0]);
export var DeleteActivityTypeInput = struct(n0, _DATI, 0, [_do, _aT], [0, () => ActivityType]);
export var DeprecateActivityTypeInput = struct(n0, _DATIe, 0, [_do, _aT], [0, () => ActivityType]);
export var UndeprecateActivityTypeInput = struct(n0, _UATI, 0, [_do, _aT], [0, () => ActivityType]);
export var DeleteActivityType = op(
  n0,
  _DAT,
  0,
  () => DeleteActivityTypeInput,
  () => Unit
);
export var DeprecateActivityType = op(
  n0,
  _DATe,
  0,
  () => DeprecateActivityTypeInput,
  () => Unit
);
export var UndeprecateActivityType = op(
  n0,
  _UAT,
  0,
  () => UndeprecateActivityTypeInput,
  () => Unit
);
