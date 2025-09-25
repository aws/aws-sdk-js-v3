// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CFI, _CFV, _DCFV, _DCFVR, _DCFVRe, _h, _II, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteContactFlowVersionRequest = struct(
  n0,
  _DCFVR,
  0,
  [_II, _CFI, _CFV],
  [
    [0, 1],
    [0, 1],
    [1, 1],
  ]
);
export var DeleteContactFlowVersionResponse = struct(n0, _DCFVRe, 0, [], []);
export var DeleteContactFlowVersion = op(
  n0,
  _DCFV,
  {
    [_h]: ["DELETE", "/contact-flows/{InstanceId}/{ContactFlowId}/version/{ContactFlowVersion}", 200],
  },
  () => DeleteContactFlowVersionRequest,
  () => DeleteContactFlowVersionResponse
);
