// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import {
  _AA,
  _aA,
  _ABM,
  _aBM,
  _AC,
  _Ac,
  _aC,
  _ac,
  _ACH,
  _aCH,
  _ACS,
  _ACt,
  _aCt,
  _ACTS,
  _aCTS,
  _AD,
  _aD,
  _ADAC,
  _aDAC,
  _ADBM,
  _aDBM,
  _ADDC,
  _aDDC,
  _ADM,
  _aDM,
  _ADu,
  _AFC,
  _aFC,
  _AFPP,
  _aFPP,
  _AGI,
  _aGI,
  _AIC,
  _aIC,
  _AIS,
  _aIS,
  _AIUS,
  _aIUS,
  _Al,
  _al,
  _Ali,
  _ali,
  _AMg,
  _aMg,
  _ANS,
  _aNS,
  _aP,
  _APOD,
  _aPOD,
  _APu,
  _AQ,
  _aQ,
  _AQS,
  _aRS,
  _ARSu,
  _AS,
  _aS,
  _ASc,
  _aSc,
  _ASf,
  _aSf,
  _ASi,
  _aSi,
  _ASN,
  _aSN,
  _ASv,
  _aSv,
  _ATC,
  _aTC,
  _ATFS,
  _aTFS,
  _ATT,
  _aTT,
  _ATu,
  _aTu,
  _B,
  _b,
  _BC,
  _bC,
  _BCi,
  _bCi,
  _BD,
  _bD,
  _BDS,
  _bDS,
  _BM,
  _bM,
  _BMu,
  _bMu,
  _BO,
  _bO,
  _BPX,
  _bPX,
  _BPY,
  _bPY,
  _Br,
  _br,
  _BRF,
  _bRF,
  _C,
  _c,
  _CAl,
  _cAl,
  _CAs,
  _cAs,
  _CCo,
  _cCo,
  _CCT,
  _cCT,
  _CDS,
  _CGL,
  _cGL,
  _CI,
  _cI,
  _CL,
  _cL,
  _CLC,
  _cLC,
  _CLo,
  _cLo,
  _CM,
  _cM,
  _CMh,
  _cMh,
  _CMo,
  _cMo,
  _CMp,
  _cMp,
  _CO,
  _Co,
  _cO,
  _co,
  _Con,
  _con,
  _Cont,
  _cont,
  _Contr,
  _contr,
  _CP,
  _cP,
  _CPM,
  _cPM,
  _Cr,
  _cr,
  _CS,
  _cS,
  _CSC,
  _cSC,
  _CSe,
  _cSe,
  _CSh,
  _cSh,
  _CSm,
  _cSm,
  _CSon,
  _CTh,
  _cTh,
  _CTha,
  _cTha,
  _CV,
  _cV,
  _D,
  _d,
  _DC,
  _dC,
  _DCN,
  _dCN,
  _Deb,
  _deb,
  _Dei,
  _dei,
  _DF,
  _dF,
  _DFT,
  _dFT,
  _DH,
  _dH,
  _DI,
  _dI,
  _DMu,
  _dMu,
  _DNS,
  _dNS,
  _DPTSC,
  _dPTSC,
  _DRC,
  _dRC,
  _DRCL,
  _dRCL,
  _DRCP,
  _dRCP,
  _DRCR,
  _dRCR,
  _DSDS,
  _dSDS,
  _DSG,
  _dSG,
  _DSN,
  _dSN,
  _DSP,
  _dSP,
  _DSS,
  _dSS,
  _DT,
  _dT,
  _DTP,
  _dTP,
  _DTS,
  _dTS,
  _Du,
  _du,
  _DV,
  _dV,
  _DVLM,
  _DVSF,
  _dVSF,
  _DXC,
  _dXC,
  _DYC,
  _dYC,
  _EAI,
  _eAI,
  _EAS,
  _eAS,
  _EDS,
  _eDS,
  _EE,
  _eE,
  _EOSM,
  _eOSM,
  _EP,
  _eP,
  _ERIP,
  _eRIP,
  _ES,
  _eS,
  _F,
  _f,
  _FA,
  _fA,
  _FAQ,
  _fAQ,
  _FC,
  _fC,
  _FCA,
  _fCA,
  _FCo,
  _fCo,
  _FCS,
  _fCS,
  _FD,
  _fD,
  _fE,
  _FEi,
  _FF,
  _fF,
  _FFB,
  _fFB,
  _FFBI,
  _fFBI,
  _FFI,
  _fFI,
  _FFR,
  _fFR,
  _FGS,
  _fGS,
  _Fi,
  _fi,
  _FIa,
  _fIa,
  _FN,
  _fN,
  _FO,
  _Fo,
  _fO,
  _fo,
  _FOa,
  _fOa,
  _Fr,
  _fr,
  _FRo,
  _fRo,
  _FS,
  _fS,
  _FSB,
  _fSB,
  _FSilt,
  _fSilt,
  _FSo,
  _fSo,
  _FSon,
  _fSon,
  _FSv,
  _fSv,
  _FT,
  _fT,
  _FTVEO,
  _fTVEO,
  _GBR,
  _gBR,
  _GCC,
  _gCC,
  _GPX,
  _gPX,
  _GPY,
  _gPY,
  _GS,
  _gS,
  _GSi,
  _gSi,
  _GSU,
  _gSU,
  _H,
  _h,
  _HBFFP,
  _hBFFP,
  _HBIFP,
  _hBIFP,
  _HBS,
  _hBS,
  _HFC,
  _hFC,
  _HM,
  _hM,
  _HP,
  _hP,
  _HQS,
  _HQSv,
  _HS,
  _HSe,
  _hSe,
  _hSet,
  _HTSTM,
  _hTSTM,
  _Hu,
  _hu,
  _ICFT,
  _iCFT,
  _iCnp,
  _ICnpu,
  _IDP,
  _iDP,
  _IDS,
  _iDS,
  _IFOM,
  _iFOM,
  _iI,
  _III,
  _iII,
  _IIm,
  _iIm,
  _IIn,
  _IIns,
  _IM,
  _iM,
  _IX,
  _iX,
  _IY,
  _iY,
  _jN,
  _KM,
  _kM,
  _L,
  _l,
  _LC,
  _lC,
  _LCC,
  _lCC,
  _LCf,
  _lCf,
  _LF,
  _lF,
  _Li,
  _li,
  _LL,
  _lL,
  _LM,
  _lM,
  _LMM,
  _lMM,
  _LMo,
  _lMo,
  _lOAD,
  _lOIIi,
  _lOOCM,
  _LRCML,
  _lRCML,
  _LRCMLt,
  _lRCMLt,
  _LRSML,
  _lRSML,
  _LRSMLt,
  _lRSMLt,
  _M,
  _m,
  _Ma,
  _ma,
  _MABa,
  _mABa,
  _MADS,
  _mADS,
  _MB,
  _mB,
  _MC,
  _mC,
  _MCax,
  _mCax,
  _MCaxa,
  _mCaxa,
  _MCLL,
  _mCLL,
  _MEI,
  _mEI,
  _MF,
  _mF,
  _MFALL,
  _mFALL,
  _MFCCC,
  _mFCCC,
  _MII,
  _mII,
  _ML,
  _mL,
  _MLi,
  _mLi,
  _MM,
  _mM,
  _MMB,
  _mMB,
  _MMN,
  _mMN,
  _MMS,
  _mMS,
  _MPI,
  _mPI,
  _MPo,
  _mPo,
  _MRGBT,
  _mRGBT,
  _MRGBTi,
  _mRGBTi,
  _MS,
  _mS,
  _MSE,
  _MSo,
  _mSo,
  _MSp,
  _mSp,
  _MSpd,
  _mSpd,
  _MSpe,
  _mSpe,
  _MSpeg,
  _mSpeg,
  _MSt,
  _mSt,
  _MSu,
  _mSu,
  _MSx,
  _mSx,
  _MXPS,
  _MYUV,
  _mYUV,
  _MYUVi,
  _mYUVi,
  _NBFBRF,
  _nBFBRF,
  _NFMS,
  _nFMS,
  _NGFMS,
  _NI,
  _nI,
  _NIi,
  _nIi,
  _NIie,
  _nIie,
  _NN,
  _nN,
  _NPB,
  _nPB,
  _NR,
  _nR,
  _NRF,
  _nRF,
  _NRFS,
  _NRSFS,
  _NRTFS,
  _OC,
  _oC,
  _OCM,
  _OCu,
  _oCu,
  _Op,
  _op,
  _OS,
  _oS,
  _OSu,
  _oSu,
  _OSut,
  _oSut,
  _Pa,
  _pa,
  _PBU,
  _pBU,
  _PC,
  _pC,
  _PCa,
  _pCa,
  _PCad,
  _pCad,
  _PCar,
  _pCar,
  _PCc,
  _pCc,
  _PCh,
  _pCh,
  _PD,
  _pD,
  _PFM,
  _pFM,
  _PFSS,
  _pFSS,
  _PI,
  _pI,
  _PIm,
  _pIm,
  _PMP,
  _pMP,
  _PN,
  _pN,
  _PNa,
  _pNa,
  _PNr,
  _pNr,
  _PO,
  _pO,
  _POM,
  _pOM,
  _Pos,
  _pos,
  _PPc,
  _pPc,
  _PPm,
  _pPm,
  _Pre,
  _pre,
  _Pref,
  _pref,
  _Pro,
  _pro,
  _pSr,
  _PSro,
  _PT,
  _pT,
  _PTS,
  _pTS,
  _PTSS,
  _pTSS,
  _PW,
  _pW,
  _QQL,
  _qQL,
  _QQLFT,
  _qQLFT,
  _QS,
  _qS,
  _QTL,
  _qTL,
  _Qu,
  _qu,
  _RCM,
  _rCM,
  _Re,
  _re,
  _Rec,
  _RF,
  _rF,
  _RI,
  _rI,
  _RM,
  _rM,
  _RP,
  _rP,
  _RPX,
  _rPX,
  _RPY,
  _rPY,
  _RRRA,
  _rRRA,
  _RS,
  _rS,
  _RTA,
  _rTA,
  _S,
  _s,
  _Sa,
  _sa,
  _SAE,
  _sAE,
  _SAOFM,
  _sAOFM,
  _SAQ,
  _sAQ,
  _SB,
  _sB,
  _SC,
  _sC,
  _SCD,
  _sCD,
  _SD,
  _sD,
  _SDS,
  _sDS,
  _SDSr,
  _sDSr,
  _SE,
  _sE,
  _SEM,
  _sEM,
  _SEP,
  _sEP,
  _SFS,
  _sFS,
  _Sh,
  _sh,
  _Sha,
  _sha,
  _SI,
  _sI,
  _SKK,
  _sKK,
  _Sl,
  _sl,
  _SM,
  _sM,
  _SMeg,
  _sMeg,
  _SN,
  _sN,
  _SNe,
  _sNe,
  _SO,
  _So,
  _sO,
  _so,
  _SP,
  _Sp,
  _sP,
  _sp,
  _SPc,
  _sPc,
  _SPN,
  _sPN,
  _SPt,
  _sPt,
  _SR,
  _sR,
  _SRC,
  _sRC,
  _SRWL,
  _sRWL,
  _SSc,
  _sSc,
  _SSeg,
  _sSeg,
  _St,
  _st,
  _STCM,
  _sTCM,
  _STe,
  _sTe,
  _STp,
  _sTp,
  _STta,
  _sTta,
  _STu,
  _sTu,
  _SXO,
  _sXO,
  _Sy,
  _sy,
  _SYO,
  _sYO,
  _TAQ,
  _tAQ,
  _TB,
  _tB,
  _TDS,
  _tDS,
  _TDSt,
  _tDSt,
  _Te,
  _te,
  _TFS,
  _tFS,
  _Ti,
  _ti,
  _TId,
  _tId,
  _TIe,
  _tIe,
  _TIi,
  _tIi,
  _TL,
  _tL,
  _TLR,
  _tLR,
  _TM,
  _tM,
  _TMBV,
  _tMBV,
  _TMN,
  _tMN,
  _TMP,
  _tMP,
  _TMSIU,
  _tMSIU,
  _TMV,
  _tMV,
  _TPLT,
  _tPLT,
  _TS,
  _tS,
  _TSI,
  _tSI,
  _TTi,
  _tTi,
  _US,
  _uS,
  _UST,
  _uST,
  _VC,
  _vC,
  _VCS,
  _VD,
  _VP,
  _vP,
  _VPid,
  _vPid,
  _VPide,
  _VQ,
  _vQ,
  _VS,
  _vS,
  _VSc,
  _vSc,
  _VSp,
  _vSp,
  _VSpe,
  _vSpe,
  _W,
  _w,
  _WDS,
  _wDS,
  _WMPT,
  _wMPT,
  _WPX,
  _wPX,
  _WPY,
  _wPY,
  _WS,
  _wS,
  _X,
  _x,
  _XC,
  _xC,
  _XHICPS,
  _xHICPS,
  _XHPS,
  _xHPS,
  _XICPS,
  _xICPS,
  _XIVPS,
  _xIVPS,
  _XP,
  _xP,
  _XPS,
  _xPS,
  _XPSa,
  _xPSa,
  _XS,
  _xS,
  _Y,
  _y,
  _YP,
  _yP,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AacSettings = struct(
  n0,
  _AS,
  0,
  [_ADBM, _B, _CP, _CM, _LMM, _RI, _RCM, _RF, _SR, _S, _TLR, _VQ],
  [
    [
      0,
      {
        [_jN]: _aDBM,
      },
    ],
    [
      1,
      {
        [_jN]: _b,
      },
    ],
    [
      0,
      {
        [_jN]: _cP,
      },
    ],
    [
      0,
      {
        [_jN]: _cM,
      },
    ],
    [
      0,
      {
        [_jN]: _lMM,
      },
    ],
    [
      1,
      {
        [_jN]: _rI,
      },
    ],
    [
      0,
      {
        [_jN]: _rCM,
      },
    ],
    [
      0,
      {
        [_jN]: _rF,
      },
    ],
    [
      1,
      {
        [_jN]: _sR,
      },
    ],
    [
      0,
      {
        [_jN]: _s,
      },
    ],
    [
      1,
      {
        [_jN]: _tLR,
      },
    ],
    [
      0,
      {
        [_jN]: _vQ,
      },
    ],
  ]
);
export var Ac3Settings = struct(
  n0,
  _ASc,
  0,
  [_B, _BM, _CM, _D, _DRCL, _DRCP, _DRCR, _LF, _MC, _SR],
  [
    [
      1,
      {
        [_jN]: _b,
      },
    ],
    [
      0,
      {
        [_jN]: _bM,
      },
    ],
    [
      0,
      {
        [_jN]: _cM,
      },
    ],
    [
      1,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _dRCL,
      },
    ],
    [
      0,
      {
        [_jN]: _dRCP,
      },
    ],
    [
      0,
      {
        [_jN]: _dRCR,
      },
    ],
    [
      0,
      {
        [_jN]: _lF,
      },
    ],
    [
      0,
      {
        [_jN]: _mC,
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
export var AiffSettings = struct(
  n0,
  _ASi,
  0,
  [_BD, _C, _SR],
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
        [_jN]: _c,
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
export var AudioChannelTaggingSettings = struct(
  n0,
  _ACTS,
  0,
  [_CTh, _CTha],
  [
    [
      0,
      {
        [_jN]: _cTh,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _cTha,
      },
    ],
  ]
);
export var AudioCodecSettings = struct(
  n0,
  _ACS,
  0,
  [_AS, _ASc, _ASi, _Co, _EAS, _ES, _FS, _MS, _MSp, _OS, _VS, _WS],
  [
    [
      () => AacSettings,
      {
        [_jN]: _aS,
      },
    ],
    [
      () => Ac3Settings,
      {
        [_jN]: _aSc,
      },
    ],
    [
      () => AiffSettings,
      {
        [_jN]: _aSi,
      },
    ],
    [
      0,
      {
        [_jN]: _co,
      },
    ],
    [
      () => Eac3AtmosSettings,
      {
        [_jN]: _eAS,
      },
    ],
    [
      () => Eac3Settings,
      {
        [_jN]: _eS,
      },
    ],
    [
      () => FlacSettings,
      {
        [_jN]: _fS,
      },
    ],
    [
      () => Mp2Settings,
      {
        [_jN]: _mS,
      },
    ],
    [
      () => Mp3Settings,
      {
        [_jN]: _mSp,
      },
    ],
    [
      () => OpusSettings,
      {
        [_jN]: _oS,
      },
    ],
    [
      () => VorbisSettings,
      {
        [_jN]: _vS,
      },
    ],
    [
      () => WavSettings,
      {
        [_jN]: _wS,
      },
    ],
  ]
);
export var AudioDescription = struct(
  n0,
  _AD,
  0,
  [_ACTS, _ANS, _ASN, _ATu, _ATC, _CS, _CLC, _LC, _LCC, _RS, _SN],
  [
    [
      () => AudioChannelTaggingSettings,
      {
        [_jN]: _aCTS,
      },
    ],
    [
      () => AudioNormalizationSettings,
      {
        [_jN]: _aNS,
      },
    ],
    [
      0,
      {
        [_jN]: _aSN,
      },
    ],
    [
      1,
      {
        [_jN]: _aTu,
      },
    ],
    [
      0,
      {
        [_jN]: _aTC,
      },
    ],
    [
      () => AudioCodecSettings,
      {
        [_jN]: _cS,
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
        [_jN]: _lCC,
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
        [_jN]: _sN,
      },
    ],
  ]
);
export var AudioNormalizationSettings = struct(
  n0,
  _ANS,
  0,
  [_Al, _AC, _CGL, _LL, _PC, _TL, _TPLT],
  [
    [
      0,
      {
        [_jN]: _al,
      },
    ],
    [
      0,
      {
        [_jN]: _aC,
      },
    ],
    [
      1,
      {
        [_jN]: _cGL,
      },
    ],
    [
      0,
      {
        [_jN]: _lL,
      },
    ],
    [
      0,
      {
        [_jN]: _pC,
      },
    ],
    [
      1,
      {
        [_jN]: _tL,
      },
    ],
    [
      1,
      {
        [_jN]: _tPLT,
      },
    ],
  ]
);
export var Av1QvbrSettings = struct(
  n0,
  _AQS,
  0,
  [_QQL, _QQLFT],
  [
    [
      1,
      {
        [_jN]: _qQL,
      },
    ],
    [
      1,
      {
        [_jN]: _qQLFT,
      },
    ],
  ]
);
export var Av1Settings = struct(
  n0,
  _ASv,
  0,
  [_AQ, _BD, _FGS, _FC, _FCA, _FD, _FN, _GS, _MB, _NBFBRF, _PFM, _QS, _RCM, _Sl, _SAQ],
  [
    [
      0,
      {
        [_jN]: _aQ,
      },
    ],
    [
      0,
      {
        [_jN]: _bD,
      },
    ],
    [
      0,
      {
        [_jN]: _fGS,
      },
    ],
    [
      0,
      {
        [_jN]: _fC,
      },
    ],
    [
      0,
      {
        [_jN]: _fCA,
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
        [_jN]: _gS,
      },
    ],
    [
      1,
      {
        [_jN]: _mB,
      },
    ],
    [
      1,
      {
        [_jN]: _nBFBRF,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _pFM,
      },
    ],
    [
      () => Av1QvbrSettings,
      {
        [_jN]: _qS,
      },
    ],
    [
      0,
      {
        [_jN]: _rCM,
      },
    ],
    [
      1,
      {
        [_jN]: _sl,
      },
    ],
    [
      0,
      {
        [_jN]: _sAQ,
      },
    ],
  ]
);
export var AvcIntraSettings = struct(
  n0,
  _AIS,
  0,
  [_AIC, _AIUS, _FC, _FCA, _FD, _FN, _IM, _PFM, _STCM, _SP, _Te],
  [
    [
      0,
      {
        [_jN]: _aIC,
      },
    ],
    [
      () => AvcIntraUhdSettings,
      {
        [_jN]: _aIUS,
      },
    ],
    [
      0,
      {
        [_jN]: _fC,
      },
    ],
    [
      0,
      {
        [_jN]: _fCA,
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
      0,
      {
        [_jN]: _iM,
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
        [_jN]: _sTCM,
      },
    ],
    [
      0,
      {
        [_jN]: _sP,
      },
    ],
    [
      0,
      {
        [_jN]: _te,
      },
    ],
  ]
);
export var AvcIntraUhdSettings = struct(
  n0,
  _AIUS,
  0,
  [_QTL],
  [
    [
      0,
      {
        [_jN]: _qTL,
      },
    ],
  ]
);
export var BandwidthReductionFilter = struct(
  n0,
  _BRF,
  0,
  [_Sh, _St],
  [
    [
      0,
      {
        [_jN]: _sh,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var BurninDestinationSettings = struct(
  n0,
  _BDS,
  0,
  [
    _Ali,
    _AFC,
    _BC,
    _BO,
    _FF,
    _FCo,
    _FFB,
    _FFBI,
    _FFI,
    _FFR,
    _FO,
    _FRo,
    _FSo,
    _FSon,
    _HFC,
    _OC,
    _OSu,
    _RRRA,
    _SC,
    _SO,
    _SXO,
    _SYO,
    _SPt,
    _TS,
    _XP,
    _YP,
  ],
  [
    [
      0,
      {
        [_jN]: _ali,
      },
    ],
    [
      0,
      {
        [_jN]: _aFC,
      },
    ],
    [
      0,
      {
        [_jN]: _bC,
      },
    ],
    [
      1,
      {
        [_jN]: _bO,
      },
    ],
    [
      0,
      {
        [_jN]: _fF,
      },
    ],
    [
      0,
      {
        [_jN]: _fCo,
      },
    ],
    [
      0,
      {
        [_jN]: _fFB,
      },
    ],
    [
      0,
      {
        [_jN]: _fFBI,
      },
    ],
    [
      0,
      {
        [_jN]: _fFI,
      },
    ],
    [
      0,
      {
        [_jN]: _fFR,
      },
    ],
    [
      1,
      {
        [_jN]: _fO,
      },
    ],
    [
      1,
      {
        [_jN]: _fRo,
      },
    ],
    [
      0,
      {
        [_jN]: _fSo,
      },
    ],
    [
      1,
      {
        [_jN]: _fSon,
      },
    ],
    [
      0,
      {
        [_jN]: _hFC,
      },
    ],
    [
      0,
      {
        [_jN]: _oC,
      },
    ],
    [
      1,
      {
        [_jN]: _oSu,
      },
    ],
    [
      0,
      {
        [_jN]: _rRRA,
      },
    ],
    [
      0,
      {
        [_jN]: _sC,
      },
    ],
    [
      1,
      {
        [_jN]: _sO,
      },
    ],
    [
      1,
      {
        [_jN]: _sXO,
      },
    ],
    [
      1,
      {
        [_jN]: _sYO,
      },
    ],
    [
      0,
      {
        [_jN]: _sPt,
      },
    ],
    [
      0,
      {
        [_jN]: _tS,
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
export var CaptionDestinationSettings = struct(
  n0,
  _CDS,
  0,
  [_BDS, _DT, _DSDS, _EDS, _IDS, _SDS, _SDSr, _TDS, _TDSt, _WDS],
  [
    [
      () => BurninDestinationSettings,
      {
        [_jN]: _bDS,
      },
    ],
    [
      0,
      {
        [_jN]: _dT,
      },
    ],
    [
      () => DvbSubDestinationSettings,
      {
        [_jN]: _dSDS,
      },
    ],
    [
      () => EmbeddedDestinationSettings,
      {
        [_jN]: _eDS,
      },
    ],
    [
      () => ImscDestinationSettings,
      {
        [_jN]: _iDS,
      },
    ],
    [
      () => SccDestinationSettings,
      {
        [_jN]: _sDS,
      },
    ],
    [
      () => SrtDestinationSettings,
      {
        [_jN]: _sDSr,
      },
    ],
    [
      () => TeletextDestinationSettings,
      {
        [_jN]: _tDS,
      },
    ],
    [
      () => TtmlDestinationSettings,
      {
        [_jN]: _tDSt,
      },
    ],
    [
      () => WebvttDestinationSettings,
      {
        [_jN]: _wDS,
      },
    ],
  ]
);
export var ChannelMapping = struct(
  n0,
  _CMh,
  0,
  [_OCu],
  [
    [
      () => __listOfOutputChannelMapping,
      {
        [_jN]: _oCu,
      },
    ],
  ]
);
export var ClipLimits = struct(
  n0,
  _CL,
  0,
  [_MRGBT, _MYUV, _MRGBTi, _MYUVi],
  [
    [
      1,
      {
        [_jN]: _mRGBT,
      },
    ],
    [
      1,
      {
        [_jN]: _mYUV,
      },
    ],
    [
      1,
      {
        [_jN]: _mRGBTi,
      },
    ],
    [
      1,
      {
        [_jN]: _mYUVi,
      },
    ],
  ]
);
export var CmfcSettings = struct(
  n0,
  _CSm,
  0,
  [_ADu, _AGI, _ARSu, _ATT, _DVSF, _IFOM, _KM, _MMS, _SE, _SSc, _TM, _TMBV, _TMSIU, _TMV],
  [
    [
      0,
      {
        [_jN]: _aD,
      },
    ],
    [
      0,
      {
        [_jN]: _aGI,
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
        [_jN]: _kM,
      },
    ],
    [
      0,
      {
        [_jN]: _mMS,
      },
    ],
    [
      0,
      {
        [_jN]: _sE,
      },
    ],
    [
      0,
      {
        [_jN]: _sSc,
      },
    ],
    [
      0,
      {
        [_jN]: _tM,
      },
    ],
    [
      0,
      {
        [_jN]: _tMBV,
      },
    ],
    [
      0,
      {
        [_jN]: _tMSIU,
      },
    ],
    [
      0,
      {
        [_jN]: _tMV,
      },
    ],
  ]
);
export var ColorCorrector = struct(
  n0,
  _CCo,
  0,
  [_Br, _CL, _CSC, _Con, _HM, _HTSTM, _Hu, _ML, _SRC, _Sa, _SRWL],
  [
    [
      1,
      {
        [_jN]: _br,
      },
    ],
    [
      () => ClipLimits,
      {
        [_jN]: _cL,
      },
    ],
    [
      0,
      {
        [_jN]: _cSC,
      },
    ],
    [
      1,
      {
        [_jN]: _con,
      },
    ],
    [
      () => Hdr10Metadata,
      {
        [_jN]: _hM,
      },
    ],
    [
      0,
      {
        [_jN]: _hTSTM,
      },
    ],
    [
      1,
      {
        [_jN]: _hu,
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
        [_jN]: _sRC,
      },
    ],
    [
      1,
      {
        [_jN]: _sa,
      },
    ],
    [
      1,
      {
        [_jN]: _sRWL,
      },
    ],
  ]
);
export var ContainerSettings = struct(
  n0,
  _CSon,
  0,
  [_CSm, _Cont, _FSv, _MSt, _MSu, _MSo, _MSpe, _MSpd, _MSx],
  [
    [
      () => CmfcSettings,
      {
        [_jN]: _cSm,
      },
    ],
    [
      0,
      {
        [_jN]: _cont,
      },
    ],
    [
      () => F4vSettings,
      {
        [_jN]: _fSv,
      },
    ],
    [
      () => M2tsSettings,
      {
        [_jN]: _mSt,
      },
    ],
    [
      () => M3u8Settings,
      {
        [_jN]: _mSu,
      },
    ],
    [
      () => MovSettings,
      {
        [_jN]: _mSo,
      },
    ],
    [
      () => Mp4Settings,
      {
        [_jN]: _mSpe,
      },
    ],
    [
      () => MpdSettings,
      {
        [_jN]: _mSpd,
      },
    ],
    [
      () => MxfSettings,
      {
        [_jN]: _mSx,
      },
    ],
  ]
);
export var Deinterlacer = struct(
  n0,
  _Dei,
  0,
  [_Al, _Contr, _M],
  [
    [
      0,
      {
        [_jN]: _al,
      },
    ],
    [
      0,
      {
        [_jN]: _contr,
      },
    ],
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ]
);
export var DolbyVision = struct(
  n0,
  _DV,
  0,
  [_LM, _LMo, _Ma, _Pro],
  [
    [
      () => DolbyVisionLevel6Metadata,
      {
        [_jN]: _lM,
      },
    ],
    [
      0,
      {
        [_jN]: _lMo,
      },
    ],
    [
      0,
      {
        [_jN]: _ma,
      },
    ],
    [
      0,
      {
        [_jN]: _pro,
      },
    ],
  ]
);
export var DolbyVisionLevel6Metadata = struct(
  n0,
  _DVLM,
  0,
  [_MCax, _MF],
  [
    [
      1,
      {
        [_jN]: _mCax,
      },
    ],
    [
      1,
      {
        [_jN]: _mF,
      },
    ],
  ]
);
export var DvbNitSettings = struct(
  n0,
  _DNS,
  0,
  [_NI, _NN, _NIi],
  [
    [
      1,
      {
        [_jN]: _nI,
      },
    ],
    [
      0,
      {
        [_jN]: _nN,
      },
    ],
    [
      1,
      {
        [_jN]: _nIi,
      },
    ],
  ]
);
export var DvbSdtSettings = struct(
  n0,
  _DSS,
  0,
  [_OSut, _SI, _SNe, _SPN],
  [
    [
      0,
      {
        [_jN]: _oSut,
      },
    ],
    [
      1,
      {
        [_jN]: _sI,
      },
    ],
    [
      0,
      {
        [_jN]: _sNe,
      },
    ],
    [
      0,
      {
        [_jN]: _sPN,
      },
    ],
  ]
);
export var DvbSubDestinationSettings = struct(
  n0,
  _DSDS,
  0,
  [
    _Ali,
    _AFC,
    _BC,
    _BO,
    _DH,
    _DXC,
    _DYC,
    _FF,
    _FCo,
    _FFB,
    _FFBI,
    _FFI,
    _FFR,
    _FO,
    _FRo,
    _FSo,
    _FSon,
    _H,
    _HFC,
    _OC,
    _OSu,
    _SC,
    _SO,
    _SXO,
    _SYO,
    _SPt,
    _STu,
    _TS,
    _W,
    _XP,
    _YP,
  ],
  [
    [
      0,
      {
        [_jN]: _ali,
      },
    ],
    [
      0,
      {
        [_jN]: _aFC,
      },
    ],
    [
      0,
      {
        [_jN]: _bC,
      },
    ],
    [
      1,
      {
        [_jN]: _bO,
      },
    ],
    [
      0,
      {
        [_jN]: _dH,
      },
    ],
    [
      1,
      {
        [_jN]: _dXC,
      },
    ],
    [
      1,
      {
        [_jN]: _dYC,
      },
    ],
    [
      0,
      {
        [_jN]: _fF,
      },
    ],
    [
      0,
      {
        [_jN]: _fCo,
      },
    ],
    [
      0,
      {
        [_jN]: _fFB,
      },
    ],
    [
      0,
      {
        [_jN]: _fFBI,
      },
    ],
    [
      0,
      {
        [_jN]: _fFI,
      },
    ],
    [
      0,
      {
        [_jN]: _fFR,
      },
    ],
    [
      1,
      {
        [_jN]: _fO,
      },
    ],
    [
      1,
      {
        [_jN]: _fRo,
      },
    ],
    [
      0,
      {
        [_jN]: _fSo,
      },
    ],
    [
      1,
      {
        [_jN]: _fSon,
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
        [_jN]: _hFC,
      },
    ],
    [
      0,
      {
        [_jN]: _oC,
      },
    ],
    [
      1,
      {
        [_jN]: _oSu,
      },
    ],
    [
      0,
      {
        [_jN]: _sC,
      },
    ],
    [
      1,
      {
        [_jN]: _sO,
      },
    ],
    [
      1,
      {
        [_jN]: _sXO,
      },
    ],
    [
      1,
      {
        [_jN]: _sYO,
      },
    ],
    [
      0,
      {
        [_jN]: _sPt,
      },
    ],
    [
      0,
      {
        [_jN]: _sTu,
      },
    ],
    [
      0,
      {
        [_jN]: _tS,
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
export var DvbTdtSettings = struct(
  n0,
  _DTS,
  0,
  [_TId],
  [
    [
      1,
      {
        [_jN]: _tId,
      },
    ],
  ]
);
export var Eac3AtmosSettings = struct(
  n0,
  _EAS,
  0,
  [_B, _BM, _CM, _DI, _DC, _DRCL, _DRCR, _DRC, _LRCML, _LRSML, _LRCMLt, _LRSMLt, _MM, _SR, _STp, _SD, _SEM],
  [
    [
      1,
      {
        [_jN]: _b,
      },
    ],
    [
      0,
      {
        [_jN]: _bM,
      },
    ],
    [
      0,
      {
        [_jN]: _cM,
      },
    ],
    [
      0,
      {
        [_jN]: _dI,
      },
    ],
    [
      0,
      {
        [_jN]: _dC,
      },
    ],
    [
      0,
      {
        [_jN]: _dRCL,
      },
    ],
    [
      0,
      {
        [_jN]: _dRCR,
      },
    ],
    [
      0,
      {
        [_jN]: _dRC,
      },
    ],
    [
      1,
      {
        [_jN]: _lRCML,
      },
    ],
    [
      1,
      {
        [_jN]: _lRSML,
      },
    ],
    [
      1,
      {
        [_jN]: _lRCMLt,
      },
    ],
    [
      1,
      {
        [_jN]: _lRSMLt,
      },
    ],
    [
      0,
      {
        [_jN]: _mM,
      },
    ],
    [
      1,
      {
        [_jN]: _sR,
      },
    ],
    [
      1,
      {
        [_jN]: _sTp,
      },
    ],
    [
      0,
      {
        [_jN]: _sD,
      },
    ],
    [
      0,
      {
        [_jN]: _sEM,
      },
    ],
  ]
);
export var Eac3Settings = struct(
  n0,
  _ES,
  0,
  [
    _ACt,
    _B,
    _BM,
    _CM,
    _DF,
    _D,
    _DRCL,
    _DRCR,
    _LCf,
    _LF,
    _LRCML,
    _LRSML,
    _LRCMLt,
    _LRSMLt,
    _MC,
    _PCa,
    _PCh,
    _SR,
    _SD,
    _SEM,
    _SM,
  ],
  [
    [
      0,
      {
        [_jN]: _aCt,
      },
    ],
    [
      1,
      {
        [_jN]: _b,
      },
    ],
    [
      0,
      {
        [_jN]: _bM,
      },
    ],
    [
      0,
      {
        [_jN]: _cM,
      },
    ],
    [
      0,
      {
        [_jN]: _dF,
      },
    ],
    [
      1,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _dRCL,
      },
    ],
    [
      0,
      {
        [_jN]: _dRCR,
      },
    ],
    [
      0,
      {
        [_jN]: _lCf,
      },
    ],
    [
      0,
      {
        [_jN]: _lF,
      },
    ],
    [
      1,
      {
        [_jN]: _lRCML,
      },
    ],
    [
      1,
      {
        [_jN]: _lRSML,
      },
    ],
    [
      1,
      {
        [_jN]: _lRCMLt,
      },
    ],
    [
      1,
      {
        [_jN]: _lRSMLt,
      },
    ],
    [
      0,
      {
        [_jN]: _mC,
      },
    ],
    [
      0,
      {
        [_jN]: _pCa,
      },
    ],
    [
      0,
      {
        [_jN]: _pCh,
      },
    ],
    [
      1,
      {
        [_jN]: _sR,
      },
    ],
    [
      0,
      {
        [_jN]: _sD,
      },
    ],
    [
      0,
      {
        [_jN]: _sEM,
      },
    ],
    [
      0,
      {
        [_jN]: _sM,
      },
    ],
  ]
);
export var EmbeddedDestinationSettings = struct(
  n0,
  _EDS,
  0,
  [_DCN, _DSN],
  [
    [
      1,
      {
        [_jN]: _dCN,
      },
    ],
    [
      1,
      {
        [_jN]: _dSN,
      },
    ],
  ]
);
export var F4vSettings = struct(
  n0,
  _FSv,
  0,
  [_MPo],
  [
    [
      0,
      {
        [_jN]: _mPo,
      },
    ],
  ]
);
export var FlacSettings = struct(
  n0,
  _FS,
  0,
  [_BD, _C, _SR],
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
        [_jN]: _c,
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
export var FrameCaptureSettings = struct(
  n0,
  _FCS,
  0,
  [_FD, _FN, _MCaxa, _Qu],
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
    [
      1,
      {
        [_jN]: _mCaxa,
      },
    ],
    [
      1,
      {
        [_jN]: _qu,
      },
    ],
  ]
);
export var GifSettings = struct(
  n0,
  _GSi,
  0,
  [_FC, _FCA, _FD, _FN],
  [
    [
      0,
      {
        [_jN]: _fC,
      },
    ],
    [
      0,
      {
        [_jN]: _fCA,
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
  ]
);
export var H264QvbrSettings = struct(
  n0,
  _HQS,
  0,
  [_MABa, _QQL, _QQLFT],
  [
    [
      1,
      {
        [_jN]: _mABa,
      },
    ],
    [
      1,
      {
        [_jN]: _qQL,
      },
    ],
    [
      1,
      {
        [_jN]: _qQLFT,
      },
    ],
  ]
);
export var H264Settings = struct(
  n0,
  _HS,
  0,
  [
    _AQ,
    _BRF,
    _B,
    _CLo,
    _CP,
    _DSG,
    _EOSM,
    _EE,
    _FEi,
    _FAQ,
    _FC,
    _FCA,
    _FD,
    _FN,
    _GBR,
    _GCC,
    _GS,
    _GSU,
    _HBFFP,
    _HBIFP,
    _HBS,
    _IM,
    _MB,
    _MII,
    _NBFBRF,
    _NRF,
    _PCar,
    _PD,
    _PN,
    _PFM,
    _QTL,
    _QS,
    _RCM,
    _RP,
    _SAE,
    _STCM,
    _SCD,
    _Sl,
    _SP,
    _So,
    _SAQ,
    _Sy,
    _Te,
    _TAQ,
    _UST,
    _WMPT,
  ],
  [
    [
      0,
      {
        [_jN]: _aQ,
      },
    ],
    [
      () => BandwidthReductionFilter,
      {
        [_jN]: _bRF,
      },
    ],
    [
      1,
      {
        [_jN]: _b,
      },
    ],
    [
      0,
      {
        [_jN]: _cLo,
      },
    ],
    [
      0,
      {
        [_jN]: _cP,
      },
    ],
    [
      0,
      {
        [_jN]: _dSG,
      },
    ],
    [
      0,
      {
        [_jN]: _eOSM,
      },
    ],
    [
      0,
      {
        [_jN]: _eE,
      },
    ],
    [
      0,
      {
        [_jN]: _fE,
      },
    ],
    [
      0,
      {
        [_jN]: _fAQ,
      },
    ],
    [
      0,
      {
        [_jN]: _fC,
      },
    ],
    [
      0,
      {
        [_jN]: _fCA,
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
      0,
      {
        [_jN]: _gBR,
      },
    ],
    [
      1,
      {
        [_jN]: _gCC,
      },
    ],
    [
      1,
      {
        [_jN]: _gS,
      },
    ],
    [
      0,
      {
        [_jN]: _gSU,
      },
    ],
    [
      1,
      {
        [_jN]: _hBFFP,
      },
    ],
    [
      1,
      {
        [_jN]: _hBIFP,
      },
    ],
    [
      1,
      {
        [_jN]: _hBS,
      },
    ],
    [
      0,
      {
        [_jN]: _iM,
      },
    ],
    [
      1,
      {
        [_jN]: _mB,
      },
    ],
    [
      1,
      {
        [_jN]: _mII,
      },
    ],
    [
      1,
      {
        [_jN]: _nBFBRF,
      },
    ],
    [
      1,
      {
        [_jN]: _nRF,
      },
    ],
    [
      0,
      {
        [_jN]: _pCar,
      },
    ],
    [
      1,
      {
        [_jN]: _pD,
      },
    ],
    [
      1,
      {
        [_jN]: _pN,
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
        [_jN]: _qTL,
      },
    ],
    [
      () => H264QvbrSettings,
      {
        [_jN]: _qS,
      },
    ],
    [
      0,
      {
        [_jN]: _rCM,
      },
    ],
    [
      0,
      {
        [_jN]: _rP,
      },
    ],
    [
      0,
      {
        [_jN]: _sAE,
      },
    ],
    [
      0,
      {
        [_jN]: _sTCM,
      },
    ],
    [
      0,
      {
        [_jN]: _sCD,
      },
    ],
    [
      1,
      {
        [_jN]: _sl,
      },
    ],
    [
      0,
      {
        [_jN]: _sP,
      },
    ],
    [
      1,
      {
        [_jN]: _so,
      },
    ],
    [
      0,
      {
        [_jN]: _sAQ,
      },
    ],
    [
      0,
      {
        [_jN]: _sy,
      },
    ],
    [
      0,
      {
        [_jN]: _te,
      },
    ],
    [
      0,
      {
        [_jN]: _tAQ,
      },
    ],
    [
      0,
      {
        [_jN]: _uST,
      },
    ],
    [
      0,
      {
        [_jN]: _wMPT,
      },
    ],
  ]
);
export var H265QvbrSettings = struct(
  n0,
  _HQSv,
  0,
  [_MABa, _QQL, _QQLFT],
  [
    [
      1,
      {
        [_jN]: _mABa,
      },
    ],
    [
      1,
      {
        [_jN]: _qQL,
      },
    ],
    [
      1,
      {
        [_jN]: _qQLFT,
      },
    ],
  ]
);
export var H265Settings = struct(
  n0,
  _HSe,
  0,
  [
    _AQ,
    _ATFS,
    _BRF,
    _B,
    _CLo,
    _CP,
    _Deb,
    _DSG,
    _EOSM,
    _FAQ,
    _FC,
    _FCA,
    _FD,
    _FN,
    _GBR,
    _GCC,
    _GS,
    _GSU,
    _HBFFP,
    _HBIFP,
    _HBS,
    _IM,
    _MB,
    _MII,
    _NBFBRF,
    _NRF,
    _PCar,
    _PD,
    _PN,
    _PFM,
    _QTL,
    _QS,
    _RCM,
    _SAOFM,
    _STCM,
    _SCD,
    _Sl,
    _SP,
    _SAQ,
    _Te,
    _TAQ,
    _TIe,
    _Ti,
    _UST,
    _WMPT,
  ],
  [
    [
      0,
      {
        [_jN]: _aQ,
      },
    ],
    [
      0,
      {
        [_jN]: _aTFS,
      },
    ],
    [
      () => BandwidthReductionFilter,
      {
        [_jN]: _bRF,
      },
    ],
    [
      1,
      {
        [_jN]: _b,
      },
    ],
    [
      0,
      {
        [_jN]: _cLo,
      },
    ],
    [
      0,
      {
        [_jN]: _cP,
      },
    ],
    [
      0,
      {
        [_jN]: _deb,
      },
    ],
    [
      0,
      {
        [_jN]: _dSG,
      },
    ],
    [
      0,
      {
        [_jN]: _eOSM,
      },
    ],
    [
      0,
      {
        [_jN]: _fAQ,
      },
    ],
    [
      0,
      {
        [_jN]: _fC,
      },
    ],
    [
      0,
      {
        [_jN]: _fCA,
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
      0,
      {
        [_jN]: _gBR,
      },
    ],
    [
      1,
      {
        [_jN]: _gCC,
      },
    ],
    [
      1,
      {
        [_jN]: _gS,
      },
    ],
    [
      0,
      {
        [_jN]: _gSU,
      },
    ],
    [
      1,
      {
        [_jN]: _hBFFP,
      },
    ],
    [
      1,
      {
        [_jN]: _hBIFP,
      },
    ],
    [
      1,
      {
        [_jN]: _hBS,
      },
    ],
    [
      0,
      {
        [_jN]: _iM,
      },
    ],
    [
      1,
      {
        [_jN]: _mB,
      },
    ],
    [
      1,
      {
        [_jN]: _mII,
      },
    ],
    [
      1,
      {
        [_jN]: _nBFBRF,
      },
    ],
    [
      1,
      {
        [_jN]: _nRF,
      },
    ],
    [
      0,
      {
        [_jN]: _pCar,
      },
    ],
    [
      1,
      {
        [_jN]: _pD,
      },
    ],
    [
      1,
      {
        [_jN]: _pN,
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
        [_jN]: _qTL,
      },
    ],
    [
      () => H265QvbrSettings,
      {
        [_jN]: _qS,
      },
    ],
    [
      0,
      {
        [_jN]: _rCM,
      },
    ],
    [
      0,
      {
        [_jN]: _sAOFM,
      },
    ],
    [
      0,
      {
        [_jN]: _sTCM,
      },
    ],
    [
      0,
      {
        [_jN]: _sCD,
      },
    ],
    [
      1,
      {
        [_jN]: _sl,
      },
    ],
    [
      0,
      {
        [_jN]: _sP,
      },
    ],
    [
      0,
      {
        [_jN]: _sAQ,
      },
    ],
    [
      0,
      {
        [_jN]: _te,
      },
    ],
    [
      0,
      {
        [_jN]: _tAQ,
      },
    ],
    [
      0,
      {
        [_jN]: _tIe,
      },
    ],
    [
      0,
      {
        [_jN]: _ti,
      },
    ],
    [
      0,
      {
        [_jN]: _uST,
      },
    ],
    [
      0,
      {
        [_jN]: _wMPT,
      },
    ],
  ]
);
export var Hdr10Metadata = struct(
  n0,
  _HM,
  0,
  [_BPX, _BPY, _GPX, _GPY, _MCLL, _MFALL, _ML, _MLi, _RPX, _RPY, _WPX, _WPY],
  [
    [
      1,
      {
        [_jN]: _bPX,
      },
    ],
    [
      1,
      {
        [_jN]: _bPY,
      },
    ],
    [
      1,
      {
        [_jN]: _gPX,
      },
    ],
    [
      1,
      {
        [_jN]: _gPY,
      },
    ],
    [
      1,
      {
        [_jN]: _mCLL,
      },
    ],
    [
      1,
      {
        [_jN]: _mFALL,
      },
    ],
    [
      1,
      {
        [_jN]: _mL,
      },
    ],
    [
      1,
      {
        [_jN]: _mLi,
      },
    ],
    [
      1,
      {
        [_jN]: _rPX,
      },
    ],
    [
      1,
      {
        [_jN]: _rPY,
      },
    ],
    [
      1,
      {
        [_jN]: _wPX,
      },
    ],
    [
      1,
      {
        [_jN]: _wPY,
      },
    ],
  ]
);
export var Hdr10Plus = struct(
  n0,
  _HP,
  0,
  [_MMN, _TMN],
  [
    [
      1,
      {
        [_jN]: _mMN,
      },
    ],
    [
      1,
      {
        [_jN]: _tMN,
      },
    ],
  ]
);
export var ImageInserter = struct(
  n0,
  _IIm,
  0,
  [_IIn, _SRWL],
  [
    [
      () => __listOfInsertableImage,
      {
        [_jN]: _iI,
      },
    ],
    [
      1,
      {
        [_jN]: _sRWL,
      },
    ],
  ]
);
export var ImscDestinationSettings = struct(
  n0,
  _IDS,
  0,
  [_Ac, _SPt],
  [
    [
      0,
      {
        [_jN]: _ac,
      },
    ],
    [
      0,
      {
        [_jN]: _sPt,
      },
    ],
  ]
);
export var InsertableImage = struct(
  n0,
  _IIns,
  0,
  [_Du, _FIa, _FOa, _H, _III, _IX, _IY, _L, _Op, _STta, _W],
  [
    [
      1,
      {
        [_jN]: _du,
      },
    ],
    [
      1,
      {
        [_jN]: _fIa,
      },
    ],
    [
      1,
      {
        [_jN]: _fOa,
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
        [_jN]: _iII,
      },
    ],
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
    [
      1,
      {
        [_jN]: _l,
      },
    ],
    [
      1,
      {
        [_jN]: _op,
      },
    ],
    [
      0,
      {
        [_jN]: _sTta,
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
export var M2tsScte35Esam = struct(
  n0,
  _MSE,
  0,
  [_SEP],
  [
    [
      1,
      {
        [_jN]: _sEP,
      },
    ],
  ]
);
export var M2tsSettings = struct(
  n0,
  _MSt,
  0,
  [
    _ABM,
    _ADu,
    _AFPP,
    _APu,
    _APOD,
    _B,
    _BMu,
    _DPTSC,
    _DNS,
    _DSS,
    _DSP,
    _DTS,
    _DTP,
    _EAI,
    _EP,
    _ERIP,
    _FTVEO,
    _FT,
    _KM,
    _MPI,
    _MEI,
    _NIie,
    _NPB,
    _PI,
    _PCc,
    _PPc,
    _PIm,
    _PPm,
    _PBU,
    _PMP,
    _PNr,
    _PO,
    _POM,
    _RM,
    _SE,
    _SPc,
    _SSc,
    _SMeg,
    _SSeg,
    _STe,
    _TMP,
    _TSI,
    _VP,
  ],
  [
    [
      0,
      {
        [_jN]: _aBM,
      },
    ],
    [
      0,
      {
        [_jN]: _aD,
      },
    ],
    [
      1,
      {
        [_jN]: _aFPP,
      },
    ],
    [
      64 | 1,
      {
        [_jN]: _aP,
      },
    ],
    [
      1,
      {
        [_jN]: _aPOD,
      },
    ],
    [
      1,
      {
        [_jN]: _b,
      },
    ],
    [
      0,
      {
        [_jN]: _bMu,
      },
    ],
    [
      0,
      {
        [_jN]: _dPTSC,
      },
    ],
    [
      () => DvbNitSettings,
      {
        [_jN]: _dNS,
      },
    ],
    [
      () => DvbSdtSettings,
      {
        [_jN]: _dSS,
      },
    ],
    [
      64 | 1,
      {
        [_jN]: _dSP,
      },
    ],
    [
      () => DvbTdtSettings,
      {
        [_jN]: _dTS,
      },
    ],
    [
      1,
      {
        [_jN]: _dTP,
      },
    ],
    [
      0,
      {
        [_jN]: _eAI,
      },
    ],
    [
      0,
      {
        [_jN]: _eP,
      },
    ],
    [
      0,
      {
        [_jN]: _eRIP,
      },
    ],
    [
      0,
      {
        [_jN]: _fTVEO,
      },
    ],
    [
      1,
      {
        [_jN]: _fT,
      },
    ],
    [
      0,
      {
        [_jN]: _kM,
      },
    ],
    [
      1,
      {
        [_jN]: _mPI,
      },
    ],
    [
      1,
      {
        [_jN]: _mEI,
      },
    ],
    [
      0,
      {
        [_jN]: _nIie,
      },
    ],
    [
      1,
      {
        [_jN]: _nPB,
      },
    ],
    [
      1,
      {
        [_jN]: _pI,
      },
    ],
    [
      0,
      {
        [_jN]: _pCc,
      },
    ],
    [
      1,
      {
        [_jN]: _pPc,
      },
    ],
    [
      1,
      {
        [_jN]: _pIm,
      },
    ],
    [
      1,
      {
        [_jN]: _pPm,
      },
    ],
    [
      0,
      {
        [_jN]: _pBU,
      },
    ],
    [
      1,
      {
        [_jN]: _pMP,
      },
    ],
    [
      1,
      {
        [_jN]: _pNr,
      },
    ],
    [
      1,
      {
        [_jN]: _pO,
      },
    ],
    [
      0,
      {
        [_jN]: _pOM,
      },
    ],
    [
      0,
      {
        [_jN]: _rM,
      },
    ],
    [
      () => M2tsScte35Esam,
      {
        [_jN]: _sE,
      },
    ],
    [
      1,
      {
        [_jN]: _sPc,
      },
    ],
    [
      0,
      {
        [_jN]: _sSc,
      },
    ],
    [
      0,
      {
        [_jN]: _sMeg,
      },
    ],
    [
      0,
      {
        [_jN]: _sSeg,
      },
    ],
    [
      1,
      {
        [_jN]: _sTe,
      },
    ],
    [
      1,
      {
        [_jN]: _tMP,
      },
    ],
    [
      1,
      {
        [_jN]: _tSI,
      },
    ],
    [
      1,
      {
        [_jN]: _vP,
      },
    ],
  ]
);
export var M3u8Settings = struct(
  n0,
  _MSu,
  0,
  [
    _ADu,
    _AFPP,
    _APu,
    _APOD,
    _DPTSC,
    _MPI,
    _NIie,
    _PI,
    _PCc,
    _PPc,
    _PIm,
    _PPm,
    _PMP,
    _PNr,
    _PO,
    _POM,
    _SPc,
    _SSc,
    _TM,
    _TMP,
    _TSI,
    _VP,
  ],
  [
    [
      0,
      {
        [_jN]: _aD,
      },
    ],
    [
      1,
      {
        [_jN]: _aFPP,
      },
    ],
    [
      64 | 1,
      {
        [_jN]: _aP,
      },
    ],
    [
      1,
      {
        [_jN]: _aPOD,
      },
    ],
    [
      0,
      {
        [_jN]: _dPTSC,
      },
    ],
    [
      1,
      {
        [_jN]: _mPI,
      },
    ],
    [
      0,
      {
        [_jN]: _nIie,
      },
    ],
    [
      1,
      {
        [_jN]: _pI,
      },
    ],
    [
      0,
      {
        [_jN]: _pCc,
      },
    ],
    [
      1,
      {
        [_jN]: _pPc,
      },
    ],
    [
      1,
      {
        [_jN]: _pIm,
      },
    ],
    [
      1,
      {
        [_jN]: _pPm,
      },
    ],
    [
      1,
      {
        [_jN]: _pMP,
      },
    ],
    [
      1,
      {
        [_jN]: _pNr,
      },
    ],
    [
      1,
      {
        [_jN]: _pO,
      },
    ],
    [
      0,
      {
        [_jN]: _pOM,
      },
    ],
    [
      1,
      {
        [_jN]: _sPc,
      },
    ],
    [
      0,
      {
        [_jN]: _sSc,
      },
    ],
    [
      0,
      {
        [_jN]: _tM,
      },
    ],
    [
      1,
      {
        [_jN]: _tMP,
      },
    ],
    [
      1,
      {
        [_jN]: _tSI,
      },
    ],
    [
      1,
      {
        [_jN]: _vP,
      },
    ],
  ]
);
export var MovSettings = struct(
  n0,
  _MSo,
  0,
  [_CAl, _CAs, _MFCCC, _PCad, _Re],
  [
    [
      0,
      {
        [_jN]: _cAl,
      },
    ],
    [
      0,
      {
        [_jN]: _cAs,
      },
    ],
    [
      0,
      {
        [_jN]: _mFCCC,
      },
    ],
    [
      0,
      {
        [_jN]: _pCad,
      },
    ],
    [
      0,
      {
        [_jN]: _re,
      },
    ],
  ]
);
export var Mp2Settings = struct(
  n0,
  _MS,
  0,
  [_ADM, _B, _C, _SR],
  [
    [
      0,
      {
        [_jN]: _aDM,
      },
    ],
    [
      1,
      {
        [_jN]: _b,
      },
    ],
    [
      1,
      {
        [_jN]: _c,
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
export var Mp3Settings = struct(
  n0,
  _MSp,
  0,
  [_B, _C, _RCM, _SR, _VQ],
  [
    [
      1,
      {
        [_jN]: _b,
      },
    ],
    [
      1,
      {
        [_jN]: _c,
      },
    ],
    [
      0,
      {
        [_jN]: _rCM,
      },
    ],
    [
      1,
      {
        [_jN]: _sR,
      },
    ],
    [
      1,
      {
        [_jN]: _vQ,
      },
    ],
  ]
);
export var Mp4Settings = struct(
  n0,
  _MSpe,
  0,
  [_ADu, _CMp, _CSe, _CAs, _CV, _FSB, _MPo, _MMB, _SKK],
  [
    [
      0,
      {
        [_jN]: _aD,
      },
    ],
    [
      0,
      {
        [_jN]: _cMp,
      },
    ],
    [
      0,
      {
        [_jN]: _cSe,
      },
    ],
    [
      0,
      {
        [_jN]: _cAs,
      },
    ],
    [
      1,
      {
        [_jN]: _cV,
      },
    ],
    [
      0,
      {
        [_jN]: _fSB,
      },
    ],
    [
      0,
      {
        [_jN]: _mPo,
      },
    ],
    [
      0,
      {
        [_jN]: _mMB,
      },
    ],
    [
      0,
      {
        [_jN]: _sKK,
      },
    ],
  ]
);
export var MpdSettings = struct(
  n0,
  _MSpd,
  0,
  [_ACH, _ADu, _CCT, _KM, _MMS, _SE, _SSc, _TM, _TMBV, _TMSIU, _TMV],
  [
    [
      0,
      {
        [_jN]: _aCH,
      },
    ],
    [
      0,
      {
        [_jN]: _aD,
      },
    ],
    [
      0,
      {
        [_jN]: _cCT,
      },
    ],
    [
      0,
      {
        [_jN]: _kM,
      },
    ],
    [
      0,
      {
        [_jN]: _mMS,
      },
    ],
    [
      0,
      {
        [_jN]: _sE,
      },
    ],
    [
      0,
      {
        [_jN]: _sSc,
      },
    ],
    [
      0,
      {
        [_jN]: _tM,
      },
    ],
    [
      0,
      {
        [_jN]: _tMBV,
      },
    ],
    [
      0,
      {
        [_jN]: _tMSIU,
      },
    ],
    [
      0,
      {
        [_jN]: _tMV,
      },
    ],
  ]
);
export var Mpeg2Settings = struct(
  n0,
  _MSpeg,
  0,
  [
    _AQ,
    _B,
    _CLo,
    _CP,
    _DSG,
    _FC,
    _FCA,
    _FD,
    _FN,
    _GCC,
    _GS,
    _GSU,
    _HBFFP,
    _HBIFP,
    _HBS,
    _IM,
    _IDP,
    _MB,
    _MII,
    _NBFBRF,
    _PCar,
    _PD,
    _PN,
    _PFM,
    _QTL,
    _RCM,
    _STCM,
    _SCD,
    _SP,
    _So,
    _SAQ,
    _Sy,
    _Te,
    _TAQ,
  ],
  [
    [
      0,
      {
        [_jN]: _aQ,
      },
    ],
    [
      1,
      {
        [_jN]: _b,
      },
    ],
    [
      0,
      {
        [_jN]: _cLo,
      },
    ],
    [
      0,
      {
        [_jN]: _cP,
      },
    ],
    [
      0,
      {
        [_jN]: _dSG,
      },
    ],
    [
      0,
      {
        [_jN]: _fC,
      },
    ],
    [
      0,
      {
        [_jN]: _fCA,
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
        [_jN]: _gCC,
      },
    ],
    [
      1,
      {
        [_jN]: _gS,
      },
    ],
    [
      0,
      {
        [_jN]: _gSU,
      },
    ],
    [
      1,
      {
        [_jN]: _hBFFP,
      },
    ],
    [
      1,
      {
        [_jN]: _hBIFP,
      },
    ],
    [
      1,
      {
        [_jN]: _hBS,
      },
    ],
    [
      0,
      {
        [_jN]: _iM,
      },
    ],
    [
      0,
      {
        [_jN]: _iDP,
      },
    ],
    [
      1,
      {
        [_jN]: _mB,
      },
    ],
    [
      1,
      {
        [_jN]: _mII,
      },
    ],
    [
      1,
      {
        [_jN]: _nBFBRF,
      },
    ],
    [
      0,
      {
        [_jN]: _pCar,
      },
    ],
    [
      1,
      {
        [_jN]: _pD,
      },
    ],
    [
      1,
      {
        [_jN]: _pN,
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
        [_jN]: _qTL,
      },
    ],
    [
      0,
      {
        [_jN]: _rCM,
      },
    ],
    [
      0,
      {
        [_jN]: _sTCM,
      },
    ],
    [
      0,
      {
        [_jN]: _sCD,
      },
    ],
    [
      0,
      {
        [_jN]: _sP,
      },
    ],
    [
      1,
      {
        [_jN]: _so,
      },
    ],
    [
      0,
      {
        [_jN]: _sAQ,
      },
    ],
    [
      0,
      {
        [_jN]: _sy,
      },
    ],
    [
      0,
      {
        [_jN]: _te,
      },
    ],
    [
      0,
      {
        [_jN]: _tAQ,
      },
    ],
  ]
);
export var MxfSettings = struct(
  n0,
  _MSx,
  0,
  [_ASf, _Pro, _XPS],
  [
    [
      0,
      {
        [_jN]: _aSf,
      },
    ],
    [
      0,
      {
        [_jN]: _pro,
      },
    ],
    [
      () => MxfXavcProfileSettings,
      {
        [_jN]: _xPS,
      },
    ],
  ]
);
export var MxfXavcProfileSettings = struct(
  n0,
  _MXPS,
  0,
  [_DMu, _MADS],
  [
    [
      0,
      {
        [_jN]: _dMu,
      },
    ],
    [
      1,
      {
        [_jN]: _mADS,
      },
    ],
  ]
);
export var NexGuardFileMarkerSettings = struct(
  n0,
  _NGFMS,
  0,
  [_Li, _Pa, _Pre, _St],
  [
    [
      0,
      {
        [_jN]: _li,
      },
    ],
    [
      1,
      {
        [_jN]: _pa,
      },
    ],
    [
      0,
      {
        [_jN]: _pre,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var NoiseReducer = struct(
  n0,
  _NR,
  0,
  [_Fi, _FSilt, _SFS, _TFS],
  [
    [
      0,
      {
        [_jN]: _fi,
      },
    ],
    [
      () => NoiseReducerFilterSettings,
      {
        [_jN]: _fSilt,
      },
    ],
    [
      () => NoiseReducerSpatialFilterSettings,
      {
        [_jN]: _sFS,
      },
    ],
    [
      () => NoiseReducerTemporalFilterSettings,
      {
        [_jN]: _tFS,
      },
    ],
  ]
);
export var NoiseReducerFilterSettings = struct(
  n0,
  _NRFS,
  0,
  [_St],
  [
    [
      1,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var NoiseReducerSpatialFilterSettings = struct(
  n0,
  _NRSFS,
  0,
  [_PFSS, _Sp, _St],
  [
    [
      1,
      {
        [_jN]: _pFSS,
      },
    ],
    [
      1,
      {
        [_jN]: _sp,
      },
    ],
    [
      1,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var NoiseReducerTemporalFilterSettings = struct(
  n0,
  _NRTFS,
  0,
  [_AMg, _PTS, _PTSS, _Sp, _St],
  [
    [
      1,
      {
        [_jN]: _aMg,
      },
    ],
    [
      0,
      {
        [_jN]: _pTS,
      },
    ],
    [
      0,
      {
        [_jN]: _pTSS,
      },
    ],
    [
      1,
      {
        [_jN]: _sp,
      },
    ],
    [
      1,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var OpusSettings = struct(
  n0,
  _OS,
  0,
  [_B, _C, _SR],
  [
    [
      1,
      {
        [_jN]: _b,
      },
    ],
    [
      1,
      {
        [_jN]: _c,
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
export var OutputChannelMapping = struct(
  n0,
  _OCM,
  0,
  [_ICnpu, _ICFT],
  [
    [
      64 | 1,
      {
        [_jN]: _iCnp,
      },
    ],
    [
      64 | 1,
      {
        [_jN]: _iCFT,
      },
    ],
  ]
);
export var PartnerWatermarking = struct(
  n0,
  _PW,
  0,
  [_NFMS],
  [
    [
      () => NexGuardFileMarkerSettings,
      {
        [_jN]: _nFMS,
      },
    ],
  ]
);
export var ProresSettings = struct(
  n0,
  _PSro,
  0,
  [_CSh, _CP, _FC, _FCA, _FD, _FN, _IM, _PCar, _PD, _PN, _PFM, _STCM, _SP, _Te],
  [
    [
      0,
      {
        [_jN]: _cSh,
      },
    ],
    [
      0,
      {
        [_jN]: _cP,
      },
    ],
    [
      0,
      {
        [_jN]: _fC,
      },
    ],
    [
      0,
      {
        [_jN]: _fCA,
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
      0,
      {
        [_jN]: _iM,
      },
    ],
    [
      0,
      {
        [_jN]: _pCar,
      },
    ],
    [
      1,
      {
        [_jN]: _pD,
      },
    ],
    [
      1,
      {
        [_jN]: _pN,
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
        [_jN]: _sTCM,
      },
    ],
    [
      0,
      {
        [_jN]: _sP,
      },
    ],
    [
      0,
      {
        [_jN]: _te,
      },
    ],
  ]
);
export var Rectangle = struct(
  n0,
  _Rec,
  0,
  [_H, _W, _X, _Y],
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
export var RemixSettings = struct(
  n0,
  _RS,
  0,
  [_ADAC, _ADDC, _CMh, _CI, _CO],
  [
    [
      1,
      {
        [_jN]: _aDAC,
      },
    ],
    [
      1,
      {
        [_jN]: _aDDC,
      },
    ],
    [
      () => ChannelMapping,
      {
        [_jN]: _cMh,
      },
    ],
    [
      1,
      {
        [_jN]: _cI,
      },
    ],
    [
      1,
      {
        [_jN]: _cO,
      },
    ],
  ]
);
export var SccDestinationSettings = struct(
  n0,
  _SDS,
  0,
  [_Fr],
  [
    [
      0,
      {
        [_jN]: _fr,
      },
    ],
  ]
);
export var SrtDestinationSettings = struct(
  n0,
  _SDSr,
  0,
  [_SPt],
  [
    [
      0,
      {
        [_jN]: _sPt,
      },
    ],
  ]
);
export var TeletextDestinationSettings = struct(
  n0,
  _TDS,
  0,
  [_PNa, _PT],
  [
    [
      0,
      {
        [_jN]: _pNa,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _pT,
      },
    ],
  ]
);
export var TimecodeBurnin = struct(
  n0,
  _TB,
  0,
  [_FSon, _Pos, _Pref],
  [
    [
      1,
      {
        [_jN]: _fSon,
      },
    ],
    [
      0,
      {
        [_jN]: _pos,
      },
    ],
    [
      0,
      {
        [_jN]: _pref,
      },
    ],
  ]
);
export var TtmlDestinationSettings = struct(
  n0,
  _TDSt,
  0,
  [_SPt],
  [
    [
      0,
      {
        [_jN]: _sPt,
      },
    ],
  ]
);
export var UncompressedSettings = struct(
  n0,
  _US,
  0,
  [_Fo, _FC, _FCA, _FD, _FN, _IM, _STCM, _SP, _Te],
  [
    [
      0,
      {
        [_jN]: _fo,
      },
    ],
    [
      0,
      {
        [_jN]: _fC,
      },
    ],
    [
      0,
      {
        [_jN]: _fCA,
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
      0,
      {
        [_jN]: _iM,
      },
    ],
    [
      0,
      {
        [_jN]: _sTCM,
      },
    ],
    [
      0,
      {
        [_jN]: _sP,
      },
    ],
    [
      0,
      {
        [_jN]: _te,
      },
    ],
  ]
);
export var Vc3Settings = struct(
  n0,
  _VSc,
  0,
  [_FC, _FCA, _FD, _FN, _IM, _STCM, _SP, _Te, _VC],
  [
    [
      0,
      {
        [_jN]: _fC,
      },
    ],
    [
      0,
      {
        [_jN]: _fCA,
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
      0,
      {
        [_jN]: _iM,
      },
    ],
    [
      0,
      {
        [_jN]: _sTCM,
      },
    ],
    [
      0,
      {
        [_jN]: _sP,
      },
    ],
    [
      0,
      {
        [_jN]: _te,
      },
    ],
    [
      0,
      {
        [_jN]: _vC,
      },
    ],
  ]
);
export var VideoCodecSettings = struct(
  n0,
  _VCS,
  0,
  [_ASv, _AIS, _Co, _FCS, _GSi, _HS, _HSe, _MSpeg, _PSro, _US, _VSc, _VSp, _VSpe, _XS],
  [
    [
      () => Av1Settings,
      {
        [_jN]: _aSv,
      },
    ],
    [
      () => AvcIntraSettings,
      {
        [_jN]: _aIS,
      },
    ],
    [
      0,
      {
        [_jN]: _co,
      },
    ],
    [
      () => FrameCaptureSettings,
      {
        [_jN]: _fCS,
      },
    ],
    [
      () => GifSettings,
      {
        [_jN]: _gSi,
      },
    ],
    [
      () => H264Settings,
      {
        [_jN]: _hSe,
      },
    ],
    [
      () => H265Settings,
      {
        [_jN]: _hSet,
      },
    ],
    [
      () => Mpeg2Settings,
      {
        [_jN]: _mSpeg,
      },
    ],
    [
      () => ProresSettings,
      {
        [_jN]: _pSr,
      },
    ],
    [
      () => UncompressedSettings,
      {
        [_jN]: _uS,
      },
    ],
    [
      () => Vc3Settings,
      {
        [_jN]: _vSc,
      },
    ],
    [
      () => Vp8Settings,
      {
        [_jN]: _vSp,
      },
    ],
    [
      () => Vp9Settings,
      {
        [_jN]: _vSpe,
      },
    ],
    [
      () => XavcSettings,
      {
        [_jN]: _xS,
      },
    ],
  ]
);
export var VideoDescription = struct(
  n0,
  _VD,
  0,
  [_ASf, _AA, _CPM, _CS, _CMo, _Cr, _DFT, _FA, _H, _Pos, _RTA, _SB, _Sha, _TIi, _TTi, _VPid, _W],
  [
    [
      0,
      {
        [_jN]: _aSf,
      },
    ],
    [
      0,
      {
        [_jN]: _aA,
      },
    ],
    [
      0,
      {
        [_jN]: _cPM,
      },
    ],
    [
      () => VideoCodecSettings,
      {
        [_jN]: _cS,
      },
    ],
    [
      0,
      {
        [_jN]: _cMo,
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
        [_jN]: _dFT,
      },
    ],
    [
      1,
      {
        [_jN]: _fA,
      },
    ],
    [
      1,
      {
        [_jN]: _h,
      },
    ],
    [
      () => Rectangle,
      {
        [_jN]: _pos,
      },
    ],
    [
      0,
      {
        [_jN]: _rTA,
      },
    ],
    [
      0,
      {
        [_jN]: _sB,
      },
    ],
    [
      1,
      {
        [_jN]: _sha,
      },
    ],
    [
      0,
      {
        [_jN]: _tIi,
      },
    ],
    [
      0,
      {
        [_jN]: _tTi,
      },
    ],
    [
      () => VideoPreprocessor,
      {
        [_jN]: _vPid,
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
export var VideoPreprocessor = struct(
  n0,
  _VPide,
  0,
  [_CCo, _Dei, _DV, _HP, _IIm, _NR, _PW, _TB],
  [
    [
      () => ColorCorrector,
      {
        [_jN]: _cCo,
      },
    ],
    [
      () => Deinterlacer,
      {
        [_jN]: _dei,
      },
    ],
    [
      () => DolbyVision,
      {
        [_jN]: _dV,
      },
    ],
    [
      () => Hdr10Plus,
      {
        [_jN]: _hP,
      },
    ],
    [
      () => ImageInserter,
      {
        [_jN]: _iIm,
      },
    ],
    [
      () => NoiseReducer,
      {
        [_jN]: _nR,
      },
    ],
    [
      () => PartnerWatermarking,
      {
        [_jN]: _pW,
      },
    ],
    [
      () => TimecodeBurnin,
      {
        [_jN]: _tB,
      },
    ],
  ]
);
export var VorbisSettings = struct(
  n0,
  _VS,
  0,
  [_C, _SR, _VQ],
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
        [_jN]: _sR,
      },
    ],
    [
      1,
      {
        [_jN]: _vQ,
      },
    ],
  ]
);
export var Vp8Settings = struct(
  n0,
  _VSp,
  0,
  [_B, _FC, _FCA, _FD, _FN, _GS, _HBS, _MB, _PCar, _PD, _PN, _QTL, _RCM],
  [
    [
      1,
      {
        [_jN]: _b,
      },
    ],
    [
      0,
      {
        [_jN]: _fC,
      },
    ],
    [
      0,
      {
        [_jN]: _fCA,
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
        [_jN]: _gS,
      },
    ],
    [
      1,
      {
        [_jN]: _hBS,
      },
    ],
    [
      1,
      {
        [_jN]: _mB,
      },
    ],
    [
      0,
      {
        [_jN]: _pCar,
      },
    ],
    [
      1,
      {
        [_jN]: _pD,
      },
    ],
    [
      1,
      {
        [_jN]: _pN,
      },
    ],
    [
      0,
      {
        [_jN]: _qTL,
      },
    ],
    [
      0,
      {
        [_jN]: _rCM,
      },
    ],
  ]
);
export var Vp9Settings = struct(
  n0,
  _VSpe,
  0,
  [_B, _FC, _FCA, _FD, _FN, _GS, _HBS, _MB, _PCar, _PD, _PN, _QTL, _RCM],
  [
    [
      1,
      {
        [_jN]: _b,
      },
    ],
    [
      0,
      {
        [_jN]: _fC,
      },
    ],
    [
      0,
      {
        [_jN]: _fCA,
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
        [_jN]: _gS,
      },
    ],
    [
      1,
      {
        [_jN]: _hBS,
      },
    ],
    [
      1,
      {
        [_jN]: _mB,
      },
    ],
    [
      0,
      {
        [_jN]: _pCar,
      },
    ],
    [
      1,
      {
        [_jN]: _pD,
      },
    ],
    [
      1,
      {
        [_jN]: _pN,
      },
    ],
    [
      0,
      {
        [_jN]: _qTL,
      },
    ],
    [
      0,
      {
        [_jN]: _rCM,
      },
    ],
  ]
);
export var WavSettings = struct(
  n0,
  _WS,
  0,
  [_BD, _C, _F, _SR],
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
        [_jN]: _c,
      },
    ],
    [
      0,
      {
        [_jN]: _f,
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
export var WebvttDestinationSettings = struct(
  n0,
  _WDS,
  0,
  [_Ac, _SPt],
  [
    [
      0,
      {
        [_jN]: _ac,
      },
    ],
    [
      0,
      {
        [_jN]: _sPt,
      },
    ],
  ]
);
export var Xavc4kIntraCbgProfileSettings = struct(
  n0,
  _XICPS,
  0,
  [_XC],
  [
    [
      0,
      {
        [_jN]: _xC,
      },
    ],
  ]
);
export var Xavc4kIntraVbrProfileSettings = struct(
  n0,
  _XIVPS,
  0,
  [_XC],
  [
    [
      0,
      {
        [_jN]: _xC,
      },
    ],
  ]
);
export var Xavc4kProfileSettings = struct(
  n0,
  _XPSa,
  0,
  [_BCi, _CP, _FAQ, _GBR, _GCC, _HBS, _QTL, _Sl],
  [
    [
      0,
      {
        [_jN]: _bCi,
      },
    ],
    [
      0,
      {
        [_jN]: _cP,
      },
    ],
    [
      0,
      {
        [_jN]: _fAQ,
      },
    ],
    [
      0,
      {
        [_jN]: _gBR,
      },
    ],
    [
      1,
      {
        [_jN]: _gCC,
      },
    ],
    [
      1,
      {
        [_jN]: _hBS,
      },
    ],
    [
      0,
      {
        [_jN]: _qTL,
      },
    ],
    [
      1,
      {
        [_jN]: _sl,
      },
    ],
  ]
);
export var XavcHdIntraCbgProfileSettings = struct(
  n0,
  _XHICPS,
  0,
  [_XC],
  [
    [
      0,
      {
        [_jN]: _xC,
      },
    ],
  ]
);
export var XavcHdProfileSettings = struct(
  n0,
  _XHPS,
  0,
  [_BCi, _FAQ, _GBR, _GCC, _HBS, _IM, _QTL, _Sl, _Te],
  [
    [
      0,
      {
        [_jN]: _bCi,
      },
    ],
    [
      0,
      {
        [_jN]: _fAQ,
      },
    ],
    [
      0,
      {
        [_jN]: _gBR,
      },
    ],
    [
      1,
      {
        [_jN]: _gCC,
      },
    ],
    [
      1,
      {
        [_jN]: _hBS,
      },
    ],
    [
      0,
      {
        [_jN]: _iM,
      },
    ],
    [
      0,
      {
        [_jN]: _qTL,
      },
    ],
    [
      1,
      {
        [_jN]: _sl,
      },
    ],
    [
      0,
      {
        [_jN]: _te,
      },
    ],
  ]
);
export var XavcSettings = struct(
  n0,
  _XS,
  0,
  [_AQ, _EE, _FC, _FCA, _FD, _FN, _PFM, _Pro, _SP, _So, _SAQ, _TAQ, _XICPS, _XIVPS, _XPSa, _XHICPS, _XHPS],
  [
    [
      0,
      {
        [_jN]: _aQ,
      },
    ],
    [
      0,
      {
        [_jN]: _eE,
      },
    ],
    [
      0,
      {
        [_jN]: _fC,
      },
    ],
    [
      0,
      {
        [_jN]: _fCA,
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
      64 | 0,
      {
        [_jN]: _pFM,
      },
    ],
    [
      0,
      {
        [_jN]: _pro,
      },
    ],
    [
      0,
      {
        [_jN]: _sP,
      },
    ],
    [
      1,
      {
        [_jN]: _so,
      },
    ],
    [
      0,
      {
        [_jN]: _sAQ,
      },
    ],
    [
      0,
      {
        [_jN]: _tAQ,
      },
    ],
    [
      () => Xavc4kIntraCbgProfileSettings,
      {
        [_jN]: _xICPS,
      },
    ],
    [
      () => Xavc4kIntraVbrProfileSettings,
      {
        [_jN]: _xIVPS,
      },
    ],
    [
      () => Xavc4kProfileSettings,
      {
        [_jN]: _xPSa,
      },
    ],
    [
      () => XavcHdIntraCbgProfileSettings,
      {
        [_jN]: _xHICPS,
      },
    ],
    [
      () => XavcHdProfileSettings,
      {
        [_jN]: _xHPS,
      },
    ],
  ]
);
export var __listOf__doubleMinNegative60Max6 = 64 | 1;

export var __listOf__integerMin32Max8182 = 64 | 1;

export var __listOf__integerMinNegative60Max6 = 64 | 1;

export var __listOfAudioChannelTag = 64 | 0;

export var __listOfAudioDescription = list(n0, _lOAD, 0, [() => AudioDescription, 0]);
export var __listOfFrameMetricType = 64 | 0;

export var __listOfInsertableImage = list(n0, _lOIIi, 0, [() => InsertableImage, 0]);
export var __listOfOutputChannelMapping = list(n0, _lOOCM, 0, [() => OutputChannelMapping, 0]);
export var __listOfTeletextPageType = 64 | 0;
