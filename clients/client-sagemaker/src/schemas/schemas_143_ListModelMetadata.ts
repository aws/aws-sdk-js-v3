// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Do,
  _Fil,
  _Fr,
  _FV,
  _LMM,
  _LMMR,
  _LMMRi,
  _MMF,
  _MMFo,
  _MMS,
  _MMSE,
  _MMSo,
  _Mod,
  _MR,
  _N,
  _NT,
  _SEe,
  _Ta,
  _Va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListModelMetadataRequest = struct(
  n0,
  _LMMR,
  0,
  [_SEe, _NT, _MR],
  [() => ModelMetadataSearchExpression, 0, 1]
);
export var ListModelMetadataResponse = struct(n0, _LMMRi, 0, [_MMS, _NT], [() => ModelMetadataSummaries, 0]);
export var ModelMetadataFilter = struct(n0, _MMF, 0, [_N, _Va], [0, 0]);
export var ModelMetadataSearchExpression = struct(n0, _MMSE, 0, [_Fil], [() => ModelMetadataFilters]);
export var ModelMetadataSummary = struct(n0, _MMSo, 0, [_Do, _Fr, _Ta, _Mod, _FV], [0, 0, 0, 0, 0]);
export var ModelMetadataFilters = list(n0, _MMFo, 0, () => ModelMetadataFilter);
export var ModelMetadataSummaries = list(n0, _MMS, 0, () => ModelMetadataSummary);
export var ListModelMetadata = op(
  n0,
  _LMM,
  0,
  () => ListModelMetadataRequest,
  () => ListModelMetadataResponse
);
