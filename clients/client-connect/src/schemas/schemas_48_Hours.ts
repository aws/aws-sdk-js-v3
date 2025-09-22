// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DHOOO, _DHOOOR, _h, _HOOI, _HOOOI, _II, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteHoursOfOperationOverrideRequest = struct(
  n0,
  _DHOOOR,
  0,
  [_II, _HOOI, _HOOOI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteHoursOfOperationOverride = op(
  n0,
  _DHOOO,
  {
    [_h]: [
      "DELETE",
      "/hours-of-operations/{InstanceId}/{HoursOfOperationId}/overrides/{HoursOfOperationOverrideId}",
      200,
    ],
  },
  () => DeleteHoursOfOperationOverrideRequest,
  () => Unit
);
