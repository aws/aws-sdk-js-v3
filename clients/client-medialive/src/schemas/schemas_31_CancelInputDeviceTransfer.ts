// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CIDT, _CIDTR, _CIDTRa, _ht, _IDI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelInputDeviceTransferRequest = struct(n0, _CIDTR, 0, [_IDI], [[0, 1]]);
export var CancelInputDeviceTransferResponse = struct(n0, _CIDTRa, 0, [], []);
export var CancelInputDeviceTransfer = op(
  n0,
  _CIDT,
  {
    [_ht]: ["POST", "/prod/inputDevices/{InputDeviceId}/cancel", 200],
  },
  () => CancelInputDeviceTransferRequest,
  () => CancelInputDeviceTransferResponse
);
