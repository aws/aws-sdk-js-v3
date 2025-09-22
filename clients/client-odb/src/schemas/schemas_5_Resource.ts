// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aD,
  _bII,
  _bVI,
  _bVIa,
  _cA,
  _cCC,
  _cVCI,
  _DN,
  _dNA,
  _dNbo,
  _dNbod,
  _dNI,
  _DNL,
  _DNS,
  _dNSSIGB,
  _dSI,
  _dSIb,
  _fD,
  _fIA,
  _GDN,
  _GDNI,
  _GDNO,
  _h,
  _hII,
  _hQ,
  _LDN,
  _LDNI,
  _LDNO,
  _mR,
  _mSIGB,
  _mT,
  _nT,
  _o,
  _oRAN,
  _pIA,
  _s,
  _sR,
  _sSSIGB,
  _tCCC,
  _tMWE,
  _tMWS,
  _vIn,
  _vIni,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DbNode = struct(
  n0,
  _DN,
  0,
  [
    _dNI,
    _dNA,
    _s,
    _sR,
    _aD,
    _bII,
    _bVI,
    _bVIa,
    _cCC,
    _dNSSIGB,
    _dSI,
    _dSIb,
    _fD,
    _hII,
    _h,
    _o,
    _oRAN,
    _mT,
    _mSIGB,
    _sSSIGB,
    _cA,
    _tMWE,
    _tMWS,
    _tCCC,
    _vIn,
    _vIni,
    _pIA,
    _fIA,
  ],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 5, 0, 0, 1, 0, 0, 0, 0]
);
export var DbNodeSummary = struct(
  n0,
  _DNS,
  0,
  [
    _dNI,
    _dNA,
    _s,
    _sR,
    _aD,
    _bII,
    _bVI,
    _bVIa,
    _cCC,
    _dNSSIGB,
    _dSI,
    _dSIb,
    _fD,
    _hII,
    _h,
    _o,
    _oRAN,
    _mT,
    _mSIGB,
    _sSSIGB,
    _cA,
    _tMWE,
    _tMWS,
    _tCCC,
    _vIn,
    _vIni,
  ],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 5, 0, 0, 1, 0, 0]
);
export var GetDbNodeInput = struct(
  n0,
  _GDNI,
  0,
  [_cVCI, _dNI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetDbNodeOutput = struct(n0, _GDNO, 0, [_dNbo], [() => DbNode]);
export var ListDbNodesInput = struct(
  n0,
  _LDNI,
  0,
  [_mR, _nT, _cVCI],
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
    [0, 1],
  ]
);
export var ListDbNodesOutput = struct(n0, _LDNO, 0, [_nT, _dNbod], [0, () => DbNodeList]);
export var DbNodeList = list(n0, _DNL, 0, () => DbNodeSummary);
export var GetDbNode = op(
  n0,
  _GDN,
  0,
  () => GetDbNodeInput,
  () => GetDbNodeOutput
);
export var ListDbNodes = op(
  n0,
  _LDN,
  0,
  () => ListDbNodesInput,
  () => ListDbNodesOutput
);
