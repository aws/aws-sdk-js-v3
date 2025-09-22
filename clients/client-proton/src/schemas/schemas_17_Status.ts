// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _b,
  _di,
  _dSe,
  _eI,
  _ev,
  _eve,
  _GSISS,
  _GSISSI,
  _GSISSO,
  _iR,
  _lS,
  _lSS,
  _Re,
  _rN,
  _rP,
  _RSAe,
  _RSEe,
  _RSEes,
  _sA,
  _sh,
  _sIN,
  _sN,
  _st,
  _ta,
  _ti,
  _tR,
  _ty,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetServiceInstanceSyncStatusInput = struct(n0, _GSISSI, 0, [_sN, _sIN], [0, 0]);
export var GetServiceInstanceSyncStatusOutput = struct(
  n0,
  _GSISSO,
  0,
  [_lS, _lSS, _dSe],
  [() => ResourceSyncAttempt, () => ResourceSyncAttempt, () => Revision]
);
export var ResourceSyncAttempt = struct(
  n0,
  _RSAe,
  0,
  [_iR, _tR, _ta, _sA, _st, _ev],
  [() => Revision, () => Revision, 0, 4, 0, () => ResourceSyncEvents]
);
export var ResourceSyncEvent = struct(n0, _RSEe, 0, [_ty, _eI, _ti, _eve], [0, 0, 4, 0]);
export var Revision = struct(n0, _Re, 0, [_rN, _rP, _sh, _di, _b], [0, 0, 0, 0, 0]);
export var ResourceSyncEvents = list(n0, _RSEes, 0, () => ResourceSyncEvent);
export var GetServiceInstanceSyncStatus = op(
  n0,
  _GSISS,
  0,
  () => GetServiceInstanceSyncStatusInput,
  () => GetServiceInstanceSyncStatusOutput
);
