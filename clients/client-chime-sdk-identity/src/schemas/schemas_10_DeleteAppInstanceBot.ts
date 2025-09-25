// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AIBA, _DAIB, _DAIBR, _h, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAppInstanceBotRequest = struct(n0, _DAIBR, 0, [_AIBA], [[0, 1]]);
export var DeleteAppInstanceBot = op(
  n0,
  _DAIB,
  {
    [_h]: ["DELETE", "/app-instance-bots/{AppInstanceBotArn}", 204],
  },
  () => DeleteAppInstanceBotRequest,
  () => Unit
);
