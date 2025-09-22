// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _C,
  _Co,
  _Cou,
  _Dep,
  _DNi,
  _FN,
  _HFGAL,
  _In,
  _IPUI,
  _JT,
  _LN,
  _O,
  _OI,
  _Ro,
  _St,
  _Te,
  _UA,
  _UIs,
  _UU,
  _UUR,
  _UURp,
  _ZC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var UserAttribute = sim(n0, _UA, 0, 8);
export var UpdateUserRequest = struct(
  n0,
  _UUR,
  0,
  [_OI, _UIs, _Ro, _DNi, _FN, _LN, _HFGAL, _In, _Te, _St, _JT, _C, _Co, _ZC, _Dep, _Cou, _O, _IPUI],
  [
    0,
    0,
    0,
    [() => UserAttribute, 0],
    [() => UserAttribute, 0],
    [() => UserAttribute, 0],
    2,
    [() => UserAttribute, 0],
    [() => UserAttribute, 0],
    [() => UserAttribute, 0],
    [() => UserAttribute, 0],
    [() => UserAttribute, 0],
    [() => UserAttribute, 0],
    [() => UserAttribute, 0],
    [() => UserAttribute, 0],
    [() => UserAttribute, 0],
    [() => UserAttribute, 0],
    0,
  ]
);
export var UpdateUserResponse = struct(n0, _UURp, 0, [], []);
export var UpdateUser = op(
  n0,
  _UU,
  2,
  () => UpdateUserRequest,
  () => UpdateUserResponse
);
