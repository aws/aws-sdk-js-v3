// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cTr,
  _ex,
  _h,
  _i,
  _it,
  _LPi,
  _LPRis,
  _LPRist,
  _lUT,
  _mR,
  _nT,
  _P,
  _p,
  _PLr,
  _rAe,
  _rO,
  _rSA,
  _rSAes,
  _RSAL,
  _rT,
  _xN,
  n0,
} from "./schemas_0";
import { PrincipalArnOrIdList } from "./schemas_18_ResourceShare";

/* eslint no-var: 0 */

export var ListPrincipalsRequest = struct(
  n0,
  _LPRis,
  0,
  [_rO, _rAe, _p, _rT, _rSAes, _nT, _mR],
  [0, 0, [() => PrincipalArnOrIdList, 0], 0, [() => ResourceShareArnList, 0], 0, 1]
);
export var ListPrincipalsResponse = struct(n0, _LPRist, 0, [_p, _nT], [[() => PrincipalList, 0], 0]);
export var Principal = struct(n0, _P, 0, [_i, _rSA, _cTr, _lUT, _ex], [0, 0, 4, 4, 2]);
export var PrincipalList = list(n0, _PLr, 0, [
  () => Principal,
  {
    [_xN]: _it,
  },
]);
export var ResourceShareArnList = list(n0, _RSAL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var ListPrincipals = op(
  n0,
  _LPi,
  {
    [_h]: ["POST", "/listprincipals", 200],
  },
  () => ListPrincipalsRequest,
  () => ListPrincipalsResponse
);
