// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CSS, _GTRC, _GTRCR, _GTRCRe, _h, _RC, _TC, _TCU, _Te, _TN, _UTRC, _UTRCR, _UTRCRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetThingRuntimeConfigurationRequest = struct(n0, _GTRCR, 0, [_TN], [[0, 1]]);
export var GetThingRuntimeConfigurationResponse = struct(n0, _GTRCRe, 0, [_RC], [() => RuntimeConfiguration]);
export var RuntimeConfiguration = struct(n0, _RC, 0, [_TC], [() => TelemetryConfiguration]);
export var TelemetryConfiguration = struct(n0, _TC, 0, [_CSS, _Te], [0, 0]);
export var TelemetryConfigurationUpdate = struct(n0, _TCU, 0, [_Te], [0]);
export var UpdateThingRuntimeConfigurationRequest = struct(
  n0,
  _UTRCR,
  0,
  [_TC, _TN],
  [() => TelemetryConfigurationUpdate, [0, 1]]
);
export var UpdateThingRuntimeConfigurationResponse = struct(n0, _UTRCRp, 0, [], []);
export var GetThingRuntimeConfiguration = op(
  n0,
  _GTRC,
  {
    [_h]: ["GET", "/greengrass/things/{ThingName}/runtimeconfig", 200],
  },
  () => GetThingRuntimeConfigurationRequest,
  () => GetThingRuntimeConfigurationResponse
);
export var UpdateThingRuntimeConfiguration = op(
  n0,
  _UTRC,
  {
    [_h]: ["PUT", "/greengrass/things/{ThingName}/runtimeconfig", 200],
  },
  () => UpdateThingRuntimeConfigurationRequest,
  () => UpdateThingRuntimeConfigurationResponse
);
