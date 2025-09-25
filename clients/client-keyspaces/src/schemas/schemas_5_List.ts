// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _kN, _LTi, _LTRis, _LTRist, _mR, _nT, _typ, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTypesRequest = struct(n0, _LTRis, 0, [_nT, _mR, _kN], [0, 1, 0]);
export var ListTypesResponse = struct(n0, _LTRist, 0, [_nT, _typ], [0, 64 | 0]);
export var ListTypes = op(
  n0,
  _LTi,
  0,
  () => ListTypesRequest,
  () => ListTypesResponse
);
