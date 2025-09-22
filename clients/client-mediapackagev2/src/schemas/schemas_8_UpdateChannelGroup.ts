// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _A, _CA, _CGN, _D, _ED, _ET, _h, _hH, _jN, _MA, _T, _t, _UCG, _UCGR, _UCGRp, _xauim, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateChannelGroupRequest = struct(
  n0,
  _UCGR,
  0,
  [_CGN, _ET, _D],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _xauim,
      },
    ],
    0,
  ]
);
export var UpdateChannelGroupResponse = struct(
  n0,
  _UCGRp,
  0,
  [_CGN, _A, _ED, _CA, _MA, _D, _ET, _T],
  [
    0,
    0,
    0,
    4,
    4,
    0,
    0,
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var UpdateChannelGroup = op(
  n0,
  _UCG,
  {
    [_h]: ["PUT", "/channelGroup/{ChannelGroupName}", 200],
  },
  () => UpdateChannelGroupRequest,
  () => UpdateChannelGroupResponse
);
