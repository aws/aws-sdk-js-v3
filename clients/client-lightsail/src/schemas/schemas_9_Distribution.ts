// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aHTTPM,
  _b,
  _cAL,
  _CB,
  _cB,
  _CBL,
  _CBPP,
  _cBS,
  _cHTTPM,
  _cN,
  _CO,
  _CS,
  _dCB,
  _dN,
  _dTTL,
  _fC,
  _fH,
  _fQS,
  _hAL,
  _HO,
  _ht,
  _iE,
  _IO,
  _mTTL,
  _mTTLa,
  _n,
  _op,
  _opt,
  _or,
  _pa,
  _pP,
  _qSAL,
  _QSO,
  _rNe,
  _rTes,
  _UD,
  _uDC,
  _UDR,
  _UDRp,
  _vMTPV,
  n0,
  Operation,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CacheBehavior = struct(n0, _CB, 0, [_b], [0]);
export var CacheBehaviorPerPath = struct(n0, _CBPP, 0, [_pa, _b], [0, 0]);
export var CacheSettings = struct(
  n0,
  _CS,
  0,
  [_dTTL, _mTTL, _mTTLa, _aHTTPM, _cHTTPM, _fC, _fH, _fQS],
  [1, 1, 1, 0, 0, () => CookieObject, () => HeaderObject, () => QueryStringObject]
);
export var CookieObject = struct(n0, _CO, 0, [_opt, _cAL], [0, 64 | 0]);
export var HeaderObject = struct(n0, _HO, 0, [_opt, _hAL], [0, 64 | 0]);
export var InputOrigin = struct(n0, _IO, 0, [_n, _rNe, _pP, _rTes], [0, 0, 0, 1]);
export var QueryStringObject = struct(n0, _QSO, 0, [_opt, _qSAL], [2, 64 | 0]);
export var UpdateDistributionRequest = struct(
  n0,
  _UDR,
  0,
  [_dN, _or, _dCB, _cBS, _cB, _iE, _vMTPV, _cN, _uDC],
  [0, () => InputOrigin, () => CacheBehavior, () => CacheSettings, () => CacheBehaviorList, 2, 0, 0, 2]
);
export var UpdateDistributionResult = struct(n0, _UDRp, 0, [_op], [() => Operation]);
export var CacheBehaviorList = list(n0, _CBL, 0, () => CacheBehaviorPerPath);
export var HeaderForwardList = 64 | 0;

export var UpdateDistribution = op(
  n0,
  _UD,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/UpdateDistribution", 200],
  },
  () => UpdateDistributionRequest,
  () => UpdateDistributionResult
);
