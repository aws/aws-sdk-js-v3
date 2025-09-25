// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _BGV,
  _BGVE,
  _BGVEL,
  _BGVR,
  _BGVRa,
  _co,
  _cT,
  _CV,
  _CVR,
  _CVRr,
  _d,
  _dS,
  _dT,
  _dVe,
  _er,
  _GV,
  _GVR,
  _GVRe,
  _lUT,
  _m,
  _mR,
  _n,
  _na,
  _nT,
  _ta,
  _V,
  _v,
  _VL,
  _vT,
  n0,
  tagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchGetVariableError = struct(n0, _BGVE, 0, [_n, _co, _m], [0, 1, 0]);
export var BatchGetVariableRequest = struct(n0, _BGVR, 0, [_na], [64 | 0]);
export var BatchGetVariableResult = struct(
  n0,
  _BGVRa,
  0,
  [_v, _er],
  [() => VariableList, () => BatchGetVariableErrorList]
);
export var CreateVariableRequest = struct(
  n0,
  _CVR,
  0,
  [_n, _dT, _dS, _dVe, _d, _vT, _ta],
  [0, 0, 0, 0, 0, 0, () => tagList]
);
export var CreateVariableResult = struct(n0, _CVRr, 0, [], []);
export var GetVariablesRequest = struct(n0, _GVR, 0, [_n, _nT, _mR], [0, 0, 1]);
export var GetVariablesResult = struct(n0, _GVRe, 0, [_v, _nT], [() => VariableList, 0]);
export var Variable = struct(n0, _V, 0, [_n, _dT, _dS, _dVe, _d, _vT, _lUT, _cT, _a], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
export var BatchGetVariableErrorList = list(n0, _BGVEL, 0, () => BatchGetVariableError);
export var NameList = 64 | 0;

export var VariableList = list(n0, _VL, 0, () => Variable);
export var BatchGetVariable = op(
  n0,
  _BGV,
  0,
  () => BatchGetVariableRequest,
  () => BatchGetVariableResult
);
export var CreateVariable = op(
  n0,
  _CV,
  0,
  () => CreateVariableRequest,
  () => CreateVariableResult
);
export var GetVariables = op(
  n0,
  _GV,
  0,
  () => GetVariablesRequest,
  () => GetVariablesResult
);
