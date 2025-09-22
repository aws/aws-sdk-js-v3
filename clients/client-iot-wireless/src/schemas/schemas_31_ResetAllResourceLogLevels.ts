// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _RARLL, _RARLLR, _RARLLRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ResetAllResourceLogLevelsRequest = struct(n0, _RARLLR, 0, [], []);
export var ResetAllResourceLogLevelsResponse = struct(n0, _RARLLRe, 0, [], []);
export var ResetAllResourceLogLevels = op(
  n0,
  _RARLL,
  {
    [_h]: ["DELETE", "/log-levels", 204],
  },
  () => ResetAllResourceLogLevelsRequest,
  () => ResetAllResourceLogLevelsResponse
);
