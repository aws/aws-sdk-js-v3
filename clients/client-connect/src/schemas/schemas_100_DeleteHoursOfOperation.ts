// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DHOO, _DHOOR, _h, _HOOI, _II, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteHoursOfOperationRequest = struct(
  n0,
  _DHOOR,
  0,
  [_II, _HOOI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteHoursOfOperation = op(
  n0,
  _DHOO,
  {
    [_h]: ["DELETE", "/hours-of-operations/{InstanceId}/{HoursOfOperationId}", 200],
  },
  () => DeleteHoursOfOperationRequest,
  () => Unit
);
