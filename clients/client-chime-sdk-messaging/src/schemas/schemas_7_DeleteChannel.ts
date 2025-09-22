// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CA, _CB, _DC, _DCR, _h, _hH, _xacb, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteChannelRequest = struct(
  n0,
  _DCR,
  0,
  [_CA, _CB],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _xacb,
      },
    ],
  ]
);
export var DeleteChannel = op(
  n0,
  _DC,
  {
    [_h]: ["DELETE", "/channels/{ChannelArn}", 204],
  },
  () => DeleteChannelRequest,
  () => Unit
);
