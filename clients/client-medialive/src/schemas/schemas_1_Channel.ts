// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _a,
  _AAF,
  _aAF,
  _AAO,
  _aAO,
  _AB,
  _aB,
  _ABI,
  _aBI,
  _ABM,
  _aBM,
  _AC,
  _Ac,
  _aC,
  _ac,
  _ACl,
  _aCl,
  _ACM,
  _ACPC,
  _aCPC,
  _ACPr,
  _aCPr,
  _ACS,
  _aCS,
  _ACSr,
  _ACSS,
  _ACSu,
  _ACv,
  _aCv,
  _AD,
  _aD,
  _ADED,
  _ADN,
  _aDN,
  _ADR,
  _aDR,
  _ADS,
  _aDS,
  _ADu,
  _aDu,
  _ADud,
  _AFPP,
  _aFPP,
  _AGI,
  _aGI,
  _AGS,
  _aGS,
  _AHRS,
  _aHRS,
  _AIAB,
  _aIAB,
  _AIAN,
  _aIAN,
  _AIFS,
  _aIFS,
  _AISAN,
  _aISAN,
  _Al,
  _al,
  _ALS,
  _aLS,
  _AM,
  _aM,
  _AMGAN,
  _aMGAN,
  _AMGU,
  _aMGU,
  _AN,
  _aN,
  _ANc,
  _aNc,
  _ANS,
  _aNS,
  _AOHS,
  _aOHS,
  _AOI,
  _aOI,
  _AOS,
  _aOS,
  _AOTC,
  _aOTC,
  _AP,
  _aP,
  _API,
  _aPI,
  _APS,
  _aPS,
  _AQ,
  _aQ,
  _Ar,
  _ar,
  _Ari,
  _ari,
  _ARS,
  _aRS,
  _AS,
  _aS,
  _ASc,
  _aSc,
  _ASf,
  _aSf,
  _ASFS,
  _ASN,
  _ASn,
  _aSN,
  _aSn,
  _ASS,
  _aSS,
  _aSSn,
  _ASSr,
  _aSSr,
  _ASSri,
  _ASSu,
  _aSSu,
  _ASSud,
  _AST,
  _aST,
  _ASTM,
  _aSTM,
  _ASu,
  _aSu,
  _ASud,
  _ASut,
  _aSut,
  _ASv,
  _aSv,
  _ASva,
  _aSve,
  _AT,
  _aT,
  _ATC,
  _aTC,
  _ATF,
  _aTF,
  _ATS,
  _aTS,
  _ATT,
  _aTT,
  _ATu,
  _AWS,
  _aWS,
  _AWSu,
  _AZ,
  _aZ,
  _B,
  _b,
  _Ba,
  _ba,
  _BC,
  _bC,
  _BD,
  _bD,
  _BDT,
  _bDT,
  _BFM,
  _bFM,
  _BFP,
  _bFP,
  _BIDS,
  _bIDS,
  _BM,
  _bM,
  _BMu,
  _bMu,
  _BMuf,
  _bMuf,
  _BO,
  _bO,
  _BRFS,
  _bRFS,
  _BS,
  _bS,
  _BSACR,
  _BSACRa,
  _BSADR,
  _BSADRa,
  _BSI,
  _bSI,
  _BSl,
  _bSl,
  _BSu,
  _bSu,
  _BUC,
  _bUC,
  _BUCa,
  _bUCa,
  _BUM,
  _bUM,
  _BUMa,
  _bUMa,
  _BUS,
  _BUSR,
  _BUSRa,
  _CA,
  _cA,
  _CC,
  _cC,
  _CCDS,
  _cCDS,
  _CCh,
  _cCh,
  _CCl,
  _cCl,
  _CCo,
  _CCR,
  _CCr,
  _CCRr,
  _CCS,
  _cCS,
  _CD,
  _cD,
  _CDa,
  _cDa,
  _CDap,
  _CDc,
  _cDc,
  _CDN,
  _cDN,
  _CDo,
  _cDo,
  _CDR,
  _cDR,
  _CDS,
  _cDS,
  _CDSh,
  _cE,
  _CEE,
  _CEu,
  _CEV,
  _cEV,
  _CEVR,
  _CFB,
  _cFB,
  _CG,
  _cG,
  _CH,
  _Ch,
  _cH,
  _ch,
  _Cha,
  _cha,
  _CI,
  _cI,
  _CIa,
  _cIa,
  _CICLM,
  _CIGS,
  _cIGS,
  _CIha,
  _cIha,
  _CIhan,
  _cIhan,
  _CIo,
  _cIo,
  _CIOS,
  _cIOS,
  _CIS,
  _cIS,
  _CIU,
  _cIU,
  _cL,
  _CLa,
  _CLM,
  _cLM,
  _CLMa,
  _CLS,
  _cLS,
  _CM,
  _cM,
  _CMe,
  _cMe,
  _CMh,
  _cMh,
  _CMo,
  _cMo,
  _CN,
  _cN,
  _Cod,
  _cod,
  _COh,
  _cOh,
  _CPGI,
  _cPGI,
  _CR,
  _Cr,
  _cr,
  _CRI,
  _cRI,
  _CS,
  _Cs,
  _cS,
  _cs,
  _CSa,
  _cSa,
  _CSap,
  _CSb,
  _cSb,
  _CSh,
  _CSN,
  _cSN,
  _CSo,
  _cSo,
  _CSod,
  _cSod,
  _CSol,
  _cSol,
  _CSPS,
  _cSPS,
  _CSS,
  _cSS,
  _CSSa,
  _CSU,
  _cSU,
  _cTo,
  _CTon,
  _D,
  _d,
  _DAR,
  _dAR,
  _DAS,
  _DC,
  _DCes,
  _DCR,
  _DCRe,
  _DCRes,
  _DCResc,
  _DDA,
  _dDA,
  _De,
  _de,
  _Deb,
  _deb,
  _DED,
  _dED,
  _Del,
  _del,
  _Des,
  _des,
  _DF,
  _dF,
  _DFe,
  _dFe,
  _DFen,
  _dFen,
  _DFS,
  _dFS,
  _DI,
  _dI,
  _DL,
  _dL,
  _DLH,
  _dLH,
  _dNS,
  _DNSv,
  _DP,
  _dP,
  _DRe,
  _dRe,
  _DRel,
  _dRel,
  _DRI,
  _dRI,
  _DRr,
  _dRr,
  _DRrc,
  _dRrc,
  _DS,
  _dS,
  _DSDS,
  _dSDS,
  _DSes,
  _DSi,
  _dSi,
  _DSP,
  _dSP,
  _DSRes,
  _DSResc,
  _DSS,
  _dSS,
  _DSSS,
  _dSSS,
  _DT,
  _dT,
  _DTP,
  _dTP,
  _DTS,
  _dTS,
  _Du,
  _du,
  _DVS,
  _dVS,
  _E,
  _e,
  _EAI,
  _eAI,
  _EAS,
  _eAS,
  _Eb,
  _eb,
  _ECTM,
  _eCTM,
  _EDS,
  _eDS,
  _EE,
  _eE,
  _EEn,
  _eEn,
  _EI,
  _eI,
  _EIM,
  _eIM,
  _ELM,
  _eLM,
  _ELS,
  _eLS,
  _EPb,
  _ePb,
  _EPc,
  _ePc,
  _EPP,
  _ePP,
  _EPSA,
  _ePSA,
  _EPSDS,
  _ePSDS,
  _ERIP,
  _eRIP,
  _ES,
  _Es,
  _eS,
  _es,
  _ESB,
  _eSB,
  _ESn,
  _eSn,
  _ESP,
  _eSP,
  _ESS,
  _eSS,
  _ETDDS,
  _eTDDS,
  _ETn,
  _eTn,
  _FA,
  _fA,
  _FAe,
  _fAe,
  _FAl,
  _fAl,
  _FC,
  _fC,
  _FCa,
  _FCCS,
  _fCCS,
  _FCGS,
  _fCGS,
  _FCHS,
  _fCHS,
  _FCo,
  _fCo,
  _FCOS,
  _fCOS,
  _FCr,
  _fCr,
  _FCS,
  _fCS,
  _FCSr,
  _fCSr,
  _FCSS,
  _fCSS,
  _FD,
  _fD,
  _FDi,
  _fDi,
  _FF,
  _fF,
  _FFP,
  _fFP,
  _FHS,
  _fHS,
  _FI,
  _fI,
  _FL,
  _fL,
  _FLG,
  _fLG,
  _FMSASS,
  _fMSASS,
  _FMSASSo,
  _fMSASSo,
  _FN,
  _fN,
  _FO,
  _Fo,
  _fO,
  _fo,
  _FOa,
  _fOa,
  _FOS,
  _fOS,
  _FPo,
  _fPo,
  _FR,
  _fR,
  _FS,
  _fS,
  _FSi,
  _fSi,
  _FSil,
  _fSil,
  _FT,
  _fT,
  _G,
  _g,
  _GBR,
  _gBR,
  _GC,
  _gC,
  _GCC,
  _gCC,
  _GCCo,
  _gCCo,
  _GI,
  _gI,
  _GNBF,
  _gNBF,
  _GS,
  _gS,
  _GSU,
  _gSU,
  _H,
  _h,
  _HAS,
  _hAS,
  _HASl,
  _hASl,
  _HBPS,
  _hBPS,
  _HCS,
  _hCS,
  _HCSS,
  _HCSSo,
  _HD,
  _hD,
  _HFS,
  _HFSi,
  _HGS,
  _hGS,
  _HIS,
  _hIS,
  _HIST,
  _hIST,
  _HISTS,
  _hISTS,
  _HISTSAS,
  _HMGS,
  _hMGS,
  _HMSS,
  _hMSS,
  _HOS,
  _hOS,
  _HPT,
  _hPT,
  _hQ,
  _HS,
  _hS,
  _HSe,
  _hSe,
  _HSet,
  _hSet,
  _HSl,
  _hSl,
  _HSS,
  _hSS,
  _HT,
  _hT,
  _ht,
  _HTM,
  _hTM,
  _HTMS,
  _hTMS,
  _HTMSAS,
  _HWS,
  _hWS,
  _I,
  _i,
  _IA,
  _iA,
  _IAG,
  _iAG,
  _IAN,
  _iAN,
  _IAnp,
  _IANR,
  _iANR,
  _IB,
  _iB,
  _ICL,
  _iCL,
  _ICLn,
  _ICn,
  _iCn,
  _ICS,
  _iCS,
  _ICSn,
  _iCSn,
  _id,
  _Id_,
  _IEA,
  _iEA,
  _IF,
  _iF,
  _IFn,
  _iFn,
  _IFNU,
  _iFNU,
  _IFOP,
  _iFOP,
  _IIM,
  _iIM,
  _IIn,
  _iIn,
  _IL,
  _ILA,
  _iLA,
  _ILB,
  _iLB,
  _ILFS,
  _ILIC,
  _iLIC,
  _ILIS,
  _iLIS,
  _ILIT,
  _iLIT,
  _ILS,
  _iLS,
  _ILTM,
  _iLTM,
  _Im,
  _im,
  _IMSASS,
  _iMSASS,
  _INM,
  _iNM,
  _INS,
  _iNS,
  _IP,
  _iP,
  _IPS,
  _iPS,
  _IPSA,
  _iPSA,
  _IPSAS,
  _IS,
  _iS,
  _ISB,
  _iSB,
  _ISn,
  _iSn,
  _ISS,
  _iSS,
  _ISSAS,
  _ISTS,
  _iSTS,
  _ISTSAS,
  _ISv,
  _iSv,
  _IT,
  _iT,
  _iTd,
  _ITS,
  _iTS,
  _IX,
  _iX,
  _IY,
  _iY,
  _jN,
  _JST,
  _jST,
  _K,
  _k,
  _KB,
  _kB,
  _KDP,
  _kDP,
  _KF,
  _kF,
  _KFV,
  _kFV,
  _KNM,
  _kNM,
  _KPS,
  _kPS,
  _KPSe,
  _kPSe,
  _KS,
  _kS,
  _L,
  _l,
  _La,
  _la,
  _LARC,
  _lARC,
  _Lay,
  _lay,
  _LC,
  _lC,
  _LCC,
  _lCC,
  _LCf,
  _lCf,
  _LCi,
  _LCR,
  _LCRi,
  _LD,
  _lD,
  _LF,
  _lF,
  _LFCB,
  _lFCB,
  _LIN,
  _lIN,
  _LL,
  _lL,
  _LO,
  _lO,
  _lOACM,
  _lOAD,
  _lOADi,
  _lOAS,
  _lOAT,
  _lOCC,
  _lOCD,
  _lOCEE,
  _lOCICLM,
  _lOCLM,
  _lOCS,
  _lOCSi,
  _lOFC,
  _lOIA,
  _lOICL,
  _lOMPODS,
  _lOOD,
  _lOODS,
  _lOOG,
  _lOOi,
  _lOPD,
  _lOPPSS,
  _lOSA,
  _lOSD,
  _lOSODS,
  _lOVD,
  _LRCML,
  _lRCML,
  _LRCMLt,
  _lRCMLt,
  _LRSML,
  _lRSML,
  _LRSMLt,
  _lRSMLt,
  _LSP,
  _lSP,
  _Ma,
  _ma,
  _MB,
  _mB,
  _MBa,
  _mBa,
  _MBi,
  _mBi,
  _MC,
  _mC,
  _MCa,
  _mCa,
  _MCan,
  _mCan,
  _MCS,
  _MCSu,
  _MDa,
  _mDa,
  _MDai,
  _mDai,
  _MDF,
  _mDF,
  _MF,
  _mF,
  _MFS,
  _MGASAS,
  _MGC,
  _mGC,
  _MGDSAS,
  _MGI,
  _mGI,
  _MGIAS,
  _mGIAS,
  _MGIDS,
  _mGIDS,
  _MGS,
  _mGS,
  _MGSu,
  _mGSu,
  _MII,
  _mII,
  _MIS,
  _mIS,
  _MIu,
  _mIu,
  _MMS,
  _mMS,
  _Mo,
  _mo,
  _MOPB,
  _mOPB,
  _MOS,
  _mOS,
  _MPCDS,
  _MPGS,
  _mPGS,
  _MPODS,
  _MPOS,
  _mPOS,
  _MPSe,
  _mPSe,
  _MPVDS,
  _mPVDS,
  _MPVGS,
  _MQ,
  _mQ,
  _MR,
  _mR,
  _MS,
  _mS,
  _MSa,
  _mSa,
  _MSD,
  _mSD,
  _MSGS,
  _mSGS,
  _MSL,
  _mSL,
  _MSOS,
  _mSOS,
  _MSp,
  _mSp,
  _MSpe,
  _mSpe,
  _MSSC,
  _mSSC,
  _MST,
  _mST,
  _MSue,
  _mSue,
  _MSul,
  _mSul,
  _MTP,
  _mTP,
  _MUS,
  _MVGS,
  _mVGS,
  _N,
  _n,
  _NC,
  _nC,
  _NCBET,
  _NCS,
  _nCS,
  _NDT,
  _nDT,
  _NEB,
  _nEB,
  _NEBI,
  _nEBI,
  _NI,
  _nI,
  _NIB,
  _nIB,
  _NIIe,
  _nIIe,
  _NINM,
  _nINM,
  _NIS,
  _nIS,
  _NM,
  _nM,
  _NN,
  _nN,
  _NNIN,
  _NNINS,
  _nNINS,
  _NPB,
  _nPB,
  _NPTIT,
  _nPTIT,
  _NR,
  _nR,
  _NRBF,
  _nRBF,
  _NRF,
  _nRF,
  _NT,
  _nT,
  _NWS,
  _nWS,
  _OC,
  _oC,
  _OCS,
  _oCS,
  _OCu,
  _oCu,
  _ODS,
  _ODu,
  _OG,
  _oG,
  _OGS,
  _oGS,
  _OGu,
  _OL,
  _oL,
  _OLM,
  _oLM,
  _OLR,
  _OLS,
  _oLS,
  _ON,
  _oN,
  _ONu,
  _oNu,
  _Op,
  _op,
  _OR,
  _oR,
  _OS,
  _oS,
  _OSIOSA,
  _oSIOSA,
  _OSu,
  _oSu,
  _OSut,
  _oSut,
  _OSutp,
  _oSutp,
  _OTS,
  _oTS,
  _Ou,
  _ou,
  _Out,
  _P,
  _p,
  _PAAI,
  _pAAI,
  _PCa,
  _pCa,
  _PCar,
  _pCar,
  _PCc,
  _pCc,
  _PCh,
  _pCh,
  _PD,
  _pD,
  _PDi,
  _pDi,
  _PDip,
  _PDT,
  _pDT,
  _PDTC,
  _pDTC,
  _PDTP,
  _pDTP,
  _PE,
  _pE,
  _PFS,
  _pFS,
  _PI,
  _Pi,
  _pI,
  _pi,
  _PIa,
  _pIa,
  _PIi,
  _pIi,
  _PIm,
  _pIm,
  _Pip,
  _pip,
  _PIr,
  _pIr,
  _PLS,
  _pLS,
  _PN,
  _pN,
  _PNa,
  _pNa,
  _PNr,
  _pNr,
  _PNro,
  _pNro,
  _Pos,
  _pos,
  _PP,
  _pP,
  _PPc,
  _pPc,
  _PPcr,
  _pPcr,
  _PPm,
  _pPm,
  _PPSS,
  _PRC,
  _pRC,
  _Pre,
  _pre,
  _PS,
  _pS,
  _PSS,
  _pSS,
  _PSSAS,
  _PTS,
  _pTS,
  _QL,
  _qL,
  _QQL,
  _qQL,
  _R,
  _r,
  _RA,
  _rA,
  _RAN,
  _rAN,
  _RCIDS,
  _rCIDS,
  _RCM,
  _rCM,
  _RCP,
  _RCPR,
  _RCPRe,
  _RD,
  _rD,
  _Re,
  _re,
  _Ret,
  _ret,
  _RF,
  _rF,
  _RFM,
  _rFM,
  _RGS,
  _rGS,
  _RI,
  _rI,
  _RIe,
  _rIe,
  _RIep,
  _rIep,
  _RIet,
  _rIet,
  _RL,
  _rL,
  _RM,
  _rM,
  _RMa,
  _rMa,
  _ROS,
  _rOS,
  _RS,
  _rS,
  _RSe,
  _rSe,
  _RSec,
  _rSec,
  _RSece,
  _rSece,
  _RTA,
  _rTA,
  _S,
  _SA,
  _Sa,
  _sA,
  _sa,
  _SAc,
  _SACN,
  _sACN,
  _SAp,
  _sAp,
  _SAS,
  _sAS,
  _SASS,
  _sASS,
  _SB,
  _sB,
  _SBc,
  _sBc,
  _SC,
  _sC,
  _SCc,
  _sCc,
  _SCD,
  _sCD,
  _SCI,
  _sCI,
  _SCN,
  _sCN,
  _SCR,
  _SCRt,
  _SCRto,
  _SCRtop,
  _SCt,
  _sCt,
  _SCta,
  _SCto,
  _SD,
  _sD,
  _SDc,
  _sDc,
  _SDct,
  _sDct,
  _SDcte,
  _SDeg,
  _sDeg,
  _SDM,
  _sDM,
  _SDP,
  _sDP,
  _SDR,
  _SDS,
  _sDS,
  _SDSc,
  _sDSc,
  _SDSDS,
  _sDSDS,
  _SE,
  _Se,
  _sE,
  _SEB,
  _sEB,
  _SEI,
  _sEI,
  _SEIe,
  _sEIe,
  _SEM,
  _sEM,
  _set,
  _SGI,
  _sGI,
  _SGS,
  _sGS,
  _Sh,
  _sh,
  _SHS,
  _sHS,
  _SI,
  _Si,
  _sI,
  _si,
  _SIAo,
  _sIAo,
  _SIAS,
  _sIAS,
  _SIASAS,
  _SIDS,
  _sIDS,
  _SIDSAS,
  _SII,
  _sII,
  _SIOAS,
  _sIOAS,
  _SIOASAS,
  _SIODS,
  _sIODS,
  _SIODSAS,
  _SIR,
  _sIR,
  _SIS,
  _sIS,
  _SISAS,
  _SIt,
  _sIt,
  _SIu,
  _sIu,
  _SKS,
  _sKS,
  _SKV,
  _sKV,
  _SL,
  _Sl,
  _sL,
  _sl,
  _SLFI,
  _sLFI,
  _SLU,
  _SLu,
  _sLU,
  _sLu,
  _SM,
  _sM,
  _SMB,
  _sMB,
  _SMe,
  _sMe,
  _SMeg,
  _sMeg,
  _SMegm,
  _sMegm,
  _SN,
  _sN,
  _SNeg,
  _sNeg,
  _SNer,
  _sNer,
  _SNM,
  _sNM,
  _SO,
  _sO,
  _SODS,
  _Sof,
  _sof,
  _SOS,
  _sOS,
  _Sou,
  _sou,
  _SP,
  _sP,
  _sp,
  _SPc,
  _sPc,
  _SPEDS,
  _sPEDS,
  _SPN,
  _sPN,
  _SPPM,
  _sPPM,
  _SPS,
  _sPS,
  _SR,
  _sR,
  _SRTNS,
  _sRTNS,
  _SRTNSAS,
  _SRu,
  _sRu,
  _SS,
  _sS,
  _SSc,
  _sSc,
  _SSD,
  _SSE,
  _SSe,
  _sSE,
  _sSe,
  _SSI,
  _sSI,
  _SSIS,
  _sSIS,
  _SSISAS,
  _SSN,
  _sSN,
  _SSr,
  _sSr,
  _SSS,
  _sSS,
  _SSSc,
  _sSSc,
  _SSSct,
  _sSSct,
  _ST,
  _St,
  _sT,
  _st,
  _STc,
  _sTc,
  _STca,
  _sTca,
  _STDS,
  _sTDS,
  _STe,
  _sTe,
  _STI,
  _sTI,
  _STN,
  _sTN,
  _Str,
  _str,
  _STSA,
  _sTSA,
  _STSS,
  _sTSS,
  _STSSAS,
  _STT,
  _STt,
  _sTT,
  _sTt,
  _STto,
  _sTto,
  _STu,
  _sTu,
  _STy,
  _sTy,
  _SUe,
  _sUe,
  _SUT,
  _sUT,
  _SV,
  _sV,
  _SXO,
  _sXO,
  _Sy,
  _sy,
  _SYO,
  _sYO,
  _T,
  _t,
  _TA,
  _Ta,
  _tA,
  _ta,
  _Tag,
  _tag,
  _TBS,
  _tBS,
  _TCh,
  _tCh,
  _TCi,
  _tCi,
  _TDM,
  _tDM,
  _TDS,
  _tDS,
  _TDSt,
  _tDSt,
  _TFM,
  _tFM,
  _TFS,
  _tFS,
  _TGC,
  _tGC,
  _TH,
  _tH,
  _TI,
  _Ti,
  _tI,
  _ti,
  _Tie,
  _tie,
  _Tim,
  _tim,
  _Time,
  _time,
  _TL,
  _tL,
  _TMB,
  _tMB,
  _TMIF,
  _tMIF,
  _TMIP,
  _tMIP,
  _TMP,
  _tMP,
  _TMPi,
  _tMPi,
  _TMS,
  _tMS,
  _TMSAS,
  _TO,
  _To,
  _tO,
  _to,
  _TOi,
  _tOi,
  _TOM,
  _tOM,
  _TP,
  _tP,
  _Tr,
  _tr,
  _TS,
  _tS,
  _TSI,
  _tSI,
  _TSS,
  _tSS,
  _TW,
  _tW,
  _U,
  _u,
  _UC,
  _UCC,
  _UCCR,
  _UCCRp,
  _UCEV,
  _uCEV,
  _UCR,
  _UCRp,
  _UCS,
  _UGS,
  _uGS,
  _UOS,
  _uOS,
  _UPr,
  _uPr,
  _Ur,
  _ur,
  _Us,
  _us,
  _V,
  _v,
  _VBFS,
  _VBS,
  _vBS,
  _VBTM,
  _vBTM,
  _VCS,
  _VD,
  _vD,
  _VDi,
  _VDN,
  _vDN,
  _Ve,
  _ve,
  _VOS,
  _VOSD,
  _VP,
  _vP,
  _VQ,
  _vQ,
  _VS,
  _vS,
  _VSCSS,
  _VSP,
  _vSP,
  _VSPI,
  _vSPI,
  _VSS,
  _W,
  _w,
  _WDAF,
  _wDAF,
  _WDS,
  _wDS,
  _WS,
  _wS,
  _XP,
  _xP,
  _YP,
  _yP,
  _ZI,
  _zI,
  n0,
} from "./schemas_0";
import { __listOfChannelEngineVersionResponse, ChannelEngineVersionResponse } from "./schemas_45_Channel";

