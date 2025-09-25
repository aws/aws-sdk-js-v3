// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GMC, _GMCR, _GMCRe, _h, _SM, _SMC, _St, _UMC, _UMCR, _UMCRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetMetricConfigurationRequest = struct(n0, _GMCR, 0, [], []);
export var GetMetricConfigurationResponse = struct(n0, _GMCRe, 0, [_SM], [() => SummaryMetricConfiguration]);
export var SummaryMetricConfiguration = struct(n0, _SMC, 0, [_St], [0]);
export var UpdateMetricConfigurationRequest = struct(n0, _UMCR, 0, [_SM], [() => SummaryMetricConfiguration]);
export var UpdateMetricConfigurationResponse = struct(n0, _UMCRp, 0, [], []);
export var GetMetricConfiguration = op(
  n0,
  _GMC,
  {
    [_h]: ["GET", "/metric-configuration", 200],
  },
  () => GetMetricConfigurationRequest,
  () => GetMetricConfigurationResponse
);
export var UpdateMetricConfiguration = op(
  n0,
  _UMC,
  {
    [_h]: ["PUT", "/metric-configuration", 204],
  },
  () => UpdateMetricConfigurationRequest,
  () => UpdateMetricConfigurationResponse
);
