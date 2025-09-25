// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _B,
  _BGB,
  _BGBR,
  _BGBRa,
  _BL,
  _Bl,
  _BSL,
  _CBR,
  _CBre,
  _CBRr,
  _CO,
  _D,
  _EM,
  _GB,
  _GBR,
  _GBRe,
  _IB,
  _IPS,
  _LAD,
  _LMO,
  _MB,
  _N,
  _Na,
  _PS,
  _St,
  _Tag,
  _UBpda,
  _UBR,
  _UBRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchGetBlueprintsRequest = struct(n0, _BGBR, 0, [_Na, _IB, _IPS], [64 | 0, 2, 2]);
export var BatchGetBlueprintsResponse = struct(n0, _BGBRa, 0, [_B, _MB], [() => Blueprints, 64 | 0]);
export var Blueprint = struct(
  n0,
  _Bl,
  0,
  [_N, _D, _CO, _LMO, _PS, _BL, _BSL, _St, _EM, _LAD],
  [0, 0, 4, 4, 0, 0, 0, 0, 0, () => LastActiveDefinition]
);
export var CreateBlueprintRequest = struct(n0, _CBR, 0, [_N, _D, _BL, _Tag], [0, 0, 0, 128 | 0]);
export var CreateBlueprintResponse = struct(n0, _CBRr, 0, [_N], [0]);
export var GetBlueprintRequest = struct(n0, _GBR, 0, [_N, _IB, _IPS], [0, 2, 2]);
export var GetBlueprintResponse = struct(n0, _GBRe, 0, [_Bl], [() => Blueprint]);
export var LastActiveDefinition = struct(n0, _LAD, 0, [_D, _LMO, _PS, _BL, _BSL], [0, 4, 0, 0, 0]);
export var UpdateBlueprintRequest = struct(n0, _UBR, 0, [_N, _D, _BL], [0, 0, 0]);
export var UpdateBlueprintResponse = struct(n0, _UBRp, 0, [_N], [0]);
export var BatchGetBlueprintNames = 64 | 0;

export var Blueprints = list(n0, _B, 0, () => Blueprint);
export var BatchGetBlueprints = op(
  n0,
  _BGB,
  0,
  () => BatchGetBlueprintsRequest,
  () => BatchGetBlueprintsResponse
);
export var CreateBlueprint = op(
  n0,
  _CBre,
  0,
  () => CreateBlueprintRequest,
  () => CreateBlueprintResponse
);
export var GetBlueprint = op(
  n0,
  _GB,
  0,
  () => GetBlueprintRequest,
  () => GetBlueprintResponse
);
export var UpdateBlueprint = op(
  n0,
  _UBpda,
  0,
  () => UpdateBlueprintRequest,
  () => UpdateBlueprintResponse
);
