// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _A,
  _a,
  _AAO,
  _aAO,
  _AAR,
  _AAS,
  _AB,
  _aB,
  _ABI,
  _aBI,
  _ABl,
  _aBl,
  _ACc,
  _aCc,
  _ACCSIU,
  _aCCSIU,
  _ADC,
  _aDC,
  _aDu,
  _ADud,
  _aDud,
  _ADudi,
  _AES,
  _aES,
  _AF,
  _aF,
  _AGI,
  _aGI,
  _AI,
  _aI,
  _AIF,
  _aIF,
  _AIFS,
  _aIFS,
  _AM,
  _aM,
  _AMd,
  _aMd,
  _AN,
  _An,
  _aN,
  _an,
  _AOC,
  _aOC,
  _AOH,
  _aOH,
  _AR,
  _aR,
  _ARS,
  _aRS,
  _ARSu,
  _ASb,
  _aSb,
  _AScc,
  _aScc,
  _ASG,
  _aSG,
  _ASGu,
  _ASNu,
  _aSNu,
  _ASS,
  _aSS,
  _ASu,
  _aSu,
  _ASud,
  _AT,
  _aT,
  _ATT,
  _aTT,
  _AWP,
  _aWP,
  _BCr,
  _bCr,
  _BRL,
  _bRL,
  _BU,
  _bU,
  _CA,
  _Ca,
  _cA,
  _ca,
  _CAa,
  _cAa,
  _CAe,
  _cAe,
  _CAM,
  _CC,
  _cC,
  _CCa,
  _cCa,
  _CCDLUTS,
  _cCDLUTS,
  _CCDLUTSo,
  _CD,
  _cD,
  _CDa,
  _CES,
  _CGS,
  _cGS,
  _CIBTPS,
  _CIV,
  _cIV,
  _CLC,
  _cLC,
  _CLM,
  _cLM,
  _CLS,
  _cLS,
  _CN,
  _cN,
  _CNu,
  _cNu,
  _CPA,
  _cPA,
  _CPTP,
  _cPTP,
  _CR,
  _Cr,
  _cR,
  _cr,
  _CSa,
  _cSa,
  _CSap,
  _CSF,
  _CSI,
  _cSI,
  _CSLC,
  _cSLC,
  _CSN,
  _cSN,
  _CSNr,
  _cSNr,
  _CSo,
  _cSo,
  _CSol,
  _cSol,
  _CSon,
  _cSon,
  _CSS,
  _CSU,
  _cSU,
  _CT,
  _cT,
  _DAM,
  _DAS,
  _dAS,
  _DASy,
  _De,
  _de,
  _Des,
  _des,
  _DFe,
  _dFe,
  _DFen,
  _dFen,
  _DIES,
  _DIFTPNM,
  _dIFTPNM,
  _DIGS,
  _dIGS,
  _DIi,
  _dIi,
  _DIIBTPS,
  _DMS,
  _dMS,
  _DS,
  _dS,
  _DSe,
  _dSe,
  _DSi,
  _dSi,
  _DSSI,
  _dSSI,
  _DSSS,
  _dSSS,
  _DVMX,
  _dVMX,
  _DVSF,
  _dVSF,
  _E,
  _EAFI,
  _eAFI,
  _ECC,
  _eCC,
  _EDSx,
  _eDSx,
  _EI,
  _eI,
  _EM,
  _eM,
  _EMCCN,
  _en,
  _EPn,
  _ePn,
  _Es,
  _es,
  _ESPN,
  _ESS,
  _ESs,
  _eSS,
  _ET,
  _eT,
  _ETn,
  _eTn,
  _ETO,
  _eTO,
  _Ex,
  _ex,
  _FD,
  _fD,
  _fEi,
  _FEil,
  _FGSi,
  _fGSi,
  _FI,
  _fI,
  _FIR,
  _fIR,
  _FIRS,
  _FL,
  _fL,
  _FLC,
  _fLC,
  _FN,
  _fN,
  _FOi,
  _fOi,
  _Fr,
  _fr,
  _FSi,
  _fSi,
  _FSol,
  _fSol,
  _FSS,
  _fSS,
  _GJT,
  _GJTR,
  _GJTRe,
  _H,
  _h,
  _HAM,
  _HC,
  _hC,
  _HCLM,
  _HD,
  _hD,
  _HDo,
  _HES,
  _HGS,
  _hGS,
  _HIBTPS,
  _HM,
  _hM,
  _hQ,
  _HRGS,
  _hRGS,
  _hS,
  _HSl,
  _HSSI,
  _hSSI,
  _ht,
  _i,
  _IBTP,
  _iBTP,
  _IBTPS,
  _iBTPS,
  _IC,
  _iC,
  _ICn,
  _iCn,
  _ICnp,
  _ICS,
  _iCS,
  _Id,
  _IFOM,
  _iFOM,
  _II,
  _IId,
  _iId,
  _IIm,
  _iIm,
  _IML,
  _iML,
  _IMn,
  _iMn,
  _In,
  _Inp,
  _inp,
  _inpu,
  _IP,
  _iP,
  _IST,
  _iST,
  _IT,
  _IVIM,
  _iVIM,
  _IX,
  _iX,
  _IY,
  _iY,
  _jN,
  _JT,
  _jT,
  _JTo,
  _jTo,
  _JTS,
  _KEC,
  _kEC,
  _KF,
  _kF,
  _KFV,
  _kFV,
  _KKA,
  _kKA,
  _KLI,
  _kLI,
  _KSU,
  _kSU,
  _KW,
  _kW,
  _KWS,
  _LB,
  _lB,
  _LC,
  _lC,
  _LD,
  _lD,
  _LDo,
  _lDo,
  _LJT,
  _LJTR,
  _LJTRi,
  _lOAAR,
  _lOARS,
  _lOCAM,
  _lOCCDLUTS,
  _lOCD,
  _lODAM,
  _lOFIRS,
  _lOHAM,
  _lOHCLM,
  _lOHD,
  _lOIC,
  _lOII,
  _lOIT,
  _lOJT,
  _lOMSAM,
  _lOO,
  _lOOG,
  _lOVO,
  _lOVOIC,
  _lOVOT,
  _LU,
  _lU,
  _M,
  _m,
  _MAB,
  _mAB,
  _MABi,
  _mABi,
  _MBRS,
  _mBRS,
  _MBT,
  _mBT,
  _MCa,
  _mCa,
  _MCCN,
  _mCCN,
  _MD,
  _mD,
  _MDF,
  _mDF,
  _ME,
  _mE,
  _Met,
  _met,
  _Meta,
  _meta,
  _Metad,
  _metad,
  _Metada,
  _metada,
  _Metadat,
  _metadat,
  _Metadata,
  _metadata,
  _MFSL,
  _mFSL,
  _MIIF,
  _MIIO,
  _MIIo,
  _mIIo,
  _ML,
  _mL,
  _MMBT,
  _mMBT,
  _MNM,
  _mNM,
  _mOAS,
  _mOASG,
  _mOCS,
  _mODAS,
  _MP,
  _mP,
  _MQL,
  _mQL,
  _MR,
  _mR,
  _MRa,
  _mRa,
  _MSAM,
  _MSES,
  _MSGS,
  _mSGS,
  _MSL,
  _mSL,
  _MTRS,
  _mTRS,
  _MX,
  _mX,
  _N,
  _n,
  _NC,
  _nC,
  _NM,
  _nM,
  _NNLW,
  _nNLW,
  _NNLWS,
  _NT,
  _nT,
  _O,
  _o,
  _OCS,
  _oCS,
  _OE,
  _oE,
  _OG,
  _oG,
  _OGS,
  _oGS,
  _OGu,
  _OML,
  _oML,
  _Or,
  _or,
  _OSutp,
  _oSutp,
  _OSutpu,
  _oSutpu,
  _Ou,
  _ou,
  _Out,
  _P,
  _p,
  _PCs,
  _pCs,
  _PDC,
  _pDC,
  _PDT,
  _pDT,
  _PDTP,
  _pDTP,
  _PFM,
  _pFM,
  _Pi,
  _pi,
  _Pl,
  _pl,
  _PNa,
  _pNa,
  _PNr,
  _pNr,
  _POHFBF,
  _pOHFBF,
  _Pos,
  _pos,
  _Pr,
  _pr,
  _Pre,
  _pre,
  _PS,
  _pS,
  _PV,
  _pV,
  _PWHM,
  _pWHM,
  _Q,
  _q,
  _R,
  _r,
  _RGI,
  _rGI,
  _RIe,
  _rIe,
  _RLC,
  _rLC,
  _RN,
  _rN,
  _Rot,
  _rot,
  _RS,
  _rS,
  _RSP,
  _rSP,
  _Ru,
  _ru,
  _SACN,
  _sACN,
  _SAP,
  _sAP,
  _SCe,
  _sCe,
  _SCN,
  _sCN,
  _SCt,
  _sCt,
  _SDAC,
  _SDSe,
  _Se,
  _se,
  _SES,
  _SF,
  _sF,
  _Sh,
  _sh,
  _SIo,
  _sIo,
  _SIR,
  _sIR,
  _SIy,
  _sIy,
  _SKP,
  _sKP,
  _SKPC,
  _SKPt,
  _sKPt,
  _SKV,
  _sKV,
  _SL,
  _sL,
  _SLC,
  _sLC,
  _SMe,
  _sMe,
  _SOe,
  _sOe,
  _Sou,
  _sou,
  _SPNi,
  _sPNi,
  _SPS,
  _sPS,
  _SRa,
  _sRa,
  _SS,
  _sS,
  _SSe,
  _sSe,
  _ST,
  _sT,
  _Star,
  _star,
  _STN,
  _sTN,
  _STo,
  _sTo,
  _Str,
  _str,
  _STt,
  _sTt,
  _STta,
  _sTta,
  _SUI,
  _sUI,
  _SVP,
  _sVP,
  _SWS,
  _sWS,
  _SX,
  _sX,
  _T,
  _t,
  _TC,
  _tC,
  _TCi,
  _tCi,
  _TD,
  _tD,
  _TDCM,
  _tDCM,
  _TDM,
  _tDM,
  _TDU,
  _tDU,
  _TH,
  _tH,
  _THi,
  _tHi,
  _TI,
  _tI,
  _Tim,
  _tim,
  _TMI,
  _tMI,
  _TMIF,
  _tMIF,
  _TMIP,
  _tMIP,
  _TN,
  _tN,
  _TO,
  _tO,
  _tr,
  _Tra,
  _TSi,
  _tSi,
  _TSim,
  _tSim,
  _TSS,
  _tSS,
  _TSSr,
  _tSSr,
  _TSU,
  _tSU,
  _TW,
  _tW,
  _TWi,
  _tWi,
  _Ty,
  _ty,
  _U,
  _u,
  _UJT,
  _UJTR,
  _UJTRp,
  _Un,
  _un,
  _USTLTT,
  _uSTLTT,
  _UTPAT,
  _uTPAT,
  _VA,
  _vA,
  _VCO,
  _vCO,
  _VD,
  _vD,
  _VO,
  _vO,
  _VOC,
  _VOI,
  _VOi,
  _VOIC,
  _VOP,
  _VOT,
  _VSi,
  _vSi,
  _W,
  _w,
  _WDM,
  _wDM,
  _WHM,
  _wHM,
  _WHSS,
  _wHSS,
  _WM,
  _wM,
  _WSTIR,
  _wSTIR,
  _X,
  _x,
  _XP,
  _xP,
  _Y,
  _y,
  _YP,
  _yP,
  n0,
} from "./schemas_0";
import {
  __listOfAudioDescription,
  CaptionDestinationSettings,
  ContainerSettings,
  Hdr10Metadata,
  ImageInserter,
  Rectangle,
  RemixSettings,
  VideoDescription,
} from "./schemas_2_Job";

