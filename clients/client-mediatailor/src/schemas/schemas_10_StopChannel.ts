// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CN, _h, _SCRto, _SCRtop, _SCto, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopChannelRequest = struct(n0, _SCRto, 0, [_CN], [[0, 1]]);
export var StopChannelResponse = struct(n0, _SCRtop, 0, [], []);
export var StopChannel = op(
  n0,
  _SCto,
  {
    [_h]: ["PUT", "/channel/{ChannelName}/stop", 200],
  },
  () => StopChannelRequest,
  () => StopChannelResponse
);
