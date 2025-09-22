// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BGCET,
  _BGCETR,
  _BGCETRa,
  _CET,
  _CETNF,
  _CETu,
  _CW,
  _GCET,
  _GCETR,
  _GCETRe,
  _N,
  _Na,
  _RSe,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchGetCustomEntityTypesRequest = struct(n0, _BGCETR, 0, [_Na], [64 | 0]);
export var BatchGetCustomEntityTypesResponse = struct(
  n0,
  _BGCETRa,
  0,
  [_CET, _CETNF],
  [() => CustomEntityTypes, 64 | 0]
);
export var CustomEntityType = struct(n0, _CETu, 0, [_N, _RSe, _CW], [0, 0, 64 | 0]);
export var GetCustomEntityTypeRequest = struct(n0, _GCETR, 0, [_N], [0]);
export var GetCustomEntityTypeResponse = struct(n0, _GCETRe, 0, [_N, _RSe, _CW], [0, 0, 64 | 0]);
export var ContextWords = 64 | 0;

export var CustomEntityTypeNames = 64 | 0;

export var CustomEntityTypes = list(n0, _CET, 0, () => CustomEntityType);
export var BatchGetCustomEntityTypes = op(
  n0,
  _BGCET,
  0,
  () => BatchGetCustomEntityTypesRequest,
  () => BatchGetCustomEntityTypesResponse
);
export var GetCustomEntityType = op(
  n0,
  _GCET,
  0,
  () => GetCustomEntityTypeRequest,
  () => GetCustomEntityTypeResponse
);
