// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AMGWFT, _AMGWFTR, _AMGWFTRs, _h, _I, _MGI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateMulticastGroupWithFuotaTaskRequest = struct(n0, _AMGWFTR, 0, [_I, _MGI], [[0, 1], 0]);
export var AssociateMulticastGroupWithFuotaTaskResponse = struct(n0, _AMGWFTRs, 0, [], []);
export var AssociateMulticastGroupWithFuotaTask = op(
  n0,
  _AMGWFT,
  {
    [_h]: ["PUT", "/fuota-tasks/{Id}/multicast-group", 204],
  },
  () => AssociateMulticastGroupWithFuotaTaskRequest,
  () => AssociateMulticastGroupWithFuotaTaskResponse
);
