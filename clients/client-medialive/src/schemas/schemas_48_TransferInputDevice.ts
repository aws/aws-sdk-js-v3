// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _IDI, _jN, _TCI, _tCI, _TID, _TIDR, _TIDRr, _TM, _tM, _TR, _tR, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var TransferInputDeviceRequest = struct(
  n0,
  _TIDR,
  0,
  [_IDI, _TCI, _TR, _TM],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _tCI,
      },
    ],
    [
      0,
      {
        [_jN]: _tR,
      },
    ],
    [
      0,
      {
        [_jN]: _tM,
      },
    ],
  ]
);
export var TransferInputDeviceResponse = struct(n0, _TIDRr, 0, [], []);
export var TransferInputDevice = op(
  n0,
  _TID,
  {
    [_ht]: ["POST", "/prod/inputDevices/{InputDeviceId}/transfer", 200],
  },
  () => TransferInputDeviceRequest,
  () => TransferInputDeviceResponse
);
