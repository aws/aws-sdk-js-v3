// smithy-typescript generated code
import { list, map, op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _a,
  _AAC,
  _aAC,
  _AACA,
  _aACA,
  _AASA,
  _aASA,
  _AC,
  _Ac,
  _aC,
  _ac,
  _Acc,
  _acc,
  _ACL,
  _aCL,
  _Act,
  _Acto,
  _acto,
  _ADI,
  _aDI,
  _AF,
  _Af,
  _aF,
  _af,
  _AFTI,
  _AFTIc,
  _AIc,
  _aIc,
  _AIcc,
  _aIcc,
  _AIct,
  _aIct,
  _AId,
  _aId,
  _AK,
  _aK,
  _AKD,
  _aKD,
  _AKI,
  _aKI,
  _AL,
  _Al,
  _aL,
  _al,
  _ALP,
  _aLP,
  _AM,
  _aM,
  _AN,
  _An,
  _aN,
  _an,
  _AO,
  _aO,
  _AOs,
  _AP,
  _Ap,
  _ap,
  _APA,
  _aPA,
  _APE,
  _aPE,
  _APF,
  _APFO,
  _APn,
  _App,
  _app,
  _APRA,
  _aPRA,
  _APWA,
  _aPWA,
  _AR,
  _Ar,
  _aR,
  _ar,
  _Arc,
  _arc,
  _AS,
  _As,
  _as,
  _ASC,
  _aSC,
  _AST,
  _aST,
  _ASu,
  _aSu,
  _AT,
  _aT,
  _AU,
  _AUBF,
  _AVt,
  _aVt,
  _AZ,
  _aZ,
  _B,
  _b,
  _Bl,
  _bl,
  _BLP,
  _bLP,
  _BP,
  _bP,
  _BPA,
  _bPA,
  _BPAl,
  _bPAl,
  _BPAu,
  _bPAu,
  _BPP,
  _bPP,
  _C,
  _CAr,
  _cAr,
  _CBF,
  _cBF,
  _CBS,
  _cBS,
  _CC,
  _cC,
  _CD,
  _cD,
  _CDo,
  _cDo,
  _CF,
  _CFR,
  _CFRr,
  _CFRre,
  _ci,
  _CK,
  _cK,
  _CLE,
  _cLE,
  _CN,
  _cN,
  _CNo,
  _cNo,
  _Co,
  _co,
  _Cod,
  _Con,
  _con,
  _Conf,
  _Conn,
  _conn,
  _Cont,
  _cont,
  _Conte,
  _conte,
  _Cou,
  _cou,
  _Coun,
  _coun,
  _CP,
  _cP,
  _CR,
  _Cr,
  _cR,
  _cr,
  _CT,
  _cT,
  _CTl,
  _cTl,
  _CTlo,
  _cTlo,
  _CTr,
  _cTr,
  _CU,
  _cU,
  _CUr,
  _cUr,
  _D,
  _d,
  _Da,
  _da,
  _DAe,
  _dAe,
  _Dat,
  _dat,
  _Data,
  _data,
  _DCI,
  _dCI,
  _DD,
  _dD,
  _Det,
  _det,
  _DI,
  _Di,
  _dI,
  _di,
  _DIA,
  _dIA,
  _DII,
  _dII,
  _DL,
  _dL,
  _DMS,
  _DMSR,
  _DMSRe,
  _DN,
  _dN,
  _Do,
  _do,
  _DRA,
  _dRA,
  _DS,
  _dS,
  _DSa,
  _DSFT,
  _DSFTa,
  _DSGA,
  _dSGA,
  _DSGI,
  _dSGI,
  _DSGRI,
  _dSGRI,
  _DSSE,
  _dSSE,
  _DWS,
  _dWS,
  _EAC,
  _eAC,
  _EC,
  _eC,
  _ECD,
  _eCD,
  _ECDc,
  _eCDc,
  _ECk,
  _eCk,
  _EFS,
  _eFS,
  _EI,
  _eI,
  _EIn,
  _eIn,
  _EIU,
  _eIU,
  _EKA,
  _eKA,
  _ELS,
  _eLS,
  _End,
  _end,
  _Eng,
  _eng,
  _ENI,
  _eNI,
  _ENIU,
  _eNIU,
  _EP,
  _eP,
  _EPf,
  _ePf,
  _Eq,
  _eq,
  _Equ,
  _equ,
  _ES,
  _eS,
  _ET,
  _eT,
  _ETa,
  _eTa,
  _ETD,
  _Eu,
  _eu,
  _EV,
  _Ev,
  _eV,
  _ev,
  _EVD,
  _eVD,
  _EVn,
  _eVn,
  _EVSD,
  _eVSD,
  _F,
  _f,
  _FA,
  _fA,
  _FC,
  _fC,
  _FCi,
  _fCi,
  _FCil,
  _fCil,
  _FCile,
  _fCile,
  _FCin,
  _fCin,
  _FCL,
  _FI,
  _Fi,
  _fI,
  _fi,
  _Fil,
  _fil,
  _Fin,
  _FL,
  _Fl,
  _fL,
  _fl,
  _FLA,
  _fLA,
  _FN,
  _fN,
  _FNe,
  _fNe,
  _FNil,
  _fNil,
  _FNu,
  _fNu,
  _FP,
  _fP,
  _FPi,
  _fPi,
  _FR,
  _fR,
  _FS,
  _fS,
  _FSA,
  _fSA,
  _FST,
  _fST,
  _FSTi,
  _fSTi,
  _FTDR,
  _fTDR,
  _FTFCR,
  _FTFCRr,
  _FTi,
  _fTi,
  _FTS,
  _FV,
  _fV,
  _G,
  _g,
  _GB,
  _gB,
  _GBA,
  _gBA,
  _GBD,
  _gBD,
  _GBFT,
  _gBFT,
  _GBR,
  _gBR,
  _GBS,
  _gBS,
  _GDFI,
  _gDFI,
  _GF,
  _GFe,
  _GFR,
  _GFRe,
  _GFRet,
  _GFReti,
  _GFS,
  _GFSR,
  _GFSRe,
  _GI,
  _gI,
  _GIC,
  _GICR,
  _GICRe,
  _GL,
  _gL,
  _GN,
  _gN,
  _GOS,
  _GOSR,
  _Gr,
  _gr,
  _GRFTD,
  _GRFTDR,
  _GRFTDRe,
  _Gro,
  _gro,
  _GT,
  _Gt,
  _gT,
  _gt,
  _GTOE,
  _gTOE,
  _H,
  _h,
  _HIPC,
  _hIPC,
  _hL,
  _HN,
  _hN,
  _HP,
  _hP,
  _HPID,
  _hPID,
  _HSTD,
  _hSTD,
  _ht,
  _I,
  _i,
  _IAn,
  _iAn,
  _IAp,
  _iAp,
  _IAV,
  _iAV,
  _IAVp,
  _iAVp,
  _IC,
  _iC,
  _ICt,
  _iCt,
  _ID,
  _iD,
  _IDn,
  _iDn,
  _IIm,
  _iIm,
  _IIn,
  _iIn,
  _IIP,
  _iIP,
  _Im,
  _im,
  _In,
  _Ind,
  _IP,
  _Ip,
  _iP,
  _ip,
  _IPA,
  _iPA,
  _IPN,
  _iPN,
  _IPt,
  _iPt,
  _IPte,
  _IS,
  _iS,
  _Isp,
  _isp,
  _Issu,
  _issu,
  _IT,
  _iT,
  _iTd,
  _IU,
  _iU,
  _IUm,
  _iUm,
  _jN,
  _K,
  _k,
  _KACA,
  _kACA,
  _KD,
  _kD,
  _KDSFT,
  _Ke,
  _ke,
  _Ki,
  _ki,
  _KKA,
  _kKA,
  _KMKA,
  _kMKA,
  _KPCD,
  _kPCD,
  _KRBD,
  _kRBD,
  _KRD,
  _kRD,
  _KRT,
  _KUD,
  _kUD,
  _KW,
  _kW,
  _KWD,
  _kWD,
  _L,
  _l,
  _LA,
  _La,
  _la,
  _LAo,
  _Lat,
  _LD,
  _lD,
  _LFi,
  _LFRis,
  _LFRist,
  _LGA,
  _lGA,
  _Li,
  _li,
  _LID,
  _lID,
  _LMA,
  _lMA,
  _LNI,
  _lNI,
  _LO,
  _Lo,
  _lo,
  _Lon,
  _lon,
  _Long,
  _LP,
  _lP,
  _LPD,
  _lPD,
  _LPV,
  _lPV,
  _LSA,
  _lSA,
  _LT,
  _Lt,
  _lT,
  _lt,
  _LTa,
  _lTa,
  _LTau,
  _lTau,
  _LTOE,
  _lTOE,
  _MA,
  _mA,
  _mAC,
  _MACe,
  _MFP,
  _mFP,
  _MN,
  _mN,
  _MP,
  _mP,
  _MPDSFT,
  _MPo,
  _mPo,
  _MPou,
  _mPou,
  _MR,
  _mR,
  _MRe,
  _mRe,
  _MS,
  _mS,
  _MSD,
  _mSD,
  _MSf,
  _mSf,
  _MSo,
  _mSo,
  _MTo,
  _mTo,
  _N,
  _n,
  _Na,
  _na,
  _NC,
  _NCA,
  _nCA,
  _NE,
  _Ne,
  _nE,
  _ne,
  _NEe,
  _NEet,
  _NGL,
  _NI,
  _nI,
  _NIe,
  _NII,
  _nII,
  _NIP,
  _nIP,
  _NP,
  _nP,
  _NT,
  _nT,
  _Nu,
  _nu,
  _O,
  _o,
  _OA,
  _oA,
  _OAb,
  _oAb,
  _OB,
  _oB,
  _OD,
  _oD,
  _OFS,
  _OFSAC,
  _OFSACr,
  _OFSR,
  _OI,
  _oI,
  _Or,
  _or,
  _Org,
  _org,
  _OS,
  _oS,
  _Ow,
  _ow,
  _P,
  _p,
  _PA,
  _Pa,
  _pA,
  _pa,
  _PAA,
  _pAA,
  _PAC,
  _PAIB,
  _pAIB,
  _Par,
  _par,
  _Para,
  _para,
  _PBRB,
  _pBRB,
  _PC,
  _pC,
  _PCe,
  _pCe,
  _pCI,
  _PCr,
  _pCT,
  _PD,
  _PDN,
  _pDN,
  _PDNu,
  _pDNu,
  _PI,
  _Pi,
  _pI,
  _pi,
  _PIA,
  _pIA,
  _PIAD,
  _PIAr,
  _pIAr,
  _PIu,
  _pIu,
  _Pl,
  _pl,
  _PN,
  _pN,
  _Po,
  _po,
  _PPA,
  _pPA,
  _PPAu,
  _pPAu,
  _PPD,
  _pPD,
  _PPDo,
  _Pr,
  _pr,
  _PRA,
  _pRA,
  _Pri,
  _pri,
  _Pro,
  _pro,
  _PS,
  _pS,
  _PT,
  _pT,
  _PTr,
  _PU,
  _pU,
  _Pw,
  _pw,
  _PWA,
  _pWA,
  _R,
  _r,
  _RAD,
  _rAD,
  _RAP,
  _rAP,
  _RBP,
  _rBP,
  _RC,
  _RCIC,
  _rCIC,
  _RD,
  _rD,
  _RDe,
  _RDID,
  _rDID,
  _RDu,
  _rDu,
  _RDUD,
  _rDUD,
  _Reg,
  _reg,
  _Res,
  _res,
  _Reso,
  _reso,
  _RI,
  _rI,
  _RID,
  _rID,
  _RIe,
  _rIe,
  _RLAA,
  _rLAA,
  _RLDD,
  _rLDD,
  _RN,
  _rN,
  _Ro,
  _ro,
  _RPB,
  _rPB,
  _RPD,
  _rPD,
  _RR,
  _rR,
  _RRK,
  _rRK,
  _RRN,
  _rRN,
  _RSe,
  _RT,
  _rT,
  _RTC,
  _rTC,
  _RU,
  _rU,
  _RUe,
  _rUe,
  _RV,
  _S,
  _s,
  _SA,
  _sA,
  _SAI,
  _SAN,
  _SAn,
  _sAN,
  _sAn,
  _SB,
  _sB,
  _SBD,
  _sBD,
  _SBDu,
  _SBt,
  _sBt,
  _SC,
  _Sc,
  _sC,
  _sc,
  _SCA,
  _Sca,
  _sCA,
  _SCo,
  _sCo,
  _SCt,
  _sCt,
  _SD,
  _sD,
  _Se,
  _se,
  _SEIWF,
  _sEIWF,
  _Seq,
  _seq,
  _Ser,
  _ser,
  _SET,
  _sET,
  _SFP,
  _SG,
  _sG,
  _SGe,
  _Sh,
  _sh,
  _SHFP,
  _sHFP,
  _Sho,
  _sho,
  _SI,
  _Si,
  _sI,
  _si,
  _SIC,
  _sIC,
  _SIe,
  _sIe,
  _Sig,
  _SIi,
  _sIi,
  _SIo,
  _sIP,
  _SIu,
  _sIu,
  _SIub,
  _sIub,
  _SL,
  _sL,
  _SLA,
  _sLA,
  _SN,
  _sN,
  _SNe,
  _sNe,
  _SNI,
  _sNI,
  _SO,
  _So,
  _sO,
  _so,
  _SOD,
  _sOD,
  _SODb,
  _SOU,
  _Sou,
  _sOU,
  _sou,
  _SP,
  _sP,
  _SPo,
  _sPo,
  _SRc,
  _sRc,
  _SRD,
  _sRD,
  _SS,
  _Ss,
  _sS,
  _ss,
  _SSA,
  _sSA,
  _SSc,
  _SSe,
  _SST,
  _sST,
  _ST,
  _St,
  _sT,
  _st,
  _STN,
  _STNc,
  _STta,
  _sTta,
  _Su,
  _su,
  _SV,
  _sV,
  _SVD,
  _sVD,
  _SVDk,
  _sVDk,
  _T,
  _Ta,
  _ta,
  _TAC,
  _tAC,
  _Tag_,
  _TB,
  _tB,
  _TC,
  _tC,
  _TCA,
  _TD,
  _tD,
  _TDBN,
  _tDBN,
  _TDIC,
  _tDIC,
  _TDr,
  _tDr,
  _Te,
  _te,
  _TF,
  _tF,
  _TFI,
  _tFI,
  _TFP,
  _tFP,
  _TFS,
  _tFS,
  _TG,
  _tG,
  _Th,
  _th,
  _Thr,
  _Ti,
  _ti,
  _TID,
  _tID,
  _TIDh,
  _TLN,
  _tLN,
  _TN,
  _tN,
  _TNh,
  _tNh,
  _TNo,
  _tNo,
  _TP,
  _tP,
  _ty,
  _U,
  _u,
  _UA,
  _uA,
  _UAn,
  _uAn,
  _UAp,
  _uAp,
  _UF,
  _uF,
  _UFp,
  _UFRp,
  _UFRpd,
  _UI,
  _uI,
  _UN,
  _Un,
  _uN,
  _un,
  _Us,
  _us,
  _Use,
  _use,
  _UT,
  _uT,
  _UTNC,
  _uTNC,
  _Uu,
  _uu,
  _V,
  _v,
  _VA,
  _Va,
  _vA,
  _va,
  _Val,
  _val,
  _VC,
  _vC,
  _VD,
  _VDo,
  _Ve,
  _ve,
  _VI,
  _vI,
  _VIe,
  _vIe,
  _VM,
  _vM,
  _VMo,
  _Vo,
  _vo,
  _VOAI,
  _vOAI,
  _Vol,
  _VSIGB,
  _vSIGB,
  _VT,
  _vT,
  n0,
  Unit,
} from "./schemas_0";
import { UnprocessedAccounts } from "./schemas_16_Members";

