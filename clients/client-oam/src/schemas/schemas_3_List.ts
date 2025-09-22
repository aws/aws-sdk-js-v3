// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _A, _h, _I, _It, _LS, _LSI, _LSIi, _LSIis, _LSO, _MR, _N, _NT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListSinksInput = struct(n0, _LSI, 0, [_MR, _NT], [1, 0]);
export var ListSinksItem = struct(n0, _LSIi, 0, [_A, _I, _N], [0, 0, 0]);
export var ListSinksOutput = struct(n0, _LSO, 0, [_It, _NT], [() => ListSinksItems, 0]);
export var ListSinksItems = list(n0, _LSIis, 0, () => ListSinksItem);
export var ListSinks = op(
  n0,
  _LS,
  {
    [_h]: ["POST", "/ListSinks", 200],
  },
  () => ListSinksInput,
  () => ListSinksOutput
);
