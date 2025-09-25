// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AIDT, _AIDTR, _AIDTRc, _ht, _IDI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AcceptInputDeviceTransferRequest = struct(n0, _AIDTR, 0, [_IDI], [[0, 1]]);
export var AcceptInputDeviceTransferResponse = struct(n0, _AIDTRc, 0, [], []);
export var AcceptInputDeviceTransfer = op(
  n0,
  _AIDT,
  {
    [_ht]: ["POST", "/prod/inputDevices/{InputDeviceId}/accept", 200],
  },
  () => AcceptInputDeviceTransferRequest,
  () => AcceptInputDeviceTransferResponse
);
