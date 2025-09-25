// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CFI, _DCF, _DCFR, _DCFRe, _h, _II, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteContactFlowRequest = struct(
  n0,
  _DCFR,
  0,
  [_II, _CFI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteContactFlowResponse = struct(n0, _DCFRe, 0, [], []);
export var DeleteContactFlow = op(
  n0,
  _DCF,
  {
    [_h]: ["DELETE", "/contact-flows/{InstanceId}/{ContactFlowId}", 200],
  },
  () => DeleteContactFlowRequest,
  () => DeleteContactFlowResponse
);
