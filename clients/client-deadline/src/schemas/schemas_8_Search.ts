// smithy-typescript generated code
import { list, struct, struct as uni } from "@smithy/core/schema";

import {
  _dT,
  _dTF,
  _DTFE,
  _fi,
  _FSE,
  _fSi,
  _gF,
  _mT,
  _n,
  _o,
  _pF,
  _PFE,
  _pSar,
  _PSE,
  _sF,
  _SFE,
  _SFEe,
  _SFEea,
  _SGFE,
  _sO,
  _SSE,
  _SSEe,
  _sTe,
  _sTF,
  _STFE,
  _uII,
  _UJF,
  _uJF,
  _va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DateTimeFilterExpression = struct(n0, _DTFE, 0, [_n, _o, _dT], [0, 0, 5]);
export var FieldSortExpression = struct(n0, _FSE, 0, [_sO, _n], [0, 0]);
export var ParameterFilterExpression = struct(n0, _PFE, 0, [_n, _o, _va], [0, 0, 0]);
export var ParameterSortExpression = struct(n0, _PSE, 0, [_sO, _n], [0, 0]);
export var SearchGroupedFilterExpressions = struct(n0, _SGFE, 0, [_fi, _o], [() => SearchFilterExpressions, 0]);
export var SearchTermFilterExpression = struct(n0, _STFE, 0, [_sTe, _mT], [0, 0]);
export var StringFilterExpression = struct(n0, _SFE, 0, [_n, _o, _va], [0, 0, 0]);
export var UserJobsFirst = struct(n0, _UJF, 0, [_uII], [0]);
export var SearchFilterExpressions = list(n0, _SFEe, 0, () => SearchFilterExpression);
export var SearchSortExpressions = list(n0, _SSE, 0, () => SearchSortExpression);
export var SearchFilterExpression = uni(
  n0,
  _SFEea,
  0,
  [_dTF, _pF, _sTF, _sF, _gF],
  [
    () => DateTimeFilterExpression,
    () => ParameterFilterExpression,
    () => SearchTermFilterExpression,
    () => StringFilterExpression,
    () => SearchGroupedFilterExpressions,
  ]
);
export var SearchSortExpression = uni(
  n0,
  _SSEe,
  0,
  [_uJF, _fSi, _pSar],
  [() => UserJobsFirst, () => FieldSortExpression, () => ParameterSortExpression]
);
