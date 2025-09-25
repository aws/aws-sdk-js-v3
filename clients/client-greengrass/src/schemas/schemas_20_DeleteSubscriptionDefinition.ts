// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSD, _DSDR, _DSDRe, _h, _SDI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSubscriptionDefinitionRequest = struct(n0, _DSDR, 0, [_SDI], [[0, 1]]);
export var DeleteSubscriptionDefinitionResponse = struct(n0, _DSDRe, 0, [], []);
export var DeleteSubscriptionDefinition = op(
  n0,
  _DSD,
  {
    [_h]: ["DELETE", "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}", 200],
  },
  () => DeleteSubscriptionDefinitionRequest,
  () => DeleteSubscriptionDefinitionResponse
);
