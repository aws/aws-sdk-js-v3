// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _DER, _DERR, _DERRe, _ht, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEventRuleRequest = struct(n0, _DERR, 0, [_a], [[0, 1]]);
export var DeleteEventRuleResponse = struct(n0, _DERRe, 0, [], []);
export var DeleteEventRule = op(
  n0,
  _DER,
  {
    [_ht]: ["DELETE", "/event-rules/{arn}", 200],
  },
  () => DeleteEventRuleRequest,
  () => DeleteEventRuleResponse
);
