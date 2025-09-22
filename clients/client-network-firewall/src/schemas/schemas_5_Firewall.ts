// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _AZ, _AZM, _AZMv, _DAZ, _DAZR, _DAZRi, _FAi, _FN, _UT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AvailabilityZoneMapping = struct(n0, _AZMv, 0, [_AZ], [0]);
export var DisassociateAvailabilityZonesRequest = struct(
  n0,
  _DAZR,
  0,
  [_UT, _FAi, _FN, _AZM],
  [0, 0, 0, () => AvailabilityZoneMappings]
);
export var DisassociateAvailabilityZonesResponse = struct(
  n0,
  _DAZRi,
  0,
  [_FAi, _FN, _AZM, _UT],
  [0, 0, () => AvailabilityZoneMappings, 0]
);
export var AvailabilityZoneMappings = list(n0, _AZM, 0, () => AvailabilityZoneMapping);
export var DisassociateAvailabilityZones = op(
  n0,
  _DAZ,
  0,
  () => DisassociateAvailabilityZonesRequest,
  () => DisassociateAvailabilityZonesResponse
);
