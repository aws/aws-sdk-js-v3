// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DEBRT, _DEBRTR, _ht, _Id, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEventBridgeRuleTemplateRequest = struct(n0, _DEBRTR, 0, [_Id], [[0, 1]]);
export var DeleteEventBridgeRuleTemplate = op(
  n0,
  _DEBRT,
  {
    [_ht]: ["DELETE", "/prod/eventbridge-rule-templates/{Identifier}", 204],
  },
  () => DeleteEventBridgeRuleTemplateRequest,
  () => Unit
);
