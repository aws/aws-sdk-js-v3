// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _A, _CGN, _CN, _h, _RA, _RCS, _RCSR, _RCSRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ResetChannelStateRequest = struct(
  n0,
  _RCSR,
  0,
  [_CGN, _CN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var ResetChannelStateResponse = struct(n0, _RCSRe, 0, [_CGN, _CN, _A, _RA], [0, 0, 0, 4]);
export var ResetChannelState = op(
  n0,
  _RCS,
  {
    [_h]: ["POST", "/channelGroup/{ChannelGroupName}/channel/{ChannelName}/reset", 200],
  },
  () => ResetChannelStateRequest,
  () => ResetChannelStateResponse
);