/* eslint no-var: 0 */

export var AccelerationSettings = struct(
  n0,
  _AScc,
  0,
  [_M],
  [
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ]
);
export var AdvancedInputFilterSettings = struct(
  n0,
  _AIFS,
  0,
  [_AT, _Sh],
  [
    [
      0,
      {
        [_jN]: _aT,
      },
    ],
    [
      0,
      {
        [_jN]: _sh,
      },
    ],
  ]
);
export var AllowedRenditionSize = struct(
  n0,
  _ARS,
  0,
  [_H, _R, _W],
  [
    [
      1,
      {
        [_jN]: _h,
      },
    ],
    [
      0,
      {
        [_jN]: _r,
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
export var AncillarySourceSettings = struct(
  n0,
  _ASS,
  0,
  [_CT, _SACN, _TC],
  [
    [
      0,
      {
        [_jN]: _cT,
      },
    ],
    [
      1,
      {
        [_jN]: _sACN,
      },
    ],
    [
      0,
      {
        [_jN]: _tC,
      },
    ],
  ]
);
export var AudioSelector = struct(
  n0,
  _ASu,
  0,
  [_ADC, _CLC, _DS, _EAFI, _HRGS, _LC, _O, _P, _PS, _RS, _ST, _T],
  [
    [
      0,
      {
        [_jN]: _aDC,
      },
    ],
    [
      0,
      {
        [_jN]: _cLC,
      },
    ],
    [
      0,
      {
        [_jN]: _dS,
      },
    ],
    [
      0,
      {
        [_jN]: _eAFI,
      },
    ],
    [
      () => HlsRenditionGroupSettings,
      {
        [_jN]: _hRGS,
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
        [_jN]: _o,
      },
    ],
    [
      64 | 1,
      {
        [_jN]: _p,
      },
    ],
    [
      1,
      {
        [_jN]: _pS,
      },
    ],
    [
      () => RemixSettings,
      {
        [_jN]: _rS,
      },
    ],
    [
      0,
      {
        [_jN]: _sT,
      },
    ],
    [
      64 | 1,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var AudioSelectorGroup = struct(
  n0,
  _ASG,
  0,
  [_ASNu],
  [
    [
      64 | 0,
      {
        [_jN]: _aSNu,
      },
    ],
  ]
);
export var AutomatedAbrRule = struct(
  n0,
  _AAR,
  0,
  [_AR, _FIR, _MBRS, _MTRS, _Ty],
  [
    [
      () => __listOfAllowedRenditionSize,
      {
        [_jN]: _aR,
      },
    ],
    [
      () => __listOfForceIncludeRenditionSize,
      {
        [_jN]: _fIR,
      },
    ],
    [
      () => MinBottomRenditionSize,
      {
        [_jN]: _mBRS,
      },
    ],
    [
      () => MinTopRenditionSize,
      {
        [_jN]: _mTRS,
      },
    ],
    [
      0,
      {
        [_jN]: _ty,
      },
    ],
  ]
);
export var AutomatedAbrSettings = struct(
  n0,
  _AAS,
  0,
  [_MAB, _MQL, _MR, _MABi, _Ru],
  [
    [
      1,
      {
        [_jN]: _mAB,
      },
    ],
    [
      1,
      {
        [_jN]: _mQL,
      },
    ],
    [
      1,
      {
        [_jN]: _mR,
      },
    ],
    [
      1,
      {
        [_jN]: _mABi,
      },
    ],
    [
      () => __listOfAutomatedAbrRule,
      {
        [_jN]: _ru,
      },
    ],
  ]
);
export var AutomatedEncodingSettings = struct(
  n0,
  _AES,
  0,
  [_ASb],
  [
    [
      () => AutomatedAbrSettings,
      {
        [_jN]: _aSb,
      },
    ],
  ]
);
export var AvailBlanking = struct(
  n0,
  _AB,
  0,
  [_ABI],
  [
    [
      0,
      {
        [_jN]: _aBI,
      },
    ],
  ]
);
export var CaptionDescription = struct(
  n0,
  _CD,
  0,
  [_CSN, _CLC, _DSe, _LC, _LD],
  [
    [
      0,
      {
        [_jN]: _cSN,
      },
    ],
    [
      0,
      {
        [_jN]: _cLC,
      },
    ],
    [
      () => CaptionDestinationSettings,
      {
        [_jN]: _dSe,
      },
    ],
    [
      0,
      {
        [_jN]: _lC,
      },
    ],
    [
      0,
      {
        [_jN]: _lD,
      },
    ],
  ]
);
export var CaptionSelector = struct(
  n0,
  _CSa,
  0,
  [_CLC, _LC, _SS],
  [
    [
      0,
      {
        [_jN]: _cLC,
      },
    ],
    [
      0,
      {
        [_jN]: _lC,
      },
    ],
    [
      () => CaptionSourceSettings,
      {
        [_jN]: _sS,
      },
    ],
  ]
);
export var CaptionSourceFramerate = struct(
  n0,
  _CSF,
  0,
  [_FD, _FN],
  [
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
  ]
);
export var CaptionSourceSettings = struct(
  n0,
  _CSS,
  0,
  [_ASS, _DSSS, _ESS, _FSS, _STo, _TSS, _TSSr, _WHSS],
  [
    [
      () => AncillarySourceSettings,
      {
        [_jN]: _aSS,
      },
    ],
    [
      () => DvbSubSourceSettings,
      {
        [_jN]: _dSSS,
      },
    ],
    [
      () => EmbeddedSourceSettings,
      {
        [_jN]: _eSS,
      },
    ],
    [
      () => FileSourceSettings,
      {
        [_jN]: _fSS,
      },
    ],
    [
      0,
      {
        [_jN]: _sTo,
      },
    ],
    [
      () => TeletextSourceSettings,
      {
        [_jN]: _tSS,
      },
    ],
    [
      () => TrackSourceSettings,
      {
        [_jN]: _tSSr,
      },
    ],
    [
      () => WebvttHlsSourceSettings,
      {
        [_jN]: _wHSS,
      },
    ],
  ]
);
export var CmafAdditionalManifest = struct(
  n0,
  _CAM,
  0,
  [_MNM, _SOe],
  [
    [
      0,
      {
        [_jN]: _mNM,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sOe,
      },
    ],
  ]
);
export var CmafEncryptionSettings = struct(
  n0,
  _CES,
  0,
  [_CIV, _EM, _IVIM, _SKP, _SKPt, _Ty],
  [
    [
      0,
      {
        [_jN]: _cIV,
      },
    ],
    [
      0,
      {
        [_jN]: _eM,
      },
    ],
    [
      0,
      {
        [_jN]: _iVIM,
      },
    ],
    [
      () => SpekeKeyProviderCmaf,
      {
        [_jN]: _sKP,
      },
    ],
    [
      () => StaticKeyProvider,
      {
        [_jN]: _sKPt,
      },
    ],
    [
      0,
      {
        [_jN]: _ty,
      },
    ],
  ]
);
export var CmafGroupSettings = struct(
  n0,
  _CGS,
  0,
  [
    _AM,
    _BU,
    _CC,
    _CSo,
    _DIFTPNM,
    _DMS,
    _De,
    _DSe,
    _E,
    _FL,
    _IBTP,
    _IBTPS,
    _MCa,
    _MDF,
    _MBT,
    _MFSL,
    _MMBT,
    _MP,
    _POHFBF,
    _SCe,
    _SL,
    _SLC,
    _SIR,
    _TDCM,
    _VCO,
    _WDM,
    _WHM,
    _WSTIR,
  ],
  [
    [
      () => __listOfCmafAdditionalManifest,
      {
        [_jN]: _aM,
      },
    ],
    [
      0,
      {
        [_jN]: _bU,
      },
    ],
    [
      0,
      {
        [_jN]: _cC,
      },
    ],
    [
      0,
      {
        [_jN]: _cSo,
      },
    ],
    [
      0,
      {
        [_jN]: _dIFTPNM,
      },
    ],
    [
      0,
      {
        [_jN]: _dMS,
      },
    ],
    [
      0,
      {
        [_jN]: _de,
      },
    ],
    [
      () => DestinationSettings,
      {
        [_jN]: _dSe,
      },
    ],
    [
      () => CmafEncryptionSettings,
      {
        [_jN]: _en,
      },
    ],
    [
      1,
      {
        [_jN]: _fL,
      },
    ],
    [
      0,
      {
        [_jN]: _iBTP,
      },
    ],
    [
      () => CmafImageBasedTrickPlaySettings,
      {
        [_jN]: _iBTPS,
      },
    ],
    [
      0,
      {
        [_jN]: _mCa,
      },
    ],
    [
      0,
      {
        [_jN]: _mDF,
      },
    ],
    [
      1,
      {
        [_jN]: _mBT,
      },
    ],
    [
      1,
      {
        [_jN]: _mFSL,
      },
    ],
    [
      0,
      {
        [_jN]: _mMBT,
      },
    ],
    [
      0,
      {
        [_jN]: _mP,
      },
    ],
    [
      0,
      {
        [_jN]: _pOHFBF,
      },
    ],
    [
      0,
      {
        [_jN]: _sCe,
      },
    ],
    [
      1,
      {
        [_jN]: _sL,
      },
    ],
    [
      0,
      {
        [_jN]: _sLC,
      },
    ],
    [
      0,
      {
        [_jN]: _sIR,
      },
    ],
    [
      0,
      {
        [_jN]: _tDCM,
      },
    ],
    [
      0,
      {
        [_jN]: _vCO,
      },
    ],
    [
      0,
      {
        [_jN]: _wDM,
      },
    ],
    [
      0,
      {
        [_jN]: _wHM,
      },
    ],
    [
      0,
      {
        [_jN]: _wSTIR,
      },
    ],
  ]
);
export var CmafImageBasedTrickPlaySettings = struct(
  n0,
  _CIBTPS,
  0,
  [_IC, _TH, _TI, _TW, _THi, _TWi],
  [
    [
      0,
      {
        [_jN]: _iC,
      },
    ],
    [
      1,
      {
        [_jN]: _tH,
      },
    ],
    [
      1,
      {
        [_jN]: _tI,
      },
    ],
    [
      1,
      {
        [_jN]: _tW,
      },
    ],
    [
      1,
      {
        [_jN]: _tHi,
      },
    ],
    [
      1,
      {
        [_jN]: _tWi,
      },
    ],
  ]
);
export var ColorConversion3DLUTSetting = struct(
  n0,
  _CCDLUTS,
  0,
  [_FI, _ICS, _IML, _OCS, _OML],
  [
    [
      0,
      {
        [_jN]: _fI,
      },
    ],
    [
      0,
      {
        [_jN]: _iCS,
      },
    ],
    [
      1,
      {
        [_jN]: _iML,
      },
    ],
    [
      0,
      {
        [_jN]: _oCS,
      },
    ],
    [
      1,
      {
        [_jN]: _oML,
      },
    ],
  ]
);
export var DashAdditionalManifest = struct(
  n0,
  _DAM,
  0,
  [_MNM, _SOe],
  [
    [
      0,
      {
        [_jN]: _mNM,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sOe,
      },
    ],
  ]
);
export var DashIsoEncryptionSettings = struct(
  n0,
  _DIES,
  0,
  [_PDC, _SKP],
  [
    [
      0,
      {
        [_jN]: _pDC,
      },
    ],
    [
      () => SpekeKeyProvider,
      {
        [_jN]: _sKP,
      },
    ],
  ]
);
export var DashIsoGroupSettings = struct(
  n0,
  _DIGS,
  0,
  [
    _AM,
    _ACCSIU,
    _BU,
    _DIFTPNM,
    _DMS,
    _De,
    _DSe,
    _E,
    _FL,
    _HC,
    _IBTP,
    _IBTPS,
    _MBT,
    _MFSL,
    _MMBT,
    _MP,
    _POHFBF,
    _SCe,
    _SL,
    _SLC,
    _VCO,
    _WSTIR,
  ],
  [
    [
      () => __listOfDashAdditionalManifest,
      {
        [_jN]: _aM,
      },
    ],
    [
      0,
      {
        [_jN]: _aCCSIU,
      },
    ],
    [
      0,
      {
        [_jN]: _bU,
      },
    ],
    [
      0,
      {
        [_jN]: _dIFTPNM,
      },
    ],
    [
      0,
      {
        [_jN]: _dMS,
      },
    ],
    [
      0,
      {
        [_jN]: _de,
      },
    ],
    [
      () => DestinationSettings,
      {
        [_jN]: _dSe,
      },
    ],
    [
      () => DashIsoEncryptionSettings,
      {
        [_jN]: _en,
      },
    ],
    [
      1,
      {
        [_jN]: _fL,
      },
    ],
    [
      0,
      {
        [_jN]: _hC,
      },
    ],
    [
      0,
      {
        [_jN]: _iBTP,
      },
    ],
    [
      () => DashIsoImageBasedTrickPlaySettings,
      {
        [_jN]: _iBTPS,
      },
    ],
    [
      1,
      {
        [_jN]: _mBT,
      },
    ],
    [
      1,
      {
        [_jN]: _mFSL,
      },
    ],
    [
      0,
      {
        [_jN]: _mMBT,
      },
    ],
    [
      0,
      {
        [_jN]: _mP,
      },
    ],
    [
      0,
      {
        [_jN]: _pOHFBF,
      },
    ],
    [
      0,
      {
        [_jN]: _sCe,
      },
    ],
    [
      1,
      {
        [_jN]: _sL,
      },
    ],
    [
      0,
      {
        [_jN]: _sLC,
      },
    ],
    [
      0,
      {
        [_jN]: _vCO,
      },
    ],
    [
      0,
      {
        [_jN]: _wSTIR,
      },
    ],
  ]
);
export var DashIsoImageBasedTrickPlaySettings = struct(
  n0,
  _DIIBTPS,
  0,
  [_IC, _TH, _TI, _TW, _THi, _TWi],
  [
    [
      0,
      {
        [_jN]: _iC,
      },
    ],
    [
      1,
      {
        [_jN]: _tH,
      },
    ],
    [
      1,
      {
        [_jN]: _tI,
      },
    ],
    [
      1,
      {
        [_jN]: _tW,
      },
    ],
    [
      1,
      {
        [_jN]: _tHi,
      },
    ],
    [
      1,
      {
        [_jN]: _tWi,
      },
    ],
  ]
);
export var DestinationSettings = struct(
  n0,
  _DSe,
  0,
  [_SSe],
  [
    [
      () => S3DestinationSettings,
      {
        [_jN]: _sSe,
      },
    ],
  ]
);
export var DvbSubSourceSettings = struct(
  n0,
  _DSSS,
  0,
  [_Pi],
  [
    [
      1,
      {
        [_jN]: _pi,
      },
    ],
  ]
);
export var DynamicAudioSelector = struct(
  n0,
  _DAS,
  0,
  [_ADC, _EAFI, _LC, _O, _ST],
  [
    [
      0,
      {
        [_jN]: _aDC,
      },
    ],
    [
      0,
      {
        [_jN]: _eAFI,
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
        [_jN]: _o,
      },
    ],
    [
      0,
      {
        [_jN]: _sT,
      },
    ],
  ]
);
export var EmbeddedSourceSettings = struct(
  n0,
  _ESS,
  0,
  [_CT, _SCN, _STN, _TC],
  [
    [
      0,
      {
        [_jN]: _cT,
      },
    ],
    [
      1,
      {
        [_jN]: _sCN,
      },
    ],
    [
      1,
      {
        [_jN]: _sTN,
      },
    ],
    [
      0,
      {
        [_jN]: _tC,
      },
    ],
  ]
);
export var EncryptionContractConfiguration = struct(
  n0,
  _ECC,
  0,
  [_SAP, _SVP],
  [
    [
      0,
      {
        [_jN]: _sAP,
      },
    ],
    [
      0,
      {
        [_jN]: _sVP,
      },
    ],
  ]
);
export var EsamManifestConfirmConditionNotification = struct(
  n0,
  _EMCCN,
  0,
  [_MX],
  [
    [
      0,
      {
        [_jN]: _mX,
      },
    ],
  ]
);
export var EsamSettings = struct(
  n0,
  _ESs,
  0,
  [_MCCN, _RSP, _SPNi],
  [
    [
      () => EsamManifestConfirmConditionNotification,
      {
        [_jN]: _mCCN,
      },
    ],
    [
      1,
      {
        [_jN]: _rSP,
      },
    ],
    [
      () => EsamSignalProcessingNotification,
      {
        [_jN]: _sPNi,
      },
    ],
  ]
);
export var EsamSignalProcessingNotification = struct(
  n0,
  _ESPN,
  0,
  [_SX],
  [
    [
      0,
      {
        [_jN]: _sX,
      },
    ],
  ]
);
export var ExtendedDataServices = struct(
  n0,
  _EDSx,
  0,
  [_CPA, _VA],
  [
    [
      0,
      {
        [_jN]: _cPA,
      },
    ],
    [
      0,
      {
        [_jN]: _vA,
      },
    ],
  ]
);
export var FileGroupSettings = struct(
  n0,
  _FGSi,
  0,
  [_De, _DSe],
  [
    [
      0,
      {
        [_jN]: _de,
      },
    ],
    [
      () => DestinationSettings,
      {
        [_jN]: _dSe,
      },
    ],
  ]
);
export var FileSourceSettings = struct(
  n0,
  _FSS,
  0,
  [_BRL, _CT, _CPTP, _Fr, _SF, _TD, _TDU, _USTLTT],
  [
    [
      0,
      {
        [_jN]: _bRL,
      },
    ],
    [
      0,
      {
        [_jN]: _cT,
      },
    ],
    [
      0,
      {
        [_jN]: _cPTP,
      },
    ],
    [
      () => CaptionSourceFramerate,
      {
        [_jN]: _fr,
      },
    ],
    [
      0,
      {
        [_jN]: _sF,
      },
    ],
    [
      1,
      {
        [_jN]: _tD,
      },
    ],
    [
      0,
      {
        [_jN]: _tDU,
      },
    ],
    [
      0,
      {
        [_jN]: _uSTLTT,
      },
    ],
  ]
);
export var ForceIncludeRenditionSize = struct(
  n0,
  _FIRS,
  0,
  [_H, _W],
  [
    [
      1,
      {
        [_jN]: _h,
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
export var GetJobTemplateRequest = struct(n0, _GJTR, 0, [_N], [[0, 1]]);
export var GetJobTemplateResponse = struct(
  n0,
  _GJTRe,
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
export var HlsAdditionalManifest = struct(
  n0,
  _HAM,
  0,
  [_MNM, _SOe],
  [
    [
      0,
      {
        [_jN]: _mNM,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sOe,
      },
    ],
  ]
);
export var HlsCaptionLanguageMapping = struct(
  n0,
  _HCLM,
  0,
  [_CCa, _CLC, _LC, _LD],
  [
    [
      1,
      {
        [_jN]: _cCa,
      },
    ],
    [
      0,
      {
        [_jN]: _cLC,
      },
    ],
    [
      0,
      {
        [_jN]: _lC,
      },
    ],
    [
      0,
      {
        [_jN]: _lD,
      },
    ],
  ]
);
export var HlsEncryptionSettings = struct(
  n0,
  _HES,
  0,
  [_CIV, _EM, _IVIM, _OE, _SKP, _SKPt, _Ty],
  [
    [
      0,
      {
        [_jN]: _cIV,
      },
    ],
    [
      0,
      {
        [_jN]: _eM,
      },
    ],
    [
      0,
      {
        [_jN]: _iVIM,
      },
    ],
    [
      0,
      {
        [_jN]: _oE,
      },
    ],
    [
      () => SpekeKeyProvider,
      {
        [_jN]: _sKP,
      },
    ],
    [
      () => StaticKeyProvider,
      {
        [_jN]: _sKPt,
      },
    ],
    [
      0,
      {
        [_jN]: _ty,
      },
    ],
  ]
);
export var HlsGroupSettings = struct(
  n0,
  _HGS,
  0,
  [
    _AMd,
    _AM,
    _AOH,
    _BU,
    _CLM,
    _CLS,
    _CSLC,
    _CC,
    _CSo,
    _De,
    _DSe,
    _DSi,
    _E,
    _IBTP,
    _IBTPS,
    _MCa,
    _MDF,
    _MFSL,
    _MSL,
    _OSutp,
    _PDT,
    _PDTP,
    _PWHM,
    _SCe,
    _SL,
    _SLC,
    _SPS,
    _SIR,
    _TDCM,
    _TMIF,
    _TMIP,
    _TDM,
  ],
  [
    [
      64 | 0,
      {
        [_jN]: _aMd,
      },
    ],
    [
      () => __listOfHlsAdditionalManifest,
      {
        [_jN]: _aM,
      },
    ],
    [
      0,
      {
        [_jN]: _aOH,
      },
    ],
    [
      0,
      {
        [_jN]: _bU,
      },
    ],
    [
      () => __listOfHlsCaptionLanguageMapping,
      {
        [_jN]: _cLM,
      },
    ],
    [
      0,
      {
        [_jN]: _cLS,
      },
    ],
    [
      0,
      {
        [_jN]: _cSLC,
      },
    ],
    [
      0,
      {
        [_jN]: _cC,
      },
    ],
    [
      0,
      {
        [_jN]: _cSo,
      },
    ],
    [
      0,
      {
        [_jN]: _de,
      },
    ],
    [
      () => DestinationSettings,
      {
        [_jN]: _dSe,
      },
    ],
    [
      0,
      {
        [_jN]: _dSi,
      },
    ],
    [
      () => HlsEncryptionSettings,
      {
        [_jN]: _en,
      },
    ],
    [
      0,
      {
        [_jN]: _iBTP,
      },
    ],
    [
      () => HlsImageBasedTrickPlaySettings,
      {
        [_jN]: _iBTPS,
      },
    ],
    [
      0,
      {
        [_jN]: _mCa,
      },
    ],
    [
      0,
      {
        [_jN]: _mDF,
      },
    ],
    [
      1,
      {
        [_jN]: _mFSL,
      },
    ],
    [
      1,
      {
        [_jN]: _mSL,
      },
    ],
    [
      0,
      {
        [_jN]: _oSutp,
      },
    ],
    [
      0,
      {
        [_jN]: _pDT,
      },
    ],
    [
      1,
      {
        [_jN]: _pDTP,
      },
    ],
    [
      0,
      {
        [_jN]: _pWHM,
      },
    ],
    [
      0,
      {
        [_jN]: _sCe,
      },
    ],
    [
      1,
      {
        [_jN]: _sL,
      },
    ],
    [
      0,
      {
        [_jN]: _sLC,
      },
    ],
    [
      1,
      {
        [_jN]: _sPS,
      },
    ],
    [
      0,
      {
        [_jN]: _sIR,
      },
    ],
    [
      0,
      {
        [_jN]: _tDCM,
      },
    ],
    [
      0,
      {
        [_jN]: _tMIF,
      },
    ],
    [
      1,
      {
        [_jN]: _tMIP,
      },
    ],
    [
      1,
      {
        [_jN]: _tDM,
      },
    ],
  ]
);
export var HlsImageBasedTrickPlaySettings = struct(
  n0,
  _HIBTPS,
  0,
  [_IC, _TH, _TI, _TW, _THi, _TWi],
  [
    [
      0,
      {
        [_jN]: _iC,
      },
    ],
    [
      1,
      {
        [_jN]: _tH,
      },
    ],
    [
      1,
      {
        [_jN]: _tI,
      },
    ],
    [
      1,
      {
        [_jN]: _tW,
      },
    ],
    [
      1,
      {
        [_jN]: _tHi,
      },
    ],
    [
      1,
      {
        [_jN]: _tWi,
      },
    ],
  ]
);
export var HlsRenditionGroupSettings = struct(
  n0,
  _HRGS,
  0,
  [_RGI, _RLC, _RN],
  [
    [
      0,
      {
        [_jN]: _rGI,
      },
    ],
    [
      0,
      {
        [_jN]: _rLC,
      },
    ],
    [
      0,
      {
        [_jN]: _rN,
      },
    ],
  ]
);
export var HlsSettings = struct(
  n0,
  _HSl,
  0,
  [_AGI, _AOC, _ARSu, _ATT, _DVSF, _IFOM, _SMe],
  [
    [
      0,
      {
        [_jN]: _aGI,
      },
    ],
    [
      0,
      {
        [_jN]: _aOC,
      },
    ],
    [
      0,
      {
        [_jN]: _aRS,
      },
    ],
    [
      0,
      {
        [_jN]: _aTT,
      },
    ],
    [
      0,
      {
        [_jN]: _dVSF,
      },
    ],
    [
      0,
      {
        [_jN]: _iFOM,
      },
    ],
    [
      0,
      {
        [_jN]: _sMe,
      },
    ],
  ]
);
export var HopDestination = struct(
  n0,
  _HDo,
  0,
  [_Pr, _Q, _WM],
  [
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
      1,
      {
        [_jN]: _wM,
      },
    ],
  ]
);
export var Id3Insertion = struct(
  n0,
  _II,
  0,
  [_Id, _Tim],
  [
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _tim,
      },
    ],
  ]
);
export var InputClipping = struct(
  n0,
  _ICnp,
  0,
  [_ET, _STt],
  [
    [
      0,
      {
        [_jN]: _eT,
      },
    ],
    [
      0,
      {
        [_jN]: _sTt,
      },
    ],
  ]
);
export var InputTemplate = struct(
  n0,
  _IT,
  0,
  [
    _AIF,
    _AIFS,
    _ASGu,
    _ASud,
    _CSap,
    _Cr,
    _DFe,
    _DFen,
    _DVMX,
    _DASy,
    _FEil,
    _FSi,
    _IIm,
    _ICn,
    _IST,
    _Pos,
    _PNr,
    _PCs,
    _TSi,
    _TSim,
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
export var JobTemplate = struct(
  n0,
  _JT,
  0,
  [_AScc, _A, _Ca, _CA, _Des, _HD, _LU, _N, _Pr, _Q, _Se, _SUI, _Ty],
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
        [_jN]: _a,
      },
    ],
    [
      0,
      {
        [_jN]: _ca,
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
      7,
      {
        [_jN]: _lU,
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
      0,
      {
        [_jN]: _ty,
      },
    ],
  ]
);
export var JobTemplateSettings = struct(
  n0,
  _JTS,
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
      () => __listOfInputTemplate,
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
export var KantarWatermarkSettings = struct(
  n0,
  _KWS,
  0,
  [_CN, _CR, _CSNr, _FOi, _KLI, _KSU, _LDo, _Met, _Meta, _Metad, _Metada, _Metadat, _Metadata],
  [
    [
      0,
      {
        [_jN]: _cN,
      },
    ],
    [
      0,
      {
        [_jN]: _cR,
      },
    ],
    [
      0,
      {
        [_jN]: _cSNr,
      },
    ],
    [
      1,
      {
        [_jN]: _fOi,
      },
    ],
    [
      1,
      {
        [_jN]: _kLI,
      },
    ],
    [
      0,
      {
        [_jN]: _kSU,
      },
    ],
    [
      0,
      {
        [_jN]: _lDo,
      },
    ],
    [
      0,
      {
        [_jN]: _met,
      },
    ],
    [
      0,
      {
        [_jN]: _meta,
      },
    ],
    [
      0,
      {
        [_jN]: _metad,
      },
    ],
    [
      0,
      {
        [_jN]: _metada,
      },
    ],
    [
      0,
      {
        [_jN]: _metadat,
      },
    ],
    [
      0,
      {
        [_jN]: _metadata,
      },
    ],
  ]
);
export var ListJobTemplatesRequest = struct(
  n0,
  _LJTR,
  0,
  [_Ca, _LB, _MRa, _NT, _Or],
  [
    [
      0,
      {
        [_hQ]: _ca,
      },
    ],
    [
      0,
      {
        [_hQ]: _lB,
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
  ]
);
export var ListJobTemplatesResponse = struct(
  n0,
  _LJTRi,
  0,
  [_JTo, _NT],
  [
    [
      () => __listOfJobTemplate,
      {
        [_jN]: _jTo,
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
export var MinBottomRenditionSize = struct(
  n0,
  _MBRS,
  0,
  [_H, _W],
  [
    [
      1,
      {
        [_jN]: _h,
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
export var MinTopRenditionSize = struct(
  n0,
  _MTRS,
  0,
  [_H, _W],
  [
    [
      1,
      {
        [_jN]: _h,
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
export var MotionImageInserter = struct(
  n0,
  _MIIo,
  0,
  [_Fr, _In, _IMn, _O, _Pl, _STta],
  [
    [
      () => MotionImageInsertionFramerate,
      {
        [_jN]: _fr,
      },
    ],
    [
      0,
      {
        [_jN]: _inpu,
      },
    ],
    [
      0,
      {
        [_jN]: _iMn,
      },
    ],
    [
      () => MotionImageInsertionOffset,
      {
        [_jN]: _o,
      },
    ],
    [
      0,
      {
        [_jN]: _pl,
      },
    ],
    [
      0,
      {
        [_jN]: _sTta,
      },
    ],
  ]
);
export var MotionImageInsertionFramerate = struct(
  n0,
  _MIIF,
  0,
  [_FD, _FN],
  [
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
  ]
);
export var MotionImageInsertionOffset = struct(
  n0,
  _MIIO,
  0,
  [_IX, _IY],
  [
    [
      1,
      {
        [_jN]: _iX,
      },
    ],
    [
      1,
      {
        [_jN]: _iY,
      },
    ],
  ]
);
export var MsSmoothAdditionalManifest = struct(
  n0,
  _MSAM,
  0,
  [_MNM, _SOe],
  [
    [
      0,
      {
        [_jN]: _mNM,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sOe,
      },
    ],
  ]
);
export var MsSmoothEncryptionSettings = struct(
  n0,
  _MSES,
  0,
  [_SKP],
  [
    [
      () => SpekeKeyProvider,
      {
        [_jN]: _sKP,
      },
    ],
  ]
);
export var MsSmoothGroupSettings = struct(
  n0,
  _MSGS,
  0,
  [_AM, _ADud, _De, _DSe, _E, _FL, _FLC, _ME],
  [
    [
      () => __listOfMsSmoothAdditionalManifest,
      {
        [_jN]: _aM,
      },
    ],
    [
      0,
      {
        [_jN]: _aDu,
      },
    ],
    [
      0,
      {
        [_jN]: _de,
      },
    ],
    [
      () => DestinationSettings,
      {
        [_jN]: _dSe,
      },
    ],
    [
      () => MsSmoothEncryptionSettings,
      {
        [_jN]: _en,
      },
    ],
    [
      1,
      {
        [_jN]: _fL,
      },
    ],
    [
      0,
      {
        [_jN]: _fLC,
      },
    ],
    [
      0,
      {
        [_jN]: _mE,
      },
    ],
  ]
);
export var NielsenConfiguration = struct(
  n0,
  _NC,
  0,
  [_BCr, _DIi],
  [
    [
      1,
      {
        [_jN]: _bCr,
      },
    ],
    [
      0,
      {
        [_jN]: _dIi,
      },
    ],
  ]
);
export var NielsenNonLinearWatermarkSettings = struct(
  n0,
  _NNLWS,
  0,
  [_AWP, _AF, _AI, _AN, _CSI, _EI, _MD, _SIo, _SWS, _TSU, _UTPAT],
  [
    [
      0,
      {
        [_jN]: _aWP,
      },
    ],
    [
      0,
      {
        [_jN]: _aF,
      },
    ],
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _aN,
      },
    ],
    [
      0,
      {
        [_jN]: _cSI,
      },
    ],
    [
      0,
      {
        [_jN]: _eI,
      },
    ],
    [
      0,
      {
        [_jN]: _mD,
      },
    ],
    [
      1,
      {
        [_jN]: _sIo,
      },
    ],
    [
      0,
      {
        [_jN]: _sWS,
      },
    ],
    [
      0,
      {
        [_jN]: _tSU,
      },
    ],
    [
      0,
      {
        [_jN]: _uTPAT,
      },
    ],
  ]
);
export var Output = struct(
  n0,
  _Ou,
  0,
  [_ADudi, _CDa, _CSon, _Ex, _NM, _OSutpu, _Pre, _VD],
  [
    [
      () => __listOfAudioDescription,
      {
        [_jN]: _aDud,
      },
    ],
    [
      () => __listOfCaptionDescription,
      {
        [_jN]: _cD,
      },
    ],
    [
      () => ContainerSettings,
      {
        [_jN]: _cSon,
      },
    ],
    [
      0,
      {
        [_jN]: _ex,
      },
    ],
    [
      0,
      {
        [_jN]: _nM,
      },
    ],
    [
      () => OutputSettings,
      {
        [_jN]: _oSutpu,
      },
    ],
    [
      0,
      {
        [_jN]: _pre,
      },
    ],
    [
      () => VideoDescription,
      {
        [_jN]: _vD,
      },
    ],
  ]
);
export var OutputGroup = struct(
  n0,
  _OGu,
  0,
  [_AES, _CNu, _N, _OGS, _Out],
  [
    [
      () => AutomatedEncodingSettings,
      {
        [_jN]: _aES,
      },
    ],
    [
      0,
      {
        [_jN]: _cNu,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => OutputGroupSettings,
      {
        [_jN]: _oGS,
      },
    ],
    [
      () => __listOfOutput,
      {
        [_jN]: _ou,
      },
    ],
  ]
);
export var OutputGroupSettings = struct(
  n0,
  _OGS,
  0,
  [_CGS, _DIGS, _FGSi, _HGS, _MSGS, _PFM, _Ty],
  [
    [
      () => CmafGroupSettings,
      {
        [_jN]: _cGS,
      },
    ],
    [
      () => DashIsoGroupSettings,
      {
        [_jN]: _dIGS,
      },
    ],
    [
      () => FileGroupSettings,
      {
        [_jN]: _fGSi,
      },
    ],
    [
      () => HlsGroupSettings,
      {
        [_jN]: _hGS,
      },
    ],
    [
      () => MsSmoothGroupSettings,
      {
        [_jN]: _mSGS,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _pFM,
      },
    ],
    [
      0,
      {
        [_jN]: _ty,
      },
    ],
  ]
);
export var OutputSettings = struct(
  n0,
  _OSutpu,
  0,
  [_HSl],
  [
    [
      () => HlsSettings,
      {
        [_jN]: _hS,
      },
    ],
  ]
);
export var S3DestinationAccessControl = struct(
  n0,
  _SDAC,
  0,
  [_CAa],
  [
    [
      0,
      {
        [_jN]: _cAa,
      },
    ],
  ]
);
export var S3DestinationSettings = struct(
  n0,
  _SDSe,
  0,
  [_ACc, _E, _SCt],
  [
    [
      () => S3DestinationAccessControl,
      {
        [_jN]: _aCc,
      },
    ],
    [
      () => S3EncryptionSettings,
      {
        [_jN]: _en,
      },
    ],
    [
      0,
      {
        [_jN]: _sCt,
      },
    ],
  ]
);
export var S3EncryptionSettings = struct(
  n0,
  _SES,
  0,
  [_ETn, _KEC, _KKA],
  [
    [
      0,
      {
        [_jN]: _eTn,
      },
    ],
    [
      0,
      {
        [_jN]: _kEC,
      },
    ],
    [
      0,
      {
        [_jN]: _kKA,
      },
    ],
  ]
);
export var SpekeKeyProvider = struct(
  n0,
  _SKP,
  0,
  [_CAe, _ECC, _RIe, _SIy, _U],
  [
    [
      0,
      {
        [_jN]: _cAe,
      },
    ],
    [
      () => EncryptionContractConfiguration,
      {
        [_jN]: _eCC,
      },
    ],
    [
      0,
      {
        [_jN]: _rIe,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sIy,
      },
    ],
    [
      0,
      {
        [_jN]: _u,
      },
    ],
  ]
);
export var SpekeKeyProviderCmaf = struct(
  n0,
  _SKPC,
  0,
  [_CAe, _DSSI, _ECC, _HSSI, _RIe, _U],
  [
    [
      0,
      {
        [_jN]: _cAe,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _dSSI,
      },
    ],
    [
      () => EncryptionContractConfiguration,
      {
        [_jN]: _eCC,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _hSSI,
      },
    ],
    [
      0,
      {
        [_jN]: _rIe,
      },
    ],
    [
      0,
      {
        [_jN]: _u,
      },
    ],
  ]
);
export var StaticKeyProvider = struct(
  n0,
  _SKPt,
  0,
  [_KF, _KFV, _SKV, _U],
  [
    [
      0,
      {
        [_jN]: _kF,
      },
    ],
    [
      0,
      {
        [_jN]: _kFV,
      },
    ],
    [
      0,
      {
        [_jN]: _sKV,
      },
    ],
    [
      0,
      {
        [_jN]: _u,
      },
    ],
  ]
);
export var TeletextSourceSettings = struct(
  n0,
  _TSS,
  0,
  [_PNa],
  [
    [
      0,
      {
        [_jN]: _pNa,
      },
    ],
  ]
);
export var TimecodeConfig = struct(
  n0,
  _TCi,
  0,
  [_An, _Sou, _Star, _TO],
  [
    [
      0,
      {
        [_jN]: _an,
      },
    ],
    [
      0,
      {
        [_jN]: _sou,
      },
    ],
    [
      0,
      {
        [_jN]: _star,
      },
    ],
    [
      0,
      {
        [_jN]: _tO,
      },
    ],
  ]
);
export var TimedMetadataInsertion = struct(
  n0,
  _TMI,
  0,
  [_IId],
  [
    [
      () => __listOfId3Insertion,
      {
        [_jN]: _iId,
      },
    ],
  ]
);
export var TrackSourceSettings = struct(
  n0,
  _TSSr,
  0,
  [_TN],
  [
    [
      1,
      {
        [_jN]: _tN,
      },
    ],
  ]
);
export var UpdateJobTemplateRequest = struct(
  n0,
  _UJTR,
  0,
  [_AScc, _Ca, _Des, _HD, _N, _Pr, _Q, _Se, _SUI],
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
    [0, 1],
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
  ]
);
export var UpdateJobTemplateResponse = struct(
  n0,
  _UJTRp,
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
export var VideoOverlay = struct(
  n0,
  _VOi,
  0,
  [_Cr, _ET, _IP, _In, _Pl, _STt, _Tra],
  [
    [
      () => VideoOverlayCrop,
      {
        [_jN]: _cr,
      },
    ],
    [
      0,
      {
        [_jN]: _eT,
      },
    ],
    [
      () => VideoOverlayPosition,
      {
        [_jN]: _iP,
      },
    ],
    [
      () => VideoOverlayInput,
      {
        [_jN]: _inpu,
      },
    ],
    [
      0,
      {
        [_jN]: _pl,
      },
    ],
    [
      0,
      {
        [_jN]: _sTt,
      },
    ],
    [
      () => __listOfVideoOverlayTransition,
      {
        [_jN]: _tr,
      },
    ],
  ]
);
export var VideoOverlayCrop = struct(
  n0,
  _VOC,
  0,
  [_H, _Un, _W, _X, _Y],
  [
    [
      1,
      {
        [_jN]: _h,
      },
    ],
    [
      0,
      {
        [_jN]: _un,
      },
    ],
    [
      1,
      {
        [_jN]: _w,
      },
    ],
    [
      1,
      {
        [_jN]: _x,
      },
    ],
    [
      1,
      {
        [_jN]: _y,
      },
    ],
  ]
);
export var VideoOverlayInput = struct(
  n0,
  _VOI,
  0,
  [_FI, _ICn, _TSi, _TSim],
  [
    [
      0,
      {
        [_jN]: _fI,
      },
    ],
    [
      () => __listOfVideoOverlayInputClipping,
      {
        [_jN]: _iCn,
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
  ]
);
export var VideoOverlayInputClipping = struct(
  n0,
  _VOIC,
  0,
  [_ET, _STt],
  [
    [
      0,
      {
        [_jN]: _eT,
      },
    ],
    [
      0,
      {
        [_jN]: _sTt,
      },
    ],
  ]
);
export var VideoOverlayPosition = struct(
  n0,
  _VOP,
  0,
  [_H, _Un, _W, _XP, _YP],
  [
    [
      1,
      {
        [_jN]: _h,
      },
    ],
    [
      0,
      {
        [_jN]: _un,
      },
    ],
    [
      1,
      {
        [_jN]: _w,
      },
    ],
    [
      1,
      {
        [_jN]: _xP,
      },
    ],
    [
      1,
      {
        [_jN]: _yP,
      },
    ],
  ]
);
export var VideoOverlayTransition = struct(
  n0,
  _VOT,
  0,
  [_EPn, _ET, _STt],
  [
    [
      () => VideoOverlayPosition,
      {
        [_jN]: _ePn,
      },
    ],
    [
      0,
      {
        [_jN]: _eT,
      },
    ],
    [
      0,
      {
        [_jN]: _sTt,
      },
    ],
  ]
);
export var VideoSelector = struct(
  n0,
  _VSi,
  0,
  [_ABl, _CSol, _CSU, _ETO, _HM, _ML, _PV, _Pi, _PNr, _Rot, _SRa, _ST, _Str],
  [
    [
      0,
      {
        [_jN]: _aBl,
      },
    ],
    [
      0,
      {
        [_jN]: _cSol,
      },
    ],
    [
      0,
      {
        [_jN]: _cSU,
      },
    ],
    [
      0,
      {
        [_jN]: _eTO,
      },
    ],
    [
      () => Hdr10Metadata,
      {
        [_jN]: _hM,
      },
    ],
    [
      1,
      {
        [_jN]: _mL,
      },
    ],
    [
      0,
      {
        [_jN]: _pV,
      },
    ],
    [
      1,
      {
        [_jN]: _pi,
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
        [_jN]: _rot,
      },
    ],
    [
      0,
      {
        [_jN]: _sRa,
      },
    ],
    [
      0,
      {
        [_jN]: _sT,
      },
    ],
    [
      64 | 1,
      {
        [_jN]: _str,
      },
    ],
  ]
);
export var WebvttHlsSourceSettings = struct(
  n0,
  _WHSS,
  0,
  [_RGI, _RLC, _RN],
  [
    [
      0,
      {
        [_jN]: _rGI,
      },
    ],
    [
      0,
      {
        [_jN]: _rLC,
      },
    ],
    [
      0,
      {
        [_jN]: _rN,
      },
    ],
  ]
);
export var __listOf__integerMin1Max2147483647 = 64 | 1;

export var __listOf__stringMin1 = 64 | 0;

export var __listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12 = 64 | 0;

export var __listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12 = 64 | 0;

export var __listOfAllowedRenditionSize = list(n0, _lOARS, 0, [() => AllowedRenditionSize, 0]);
export var __listOfAutomatedAbrRule = list(n0, _lOAAR, 0, [() => AutomatedAbrRule, 0]);
export var __listOfCaptionDescription = list(n0, _lOCD, 0, [() => CaptionDescription, 0]);
export var __listOfCmafAdditionalManifest = list(n0, _lOCAM, 0, [() => CmafAdditionalManifest, 0]);
export var __listOfColorConversion3DLUTSetting = list(n0, _lOCCDLUTS, 0, [() => ColorConversion3DLUTSetting, 0]);
export var __listOfDashAdditionalManifest = list(n0, _lODAM, 0, [() => DashAdditionalManifest, 0]);
export var __listOfForceIncludeRenditionSize = list(n0, _lOFIRS, 0, [() => ForceIncludeRenditionSize, 0]);
export var __listOfHlsAdditionalManifest = list(n0, _lOHAM, 0, [() => HlsAdditionalManifest, 0]);
export var __listOfHlsAdMarkers = 64 | 0;

export var __listOfHlsCaptionLanguageMapping = list(n0, _lOHCLM, 0, [() => HlsCaptionLanguageMapping, 0]);
export var __listOfHopDestination = list(n0, _lOHD, 0, [() => HopDestination, 0]);
export var __listOfId3Insertion = list(n0, _lOII, 0, [() => Id3Insertion, 0]);
export var __listOfInputClipping = list(n0, _lOIC, 0, [() => InputClipping, 0]);
export var __listOfInputTemplate = list(n0, _lOIT, 0, [() => InputTemplate, 0]);
export var __listOfJobTemplate = list(n0, _lOJT, 0, [() => JobTemplate, 0]);
export var __listOfMsSmoothAdditionalManifest = list(n0, _lOMSAM, 0, [() => MsSmoothAdditionalManifest, 0]);
export var __listOfOutput = list(n0, _lOO, 0, [() => Output, 0]);
export var __listOfOutputGroup = list(n0, _lOOG, 0, [() => OutputGroup, 0]);
export var __listOfVideoOverlay = list(n0, _lOVO, 0, [() => VideoOverlay, 0]);
export var __listOfVideoOverlayInputClipping = list(n0, _lOVOIC, 0, [() => VideoOverlayInputClipping, 0]);
export var __listOfVideoOverlayTransition = list(n0, _lOVOT, 0, [() => VideoOverlayTransition, 0]);
export var __mapOfAudioSelector = map(n0, _mOAS, 0, [0, 0], [() => AudioSelector, 0]);
export var __mapOfAudioSelectorGroup = map(n0, _mOASG, 0, [0, 0], [() => AudioSelectorGroup, 0]);
export var __mapOfCaptionSelector = map(n0, _mOCS, 0, [0, 0], [() => CaptionSelector, 0]);
export var __mapOfDynamicAudioSelector = map(n0, _mODAS, 0, [0, 0], [() => DynamicAudioSelector, 0]);
export var GetJobTemplate = op(
  n0,
  _GJT,
  {
    [_ht]: ["GET", "/2017-08-29/jobTemplates/{Name}", 200],
  },
  () => GetJobTemplateRequest,
  () => GetJobTemplateResponse
);
export var ListJobTemplates = op(
  n0,
  _LJT,
  {
    [_ht]: ["GET", "/2017-08-29/jobTemplates", 200],
  },
  () => ListJobTemplatesRequest,
  () => ListJobTemplatesResponse
);
export var UpdateJobTemplate = op(
  n0,
  _UJT,
  {
    [_ht]: ["PUT", "/2017-08-29/jobTemplates/{Name}", 200],
  },
  () => UpdateJobTemplateRequest,
  () => UpdateJobTemplateResponse
);
