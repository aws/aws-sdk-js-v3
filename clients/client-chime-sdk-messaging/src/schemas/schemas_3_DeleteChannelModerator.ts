// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CA, _CB, _CMA, _DCMel, _DCMRel, _h, _hH, _xacb, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteChannelModeratorRequest = struct(
  n0,
  _DCMRel,
  0,
  [_CA, _CMA, _CB],
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
export var DeleteChannelModerator = op(
  n0,
  _DCMel,
  {
    [_h]: ["DELETE", "/channels/{ChannelArn}/moderators/{ChannelModeratorArn}", 204],
  },
  () => DeleteChannelModeratorRequest,
  () => Unit
);
