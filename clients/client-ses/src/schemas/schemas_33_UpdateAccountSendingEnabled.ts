// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _En, _UASE, _UASER, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateAccountSendingEnabledRequest = struct(n0, _UASER, 0, [_En], [2]);
export var UpdateAccountSendingEnabled = op(
  n0,
  _UASE,
  0,
  () => UpdateAccountSendingEnabledRequest,
  () => Unit
);
