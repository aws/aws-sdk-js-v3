// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aI,
  _BE,
  _bE,
  _BEa,
  _bEA,
  _bEa,
  _CBE,
  _CBER,
  _CBERr,
  _cT,
  _dA,
  _eN,
  _GBE,
  _GBER,
  _GBERe,
  _h,
  _hQ,
  _LBE,
  _LBER,
  _LBERi,
  _mR,
  _nT,
  _sN,
  _uT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BackendEnvironment = struct(n0, _BE, 0, [_bEA, _eN, _sN, _dA, _cT, _uT], [0, 0, 0, 0, 4, 4]);
export var CreateBackendEnvironmentRequest = struct(n0, _CBER, 0, [_aI, _eN, _sN, _dA], [[0, 1], 0, 0, 0]);
export var CreateBackendEnvironmentResult = struct(n0, _CBERr, 0, [_bE], [() => BackendEnvironment]);
export var GetBackendEnvironmentRequest = struct(
  n0,
  _GBER,
  0,
  [_aI, _eN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetBackendEnvironmentResult = struct(n0, _GBERe, 0, [_bE], [() => BackendEnvironment]);
export var ListBackendEnvironmentsRequest = struct(
  n0,
  _LBER,
  0,
  [_aI, _eN, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _eN,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListBackendEnvironmentsResult = struct(n0, _LBERi, 0, [_bEa, _nT], [() => BackendEnvironments, 0]);
export var BackendEnvironments = list(n0, _BEa, 0, () => BackendEnvironment);
export var CreateBackendEnvironment = op(
  n0,
  _CBE,
  {
    [_h]: ["POST", "/apps/{appId}/backendenvironments", 200],
  },
  () => CreateBackendEnvironmentRequest,
  () => CreateBackendEnvironmentResult
);
export var GetBackendEnvironment = op(
  n0,
  _GBE,
  {
    [_h]: ["GET", "/apps/{appId}/backendenvironments/{environmentName}", 200],
  },
  () => GetBackendEnvironmentRequest,
  () => GetBackendEnvironmentResult
);
export var ListBackendEnvironments = op(
  n0,
  _LBE,
  {
    [_h]: ["GET", "/apps/{appId}/backendenvironments", 200],
  },
  () => ListBackendEnvironmentsRequest,
  () => ListBackendEnvironmentsResult
);
