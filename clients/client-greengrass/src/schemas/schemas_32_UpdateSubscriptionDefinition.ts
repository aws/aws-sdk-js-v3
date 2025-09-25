// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _N, _SDI, _USD, _USDR, _USDRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateSubscriptionDefinitionRequest = struct(n0, _USDR, 0, [_N, _SDI], [0, [0, 1]]);
export var UpdateSubscriptionDefinitionResponse = struct(n0, _USDRp, 0, [], []);
export var UpdateSubscriptionDefinition = op(
  n0,
  _USD,
  {
    [_h]: ["PUT", "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}", 200],
  },
  () => UpdateSubscriptionDefinitionRequest,
  () => UpdateSubscriptionDefinitionResponse
);
