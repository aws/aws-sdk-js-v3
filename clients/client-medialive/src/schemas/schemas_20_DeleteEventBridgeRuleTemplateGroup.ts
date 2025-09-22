// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DEBRTG, _DEBRTGR, _ht, _Id, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEventBridgeRuleTemplateGroupRequest = struct(n0, _DEBRTGR, 0, [_Id], [[0, 1]]);
export var DeleteEventBridgeRuleTemplateGroup = op(
  n0,
  _DEBRTG,
  {
    [_ht]: ["DELETE", "/prod/eventbridge-rule-template-groups/{Identifier}", 204],
  },
  () => DeleteEventBridgeRuleTemplateGroupRequest,
  () => Unit
);
