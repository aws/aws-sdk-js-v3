// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DARV, _DARVR, _DARVRe, _h, _Id, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAutomationRuleV2Request = struct(n0, _DARVR, 0, [_Id], [[0, 1]]);
export var DeleteAutomationRuleV2Response = struct(n0, _DARVRe, 0, [], []);
export var DeleteAutomationRuleV2 = op(
  n0,
  _DARV,
  {
    [_h]: ["DELETE", "/automationrulesv2/{Identifier}", 200],
  },
  () => DeleteAutomationRuleV2Request,
  () => DeleteAutomationRuleV2Response
);
