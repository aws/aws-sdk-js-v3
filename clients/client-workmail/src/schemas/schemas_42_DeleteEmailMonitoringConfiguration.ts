// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DEMC, _DEMCR, _DEMCRe, _OI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEmailMonitoringConfigurationRequest = struct(n0, _DEMCR, 0, [_OI], [0]);
export var DeleteEmailMonitoringConfigurationResponse = struct(n0, _DEMCRe, 0, [], []);
export var DeleteEmailMonitoringConfiguration = op(
  n0,
  _DEMC,
  2,
  () => DeleteEmailMonitoringConfigurationRequest,
  () => DeleteEmailMonitoringConfigurationResponse
);
