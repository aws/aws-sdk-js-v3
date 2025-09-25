// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DEMCe, _DEMCRes, _DEMCResc, _LGA, _OI, _PEMC, _PEMCR, _PEMCRu, _RA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeEmailMonitoringConfigurationRequest = struct(n0, _DEMCRes, 0, [_OI], [0]);
export var DescribeEmailMonitoringConfigurationResponse = struct(n0, _DEMCResc, 0, [_RA, _LGA], [0, 0]);
export var PutEmailMonitoringConfigurationRequest = struct(n0, _PEMCR, 0, [_OI, _RA, _LGA], [0, 0, 0]);
export var PutEmailMonitoringConfigurationResponse = struct(n0, _PEMCRu, 0, [], []);
export var DescribeEmailMonitoringConfiguration = op(
  n0,
  _DEMCe,
  2,
  () => DescribeEmailMonitoringConfigurationRequest,
  () => DescribeEmailMonitoringConfigurationResponse
);
export var PutEmailMonitoringConfiguration = op(
  n0,
  _PEMC,
  2,
  () => PutEmailMonitoringConfigurationRequest,
  () => PutEmailMonitoringConfigurationResponse
);
