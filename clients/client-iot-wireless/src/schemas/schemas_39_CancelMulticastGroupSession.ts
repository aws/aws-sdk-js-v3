// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CMGS, _CMGSR, _CMGSRa, _h, _I, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelMulticastGroupSessionRequest = struct(n0, _CMGSR, 0, [_I], [[0, 1]]);
export var CancelMulticastGroupSessionResponse = struct(n0, _CMGSRa, 0, [], []);
export var CancelMulticastGroupSession = op(
  n0,
  _CMGS,
  {
    [_h]: ["DELETE", "/multicast-groups/{Id}/session", 204],
  },
  () => CancelMulticastGroupSessionRequest,
  () => CancelMulticastGroupSessionResponse
);
