// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _A, _CA, _CGN, _D, _ED, _ET, _GCG, _GCGR, _GCGRe, _h, _jN, _MA, _T, _t, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetChannelGroupRequest = struct(n0, _GCGR, 0, [_CGN], [[0, 1]]);
export var GetChannelGroupResponse = struct(
  n0,
  _GCGRe,
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
export var GetChannelGroup = op(
  n0,
  _GCG,
  {
    [_h]: ["GET", "/channelGroup/{ChannelGroupName}", 200],
  },
  () => GetChannelGroupRequest,
  () => GetChannelGroupResponse
);
