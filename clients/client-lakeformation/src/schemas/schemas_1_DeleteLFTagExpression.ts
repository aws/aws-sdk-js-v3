// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CI, _DLFTE, _DLFTER, _DLFTERe, _h, _N, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteLFTagExpressionRequest = struct(n0, _DLFTER, 0, [_N, _CI], [0, 0]);
export var DeleteLFTagExpressionResponse = struct(n0, _DLFTERe, 0, [], []);
export var DeleteLFTagExpression = op(
  n0,
  _DLFTE,
  {
    [_h]: ["POST", "/DeleteLFTagExpression", 200],
  },
  () => DeleteLFTagExpressionRequest,
  () => DeleteLFTagExpressionResponse
);
