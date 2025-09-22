// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BCV,
  _BCVE,
  _BCVEL,
  _BCVR,
  _BCVRa,
  _co,
  _d,
  _dS,
  _dT,
  _dVe,
  _er,
  _m,
  _n,
  _ta,
  _vE,
  _VEa,
  _VEL,
  _vT,
  n0,
  tagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchCreateVariableError = struct(n0, _BCVE, 0, [_n, _co, _m], [0, 1, 0]);
export var BatchCreateVariableRequest = struct(n0, _BCVR, 0, [_vE, _ta], [() => VariableEntryList, () => tagList]);
export var BatchCreateVariableResult = struct(n0, _BCVRa, 0, [_er], [() => BatchCreateVariableErrorList]);
export var VariableEntry = struct(n0, _VEa, 0, [_n, _dT, _dS, _dVe, _d, _vT], [0, 0, 0, 0, 0, 0]);
export var BatchCreateVariableErrorList = list(n0, _BCVEL, 0, () => BatchCreateVariableError);
export var VariableEntryList = list(n0, _VEL, 0, () => VariableEntry);
export var BatchCreateVariable = op(
  n0,
  _BCV,
  0,
  () => BatchCreateVariableRequest,
  () => BatchCreateVariableResult
);
