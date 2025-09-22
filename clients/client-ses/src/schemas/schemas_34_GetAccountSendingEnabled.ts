// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _En, _GASE, _GASER, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var GetAccountSendingEnabledResponse = struct(n0, _GASER, 0, [_En], [2]);
export var GetAccountSendingEnabled = op(
  n0,
  _GASE,
  0,
  () => Unit,
  () => GetAccountSendingEnabledResponse
);
