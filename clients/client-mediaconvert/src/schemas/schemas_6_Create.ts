// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _a,
  _AAO,
  _aAO,
  _AB,
  _aB,
  _ACA,
  _aCA,
  _AIF,
  _aIF,
  _AIFS,
  _aIFS,
  _AScc,
  _aScc,
  _AScce,
  _aScce,
  _aSG,
  _ASGu,
  _aSu,
  _ASud,
  _BTS,
  _bTS,
  _C,
  _c,
  _CA,
  _Ca,
  _cA,
  _ca,
  _cCDLUTS,
  _CCDLUTSo,
  _CJ,
  _cJ,
  _CJr,
  _CJRr,
  _CJRre,
  _CJT,
  _CJTR,
  _CJTRr,
  _Cod,
  _cod,
  _Cou,
  _cou,
  _CPR,
  _CPr,
  _CPRr,
  _CPu,
  _cPu,
  _CQ,
  _CQR,
  _CQRr,
  _Cr,
  _cr,
  _CRT,
  _cRT,
  _cSa,
  _CSap,
  _dAS,
  _DASy,
  _Des,
  _des,
  _DFe,
  _dFe,
  _DFen,
  _dFen,
  _DIM,
  _dIM,
  _DM,
  _dM,
  _DQ,
  _dQ,
  _DSec,
  _dSec,
  _Du,
  _du,
  _DVMX,
  _dVMX,
  _EC,
  _eC,
  _EDK,
  _eDK,
  _EDSx,
  _eDSx,
  _EMr,
  _eMr,
  _Es,
  _es,
  _FD,
  _fD,
  _fEi,
  _FEil,
  _FI,
  _fI,
  _FN,
  _fN,
  _FSi,
  _fSi,
  _FSol,
  _fSol,
  _FTi,
  _fTi,
  _GH,
  _gH,
  _GJ,
  _GJR,
  _GJRe,
  _HD,
  _hD,
  _HIP,
  _hIP,
  _hQ,
  _ht,
  _I,
  _ICn,
  _iCn,
  _id,
  _IDSn,
  _IFn,
  _iFn,
  _IIm,
  _iIm,
  _In,
  _in,
  _Inf,
  _Inp,
  _inp,
  _IST,
  _iST,
  _iT,
  _ITS,
  _IV,
  _iV,
  _IVG,
  _J,
  _j,
  _JEV,
  _jEV,
  _JEVR,
  _jEVR,
  _JEVU,
  _jEVU,
  _JM,
  _jN,
  _Jo,
  _jo,
  _JPC,
  _jPC,
  _JS,
  _JT,
  _jT,
  _KKR,
  _kKR,
  _KW,
  _kW,
  _LJ,
  _LJR,
  _LJRi,
  _lOI,
  _lOJ,
  _lOOD,
  _lOOGD,
  _lOQT,
  _lOWG,
  _LSD,
  _lSD,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _Mes,
  _mes,
  _MIIo,
  _mIIo,
  _MRa,
  _mRa,
  _N,
  _n,
  _NC,
  _nC,
  _NNLW,
  _nNLW,
  _NT,
  _nT,
  _OD,
  _oD,
  _ODu,
  _OG,
  _oG,
  _OGD,
  _oGD,
  _OGDu,
  _Or,
  _or,
  _PCs,
  _pCs,
  _PNr,
  _pNr,
  _Pos,
  _pos,
  _PP,
  _pP,
  _Pr,
  _pr,
  _Pre,
  _pre,
  _Q,
  _q,
  _QT,
  _qT,
  _QTu,
  _RC,
  _rC,
  _Ro,
  _ro,
  _RPS,
  _rPS,
  _RT,
  _rT,
  _Se,
  _se,
  _SIo,
  _sIo,
  _SIu,
  _sIu,
  _SJ,
  _SJR,
  _SJRe,
  _SQ,
  _sQ,
  _SR,
  _sR,
  _SRQ,
  _sRQ,
  _SSh,
  _sSh,
  _Sta,
  _sta,
  _STta,
  _sTta,
  _STub,
  _sTub,
  _SUI,
  _sUI,
  _Ta,
  _ta,
  _TCi,
  _tCi,
  _Time,
  _time,
  _Times,
  _times,
  _Timi,
  _timi,
  _TMI,
  _tMI,
  _TR,
  _TRR,
  _TRRa,
  _TSa,
  _tSa,
  _TSi,
  _tSi,
  _TSim,
  _tSim,
  _UM,
  _uM,
  _VDi,
  _vDi,
  _VDid,
  _VG,
  _vG,
  _VO,
  _vO,
  _VSi,
  _vSi,
  _Wa,
  _wa,
  _War,
  _war,
  _WG,
  _WIP,
  _wIP,
  n0,
} from "./schemas_0";
import { ImageInserter, Rectangle } from "./schemas_2_Job";
import {
  __listOfColorConversion3DLUTSetting,
  __listOfHopDestination,
  __listOfInputClipping,
  __listOfOutputGroup,
  __listOfVideoOverlay,
  __mapOfAudioSelector,
  __mapOfAudioSelectorGroup,
  __mapOfCaptionSelector,
  __mapOfDynamicAudioSelector,
  AccelerationSettings,
  AdvancedInputFilterSettings,
  AvailBlanking,
  EsamSettings,
  ExtendedDataServices,
  JobTemplate,
  JobTemplateSettings,
  KantarWatermarkSettings,
  MotionImageInserter,
  NielsenConfiguration,
  NielsenNonLinearWatermarkSettings,
  TimecodeConfig,
  TimedMetadataInsertion,
  VideoSelector,
} from "./schemas_4_Job";
import { Preset, PresetSettings } from "./schemas_8_Preset";
import { Queue, ReservationPlanSettings } from "./schemas_9_Queue";

