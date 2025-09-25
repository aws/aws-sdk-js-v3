// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _a, _hC, _hCI, _hZI, _LRHC, _LRHCR, _LRHCRi, _mR, _nT, _reg, _RHC, _RHCL, _rN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListRoute53HealthChecksRequest = struct(n0, _LRHCR, 0, [_a, _hZI, _rN, _mR, _nT], [0, 0, 0, 1, 0]);
export var ListRoute53HealthChecksResponse = struct(n0, _LRHCRi, 0, [_hC, _nT], [() => Route53HealthCheckList, 0]);
export var Route53HealthCheck = struct(n0, _RHC, 0, [_hZI, _rN, _hCI, _reg], [0, 0, 0, 0]);
export var Route53HealthCheckList = list(n0, _RHCL, 0, () => Route53HealthCheck);
export var ListRoute53HealthChecks = op(
  n0,
  _LRHC,
  0,
  () => ListRoute53HealthChecksRequest,
  () => ListRoute53HealthChecksResponse
);
