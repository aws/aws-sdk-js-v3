// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DC, _DCR, _DCRe, _h, _I, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteChannelRequest = struct(n0, _DCR, 0, [_I], [[0, 1]]);
export var DeleteChannelResponse = struct(n0, _DCRe, 0, [], []);
export var DeleteChannel = op(
  n0,
  _DC,
  {
    [_h]: ["DELETE", "/channels/{Id}", 202],
  },
  () => DeleteChannelRequest,
  () => DeleteChannelResponse
);
