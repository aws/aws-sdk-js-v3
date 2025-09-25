// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDD, _DDDR, _DDDRe, _DDI, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDeviceDefinitionRequest = struct(n0, _DDDR, 0, [_DDI], [[0, 1]]);
export var DeleteDeviceDefinitionResponse = struct(n0, _DDDRe, 0, [], []);
export var DeleteDeviceDefinition = op(
  n0,
  _DDD,
  {
    [_h]: ["DELETE", "/greengrass/definition/devices/{DeviceDefinitionId}", 200],
  },
  () => DeleteDeviceDefinitionRequest,
  () => DeleteDeviceDefinitionResponse
);
