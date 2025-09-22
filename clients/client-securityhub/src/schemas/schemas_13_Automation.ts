// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _ARAu, _BDAR, _BDARR, _BDARRa, _ECr, _EMr, _h, _PAR, _RA, _UAR, _UARL, _UARn, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var BatchDeleteAutomationRulesRequest = struct(n0, _BDARR, 0, [_ARAu], [64 | 0]);
export var BatchDeleteAutomationRulesResponse = struct(
  n0,
  _BDARRa,
  0,
  [_PAR, _UAR],
  [64 | 0, () => UnprocessedAutomationRulesList]
);
export var UnprocessedAutomationRule = struct(n0, _UARn, 0, [_RA, _ECr, _EMr], [0, 1, 0]);
export var AutomationRulesArnsList = 64 | 0;

export var UnprocessedAutomationRulesList = list(n0, _UARL, 0, () => UnprocessedAutomationRule);
export var BatchDeleteAutomationRules = op(
  n0,
  _BDAR,
  {
    [_h]: ["POST", "/automationrules/delete", 200],
  },
  () => BatchDeleteAutomationRulesRequest,
  () => BatchDeleteAutomationRulesResponse
);
