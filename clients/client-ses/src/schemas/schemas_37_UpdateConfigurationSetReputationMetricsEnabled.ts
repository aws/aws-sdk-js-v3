// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CSN, _En, _UCSRME, _UCSRMER, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateConfigurationSetReputationMetricsEnabledRequest = struct(n0, _UCSRMER, 0, [_CSN, _En], [0, 2]);
export var UpdateConfigurationSetReputationMetricsEnabled = op(
  n0,
  _UCSRME,
  0,
  () => UpdateConfigurationSetReputationMetricsEnabledRequest,
  () => Unit
);
