// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AP,
  _aPu,
  _ATI,
  _aTI,
  _BD,
  _bD,
  _BR,
  _bR,
  _C,
  _c,
  _Co,
  _co,
  _Cont,
  _cont,
  _CPo,
  _cPo,
  _Den,
  _den,
  _DP,
  _dP,
  _DTI,
  _dTI,
  _Du,
  _du,
  _ETa,
  _eTa,
  _F,
  _f,
  _FR,
  _fR,
  _FSil,
  _fSil,
  _FU,
  _fU,
  _H,
  _h,
  _ht,
  _IF,
  _iF,
  _Ind,
  _ind,
  _jN,
  _LC,
  _lC,
  _LMa,
  _lMa,
  _lOPIF,
  _lOPR,
  _lOT,
  _lOTM,
  _MCat,
  _mCat,
  _Metadata_,
  _metadata_,
  _MT,
  _mT,
  _Nu,
  _nu,
  _PIF,
  _PR,
  _pR,
  _Prob,
  _PRr,
  _PRro,
  _PRrob,
  _SR,
  _sR,
  _T,
  _t,
  _TCr,
  _tCr,
  _TMr,
  _tMr,
  _TMra,
  _Tr,
  _TT,
  _tT,
  _VPi,
  _vPi,
  _VTI,
  _vTI,
  _W,
  _w,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AudioProperties = struct(
  n0,
  _AP,
  0,
  [_BD, _BR, _C, _FR, _LC, _SR],
  [
    [
      1,
      {
        [_jN]: _bD,
      },
    ],
    [
      1,
      {
        [_jN]: _bR,
      },
    ],
    [
      1,
      {
        [_jN]: _c,
      },
    ],
    [
      () => FrameRate,
      {
        [_jN]: _fR,
      },
    ],
    [
      0,
      {
        [_jN]: _lC,
      },
    ],
    [
      1,
      {
        [_jN]: _sR,
      },
    ],
  ]
);
export var Container = struct(
  n0,
  _Cont,
  0,
  [_Du, _F, _T],
  [
    [
      1,
      {
        [_jN]: _du,
      },
    ],
    [
      0,
      {
        [_jN]: _f,
      },
    ],
    [
      () => __listOfTrack,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var DataProperties = struct(
  n0,
  _DP,
  0,
  [_LC],
  [
    [
      0,
      {
        [_jN]: _lC,
      },
    ],
  ]
);
export var FrameRate = struct(
  n0,
  _FR,
  0,
  [_Den, _Nu],
  [
    [
      1,
      {
        [_jN]: _den,
      },
    ],
    [
      1,
      {
        [_jN]: _nu,
      },
    ],
  ]
);
export var Metadata = struct(
  n0,
  _Metadata_,
  0,
  [_ETa, _FSil, _LMa, _MT],
  [
    [
      0,
      {
        [_jN]: _eTa,
      },
    ],
    [
      1,
      {
        [_jN]: _fSil,
      },
    ],
    [
      7,
      {
        [_jN]: _lMa,
      },
    ],
    [
      0,
      {
        [_jN]: _mT,
      },
    ],
  ]
);
export var ProbeInputFile = struct(
  n0,
  _PIF,
  0,
  [_FU],
  [
    [
      0,
      {
        [_jN]: _fU,
      },
    ],
  ]
);
export var ProbeRequest = struct(
  n0,
  _PR,
  0,
  [_IF],
  [
    [
      () => __listOfProbeInputFile,
      {
        [_jN]: _iF,
      },
    ],
  ]
);
export var ProbeResponse = struct(
  n0,
  _PRr,
  0,
  [_PRro],
  [
    [
      () => __listOfProbeResult,
      {
        [_jN]: _pR,
      },
    ],
  ]
);
export var ProbeResult = struct(
  n0,
  _PRrob,
  0,
  [_Cont, _Metadata_, _TMr],
  [
    [
      () => Container,
      {
        [_jN]: _cont,
      },
    ],
    [
      () => Metadata,
      {
        [_jN]: _metadata_,
      },
    ],
    [
      () => __listOfTrackMapping,
      {
        [_jN]: _tMr,
      },
    ],
  ]
);
export var Track = struct(
  n0,
  _Tr,
  0,
  [_AP, _Co, _DP, _Du, _Ind, _TT, _VPi],
  [
    [
      () => AudioProperties,
      {
        [_jN]: _aPu,
      },
    ],
    [
      0,
      {
        [_jN]: _co,
      },
    ],
    [
      () => DataProperties,
      {
        [_jN]: _dP,
      },
    ],
    [
      1,
      {
        [_jN]: _du,
      },
    ],
    [
      1,
      {
        [_jN]: _ind,
      },
    ],
    [
      0,
      {
        [_jN]: _tT,
      },
    ],
    [
      () => VideoProperties,
      {
        [_jN]: _vPi,
      },
    ],
  ]
);
export var TrackMapping = struct(
  n0,
  _TMra,
  0,
  [_ATI, _DTI, _VTI],
  [
    [
      64 | 1,
      {
        [_jN]: _aTI,
      },
    ],
    [
      64 | 1,
      {
        [_jN]: _dTI,
      },
    ],
    [
      64 | 1,
      {
        [_jN]: _vTI,
      },
    ],
  ]
);
export var VideoProperties = struct(
  n0,
  _VPi,
  0,
  [_BD, _BR, _CPo, _FR, _H, _MCat, _TCr, _W],
  [
    [
      1,
      {
        [_jN]: _bD,
      },
    ],
    [
      1,
      {
        [_jN]: _bR,
      },
    ],
    [
      0,
      {
        [_jN]: _cPo,
      },
    ],
    [
      () => FrameRate,
      {
        [_jN]: _fR,
      },
    ],
    [
      1,
      {
        [_jN]: _h,
      },
    ],
    [
      0,
      {
        [_jN]: _mCat,
      },
    ],
    [
      0,
      {
        [_jN]: _tCr,
      },
    ],
    [
      1,
      {
        [_jN]: _w,
      },
    ],
  ]
);
export var __listOf__integer = 64 | 1;

export var __listOfProbeInputFile = list(n0, _lOPIF, 0, [() => ProbeInputFile, 0]);
export var __listOfProbeResult = list(n0, _lOPR, 0, [() => ProbeResult, 0]);
export var __listOfTrack = list(n0, _lOT, 0, [() => Track, 0]);
export var __listOfTrackMapping = list(n0, _lOTM, 0, [() => TrackMapping, 0]);
export var Probe = op(
  n0,
  _Prob,
  {
    [_ht]: ["POST", "/2017-08-29/probe", 200],
  },
  () => ProbeRequest,
  () => ProbeResponse
);
