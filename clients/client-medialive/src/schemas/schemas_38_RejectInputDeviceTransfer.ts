// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _IDI, _RIDT, _RIDTR, _RIDTRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RejectInputDeviceTransferRequest = struct(n0, _RIDTR, 0, [_IDI], [[0, 1]]);
export var RejectInputDeviceTransferResponse = struct(n0, _RIDTRe, 0, [], []);
export var RejectInputDeviceTransfer = op(
  n0,
  _RIDT,
  {
    [_ht]: ["POST", "/prod/inputDevices/{InputDeviceId}/reject", 200],
  },
  () => RejectInputDeviceTransferRequest,
  () => RejectInputDeviceTransferResponse
);