/* eslint no-var: 0 */

export var AacSettings = struct(
  n0,
  _AS,
  0,
  [_B, _CM, _IT, _P, _RCM, _RF, _SR, _S, _VQ],
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
        [_jN]: _cM,
      },
    ],
    [
      0,
      {
        [_jN]: _iT,
      },
    ],
    [
      0,
      {
        [_jN]: _p,
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
        [_jN]: _sp,
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
  [_B, _BM, _CM, _D, _DP, _LF, _MC, _AC],
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
        [_jN]: _dP,
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
      0,
      {
        [_jN]: _aC,
      },
    ],
  ]
);
export var AdditionalDestinations = struct(
  n0,
  _AD,
  0,
  [_De],
  [
    [
      () => OutputLocationRef,
      {
        [_jN]: _de,
      },
    ],
  ]
);
export var AncillarySourceSettings = struct(
  n0,
  _ASS,
  0,
  [_SACN],
  [
    [
      1,
      {
        [_jN]: _sACN,
      },
    ],
  ]
);
export var AnywhereSettings = struct(
  n0,
  _ASn,
  0,
  [_CPGI, _CI],
  [
    [
      0,
      {
        [_jN]: _cPGI,
      },
    ],
    [
      0,
      {
        [_jN]: _cI,
      },
    ],
  ]
);
export var ArchiveCdnSettings = struct(
  n0,
  _ACS,
  0,
  [_ASSr],
  [
    [
      () => ArchiveS3Settings,
      {
        [_jN]: _aSS,
      },
    ],
  ]
);
export var ArchiveContainerSettings = struct(
  n0,
  _ACSr,
  0,
  [_MS, _RS],
  [
    [
      () => M2tsSettings,
      {
        [_jN]: _mS,
      },
    ],
    [
      () => RawSettings,
      {
        [_jN]: _rS,
      },
    ],
  ]
);
export var ArchiveGroupSettings = struct(
  n0,
  _AGS,
  0,
  [_ACS, _De, _RI],
  [
    [
      () => ArchiveCdnSettings,
      {
        [_jN]: _aCS,
      },
    ],
    [
      () => OutputLocationRef,
      {
        [_jN]: _de,
      },
    ],
    [
      1,
      {
        [_jN]: _rI,
      },
    ],
  ]
);
export var ArchiveOutputSettings = struct(
  n0,
  _AOS,
  0,
  [_CS, _E, _NM],
  [
    [
      () => ArchiveContainerSettings,
      {
        [_jN]: _cS,
      },
    ],
    [
      0,
      {
        [_jN]: _e,
      },
    ],
    [
      0,
      {
        [_jN]: _nM,
      },
    ],
  ]
);
export var ArchiveS3Settings = struct(
  n0,
  _ASSr,
  0,
  [_CA],
  [
    [
      0,
      {
        [_jN]: _cA,
      },
    ],
  ]
);
export var AribDestinationSettings = struct(n0, _ADS, 0, [], []);
export var AribSourceSettings = struct(n0, _ASSri, 0, [], []);
export var AudioChannelMapping = struct(
  n0,
  _ACM,
  0,
  [_ICL, _OC],
  [
    [
      () => __listOfInputChannelLevel,
      {
        [_jN]: _iCL,
      },
    ],
    [
      1,
      {
        [_jN]: _oC,
      },
    ],
  ]
);
export var AudioCodecSettings = struct(
  n0,
  _ACSu,
  0,
  [_AS, _ASc, _EAS, _ES, _MSp, _PTS, _WS],
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
      () => Mp2Settings,
      {
        [_jN]: _mSp,
      },
    ],
    [
      () => PassThroughSettings,
      {
        [_jN]: _pTS,
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
  _ADu,
  0,
  [_ANS, _ASN, _AT, _ATC, _AWS, _CSo, _LC, _LCC, _N, _RSe, _SN, _ADR, _DDA],
  [
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
      0,
      {
        [_jN]: _aT,
      },
    ],
    [
      0,
      {
        [_jN]: _aTC,
      },
    ],
    [
      () => AudioWatermarkSettings,
      {
        [_jN]: _aWS,
      },
    ],
    [
      () => AudioCodecSettings,
      {
        [_jN]: _cSo,
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
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => RemixSettings,
      {
        [_jN]: _rSe,
      },
    ],
    [
      0,
      {
        [_jN]: _sN,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _aDR,
      },
    ],
    [
      0,
      {
        [_jN]: _dDA,
      },
    ],
  ]
);
export var AudioDolbyEDecode = struct(
  n0,
  _ADED,
  0,
  [_PS],
  [
    [
      0,
      {
        [_jN]: _pS,
      },
    ],
  ]
);
export var AudioHlsRenditionSelection = struct(
  n0,
  _AHRS,
  0,
  [_GI, _N],
  [
    [
      0,
      {
        [_jN]: _gI,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
  ]
);
export var AudioLanguageSelection = struct(
  n0,
  _ALS,
  0,
  [_LC, _LSP],
  [
    [
      0,
      {
        [_jN]: _lC,
      },
    ],
    [
      0,
      {
        [_jN]: _lSP,
      },
    ],
  ]
);
export var AudioNormalizationSettings = struct(
  n0,
  _ANS,
  0,
  [_A, _ACl, _TL],
  [
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      0,
      {
        [_jN]: _aCl,
      },
    ],
    [
      1,
      {
        [_jN]: _tL,
      },
    ],
  ]
);
export var AudioOnlyHlsSettings = struct(
  n0,
  _AOHS,
  0,
  [_AGI, _AOI, _ATT, _ST],
  [
    [
      0,
      {
        [_jN]: _aGI,
      },
    ],
    [
      () => InputLocation,
      {
        [_jN]: _aOI,
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
        [_jN]: _sT,
      },
    ],
  ]
);
export var AudioPidSelection = struct(
  n0,
  _APS,
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
export var AudioSelector = struct(
  n0,
  _ASu,
  0,
  [_N, _SS],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => AudioSelectorSettings,
      {
        [_jN]: _sS,
      },
    ],
  ]
);
export var AudioSelectorSettings = struct(
  n0,
  _ASSu,
  0,
  [_AHRS, _ALS, _APS, _ATS],
  [
    [
      () => AudioHlsRenditionSelection,
      {
        [_jN]: _aHRS,
      },
    ],
    [
      () => AudioLanguageSelection,
      {
        [_jN]: _aLS,
      },
    ],
    [
      () => AudioPidSelection,
      {
        [_jN]: _aPS,
      },
    ],
    [
      () => AudioTrackSelection,
      {
        [_jN]: _aTS,
      },
    ],
  ]
);
export var AudioSilenceFailoverSettings = struct(
  n0,
  _ASFS,
  0,
  [_ASN, _ASTM],
  [
    [
      0,
      {
        [_jN]: _aSN,
      },
    ],
    [
      1,
      {
        [_jN]: _aSTM,
      },
    ],
  ]
);
export var AudioTrack = struct(
  n0,
  _ATu,
  0,
  [_T],
  [
    [
      1,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var AudioTrackSelection = struct(
  n0,
  _ATS,
  0,
  [_Tr, _DED],
  [
    [
      () => __listOfAudioTrack,
      {
        [_jN]: _tr,
      },
    ],
    [
      () => AudioDolbyEDecode,
      {
        [_jN]: _dED,
      },
    ],
  ]
);
export var AudioWatermarkSettings = struct(
  n0,
  _AWSu,
  0,
  [_NWS],
  [
    [
      () => NielsenWatermarksSettings,
      {
        [_jN]: _nWS,
      },
    ],
  ]
);
export var AutomaticInputFailoverSettings = struct(
  n0,
  _AIFS,
  0,
  [_ECTM, _FC, _IP, _SII],
  [
    [
      1,
      {
        [_jN]: _eCTM,
      },
    ],
    [
      () => __listOfFailoverCondition,
      {
        [_jN]: _fC,
      },
    ],
    [
      0,
      {
        [_jN]: _iP,
      },
    ],
    [
      0,
      {
        [_jN]: _sII,
      },
    ],
  ]
);
export var Av1ColorSpaceSettings = struct(
  n0,
  _ACSS,
  0,
  [_CSPS, _HS, _RSec, _RSece],
  [
    [
      () => ColorSpacePassthroughSettings,
      {
        [_jN]: _cSPS,
      },
    ],
    [
      () => Hdr10Settings,
      {
        [_jN]: _hS,
      },
    ],
    [
      () => Rec601Settings,
      {
        [_jN]: _rSec,
      },
    ],
    [
      () => Rec709Settings,
      {
        [_jN]: _rSece,
      },
    ],
  ]
);
export var Av1Settings = struct(
  n0,
  _ASv,
  0,
  [_ASf, _BS, _CSS, _FA, _FD, _FN, _GS, _GSU, _L, _LARC, _MB, _MII, _PD, _PN, _QQL, _SCD, _TBS, _B, _RCM, _MBi],
  [
    [
      0,
      {
        [_jN]: _aSf,
      },
    ],
    [
      1,
      {
        [_jN]: _bS,
      },
    ],
    [
      () => Av1ColorSpaceSettings,
      {
        [_jN]: _cSS,
      },
    ],
    [
      0,
      {
        [_jN]: _fA,
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
      0,
      {
        [_jN]: _gSU,
      },
    ],
    [
      0,
      {
        [_jN]: _l,
      },
    ],
    [
      0,
      {
        [_jN]: _lARC,
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
      1,
      {
        [_jN]: _qQL,
      },
    ],
    [
      0,
      {
        [_jN]: _sCD,
      },
    ],
    [
      () => TimecodeBurninSettings,
      {
        [_jN]: _tBS,
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
        [_jN]: _rCM,
      },
    ],
    [
      1,
      {
        [_jN]: _mBi,
      },
    ],
  ]
);
export var AvailBlanking = struct(
  n0,
  _AB,
  0,
  [_ABI, _St],
  [
    [
      () => InputLocation,
      {
        [_jN]: _aBI,
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
export var AvailConfiguration = struct(
  n0,
  _ACv,
  0,
  [_ASva, _SSS],
  [
    [
      () => AvailSettings,
      {
        [_jN]: _aSv,
      },
    ],
    [
      0,
      {
        [_jN]: _sSS,
      },
    ],
  ]
);
export var AvailSettings = struct(
  n0,
  _ASva,
  0,
  [_Es, _SSI, _STSA],
  [
    [
      () => Esam,
      {
        [_jN]: _es,
      },
    ],
    [
      () => Scte35SpliceInsert,
      {
        [_jN]: _sSI,
      },
    ],
    [
      () => Scte35TimeSignalApos,
      {
        [_jN]: _sTSA,
      },
    ],
  ]
);
export var BandwidthReductionFilterSettings = struct(
  n0,
  _BRFS,
  0,
  [_PFS, _Str],
  [
    [
      0,
      {
        [_jN]: _pFS,
      },
    ],
    [
      0,
      {
        [_jN]: _str,
      },
    ],
  ]
);
export var BatchScheduleActionCreateRequest = struct(
  n0,
  _BSACR,
  0,
  [_SA],
  [
    [
      () => __listOfScheduleAction,
      {
        [_jN]: _sA,
      },
    ],
  ]
);
export var BatchScheduleActionCreateResult = struct(
  n0,
  _BSACRa,
  0,
  [_SA],
  [
    [
      () => __listOfScheduleAction,
      {
        [_jN]: _sA,
      },
    ],
  ]
);
export var BatchScheduleActionDeleteRequest = struct(
  n0,
  _BSADR,
  0,
  [_AN],
  [
    [
      64 | 0,
      {
        [_jN]: _aN,
      },
    ],
  ]
);
export var BatchScheduleActionDeleteResult = struct(
  n0,
  _BSADRa,
  0,
  [_SA],
  [
    [
      () => __listOfScheduleAction,
      {
        [_jN]: _sA,
      },
    ],
  ]
);
export var BatchUpdateScheduleRequest = struct(
  n0,
  _BUSR,
  0,
  [_CIha, _Cr, _Del],
  [
    [0, 1],
    [
      () => BatchScheduleActionCreateRequest,
      {
        [_jN]: _cr,
      },
    ],
    [
      () => BatchScheduleActionDeleteRequest,
      {
        [_jN]: _del,
      },
    ],
  ]
);
export var BatchUpdateScheduleResponse = struct(
  n0,
  _BUSRa,
  0,
  [_Cr, _Del],
  [
    [
      () => BatchScheduleActionCreateResult,
      {
        [_jN]: _cr,
      },
    ],
    [
      () => BatchScheduleActionDeleteResult,
      {
        [_jN]: _del,
      },
    ],
  ]
);
export var BlackoutSlate = struct(
  n0,
  _BSl,
  0,
  [_BSI, _NEB, _NEBI, _NI, _St],
  [
    [
      () => InputLocation,
      {
        [_jN]: _bSI,
      },
    ],
    [
      0,
      {
        [_jN]: _nEB,
      },
    ],
    [
      () => InputLocation,
      {
        [_jN]: _nEBI,
      },
    ],
    [
      0,
      {
        [_jN]: _nI,
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
export var BurnInDestinationSettings = struct(
  n0,
  _BIDS,
  0,
  [_Al, _BC, _BO, _Fo, _FCo, _FO, _FR, _FS, _OCu, _OS, _SC, _SO, _SXO, _SYO, _TGC, _XP, _YP, _SRu],
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
      () => InputLocation,
      {
        [_jN]: _fo,
      },
    ],
    [
      0,
      {
        [_jN]: _fCo,
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
        [_jN]: _fR,
      },
    ],
    [
      0,
      {
        [_jN]: _fS,
      },
    ],
    [
      0,
      {
        [_jN]: _oCu,
      },
    ],
    [
      1,
      {
        [_jN]: _oS,
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
        [_jN]: _tGC,
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
    [
      0,
      {
        [_jN]: _sRu,
      },
    ],
  ]
);
export var CaptionDescription = struct(
  n0,
  _CD,
  0,
  [_Ac, _CSN, _DS, _LC, _LD, _N, _CDR, _DDA],
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
        [_jN]: _cSN,
      },
    ],
    [
      () => CaptionDestinationSettings,
      {
        [_jN]: _dS,
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
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _cDR,
      },
    ],
    [
      0,
      {
        [_jN]: _dDA,
      },
    ],
  ]
);
export var CaptionDestinationSettings = struct(
  n0,
  _CDS,
  0,
  [_ADS, _BIDS, _DSDS, _ETDDS, _EDS, _EPSDS, _RCIDS, _SPEDS, _SDS, _STDS, _TDS, _TDSt, _WDS],
  [
    [
      () => AribDestinationSettings,
      {
        [_jN]: _aDS,
      },
    ],
    [
      () => BurnInDestinationSettings,
      {
        [_jN]: _bIDS,
      },
    ],
    [
      () => DvbSubDestinationSettings,
      {
        [_jN]: _dSDS,
      },
    ],
    [
      () => EbuTtDDestinationSettings,
      {
        [_jN]: _eTDDS,
      },
    ],
    [
      () => EmbeddedDestinationSettings,
      {
        [_jN]: _eDS,
      },
    ],
    [
      () => EmbeddedPlusScte20DestinationSettings,
      {
        [_jN]: _ePSDS,
      },
    ],
    [
      () => RtmpCaptionInfoDestinationSettings,
      {
        [_jN]: _rCIDS,
      },
    ],
    [
      () => Scte20PlusEmbeddedDestinationSettings,
      {
        [_jN]: _sPEDS,
      },
    ],
    [
      () => Scte27DestinationSettings,
      {
        [_jN]: _sDS,
      },
    ],
    [
      () => SmpteTtDestinationSettings,
      {
        [_jN]: _sTDS,
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
export var CaptionLanguageMapping = struct(
  n0,
  _CLM,
  0,
  [_CC, _LC, _LD],
  [
    [
      1,
      {
        [_jN]: _cC,
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
export var CaptionRectangle = struct(
  n0,
  _CR,
  0,
  [_H, _LO, _TO, _W],
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
        [_jN]: _lO,
      },
    ],
    [
      1,
      {
        [_jN]: _tO,
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
export var CaptionSelector = struct(
  n0,
  _CSa,
  0,
  [_LC, _N, _SS],
  [
    [
      0,
      {
        [_jN]: _lC,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => CaptionSelectorSettings,
      {
        [_jN]: _sS,
      },
    ],
  ]
);
export var CaptionSelectorSettings = struct(
  n0,
  _CSSa,
  0,
  [_ASS, _ASSri, _DSSS, _ESS, _SSSc, _SSSct, _TSS],
  [
    [
      () => AncillarySourceSettings,
      {
        [_jN]: _aSSn,
      },
    ],
    [
      () => AribSourceSettings,
      {
        [_jN]: _aSSr,
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
      () => Scte20SourceSettings,
      {
        [_jN]: _sSSc,
      },
    ],
    [
      () => Scte27SourceSettings,
      {
        [_jN]: _sSSct,
      },
    ],
    [
      () => TeletextSourceSettings,
      {
        [_jN]: _tSS,
      },
    ],
  ]
);
export var CdiInputSpecification = struct(
  n0,
  _CIS,
  0,
  [_R],
  [
    [
      0,
      {
        [_jN]: _r,
      },
    ],
  ]
);
export var Channel = struct(
  n0,
  _Ch,
  0,
  [_Ar, _CIS, _CCh, _Des, _EE, _ESn, _I, _IA, _IS, _LL, _Ma, _N, _PDi, _PRC, _RA, _St, _Ta, _V, _ASn, _CEV],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      () => CdiInputSpecification,
      {
        [_jN]: _cIS,
      },
    ],
    [
      0,
      {
        [_jN]: _cCh,
      },
    ],
    [
      () => __listOfOutputDestination,
      {
        [_jN]: _des,
      },
    ],
    [
      () => __listOfChannelEgressEndpoint,
      {
        [_jN]: _eE,
      },
    ],
    [
      () => EncoderSettings,
      {
        [_jN]: _eSn,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      () => __listOfInputAttachment,
      {
        [_jN]: _iA,
      },
    ],
    [
      () => InputSpecification,
      {
        [_jN]: _iS,
      },
    ],
    [
      0,
      {
        [_jN]: _lL,
      },
    ],
    [
      () => MaintenanceStatus,
      {
        [_jN]: _ma,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => __listOfPipelineDetail,
      {
        [_jN]: _pDi,
      },
    ],
    [
      1,
      {
        [_jN]: _pRC,
      },
    ],
    [
      0,
      {
        [_jN]: _rA,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      () => VpcOutputSettingsDescription,
      {
        [_jN]: _v,
      },
    ],
    [
      () => DescribeAnywhereSettings,
      {
        [_jN]: _aSn,
      },
    ],
    [
      () => ChannelEngineVersionResponse,
      {
        [_jN]: _cEV,
      },
    ],
  ]
);
export var ChannelEgressEndpoint = struct(
  n0,
  _CEE,
  0,
  [_SI],
  [
    [
      0,
      {
        [_jN]: _sI,
      },
    ],
  ]
);
export var ChannelEngineVersionRequest = struct(
  n0,
  _CEVR,
  0,
  [_Ve],
  [
    [
      0,
      {
        [_jN]: _ve,
      },
    ],
  ]
);
export var ChannelSummary = struct(
  n0,
  _CSh,
  0,
  [_Ar, _CIS, _CCh, _Des, _EE, _I, _IA, _IS, _LL, _Ma, _N, _PRC, _RA, _St, _Ta, _V, _ASn, _CEV, _UCEV],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      () => CdiInputSpecification,
      {
        [_jN]: _cIS,
      },
    ],
    [
      0,
      {
        [_jN]: _cCh,
      },
    ],
    [
      () => __listOfOutputDestination,
      {
        [_jN]: _des,
      },
    ],
    [
      () => __listOfChannelEgressEndpoint,
      {
        [_jN]: _eE,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      () => __listOfInputAttachment,
      {
        [_jN]: _iA,
      },
    ],
    [
      () => InputSpecification,
      {
        [_jN]: _iS,
      },
    ],
    [
      0,
      {
        [_jN]: _lL,
      },
    ],
    [
      () => MaintenanceStatus,
      {
        [_jN]: _ma,
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
        [_jN]: _pRC,
      },
    ],
    [
      0,
      {
        [_jN]: _rA,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      () => VpcOutputSettingsDescription,
      {
        [_jN]: _v,
      },
    ],
    [
      () => DescribeAnywhereSettings,
      {
        [_jN]: _aSn,
      },
    ],
    [
      () => ChannelEngineVersionResponse,
      {
        [_jN]: _cEV,
      },
    ],
    [
      () => __listOfChannelEngineVersionResponse,
      {
        [_jN]: _uCEV,
      },
    ],
  ]
);
export var CmafIngestCaptionLanguageMapping = struct(
  n0,
  _CICLM,
  0,
  [_CC, _LC],
  [
    [
      1,
      {
        [_jN]: _cC,
      },
    ],
    [
      0,
      {
        [_jN]: _lC,
      },
    ],
  ]
);
export var CmafIngestGroupSettings = struct(
  n0,
  _CIGS,
  0,
  [_De, _NIB, _STc, _SL, _SLU, _SDM, _KB, _KNM, _NINM, _SNM, _IB, _INM, _CLMa, _TMIF, _TMIP, _TMP, _AD],
  [
    [
      () => OutputLocationRef,
      {
        [_jN]: _de,
      },
    ],
    [
      0,
      {
        [_jN]: _nIB,
      },
    ],
    [
      0,
      {
        [_jN]: _sTc,
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
        [_jN]: _sLU,
      },
    ],
    [
      1,
      {
        [_jN]: _sDM,
      },
    ],
    [
      0,
      {
        [_jN]: _kB,
      },
    ],
    [
      0,
      {
        [_jN]: _kNM,
      },
    ],
    [
      0,
      {
        [_jN]: _nINM,
      },
    ],
    [
      0,
      {
        [_jN]: _sNM,
      },
    ],
    [
      0,
      {
        [_jN]: _iB,
      },
    ],
    [
      0,
      {
        [_jN]: _iNM,
      },
    ],
    [
      () => __listOfCmafIngestCaptionLanguageMapping,
      {
        [_jN]: _cLM,
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
      0,
      {
        [_jN]: _tMP,
      },
    ],
    [
      () => __listOfAdditionalDestinations,
      {
        [_jN]: _aD,
      },
    ],
  ]
);
export var CmafIngestOutputSettings = struct(
  n0,
  _CIOS,
  0,
  [_NM],
  [
    [
      0,
      {
        [_jN]: _nM,
      },
    ],
  ]
);
export var ColorCorrection = struct(
  n0,
  _CCo,
  0,
  [_ICS, _OCS, _U],
  [
    [
      0,
      {
        [_jN]: _iCS,
      },
    ],
    [
      0,
      {
        [_jN]: _oCS,
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
export var ColorCorrectionSettings = struct(
  n0,
  _CCS,
  0,
  [_GCC],
  [
    [
      () => __listOfColorCorrection,
      {
        [_jN]: _gCC,
      },
    ],
  ]
);
export var ColorSpacePassthroughSettings = struct(n0, _CSPS, 0, [], []);
export var CreateChannelRequest = struct(
  n0,
  _CCR,
  0,
  [_CIS, _CCh, _Des, _ESn, _IA, _IS, _LL, _Ma, _N, _RIe, _Re, _RA, _Ta, _V, _ASn, _CEV, _DRr],
  [
    [
      () => CdiInputSpecification,
      {
        [_jN]: _cIS,
      },
    ],
    [
      0,
      {
        [_jN]: _cCh,
      },
    ],
    [
      () => __listOfOutputDestination,
      {
        [_jN]: _des,
      },
    ],
    [
      () => EncoderSettings,
      {
        [_jN]: _eSn,
      },
    ],
    [
      () => __listOfInputAttachment,
      {
        [_jN]: _iA,
      },
    ],
    [
      () => InputSpecification,
      {
        [_jN]: _iS,
      },
    ],
    [
      0,
      {
        [_jN]: _lL,
      },
    ],
    [
      () => MaintenanceCreateSettings,
      {
        [_jN]: _ma,
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
        [_jN]: _rIe,
        [_iTd]: 1,
      },
    ],
    [
      0,
      {
        [_jN]: _re,
      },
    ],
    [
      0,
      {
        [_jN]: _rA,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      () => VpcOutputSettings,
      {
        [_jN]: _v,
      },
    ],
    [
      () => AnywhereSettings,
      {
        [_jN]: _aSn,
      },
    ],
    [
      () => ChannelEngineVersionRequest,
      {
        [_jN]: _cEV,
      },
    ],
    [
      2,
      {
        [_jN]: _dRr,
      },
    ],
  ]
);
export var CreateChannelResponse = struct(
  n0,
  _CCRr,
  0,
  [_Ch],
  [
    [
      () => Channel,
      {
        [_jN]: _cha,
      },
    ],
  ]
);
export var DeleteChannelRequest = struct(n0, _DCR, 0, [_CIha], [[0, 1]]);
export var DeleteChannelResponse = struct(
  n0,
  _DCRe,
  0,
  [_Ar, _CIS, _CCh, _Des, _EE, _ESn, _I, _IA, _IS, _LL, _Ma, _N, _PDi, _PRC, _RA, _St, _Ta, _V, _ASn, _CEV],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      () => CdiInputSpecification,
      {
        [_jN]: _cIS,
      },
    ],
    [
      0,
      {
        [_jN]: _cCh,
      },
    ],
    [
      () => __listOfOutputDestination,
      {
        [_jN]: _des,
      },
    ],
    [
      () => __listOfChannelEgressEndpoint,
      {
        [_jN]: _eE,
      },
    ],
    [
      () => EncoderSettings,
      {
        [_jN]: _eSn,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      () => __listOfInputAttachment,
      {
        [_jN]: _iA,
      },
    ],
    [
      () => InputSpecification,
      {
        [_jN]: _iS,
      },
    ],
    [
      0,
      {
        [_jN]: _lL,
      },
    ],
    [
      () => MaintenanceStatus,
      {
        [_jN]: _ma,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => __listOfPipelineDetail,
      {
        [_jN]: _pDi,
      },
    ],
    [
      1,
      {
        [_jN]: _pRC,
      },
    ],
    [
      0,
      {
        [_jN]: _rA,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      () => VpcOutputSettingsDescription,
      {
        [_jN]: _v,
      },
    ],
    [
      () => DescribeAnywhereSettings,
      {
        [_jN]: _aSn,
      },
    ],
    [
      () => ChannelEngineVersionResponse,
      {
        [_jN]: _cEV,
      },
    ],
  ]
);
export var DescribeAnywhereSettings = struct(
  n0,
  _DAS,
  0,
  [_CPGI, _CI],
  [
    [
      0,
      {
        [_jN]: _cPGI,
      },
    ],
    [
      0,
      {
        [_jN]: _cI,
      },
    ],
  ]
);
export var DescribeChannelRequest = struct(n0, _DCRes, 0, [_CIha], [[0, 1]]);
export var DescribeChannelResponse = struct(
  n0,
  _DCResc,
  0,
  [_Ar, _CIS, _CCh, _Des, _EE, _ESn, _I, _IA, _IS, _LL, _Ma, _N, _PDi, _PRC, _RA, _St, _Ta, _V, _ASn, _CEV],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      () => CdiInputSpecification,
      {
        [_jN]: _cIS,
      },
    ],
    [
      0,
      {
        [_jN]: _cCh,
      },
    ],
    [
      () => __listOfOutputDestination,
      {
        [_jN]: _des,
      },
    ],
    [
      () => __listOfChannelEgressEndpoint,
      {
        [_jN]: _eE,
      },
    ],
    [
      () => EncoderSettings,
      {
        [_jN]: _eSn,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      () => __listOfInputAttachment,
      {
        [_jN]: _iA,
      },
    ],
    [
      () => InputSpecification,
      {
        [_jN]: _iS,
      },
    ],
    [
      0,
      {
        [_jN]: _lL,
      },
    ],
    [
      () => MaintenanceStatus,
      {
        [_jN]: _ma,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => __listOfPipelineDetail,
      {
        [_jN]: _pDi,
      },
    ],
    [
      1,
      {
        [_jN]: _pRC,
      },
    ],
    [
      0,
      {
        [_jN]: _rA,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      () => VpcOutputSettingsDescription,
      {
        [_jN]: _v,
      },
    ],
    [
      () => DescribeAnywhereSettings,
      {
        [_jN]: _aSn,
      },
    ],
    [
      () => ChannelEngineVersionResponse,
      {
        [_jN]: _cEV,
      },
    ],
  ]
);
export var DescribeScheduleRequest = struct(
  n0,
  _DSRes,
  0,
  [_CIha, _MR, _NT],
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
export var DescribeScheduleResponse = struct(
  n0,
  _DSResc,
  0,
  [_NT, _SA],
  [
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      () => __listOfScheduleAction,
      {
        [_jN]: _sA,
      },
    ],
  ]
);
export var DolbyVision81Settings = struct(n0, _DVS, 0, [], []);
export var DvbNitSettings = struct(
  n0,
  _DNSv,
  0,
  [_NI, _NN, _RIep],
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
        [_jN]: _rIep,
      },
    ],
  ]
);
export var DvbSdtSettings = struct(
  n0,
  _DSS,
  0,
  [_OSu, _RIep, _SNer, _SPN],
  [
    [
      0,
      {
        [_jN]: _oSu,
      },
    ],
    [
      1,
      {
        [_jN]: _rIep,
      },
    ],
    [
      0,
      {
        [_jN]: _sNer,
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
  [_Al, _BC, _BO, _Fo, _FCo, _FO, _FR, _FS, _OCu, _OS, _SC, _SO, _SXO, _SYO, _TGC, _XP, _YP, _SRu],
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
      () => InputLocation,
      {
        [_jN]: _fo,
      },
    ],
    [
      0,
      {
        [_jN]: _fCo,
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
        [_jN]: _fR,
      },
    ],
    [
      0,
      {
        [_jN]: _fS,
      },
    ],
    [
      0,
      {
        [_jN]: _oCu,
      },
    ],
    [
      1,
      {
        [_jN]: _oS,
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
        [_jN]: _tGC,
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
    [
      0,
      {
        [_jN]: _sRu,
      },
    ],
  ]
);
export var DvbSubSourceSettings = struct(
  n0,
  _DSSS,
  0,
  [_OL, _Pi],
  [
    [
      0,
      {
        [_jN]: _oL,
      },
    ],
    [
      1,
      {
        [_jN]: _pi,
      },
    ],
  ]
);
export var DvbTdtSettings = struct(
  n0,
  _DTS,
  0,
  [_RIep],
  [
    [
      1,
      {
        [_jN]: _rIep,
      },
    ],
  ]
);
export var Eac3AtmosSettings = struct(
  n0,
  _EAS,
  0,
  [_B, _CM, _D, _DL, _DRrc, _HT, _STu],
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
        [_jN]: _dL,
      },
    ],
    [
      0,
      {
        [_jN]: _dRrc,
      },
    ],
    [
      1,
      {
        [_jN]: _hT,
      },
    ],
    [
      1,
      {
        [_jN]: _sTu,
      },
    ],
  ]
);
export var Eac3Settings = struct(
  n0,
  _ES,
  0,
  [
    _AC,
    _B,
    _BM,
    _CM,
    _DF,
    _D,
    _DL,
    _DRrc,
    _LCf,
    _LF,
    _LRCML,
    _LRSML,
    _LRCMLt,
    _LRSMLt,
    _MC,
    _PCa,
    _PCh,
    _SD,
    _SEM,
    _SM,
  ],
  [
    [
      0,
      {
        [_jN]: _aC,
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
        [_jN]: _dL,
      },
    ],
    [
      0,
      {
        [_jN]: _dRrc,
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
export var EbuTtDDestinationSettings = struct(
  n0,
  _ETDDS,
  0,
  [_CH, _FLG, _FF, _SCt, _DFS, _DLH],
  [
    [
      0,
      {
        [_jN]: _cH,
      },
    ],
    [
      0,
      {
        [_jN]: _fLG,
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
        [_jN]: _sCt,
      },
    ],
    [
      1,
      {
        [_jN]: _dFS,
      },
    ],
    [
      1,
      {
        [_jN]: _dLH,
      },
    ],
  ]
);
export var EmbeddedDestinationSettings = struct(n0, _EDS, 0, [], []);
export var EmbeddedPlusScte20DestinationSettings = struct(n0, _EPSDS, 0, [], []);
export var EmbeddedSourceSettings = struct(
  n0,
  _ESS,
  0,
  [_CTon, _SDc, _SCN, _STN],
  [
    [
      0,
      {
        [_jN]: _cTo,
      },
    ],
    [
      0,
      {
        [_jN]: _sDc,
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
  ]
);
export var EncoderSettings = struct(
  n0,
  _ESn,
  0,
  [_ADud, _AB, _ACv, _BSl, _CDa, _FAe, _GC, _MGC, _NC, _OG, _TCi, _VD, _TCh, _CCS],
  [
    [
      () => __listOfAudioDescription,
      {
        [_jN]: _aDu,
      },
    ],
    [
      () => AvailBlanking,
      {
        [_jN]: _aB,
      },
    ],
    [
      () => AvailConfiguration,
      {
        [_jN]: _aCv,
      },
    ],
    [
      () => BlackoutSlate,
      {
        [_jN]: _bSl,
      },
    ],
    [
      () => __listOfCaptionDescription,
      {
        [_jN]: _cD,
      },
    ],
    [
      () => FeatureActivations,
      {
        [_jN]: _fAe,
      },
    ],
    [
      () => GlobalConfiguration,
      {
        [_jN]: _gC,
      },
    ],
    [
      () => MotionGraphicsConfiguration,
      {
        [_jN]: _mGC,
      },
    ],
    [
      () => NielsenConfiguration,
      {
        [_jN]: _nC,
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
      () => __listOfVideoDescription,
      {
        [_jN]: _vD,
      },
    ],
    [
      () => ThumbnailConfiguration,
      {
        [_jN]: _tCh,
      },
    ],
    [
      () => ColorCorrectionSettings,
      {
        [_jN]: _cCS,
      },
    ],
  ]
);
export var EpochLockingSettings = struct(
  n0,
  _ELS,
  0,
  [_CEu, _JST],
  [
    [
      0,
      {
        [_jN]: _cE,
      },
    ],
    [
      0,
      {
        [_jN]: _jST,
      },
    ],
  ]
);
export var Esam = struct(
  n0,
  _Es,
  0,
  [_API, _AAO, _PP, _PE, _Us, _ZI],
  [
    [
      0,
      {
        [_jN]: _aPI,
      },
    ],
    [
      1,
      {
        [_jN]: _aAO,
      },
    ],
    [
      0,
      {
        [_jN]: _pP,
      },
    ],
    [
      0,
      {
        [_jN]: _pE,
      },
    ],
    [
      0,
      {
        [_jN]: _us,
      },
    ],
    [
      0,
      {
        [_jN]: _zI,
      },
    ],
  ]
);
export var FailoverCondition = struct(
  n0,
  _FCa,
  0,
  [_FCS],
  [
    [
      () => FailoverConditionSettings,
      {
        [_jN]: _fCS,
      },
    ],
  ]
);
export var FailoverConditionSettings = struct(
  n0,
  _FCS,
  0,
  [_ASSud, _ILS, _VBS],
  [
    [
      () => AudioSilenceFailoverSettings,
      {
        [_jN]: _aSSu,
      },
    ],
    [
      () => InputLossFailoverSettings,
      {
        [_jN]: _iLS,
      },
    ],
    [
      () => VideoBlackFailoverSettings,
      {
        [_jN]: _vBS,
      },
    ],
  ]
);
export var FeatureActivations = struct(
  n0,
  _FAe,
  0,
  [_IPSA, _OSIOSA],
  [
    [
      0,
      {
        [_jN]: _iPSA,
      },
    ],
    [
      0,
      {
        [_jN]: _oSIOSA,
      },
    ],
  ]
);
export var FecOutputSettings = struct(
  n0,
  _FOS,
  0,
  [_CDo, _IF, _RL],
  [
    [
      1,
      {
        [_jN]: _cDo,
      },
    ],
    [
      0,
      {
        [_jN]: _iF,
      },
    ],
    [
      1,
      {
        [_jN]: _rL,
      },
    ],
  ]
);
export var FixedModeScheduleActionStartSettings = struct(
  n0,
  _FMSASS,
  0,
  [_Ti],
  [
    [
      0,
      {
        [_jN]: _ti,
      },
    ],
  ]
);
export var Fmp4HlsSettings = struct(
  n0,
  _FHS,
  0,
  [_ARS, _NIB, _TMB],
  [
    [
      0,
      {
        [_jN]: _aRS,
      },
    ],
    [
      0,
      {
        [_jN]: _nIB,
      },
    ],
    [
      0,
      {
        [_jN]: _tMB,
      },
    ],
  ]
);
export var FollowModeScheduleActionStartSettings = struct(
  n0,
  _FMSASSo,
  0,
  [_FPo, _RAN],
  [
    [
      0,
      {
        [_jN]: _fPo,
      },
    ],
    [
      0,
      {
        [_jN]: _rAN,
      },
    ],
  ]
);
export var FrameCaptureCdnSettings = struct(
  n0,
  _FCCS,
  0,
  [_FCSS],
  [
    [
      () => FrameCaptureS3Settings,
      {
        [_jN]: _fCSS,
      },
    ],
  ]
);
export var FrameCaptureGroupSettings = struct(
  n0,
  _FCGS,
  0,
  [_De, _FCCS],
  [
    [
      () => OutputLocationRef,
      {
        [_jN]: _de,
      },
    ],
    [
      () => FrameCaptureCdnSettings,
      {
        [_jN]: _fCCS,
      },
    ],
  ]
);
export var FrameCaptureHlsSettings = struct(n0, _FCHS, 0, [], []);
export var FrameCaptureOutputSettings = struct(
  n0,
  _FCOS,
  0,
  [_NM],
  [
    [
      0,
      {
        [_jN]: _nM,
      },
    ],
  ]
);
export var FrameCaptureS3Settings = struct(
  n0,
  _FCSS,
  0,
  [_CA],
  [
    [
      0,
      {
        [_jN]: _cA,
      },
    ],
  ]
);
export var FrameCaptureSettings = struct(
  n0,
  _FCSr,
  0,
  [_CIa, _CIU, _TBS],
  [
    [
      1,
      {
        [_jN]: _cIa,
      },
    ],
    [
      0,
      {
        [_jN]: _cIU,
      },
    ],
    [
      () => TimecodeBurninSettings,
      {
        [_jN]: _tBS,
      },
    ],
  ]
);
export var GlobalConfiguration = struct(
  n0,
  _GC,
  0,
  [_IAG, _IEA, _ILB, _OLM, _OTS, _SLFI, _OLS],
  [
    [
      1,
      {
        [_jN]: _iAG,
      },
    ],
    [
      0,
      {
        [_jN]: _iEA,
      },
    ],
    [
      () => InputLossBehavior,
      {
        [_jN]: _iLB,
      },
    ],
    [
      0,
      {
        [_jN]: _oLM,
      },
    ],
    [
      0,
      {
        [_jN]: _oTS,
      },
    ],
    [
      0,
      {
        [_jN]: _sLFI,
      },
    ],
    [
      () => OutputLockingSettings,
      {
        [_jN]: _oLS,
      },
    ],
  ]
);
export var H264ColorSpaceSettings = struct(
  n0,
  _HCSS,
  0,
  [_CSPS, _RSec, _RSece],
  [
    [
      () => ColorSpacePassthroughSettings,
      {
        [_jN]: _cSPS,
      },
    ],
    [
      () => Rec601Settings,
      {
        [_jN]: _rSec,
      },
    ],
    [
      () => Rec709Settings,
      {
        [_jN]: _rSece,
      },
    ],
  ]
);
export var H264FilterSettings = struct(
  n0,
  _HFS,
  0,
  [_TFS, _BRFS],
  [
    [
      () => TemporalFilterSettings,
      {
        [_jN]: _tFS,
      },
    ],
    [
      () => BandwidthReductionFilterSettings,
      {
        [_jN]: _bRFS,
      },
    ],
  ]
);
export var H264Settings = struct(
  n0,
  _HSe,
  0,
  [
    _AQ,
    _ASf,
    _B,
    _BFP,
    _BS,
    _CMo,
    _CSS,
    _EEn,
    _FSi,
    _FA,
    _FAl,
    _FFP,
    _FCr,
    _FD,
    _FN,
    _GBR,
    _GCCo,
    _GNBF,
    _GS,
    _GSU,
    _L,
    _LARC,
    _MB,
    _MII,
    _NRF,
    _PCar,
    _PD,
    _PN,
    _P,
    _QL,
    _QQL,
    _RCM,
    _STca,
    _SCD,
    _Sl,
    _Sof,
    _SAp,
    _SLu,
    _Sy,
    _TA,
    _TI,
    _TBS,
    _MQ,
    _MBi,
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
        [_jN]: _aSf,
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
        [_jN]: _bFP,
      },
    ],
    [
      1,
      {
        [_jN]: _bS,
      },
    ],
    [
      0,
      {
        [_jN]: _cMo,
      },
    ],
    [
      () => H264ColorSpaceSettings,
      {
        [_jN]: _cSS,
      },
    ],
    [
      0,
      {
        [_jN]: _eEn,
      },
    ],
    [
      () => H264FilterSettings,
      {
        [_jN]: _fSi,
      },
    ],
    [
      0,
      {
        [_jN]: _fA,
      },
    ],
    [
      0,
      {
        [_jN]: _fAl,
      },
    ],
    [
      0,
      {
        [_jN]: _fFP,
      },
    ],
    [
      0,
      {
        [_jN]: _fCr,
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
        [_jN]: _gCCo,
      },
    ],
    [
      1,
      {
        [_jN]: _gNBF,
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
      0,
      {
        [_jN]: _l,
      },
    ],
    [
      0,
      {
        [_jN]: _lARC,
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
      0,
      {
        [_jN]: _p,
      },
    ],
    [
      0,
      {
        [_jN]: _qL,
      },
    ],
    [
      1,
      {
        [_jN]: _qQL,
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
        [_jN]: _sTca,
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
      1,
      {
        [_jN]: _sof,
      },
    ],
    [
      0,
      {
        [_jN]: _sAp,
      },
    ],
    [
      0,
      {
        [_jN]: _sLu,
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
        [_jN]: _tA,
      },
    ],
    [
      0,
      {
        [_jN]: _tI,
      },
    ],
    [
      () => TimecodeBurninSettings,
      {
        [_jN]: _tBS,
      },
    ],
    [
      1,
      {
        [_jN]: _mQ,
      },
    ],
    [
      1,
      {
        [_jN]: _mBi,
      },
    ],
  ]
);
export var H265ColorSpaceSettings = struct(
  n0,
  _HCSSo,
  0,
  [_CSPS, _DVS, _HS, _RSec, _RSece],
  [
    [
      () => ColorSpacePassthroughSettings,
      {
        [_jN]: _cSPS,
      },
    ],
    [
      () => DolbyVision81Settings,
      {
        [_jN]: _dVS,
      },
    ],
    [
      () => Hdr10Settings,
      {
        [_jN]: _hS,
      },
    ],
    [
      () => Rec601Settings,
      {
        [_jN]: _rSec,
      },
    ],
    [
      () => Rec709Settings,
      {
        [_jN]: _rSece,
      },
    ],
  ]
);
export var H265FilterSettings = struct(
  n0,
  _HFSi,
  0,
  [_TFS, _BRFS],
  [
    [
      () => TemporalFilterSettings,
      {
        [_jN]: _tFS,
      },
    ],
    [
      () => BandwidthReductionFilterSettings,
      {
        [_jN]: _bRFS,
      },
    ],
  ]
);
export var H265Settings = struct(
  n0,
  _HSet,
  0,
  [
    _AQ,
    _ASf,
    _ATF,
    _B,
    _BS,
    _CMo,
    _CSS,
    _FSi,
    _FA,
    _FAl,
    _FD,
    _FN,
    _GCCo,
    _GS,
    _GSU,
    _L,
    _LARC,
    _MB,
    _MII,
    _PD,
    _PN,
    _P,
    _QQL,
    _RCM,
    _STca,
    _SCD,
    _Sl,
    _Tie,
    _TI,
    _TBS,
    _MOPB,
    _MTP,
    _TH,
    _TP,
    _TW,
    _TS,
    _MQ,
    _Deb,
    _GBR,
    _GNBF,
    _MBi,
    _SLu,
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
        [_jN]: _aSf,
      },
    ],
    [
      0,
      {
        [_jN]: _aTF,
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
        [_jN]: _bS,
      },
    ],
    [
      0,
      {
        [_jN]: _cMo,
      },
    ],
    [
      () => H265ColorSpaceSettings,
      {
        [_jN]: _cSS,
      },
    ],
    [
      () => H265FilterSettings,
      {
        [_jN]: _fSi,
      },
    ],
    [
      0,
      {
        [_jN]: _fA,
      },
    ],
    [
      0,
      {
        [_jN]: _fAl,
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
        [_jN]: _gCCo,
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
      0,
      {
        [_jN]: _l,
      },
    ],
    [
      0,
      {
        [_jN]: _lARC,
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
        [_jN]: _p,
      },
    ],
    [
      1,
      {
        [_jN]: _qQL,
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
        [_jN]: _sTca,
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
        [_jN]: _tie,
      },
    ],
    [
      0,
      {
        [_jN]: _tI,
      },
    ],
    [
      () => TimecodeBurninSettings,
      {
        [_jN]: _tBS,
      },
    ],
    [
      0,
      {
        [_jN]: _mOPB,
      },
    ],
    [
      0,
      {
        [_jN]: _mTP,
      },
    ],
    [
      1,
      {
        [_jN]: _tH,
      },
    ],
    [
      0,
      {
        [_jN]: _tP,
      },
    ],
    [
      1,
      {
        [_jN]: _tW,
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
        [_jN]: _mQ,
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
        [_jN]: _gBR,
      },
    ],
    [
      1,
      {
        [_jN]: _gNBF,
      },
    ],
    [
      1,
      {
        [_jN]: _mBi,
      },
    ],
    [
      0,
      {
        [_jN]: _sLu,
      },
    ],
  ]
);
export var Hdr10Settings = struct(
  n0,
  _HS,
  0,
  [_MCa, _MF],
  [
    [
      1,
      {
        [_jN]: _mCa,
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
export var HlsAkamaiSettings = struct(
  n0,
  _HAS,
  0,
  [_CRI, _FDi, _HTM, _NR, _RD, _Sa, _To],
  [
    [
      1,
      {
        [_jN]: _cRI,
      },
    ],
    [
      1,
      {
        [_jN]: _fDi,
      },
    ],
    [
      0,
      {
        [_jN]: _hTM,
      },
    ],
    [
      1,
      {
        [_jN]: _nR,
      },
    ],
    [
      1,
      {
        [_jN]: _rD,
      },
    ],
    [
      0,
      {
        [_jN]: _sa,
      },
    ],
    [
      0,
      {
        [_jN]: _to,
      },
    ],
  ]
);
export var HlsBasicPutSettings = struct(
  n0,
  _HBPS,
  0,
  [_CRI, _FDi, _NR, _RD],
  [
    [
      1,
      {
        [_jN]: _cRI,
      },
    ],
    [
      1,
      {
        [_jN]: _fDi,
      },
    ],
    [
      1,
      {
        [_jN]: _nR,
      },
    ],
    [
      1,
      {
        [_jN]: _rD,
      },
    ],
  ]
);
export var HlsCdnSettings = struct(
  n0,
  _HCS,
  0,
  [_HAS, _HBPS, _HMSS, _HSS, _HWS],
  [
    [
      () => HlsAkamaiSettings,
      {
        [_jN]: _hAS,
      },
    ],
    [
      () => HlsBasicPutSettings,
      {
        [_jN]: _hBPS,
      },
    ],
    [
      () => HlsMediaStoreSettings,
      {
        [_jN]: _hMSS,
      },
    ],
    [
      () => HlsS3Settings,
      {
        [_jN]: _hSS,
      },
    ],
    [
      () => HlsWebdavSettings,
      {
        [_jN]: _hWS,
      },
    ],
  ]
);
export var HlsGroupSettings = struct(
  n0,
  _HGS,
  0,
  [
    _AM,
    _BUC,
    _BUCa,
    _BUM,
    _BUMa,
    _CLMa,
    _CLS,
    _CCl,
    _CSod,
    _CIo,
    _De,
    _DSi,
    _DT,
    _ETn,
    _HCS,
    _HIST,
    _IFOP,
    _ISB,
    _INS,
    _ILA,
    _IIM,
    _ISv,
    _KS,
    _KF,
    _KFV,
    _KPS,
    _MCan,
    _MDF,
    _MSL,
    _Mo,
    _OSut,
    _PDT,
    _PDTC,
    _PDTP,
    _RM,
    _SL,
    _SMe,
    _SPS,
    _SIR,
    _TMIF,
    _TMIP,
    _TDM,
    _TFM,
  ],
  [
    [
      64 | 0,
      {
        [_jN]: _aM,
      },
    ],
    [
      0,
      {
        [_jN]: _bUC,
      },
    ],
    [
      0,
      {
        [_jN]: _bUCa,
      },
    ],
    [
      0,
      {
        [_jN]: _bUM,
      },
    ],
    [
      0,
      {
        [_jN]: _bUMa,
      },
    ],
    [
      () => __listOfCaptionLanguageMapping,
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
        [_jN]: _cCl,
      },
    ],
    [
      0,
      {
        [_jN]: _cSod,
      },
    ],
    [
      0,
      {
        [_jN]: _cIo,
      },
    ],
    [
      () => OutputLocationRef,
      {
        [_jN]: _de,
      },
    ],
    [
      0,
      {
        [_jN]: _dSi,
      },
    ],
    [
      0,
      {
        [_jN]: _dT,
      },
    ],
    [
      0,
      {
        [_jN]: _eTn,
      },
    ],
    [
      () => HlsCdnSettings,
      {
        [_jN]: _hCS,
      },
    ],
    [
      0,
      {
        [_jN]: _hIST,
      },
    ],
    [
      0,
      {
        [_jN]: _iFOP,
      },
    ],
    [
      0,
      {
        [_jN]: _iSB,
      },
    ],
    [
      1,
      {
        [_jN]: _iNS,
      },
    ],
    [
      0,
      {
        [_jN]: _iLA,
      },
    ],
    [
      0,
      {
        [_jN]: _iIM,
      },
    ],
    [
      0,
      {
        [_jN]: _iSv,
      },
    ],
    [
      1,
      {
        [_jN]: _kS,
      },
    ],
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
      () => KeyProviderSettings,
      {
        [_jN]: _kPS,
      },
    ],
    [
      0,
      {
        [_jN]: _mCan,
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
        [_jN]: _mSL,
      },
    ],
    [
      0,
      {
        [_jN]: _mo,
      },
    ],
    [
      0,
      {
        [_jN]: _oSut,
      },
    ],
    [
      0,
      {
        [_jN]: _pDT,
      },
    ],
    [
      0,
      {
        [_jN]: _pDTC,
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
        [_jN]: _rM,
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
        [_jN]: _sMe,
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
    [
      0,
      {
        [_jN]: _tFM,
      },
    ],
  ]
);
export var HlsId3SegmentTaggingScheduleActionSettings = struct(
  n0,
  _HISTSAS,
  0,
  [_Tag, _Id_],
  [
    [
      0,
      {
        [_jN]: _tag,
      },
    ],
    [
      0,
      {
        [_jN]: _id,
      },
    ],
  ]
);
export var HlsInputSettings = struct(
  n0,
  _HIS,
  0,
  [_Ba, _BSu, _Ret, _RIet, _SSc],
  [
    [
      1,
      {
        [_jN]: _ba,
      },
    ],
    [
      1,
      {
        [_jN]: _bSu,
      },
    ],
    [
      1,
      {
        [_jN]: _ret,
      },
    ],
    [
      1,
      {
        [_jN]: _rIet,
      },
    ],
    [
      0,
      {
        [_jN]: _sSc,
      },
    ],
  ]
);
export var HlsMediaStoreSettings = struct(
  n0,
  _HMSS,
  0,
  [_CRI, _FDi, _MSSC, _NR, _RD],
  [
    [
      1,
      {
        [_jN]: _cRI,
      },
    ],
    [
      1,
      {
        [_jN]: _fDi,
      },
    ],
    [
      0,
      {
        [_jN]: _mSSC,
      },
    ],
    [
      1,
      {
        [_jN]: _nR,
      },
    ],
    [
      1,
      {
        [_jN]: _rD,
      },
    ],
  ]
);
export var HlsOutputSettings = struct(
  n0,
  _HOS,
  0,
  [_HPT, _HSl, _NM, _SMeg],
  [
    [
      0,
      {
        [_jN]: _hPT,
      },
    ],
    [
      () => HlsSettings,
      {
        [_jN]: _hSl,
      },
    ],
    [
      0,
      {
        [_jN]: _nM,
      },
    ],
    [
      0,
      {
        [_jN]: _sMeg,
      },
    ],
  ]
);
export var HlsS3Settings = struct(
  n0,
  _HSS,
  0,
  [_CA],
  [
    [
      0,
      {
        [_jN]: _cA,
      },
    ],
  ]
);
export var HlsSettings = struct(
  n0,
  _HSl,
  0,
  [_AOHS, _FHS, _FCHS, _SHS],
  [
    [
      () => AudioOnlyHlsSettings,
      {
        [_jN]: _aOHS,
      },
    ],
    [
      () => Fmp4HlsSettings,
      {
        [_jN]: _fHS,
      },
    ],
    [
      () => FrameCaptureHlsSettings,
      {
        [_jN]: _fCHS,
      },
    ],
    [
      () => StandardHlsSettings,
      {
        [_jN]: _sHS,
      },
    ],
  ]
);
export var HlsTimedMetadataScheduleActionSettings = struct(
  n0,
  _HTMSAS,
  0,
  [_Id_],
  [
    [
      0,
      {
        [_jN]: _id,
      },
    ],
  ]
);
export var HlsWebdavSettings = struct(
  n0,
  _HWS,
  0,
  [_CRI, _FDi, _HTM, _NR, _RD],
  [
    [
      1,
      {
        [_jN]: _cRI,
      },
    ],
    [
      1,
      {
        [_jN]: _fDi,
      },
    ],
    [
      0,
      {
        [_jN]: _hTM,
      },
    ],
    [
      1,
      {
        [_jN]: _nR,
      },
    ],
    [
      1,
      {
        [_jN]: _rD,
      },
    ],
  ]
);
export var HtmlMotionGraphicsSettings = struct(n0, _HMGS, 0, [], []);
export var Id3SegmentTaggingScheduleActionSettings = struct(
  n0,
  _ISTSAS,
  0,
  [_Id_, _Tag],
  [
    [
      0,
      {
        [_jN]: _id,
      },
    ],
    [
      0,
      {
        [_jN]: _tag,
      },
    ],
  ]
);
export var ImmediateModeScheduleActionStartSettings = struct(n0, _IMSASS, 0, [], []);
export var InputAttachment = struct(
  n0,
  _IAnp,
  0,
  [_AIFS, _IAN, _IIn, _ISn, _LIN],
  [
    [
      () => AutomaticInputFailoverSettings,
      {
        [_jN]: _aIFS,
      },
    ],
    [
      0,
      {
        [_jN]: _iAN,
      },
    ],
    [
      0,
      {
        [_jN]: _iIn,
      },
    ],
    [
      () => InputSettings,
      {
        [_jN]: _iSn,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _lIN,
      },
    ],
  ]
);
export var InputChannelLevel = struct(
  n0,
  _ICLn,
  0,
  [_G, _ICn],
  [
    [
      1,
      {
        [_jN]: _g,
      },
    ],
    [
      1,
      {
        [_jN]: _iCn,
      },
    ],
  ]
);
export var InputClippingSettings = struct(
  n0,
  _ICSn,
  0,
  [_ITS, _STt, _STto],
  [
    [
      0,
      {
        [_jN]: _iTS,
      },
    ],
    [
      () => StartTimecode,
      {
        [_jN]: _sTt,
      },
    ],
    [
      () => StopTimecode,
      {
        [_jN]: _sTto,
      },
    ],
  ]
);
export var InputLocation = struct(
  n0,
  _IL,
  0,
  [_PP, _U, _Us],
  [
    [
      0,
      {
        [_jN]: _pP,
      },
    ],
    [
      0,
      {
        [_jN]: _u,
      },
    ],
    [
      0,
      {
        [_jN]: _us,
      },
    ],
  ]
);
export var InputLossBehavior = struct(
  n0,
  _ILB,
  0,
  [_BFM, _ILIC, _ILIS, _ILIT, _RFM],
  [
    [
      1,
      {
        [_jN]: _bFM,
      },
    ],
    [
      0,
      {
        [_jN]: _iLIC,
      },
    ],
    [
      () => InputLocation,
      {
        [_jN]: _iLIS,
      },
    ],
    [
      0,
      {
        [_jN]: _iLIT,
      },
    ],
    [
      1,
      {
        [_jN]: _rFM,
      },
    ],
  ]
);
export var InputLossFailoverSettings = struct(
  n0,
  _ILFS,
  0,
  [_ILTM],
  [
    [
      1,
      {
        [_jN]: _iLTM,
      },
    ],
  ]
);
export var InputPrepareScheduleActionSettings = struct(
  n0,
  _IPSAS,
  0,
  [_IANR, _ICSn, _UPr],
  [
    [
      0,
      {
        [_jN]: _iANR,
      },
    ],
    [
      () => InputClippingSettings,
      {
        [_jN]: _iCSn,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _uPr,
      },
    ],
  ]
);
export var InputSettings = struct(
  n0,
  _ISn,
  0,
  [_ASud, _CSap, _DFe, _DFen, _FSil, _IFn, _NIS, _SP, _SDP, _SEB, _VS],
  [
    [
      () => __listOfAudioSelector,
      {
        [_jN]: _aSu,
      },
    ],
    [
      () => __listOfCaptionSelector,
      {
        [_jN]: _cSa,
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
      1,
      {
        [_jN]: _fSil,
      },
    ],
    [
      0,
      {
        [_jN]: _iFn,
      },
    ],
    [
      () => NetworkInputSettings,
      {
        [_jN]: _nIS,
      },
    ],
    [
      1,
      {
        [_jN]: _sP,
      },
    ],
    [
      0,
      {
        [_jN]: _sDP,
      },
    ],
    [
      0,
      {
        [_jN]: _sEB,
      },
    ],
    [
      () => VideoSelector,
      {
        [_jN]: _vS,
      },
    ],
  ]
);
export var InputSpecification = struct(
  n0,
  _IS,
  0,
  [_Cod, _MBa, _R],
  [
    [
      0,
      {
        [_jN]: _cod,
      },
    ],
    [
      0,
      {
        [_jN]: _mBa,
      },
    ],
    [
      0,
      {
        [_jN]: _r,
      },
    ],
  ]
);
export var InputSwitchScheduleActionSettings = struct(
  n0,
  _ISSAS,
  0,
  [_IANR, _ICSn, _UPr],
  [
    [
      0,
      {
        [_jN]: _iANR,
      },
    ],
    [
      () => InputClippingSettings,
      {
        [_jN]: _iCSn,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _uPr,
      },
    ],
  ]
);
export var KeyProviderSettings = struct(
  n0,
  _KPS,
  0,
  [_SKS],
  [
    [
      () => StaticKeySettings,
      {
        [_jN]: _sKS,
      },
    ],
  ]
);
export var ListChannelsRequest = struct(
  n0,
  _LCR,
  0,
  [_MR, _NT],
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
  ]
);
export var ListChannelsResponse = struct(
  n0,
  _LCRi,
  0,
  [_Cha, _NT],
  [
    [
      () => __listOfChannelSummary,
      {
        [_jN]: _ch,
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
export var M2tsSettings = struct(
  n0,
  _MS,
  0,
  [
    _AIAB,
    _Ari,
    _ACPr,
    _ACPC,
    _ABM,
    _AFPP,
    _AP,
    _AST,
    _B,
    _BMu,
    _CDc,
    _DNSv,
    _DSS,
    _DSP,
    _DTS,
    _DTP,
    _Eb,
    _EAI,
    _ELM,
    _EPb,
    _EPc,
    _ERIP,
    _EPP,
    _ESP,
    _FT,
    _K,
    _KDP,
    _NIB,
    _NPB,
    _PIa,
    _PCc,
    _PPc,
    _PPcr,
    _PIm,
    _PPm,
    _PNro,
    _RMa,
    _SPc,
    _SCc,
    _SP,
    _SMegm,
    _SSe,
    _STe,
    _TMB,
    _TMPi,
    _TSI,
    _VP,
    _SPPM,
  ],
  [
    [
      0,
      {
        [_jN]: _aIAB,
      },
    ],
    [
      0,
      {
        [_jN]: _ari,
      },
    ],
    [
      0,
      {
        [_jN]: _aCPr,
      },
    ],
    [
      0,
      {
        [_jN]: _aCPC,
      },
    ],
    [
      0,
      {
        [_jN]: _aBM,
      },
    ],
    [
      1,
      {
        [_jN]: _aFPP,
      },
    ],
    [
      0,
      {
        [_jN]: _aP,
      },
    ],
    [
      0,
      {
        [_jN]: _aST,
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
        [_jN]: _cDc,
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
      0,
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
      0,
      {
        [_jN]: _dTP,
      },
    ],
    [
      0,
      {
        [_jN]: _eb,
      },
    ],
    [
      0,
      {
        [_jN]: _eAI,
      },
    ],
    [
      1,
      {
        [_jN]: _eLM,
      },
    ],
    [
      0,
      {
        [_jN]: _ePb,
      },
    ],
    [
      0,
      {
        [_jN]: _ePc,
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
        [_jN]: _ePP,
      },
    ],
    [
      0,
      {
        [_jN]: _eSP,
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
        [_jN]: _k,
      },
    ],
    [
      0,
      {
        [_jN]: _kDP,
      },
    ],
    [
      0,
      {
        [_jN]: _nIB,
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
        [_jN]: _pIa,
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
      0,
      {
        [_jN]: _pPcr,
      },
    ],
    [
      1,
      {
        [_jN]: _pIm,
      },
    ],
    [
      0,
      {
        [_jN]: _pPm,
      },
    ],
    [
      1,
      {
        [_jN]: _pNro,
      },
    ],
    [
      0,
      {
        [_jN]: _rMa,
      },
    ],
    [
      0,
      {
        [_jN]: _sPc,
      },
    ],
    [
      0,
      {
        [_jN]: _sCc,
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
        [_jN]: _sMegm,
      },
    ],
    [
      0,
      {
        [_jN]: _sSe,
      },
    ],
    [
      1,
      {
        [_jN]: _sTe,
      },
    ],
    [
      0,
      {
        [_jN]: _tMB,
      },
    ],
    [
      0,
      {
        [_jN]: _tMPi,
      },
    ],
    [
      1,
      {
        [_jN]: _tSI,
      },
    ],
    [
      0,
      {
        [_jN]: _vP,
      },
    ],
    [
      1,
      {
        [_jN]: _sPPM,
      },
    ],
  ]
);
export var M3u8Settings = struct(
  n0,
  _MSue,
  0,
  [_AFPP, _AP, _EPc, _NIB, _PIa, _PCc, _PPc, _PPcr, _PIm, _PPm, _PNro, _SB, _SP, _TMB, _TMPi, _TSI, _VP, _KB, _KDP],
  [
    [
      1,
      {
        [_jN]: _aFPP,
      },
    ],
    [
      0,
      {
        [_jN]: _aP,
      },
    ],
    [
      0,
      {
        [_jN]: _ePc,
      },
    ],
    [
      0,
      {
        [_jN]: _nIB,
      },
    ],
    [
      1,
      {
        [_jN]: _pIa,
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
      0,
      {
        [_jN]: _pPcr,
      },
    ],
    [
      1,
      {
        [_jN]: _pIm,
      },
    ],
    [
      0,
      {
        [_jN]: _pPm,
      },
    ],
    [
      1,
      {
        [_jN]: _pNro,
      },
    ],
    [
      0,
      {
        [_jN]: _sB,
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
        [_jN]: _tMB,
      },
    ],
    [
      0,
      {
        [_jN]: _tMPi,
      },
    ],
    [
      1,
      {
        [_jN]: _tSI,
      },
    ],
    [
      0,
      {
        [_jN]: _vP,
      },
    ],
    [
      0,
      {
        [_jN]: _kB,
      },
    ],
    [
      0,
      {
        [_jN]: _kDP,
      },
    ],
  ]
);
export var MaintenanceCreateSettings = struct(
  n0,
  _MCS,
  0,
  [_MDa, _MST],
  [
    [
      0,
      {
        [_jN]: _mDa,
      },
    ],
    [
      0,
      {
        [_jN]: _mST,
      },
    ],
  ]
);
export var MaintenanceStatus = struct(
  n0,
  _MSa,
  0,
  [_MDa, _MDai, _MSD, _MST],
  [
    [
      0,
      {
        [_jN]: _mDa,
      },
    ],
    [
      0,
      {
        [_jN]: _mDai,
      },
    ],
    [
      0,
      {
        [_jN]: _mSD,
      },
    ],
    [
      0,
      {
        [_jN]: _mST,
      },
    ],
  ]
);
export var MaintenanceUpdateSettings = struct(
  n0,
  _MUS,
  0,
  [_MDa, _MSD, _MST],
  [
    [
      0,
      {
        [_jN]: _mDa,
      },
    ],
    [
      0,
      {
        [_jN]: _mSD,
      },
    ],
    [
      0,
      {
        [_jN]: _mST,
      },
    ],
  ]
);
export var MediaPackageGroupSettings = struct(
  n0,
  _MPGS,
  0,
  [_De, _MVGS],
  [
    [
      () => OutputLocationRef,
      {
        [_jN]: _de,
      },
    ],
    [
      () => MediaPackageV2GroupSettings,
      {
        [_jN]: _mVGS,
      },
    ],
  ]
);
export var MediaPackageOutputDestinationSettings = struct(
  n0,
  _MPODS,
  0,
  [_CIha, _CG, _CN],
  [
    [
      0,
      {
        [_jN]: _cIha,
      },
    ],
    [
      0,
      {
        [_jN]: _cG,
      },
    ],
    [
      0,
      {
        [_jN]: _cN,
      },
    ],
  ]
);
export var MediaPackageOutputSettings = struct(
  n0,
  _MPOS,
  0,
  [_MPVDS],
  [
    [
      () => MediaPackageV2DestinationSettings,
      {
        [_jN]: _mPVDS,
      },
    ],
  ]
);
export var MediaPackageV2DestinationSettings = struct(
  n0,
  _MPVDS,
  0,
  [_AGI, _ARS, _HASl, _HD],
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
        [_jN]: _aRS,
      },
    ],
    [
      0,
      {
        [_jN]: _hASl,
      },
    ],
    [
      0,
      {
        [_jN]: _hD,
      },
    ],
  ]
);
export var MediaPackageV2GroupSettings = struct(
  n0,
  _MPVGS,
  0,
  [_CLMa],
  [
    [
      () => __listOfCaptionLanguageMapping,
      {
        [_jN]: _cLM,
      },
    ],
  ]
);
export var MotionGraphicsActivateScheduleActionSettings = struct(
  n0,
  _MGASAS,
  0,
  [_Du, _PP, _Ur, _Us],
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
        [_jN]: _pP,
      },
    ],
    [
      0,
      {
        [_jN]: _ur,
      },
    ],
    [
      0,
      {
        [_jN]: _us,
      },
    ],
  ]
);
export var MotionGraphicsConfiguration = struct(
  n0,
  _MGC,
  0,
  [_MGI, _MGS],
  [
    [
      0,
      {
        [_jN]: _mGI,
      },
    ],
    [
      () => MotionGraphicsSettings,
      {
        [_jN]: _mGS,
      },
    ],
  ]
);
export var MotionGraphicsDeactivateScheduleActionSettings = struct(n0, _MGDSAS, 0, [], []);
export var MotionGraphicsSettings = struct(
  n0,
  _MGS,
  0,
  [_HMGS],
  [
    [
      () => HtmlMotionGraphicsSettings,
      {
        [_jN]: _hMGS,
      },
    ],
  ]
);
export var Mp2Settings = struct(
  n0,
  _MSp,
  0,
  [_B, _CM, _SR],
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
        [_jN]: _cM,
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
export var Mpeg2FilterSettings = struct(
  n0,
  _MFS,
  0,
  [_TFS],
  [
    [
      () => TemporalFilterSettings,
      {
        [_jN]: _tFS,
      },
    ],
  ]
);
export var Mpeg2Settings = struct(
  n0,
  _MSpe,
  0,
  [_AQ, _ASf, _CMo, _CSol, _DAR, _FSi, _FA, _FD, _FN, _GCCo, _GNBF, _GS, _GSU, _STca, _SLu, _TI, _TBS],
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
        [_jN]: _aSf,
      },
    ],
    [
      0,
      {
        [_jN]: _cMo,
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
        [_jN]: _dAR,
      },
    ],
    [
      () => Mpeg2FilterSettings,
      {
        [_jN]: _fSi,
      },
    ],
    [
      0,
      {
        [_jN]: _fA,
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
        [_jN]: _gCCo,
      },
    ],
    [
      1,
      {
        [_jN]: _gNBF,
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
      0,
      {
        [_jN]: _sTca,
      },
    ],
    [
      0,
      {
        [_jN]: _sLu,
      },
    ],
    [
      0,
      {
        [_jN]: _tI,
      },
    ],
    [
      () => TimecodeBurninSettings,
      {
        [_jN]: _tBS,
      },
    ],
  ]
);
export var MsSmoothGroupSettings = struct(
  n0,
  _MSGS,
  0,
  [_API, _AOTC, _CMe, _CRI, _De, _EI, _EIM, _ESB, _FDi, _FL, _ILA, _NR, _RD, _SMe, _SDM, _STT, _SMB, _TOi, _TOM],
  [
    [
      0,
      {
        [_jN]: _aPI,
      },
    ],
    [
      0,
      {
        [_jN]: _aOTC,
      },
    ],
    [
      0,
      {
        [_jN]: _cMe,
      },
    ],
    [
      1,
      {
        [_jN]: _cRI,
      },
    ],
    [
      () => OutputLocationRef,
      {
        [_jN]: _de,
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
        [_jN]: _eIM,
      },
    ],
    [
      0,
      {
        [_jN]: _eSB,
      },
    ],
    [
      1,
      {
        [_jN]: _fDi,
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
        [_jN]: _iLA,
      },
    ],
    [
      1,
      {
        [_jN]: _nR,
      },
    ],
    [
      1,
      {
        [_jN]: _rD,
      },
    ],
    [
      0,
      {
        [_jN]: _sMe,
      },
    ],
    [
      1,
      {
        [_jN]: _sDM,
      },
    ],
    [
      0,
      {
        [_jN]: _sTT,
      },
    ],
    [
      0,
      {
        [_jN]: _sMB,
      },
    ],
    [
      0,
      {
        [_jN]: _tOi,
      },
    ],
    [
      0,
      {
        [_jN]: _tOM,
      },
    ],
  ]
);
export var MsSmoothOutputSettings = struct(
  n0,
  _MSOS,
  0,
  [_HPT, _NM],
  [
    [
      0,
      {
        [_jN]: _hPT,
      },
    ],
    [
      0,
      {
        [_jN]: _nM,
      },
    ],
  ]
);
export var MulticastInputSettings = struct(
  n0,
  _MIS,
  0,
  [_SIAo],
  [
    [
      0,
      {
        [_jN]: _sIAo,
      },
    ],
  ]
);
export var MultiplexContainerSettings = struct(
  n0,
  _MCSu,
  0,
  [_MMS],
  [
    [
      () => MultiplexM2tsSettings,
      {
        [_jN]: _mMS,
      },
    ],
  ]
);
export var MultiplexGroupSettings = struct(n0, _MGSu, 0, [], []);
export var MultiplexM2tsSettings = struct(
  n0,
  _MMS,
  0,
  [_AIAB, _Ari, _ABM, _AFPP, _AST, _CDc, _Eb, _ERIP, _K, _NIB, _PCc, _PPc, _SCc, _SPPM],
  [
    [
      0,
      {
        [_jN]: _aIAB,
      },
    ],
    [
      0,
      {
        [_jN]: _ari,
      },
    ],
    [
      0,
      {
        [_jN]: _aBM,
      },
    ],
    [
      1,
      {
        [_jN]: _aFPP,
      },
    ],
    [
      0,
      {
        [_jN]: _aST,
      },
    ],
    [
      0,
      {
        [_jN]: _cDc,
      },
    ],
    [
      0,
      {
        [_jN]: _eb,
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
        [_jN]: _k,
      },
    ],
    [
      0,
      {
        [_jN]: _nIB,
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
      0,
      {
        [_jN]: _sCc,
      },
    ],
    [
      1,
      {
        [_jN]: _sPPM,
      },
    ],
  ]
);
export var MultiplexOutputSettings = struct(
  n0,
  _MOS,
  0,
  [_De, _CS],
  [
    [
      () => OutputLocationRef,
      {
        [_jN]: _de,
      },
    ],
    [
      () => MultiplexContainerSettings,
      {
        [_jN]: _cS,
      },
    ],
  ]
);
export var MultiplexProgramChannelDestinationSettings = struct(
  n0,
  _MPCDS,
  0,
  [_MIu, _PNr],
  [
    [
      0,
      {
        [_jN]: _mIu,
      },
    ],
    [
      0,
      {
        [_jN]: _pNr,
      },
    ],
  ]
);
export var NetworkInputSettings = struct(
  n0,
  _NIS,
  0,
  [_HIS, _SV, _MIS],
  [
    [
      () => HlsInputSettings,
      {
        [_jN]: _hIS,
      },
    ],
    [
      0,
      {
        [_jN]: _sV,
      },
    ],
    [
      () => MulticastInputSettings,
      {
        [_jN]: _mIS,
      },
    ],
  ]
);
export var NielsenCBET = struct(
  n0,
  _NCBET,
  0,
  [_CCDS, _CSb, _Cs],
  [
    [
      0,
      {
        [_jN]: _cCDS,
      },
    ],
    [
      0,
      {
        [_jN]: _cSb,
      },
    ],
    [
      0,
      {
        [_jN]: _cs,
      },
    ],
  ]
);
export var NielsenConfiguration = struct(
  n0,
  _NC,
  0,
  [_DI, _NPTIT],
  [
    [
      0,
      {
        [_jN]: _dI,
      },
    ],
    [
      0,
      {
        [_jN]: _nPTIT,
      },
    ],
  ]
);
export var NielsenNaesIiNw = struct(
  n0,
  _NNIN,
  0,
  [_CDSh, _Si, _Tim],
  [
    [
      0,
      {
        [_jN]: _cDS,
      },
    ],
    [
      1,
      {
        [_jN]: _si,
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
export var NielsenWatermarksSettings = struct(
  n0,
  _NWS,
  0,
  [_NCS, _NDT, _NNINS],
  [
    [
      () => NielsenCBET,
      {
        [_jN]: _nCS,
      },
    ],
    [
      0,
      {
        [_jN]: _nDT,
      },
    ],
    [
      () => NielsenNaesIiNw,
      {
        [_jN]: _nNINS,
      },
    ],
  ]
);
export var Output = struct(
  n0,
  _Ou,
  0,
  [_ADN, _CDN, _ON, _OSutp, _VDN],
  [
    [
      64 | 0,
      {
        [_jN]: _aDN,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _cDN,
      },
    ],
    [
      0,
      {
        [_jN]: _oN,
      },
    ],
    [
      () => OutputSettings,
      {
        [_jN]: _oSutp,
      },
    ],
    [
      0,
      {
        [_jN]: _vDN,
      },
    ],
  ]
);
export var OutputDestination = struct(
  n0,
  _ODu,
  0,
  [_I, _MPSe, _MSul, _Se, _SSr, _LIN],
  [
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      () => __listOfMediaPackageOutputDestinationSettings,
      {
        [_jN]: _mPSe,
      },
    ],
    [
      () => MultiplexProgramChannelDestinationSettings,
      {
        [_jN]: _mSul,
      },
    ],
    [
      () => __listOfOutputDestinationSettings,
      {
        [_jN]: _set,
      },
    ],
    [
      () => __listOfSrtOutputDestinationSettings,
      {
        [_jN]: _sSr,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _lIN,
      },
    ],
  ]
);
export var OutputDestinationSettings = struct(
  n0,
  _ODS,
  0,
  [_PP, _SN, _Ur, _Us],
  [
    [
      0,
      {
        [_jN]: _pP,
      },
    ],
    [
      0,
      {
        [_jN]: _sN,
      },
    ],
    [
      0,
      {
        [_jN]: _ur,
      },
    ],
    [
      0,
      {
        [_jN]: _us,
      },
    ],
  ]
);
export var OutputGroup = struct(
  n0,
  _OGu,
  0,
  [_N, _OGS, _Out],
  [
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
  [_AGS, _FCGS, _HGS, _MPGS, _MSGS, _MGSu, _RGS, _UGS, _CIGS, _SGS],
  [
    [
      () => ArchiveGroupSettings,
      {
        [_jN]: _aGS,
      },
    ],
    [
      () => FrameCaptureGroupSettings,
      {
        [_jN]: _fCGS,
      },
    ],
    [
      () => HlsGroupSettings,
      {
        [_jN]: _hGS,
      },
    ],
    [
      () => MediaPackageGroupSettings,
      {
        [_jN]: _mPGS,
      },
    ],
    [
      () => MsSmoothGroupSettings,
      {
        [_jN]: _mSGS,
      },
    ],
    [
      () => MultiplexGroupSettings,
      {
        [_jN]: _mGSu,
      },
    ],
    [
      () => RtmpGroupSettings,
      {
        [_jN]: _rGS,
      },
    ],
    [
      () => UdpGroupSettings,
      {
        [_jN]: _uGS,
      },
    ],
    [
      () => CmafIngestGroupSettings,
      {
        [_jN]: _cIGS,
      },
    ],
    [
      () => SrtGroupSettings,
      {
        [_jN]: _sGS,
      },
    ],
  ]
);
export var OutputLocationRef = struct(
  n0,
  _OLR,
  0,
  [_DRI],
  [
    [
      0,
      {
        [_jN]: _dRI,
      },
    ],
  ]
);
export var OutputLockingSettings = struct(
  n0,
  _OLS,
  0,
  [_ELS, _PLS],
  [
    [
      () => EpochLockingSettings,
      {
        [_jN]: _eLS,
      },
    ],
    [
      () => PipelineLockingSettings,
      {
        [_jN]: _pLS,
      },
    ],
  ]
);
export var OutputSettings = struct(
  n0,
  _OSutp,
  0,
  [_AOS, _FCOS, _HOS, _MPOS, _MSOS, _MOS, _ROS, _UOS, _CIOS, _SOS],
  [
    [
      () => ArchiveOutputSettings,
      {
        [_jN]: _aOS,
      },
    ],
    [
      () => FrameCaptureOutputSettings,
      {
        [_jN]: _fCOS,
      },
    ],
    [
      () => HlsOutputSettings,
      {
        [_jN]: _hOS,
      },
    ],
    [
      () => MediaPackageOutputSettings,
      {
        [_jN]: _mPOS,
      },
    ],
    [
      () => MsSmoothOutputSettings,
      {
        [_jN]: _mSOS,
      },
    ],
    [
      () => MultiplexOutputSettings,
      {
        [_jN]: _mOS,
      },
    ],
    [
      () => RtmpOutputSettings,
      {
        [_jN]: _rOS,
      },
    ],
    [
      () => UdpOutputSettings,
      {
        [_jN]: _uOS,
      },
    ],
    [
      () => CmafIngestOutputSettings,
      {
        [_jN]: _cIOS,
      },
    ],
    [
      () => SrtOutputSettings,
      {
        [_jN]: _sOS,
      },
    ],
  ]
);
export var PassThroughSettings = struct(n0, _PTS, 0, [], []);
export var PauseStateScheduleActionSettings = struct(
  n0,
  _PSSAS,
  0,
  [_Pip],
  [
    [
      () => __listOfPipelinePauseStateSettings,
      {
        [_jN]: _pip,
      },
    ],
  ]
);
export var PipelineDetail = struct(
  n0,
  _PDip,
  0,
  [_AIAN, _AISAN, _AMGAN, _AMGU, _PI, _CEV],
  [
    [
      0,
      {
        [_jN]: _aIAN,
      },
    ],
    [
      0,
      {
        [_jN]: _aISAN,
      },
    ],
    [
      0,
      {
        [_jN]: _aMGAN,
      },
    ],
    [
      0,
      {
        [_jN]: _aMGU,
      },
    ],
    [
      0,
      {
        [_jN]: _pI,
      },
    ],
    [
      () => ChannelEngineVersionResponse,
      {
        [_jN]: _cEV,
      },
    ],
  ]
);
export var PipelineLockingSettings = struct(n0, _PLS, 0, [], []);
export var PipelinePauseStateSettings = struct(
  n0,
  _PPSS,
  0,
  [_PI],
  [
    [
      0,
      {
        [_jN]: _pI,
      },
    ],
  ]
);
export var RawSettings = struct(n0, _RS, 0, [], []);
export var Rec601Settings = struct(n0, _RSec, 0, [], []);
export var Rec709Settings = struct(n0, _RSece, 0, [], []);
export var RemixSettings = struct(
  n0,
  _RSe,
  0,
  [_CMh, _CIhan, _COh],
  [
    [
      () => __listOfAudioChannelMapping,
      {
        [_jN]: _cMh,
      },
    ],
    [
      1,
      {
        [_jN]: _cIhan,
      },
    ],
    [
      1,
      {
        [_jN]: _cOh,
      },
    ],
  ]
);
export var RestartChannelPipelinesRequest = struct(
  n0,
  _RCPR,
  0,
  [_CIha, _PIi],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_jN]: _pIi,
      },
    ],
  ]
);
export var RestartChannelPipelinesResponse = struct(
  n0,
  _RCPRe,
  0,
  [_Ar, _CIS, _CCh, _Des, _EE, _ESn, _I, _IA, _IS, _LL, _Ma, _MSa, _N, _PDi, _PRC, _RA, _St, _Ta, _V, _ASn, _CEV],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      () => CdiInputSpecification,
      {
        [_jN]: _cIS,
      },
    ],
    [
      0,
      {
        [_jN]: _cCh,
      },
    ],
    [
      () => __listOfOutputDestination,
      {
        [_jN]: _des,
      },
    ],
    [
      () => __listOfChannelEgressEndpoint,
      {
        [_jN]: _eE,
      },
    ],
    [
      () => EncoderSettings,
      {
        [_jN]: _eSn,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      () => __listOfInputAttachment,
      {
        [_jN]: _iA,
      },
    ],
    [
      () => InputSpecification,
      {
        [_jN]: _iS,
      },
    ],
    [
      0,
      {
        [_jN]: _lL,
      },
    ],
    [
      () => MaintenanceStatus,
      {
        [_jN]: _ma,
      },
    ],
    [
      0,
      {
        [_jN]: _mSa,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => __listOfPipelineDetail,
      {
        [_jN]: _pDi,
      },
    ],
    [
      1,
      {
        [_jN]: _pRC,
      },
    ],
    [
      0,
      {
        [_jN]: _rA,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      () => VpcOutputSettingsDescription,
      {
        [_jN]: _v,
      },
    ],
    [
      () => DescribeAnywhereSettings,
      {
        [_jN]: _aSn,
      },
    ],
    [
      () => ChannelEngineVersionResponse,
      {
        [_jN]: _cEV,
      },
    ],
  ]
);
export var RtmpCaptionInfoDestinationSettings = struct(n0, _RCIDS, 0, [], []);
export var RtmpGroupSettings = struct(
  n0,
  _RGS,
  0,
  [_AM, _ASut, _CFB, _CLa, _CDap, _ILA, _RD, _IFNU],
  [
    [
      64 | 0,
      {
        [_jN]: _aM,
      },
    ],
    [
      0,
      {
        [_jN]: _aSut,
      },
    ],
    [
      0,
      {
        [_jN]: _cFB,
      },
    ],
    [
      1,
      {
        [_jN]: _cL,
      },
    ],
    [
      0,
      {
        [_jN]: _cDa,
      },
    ],
    [
      0,
      {
        [_jN]: _iLA,
      },
    ],
    [
      1,
      {
        [_jN]: _rD,
      },
    ],
    [
      0,
      {
        [_jN]: _iFNU,
      },
    ],
  ]
);
export var RtmpOutputSettings = struct(
  n0,
  _ROS,
  0,
  [_CMe, _CRI, _De, _NR],
  [
    [
      0,
      {
        [_jN]: _cMe,
      },
    ],
    [
      1,
      {
        [_jN]: _cRI,
      },
    ],
    [
      () => OutputLocationRef,
      {
        [_jN]: _de,
      },
    ],
    [
      1,
      {
        [_jN]: _nR,
      },
    ],
  ]
);
export var ScheduleAction = struct(
  n0,
  _SAc,
  0,
  [_ANc, _SAS, _SASS],
  [
    [
      0,
      {
        [_jN]: _aNc,
      },
    ],
    [
      () => ScheduleActionSettings,
      {
        [_jN]: _sAS,
      },
    ],
    [
      () => ScheduleActionStartSettings,
      {
        [_jN]: _sASS,
      },
    ],
  ]
);
export var ScheduleActionSettings = struct(
  n0,
  _SAS,
  0,
  [
    _HISTS,
    _HTMS,
    _IPS,
    _ISS,
    _MGIAS,
    _MGIDS,
    _PSS,
    _SIS,
    _SRTNS,
    _SSIS,
    _STSS,
    _SIAS,
    _SIDS,
    _SIOAS,
    _SIODS,
    _ISTS,
    _TMS,
  ],
  [
    [
      () => HlsId3SegmentTaggingScheduleActionSettings,
      {
        [_jN]: _hISTS,
      },
    ],
    [
      () => HlsTimedMetadataScheduleActionSettings,
      {
        [_jN]: _hTMS,
      },
    ],
    [
      () => InputPrepareScheduleActionSettings,
      {
        [_jN]: _iPS,
      },
    ],
    [
      () => InputSwitchScheduleActionSettings,
      {
        [_jN]: _iSS,
      },
    ],
    [
      () => MotionGraphicsActivateScheduleActionSettings,
      {
        [_jN]: _mGIAS,
      },
    ],
    [
      () => MotionGraphicsDeactivateScheduleActionSettings,
      {
        [_jN]: _mGIDS,
      },
    ],
    [
      () => PauseStateScheduleActionSettings,
      {
        [_jN]: _pSS,
      },
    ],
    [
      () => Scte35InputScheduleActionSettings,
      {
        [_jN]: _sIS,
      },
    ],
    [
      () => Scte35ReturnToNetworkScheduleActionSettings,
      {
        [_jN]: _sRTNS,
      },
    ],
    [
      () => Scte35SpliceInsertScheduleActionSettings,
      {
        [_jN]: _sSIS,
      },
    ],
    [
      () => Scte35TimeSignalScheduleActionSettings,
      {
        [_jN]: _sTSS,
      },
    ],
    [
      () => StaticImageActivateScheduleActionSettings,
      {
        [_jN]: _sIAS,
      },
    ],
    [
      () => StaticImageDeactivateScheduleActionSettings,
      {
        [_jN]: _sIDS,
      },
    ],
    [
      () => StaticImageOutputActivateScheduleActionSettings,
      {
        [_jN]: _sIOAS,
      },
    ],
    [
      () => StaticImageOutputDeactivateScheduleActionSettings,
      {
        [_jN]: _sIODS,
      },
    ],
    [
      () => Id3SegmentTaggingScheduleActionSettings,
      {
        [_jN]: _iSTS,
      },
    ],
    [
      () => TimedMetadataScheduleActionSettings,
      {
        [_jN]: _tMS,
      },
    ],
  ]
);
export var ScheduleActionStartSettings = struct(
  n0,
  _SASS,
  0,
  [_FMSASS, _FMSASSo, _IMSASS],
  [
    [
      () => FixedModeScheduleActionStartSettings,
      {
        [_jN]: _fMSASS,
      },
    ],
    [
      () => FollowModeScheduleActionStartSettings,
      {
        [_jN]: _fMSASSo,
      },
    ],
    [
      () => ImmediateModeScheduleActionStartSettings,
      {
        [_jN]: _iMSASS,
      },
    ],
  ]
);
export var Scte20PlusEmbeddedDestinationSettings = struct(n0, _SPEDS, 0, [], []);
export var Scte20SourceSettings = struct(
  n0,
  _SSSc,
  0,
  [_CTon, _SCN],
  [
    [
      0,
      {
        [_jN]: _cTo,
      },
    ],
    [
      1,
      {
        [_jN]: _sCN,
      },
    ],
  ]
);
export var Scte27DestinationSettings = struct(n0, _SDS, 0, [], []);
export var Scte27SourceSettings = struct(
  n0,
  _SSSct,
  0,
  [_OL, _Pi],
  [
    [
      0,
      {
        [_jN]: _oL,
      },
    ],
    [
      1,
      {
        [_jN]: _pi,
      },
    ],
  ]
);
export var Scte35DeliveryRestrictions = struct(
  n0,
  _SDR,
  0,
  [_AAF, _DRe, _NRBF, _WDAF],
  [
    [
      0,
      {
        [_jN]: _aAF,
      },
    ],
    [
      0,
      {
        [_jN]: _dRe,
      },
    ],
    [
      0,
      {
        [_jN]: _nRBF,
      },
    ],
    [
      0,
      {
        [_jN]: _wDAF,
      },
    ],
  ]
);
export var Scte35Descriptor = struct(
  n0,
  _SDct,
  0,
  [_SDSc],
  [
    [
      () => Scte35DescriptorSettings,
      {
        [_jN]: _sDSc,
      },
    ],
  ]
);
export var Scte35DescriptorSettings = struct(
  n0,
  _SDSc,
  0,
  [_SDSDS],
  [
    [
      () => Scte35SegmentationDescriptor,
      {
        [_jN]: _sDSDS,
      },
    ],
  ]
);
export var Scte35InputScheduleActionSettings = struct(
  n0,
  _SISAS,
  0,
  [_IANR, _Mo],
  [
    [
      0,
      {
        [_jN]: _iANR,
      },
    ],
    [
      0,
      {
        [_jN]: _mo,
      },
    ],
  ]
);
export var Scte35ReturnToNetworkScheduleActionSettings = struct(
  n0,
  _SRTNSAS,
  0,
  [_SEI],
  [
    [
      1,
      {
        [_jN]: _sEI,
      },
    ],
  ]
);
export var Scte35SegmentationDescriptor = struct(
  n0,
  _SSD,
  0,
  [_DRel, _SNeg, _SCI, _SDeg, _SEIe, _STI, _SUe, _SUT, _SE, _SSN, _SSE],
  [
    [
      () => Scte35DeliveryRestrictions,
      {
        [_jN]: _dRel,
      },
    ],
    [
      1,
      {
        [_jN]: _sNeg,
      },
    ],
    [
      0,
      {
        [_jN]: _sCI,
      },
    ],
    [
      1,
      {
        [_jN]: _sDeg,
      },
    ],
    [
      1,
      {
        [_jN]: _sEIe,
      },
    ],
    [
      1,
      {
        [_jN]: _sTI,
      },
    ],
    [
      0,
      {
        [_jN]: _sUe,
      },
    ],
    [
      1,
      {
        [_jN]: _sUT,
      },
    ],
    [
      1,
      {
        [_jN]: _sE,
      },
    ],
    [
      1,
      {
        [_jN]: _sSN,
      },
    ],
    [
      1,
      {
        [_jN]: _sSE,
      },
    ],
  ]
);
export var Scte35SpliceInsert = struct(
  n0,
  _SSI,
  0,
  [_AAO, _NRBF, _WDAF],
  [
    [
      1,
      {
        [_jN]: _aAO,
      },
    ],
    [
      0,
      {
        [_jN]: _nRBF,
      },
    ],
    [
      0,
      {
        [_jN]: _wDAF,
      },
    ],
  ]
);
export var Scte35SpliceInsertScheduleActionSettings = struct(
  n0,
  _SSISAS,
  0,
  [_Du, _SEI],
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
        [_jN]: _sEI,
      },
    ],
  ]
);
export var Scte35TimeSignalApos = struct(
  n0,
  _STSA,
  0,
  [_AAO, _NRBF, _WDAF],
  [
    [
      1,
      {
        [_jN]: _aAO,
      },
    ],
    [
      0,
      {
        [_jN]: _nRBF,
      },
    ],
    [
      0,
      {
        [_jN]: _wDAF,
      },
    ],
  ]
);
export var Scte35TimeSignalScheduleActionSettings = struct(
  n0,
  _STSSAS,
  0,
  [_SDcte],
  [
    [
      () => __listOfScte35Descriptor,
      {
        [_jN]: _sDct,
      },
    ],
  ]
);
export var SmpteTtDestinationSettings = struct(n0, _STDS, 0, [], []);
export var SrtGroupSettings = struct(
  n0,
  _SGS,
  0,
  [_ILA],
  [
    [
      0,
      {
        [_jN]: _iLA,
      },
    ],
  ]
);
export var SrtOutputDestinationSettings = struct(
  n0,
  _SODS,
  0,
  [_EPSA, _SIt, _Ur],
  [
    [
      0,
      {
        [_jN]: _ePSA,
      },
    ],
    [
      0,
      {
        [_jN]: _sIt,
      },
    ],
    [
      0,
      {
        [_jN]: _ur,
      },
    ],
  ]
);
export var SrtOutputSettings = struct(
  n0,
  _SOS,
  0,
  [_BMuf, _CS, _De, _ETn, _La],
  [
    [
      1,
      {
        [_jN]: _bMuf,
      },
    ],
    [
      () => UdpContainerSettings,
      {
        [_jN]: _cS,
      },
    ],
    [
      () => OutputLocationRef,
      {
        [_jN]: _de,
      },
    ],
    [
      0,
      {
        [_jN]: _eTn,
      },
    ],
    [
      1,
      {
        [_jN]: _la,
      },
    ],
  ]
);
export var StandardHlsSettings = struct(
  n0,
  _SHS,
  0,
  [_ARS, _MSue],
  [
    [
      0,
      {
        [_jN]: _aRS,
      },
    ],
    [
      () => M3u8Settings,
      {
        [_jN]: _mSue,
      },
    ],
  ]
);
export var StartChannelRequest = struct(n0, _SCR, 0, [_CIha], [[0, 1]]);
export var StartChannelResponse = struct(
  n0,
  _SCRt,
  0,
  [_Ar, _CIS, _CCh, _Des, _EE, _ESn, _I, _IA, _IS, _LL, _Ma, _N, _PDi, _PRC, _RA, _St, _Ta, _V, _ASn, _CEV],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      () => CdiInputSpecification,
      {
        [_jN]: _cIS,
      },
    ],
    [
      0,
      {
        [_jN]: _cCh,
      },
    ],
    [
      () => __listOfOutputDestination,
      {
        [_jN]: _des,
      },
    ],
    [
      () => __listOfChannelEgressEndpoint,
      {
        [_jN]: _eE,
      },
    ],
    [
      () => EncoderSettings,
      {
        [_jN]: _eSn,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      () => __listOfInputAttachment,
      {
        [_jN]: _iA,
      },
    ],
    [
      () => InputSpecification,
      {
        [_jN]: _iS,
      },
    ],
    [
      0,
      {
        [_jN]: _lL,
      },
    ],
    [
      () => MaintenanceStatus,
      {
        [_jN]: _ma,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => __listOfPipelineDetail,
      {
        [_jN]: _pDi,
      },
    ],
    [
      1,
      {
        [_jN]: _pRC,
      },
    ],
    [
      0,
      {
        [_jN]: _rA,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      () => VpcOutputSettingsDescription,
      {
        [_jN]: _v,
      },
    ],
    [
      () => DescribeAnywhereSettings,
      {
        [_jN]: _aSn,
      },
    ],
    [
      () => ChannelEngineVersionResponse,
      {
        [_jN]: _cEV,
      },
    ],
  ]
);
export var StartTimecode = struct(
  n0,
  _STt,
  0,
  [_Time],
  [
    [
      0,
      {
        [_jN]: _time,
      },
    ],
  ]
);
export var StaticImageActivateScheduleActionSettings = struct(
  n0,
  _SIASAS,
  0,
  [_Du, _FI, _FOa, _H, _Im, _IX, _IY, _Lay, _Op, _W],
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
        [_jN]: _fI,
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
      () => InputLocation,
      {
        [_jN]: _im,
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
        [_jN]: _lay,
      },
    ],
    [
      1,
      {
        [_jN]: _op,
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
export var StaticImageDeactivateScheduleActionSettings = struct(
  n0,
  _SIDSAS,
  0,
  [_FOa, _Lay],
  [
    [
      1,
      {
        [_jN]: _fOa,
      },
    ],
    [
      1,
      {
        [_jN]: _lay,
      },
    ],
  ]
);
export var StaticImageOutputActivateScheduleActionSettings = struct(
  n0,
  _SIOASAS,
  0,
  [_Du, _FI, _FOa, _H, _Im, _IX, _IY, _Lay, _Op, _ONu, _W],
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
        [_jN]: _fI,
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
      () => InputLocation,
      {
        [_jN]: _im,
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
        [_jN]: _lay,
      },
    ],
    [
      1,
      {
        [_jN]: _op,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _oNu,
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
export var StaticImageOutputDeactivateScheduleActionSettings = struct(
  n0,
  _SIODSAS,
  0,
  [_FOa, _Lay, _ONu],
  [
    [
      1,
      {
        [_jN]: _fOa,
      },
    ],
    [
      1,
      {
        [_jN]: _lay,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _oNu,
      },
    ],
  ]
);
export var StaticKeySettings = struct(
  n0,
  _SKS,
  0,
  [_KPSe, _SKV],
  [
    [
      () => InputLocation,
      {
        [_jN]: _kPSe,
      },
    ],
    [
      0,
      {
        [_jN]: _sKV,
      },
    ],
  ]
);
export var StopChannelRequest = struct(n0, _SCRto, 0, [_CIha], [[0, 1]]);
export var StopChannelResponse = struct(
  n0,
  _SCRtop,
  0,
  [_Ar, _CIS, _CCh, _Des, _EE, _ESn, _I, _IA, _IS, _LL, _Ma, _N, _PDi, _PRC, _RA, _St, _Ta, _V, _ASn, _CEV],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      () => CdiInputSpecification,
      {
        [_jN]: _cIS,
      },
    ],
    [
      0,
      {
        [_jN]: _cCh,
      },
    ],
    [
      () => __listOfOutputDestination,
      {
        [_jN]: _des,
      },
    ],
    [
      () => __listOfChannelEgressEndpoint,
      {
        [_jN]: _eE,
      },
    ],
    [
      () => EncoderSettings,
      {
        [_jN]: _eSn,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      () => __listOfInputAttachment,
      {
        [_jN]: _iA,
      },
    ],
    [
      () => InputSpecification,
      {
        [_jN]: _iS,
      },
    ],
    [
      0,
      {
        [_jN]: _lL,
      },
    ],
    [
      () => MaintenanceStatus,
      {
        [_jN]: _ma,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => __listOfPipelineDetail,
      {
        [_jN]: _pDi,
      },
    ],
    [
      1,
      {
        [_jN]: _pRC,
      },
    ],
    [
      0,
      {
        [_jN]: _rA,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      () => VpcOutputSettingsDescription,
      {
        [_jN]: _v,
      },
    ],
    [
      () => DescribeAnywhereSettings,
      {
        [_jN]: _aSn,
      },
    ],
    [
      () => ChannelEngineVersionResponse,
      {
        [_jN]: _cEV,
      },
    ],
  ]
);
export var StopTimecode = struct(
  n0,
  _STto,
  0,
  [_LFCB, _Time],
  [
    [
      0,
      {
        [_jN]: _lFCB,
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
export var TeletextDestinationSettings = struct(n0, _TDS, 0, [], []);
export var TeletextSourceSettings = struct(
  n0,
  _TSS,
  0,
  [_OR, _PNa],
  [
    [
      () => CaptionRectangle,
      {
        [_jN]: _oR,
      },
    ],
    [
      0,
      {
        [_jN]: _pNa,
      },
    ],
  ]
);
export var TemporalFilterSettings = struct(
  n0,
  _TFS,
  0,
  [_PFS, _Str],
  [
    [
      0,
      {
        [_jN]: _pFS,
      },
    ],
    [
      0,
      {
        [_jN]: _str,
      },
    ],
  ]
);
export var ThumbnailConfiguration = struct(
  n0,
  _TCh,
  0,
  [_St],
  [
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var TimecodeBurninSettings = struct(
  n0,
  _TBS,
  0,
  [_FS, _Pos, _Pre],
  [
    [
      0,
      {
        [_jN]: _fS,
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
        [_jN]: _pre,
      },
    ],
  ]
);
export var TimecodeConfig = struct(
  n0,
  _TCi,
  0,
  [_Sou, _STy],
  [
    [
      0,
      {
        [_jN]: _sou,
      },
    ],
    [
      1,
      {
        [_jN]: _sTy,
      },
    ],
  ]
);
export var TimedMetadataScheduleActionSettings = struct(
  n0,
  _TMSAS,
  0,
  [_Id_],
  [
    [
      0,
      {
        [_jN]: _id,
      },
    ],
  ]
);
export var TtmlDestinationSettings = struct(
  n0,
  _TDSt,
  0,
  [_SCt],
  [
    [
      0,
      {
        [_jN]: _sCt,
      },
    ],
  ]
);
export var UdpContainerSettings = struct(
  n0,
  _UCS,
  0,
  [_MS],
  [
    [
      () => M2tsSettings,
      {
        [_jN]: _mS,
      },
    ],
  ]
);
export var UdpGroupSettings = struct(
  n0,
  _UGS,
  0,
  [_ILA, _TMIF, _TMIP],
  [
    [
      0,
      {
        [_jN]: _iLA,
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
  ]
);
export var UdpOutputSettings = struct(
  n0,
  _UOS,
  0,
  [_BMuf, _CS, _De, _FOS],
  [
    [
      1,
      {
        [_jN]: _bMuf,
      },
    ],
    [
      () => UdpContainerSettings,
      {
        [_jN]: _cS,
      },
    ],
    [
      () => OutputLocationRef,
      {
        [_jN]: _de,
      },
    ],
    [
      () => FecOutputSettings,
      {
        [_jN]: _fOS,
      },
    ],
  ]
);
export var UpdateChannelClassRequest = struct(
  n0,
  _UCCR,
  0,
  [_CCh, _CIha, _Des],
  [
    [
      0,
      {
        [_jN]: _cCh,
      },
    ],
    [0, 1],
    [
      () => __listOfOutputDestination,
      {
        [_jN]: _des,
      },
    ],
  ]
);
export var UpdateChannelClassResponse = struct(
  n0,
  _UCCRp,
  0,
  [_Ch],
  [
    [
      () => Channel,
      {
        [_jN]: _cha,
      },
    ],
  ]
);
export var UpdateChannelRequest = struct(
  n0,
  _UCR,
  0,
  [_CIS, _CIha, _Des, _ESn, _IA, _IS, _LL, _Ma, _N, _RA, _CEV, _DRr, _ASn],
  [
    [
      () => CdiInputSpecification,
      {
        [_jN]: _cIS,
      },
    ],
    [0, 1],
    [
      () => __listOfOutputDestination,
      {
        [_jN]: _des,
      },
    ],
    [
      () => EncoderSettings,
      {
        [_jN]: _eSn,
      },
    ],
    [
      () => __listOfInputAttachment,
      {
        [_jN]: _iA,
      },
    ],
    [
      () => InputSpecification,
      {
        [_jN]: _iS,
      },
    ],
    [
      0,
      {
        [_jN]: _lL,
      },
    ],
    [
      () => MaintenanceUpdateSettings,
      {
        [_jN]: _ma,
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
        [_jN]: _rA,
      },
    ],
    [
      () => ChannelEngineVersionRequest,
      {
        [_jN]: _cEV,
      },
    ],
    [
      2,
      {
        [_jN]: _dRr,
      },
    ],
    [
      () => AnywhereSettings,
      {
        [_jN]: _aSn,
      },
    ],
  ]
);
export var UpdateChannelResponse = struct(
  n0,
  _UCRp,
  0,
  [_Ch],
  [
    [
      () => Channel,
      {
        [_jN]: _cha,
      },
    ],
  ]
);
export var VideoBlackFailoverSettings = struct(
  n0,
  _VBFS,
  0,
  [_BDT, _VBTM],
  [
    [
      1,
      {
        [_jN]: _bDT,
      },
    ],
    [
      1,
      {
        [_jN]: _vBTM,
      },
    ],
  ]
);
export var VideoCodecSettings = struct(
  n0,
  _VCS,
  0,
  [_FCSr, _HSe, _HSet, _MSpe, _ASv],
  [
    [
      () => FrameCaptureSettings,
      {
        [_jN]: _fCSr,
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
        [_jN]: _mSpe,
      },
    ],
    [
      () => Av1Settings,
      {
        [_jN]: _aSve,
      },
    ],
  ]
);
export var VideoDescription = struct(
  n0,
  _VDi,
  0,
  [_CSo, _H, _N, _RTA, _SBc, _Sh, _W],
  [
    [
      () => VideoCodecSettings,
      {
        [_jN]: _cSo,
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
        [_jN]: _n,
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
        [_jN]: _sBc,
      },
    ],
    [
      1,
      {
        [_jN]: _sh,
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
export var VideoSelector = struct(
  n0,
  _VS,
  0,
  [_CSol, _CSS, _CSU, _SS],
  [
    [
      0,
      {
        [_jN]: _cSol,
      },
    ],
    [
      () => VideoSelectorColorSpaceSettings,
      {
        [_jN]: _cSS,
      },
    ],
    [
      0,
      {
        [_jN]: _cSU,
      },
    ],
    [
      () => VideoSelectorSettings,
      {
        [_jN]: _sS,
      },
    ],
  ]
);
export var VideoSelectorColorSpaceSettings = struct(
  n0,
  _VSCSS,
  0,
  [_HS],
  [
    [
      () => Hdr10Settings,
      {
        [_jN]: _hS,
      },
    ],
  ]
);
export var VideoSelectorPid = struct(
  n0,
  _VSP,
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
export var VideoSelectorProgramId = struct(
  n0,
  _VSPI,
  0,
  [_PIr],
  [
    [
      1,
      {
        [_jN]: _pIr,
      },
    ],
  ]
);
export var VideoSelectorSettings = struct(
  n0,
  _VSS,
  0,
  [_VSP, _VSPI],
  [
    [
      () => VideoSelectorPid,
      {
        [_jN]: _vSP,
      },
    ],
    [
      () => VideoSelectorProgramId,
      {
        [_jN]: _vSPI,
      },
    ],
  ]
);
export var VpcOutputSettings = struct(
  n0,
  _VOS,
  0,
  [_PAAI, _SGI, _SIu],
  [
    [
      64 | 0,
      {
        [_jN]: _pAAI,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sGI,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sIu,
      },
    ],
  ]
);
export var VpcOutputSettingsDescription = struct(
  n0,
  _VOSD,
  0,
  [_AZ, _NIIe, _SGI, _SIu],
  [
    [
      64 | 0,
      {
        [_jN]: _aZ,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _nIIe,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sGI,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sIu,
      },
    ],
  ]
);
export var WavSettings = struct(
  n0,
  _WS,
  0,
  [_BD, _CM, _SR],
  [
    [
      1,
      {
        [_jN]: _bD,
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
        [_jN]: _sR,
      },
    ],
  ]
);
export var WebvttDestinationSettings = struct(
  n0,
  _WDS,
  0,
  [_SCt],
  [
    [
      0,
      {
        [_jN]: _sCt,
      },
    ],
  ]
);
export var __listOfAdditionalDestinations = list(n0, _lOAD, 0, [() => AdditionalDestinations, 0]);
export var __listOfAudioChannelMapping = list(n0, _lOACM, 0, [() => AudioChannelMapping, 0]);
export var __listOfAudioDescription = list(n0, _lOADi, 0, [() => AudioDescription, 0]);
export var __listOfAudioSelector = list(n0, _lOAS, 0, [() => AudioSelector, 0]);
export var __listOfAudioTrack = list(n0, _lOAT, 0, [() => AudioTrack, 0]);
export var __listOfCaptionDescription = list(n0, _lOCD, 0, [() => CaptionDescription, 0]);
export var __listOfCaptionLanguageMapping = list(n0, _lOCLM, 0, [() => CaptionLanguageMapping, 0]);
export var __listOfCaptionSelector = list(n0, _lOCS, 0, [() => CaptionSelector, 0]);
export var __listOfChannelEgressEndpoint = list(n0, _lOCEE, 0, [() => ChannelEgressEndpoint, 0]);
export var __listOfChannelPipelineIdToRestart = 64 | 0;

export var __listOfChannelSummary = list(n0, _lOCSi, 0, [() => ChannelSummary, 0]);
export var __listOfCmafIngestCaptionLanguageMapping = list(n0, _lOCICLM, 0, [
  () => CmafIngestCaptionLanguageMapping,
  0,
]);
export var __listOfColorCorrection = list(n0, _lOCC, 0, [() => ColorCorrection, 0]);
export var __listOfDashRoleAudio = 64 | 0;

export var __listOfDashRoleCaption = 64 | 0;

export var __listOfFailoverCondition = list(n0, _lOFC, 0, [() => FailoverCondition, 0]);
export var __listOfHlsAdMarkers = 64 | 0;

export var __listOfInputAttachment = list(n0, _lOIA, 0, [() => InputAttachment, 0]);
export var __listOfInputChannelLevel = list(n0, _lOICL, 0, [() => InputChannelLevel, 0]);
export var __listOfMediaPackageOutputDestinationSettings = list(n0, _lOMPODS, 0, [
  () => MediaPackageOutputDestinationSettings,
  0,
]);
export var __listOfOutput = list(n0, _lOOi, 0, [() => Output, 0]);
export var __listOfOutputDestination = list(n0, _lOOD, 0, [() => OutputDestination, 0]);
export var __listOfOutputDestinationSettings = list(n0, _lOODS, 0, [() => OutputDestinationSettings, 0]);
export var __listOfOutputGroup = list(n0, _lOOG, 0, [() => OutputGroup, 0]);
export var __listOfPipelineDetail = list(n0, _lOPD, 0, [() => PipelineDetail, 0]);
export var __listOfPipelinePauseStateSettings = list(n0, _lOPPSS, 0, [() => PipelinePauseStateSettings, 0]);
export var __listOfRtmpAdMarkers = 64 | 0;

export var __listOfScheduleAction = list(n0, _lOSA, 0, [() => ScheduleAction, 0]);
export var __listOfScte35Descriptor = list(n0, _lOSD, 0, [() => Scte35Descriptor, 0]);
export var __listOfSrtOutputDestinationSettings = list(n0, _lOSODS, 0, [() => SrtOutputDestinationSettings, 0]);
export var __listOfVideoDescription = list(n0, _lOVD, 0, [() => VideoDescription, 0]);
export var BatchUpdateSchedule = op(
  n0,
  _BUS,
  {
    [_ht]: ["PUT", "/prod/channels/{ChannelId}/schedule", 200],
  },
  () => BatchUpdateScheduleRequest,
  () => BatchUpdateScheduleResponse
);
export var CreateChannel = op(
  n0,
  _CCr,
  {
    [_ht]: ["POST", "/prod/channels", 201],
  },
  () => CreateChannelRequest,
  () => CreateChannelResponse
);
export var DeleteChannel = op(
  n0,
  _DC,
  {
    [_ht]: ["DELETE", "/prod/channels/{ChannelId}", 200],
  },
  () => DeleteChannelRequest,
  () => DeleteChannelResponse
);
export var DescribeChannel = op(
  n0,
  _DCes,
  {
    [_ht]: ["GET", "/prod/channels/{ChannelId}", 200],
  },
  () => DescribeChannelRequest,
  () => DescribeChannelResponse
);
export var DescribeSchedule = op(
  n0,
  _DSes,
  {
    [_ht]: ["GET", "/prod/channels/{ChannelId}/schedule", 200],
  },
  () => DescribeScheduleRequest,
  () => DescribeScheduleResponse
);
export var ListChannels = op(
  n0,
  _LCi,
  {
    [_ht]: ["GET", "/prod/channels", 200],
  },
  () => ListChannelsRequest,
  () => ListChannelsResponse
);
export var RestartChannelPipelines = op(
  n0,
  _RCP,
  {
    [_ht]: ["POST", "/prod/channels/{ChannelId}/restartChannelPipelines", 200],
  },
  () => RestartChannelPipelinesRequest,
  () => RestartChannelPipelinesResponse
);
export var StartChannel = op(
  n0,
  _SCta,
  {
    [_ht]: ["POST", "/prod/channels/{ChannelId}/start", 200],
  },
  () => StartChannelRequest,
  () => StartChannelResponse
);
export var StopChannel = op(
  n0,
  _SCto,
  {
    [_ht]: ["POST", "/prod/channels/{ChannelId}/stop", 200],
  },
  () => StopChannelRequest,
  () => StopChannelResponse
);
export var UpdateChannel = op(
  n0,
  _UC,
  {
    [_ht]: ["PUT", "/prod/channels/{ChannelId}", 200],
  },
  () => UpdateChannelRequest,
  () => UpdateChannelResponse
);
export var UpdateChannelClass = op(
  n0,
  _UCC,
  {
    [_ht]: ["PUT", "/prod/channels/{ChannelId}/channelClass", 200],
  },
  () => UpdateChannelClassRequest,
  () => UpdateChannelClassResponse
);
