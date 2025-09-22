// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CSLM, _DEM, _DEMI, _DSLM, _EEM, _EEMI, _EMO, _SARN, _SLM, _SN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisableEnhancedMonitoringInput = struct(n0, _DEMI, 0, [_SN, _SLM, _SARN], [0, 64 | 0, 0]);
export var EnableEnhancedMonitoringInput = struct(n0, _EEMI, 0, [_SN, _SLM, _SARN], [0, 64 | 0, 0]);
export var EnhancedMonitoringOutput = struct(n0, _EMO, 0, [_SN, _CSLM, _DSLM, _SARN], [0, 64 | 0, 64 | 0, 0]);
export var MetricsNameList = 64 | 0;

export var DisableEnhancedMonitoring = op(
  n0,
  _DEM,
  0,
  () => DisableEnhancedMonitoringInput,
  () => EnhancedMonitoringOutput
);
export var EnableEnhancedMonitoring = op(
  n0,
  _EEM,
  0,
  () => EnableEnhancedMonitoringInput,
  () => EnhancedMonitoringOutput
);
