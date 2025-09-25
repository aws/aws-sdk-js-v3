// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AL,
  _BD,
  _BN,
  _Bu,
  _DBFR,
  _DBFRI,
  _DBFRO,
  _LBFR,
  _LBFRI,
  _LBFRO,
  _NPT,
  _PS,
  _PTa,
  _RI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BudgetDetail = struct(n0, _BD, 0, [_BN], [0]);
export var DisassociateBudgetFromResourceInput = struct(n0, _DBFRI, 0, [_BN, _RI], [0, 0]);
export var DisassociateBudgetFromResourceOutput = struct(n0, _DBFRO, 0, [], []);
export var ListBudgetsForResourceInput = struct(n0, _LBFRI, 0, [_AL, _RI, _PS, _PTa], [0, 0, 1, 0]);
export var ListBudgetsForResourceOutput = struct(n0, _LBFRO, 0, [_Bu, _NPT], [() => Budgets, 0]);
export var Budgets = list(n0, _Bu, 0, () => BudgetDetail);
export var DisassociateBudgetFromResource = op(
  n0,
  _DBFR,
  0,
  () => DisassociateBudgetFromResourceInput,
  () => DisassociateBudgetFromResourceOutput
);
export var ListBudgetsForResource = op(
  n0,
  _LBFR,
  0,
  () => ListBudgetsForResourceInput,
  () => ListBudgetsForResourceOutput
);
