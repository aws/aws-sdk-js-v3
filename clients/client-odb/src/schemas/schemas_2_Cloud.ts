// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aCC,
  _aCCPN,
  _aDNPNIGB,
  _aDNSIGB,
  _aDSITB,
  _aDSPSITB,
  _aMIGB,
  _aMPNIGB,
  _aSTS,
  _aVCI,
  _aVMIu,
  _aZ,
  _aZI,
  _cA,
  _cCC,
  _cCI,
  _cEII,
  _cM,
  _dN,
  _dNSSIGB,
  _DS,
  _dS,
  _dSb,
  _dSI,
  _DSL,
  _DSPD,
  _dSPD,
  _DSS,
  _dSS,
  _DSSL,
  _DSSS,
  _eII,
  _ePD,
  _GDS,
  _GDSI,
  _GDSO,
  _hQ,
  _LDS,
  _LDSI,
  _LDSO,
  _LDSS,
  _LDSSI,
  _LDSSO,
  _mCC,
  _mCCi,
  _mCCPN,
  _mDNSIGB,
  _mDNSPNIGB,
  _mDSITBi,
  _mMIGB,
  _mMPNIGB,
  _mNC,
  _mNCi,
  _mR,
  _mSC,
  _mSCi,
  _mSIGB,
  _n,
  _nT,
  _o,
  _oRAN,
  _pS,
  _rMCC,
  _s,
  _sF,
  _sh,
  _sR,
  _sT,
  _tPE,
  _tPS,
  _vCI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DbServer = struct(
  n0,
  _DS,
  0,
  [
    _dSI,
    _s,
    _sR,
    _cCC,
    _dNSSIGB,
    _dSPD,
    _dN,
    _eII,
    _o,
    _oRAN,
    _mCC,
    _mDNSIGB,
    _mMIGB,
    _mSIGB,
    _sh,
    _cA,
    _vCI,
    _cM,
    _aVCI,
    _aVMIu,
  ],
  [0, 0, 0, 1, 1, () => DbServerPatchingDetails, 0, 0, 0, 0, 1, 1, 1, 1, 0, 5, 64 | 0, 0, 64 | 0, 64 | 0]
);
export var DbServerPatchingDetails = struct(n0, _DSPD, 0, [_ePD, _pS, _tPE, _tPS], [1, 0, 0, 0]);
export var DbServerSummary = struct(
  n0,
  _DSS,
  0,
  [
    _dSI,
    _s,
    _sR,
    _cCC,
    _dNSSIGB,
    _dSPD,
    _dN,
    _eII,
    _o,
    _oRAN,
    _mCC,
    _mDNSIGB,
    _mMIGB,
    _mSIGB,
    _sh,
    _cA,
    _vCI,
    _cM,
    _aVCI,
    _aVMIu,
  ],
  [0, 0, 0, 1, 1, () => DbServerPatchingDetails, 0, 0, 0, 0, 1, 1, 1, 1, 0, 5, 64 | 0, 0, 64 | 0, 64 | 0]
);
export var DbSystemShapeSummary = struct(
  n0,
  _DSSS,
  0,
  [
    _aCC,
    _aCCPN,
    _aDSITB,
    _aDSPSITB,
    _aDNPNIGB,
    _aDNSIGB,
    _aMIGB,
    _aMPNIGB,
    _cCI,
    _mSC,
    _mNC,
    _mCCPN,
    _mDSITBi,
    _mDNSPNIGB,
    _mMPNIGB,
    _mSCi,
    _mCCi,
    _mNCi,
    _rMCC,
    _sF,
    _sT,
    _n,
    _cM,
    _aSTS,
  ],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 2]
);
export var GetDbServerInput = struct(
  n0,
  _GDSI,
  0,
  [_cEII, _dSI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetDbServerOutput = struct(n0, _GDSO, 0, [_dSb], [() => DbServer]);
export var ListDbServersInput = struct(
  n0,
  _LDSI,
  0,
  [_cEII, _mR, _nT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListDbServersOutput = struct(n0, _LDSO, 0, [_nT, _dS], [0, () => DbServerList]);
export var ListDbSystemShapesInput = struct(
  n0,
  _LDSSI,
  0,
  [_mR, _nT, _aZ, _aZI],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    0,
    0,
  ]
);
export var ListDbSystemShapesOutput = struct(n0, _LDSSO, 0, [_nT, _dSS], [0, () => DbSystemShapeList]);
export var DbServerList = list(n0, _DSL, 0, () => DbServerSummary);
export var DbSystemShapeList = list(n0, _DSSL, 0, () => DbSystemShapeSummary);
export var GetDbServer = op(
  n0,
  _GDS,
  0,
  () => GetDbServerInput,
  () => GetDbServerOutput
);
export var ListDbServers = op(
  n0,
  _LDS,
  0,
  () => ListDbServersInput,
  () => ListDbServersOutput
);
export var ListDbSystemShapes = op(
  n0,
  _LDSS,
  0,
  () => ListDbSystemShapesInput,
  () => ListDbSystemShapesOutput
);
