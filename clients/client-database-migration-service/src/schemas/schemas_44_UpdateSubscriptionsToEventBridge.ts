// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _FMo, _Res, _USTEB, _USTEBM, _USTEBR, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateSubscriptionsToEventBridgeMessage = struct(n0, _USTEBM, 0, [_FMo], [2]);
export var UpdateSubscriptionsToEventBridgeResponse = struct(n0, _USTEBR, 0, [_Res], [0]);
export var UpdateSubscriptionsToEventBridge = op(
  n0,
  _USTEB,
  0,
  () => UpdateSubscriptionsToEventBridgeMessage,
  () => UpdateSubscriptionsToEventBridgeResponse
);
