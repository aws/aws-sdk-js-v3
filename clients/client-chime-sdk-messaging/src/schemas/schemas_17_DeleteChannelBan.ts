// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CA, _CB, _DCB, _DCBR, _h, _hH, _MA, _xacb, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteChannelBanRequest = struct(
  n0,
  _DCBR,
  0,
  [_CA, _MA, _CB],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hH]: _xacb,
      },
    ],
  ]
);
export var DeleteChannelBan = op(
  n0,
  _DCB,
  {
    [_h]: ["DELETE", "/channels/{ChannelArn}/bans/{MemberArn}", 204],
  },
  () => DeleteChannelBanRequest,
  () => Unit
);
