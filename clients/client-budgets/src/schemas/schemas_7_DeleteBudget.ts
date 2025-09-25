// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AIc, _BN, _DB, _DBR, _DBRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBudgetRequest = struct(n0, _DBR, 0, [_AIc, _BN], [0, 0]);
export var DeleteBudgetResponse = struct(n0, _DBRe, 0, [], []);
export var DeleteBudget = op(
  n0,
  _DB,
  0,
  () => DeleteBudgetRequest,
  () => DeleteBudgetResponse
);
