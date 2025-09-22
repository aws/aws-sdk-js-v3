// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AZL, _LAZ, _LAZR, _LAZRi, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListAvailableZonesRequest = struct(n0, _LAZR, 0, [], []);
export var ListAvailableZonesResponse = struct(n0, _LAZRi, 0, [_AZL], [64 | 0]);
export var AZList = 64 | 0;

export var ListAvailableZones = op(
  n0,
  _LAZ,
  0,
  () => ListAvailableZonesRequest,
  () => ListAvailableZonesResponse
);
