// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CGN, _DCG, _DCGR, _DCGRe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteChannelGroupRequest = struct(n0, _DCGR, 0, [_CGN], [[0, 1]]);
export var DeleteChannelGroupResponse = struct(n0, _DCGRe, 0, [], []);
export var DeleteChannelGroup = op(
  n0,
  _DCG,
  {
    [_h]: ["DELETE", "/channelGroup/{ChannelGroupName}", 200],
  },
  () => DeleteChannelGroupRequest,
  () => DeleteChannelGroupResponse
);
