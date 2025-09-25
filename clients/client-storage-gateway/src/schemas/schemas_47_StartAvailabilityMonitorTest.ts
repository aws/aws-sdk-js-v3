// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GARN, _SAMT, _SAMTI, _SAMTO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StartAvailabilityMonitorTestInput = struct(n0, _SAMTI, 0, [_GARN], [0]);
export var StartAvailabilityMonitorTestOutput = struct(n0, _SAMTO, 0, [_GARN], [0]);
export var StartAvailabilityMonitorTest = op(
  n0,
  _SAMT,
  0,
  () => StartAvailabilityMonitorTestInput,
  () => StartAvailabilityMonitorTestOutput
);
