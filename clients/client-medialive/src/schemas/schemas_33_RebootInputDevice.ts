// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _For, _for, _ht, _IDI, _jN, _RID, _RIDR, _RIDRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RebootInputDeviceRequest = struct(
  n0,
  _RIDR,
  0,
  [_For, _IDI],
  [
    [
      0,
      {
        [_jN]: _for,
      },
    ],
    [0, 1],
  ]
);
export var RebootInputDeviceResponse = struct(n0, _RIDRe, 0, [], []);
export var RebootInputDevice = op(
  n0,
  _RID,
  {
    [_ht]: ["POST", "/prod/inputDevices/{InputDeviceId}/reboot", 200],
  },
  () => RebootInputDeviceRequest,
  () => RebootInputDeviceResponse
);
