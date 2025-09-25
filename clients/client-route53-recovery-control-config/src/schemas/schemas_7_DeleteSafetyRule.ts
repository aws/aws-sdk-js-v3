// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSR, _DSRR, _DSRRe, _h, _SRA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSafetyRuleRequest = struct(n0, _DSRR, 0, [_SRA], [[0, 1]]);
export var DeleteSafetyRuleResponse = struct(n0, _DSRRe, 0, [], []);
export var DeleteSafetyRule = op(
  n0,
  _DSR,
  {
    [_h]: ["DELETE", "/safetyrule/{SafetyRuleArn}", 200],
  },
  () => DeleteSafetyRuleRequest,
  () => DeleteSafetyRuleResponse
);
