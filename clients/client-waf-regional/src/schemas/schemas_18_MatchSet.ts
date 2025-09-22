// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _CSIMS,
  _CSIMSR,
  _CSIMSRr,
  _CT,
  _FTM,
  _GSIMS,
  _GSIMSR,
  _GSIMSRe,
  _N,
  _SIMS,
  _SIMSI,
  _SIMSU,
  _SIMSUq,
  _SIMT,
  _SIMTq,
  _TT,
  _U,
  _USIMS,
  _USIMSR,
  _USIMSRp,
  FieldToMatch,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateSqlInjectionMatchSetRequest = struct(n0, _CSIMSR, 0, [_N, _CT], [0, 0]);
export var CreateSqlInjectionMatchSetResponse = struct(n0, _CSIMSRr, 0, [_SIMS, _CT], [() => SqlInjectionMatchSet, 0]);
export var GetSqlInjectionMatchSetRequest = struct(n0, _GSIMSR, 0, [_SIMSI], [0]);
export var GetSqlInjectionMatchSetResponse = struct(n0, _GSIMSRe, 0, [_SIMS], [() => SqlInjectionMatchSet]);
export var SqlInjectionMatchSet = struct(n0, _SIMS, 0, [_SIMSI, _N, _SIMT], [0, 0, () => SqlInjectionMatchTuples]);
export var SqlInjectionMatchSetUpdate = struct(n0, _SIMSU, 0, [_A, _SIMTq], [0, () => SqlInjectionMatchTuple]);
export var SqlInjectionMatchTuple = struct(n0, _SIMTq, 0, [_FTM, _TT], [() => FieldToMatch, 0]);
export var UpdateSqlInjectionMatchSetRequest = struct(
  n0,
  _USIMSR,
  0,
  [_SIMSI, _CT, _U],
  [0, 0, () => SqlInjectionMatchSetUpdates]
);
export var UpdateSqlInjectionMatchSetResponse = struct(n0, _USIMSRp, 0, [_CT], [0]);
export var SqlInjectionMatchSetUpdates = list(n0, _SIMSUq, 0, () => SqlInjectionMatchSetUpdate);
export var SqlInjectionMatchTuples = list(n0, _SIMT, 0, () => SqlInjectionMatchTuple);
export var CreateSqlInjectionMatchSet = op(
  n0,
  _CSIMS,
  0,
  () => CreateSqlInjectionMatchSetRequest,
  () => CreateSqlInjectionMatchSetResponse
);
export var GetSqlInjectionMatchSet = op(
  n0,
  _GSIMS,
  0,
  () => GetSqlInjectionMatchSetRequest,
  () => GetSqlInjectionMatchSetResponse
);
export var UpdateSqlInjectionMatchSet = op(
  n0,
  _USIMS,
  0,
  () => UpdateSqlInjectionMatchSetRequest,
  () => UpdateSqlInjectionMatchSetResponse
);