/* eslint no-var: 0 */

export var CreateJobRequest = struct(
  n0,
  _CJRr,
  0,
  [_AScc, _BTS, _CRT, _HD, _JEV, _JT, _Pr, _Q, _Ro, _Se, _SRQ, _SUI, _Ta, _UM],
  [
    [
      () => AccelerationSettings,
      {
        [_jN]: _aScc,
      },
    ],
    [
      0,
      {
        [_jN]: _bTS,
      },
    ],
    [
      0,
      {
        [_jN]: _cRT,
        [_iT]: 1,
      },
    ],
    [
      () => __listOfHopDestination,
      {
        [_jN]: _hD,
      },
    ],
    [
      0,
      {
        [_jN]: _jEV,
      },
    ],
    [
      0,
      {
        [_jN]: _jT,
      },
    ],
    [
      1,
      {
        [_jN]: _pr,
      },
    ],
    [
      0,
      {
        [_jN]: _q,
      },
    ],
    [
      0,
      {
        [_jN]: _ro,
      },
    ],
    [
      () => JobSettings,
      {
        [_jN]: _se,
      },
    ],
    [
      0,
      {
        [_jN]: _sRQ,
      },
    ],
    [
      0,
      {
        [_jN]: _sUI,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _uM,
      },
    ],
  ]
);
export var CreateJobResponse = struct(
  n0,
  _CJRre,
  0,
  [_J],
  [
    [
      () => Job,
      {
        [_jN]: _j,
      },
    ],
  ]
);
export var CreateJobTemplateRequest = struct(
  n0,
  _CJTR,
  0,
  [_AScc, _Ca, _Des, _HD, _N, _Pr, _Q, _Se, _SUI, _Ta],
  [
    [
      () => AccelerationSettings,
      {
        [_jN]: _aScc,
      },
    ],
    [
      0,
      {
        [_jN]: _ca,
      },
    ],
    [
      0,
      {
        [_jN]: _des,
      },
    ],
    [
      () => __listOfHopDestination,
      {
        [_jN]: _hD,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      1,
      {
        [_jN]: _pr,
      },
    ],
    [
      0,
      {
        [_jN]: _q,
      },
    ],
    [
      () => JobTemplateSettings,
      {
        [_jN]: _se,
      },
    ],
    [
      0,
      {
        [_jN]: _sUI,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var CreateJobTemplateResponse = struct(
  n0,
  _CJTRr,
  0,
  [_JT],
  [
    [
      () => JobTemplate,
      {
        [_jN]: _jT,
      },
    ],
  ]
);
export var CreatePresetRequest = struct(
  n0,
  _CPR,
  0,
  [_Ca, _Des, _N, _Se, _Ta],
  [
    [
      0,
      {
        [_jN]: _ca,
      },
    ],
    [
      0,
      {
        [_jN]: _des,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => PresetSettings,
      {
        [_jN]: _se,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var CreatePresetResponse = struct(
  n0,
  _CPRr,
  0,
  [_Pre],
  [
    [
      () => Preset,
      {
        [_jN]: _pre,
      },
    ],
  ]
);
export var CreateQueueRequest = struct(
  n0,
  _CQR,
  0,
  [_CJ, _Des, _N, _PP, _RPS, _Sta, _Ta],
  [
    [
      1,
      {
        [_jN]: _cJ,
      },
    ],
    [
      0,
      {
        [_jN]: _des,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _pP,
      },
    ],
    [
      () => ReservationPlanSettings,
      {
        [_jN]: _rPS,
      },
    ],
    [
      0,
      {
        [_jN]: _sta,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var CreateQueueResponse = struct(
  n0,
  _CQRr,
  0,
  [_Q],
  [
    [
      () => Queue,
      {
        [_jN]: _q,
      },
    ],
  ]
);
export var GetJobRequest = struct(n0, _GJR, 0, [_I], [[0, 1]]);
export var GetJobResponse = struct(
  n0,
  _GJRe,
  0,
  [_J],
  [
    [
      () => Job,
      {
        [_jN]: _j,
      },
    ],
  ]
);
export var Input = struct(
  n0,
  _In,
  0,
  [
    _AIF,
    _AIFS,
    _ASGu,
    _ASud,
    _CSap,
    _Cr,
    _DFe,
    _DSec,
    _DFen,
    _DVMX,
    _DASy,
    _FI,
    _FEil,
    _FSi,
    _IIm,
    _ICn,
    _IST,
    _Pos,
    _PNr,
    _PCs,
    _SIu,
    _TSa,
    _TSi,
    _TSim,
    _VG,
    _VO,
    _VSi,
  ],
  [
    [
      0,
      {
        [_jN]: _aIF,
      },
    ],
    [
      () => AdvancedInputFilterSettings,
      {
        [_jN]: _aIFS,
      },
    ],
    [
      () => __mapOfAudioSelectorGroup,
      {
        [_jN]: _aSG,
      },
    ],
    [
      () => __mapOfAudioSelector,
      {
        [_jN]: _aSu,
      },
    ],
    [
      () => __mapOfCaptionSelector,
      {
        [_jN]: _cSa,
      },
    ],
    [
      () => Rectangle,
      {
        [_jN]: _cr,
      },
    ],
    [
      0,
      {
        [_jN]: _dFe,
      },
    ],
    [
      () => InputDecryptionSettings,
      {
        [_jN]: _dSec,
      },
    ],
    [
      0,
      {
        [_jN]: _dFen,
      },
    ],
    [
      0,
      {
        [_jN]: _dVMX,
      },
    ],
    [
      () => __mapOfDynamicAudioSelector,
      {
        [_jN]: _dAS,
      },
    ],
    [
      0,
      {
        [_jN]: _fI,
      },
    ],
    [
      0,
      {
        [_jN]: _fEi,
      },
    ],
    [
      1,
      {
        [_jN]: _fSi,
      },
    ],
    [
      () => ImageInserter,
      {
        [_jN]: _iIm,
      },
    ],
    [
      () => __listOfInputClipping,
      {
        [_jN]: _iCn,
      },
    ],
    [
      0,
      {
        [_jN]: _iST,
      },
    ],
    [
      () => Rectangle,
      {
        [_jN]: _pos,
      },
    ],
    [
      1,
      {
        [_jN]: _pNr,
      },
    ],
    [
      0,
      {
        [_jN]: _pCs,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sIu,
      },
    ],
    [
      () => InputTamsSettings,
      {
        [_jN]: _tSa,
      },
    ],
    [
      0,
      {
        [_jN]: _tSi,
      },
    ],
    [
      0,
      {
        [_jN]: _tSim,
      },
    ],
    [
      () => InputVideoGenerator,
      {
        [_jN]: _vG,
      },
    ],
    [
      () => __listOfVideoOverlay,
      {
        [_jN]: _vO,
      },
    ],
    [
      () => VideoSelector,
      {
        [_jN]: _vSi,
      },
    ],
  ]
);
export var InputDecryptionSettings = struct(
  n0,
  _IDSn,
  0,
  [_DM, _EDK, _IV, _KKR],
  [
    [
      0,
      {
        [_jN]: _dM,
      },
    ],
    [
      0,
      {
        [_jN]: _eDK,
      },
    ],
    [
      0,
      {
        [_jN]: _iV,
      },
    ],
    [
      0,
      {
        [_jN]: _kKR,
      },
    ],
  ]
);
export var InputTamsSettings = struct(
  n0,
  _ITS,
  0,
  [_ACA, _GH, _SIo, _Time],
  [
    [
      0,
      {
        [_jN]: _aCA,
      },
    ],
    [
      0,
      {
        [_jN]: _gH,
      },
    ],
    [
      0,
      {
        [_jN]: _sIo,
      },
    ],
    [
      0,
      {
        [_jN]: _time,
      },
    ],
  ]
);
export var InputVideoGenerator = struct(
  n0,
  _IVG,
  0,
  [_C, _Du, _FD, _FN, _SR],
  [
    [
      1,
      {
        [_jN]: _c,
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
        [_jN]: _fD,
      },
    ],
    [
      1,
      {
        [_jN]: _fN,
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
export var Job = struct(
  n0,
  _J,
  0,
  [
    _AScc,
    _AScce,
    _A,
    _BTS,
    _CRT,
    _CA,
    _CPu,
    _EC,
    _EMr,
    _HD,
    _I,
    _JEVR,
    _JEVU,
    _JPC,
    _JT,
    _LSD,
    _Mes,
    _OGD,
    _Pr,
    _Q,
    _QT,
    _RC,
    _Ro,
    _Se,
    _SSh,
    _SRQ,
    _Sta,
    _SUI,
    _Timi,
    _UM,
    _Wa,
  ],
  [
    [
      () => AccelerationSettings,
      {
        [_jN]: _aScc,
      },
    ],
    [
      0,
      {
        [_jN]: _aScce,
      },
    ],
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      0,
      {
        [_jN]: _bTS,
      },
    ],
    [
      0,
      {
        [_jN]: _cRT,
      },
    ],
    [
      7,
      {
        [_jN]: _cA,
      },
    ],
    [
      0,
      {
        [_jN]: _cPu,
      },
    ],
    [
      1,
      {
        [_jN]: _eC,
      },
    ],
    [
      0,
      {
        [_jN]: _eMr,
      },
    ],
    [
      () => __listOfHopDestination,
      {
        [_jN]: _hD,
      },
    ],
    [
      0,
      {
        [_jN]: _id,
      },
    ],
    [
      0,
      {
        [_jN]: _jEVR,
      },
    ],
    [
      0,
      {
        [_jN]: _jEVU,
      },
    ],
    [
      1,
      {
        [_jN]: _jPC,
      },
    ],
    [
      0,
      {
        [_jN]: _jT,
      },
    ],
    [
      0,
      {
        [_jN]: _lSD,
      },
    ],
    [
      () => JobMessages,
      {
        [_jN]: _mes,
      },
    ],
    [
      () => __listOfOutputGroupDetail,
      {
        [_jN]: _oGD,
      },
    ],
    [
      1,
      {
        [_jN]: _pr,
      },
    ],
    [
      0,
      {
        [_jN]: _q,
      },
    ],
    [
      () => __listOfQueueTransition,
      {
        [_jN]: _qT,
      },
    ],
    [
      1,
      {
        [_jN]: _rC,
      },
    ],
    [
      0,
      {
        [_jN]: _ro,
      },
    ],
    [
      () => JobSettings,
      {
        [_jN]: _se,
      },
    ],
    [
      0,
      {
        [_jN]: _sSh,
      },
    ],
    [
      0,
      {
        [_jN]: _sRQ,
      },
    ],
    [
      0,
      {
        [_jN]: _sta,
      },
    ],
    [
      0,
      {
        [_jN]: _sUI,
      },
    ],
    [
      () => Timing,
      {
        [_jN]: _timi,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _uM,
      },
    ],
    [
      () => __listOfWarningGroup,
      {
        [_jN]: _wa,
      },
    ],
  ]
);
export var JobMessages = struct(
  n0,
  _JM,
  0,
  [_Inf, _War],
  [
    [
      64 | 0,
      {
        [_jN]: _in,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _war,
      },
    ],
  ]
);
export var JobSettings = struct(
  n0,
  _JS,
  0,
  [_AAO, _AB, _CCDLUTSo, _Es, _EDSx, _FSol, _Inp, _KW, _MIIo, _NC, _NNLW, _OG, _TCi, _TMI],
  [
    [
      1,
      {
        [_jN]: _aAO,
      },
    ],
    [
      () => AvailBlanking,
      {
        [_jN]: _aB,
      },
    ],
    [
      () => __listOfColorConversion3DLUTSetting,
      {
        [_jN]: _cCDLUTS,
      },
    ],
    [
      () => EsamSettings,
      {
        [_jN]: _es,
      },
    ],
    [
      () => ExtendedDataServices,
      {
        [_jN]: _eDSx,
      },
    ],
    [
      1,
      {
        [_jN]: _fSol,
      },
    ],
    [
      () => __listOfInput,
      {
        [_jN]: _inp,
      },
    ],
    [
      () => KantarWatermarkSettings,
      {
        [_jN]: _kW,
      },
    ],
    [
      () => MotionImageInserter,
      {
        [_jN]: _mIIo,
      },
    ],
    [
      () => NielsenConfiguration,
      {
        [_jN]: _nC,
      },
    ],
    [
      () => NielsenNonLinearWatermarkSettings,
      {
        [_jN]: _nNLW,
      },
    ],
    [
      () => __listOfOutputGroup,
      {
        [_jN]: _oG,
      },
    ],
    [
      () => TimecodeConfig,
      {
        [_jN]: _tCi,
      },
    ],
    [
      () => TimedMetadataInsertion,
      {
        [_jN]: _tMI,
      },
    ],
  ]
);
export var ListJobsRequest = struct(
  n0,
  _LJR,
  0,
  [_MRa, _NT, _Or, _Q, _Sta],
  [
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _or,
      },
    ],
    [
      0,
      {
        [_hQ]: _q,
      },
    ],
    [
      0,
      {
        [_hQ]: _sta,
      },
    ],
  ]
);
export var ListJobsResponse = struct(
  n0,
  _LJRi,
  0,
  [_Jo, _NT],
  [
    [
      () => __listOfJob,
      {
        [_jN]: _jo,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_A], [[0, 1]]);
export var ListTagsForResourceResponse = struct(
  n0,
  _LTFRRi,
  0,
  [_RT],
  [
    [
      () => ResourceTags,
      {
        [_jN]: _rT,
      },
    ],
  ]
);
export var OutputDetail = struct(
  n0,
  _OD,
  0,
  [_DIM, _VDi],
  [
    [
      1,
      {
        [_jN]: _dIM,
      },
    ],
    [
      () => VideoDetail,
      {
        [_jN]: _vDi,
      },
    ],
  ]
);
export var OutputGroupDetail = struct(
  n0,
  _OGDu,
  0,
  [_ODu],
  [
    [
      () => __listOfOutputDetail,
      {
        [_jN]: _oD,
      },
    ],
  ]
);
export var QueueTransition = struct(
  n0,
  _QTu,
  0,
  [_DQ, _SQ, _Times],
  [
    [
      0,
      {
        [_jN]: _dQ,
      },
    ],
    [
      0,
      {
        [_jN]: _sQ,
      },
    ],
    [
      7,
      {
        [_jN]: _times,
      },
    ],
  ]
);
export var ResourceTags = struct(
  n0,
  _RT,
  0,
  [_A, _Ta],
  [
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var SearchJobsRequest = struct(
  n0,
  _SJR,
  0,
  [_IFn, _MRa, _NT, _Or, _Q, _Sta],
  [
    [
      0,
      {
        [_hQ]: _iFn,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _or,
      },
    ],
    [
      0,
      {
        [_hQ]: _q,
      },
    ],
    [
      0,
      {
        [_hQ]: _sta,
      },
    ],
  ]
);
export var SearchJobsResponse = struct(
  n0,
  _SJRe,
  0,
  [_Jo, _NT],
  [
    [
      () => __listOfJob,
      {
        [_jN]: _jo,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var TagResourceRequest = struct(
  n0,
  _TRR,
  0,
  [_A, _Ta],
  [
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var Timing = struct(
  n0,
  _Timi,
  0,
  [_FTi, _STta, _STub],
  [
    [
      7,
      {
        [_jN]: _fTi,
      },
    ],
    [
      7,
      {
        [_jN]: _sTta,
      },
    ],
    [
      7,
      {
        [_jN]: _sTub,
      },
    ],
  ]
);
export var VideoDetail = struct(
  n0,
  _VDid,
  0,
  [_HIP, _WIP],
  [
    [
      1,
      {
        [_jN]: _hIP,
      },
    ],
    [
      1,
      {
        [_jN]: _wIP,
      },
    ],
  ]
);
export var WarningGroup = struct(
  n0,
  _WG,
  0,
  [_Cod, _Cou],
  [
    [
      1,
      {
        [_jN]: _cod,
      },
    ],
    [
      1,
      {
        [_jN]: _cou,
      },
    ],
  ]
);
export var __listOf__stringPatternS3ASSETMAPXml = 64 | 0;

export var __listOfInput = list(n0, _lOI, 0, [() => Input, 0]);
export var __listOfJob = list(n0, _lOJ, 0, [() => Job, 0]);
export var __listOfOutputDetail = list(n0, _lOOD, 0, [() => OutputDetail, 0]);
export var __listOfOutputGroupDetail = list(n0, _lOOGD, 0, [() => OutputGroupDetail, 0]);
export var __listOfQueueTransition = list(n0, _lOQT, 0, [() => QueueTransition, 0]);
export var __listOfWarningGroup = list(n0, _lOWG, 0, [() => WarningGroup, 0]);
export var __mapOf__string = 128 | 0;

export var CreateJob = op(
  n0,
  _CJr,
  {
    [_ht]: ["POST", "/2017-08-29/jobs", 201],
  },
  () => CreateJobRequest,
  () => CreateJobResponse
);
export var CreateJobTemplate = op(
  n0,
  _CJT,
  {
    [_ht]: ["POST", "/2017-08-29/jobTemplates", 201],
  },
  () => CreateJobTemplateRequest,
  () => CreateJobTemplateResponse
);
export var CreatePreset = op(
  n0,
  _CPr,
  {
    [_ht]: ["POST", "/2017-08-29/presets", 201],
  },
  () => CreatePresetRequest,
  () => CreatePresetResponse
);
export var CreateQueue = op(
  n0,
  _CQ,
  {
    [_ht]: ["POST", "/2017-08-29/queues", 201],
  },
  () => CreateQueueRequest,
  () => CreateQueueResponse
);
export var GetJob = op(
  n0,
  _GJ,
  {
    [_ht]: ["GET", "/2017-08-29/jobs/{Id}", 200],
  },
  () => GetJobRequest,
  () => GetJobResponse
);
export var ListJobs = op(
  n0,
  _LJ,
  {
    [_ht]: ["GET", "/2017-08-29/jobs", 200],
  },
  () => ListJobsRequest,
  () => ListJobsResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_ht]: ["GET", "/2017-08-29/tags/{Arn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var SearchJobs = op(
  n0,
  _SJ,
  {
    [_ht]: ["GET", "/2017-08-29/search", 200],
  },
  () => SearchJobsRequest,
  () => SearchJobsResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_ht]: ["POST", "/2017-08-29/tags", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
