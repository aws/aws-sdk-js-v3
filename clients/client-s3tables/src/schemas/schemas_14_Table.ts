// smithy-typescript generated code
import { map, op, struct } from "@smithy/core/schema";

import { _co, _GTMC, _GTMCR, _GTMCRe, _h, _n, _na, _tARN, _tBARN, _TMC, n0 } from "./schemas_0";
import { TableMaintenanceConfigurationValue } from "./schemas_2_Table";

/* eslint no-var: 0 */

export var GetTableMaintenanceConfigurationRequest = struct(
  n0,
  _GTMCR,
  0,
  [_tBARN, _n, _na],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetTableMaintenanceConfigurationResponse = struct(
  n0,
  _GTMCRe,
  0,
  [_tARN, _co],
  [0, () => TableMaintenanceConfiguration]
);
export var TableMaintenanceConfiguration = map(n0, _TMC, 0, 0, () => TableMaintenanceConfigurationValue);
export var GetTableMaintenanceConfiguration = op(
  n0,
  _GTMC,
  {
    [_h]: ["GET", "/tables/{tableBucketARN}/{namespace}/{name}/maintenance", 200],
  },
  () => GetTableMaintenanceConfigurationRequest,
  () => GetTableMaintenanceConfigurationResponse
);
