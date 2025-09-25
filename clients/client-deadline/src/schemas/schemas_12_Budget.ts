// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _aDL,
  _aTA,
  _aTR,
  _BATA,
  _BATAu,
  _BATR,
  _BATRu,
  _bI,
  _BSud,
  _CB,
  _CBR,
  _CBRr,
  _cT,
  _DB,
  _DBR,
  _DBRe,
  _de,
  _dN,
  _end,
  _eT,
  _FBS,
  _fI,
  _fix,
  _h,
  _hH,
  _iT,
  _qI,
  _sc,
  _st,
  _sTt,
  _t,
  _tP,
  _UB,
  _UBR,
  _UBRp,
  _uTR,
  _UTRs,
  _XACT,
  Description,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BudgetActionToAdd = struct(n0, _BATA, 0, [_t, _tP, _de], [0, 1, [() => Description, 0]]);
export var BudgetActionToRemove = struct(n0, _BATR, 0, [_t, _tP], [0, 1]);
export var CreateBudgetRequest = struct(
  n0,
  _CBR,
  0,
  [_cT, _fI, _uTR, _dN, _de, _aDL, _a, _sc],
  [
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
    [0, 1],
    () => UsageTrackingResource,
    0,
    [() => Description, 0],
    1,
    [() => BudgetActionsToAdd, 0],
    () => BudgetSchedule,
  ]
);
export var CreateBudgetResponse = struct(n0, _CBRr, 0, [_bI], [0]);
export var DeleteBudgetRequest = struct(
  n0,
  _DBR,
  0,
  [_fI, _bI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteBudgetResponse = struct(n0, _DBRe, 0, [], []);
export var FixedBudgetSchedule = struct(n0, _FBS, 0, [_sTt, _eT], [5, 5]);
export var UpdateBudgetRequest = struct(
  n0,
  _UBR,
  0,
  [_cT, _fI, _bI, _dN, _de, _st, _aDL, _aTA, _aTR, _sc],
  [
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
    [0, 1],
    [0, 1],
    0,
    [() => Description, 0],
    0,
    1,
    [() => BudgetActionsToAdd, 0],
    () => BudgetActionsToRemove,
    () => BudgetSchedule,
  ]
);
export var UpdateBudgetResponse = struct(n0, _UBRp, 0, [], []);
export var BudgetActionsToAdd = list(n0, _BATAu, 0, [() => BudgetActionToAdd, 0]);
export var BudgetActionsToRemove = list(n0, _BATRu, 0, () => BudgetActionToRemove);
export var BudgetSchedule = uni(n0, _BSud, 0, [_fix], [() => FixedBudgetSchedule]);
export var UsageTrackingResource = uni(n0, _UTRs, 0, [_qI], [0]);
export var CreateBudget = op(
  n0,
  _CB,
  {
    [_h]: ["POST", "/2023-10-12/farms/{farmId}/budgets", 200],
    [_end]: ["management."],
  },
  () => CreateBudgetRequest,
  () => CreateBudgetResponse
);
export var DeleteBudget = op(
  n0,
  _DB,
  {
    [_h]: ["DELETE", "/2023-10-12/farms/{farmId}/budgets/{budgetId}", 200],
    [_end]: ["management."],
  },
  () => DeleteBudgetRequest,
  () => DeleteBudgetResponse
);
export var UpdateBudget = op(
  n0,
  _UB,
  {
    [_h]: ["PATCH", "/2023-10-12/farms/{farmId}/budgets/{budgetId}", 200],
    [_end]: ["management."],
  },
  () => UpdateBudgetRequest,
  () => UpdateBudgetResponse
);
