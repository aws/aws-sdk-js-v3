// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _APS, _DPC, _EPC, _GPS, _GPSR, _GPSRe, _LPS, _NPC, _RPC, _SCC, _SCS, _SPS, _TPC, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AccessPolicyStats = struct(n0, _APS, 0, [_DPC], [1]);
export var GetPoliciesStatsRequest = struct(n0, _GPSR, 0, [], []);
export var GetPoliciesStatsResponse = struct(
  n0,
  _GPSRe,
  0,
  [_APS, _SPS, _SCS, _LPS, _TPC],
  [() => AccessPolicyStats, () => SecurityPolicyStats, () => SecurityConfigStats, () => LifecyclePolicyStats, 1]
);
export var LifecyclePolicyStats = struct(n0, _LPS, 0, [_RPC], [1]);
export var SecurityConfigStats = struct(n0, _SCS, 0, [_SCC], [1]);
export var SecurityPolicyStats = struct(n0, _SPS, 0, [_EPC, _NPC], [1, 1]);
export var GetPoliciesStats = op(
  n0,
  _GPS,
  0,
  () => GetPoliciesStatsRequest,
  () => GetPoliciesStatsResponse
);
