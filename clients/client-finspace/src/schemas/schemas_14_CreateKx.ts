// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aAI,
  _aZIv,
  _cDNSC,
  _cTl,
  _cTre,
  _d,
  _DKE,
  _DKER,
  _DKERe,
  _DKU,
  _DKUR,
  _DKURe,
  _dS,
  _dSAI,
  _eA,
  _eI,
  _eM,
  _h,
  _hQ,
  _iR,
  _iT,
  _kKI,
  _n,
  _s,
  _tGC,
  _tS,
  _uA,
  _UKE,
  _UKEN,
  _UKENR,
  _UKENRp,
  _UKER,
  _UKERp,
  _UKU,
  _UKUR,
  _UKURp,
  _uN,
  _uT,
  n0,
} from "./schemas_0";
import { CustomDNSConfiguration, TransitGatewayConfiguration } from "./schemas_4_Environment";

/* eslint no-var: 0 */

export var DeleteKxEnvironmentRequest = struct(
  n0,
  _DKER,
  0,
  [_eI, _cTl],
  [
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cTl,
      },
    ],
  ]
);
export var DeleteKxEnvironmentResponse = struct(n0, _DKERe, 0, [], []);
export var DeleteKxUserRequest = struct(
  n0,
  _DKUR,
  0,
  [_uN, _eI, _cTl],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cTl,
      },
    ],
  ]
);
export var DeleteKxUserResponse = struct(n0, _DKURe, 0, [], []);
export var UpdateKxEnvironmentNetworkRequest = struct(
  n0,
  _UKENR,
  0,
  [_eI, _tGC, _cDNSC, _cTl],
  [[0, 1], () => TransitGatewayConfiguration, () => CustomDNSConfiguration, [0, 4]]
);
export var UpdateKxEnvironmentNetworkResponse = struct(
  n0,
  _UKENRp,
  0,
  [_n, _eI, _aAI, _s, _tS, _dS, _eM, _d, _eA, _kKI, _dSAI, _tGC, _cDNSC, _cTre, _uT, _aZIv],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, () => TransitGatewayConfiguration, () => CustomDNSConfiguration, 4, 4, 64 | 0]
);
export var UpdateKxEnvironmentRequest = struct(n0, _UKER, 0, [_eI, _n, _d, _cTl], [[0, 1], 0, 0, [0, 4]]);
export var UpdateKxEnvironmentResponse = struct(
  n0,
  _UKERp,
  0,
  [_n, _eI, _aAI, _s, _tS, _dS, _eM, _d, _eA, _kKI, _dSAI, _tGC, _cDNSC, _cTre, _uT, _aZIv],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, () => TransitGatewayConfiguration, () => CustomDNSConfiguration, 4, 4, 64 | 0]
);
export var UpdateKxUserRequest = struct(n0, _UKUR, 0, [_eI, _uN, _iR, _cTl], [[0, 1], [0, 1], 0, [0, 4]]);
export var UpdateKxUserResponse = struct(n0, _UKURp, 0, [_uN, _uA, _eI, _iR], [0, 0, 0, 0]);
export var DeleteKxEnvironment = op(
  n0,
  _DKE,
  {
    [_h]: ["DELETE", "/kx/environments/{environmentId}", 200],
  },
  () => DeleteKxEnvironmentRequest,
  () => DeleteKxEnvironmentResponse
);
export var DeleteKxUser = op(
  n0,
  _DKU,
  {
    [_h]: ["DELETE", "/kx/environments/{environmentId}/users/{userName}", 200],
  },
  () => DeleteKxUserRequest,
  () => DeleteKxUserResponse
);
export var UpdateKxEnvironment = op(
  n0,
  _UKE,
  {
    [_h]: ["PUT", "/kx/environments/{environmentId}", 200],
  },
  () => UpdateKxEnvironmentRequest,
  () => UpdateKxEnvironmentResponse
);
export var UpdateKxEnvironmentNetwork = op(
  n0,
  _UKEN,
  {
    [_h]: ["PUT", "/kx/environments/{environmentId}/network", 200],
  },
  () => UpdateKxEnvironmentNetworkRequest,
  () => UpdateKxEnvironmentNetworkResponse
);
export var UpdateKxUser = op(
  n0,
  _UKU,
  {
    [_h]: ["PUT", "/kx/environments/{environmentId}/users/{userName}", 200],
  },
  () => UpdateKxUserRequest,
  () => UpdateKxUserResponse
);
