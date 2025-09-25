// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _a, _cT, _d, _ET, _eTL, _eTn, _GET, _GETR, _GETRe, _lUT, _mR, _n, _nT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var EntityType = struct(n0, _ET, 0, [_n, _d, _lUT, _cT, _a], [0, 0, 0, 0, 0]);
export var GetEntityTypesRequest = struct(n0, _GETR, 0, [_n, _nT, _mR], [0, 0, 1]);
export var GetEntityTypesResult = struct(n0, _GETRe, 0, [_eTn, _nT], [() => entityTypeList, 0]);
export var entityTypeList = list(n0, _eTL, 0, () => EntityType);
export var GetEntityTypes = op(
  n0,
  _GET,
  0,
  () => GetEntityTypesRequest,
  () => GetEntityTypesResult
);
