// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CHC, _CHCI, _CHCO, _HC, _HT, _In, _LBN, _Ta, _Ti, _UT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ConfigureHealthCheckInput = struct(n0, _CHCI, 0, [_LBN, _HC], [0, () => HealthCheck]);
export var ConfigureHealthCheckOutput = struct(n0, _CHCO, 0, [_HC], [() => HealthCheck]);
export var HealthCheck = struct(n0, _HC, 0, [_Ta, _In, _Ti, _UT, _HT], [0, 1, 1, 1, 1]);
export var ConfigureHealthCheck = op(
  n0,
  _CHC,
  0,
  () => ConfigureHealthCheckInput,
  () => ConfigureHealthCheckOutput
);
