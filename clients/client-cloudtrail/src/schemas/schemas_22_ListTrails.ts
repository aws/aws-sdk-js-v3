// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _HR, _LTi, _LTRis, _LTRist, _N, _NT, _TARN, _TI, _Tra, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTrailsRequest = struct(n0, _LTRis, 0, [_NT], [0]);
export var ListTrailsResponse = struct(n0, _LTRist, 0, [_Tra, _NT], [() => Trails, 0]);
export var TrailInfo = struct(n0, _TI, 0, [_TARN, _N, _HR], [0, 0, 0]);
export var Trails = list(n0, _Tra, 0, () => TrailInfo);
export var ListTrails = op(
  n0,
  _LTi,
  2,
  () => ListTrailsRequest,
  () => ListTrailsResponse
);
