// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CGN, _CN, _DCP, _DCPR, _DCPRe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteChannelPolicyRequest = struct(
  n0,
  _DCPR,
  0,
  [_CGN, _CN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteChannelPolicyResponse = struct(n0, _DCPRe, 0, [], []);
export var DeleteChannelPolicy = op(
  n0,
  _DCP,
  {
    [_h]: ["DELETE", "/channelGroup/{ChannelGroupName}/channel/{ChannelName}/policy", 200],
  },
  () => DeleteChannelPolicyRequest,
  () => DeleteChannelPolicyResponse
);
