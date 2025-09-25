// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { WAFDuplicateItemException as __WAFDuplicateItemException } from "../models/index";
import { _Ad, _c, _D, _e, _Id, _LT, _Me, _N, _NLT, _Sc, _UIPS, _UIPSR, _UIPSRp, _WAFDIE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateIPSetRequest = struct(n0, _UIPSR, 0, [_N, _Sc, _Id, _D, _Ad, _LT], [0, 0, 0, 0, 64 | 0, 0]);
export var UpdateIPSetResponse = struct(n0, _UIPSRp, 0, [_NLT], [0]);
export var WAFDuplicateItemException = error(
  n0,
  _WAFDIE,
  {
    [_e]: _c,
  },
  [_Me],
  [0],

  __WAFDuplicateItemException
);
export var UpdateIPSet = op(
  n0,
  _UIPS,
  0,
  () => UpdateIPSetRequest,
  () => UpdateIPSetResponse
);
