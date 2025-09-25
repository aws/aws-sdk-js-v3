// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CFA, _DCF, _DCFR, _h, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteChannelFlowRequest = struct(n0, _DCFR, 0, [_CFA], [[0, 1]]);
export var DeleteChannelFlow = op(
  n0,
  _DCF,
  {
    [_h]: ["DELETE", "/channel-flows/{ChannelFlowArn}", 204],
  },
  () => DeleteChannelFlowRequest,
  () => Unit
);
