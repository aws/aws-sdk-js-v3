// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDEG, _DDEGR, _dEGI, _DEGIR, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DataflowEndpointGroupIdResponse = struct(n0, _DEGIR, 0, [_dEGI], [0]);
export var DeleteDataflowEndpointGroupRequest = struct(n0, _DDEGR, 0, [_dEGI], [[0, 1]]);
export var DeleteDataflowEndpointGroup = op(
  n0,
  _DDEG,
  {
    [_h]: ["DELETE", "/dataflowEndpointGroup/{dataflowEndpointGroupId}", 200],
  },
  () => DeleteDataflowEndpointGroupRequest,
  () => DataflowEndpointGroupIdResponse
);
