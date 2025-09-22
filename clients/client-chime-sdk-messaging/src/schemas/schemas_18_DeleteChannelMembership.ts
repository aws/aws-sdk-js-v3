// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CA, _CB, _DCM, _DCMR, _h, _hH, _hQ, _MA, _SCI, _sci, _xacb, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteChannelMembershipRequest = struct(
  n0,
  _DCMR,
  0,
  [_CA, _MA, _CB, _SCI],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hH]: _xacb,
      },
    ],
    [
      0,
      {
        [_hQ]: _sci,
      },
    ],
  ]
);
export var DeleteChannelMembership = op(
  n0,
  _DCM,
  {
    [_h]: ["DELETE", "/channels/{ChannelArn}/memberships/{MemberArn}", 204],
  },
  () => DeleteChannelMembershipRequest,
  () => Unit
);
