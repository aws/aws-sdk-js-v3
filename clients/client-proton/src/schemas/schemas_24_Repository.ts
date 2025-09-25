// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _b,
  _eI,
  _ev,
  _eve,
  _GRSS,
  _GRSSI,
  _GRSSO,
  _lS,
  _rN,
  _rP,
  _RSA,
  _RSE,
  _RSEep,
  _sA,
  _st,
  _sTy,
  _ti,
  _ty,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetRepositorySyncStatusInput = struct(n0, _GRSSI, 0, [_rN, _rP, _b, _sTy], [0, 0, 0, 0]);
export var GetRepositorySyncStatusOutput = struct(n0, _GRSSO, 0, [_lS], [() => RepositorySyncAttempt]);
export var RepositorySyncAttempt = struct(n0, _RSA, 0, [_sA, _st, _ev], [4, 0, () => RepositorySyncEvents]);
export var RepositorySyncEvent = struct(n0, _RSE, 0, [_ty, _eI, _ti, _eve], [0, 0, 4, 0]);
export var RepositorySyncEvents = list(n0, _RSEep, 0, () => RepositorySyncEvent);
export var GetRepositorySyncStatus = op(
  n0,
  _GRSS,
  0,
  () => GetRepositorySyncStatusInput,
  () => GetRepositorySyncStatusOutput
);
