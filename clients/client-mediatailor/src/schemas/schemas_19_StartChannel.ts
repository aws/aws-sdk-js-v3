// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CN, _h, _SCR, _SCRt, _SCt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StartChannelRequest = struct(n0, _SCR, 0, [_CN], [[0, 1]]);
export var StartChannelResponse = struct(n0, _SCRt, 0, [], []);
export var StartChannel = op(
  n0,
  _SCt,
  {
    [_h]: ["PUT", "/channel/{ChannelName}/start", 200],
  },
  () => StartChannelRequest,
  () => StartChannelResponse
);
