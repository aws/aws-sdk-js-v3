// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aAI,
  _aCBURL,
  _aMt,
  _aNAC,
  _aZIv,
  _cAA,
  _cB,
  _CDNSC,
  _cDNSC,
  _CDNSS,
  _cDNSSIP,
  _cDNSSN,
  _co,
  _cTre,
  _d,
  _dS,
  _dSAI,
  _E,
  _eA,
  _eI,
  _eM,
  _en,
  _eU,
  _f,
  _fM,
  _FP,
  _fP,
  _fPN,
  _fURN,
  _GE,
  _GER,
  _GERe,
  _GKE,
  _GKER,
  _GKERe,
  _h,
  _ITC,
  _iTC,
  _kKI,
  _n,
  _NACLC,
  _NACLE,
  _p,
  _PR,
  _pR,
  _rAu,
  _rCIDRS,
  _rN,
  _s,
  _sMD,
  _sMSDU,
  _sMURL,
  _TGC,
  _tGC,
  _tGID,
  _to,
  _tS,
  _ty,
  _UE,
  _UER,
  _UERp,
  _uT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CustomDNSServer = struct(n0, _CDNSS, 0, [_cDNSSN, _cDNSSIP], [0, 0]);
export var Environment = struct(
  n0,
  _E,
  0,
  [_n, _eI, _aAI, _s, _eU, _d, _eA, _sMSDU, _kKI, _dSAI, _fM, _fP],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, () => FederationParameters]
);
export var FederationParameters = struct(
  n0,
  _FP,
  0,
  [_sMD, _sMURL, _aCBURL, _fURN, _fPN, _aMt],
  [0, 0, 0, 0, 0, 128 | 0]
);
export var GetEnvironmentRequest = struct(n0, _GER, 0, [_eI], [[0, 1]]);
export var GetEnvironmentResponse = struct(n0, _GERe, 0, [_en], [() => Environment]);
export var GetKxEnvironmentRequest = struct(n0, _GKER, 0, [_eI], [[0, 1]]);
export var GetKxEnvironmentResponse = struct(
  n0,
  _GKERe,
  0,
  [_n, _eI, _aAI, _s, _tS, _dS, _eM, _d, _eA, _kKI, _dSAI, _tGC, _cDNSC, _cTre, _uT, _aZIv, _cAA],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, () => TransitGatewayConfiguration, () => CustomDNSConfiguration, 4, 4, 64 | 0, 0]
);
export var IcmpTypeCode = struct(n0, _ITC, 0, [_ty, _co], [1, 1]);
export var NetworkACLEntry = struct(
  n0,
  _NACLE,
  0,
  [_rN, _p, _rAu, _pR, _iTC, _cB],
  [1, 0, 0, () => PortRange, () => IcmpTypeCode, 0]
);
export var PortRange = struct(n0, _PR, 0, [_f, _to], [1, 1]);
export var TransitGatewayConfiguration = struct(
  n0,
  _TGC,
  0,
  [_tGID, _rCIDRS, _aNAC],
  [0, 0, () => NetworkACLConfiguration]
);
export var UpdateEnvironmentRequest = struct(
  n0,
  _UER,
  0,
  [_eI, _n, _d, _fM, _fP],
  [[0, 1], 0, 0, 0, () => FederationParameters]
);
export var UpdateEnvironmentResponse = struct(n0, _UERp, 0, [_en], [() => Environment]);
export var CustomDNSConfiguration = list(n0, _CDNSC, 0, () => CustomDNSServer);
export var NetworkACLConfiguration = list(n0, _NACLC, 0, () => NetworkACLEntry);
export var AttributeMap = 128 | 0;

export var GetEnvironment = op(
  n0,
  _GE,
  {
    [_h]: ["GET", "/environment/{environmentId}", 200],
  },
  () => GetEnvironmentRequest,
  () => GetEnvironmentResponse
);
export var GetKxEnvironment = op(
  n0,
  _GKE,
  {
    [_h]: ["GET", "/kx/environments/{environmentId}", 200],
  },
  () => GetKxEnvironmentRequest,
  () => GetKxEnvironmentResponse
);
export var UpdateEnvironment = op(
  n0,
  _UE,
  {
    [_h]: ["PUT", "/environment/{environmentId}", 200],
  },
  () => UpdateEnvironmentRequest,
  () => UpdateEnvironmentResponse
);
