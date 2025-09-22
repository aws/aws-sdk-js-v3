// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CSN, _En, _UCSSE, _UCSSER, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateConfigurationSetSendingEnabledRequest = struct(n0, _UCSSER, 0, [_CSN, _En], [0, 2]);
export var UpdateConfigurationSetSendingEnabled = op(
  n0,
  _UCSSE,
  0,
  () => UpdateConfigurationSetSendingEnabledRequest,
  () => Unit
);
