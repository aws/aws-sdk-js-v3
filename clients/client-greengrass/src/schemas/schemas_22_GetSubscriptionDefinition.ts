// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _A, _CT, _GSD, _GSDR, _GSDRe, _h, _I, _LUT, _LV, _LVA, _N, _SDI, _t, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetSubscriptionDefinitionRequest = struct(n0, _GSDR, 0, [_SDI], [[0, 1]]);
export var GetSubscriptionDefinitionResponse = struct(
  n0,
  _GSDRe,
  0,
  [_A, _CT, _I, _LUT, _LV, _LVA, _N, _t],
  [0, 0, 0, 0, 0, 0, 0, 128 | 0]
);
export var GetSubscriptionDefinition = op(
  n0,
  _GSD,
  {
    [_h]: ["GET", "/greengrass/definition/subscriptions/{SubscriptionDefinitionId}", 200],
  },
  () => GetSubscriptionDefinitionRequest,
  () => GetSubscriptionDefinitionResponse
);
