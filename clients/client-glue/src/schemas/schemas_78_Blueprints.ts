// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _B, _LBi, _LBR, _LBRi, _MRax, _NTe, _Tag, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListBlueprintsRequest = struct(n0, _LBR, 0, [_NTe, _MRax, _Tag], [0, 1, 128 | 0]);
export var ListBlueprintsResponse = struct(n0, _LBRi, 0, [_B, _NTe], [64 | 0, 0]);
export var BlueprintNames = 64 | 0;

export var ListBlueprints = op(
  n0,
  _LBi,
  0,
  () => ListBlueprintsRequest,
  () => ListBlueprintsResponse
);