/* eslint no-var: 0 */

export var SensitiveString = sim(n0, _SS, 0, 8);
export var AccessControlList = struct(
  n0,
  _ACL,
  0,
  [_APRA, _APWA],
  [
    [
      2,
      {
        [_jN]: _aPRA,
      },
    ],
    [
      2,
      {
        [_jN]: _aPWA,
      },
    ],
  ]
);
export var AccessKey = struct(
  n0,
  _AK,
  0,
  [_PI, _UN, _UT],
  [
    [
      0,
      {
        [_jN]: _pI,
      },
    ],
    [
      0,
      {
        [_jN]: _uN,
      },
    ],
    [
      0,
      {
        [_jN]: _uT,
      },
    ],
  ]
);
export var AccessKeyDetails = struct(
  n0,
  _AKD,
  0,
  [_AKI, _PI, _UN, _UT],
  [
    [
      0,
      {
        [_jN]: _aKI,
      },
    ],
    [
      0,
      {
        [_jN]: _pI,
      },
    ],
    [
      0,
      {
        [_jN]: _uN,
      },
    ],
    [
      0,
      {
        [_jN]: _uT,
      },
    ],
  ]
);
export var Account = struct(
  n0,
  _A,
  0,
  [_U, _N],
  [
    [
      0,
      {
        [_jN]: _u,
      },
    ],
    [
      0,
      {
        [_jN]: _a,
      },
    ],
  ]
);
export var AccountFreeTrialInfo = struct(
  n0,
  _AFTI,
  0,
  [_AIc, _DS, _F],
  [
    [
      0,
      {
        [_jN]: _aIc,
      },
    ],
    [
      () => DataSourcesFreeTrial,
      {
        [_jN]: _dS,
      },
    ],
    [
      () => FreeTrialFeatureConfigurationsResults,
      {
        [_jN]: _f,
      },
    ],
  ]
);
export var AccountLevelPermissions = struct(
  n0,
  _ALP,
  0,
  [_BPA],
  [
    [
      () => BlockPublicAccess,
      {
        [_jN]: _bPA,
      },
    ],
  ]
);
export var AccountStatistics = struct(
  n0,
  _AS,
  0,
  [_AIc, _LGA, _TF],
  [
    [
      0,
      {
        [_jN]: _aIc,
      },
    ],
    [
      4,
      {
        [_jN]: _lGA,
      },
    ],
    [
      1,
      {
        [_jN]: _tF,
      },
    ],
  ]
);
export var Action = struct(
  n0,
  _Ac,
  0,
  [_AT, _AACA, _DRA, _NCA, _PPA, _KACA, _RLAA, _KPCD, _KRBD, _KRD],
  [
    [
      0,
      {
        [_jN]: _aT,
      },
    ],
    [
      () => AwsApiCallAction,
      {
        [_jN]: _aACA,
      },
    ],
    [
      () => DnsRequestAction,
      {
        [_jN]: _dRA,
      },
    ],
    [
      () => NetworkConnectionAction,
      {
        [_jN]: _nCA,
      },
    ],
    [
      () => PortProbeAction,
      {
        [_jN]: _pPA,
      },
    ],
    [
      () => KubernetesApiCallAction,
      {
        [_jN]: _kACA,
      },
    ],
    [
      () => RdsLoginAttemptAction,
      {
        [_jN]: _rLAA,
      },
    ],
    [
      () => KubernetesPermissionCheckedDetails,
      {
        [_jN]: _kPCD,
      },
    ],
    [
      () => KubernetesRoleBindingDetails,
      {
        [_jN]: _kRBD,
      },
    ],
    [
      () => KubernetesRoleDetails,
      {
        [_jN]: _kRD,
      },
    ],
  ]
);
export var Actor = struct(
  n0,
  _Act,
  0,
  [_I, _Us, _S, _P],
  [
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      () => User,
      {
        [_jN]: _us,
      },
    ],
    [
      () => Session,
      {
        [_jN]: _s,
      },
    ],
    [
      () => ActorProcess,
      {
        [_jN]: _p,
      },
    ],
  ]
);
export var ActorProcess = struct(
  n0,
  _AP,
  0,
  [_N, _Pa, _Sh],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _pa,
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
export var Anomaly = struct(
  n0,
  _An,
  0,
  [_Pr, _Un],
  [
    [
      () => AnomalyProfiles,
      {
        [_jN]: _pr,
      },
    ],
    [
      () => AnomalyUnusual,
      {
        [_jN]: _un,
      },
    ],
  ]
);
export var AnomalyObject = struct(
  n0,
  _AO,
  0,
  [_PT, _PS, _O],
  [
    [
      0,
      {
        [_jN]: _pT,
      },
    ],
    [
      0,
      {
        [_jN]: _pS,
      },
    ],
    [
      () => Observations,
      {
        [_jN]: _o,
      },
    ],
  ]
);
export var AnomalyUnusual = struct(
  n0,
  _AU,
  0,
  [_B],
  [
    [
      () => Behavior,
      {
        [_jN]: _b,
      },
    ],
  ]
);
export var AutonomousSystem = struct(
  n0,
  _ASu,
  0,
  [_N, _Nu],
  [
    [
      0,
      {
        [_jN]: _n,
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
export var AwsApiCallAction = struct(
  n0,
  _AACA,
  0,
  [_Ap, _CT, _DD, _EC, _UA, _RID, _SN, _RAD, _AR],
  [
    [
      0,
      {
        [_jN]: _ap,
      },
    ],
    [
      0,
      {
        [_jN]: _cT,
      },
    ],
    [
      () => DomainDetails,
      {
        [_jN]: _dD,
      },
    ],
    [
      0,
      {
        [_jN]: _eC,
      },
    ],
    [
      0,
      {
        [_jN]: _uA,
      },
    ],
    [
      () => RemoteIpDetails,
      {
        [_jN]: _rID,
      },
    ],
    [
      0,
      {
        [_jN]: _sN,
      },
    ],
    [
      () => RemoteAccountDetails,
      {
        [_jN]: _rAD,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _aR,
      },
    ],
  ]
);
export var BlockPublicAccess = struct(
  n0,
  _BPA,
  0,
  [_IPA, _RPB, _BPAl, _BPP],
  [
    [
      2,
      {
        [_jN]: _iPA,
      },
    ],
    [
      2,
      {
        [_jN]: _rPB,
      },
    ],
    [
      2,
      {
        [_jN]: _bPAl,
      },
    ],
    [
      2,
      {
        [_jN]: _bPP,
      },
    ],
  ]
);
export var BucketLevelPermissions = struct(
  n0,
  _BLP,
  0,
  [_ACL, _BP, _BPA],
  [
    [
      () => AccessControlList,
      {
        [_jN]: _aCL,
      },
    ],
    [
      () => BucketPolicy,
      {
        [_jN]: _bP,
      },
    ],
    [
      () => BlockPublicAccess,
      {
        [_jN]: _bPA,
      },
    ],
  ]
);
export var BucketPolicy = struct(
  n0,
  _BP,
  0,
  [_APRA, _APWA],
  [
    [
      2,
      {
        [_jN]: _aPRA,
      },
    ],
    [
      2,
      {
        [_jN]: _aPWA,
      },
    ],
  ]
);
export var City = struct(
  n0,
  _C,
  0,
  [_CN],
  [
    [
      0,
      {
        [_jN]: _cN,
      },
    ],
  ]
);
export var Condition = struct(
  n0,
  _Co,
  0,
  [_Eq, _Ne, _G, _Gt, _L, _Lt, _Equ, _NE, _GT, _GTOE, _LT, _LTOE],
  [
    [
      64 | 0,
      {
        [_jN]: _eq,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _ne,
      },
    ],
    [
      1,
      {
        [_jN]: _g,
      },
    ],
    [
      1,
      {
        [_jN]: _gt,
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
        [_jN]: _lt,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _equ,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _nE,
      },
    ],
    [
      1,
      {
        [_jN]: _gT,
      },
    ],
    [
      1,
      {
        [_jN]: _gTOE,
      },
    ],
    [
      1,
      {
        [_jN]: _lT,
      },
    ],
    [
      1,
      {
        [_jN]: _lTOE,
      },
    ],
  ]
);
export var Container = struct(
  n0,
  _Con,
  0,
  [_CR, _I, _N, _Im, _IP, _VM, _SC],
  [
    [
      0,
      {
        [_jN]: _cR,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
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
        [_jN]: _im,
      },
    ],
    [
      0,
      {
        [_jN]: _iP,
      },
    ],
    [
      () => VolumeMounts,
      {
        [_jN]: _vM,
      },
    ],
    [
      () => SecurityContext,
      {
        [_jN]: _sC,
      },
    ],
  ]
);
export var ContainerFindingResource = struct(
  n0,
  _CFR,
  0,
  [_Im, _IU],
  [
    [
      0,
      {
        [_jN]: _im,
      },
    ],
    [
      0,
      {
        [_jN]: _iU,
      },
    ],
  ]
);
export var Country = struct(
  n0,
  _Cou,
  0,
  [_CC, _CNo],
  [
    [
      0,
      {
        [_jN]: _cC,
      },
    ],
    [
      0,
      {
        [_jN]: _cNo,
      },
    ],
  ]
);
export var CreateFilterRequest = struct(
  n0,
  _CFRr,
  0,
  [_DI, _N, _D, _Ac, _R, _FCin, _CTl, _Ta],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
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
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _ac,
      },
    ],
    [
      1,
      {
        [_jN]: _r,
      },
    ],
    [
      () => FindingCriteria,
      {
        [_jN]: _fCin,
      },
    ],
    [
      0,
      {
        [_jN]: _cTl,
        [_iTd]: 1,
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
export var CreateFilterResponse = struct(
  n0,
  _CFRre,
  0,
  [_N],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
  ]
);
export var DataSourceFreeTrial = struct(
  n0,
  _DSFT,
  0,
  [_FTDR],
  [
    [
      1,
      {
        [_jN]: _fTDR,
      },
    ],
  ]
);
export var DataSourcesFreeTrial = struct(
  n0,
  _DSFTa,
  0,
  [_CTlo, _DL, _FL, _SL, _K, _MP],
  [
    [
      () => DataSourceFreeTrial,
      {
        [_jN]: _cTlo,
      },
    ],
    [
      () => DataSourceFreeTrial,
      {
        [_jN]: _dL,
      },
    ],
    [
      () => DataSourceFreeTrial,
      {
        [_jN]: _fL,
      },
    ],
    [
      () => DataSourceFreeTrial,
      {
        [_jN]: _sL,
      },
    ],
    [
      () => KubernetesDataSourceFreeTrial,
      {
        [_jN]: _k,
      },
    ],
    [
      () => MalwareProtectionDataSourceFreeTrial,
      {
        [_jN]: _mP,
      },
    ],
  ]
);
export var DateStatistics = struct(
  n0,
  _DSa,
  0,
  [_Da, _LGA, _Se, _TF],
  [
    [
      4,
      {
        [_jN]: _da,
      },
    ],
    [
      4,
      {
        [_jN]: _lGA,
      },
    ],
    [
      1,
      {
        [_jN]: _se,
      },
    ],
    [
      1,
      {
        [_jN]: _tF,
      },
    ],
  ]
);
export var DefaultServerSideEncryption = struct(
  n0,
  _DSSE,
  0,
  [_ET, _KMKA],
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
        [_jN]: _kMKA,
      },
    ],
  ]
);
export var DescribeMalwareScansRequest = struct(
  n0,
  _DMSR,
  0,
  [_DI, _NT, _MR, _FCil, _SCo],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      1,
      {
        [_jN]: _mR,
      },
    ],
    [
      () => FilterCriteria,
      {
        [_jN]: _fCil,
      },
    ],
    [
      () => SortCriteria,
      {
        [_jN]: _sCo,
      },
    ],
  ]
);
export var DescribeMalwareScansResponse = struct(
  n0,
  _DMSRe,
  0,
  [_Sc, _NT],
  [
    [
      () => Scans,
      {
        [_jN]: _sc,
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
export var Detection = struct(
  n0,
  _Det,
  0,
  [_An, _Seq],
  [
    [
      () => Anomaly,
      {
        [_jN]: _an,
      },
    ],
    [
      () => Sequence,
      {
        [_jN]: _seq,
      },
    ],
  ]
);
export var DnsRequestAction = struct(
  n0,
  _DRA,
  0,
  [_Do, _Pro, _Bl, _DWS, _VOAI],
  [
    [
      0,
      {
        [_jN]: _do,
      },
    ],
    [
      0,
      {
        [_jN]: _pro,
      },
    ],
    [
      2,
      {
        [_jN]: _bl,
      },
    ],
    [
      0,
      {
        [_jN]: _dWS,
      },
    ],
    [
      0,
      {
        [_jN]: _vOAI,
      },
    ],
  ]
);
export var DomainDetails = struct(
  n0,
  _DD,
  0,
  [_Do],
  [
    [
      0,
      {
        [_jN]: _do,
      },
    ],
  ]
);
export var EbsVolumeDetails = struct(
  n0,
  _EVD,
  0,
  [_SVD, _SVDk],
  [
    [
      () => VolumeDetails,
      {
        [_jN]: _sVD,
      },
    ],
    [
      () => VolumeDetails,
      {
        [_jN]: _sVDk,
      },
    ],
  ]
);
export var EbsVolumeScanDetails = struct(
  n0,
  _EVSD,
  0,
  [_SI, _SSA, _SCA, _TFI, _So, _SD, _ST],
  [
    [
      0,
      {
        [_jN]: _sI,
      },
    ],
    [
      4,
      {
        [_jN]: _sSA,
      },
    ],
    [
      4,
      {
        [_jN]: _sCA,
      },
    ],
    [
      0,
      {
        [_jN]: _tFI,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _so,
      },
    ],
    [
      () => ScanDetections,
      {
        [_jN]: _sD,
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
export var Ec2Instance = struct(
  n0,
  _EI,
  0,
  [_AZ, _ID, _IS, _IIP, _IT, _OA, _Pl, _PC, _ENIU],
  [
    [
      0,
      {
        [_jN]: _aZ,
      },
    ],
    [
      0,
      {
        [_jN]: _iD,
      },
    ],
    [
      0,
      {
        [_jN]: _iS,
      },
    ],
    [() => IamInstanceProfile, 0],
    [
      0,
      {
        [_jN]: _iT,
      },
    ],
    [
      0,
      {
        [_jN]: _oA,
      },
    ],
    [
      0,
      {
        [_jN]: _pl,
      },
    ],
    [
      () => ProductCodes,
      {
        [_jN]: _pC,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _eNIU,
      },
    ],
  ]
);
export var Ec2NetworkInterface = struct(
  n0,
  _ENI,
  0,
  [_IAp, _PIA, _PIu, _SG, _SNI, _VI],
  [
    [
      64 | 0,
      {
        [_jN]: _iAp,
      },
    ],
    [
      () => PrivateIpAddresses,
      {
        [_jN]: _pIA,
      },
    ],
    [
      0,
      {
        [_jN]: _pIu,
      },
    ],
    [
      () => SecurityGroups,
      {
        [_jN]: _sG,
      },
    ],
    [
      0,
      {
        [_jN]: _sNI,
      },
    ],
    [
      0,
      {
        [_jN]: _vI,
      },
    ],
  ]
);
export var EcsClusterDetails = struct(
  n0,
  _ECDc,
  0,
  [_N, _Ar, _St, _ASC, _RCIC, _RTC, _Ta, _TD],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      1,
      {
        [_jN]: _aSC,
      },
    ],
    [
      1,
      {
        [_jN]: _rCIC,
      },
    ],
    [
      1,
      {
        [_jN]: _rTC,
      },
    ],
    [
      () => Tags,
      {
        [_jN]: _ta,
      },
    ],
    [
      () => EcsTaskDetails,
      {
        [_jN]: _tD,
      },
    ],
  ]
);
export var EcsTaskDetails = struct(
  n0,
  _ETD,
  0,
  [_Ar, _DAe, _V, _TCA, _SA, _SBt, _Ta, _Vo, _Cont, _Gr, _LTa],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      0,
      {
        [_jN]: _dAe,
      },
    ],
    [
      0,
      {
        [_jN]: _v,
      },
    ],
    [
      4,
      {
        [_jN]: _cAr,
      },
    ],
    [
      4,
      {
        [_jN]: _sA,
      },
    ],
    [
      0,
      {
        [_jN]: _sBt,
      },
    ],
    [
      () => Tags,
      {
        [_jN]: _ta,
      },
    ],
    [
      () => Volumes,
      {
        [_jN]: _vo,
      },
    ],
    [
      () => Containers,
      {
        [_jN]: _co,
      },
    ],
    [
      0,
      {
        [_jN]: _gr,
      },
    ],
    [
      0,
      {
        [_jN]: _lTa,
      },
    ],
  ]
);
export var EksCluster = struct(
  n0,
  _ECk,
  0,
  [_Ar, _CAr, _St, _VI, _EIU],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      4,
      {
        [_jN]: _cAr,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      0,
      {
        [_jN]: _vI,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _eIU,
      },
    ],
  ]
);
export var EksClusterDetails = struct(
  n0,
  _ECD,
  0,
  [_N, _Ar, _VI, _St, _Ta, _CAr],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      0,
      {
        [_jN]: _vI,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      () => Tags,
      {
        [_jN]: _ta,
      },
    ],
    [
      4,
      {
        [_jN]: _cAr,
      },
    ],
  ]
);
export var Evidence = struct(
  n0,
  _Ev,
  0,
  [_TID],
  [
    [
      () => ThreatIntelligenceDetails,
      {
        [_jN]: _tID,
      },
    ],
  ]
);
export var FilterCondition = struct(
  n0,
  _FCi,
  0,
  [_EV, _GT, _LT],
  [
    [
      0,
      {
        [_jN]: _eV,
      },
    ],
    [
      1,
      {
        [_jN]: _gT,
      },
    ],
    [
      1,
      {
        [_jN]: _lT,
      },
    ],
  ]
);
export var FilterCriteria = struct(
  n0,
  _FCil,
  0,
  [_FC],
  [
    [
      () => FilterCriterionList,
      {
        [_jN]: _fC,
      },
    ],
  ]
);
export var FilterCriterion = struct(
  n0,
  _FC,
  0,
  [_CK, _FCi],
  [
    [
      0,
      {
        [_jN]: _cK,
      },
    ],
    [
      () => FilterCondition,
      {
        [_jN]: _fCi,
      },
    ],
  ]
);
export var Finding = struct(
  n0,
  _Fi,
  0,
  [_AIc, _Ar, _Conf, _CAr, _D, _I, _Par, _Reg, _Res, _SV, _Ser, _Se, _Ti, _T, _UAp, _AASA],
  [
    [
      0,
      {
        [_jN]: _aIc,
      },
    ],
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      1,
      {
        [_jN]: _con,
      },
    ],
    [
      0,
      {
        [_jN]: _cAr,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _par,
      },
    ],
    [
      0,
      {
        [_jN]: _reg,
      },
    ],
    [
      () => Resource,
      {
        [_jN]: _res,
      },
    ],
    [
      0,
      {
        [_jN]: _sV,
      },
    ],
    [
      () => Service,
      {
        [_jN]: _ser,
      },
    ],
    [
      1,
      {
        [_jN]: _se,
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
        [_jN]: _ty,
      },
    ],
    [
      0,
      {
        [_jN]: _uAp,
      },
    ],
    [
      0,
      {
        [_jN]: _aASA,
      },
    ],
  ]
);
export var FindingCriteria = struct(
  n0,
  _FCin,
  0,
  [_Cr],
  [
    [
      () => Criterion,
      {
        [_jN]: _cr,
      },
    ],
  ]
);
export var FindingStatistics = struct(
  n0,
  _FS,
  0,
  [_CBS, _GBA, _GBD, _GBFT, _GBR, _GBS],
  [
    [
      128 | 1,
      {
        [_jN]: _cBS,
      },
    ],
    [
      () => GroupedByAccount,
      {
        [_jN]: _gBA,
      },
    ],
    [
      () => GroupedByDate,
      {
        [_jN]: _gBD,
      },
    ],
    [
      () => GroupedByFindingType,
      {
        [_jN]: _gBFT,
      },
    ],
    [
      () => GroupedByResource,
      {
        [_jN]: _gBR,
      },
    ],
    [
      () => GroupedBySeverity,
      {
        [_jN]: _gBS,
      },
    ],
  ]
);
export var FindingTypeStatistics = struct(
  n0,
  _FTS,
  0,
  [_FTi, _LGA, _TF],
  [
    [
      0,
      {
        [_jN]: _fTi,
      },
    ],
    [
      4,
      {
        [_jN]: _lGA,
      },
    ],
    [
      1,
      {
        [_jN]: _tF,
      },
    ],
  ]
);
export var FreeTrialFeatureConfigurationResult = struct(
  n0,
  _FTFCR,
  0,
  [_N, _FTDR],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      1,
      {
        [_jN]: _fTDR,
      },
    ],
  ]
);
export var GeoLocation = struct(
  n0,
  _GL,
  0,
  [_La, _Lon],
  [
    [
      1,
      {
        [_jN]: _la,
      },
    ],
    [
      1,
      {
        [_jN]: _lon,
      },
    ],
  ]
);
export var GetFilterRequest = struct(
  n0,
  _GFR,
  0,
  [_DI, _FN],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      0,
      {
        [_jN]: _fN,
        [_hL]: 1,
      },
    ],
  ]
);
export var GetFilterResponse = struct(
  n0,
  _GFRe,
  0,
  [_N, _D, _Ac, _R, _FCin, _Ta],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _ac,
      },
    ],
    [
      1,
      {
        [_jN]: _r,
      },
    ],
    [
      () => FindingCriteria,
      {
        [_jN]: _fCin,
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
export var GetFindingsRequest = struct(
  n0,
  _GFRet,
  0,
  [_DI, _FI, _SCo],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _fI,
      },
    ],
    [
      () => SortCriteria,
      {
        [_jN]: _sCo,
      },
    ],
  ]
);
export var GetFindingsResponse = struct(
  n0,
  _GFReti,
  0,
  [_Fin],
  [
    [
      () => Findings,
      {
        [_jN]: _fi,
      },
    ],
  ]
);
export var GetFindingsStatisticsRequest = struct(
  n0,
  _GFSR,
  0,
  [_DI, _FST, _FCin, _GB, _OB, _MR],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _fST,
      },
    ],
    [
      () => FindingCriteria,
      {
        [_jN]: _fCin,
      },
    ],
    [
      0,
      {
        [_jN]: _gB,
      },
    ],
    [
      0,
      {
        [_jN]: _oB,
      },
    ],
    [
      1,
      {
        [_jN]: _mR,
      },
    ],
  ]
);
export var GetFindingsStatisticsResponse = struct(
  n0,
  _GFSRe,
  0,
  [_FS, _NT],
  [
    [
      () => FindingStatistics,
      {
        [_jN]: _fS,
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
export var GetInvitationsCountRequest = struct(n0, _GICR, 0, [], []);
export var GetInvitationsCountResponse = struct(
  n0,
  _GICRe,
  0,
  [_IC],
  [
    [
      1,
      {
        [_jN]: _iC,
      },
    ],
  ]
);
export var GetOrganizationStatisticsResponse = struct(
  n0,
  _GOSR,
  0,
  [_OD],
  [
    [
      () => OrganizationDetails,
      {
        [_jN]: _oD,
      },
    ],
  ]
);
export var GetRemainingFreeTrialDaysRequest = struct(
  n0,
  _GRFTDR,
  0,
  [_DI, _AIcc],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _aIcc,
      },
    ],
  ]
);
export var GetRemainingFreeTrialDaysResponse = struct(
  n0,
  _GRFTDRe,
  0,
  [_Acc, _UAn],
  [
    [
      () => AccountFreeTrialInfos,
      {
        [_jN]: _acc,
      },
    ],
    [
      () => UnprocessedAccounts,
      {
        [_jN]: _uAn,
      },
    ],
  ]
);
export var HighestSeverityThreatDetails = struct(
  n0,
  _HSTD,
  0,
  [_Se, _TN, _Coun],
  [
    [
      0,
      {
        [_jN]: _se,
      },
    ],
    [
      0,
      {
        [_jN]: _tN,
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
export var HostPath = struct(
  n0,
  _HP,
  0,
  [_Pa],
  [
    [
      0,
      {
        [_jN]: _pa,
      },
    ],
  ]
);
export var IamInstanceProfile = struct(
  n0,
  _IIP,
  0,
  [_Ar, _I],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
  ]
);
export var ImpersonatedUser = struct(
  n0,
  _IUm,
  0,
  [_Use, _Gro],
  [
    [
      0,
      {
        [_jN]: _use,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _gro,
      },
    ],
  ]
);
export var Indicator = struct(
  n0,
  _In,
  0,
  [_Ke, _Va, _Ti],
  [
    [
      0,
      {
        [_jN]: _ke,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _va,
      },
    ],
    [
      0,
      {
        [_jN]: _ti,
      },
    ],
  ]
);
export var InstanceDetails = struct(
  n0,
  _IDn,
  0,
  [_AZ, _IIP, _ID, _IIm, _IIn, _IS, _IT, _OA, _LTau, _NI, _Pl, _PC, _Ta],
  [
    [
      0,
      {
        [_jN]: _aZ,
      },
    ],
    [
      () => IamInstanceProfile,
      {
        [_jN]: _iIP,
      },
    ],
    [
      0,
      {
        [_jN]: _iD,
      },
    ],
    [
      0,
      {
        [_jN]: _iIm,
      },
    ],
    [
      0,
      {
        [_jN]: _iIn,
      },
    ],
    [
      0,
      {
        [_jN]: _iS,
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
        [_jN]: _oA,
      },
    ],
    [
      0,
      {
        [_jN]: _lTau,
      },
    ],
    [
      () => NetworkInterfaces,
      {
        [_jN]: _nI,
      },
    ],
    [
      0,
      {
        [_jN]: _pl,
      },
    ],
    [
      () => ProductCodes,
      {
        [_jN]: _pC,
      },
    ],
    [
      () => Tags,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var ItemPath = struct(
  n0,
  _IPt,
  0,
  [_NIP, _H],
  [
    [
      0,
      {
        [_jN]: _nIP,
      },
    ],
    [
      0,
      {
        [_jN]: _h,
      },
    ],
  ]
);
export var KubernetesApiCallAction = struct(
  n0,
  _KACA,
  0,
  [_RU, _Ve, _SIo, _UA, _RID, _SCt, _Para, _Res, _Su, _Na, _RN],
  [
    [
      0,
      {
        [_jN]: _rU,
      },
    ],
    [
      0,
      {
        [_jN]: _ve,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sIP,
      },
    ],
    [
      0,
      {
        [_jN]: _uA,
      },
    ],
    [
      () => RemoteIpDetails,
      {
        [_jN]: _rID,
      },
    ],
    [
      1,
      {
        [_jN]: _sCt,
      },
    ],
    [
      0,
      {
        [_jN]: _para,
      },
    ],
    [
      0,
      {
        [_jN]: _res,
      },
    ],
    [
      0,
      {
        [_jN]: _su,
      },
    ],
    [
      0,
      {
        [_jN]: _na,
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
export var KubernetesDataSourceFreeTrial = struct(
  n0,
  _KDSFT,
  0,
  [_AL],
  [
    [
      () => DataSourceFreeTrial,
      {
        [_jN]: _aL,
      },
    ],
  ]
);
export var KubernetesDetails = struct(
  n0,
  _KD,
  0,
  [_KUD, _KWD],
  [
    [
      () => KubernetesUserDetails,
      {
        [_jN]: _kUD,
      },
    ],
    [
      () => KubernetesWorkloadDetails,
      {
        [_jN]: _kWD,
      },
    ],
  ]
);
export var KubernetesPermissionCheckedDetails = struct(
  n0,
  _KPCD,
  0,
  [_Ve, _Res, _Na, _Al],
  [
    [
      0,
      {
        [_jN]: _ve,
      },
    ],
    [
      0,
      {
        [_jN]: _res,
      },
    ],
    [
      0,
      {
        [_jN]: _na,
      },
    ],
    [
      2,
      {
        [_jN]: _al,
      },
    ],
  ]
);
export var KubernetesRoleBindingDetails = struct(
  n0,
  _KRBD,
  0,
  [_Ki, _N, _U, _RRN, _RRK],
  [
    [
      0,
      {
        [_jN]: _ki,
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
        [_jN]: _u,
      },
    ],
    [
      0,
      {
        [_jN]: _rRN,
      },
    ],
    [
      0,
      {
        [_jN]: _rRK,
      },
    ],
  ]
);
export var KubernetesRoleDetails = struct(
  n0,
  _KRD,
  0,
  [_Ki, _N, _U],
  [
    [
      0,
      {
        [_jN]: _ki,
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
        [_jN]: _u,
      },
    ],
  ]
);
export var KubernetesUserDetails = struct(
  n0,
  _KUD,
  0,
  [_Use, _U, _Gro, _SNe, _IUm],
  [
    [
      0,
      {
        [_jN]: _use,
      },
    ],
    [
      0,
      {
        [_jN]: _u,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _gro,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sNe,
      },
    ],
    [
      () => ImpersonatedUser,
      {
        [_jN]: _iUm,
      },
    ],
  ]
);
export var KubernetesWorkload = struct(
  n0,
  _KW,
  0,
  [_CU, _Na, _KRT],
  [
    [
      64 | 0,
      {
        [_jN]: _cU,
      },
    ],
    [
      0,
      {
        [_jN]: _na,
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
export var KubernetesWorkloadDetails = struct(
  n0,
  _KWD,
  0,
  [_N, _T, _U, _Na, _HN, _Cont, _Vo, _SAN, _HIPC, _HPID],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _ty,
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
        [_jN]: _na,
      },
    ],
    [
      2,
      {
        [_jN]: _hN,
      },
    ],
    [
      () => Containers,
      {
        [_jN]: _co,
      },
    ],
    [
      () => Volumes,
      {
        [_jN]: _vo,
      },
    ],
    [
      0,
      {
        [_jN]: _sAN,
      },
    ],
    [
      2,
      {
        [_jN]: _hIPC,
      },
    ],
    [
      2,
      {
        [_jN]: _hPID,
      },
    ],
  ]
);
export var LambdaDetails = struct(
  n0,
  _LD,
  0,
  [_FA, _FNu, _D, _LMA, _RIe, _FV, _Ro, _VC, _Ta],
  [
    [
      0,
      {
        [_jN]: _fA,
      },
    ],
    [
      0,
      {
        [_jN]: _fNu,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      4,
      {
        [_jN]: _lMA,
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
        [_jN]: _fV,
      },
    ],
    [
      0,
      {
        [_jN]: _ro,
      },
    ],
    [
      () => VpcConfig,
      {
        [_jN]: _vC,
      },
    ],
    [
      () => Tags,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var LineageObject = struct(
  n0,
  _LO,
  0,
  [_STta, _NP, _UI, _N, _Pi, _Uu, _EP, _Eu, _PU],
  [
    [
      4,
      {
        [_jN]: _sTta,
      },
    ],
    [
      1,
      {
        [_jN]: _nP,
      },
    ],
    [
      1,
      {
        [_jN]: _uI,
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
        [_jN]: _pi,
      },
    ],
    [
      0,
      {
        [_jN]: _uu,
      },
    ],
    [
      0,
      {
        [_jN]: _eP,
      },
    ],
    [
      1,
      {
        [_jN]: _eu,
      },
    ],
    [
      0,
      {
        [_jN]: _pU,
      },
    ],
  ]
);
export var ListFindingsRequest = struct(
  n0,
  _LFRis,
  0,
  [_DI, _FCin, _SCo, _MR, _NT],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      () => FindingCriteria,
      {
        [_jN]: _fCin,
      },
    ],
    [
      () => SortCriteria,
      {
        [_jN]: _sCo,
      },
    ],
    [
      1,
      {
        [_jN]: _mR,
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
export var ListFindingsResponse = struct(
  n0,
  _LFRist,
  0,
  [_FI, _NT],
  [
    [
      64 | 0,
      {
        [_jN]: _fI,
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
export var LocalIpDetails = struct(
  n0,
  _LID,
  0,
  [_IAV, _IAVp],
  [
    [
      () => SensitiveString,
      {
        [_jN]: _iAV,
      },
    ],
    [
      () => SensitiveString,
      {
        [_jN]: _iAVp,
      },
    ],
  ]
);
export var LocalPortDetails = struct(
  n0,
  _LPD,
  0,
  [_Po, _PN],
  [
    [
      1,
      {
        [_jN]: _po,
      },
    ],
    [
      0,
      {
        [_jN]: _pN,
      },
    ],
  ]
);
export var LoginAttribute = struct(
  n0,
  _LA,
  0,
  [_Us, _App, _FLA, _SLA],
  [
    [
      0,
      {
        [_jN]: _us,
      },
    ],
    [
      0,
      {
        [_jN]: _app,
      },
    ],
    [
      1,
      {
        [_jN]: _fLA,
      },
    ],
    [
      1,
      {
        [_jN]: _sLA,
      },
    ],
  ]
);
export var MalwareProtectionDataSourceFreeTrial = struct(
  n0,
  _MPDSFT,
  0,
  [_SEIWF],
  [
    [
      () => DataSourceFreeTrial,
      {
        [_jN]: _sEIWF,
      },
    ],
  ]
);
export var MalwareScanDetails = struct(
  n0,
  _MSD,
  0,
  [_Th],
  [
    [
      () => Threats,
      {
        [_jN]: _th,
      },
    ],
  ]
);
export var NetworkConnection = struct(
  n0,
  _NC,
  0,
  [_Di],
  [
    [
      0,
      {
        [_jN]: _di,
      },
    ],
  ]
);
export var NetworkConnectionAction = struct(
  n0,
  _NCA,
  0,
  [_Bl, _CD, _LPD, _Pro, _LID, _LNI, _RID, _RPD],
  [
    [
      2,
      {
        [_jN]: _bl,
      },
    ],
    [
      0,
      {
        [_jN]: _cD,
      },
    ],
    [
      () => LocalPortDetails,
      {
        [_jN]: _lPD,
      },
    ],
    [
      0,
      {
        [_jN]: _pro,
      },
    ],
    [
      () => LocalIpDetails,
      {
        [_jN]: _lID,
      },
    ],
    [
      0,
      {
        [_jN]: _lNI,
      },
    ],
    [
      () => RemoteIpDetails,
      {
        [_jN]: _rID,
      },
    ],
    [
      () => RemotePortDetails,
      {
        [_jN]: _rPD,
      },
    ],
  ]
);
export var NetworkEndpoint = struct(
  n0,
  _NEe,
  0,
  [_I, _Ip, _Do, _Po, _Lo, _ASu, _Conn],
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
        [_jN]: _ip,
      },
    ],
    [
      0,
      {
        [_jN]: _do,
      },
    ],
    [
      1,
      {
        [_jN]: _po,
      },
    ],
    [
      () => NetworkGeoLocation,
      {
        [_jN]: _lo,
      },
    ],
    [
      () => AutonomousSystem,
      {
        [_jN]: _aSu,
      },
    ],
    [
      () => NetworkConnection,
      {
        [_jN]: _conn,
      },
    ],
  ]
);
export var NetworkGeoLocation = struct(
  n0,
  _NGL,
  0,
  [_C, _Cou, _Lat, _Long],
  [
    [
      0,
      {
        [_jN]: _ci,
      },
    ],
    [
      0,
      {
        [_jN]: _coun,
      },
    ],
    [
      1,
      {
        [_jN]: _la,
      },
    ],
    [
      1,
      {
        [_jN]: _lon,
      },
    ],
  ]
);
export var NetworkInterface = struct(
  n0,
  _NIe,
  0,
  [_IAp, _NII, _PDN, _PIAr, _PIA, _PDNu, _PIu, _SG, _SIu, _VI],
  [
    [
      64 | 0,
      {
        [_jN]: _iAp,
      },
    ],
    [
      0,
      {
        [_jN]: _nII,
      },
    ],
    [
      0,
      {
        [_jN]: _pDN,
      },
    ],
    [
      () => SensitiveString,
      {
        [_jN]: _pIAr,
      },
    ],
    [
      () => PrivateIpAddresses,
      {
        [_jN]: _pIA,
      },
    ],
    [
      0,
      {
        [_jN]: _pDNu,
      },
    ],
    [
      0,
      {
        [_jN]: _pIu,
      },
    ],
    [
      () => SecurityGroups,
      {
        [_jN]: _sG,
      },
    ],
    [
      0,
      {
        [_jN]: _sIu,
      },
    ],
    [
      0,
      {
        [_jN]: _vI,
      },
    ],
  ]
);
export var Observations = struct(
  n0,
  _O,
  0,
  [_Te],
  [
    [
      64 | 0,
      {
        [_jN]: _te,
      },
    ],
  ]
);
export var Organization = struct(
  n0,
  _Or,
  0,
  [_As, _AOs, _Isp, _Org],
  [
    [
      0,
      {
        [_jN]: _as,
      },
    ],
    [
      0,
      {
        [_jN]: _aO,
      },
    ],
    [
      0,
      {
        [_jN]: _isp,
      },
    ],
    [
      0,
      {
        [_jN]: _or,
      },
    ],
  ]
);
export var OrganizationDetails = struct(
  n0,
  _OD,
  0,
  [_UAp, _OS],
  [
    [
      4,
      {
        [_jN]: _uAp,
      },
    ],
    [
      () => OrganizationStatistics,
      {
        [_jN]: _oS,
      },
    ],
  ]
);
export var OrganizationFeatureStatistics = struct(
  n0,
  _OFS,
  0,
  [_N, _EAC, _AC],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      1,
      {
        [_jN]: _eAC,
      },
    ],
    [
      () => OrganizationFeatureStatisticsAdditionalConfigurations,
      {
        [_jN]: _aC,
      },
    ],
  ]
);
export var OrganizationFeatureStatisticsAdditionalConfiguration = struct(
  n0,
  _OFSAC,
  0,
  [_N, _EAC],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      1,
      {
        [_jN]: _eAC,
      },
    ],
  ]
);
export var OrganizationStatistics = struct(
  n0,
  _OS,
  0,
  [_TAC, _MACe, _AAC, _EAC, _CBF],
  [
    [
      1,
      {
        [_jN]: _tAC,
      },
    ],
    [
      1,
      {
        [_jN]: _mAC,
      },
    ],
    [
      1,
      {
        [_jN]: _aAC,
      },
    ],
    [
      1,
      {
        [_jN]: _eAC,
      },
    ],
    [
      () => OrganizationFeatureStatisticsResults,
      {
        [_jN]: _cBF,
      },
    ],
  ]
);
export var Owner = struct(
  n0,
  _Ow,
  0,
  [_I],
  [
    [
      0,
      {
        [_jN]: _i,
      },
    ],
  ]
);
export var PermissionConfiguration = struct(
  n0,
  _PCe,
  0,
  [_BLP, _ALP],
  [
    [
      () => BucketLevelPermissions,
      {
        [_jN]: _bLP,
      },
    ],
    [
      () => AccountLevelPermissions,
      {
        [_jN]: _aLP,
      },
    ],
  ]
);
export var PortProbeAction = struct(
  n0,
  _PPA,
  0,
  [_Bl, _PPD],
  [
    [
      2,
      {
        [_jN]: _bl,
      },
    ],
    [
      () => PortProbeDetails,
      {
        [_jN]: _pPD,
      },
    ],
  ]
);
export var PortProbeDetail = struct(
  n0,
  _PPDo,
  0,
  [_LPD, _LID, _RID],
  [
    [
      () => LocalPortDetails,
      {
        [_jN]: _lPD,
      },
    ],
    [
      () => LocalIpDetails,
      {
        [_jN]: _lID,
      },
    ],
    [
      () => RemoteIpDetails,
      {
        [_jN]: _rID,
      },
    ],
  ]
);
export var PrivateIpAddressDetails = struct(
  n0,
  _PIAD,
  0,
  [_PDN, _PIAr],
  [
    [
      0,
      {
        [_jN]: _pDN,
      },
    ],
    [
      () => SensitiveString,
      {
        [_jN]: _pIAr,
      },
    ],
  ]
);
export var ProcessDetails = struct(
  n0,
  _PD,
  0,
  [_N, _EP, _ES, _NP, _Pw, _Pi, _STta, _Uu, _PU, _Us, _UI, _Eu, _Li],
  [
    [
      0,
      {
        [_jN]: _n,
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
        [_jN]: _eS,
      },
    ],
    [
      1,
      {
        [_jN]: _nP,
      },
    ],
    [
      0,
      {
        [_jN]: _pw,
      },
    ],
    [
      1,
      {
        [_jN]: _pi,
      },
    ],
    [
      4,
      {
        [_jN]: _sTta,
      },
    ],
    [
      0,
      {
        [_jN]: _uu,
      },
    ],
    [
      0,
      {
        [_jN]: _pU,
      },
    ],
    [
      0,
      {
        [_jN]: _us,
      },
    ],
    [
      1,
      {
        [_jN]: _uI,
      },
    ],
    [
      1,
      {
        [_jN]: _eu,
      },
    ],
    [
      () => Lineage,
      {
        [_jN]: _li,
      },
    ],
  ]
);
export var ProductCode = struct(
  n0,
  _PCr,
  0,
  [_Cod, _PTr],
  [
    [
      0,
      {
        [_jN]: _pCI,
      },
    ],
    [
      0,
      {
        [_jN]: _pCT,
      },
    ],
  ]
);
export var PublicAccess = struct(
  n0,
  _PA,
  0,
  [_PCe, _EPf],
  [
    [
      () => PermissionConfiguration,
      {
        [_jN]: _pCe,
      },
    ],
    [
      0,
      {
        [_jN]: _ePf,
      },
    ],
  ]
);
export var PublicAccessConfiguration = struct(
  n0,
  _PAC,
  0,
  [_PAA, _PPAu, _PAIB, _PBRB],
  [
    [
      0,
      {
        [_jN]: _pAA,
      },
    ],
    [
      0,
      {
        [_jN]: _pPAu,
      },
    ],
    [
      0,
      {
        [_jN]: _pAIB,
      },
    ],
    [
      0,
      {
        [_jN]: _pBRB,
      },
    ],
  ]
);
export var RdsDbInstanceDetails = struct(
  n0,
  _RDID,
  0,
  [_DII, _Eng, _EVn, _DCI, _DIA, _Ta],
  [
    [
      0,
      {
        [_jN]: _dII,
      },
    ],
    [
      0,
      {
        [_jN]: _eng,
      },
    ],
    [
      0,
      {
        [_jN]: _eVn,
      },
    ],
    [
      0,
      {
        [_jN]: _dCI,
      },
    ],
    [
      0,
      {
        [_jN]: _dIA,
      },
    ],
    [
      () => Tags,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var RdsDbUserDetails = struct(
  n0,
  _RDUD,
  0,
  [_Us, _App, _Dat, _Ss, _AM],
  [
    [
      0,
      {
        [_jN]: _us,
      },
    ],
    [
      0,
      {
        [_jN]: _app,
      },
    ],
    [
      0,
      {
        [_jN]: _dat,
      },
    ],
    [
      0,
      {
        [_jN]: _ss,
      },
    ],
    [
      0,
      {
        [_jN]: _aM,
      },
    ],
  ]
);
export var RdsLimitlessDbDetails = struct(
  n0,
  _RLDD,
  0,
  [_DSGI, _DSGRI, _DSGA, _Eng, _EVn, _DCI, _Ta],
  [
    [
      0,
      {
        [_jN]: _dSGI,
      },
    ],
    [
      0,
      {
        [_jN]: _dSGRI,
      },
    ],
    [
      0,
      {
        [_jN]: _dSGA,
      },
    ],
    [
      0,
      {
        [_jN]: _eng,
      },
    ],
    [
      0,
      {
        [_jN]: _eVn,
      },
    ],
    [
      0,
      {
        [_jN]: _dCI,
      },
    ],
    [
      () => Tags,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var RdsLoginAttemptAction = struct(
  n0,
  _RLAA,
  0,
  [_RID, _LAo],
  [
    [
      () => RemoteIpDetails,
      {
        [_jN]: _rID,
      },
    ],
    [() => LoginAttributes, 0],
  ]
);
export var RemoteAccountDetails = struct(
  n0,
  _RAD,
  0,
  [_AIc, _Af],
  [
    [
      0,
      {
        [_jN]: _aIc,
      },
    ],
    [
      2,
      {
        [_jN]: _af,
      },
    ],
  ]
);
export var RemoteIpDetails = struct(
  n0,
  _RID,
  0,
  [_C, _Cou, _GL, _IAV, _IAVp, _Or],
  [
    [
      () => City,
      {
        [_jN]: _ci,
      },
    ],
    [
      () => Country,
      {
        [_jN]: _coun,
      },
    ],
    [
      () => GeoLocation,
      {
        [_jN]: _gL,
      },
    ],
    [
      () => SensitiveString,
      {
        [_jN]: _iAV,
      },
    ],
    [
      () => SensitiveString,
      {
        [_jN]: _iAVp,
      },
    ],
    [
      () => Organization,
      {
        [_jN]: _org,
      },
    ],
  ]
);
export var RemotePortDetails = struct(
  n0,
  _RPD,
  0,
  [_Po, _PN],
  [
    [
      1,
      {
        [_jN]: _po,
      },
    ],
    [
      0,
      {
        [_jN]: _pN,
      },
    ],
  ]
);
export var Resource = struct(
  n0,
  _Res,
  0,
  [_AKD, _SBD, _IDn, _ECD, _KD, _RT, _EVD, _ECDc, _CDo, _RDID, _RLDD, _RDUD, _LD],
  [
    [
      () => AccessKeyDetails,
      {
        [_jN]: _aKD,
      },
    ],
    [
      () => S3BucketDetails,
      {
        [_jN]: _sBD,
      },
    ],
    [
      () => InstanceDetails,
      {
        [_jN]: _iDn,
      },
    ],
    [
      () => EksClusterDetails,
      {
        [_jN]: _eCD,
      },
    ],
    [
      () => KubernetesDetails,
      {
        [_jN]: _kD,
      },
    ],
    [
      0,
      {
        [_jN]: _rT,
      },
    ],
    [
      () => EbsVolumeDetails,
      {
        [_jN]: _eVD,
      },
    ],
    [
      () => EcsClusterDetails,
      {
        [_jN]: _eCDc,
      },
    ],
    [
      () => Container,
      {
        [_jN]: _cDo,
      },
    ],
    [
      () => RdsDbInstanceDetails,
      {
        [_jN]: _rDID,
      },
    ],
    [
      () => RdsLimitlessDbDetails,
      {
        [_jN]: _rLDD,
      },
    ],
    [
      () => RdsDbUserDetails,
      {
        [_jN]: _rDUD,
      },
    ],
    [
      () => LambdaDetails,
      {
        [_jN]: _lD,
      },
    ],
  ]
);
export var ResourceData = struct(
  n0,
  _RDe,
  0,
  [_SB, _EI, _AK, _ENI, _SO, _ECk, _KW, _Con],
  [
    [
      () => S3Bucket,
      {
        [_jN]: _sB,
      },
    ],
    [
      () => Ec2Instance,
      {
        [_jN]: _eI,
      },
    ],
    [
      () => AccessKey,
      {
        [_jN]: _aK,
      },
    ],
    [
      () => Ec2NetworkInterface,
      {
        [_jN]: _eNI,
      },
    ],
    [
      () => S3Object,
      {
        [_jN]: _sO,
      },
    ],
    [
      () => EksCluster,
      {
        [_jN]: _eCk,
      },
    ],
    [
      () => KubernetesWorkload,
      {
        [_jN]: _kW,
      },
    ],
    [
      () => ContainerFindingResource,
      {
        [_jN]: _cont,
      },
    ],
  ]
);
export var ResourceDetails = struct(
  n0,
  _RD,
  0,
  [_IAn],
  [
    [
      0,
      {
        [_jN]: _iAn,
      },
    ],
  ]
);
export var ResourceStatistics = struct(
  n0,
  _RSe,
  0,
  [_AIc, _LGA, _RI, _RT, _TF],
  [
    [
      0,
      {
        [_jN]: _aIc,
      },
    ],
    [
      4,
      {
        [_jN]: _lGA,
      },
    ],
    [
      0,
      {
        [_jN]: _rI,
      },
    ],
    [
      0,
      {
        [_jN]: _rT,
      },
    ],
    [
      1,
      {
        [_jN]: _tF,
      },
    ],
  ]
);
export var ResourceV2 = struct(
  n0,
  _RV,
  0,
  [_U, _N, _AIc, _RT, _Reg, _Ser, _CP, _Ta, _Data],
  [
    [
      0,
      {
        [_jN]: _u,
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
        [_jN]: _aIc,
      },
    ],
    [
      0,
      {
        [_jN]: _rT,
      },
    ],
    [
      0,
      {
        [_jN]: _reg,
      },
    ],
    [
      0,
      {
        [_jN]: _ser,
      },
    ],
    [
      0,
      {
        [_jN]: _cP,
      },
    ],
    [
      () => Tags,
      {
        [_jN]: _ta,
      },
    ],
    [
      () => ResourceData,
      {
        [_jN]: _data,
      },
    ],
  ]
);
export var RuntimeContext = struct(
  n0,
  _RC,
  0,
  [
    _MPo,
    _MA,
    _SP,
    _LP,
    _LPV,
    _SPo,
    _RBP,
    _RAP,
    _MS,
    _MTo,
    _FSTi,
    _Fl,
    _MN,
    _MFP,
    _MSo,
    _SHFP,
    _TP,
    _AF,
    _IPN,
    _MRe,
    _TNo,
    _TC,
    _SN,
    _CLE,
    _TFP,
  ],
  [
    [
      () => ProcessDetails,
      {
        [_jN]: _mPo,
      },
    ],
    [
      4,
      {
        [_jN]: _mA,
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
        [_jN]: _lP,
      },
    ],
    [
      0,
      {
        [_jN]: _lPV,
      },
    ],
    [
      0,
      {
        [_jN]: _sPo,
      },
    ],
    [
      0,
      {
        [_jN]: _rBP,
      },
    ],
    [
      0,
      {
        [_jN]: _rAP,
      },
    ],
    [
      0,
      {
        [_jN]: _mS,
      },
    ],
    [
      0,
      {
        [_jN]: _mTo,
      },
    ],
    [
      0,
      {
        [_jN]: _fSTi,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _fl,
      },
    ],
    [
      0,
      {
        [_jN]: _mN,
      },
    ],
    [
      0,
      {
        [_jN]: _mFP,
      },
    ],
    [
      0,
      {
        [_jN]: _mSo,
      },
    ],
    [
      0,
      {
        [_jN]: _sHFP,
      },
    ],
    [
      () => ProcessDetails,
      {
        [_jN]: _tP,
      },
    ],
    [
      0,
      {
        [_jN]: _aF,
      },
    ],
    [
      1,
      {
        [_jN]: _iPN,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _mRe,
      },
    ],
    [
      0,
      {
        [_jN]: _tNo,
      },
    ],
    [
      0,
      {
        [_jN]: _tC,
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
        [_jN]: _cLE,
      },
    ],
    [
      0,
      {
        [_jN]: _tFP,
      },
    ],
  ]
);
export var RuntimeDetails = struct(
  n0,
  _RDu,
  0,
  [_P, _Conte],
  [
    [
      () => ProcessDetails,
      {
        [_jN]: _p,
      },
    ],
    [
      () => RuntimeContext,
      {
        [_jN]: _conte,
      },
    ],
  ]
);
export var S3Bucket = struct(
  n0,
  _SB,
  0,
  [_OI, _CAr, _ET, _EKA, _EPf, _PRA, _PWA, _APA, _BPAu, _SOU],
  [
    [
      0,
      {
        [_jN]: _oI,
      },
    ],
    [
      4,
      {
        [_jN]: _cAr,
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
        [_jN]: _eKA,
      },
    ],
    [
      0,
      {
        [_jN]: _ePf,
      },
    ],
    [
      0,
      {
        [_jN]: _pRA,
      },
    ],
    [
      0,
      {
        [_jN]: _pWA,
      },
    ],
    [
      () => PublicAccessConfiguration,
      {
        [_jN]: _aPA,
      },
    ],
    [
      () => PublicAccessConfiguration,
      {
        [_jN]: _bPAu,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sOU,
      },
    ],
  ]
);
export var S3BucketDetail = struct(
  n0,
  _SBDu,
  0,
  [_Ar, _N, _T, _CAr, _Ow, _Ta, _DSSE, _PA, _SOD],
  [
    [
      0,
      {
        [_jN]: _ar,
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
        [_jN]: _ty,
      },
    ],
    [
      4,
      {
        [_jN]: _cAr,
      },
    ],
    [
      () => Owner,
      {
        [_jN]: _ow,
      },
    ],
    [
      () => Tags,
      {
        [_jN]: _ta,
      },
    ],
    [
      () => DefaultServerSideEncryption,
      {
        [_jN]: _dSSE,
      },
    ],
    [
      () => PublicAccess,
      {
        [_jN]: _pA,
      },
    ],
    [
      () => S3ObjectDetails,
      {
        [_jN]: _sOD,
      },
    ],
  ]
);
export var S3Object = struct(
  n0,
  _SO,
  0,
  [_ETa, _Ke, _VIe],
  [
    [
      0,
      {
        [_jN]: _eTa,
      },
    ],
    [
      0,
      {
        [_jN]: _ke,
      },
    ],
    [
      0,
      {
        [_jN]: _vIe,
      },
    ],
  ]
);
export var S3ObjectDetail = struct(
  n0,
  _SODb,
  0,
  [_OAb, _Ke, _ETa, _H, _VIe],
  [
    [
      0,
      {
        [_jN]: _oAb,
      },
    ],
    [
      0,
      {
        [_jN]: _ke,
      },
    ],
    [
      0,
      {
        [_jN]: _eTa,
      },
    ],
    [
      0,
      {
        [_jN]: _h,
      },
    ],
    [
      0,
      {
        [_jN]: _vIe,
      },
    ],
  ]
);
export var Scan = struct(
  n0,
  _Sca,
  0,
  [_DI, _ADI, _SI, _SSc, _FR, _SST, _SET, _TDr, _RD, _SRD, _AIc, _TB, _FCile, _AVt, _ST],
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
        [_jN]: _aDI,
      },
    ],
    [
      0,
      {
        [_jN]: _sI,
      },
    ],
    [
      0,
      {
        [_jN]: _sS,
      },
    ],
    [
      0,
      {
        [_jN]: _fR,
      },
    ],
    [
      4,
      {
        [_jN]: _sST,
      },
    ],
    [
      4,
      {
        [_jN]: _sET,
      },
    ],
    [
      () => TriggerDetails,
      {
        [_jN]: _tDr,
      },
    ],
    [
      () => ResourceDetails,
      {
        [_jN]: _rD,
      },
    ],
    [
      () => ScanResultDetails,
      {
        [_jN]: _sRD,
      },
    ],
    [
      0,
      {
        [_jN]: _aIc,
      },
    ],
    [
      1,
      {
        [_jN]: _tB,
      },
    ],
    [
      1,
      {
        [_jN]: _fCile,
      },
    ],
    [
      () => VolumeDetails,
      {
        [_jN]: _aVt,
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
export var ScanDetections = struct(
  n0,
  _SD,
  0,
  [_SIC, _TDIC, _HSTD, _TDBN],
  [
    [
      () => ScannedItemCount,
      {
        [_jN]: _sIC,
      },
    ],
    [
      () => ThreatsDetectedItemCount,
      {
        [_jN]: _tDIC,
      },
    ],
    [
      () => HighestSeverityThreatDetails,
      {
        [_jN]: _hSTD,
      },
    ],
    [
      () => ThreatDetectedByName,
      {
        [_jN]: _tDBN,
      },
    ],
  ]
);
export var ScanFilePath = struct(
  n0,
  _SFP,
  0,
  [_FP, _VA, _H, _FNil],
  [
    [
      0,
      {
        [_jN]: _fP,
      },
    ],
    [
      0,
      {
        [_jN]: _vA,
      },
    ],
    [
      0,
      {
        [_jN]: _h,
      },
    ],
    [
      0,
      {
        [_jN]: _fNil,
      },
    ],
  ]
);
export var ScannedItemCount = struct(
  n0,
  _SIC,
  0,
  [_TG, _Fil, _Vo],
  [
    [
      1,
      {
        [_jN]: _tG,
      },
    ],
    [
      1,
      {
        [_jN]: _fil,
      },
    ],
    [
      1,
      {
        [_jN]: _vo,
      },
    ],
  ]
);
export var ScanResultDetails = struct(
  n0,
  _SRD,
  0,
  [_SRc],
  [
    [
      0,
      {
        [_jN]: _sRc,
      },
    ],
  ]
);
export var ScanThreatName = struct(
  n0,
  _STN,
  0,
  [_N, _Se, _ICt, _FPi],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _se,
      },
    ],
    [
      1,
      {
        [_jN]: _iCt,
      },
    ],
    [
      () => FilePaths,
      {
        [_jN]: _fPi,
      },
    ],
  ]
);
export var SecurityContext = struct(
  n0,
  _SC,
  0,
  [_Pri, _APE],
  [
    [
      2,
      {
        [_jN]: _pri,
      },
    ],
    [
      2,
      {
        [_jN]: _aPE,
      },
    ],
  ]
);
export var SecurityGroup = struct(
  n0,
  _SGe,
  0,
  [_GI, _GN],
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
        [_jN]: _gN,
      },
    ],
  ]
);
export var Sequence = struct(
  n0,
  _Seq,
  0,
  [_U, _D, _Acto, _Reso, _End, _Si, _SIe, _AST],
  [
    [
      0,
      {
        [_jN]: _u,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      () => Actors,
      {
        [_jN]: _acto,
      },
    ],
    [
      () => Resources,
      {
        [_jN]: _reso,
      },
    ],
    [
      () => NetworkEndpoints,
      {
        [_jN]: _end,
      },
    ],
    [
      () => Signals,
      {
        [_jN]: _si,
      },
    ],
    [
      () => Indicators,
      {
        [_jN]: _sIe,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _aST,
      },
    ],
  ]
);
export var Service = struct(
  n0,
  _Ser,
  0,
  [_Ac, _Ev, _Arc, _Coun, _DI, _EFS, _ELS, _RR, _SN, _UF, _AId, _FNe, _EVSD, _RDu, _Det, _MSD],
  [
    [
      () => Action,
      {
        [_jN]: _ac,
      },
    ],
    [
      () => Evidence,
      {
        [_jN]: _ev,
      },
    ],
    [
      2,
      {
        [_jN]: _arc,
      },
    ],
    [
      1,
      {
        [_jN]: _cou,
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
        [_jN]: _eFS,
      },
    ],
    [
      0,
      {
        [_jN]: _eLS,
      },
    ],
    [
      0,
      {
        [_jN]: _rR,
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
        [_jN]: _uF,
      },
    ],
    [
      () => ServiceAdditionalInfo,
      {
        [_jN]: _aId,
      },
    ],
    [
      0,
      {
        [_jN]: _fNe,
      },
    ],
    [
      () => EbsVolumeScanDetails,
      {
        [_jN]: _eVSD,
      },
    ],
    [
      () => RuntimeDetails,
      {
        [_jN]: _rDu,
      },
    ],
    [
      () => Detection,
      {
        [_jN]: _det,
      },
    ],
    [
      () => MalwareScanDetails,
      {
        [_jN]: _mSD,
      },
    ],
  ]
);
export var ServiceAdditionalInfo = struct(
  n0,
  _SAI,
  0,
  [_Val, _T],
  [
    [
      0,
      {
        [_jN]: _val,
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
export var Session = struct(
  n0,
  _S,
  0,
  [_U, _MSf, _CTr, _Issu],
  [
    [
      0,
      {
        [_jN]: _u,
      },
    ],
    [
      0,
      {
        [_jN]: _mSf,
      },
    ],
    [
      4,
      {
        [_jN]: _cTr,
      },
    ],
    [
      0,
      {
        [_jN]: _issu,
      },
    ],
  ]
);
export var SeverityStatistics = struct(
  n0,
  _SSe,
  0,
  [_LGA, _Se, _TF],
  [
    [
      4,
      {
        [_jN]: _lGA,
      },
    ],
    [
      1,
      {
        [_jN]: _se,
      },
    ],
    [
      1,
      {
        [_jN]: _tF,
      },
    ],
  ]
);
export var Signal = struct(
  n0,
  _Sig,
  0,
  [_U, _T, _D, _N, _CAr, _UAp, _FSA, _LSA, _Se, _Coun, _RUe, _AIct, _EIn, _SIi],
  [
    [
      0,
      {
        [_jN]: _u,
      },
    ],
    [
      0,
      {
        [_jN]: _ty,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      4,
      {
        [_jN]: _cAr,
      },
    ],
    [
      4,
      {
        [_jN]: _uAp,
      },
    ],
    [
      4,
      {
        [_jN]: _fSA,
      },
    ],
    [
      4,
      {
        [_jN]: _lSA,
      },
    ],
    [
      1,
      {
        [_jN]: _se,
      },
    ],
    [
      1,
      {
        [_jN]: _cou,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _rUe,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _aIct,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _eIn,
      },
    ],
    [
      () => Indicators,
      {
        [_jN]: _sIi,
      },
    ],
  ]
);
export var SortCriteria = struct(
  n0,
  _SCo,
  0,
  [_AN, _OB],
  [
    [
      0,
      {
        [_jN]: _aN,
      },
    ],
    [
      0,
      {
        [_jN]: _oB,
      },
    ],
  ]
);
export var Tag = struct(
  n0,
  _Tag_,
  0,
  [_Ke, _Val],
  [
    [
      0,
      {
        [_jN]: _ke,
      },
    ],
    [
      0,
      {
        [_jN]: _val,
      },
    ],
  ]
);
export var Threat = struct(
  n0,
  _Thr,
  0,
  [_N, _Sou, _IPte],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _sou,
      },
    ],
    [
      () => ItemPaths,
      {
        [_jN]: _iPt,
      },
    ],
  ]
);
export var ThreatDetectedByName = struct(
  n0,
  _TDBN,
  0,
  [_ICt, _UTNC, _Sho, _TNh],
  [
    [
      1,
      {
        [_jN]: _iCt,
      },
    ],
    [
      1,
      {
        [_jN]: _uTNC,
      },
    ],
    [
      2,
      {
        [_jN]: _sho,
      },
    ],
    [
      () => ScanThreatNames,
      {
        [_jN]: _tNh,
      },
    ],
  ]
);
export var ThreatIntelligenceDetail = struct(
  n0,
  _TIDh,
  0,
  [_TLN, _TNh, _TFS],
  [
    [
      0,
      {
        [_jN]: _tLN,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _tNh,
      },
    ],
    [
      0,
      {
        [_jN]: _tFS,
      },
    ],
  ]
);
export var ThreatsDetectedItemCount = struct(
  n0,
  _TDIC,
  0,
  [_Fil],
  [
    [
      1,
      {
        [_jN]: _fil,
      },
    ],
  ]
);
export var TriggerDetails = struct(
  n0,
  _TDr,
  0,
  [_GDFI, _D],
  [
    [
      0,
      {
        [_jN]: _gDFI,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
  ]
);
export var UpdateFilterRequest = struct(
  n0,
  _UFRp,
  0,
  [_DI, _FN, _D, _Ac, _R, _FCin],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      0,
      {
        [_jN]: _fN,
        [_hL]: 1,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _ac,
      },
    ],
    [
      1,
      {
        [_jN]: _r,
      },
    ],
    [
      () => FindingCriteria,
      {
        [_jN]: _fCin,
      },
    ],
  ]
);
export var UpdateFilterResponse = struct(
  n0,
  _UFRpd,
  0,
  [_N],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
  ]
);
export var User = struct(
  n0,
  _Us,
  0,
  [_N, _U, _T, _CUr, _A],
  [
    [
      0,
      {
        [_jN]: _n,
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
        [_jN]: _ty,
      },
    ],
    [
      0,
      {
        [_jN]: _cUr,
      },
    ],
    [
      () => Account,
      {
        [_jN]: _a,
      },
    ],
  ]
);
export var Volume = struct(
  n0,
  _Vol,
  0,
  [_N, _HP],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => HostPath,
      {
        [_jN]: _hP,
      },
    ],
  ]
);
export var VolumeDetail = struct(
  n0,
  _VD,
  0,
  [_VA, _VT, _DN, _VSIGB, _ET, _SAn, _KKA],
  [
    [
      0,
      {
        [_jN]: _vA,
      },
    ],
    [
      0,
      {
        [_jN]: _vT,
      },
    ],
    [
      0,
      {
        [_jN]: _dN,
      },
    ],
    [
      1,
      {
        [_jN]: _vSIGB,
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
        [_jN]: _sAn,
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
export var VolumeMount = struct(
  n0,
  _VMo,
  0,
  [_N, _MPou],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _mPou,
      },
    ],
  ]
);
export var VpcConfig = struct(
  n0,
  _VC,
  0,
  [_SIub, _VI, _SG],
  [
    [
      64 | 0,
      {
        [_jN]: _sIub,
      },
    ],
    [
      0,
      {
        [_jN]: _vI,
      },
    ],
    [
      () => SecurityGroups,
      {
        [_jN]: _sG,
      },
    ],
  ]
);
export var AccountFreeTrialInfos = list(n0, _AFTIc, 0, [() => AccountFreeTrialInfo, 0]);
export var ActorIds = 64 | 0;

export var Actors = list(n0, _Acto, 0, [() => Actor, 0]);
export var AdditionalSequenceTypes = 64 | 0;

export var AnomalyProfileFeatureObjects = list(n0, _APFO, 0, [() => AnomalyObject, 0]);
export var Containers = list(n0, _Cont, 0, [() => Container, 0]);
export var ContainerUids = 64 | 0;

export var Ec2InstanceUids = 64 | 0;

export var Ec2NetworkInterfaceUids = 64 | 0;

export var EndpointIds = 64 | 0;

export var Eq = 64 | 0;

export var FilePaths = list(n0, _FPi, 0, [() => ScanFilePath, 0]);
export var FilterCriterionList = list(n0, _FCL, 0, [() => FilterCriterion, 0]);
export var Findings = list(n0, _Fin, 0, [() => Finding, 0]);
export var FindingStatisticTypes = 64 | 0;

export var FlagsList = 64 | 0;

export var FreeTrialFeatureConfigurationsResults = list(n0, _FTFCRr, 0, [() => FreeTrialFeatureConfigurationResult, 0]);
export var GroupedByAccount = list(n0, _GBA, 0, [() => AccountStatistics, 0]);
export var GroupedByDate = list(n0, _GBD, 0, [() => DateStatistics, 0]);
export var GroupedByFindingType = list(n0, _GBFT, 0, [() => FindingTypeStatistics, 0]);
export var GroupedByResource = list(n0, _GBR, 0, [() => ResourceStatistics, 0]);
export var GroupedBySeverity = list(n0, _GBS, 0, [() => SeverityStatistics, 0]);
export var Groups = 64 | 0;

export var Indicators = list(n0, _Ind, 0, [() => Indicator, 0]);
export var IndicatorValues = 64 | 0;

export var Ipv6Addresses = 64 | 0;

export var ItemPaths = list(n0, _IPte, 0, [() => ItemPath, 0]);
export var Lineage = list(n0, _Li, 0, [() => LineageObject, 0]);
export var LoginAttributes = list(n0, _LAo, 0, [() => LoginAttribute, 0]);
export var MemoryRegionsList = 64 | 0;

export var Neq = 64 | 0;

export var NetworkEndpoints = list(n0, _NEet, 0, [() => NetworkEndpoint, 0]);
export var NetworkInterfaces = list(n0, _NI, 0, [() => NetworkInterface, 0]);
export var ObservationTexts = 64 | 0;

export var OrganizationFeatureStatisticsAdditionalConfigurations = list(n0, _OFSACr, 0, [
  () => OrganizationFeatureStatisticsAdditionalConfiguration,
  0,
]);
export var OrganizationFeatureStatisticsResults = list(n0, _OFSR, 0, [() => OrganizationFeatureStatistics, 0]);
export var PortProbeDetails = list(n0, _PPD, 0, [() => PortProbeDetail, 0]);
export var PrivateIpAddresses = list(n0, _PIA, 0, [() => PrivateIpAddressDetails, 0]);
export var ProductCodes = list(n0, _PC, 0, [() => ProductCode, 0]);
export var Resources = list(n0, _Reso, 0, [() => ResourceV2, 0]);
export var ResourceUids = 64 | 0;

export var S3BucketDetails = list(n0, _SBD, 0, [() => S3BucketDetail, 0]);
export var S3ObjectDetails = list(n0, _SOD, 0, [() => S3ObjectDetail, 0]);
export var S3ObjectUids = 64 | 0;

export var Scans = list(n0, _Sc, 0, [() => Scan, 0]);
export var ScanThreatNames = list(n0, _STNc, 0, [() => ScanThreatName, 0]);
export var SecurityGroups = list(n0, _SG, 0, [() => SecurityGroup, 0]);
export var SessionNameList = 64 | 0;

export var Signals = list(n0, _Si, 0, [() => Signal, 0]);
export var SourceIps = 64 | 0;

export var Sources = 64 | 0;

export var SubnetIds = 64 | 0;

export var Tags = list(n0, _Ta, 0, [() => Tag, 0]);
export var ThreatIntelligenceDetails = list(n0, _TID, 0, [() => ThreatIntelligenceDetail, 0]);
export var ThreatNames = 64 | 0;

export var Threats = list(n0, _Th, 0, [() => Threat, 0]);
export var VolumeDetails = list(n0, _VDo, 0, [() => VolumeDetail, 0]);
export var VolumeMounts = list(n0, _VM, 0, [() => VolumeMount, 0]);
export var Volumes = list(n0, _Vo, 0, [() => Volume, 0]);
export var AffectedResources = 128 | 0;

export var AnomalyProfileFeatures = map(n0, _APF, 0, [0, 0], [() => AnomalyProfileFeatureObjects, 0]);
export var AnomalyProfiles = map(n0, _APn, 0, [0, 0], [() => AnomalyProfileFeatures, 0]);
export var AnomalyUnusualBehaviorFeature = map(n0, _AUBF, 0, [0, 0], [() => AnomalyObject, 0]);
export var Behavior = map(n0, _B, 0, [0, 0], [() => AnomalyUnusualBehaviorFeature, 0]);
export var CountBySeverity = 128 | 1;

export var Criterion = map(n0, _Cr, 0, [0, 0], [() => Condition, 0]);
export var CreateFilter = op(
  n0,
  _CF,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/filter", 200],
  },
  () => CreateFilterRequest,
  () => CreateFilterResponse
);
export var DescribeMalwareScans = op(
  n0,
  _DMS,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/malware-scans", 200],
  },
  () => DescribeMalwareScansRequest,
  () => DescribeMalwareScansResponse
);
export var GetFilter = op(
  n0,
  _GF,
  {
    [_ht]: ["GET", "/detector/{DetectorId}/filter/{FilterName}", 200],
  },
  () => GetFilterRequest,
  () => GetFilterResponse
);
export var GetFindings = op(
  n0,
  _GFe,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/findings/get", 200],
  },
  () => GetFindingsRequest,
  () => GetFindingsResponse
);
export var GetFindingsStatistics = op(
  n0,
  _GFS,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/findings/statistics", 200],
  },
  () => GetFindingsStatisticsRequest,
  () => GetFindingsStatisticsResponse
);
export var GetInvitationsCount = op(
  n0,
  _GIC,
  {
    [_ht]: ["GET", "/invitation/count", 200],
  },
  () => GetInvitationsCountRequest,
  () => GetInvitationsCountResponse
);
export var GetOrganizationStatistics = op(
  n0,
  _GOS,
  {
    [_ht]: ["GET", "/organization/statistics", 200],
  },
  () => Unit,
  () => GetOrganizationStatisticsResponse
);
export var GetRemainingFreeTrialDays = op(
  n0,
  _GRFTD,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/freeTrial/daysRemaining", 200],
  },
  () => GetRemainingFreeTrialDaysRequest,
  () => GetRemainingFreeTrialDaysResponse
);
export var ListFindings = op(
  n0,
  _LFi,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/findings", 200],
  },
  () => ListFindingsRequest,
  () => ListFindingsResponse
);
export var UpdateFilter = op(
  n0,
  _UFp,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/filter/{FilterName}", 200],
  },
  () => UpdateFilterRequest,
  () => UpdateFilterResponse
);
