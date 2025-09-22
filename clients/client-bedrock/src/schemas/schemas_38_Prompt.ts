// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DPRe, _DPRR, _DPRRe, _ht, _pRA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePromptRouterRequest = struct(n0, _DPRR, 0, [_pRA], [[0, 1]]);
export var DeletePromptRouterResponse = struct(n0, _DPRRe, 0, [], []);
export var DeletePromptRouter = op(
  n0,
  _DPRe,
  {
    [_ht]: ["DELETE", "/prompt-routers/{promptRouterArn}", 200],
  },
  () => DeletePromptRouterRequest,
  () => DeletePromptRouterResponse
);
