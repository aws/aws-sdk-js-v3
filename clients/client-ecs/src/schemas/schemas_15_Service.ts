// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cl, _LS, _LSR, _LSRi, _lT, _mRa, _nT, _sA, _sS, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListServicesRequest = struct(n0, _LSR, 0, [_cl, _nT, _mRa, _lT, _sS], [0, 0, 1, 0, 0]);
export var ListServicesResponse = struct(n0, _LSRi, 0, [_sA, _nT], [64 | 0, 0]);
export var ListServices = op(
  n0,
  _LS,
  0,
  () => ListServicesRequest,
  () => ListServicesResponse
);
