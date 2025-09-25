// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDI, _h, _N, _UDD, _UDDR, _UDDRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateDeviceDefinitionRequest = struct(n0, _UDDR, 0, [_DDI, _N], [[0, 1], 0]);
export var UpdateDeviceDefinitionResponse = struct(n0, _UDDRp, 0, [], []);
export var UpdateDeviceDefinition = op(
  n0,
  _UDD,
  {
    [_h]: ["PUT", "/greengrass/definition/devices/{DeviceDefinitionId}", 200],
  },
  () => UpdateDeviceDefinitionRequest,
  () => UpdateDeviceDefinitionResponse
);
