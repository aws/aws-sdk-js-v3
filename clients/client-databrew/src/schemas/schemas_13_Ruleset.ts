// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _DRR, _DRRe, _h, _N, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRulesetRequest = struct(n0, _DRR, 0, [_N], [[0, 1]]);
export var DeleteRulesetResponse = struct(n0, _DRRe, 0, [_N], [0]);
export var DeleteRuleset = op(
  n0,
  _DR,
  {
    [_h]: ["DELETE", "/rulesets/{Name}", 200],
  },
  () => DeleteRulesetRequest,
  () => DeleteRulesetResponse
);
