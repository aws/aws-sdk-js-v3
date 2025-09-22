// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAZI, _AAZO, _AZ, _DAZFLB, _EAZFLB, _LBN, _RAZI, _RAZO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AddAvailabilityZonesInput = struct(n0, _AAZI, 0, [_LBN, _AZ], [0, 64 | 0]);
export var AddAvailabilityZonesOutput = struct(n0, _AAZO, 0, [_AZ], [64 | 0]);
export var RemoveAvailabilityZonesInput = struct(n0, _RAZI, 0, [_LBN, _AZ], [0, 64 | 0]);
export var RemoveAvailabilityZonesOutput = struct(n0, _RAZO, 0, [_AZ], [64 | 0]);
export var AvailabilityZones = 64 | 0;

export var DisableAvailabilityZonesForLoadBalancer = op(
  n0,
  _DAZFLB,
  0,
  () => RemoveAvailabilityZonesInput,
  () => RemoveAvailabilityZonesOutput
);
export var EnableAvailabilityZonesForLoadBalancer = op(
  n0,
  _EAZFLB,
  0,
  () => AddAvailabilityZonesInput,
  () => AddAvailabilityZonesOutput
);
