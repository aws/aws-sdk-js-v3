// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CGN, _CN, _DC, _DCR, _DCRe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteChannelRequest = struct(
  n0,
  _DCR,
  0,
  [_CGN, _CN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteChannelResponse = struct(n0, _DCRe, 0, [], []);
export var DeleteChannel = op(
  n0,
  _DC,
  {
    [_h]: ["DELETE", "/channelGroup/{ChannelGroupName}/channel/{ChannelName}/", 200],
  },
  () => DeleteChannelRequest,
  () => DeleteChannelResponse
);
