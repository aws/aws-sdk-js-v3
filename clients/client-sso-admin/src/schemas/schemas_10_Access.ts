// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAp,
  _AT,
  _DAAS,
  _DAASR,
  _GAAS,
  _GAASR,
  _GAASRe,
  _LAAS,
  _LAASR,
  _LAASRi,
  _MR,
  _NT,
  _PAAS,
  _PAASR,
  _Sc,
  _Sco,
  _SDc,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteApplicationAccessScopeRequest = struct(n0, _DAASR, 0, [_AAp, _Sc], [0, 0]);
export var GetApplicationAccessScopeRequest = struct(n0, _GAASR, 0, [_AAp, _Sc], [0, 0]);
export var GetApplicationAccessScopeResponse = struct(n0, _GAASRe, 0, [_Sc, _AT], [0, 64 | 0]);
export var ListApplicationAccessScopesRequest = struct(n0, _LAASR, 0, [_AAp, _MR, _NT], [0, 1, 0]);
export var ListApplicationAccessScopesResponse = struct(n0, _LAASRi, 0, [_Sco, _NT], [() => Scopes, 0]);
export var PutApplicationAccessScopeRequest = struct(n0, _PAASR, 0, [_Sc, _AT, _AAp], [0, 64 | 0, 0]);
export var ScopeDetails = struct(n0, _SDc, 0, [_Sc, _AT], [0, 64 | 0]);
export var Scopes = list(n0, _Sco, 0, () => ScopeDetails);
export var ScopeTargets = 64 | 0;

export var DeleteApplicationAccessScope = op(
  n0,
  _DAAS,
  2,
  () => DeleteApplicationAccessScopeRequest,
  () => Unit
);
export var GetApplicationAccessScope = op(
  n0,
  _GAAS,
  0,
  () => GetApplicationAccessScopeRequest,
  () => GetApplicationAccessScopeResponse
);
export var ListApplicationAccessScopes = op(
  n0,
  _LAAS,
  0,
  () => ListApplicationAccessScopesRequest,
  () => ListApplicationAccessScopesResponse
);
export var PutApplicationAccessScope = op(
  n0,
  _PAAS,
  2,
  () => PutApplicationAccessScopeRequest,
  () => Unit
);
