// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _ALARC,
  _DP,
  _DPe,
  _DPR,
  _DPRe,
  _DPRes,
  _DPResc,
  _HCI,
  _I,
  _IF,
  _IPF,
  _LP,
  _LPR,
  _LPRi,
  _MR,
  _N,
  _NT,
  _PA,
  _PI,
  _PNr,
  _Pr,
  _Pro,
  _RAe,
  _RAes,
  _RTe,
  _S,
  n0,
} from "./schemas_0";
import { ResponseAction } from "./schemas_12_Response";

/* eslint no-var: 0 */

export var ApplicationLayerAutomaticResponseConfiguration = struct(n0, _ALARC, 0, [_S, _A], [0, () => ResponseAction]);
export var DeleteProtectionRequest = struct(n0, _DPR, 0, [_PI], [0]);
export var DeleteProtectionResponse = struct(n0, _DPRe, 0, [], []);
export var DescribeProtectionRequest = struct(n0, _DPRes, 0, [_PI, _RAe], [0, 0]);
export var DescribeProtectionResponse = struct(n0, _DPResc, 0, [_Pr], [() => Protection]);
export var InclusionProtectionFilters = struct(n0, _IPF, 0, [_RAes, _PNr, _RTe], [64 | 0, 64 | 0, 64 | 0]);
export var ListProtectionsRequest = struct(n0, _LPR, 0, [_NT, _MR, _IF], [0, 1, () => InclusionProtectionFilters]);
export var ListProtectionsResponse = struct(n0, _LPRi, 0, [_Pro, _NT], [() => Protections, 0]);
export var Protection = struct(
  n0,
  _Pr,
  0,
  [_I, _N, _RAe, _HCI, _PA, _ALARC],
  [0, 0, 0, 64 | 0, 0, () => ApplicationLayerAutomaticResponseConfiguration]
);
export var HealthCheckIds = 64 | 0;

export var ProtectionNameFilters = 64 | 0;

export var Protections = list(n0, _Pro, 0, () => Protection);
export var ResourceArnFilters = 64 | 0;

export var DeleteProtection = op(
  n0,
  _DP,
  0,
  () => DeleteProtectionRequest,
  () => DeleteProtectionResponse
);
export var DescribeProtection = op(
  n0,
  _DPe,
  0,
  () => DescribeProtectionRequest,
  () => DescribeProtectionResponse
);
export var ListProtections = op(
  n0,
  _LP,
  0,
  () => ListProtectionsRequest,
  () => ListProtectionsResponse
);
