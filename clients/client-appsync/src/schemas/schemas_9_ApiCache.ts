// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AC,
  _aC,
  _aCB,
  _aI,
  _aREE,
  _CAC,
  _CACR,
  _CACRr,
  _GAC,
  _GACR,
  _GACRe,
  _h,
  _hMC,
  _s,
  _tEE,
  _tt,
  _ty,
  _UAC,
  _UACR,
  _UACRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ApiCache = struct(n0, _AC, 0, [_tt, _aCB, _tEE, _aREE, _ty, _s, _hMC], [1, 0, 2, 2, 0, 0, 0]);
export var CreateApiCacheRequest = struct(
  n0,
  _CACR,
  0,
  [_aI, _tt, _tEE, _aREE, _aCB, _ty, _hMC],
  [[0, 1], 1, 2, 2, 0, 0, 0]
);
export var CreateApiCacheResponse = struct(n0, _CACRr, 0, [_aC], [() => ApiCache]);
export var GetApiCacheRequest = struct(n0, _GACR, 0, [_aI], [[0, 1]]);
export var GetApiCacheResponse = struct(n0, _GACRe, 0, [_aC], [() => ApiCache]);
export var UpdateApiCacheRequest = struct(n0, _UACR, 0, [_aI, _tt, _aCB, _ty, _hMC], [[0, 1], 1, 0, 0, 0]);
export var UpdateApiCacheResponse = struct(n0, _UACRp, 0, [_aC], [() => ApiCache]);
export var CreateApiCache = op(
  n0,
  _CAC,
  {
    [_h]: ["POST", "/v1/apis/{apiId}/ApiCaches", 200],
  },
  () => CreateApiCacheRequest,
  () => CreateApiCacheResponse
);
export var GetApiCache = op(
  n0,
  _GAC,
  {
    [_h]: ["GET", "/v1/apis/{apiId}/ApiCaches", 200],
  },
  () => GetApiCacheRequest,
  () => GetApiCacheResponse
);
export var UpdateApiCache = op(
  n0,
  _UAC,
  {
    [_h]: ["POST", "/v1/apis/{apiId}/ApiCaches/update", 200],
  },
  () => UpdateApiCacheRequest,
  () => UpdateApiCacheResponse
);
