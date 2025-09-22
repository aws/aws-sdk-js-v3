// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { CannotDeleteException as __CannotDeleteException } from "../models/index";
import { _aQE, _c, _CDE, _DRRS, _DRRSR, _DRRSRe, _e, _hE, _m, _N, _RSN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CannotDeleteException = error(
  n0,
  _CDE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CannotDelete`, 400],
  },
  [_N, _m],
  [0, 0],

  __CannotDeleteException
);
export var DeleteReceiptRuleSetRequest = struct(n0, _DRRSR, 0, [_RSN], [0]);
export var DeleteReceiptRuleSetResponse = struct(n0, _DRRSRe, 0, [], []);
export var DeleteReceiptRuleSet = op(
  n0,
  _DRRS,
  0,
  () => DeleteReceiptRuleSetRequest,
  () => DeleteReceiptRuleSetResponse
);
