// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InvalidParameterCombinationException as __InvalidParameterCombinationException } from "../models/index";
import {
  _c,
  _cBVA,
  _cD,
  _cT,
  _d,
  _da,
  _e,
  _f,
  _hE,
  _ht,
  _ICm,
  _ICR,
  _ICRm,
  _IPCE,
  _kKI,
  _m,
  _n,
  _p,
  _rI,
  _sV,
  _t,
  _ta,
  _u,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ImportComponentRequest = struct(
  n0,
  _ICR,
  0,
  [_n, _sV, _d, _cD, _t, _f, _p, _da, _u, _kKI, _ta, _cT],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128 | 0, [0, 4]]
);
export var ImportComponentResponse = struct(n0, _ICRm, 0, [_rI, _cT, _cBVA], [0, 0, 0]);
export var InvalidParameterCombinationException = error(
  n0,
  _IPCE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidParameterCombinationException
);
export var ImportComponent = op(
  n0,
  _ICm,
  {
    [_ht]: ["PUT", "/ImportComponent", 200],
  },
  () => ImportComponentRequest,
  () => ImportComponentResponse
);
