// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResourceLockedException as __ResourceLockedException } from "../models/index";
import { _AI, _AIc, _BN, _c, _e, _EBA, _EBAR, _EBARx, _ETx, _hE, _M, _RLE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ExecuteBudgetActionRequest = struct(n0, _EBAR, 0, [_AIc, _BN, _AI, _ETx], [0, 0, 0, 0]);
export var ExecuteBudgetActionResponse = struct(n0, _EBARx, 0, [_AIc, _BN, _AI, _ETx], [0, 0, 0, 0]);
export var ResourceLockedException = error(
  n0,
  _RLE,
  {
    [_e]: _c,
    [_hE]: 423,
  },
  [_M],
  [0],

  __ResourceLockedException
);
export var ExecuteBudgetAction = op(
  n0,
  _EBA,
  0,
  () => ExecuteBudgetActionRequest,
  () => ExecuteBudgetActionResponse
);
