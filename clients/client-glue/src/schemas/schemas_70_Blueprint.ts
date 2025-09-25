// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BN,
  _BR,
  _BRl,
  _COo,
  _EM,
  _GBRet,
  _GBRetl,
  _GBRR,
  _GBRRe,
  _GBRRet,
  _GBRRetl,
  _MRax,
  _NTe,
  _Par,
  _RA,
  _REM,
  _RIu,
  _SBR,
  _SBRR,
  _SBRRt,
  _SO,
  _Sta,
  _WN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BlueprintRun = struct(
  n0,
  _BR,
  0,
  [_BN, _RIu, _WN, _Sta, _SO, _COo, _EM, _REM, _Par, _RA],
  [0, 0, 0, 0, 4, 4, 0, 0, 0, 0]
);
export var GetBlueprintRunRequest = struct(n0, _GBRR, 0, [_BN, _RIu], [0, 0]);
export var GetBlueprintRunResponse = struct(n0, _GBRRe, 0, [_BR], [() => BlueprintRun]);
export var GetBlueprintRunsRequest = struct(n0, _GBRRet, 0, [_BN, _NTe, _MRax], [0, 0, 1]);
export var GetBlueprintRunsResponse = struct(n0, _GBRRetl, 0, [_BRl, _NTe], [() => BlueprintRuns, 0]);
export var StartBlueprintRunRequest = struct(n0, _SBRR, 0, [_BN, _Par, _RA], [0, 0, 0]);
export var StartBlueprintRunResponse = struct(n0, _SBRRt, 0, [_RIu], [0]);
export var BlueprintRuns = list(n0, _BRl, 0, () => BlueprintRun);
export var GetBlueprintRun = op(
  n0,
  _GBRet,
  0,
  () => GetBlueprintRunRequest,
  () => GetBlueprintRunResponse
);
export var GetBlueprintRuns = op(
  n0,
  _GBRetl,
  0,
  () => GetBlueprintRunsRequest,
  () => GetBlueprintRunsResponse
);
export var StartBlueprintRun = op(
  n0,
  _SBR,
  0,
  () => StartBlueprintRunRequest,
  () => StartBlueprintRunResponse
);
