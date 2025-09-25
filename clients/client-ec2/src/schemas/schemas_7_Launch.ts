// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _ACIA,
  _aCIA,
  _Af,
  _af,
  _AId,
  _aId,
  _aIt,
  _AItt,
  _ALI,
  _aLI,
  _aPIA,
  _APIAss,
  _Ar,
  _ar,
  _Arc,
  _arc,
  _aRut,
  _ARuto,
  _ASl,
  _ASS,
  _Ass,
  _aSS,
  _ass,
  _at,
  _Att,
  _aTt,
  _ATtt,
  _AZ,
  _aZ,
  _AZI,
  _aZI,
  _BDM,
  _bDM,
  _BDMl,
  _bDMl,
  _BDMlo,
  _bDMS,
  _BM,
  _bM,
  _BW,
  _bW,
  _CBI,
  _cBI,
  _CBr,
  _cBr,
  _cCo,
  _CCor,
  _CCp,
  _cCp,
  _CFE,
  _CFES,
  _CFI,
  _CFIS,
  _CFR,
  _CFr,
  _CFRr,
  _CI,
  _cI,
  _CIBM,
  _cIBM,
  _CLT,
  _CLTR,
  _CLTRr,
  _CLTV,
  _CLTVR,
  _CLTVRr,
  _CO,
  _Co,
  _cO,
  _co,
  _COI,
  _cOI,
  _Con,
  _Conf,
  _conf,
  _COR,
  _Cou,
  _cou,
  _CRapa,
  _CRI,
  _cRI,
  _CRO,
  _CROR,
  _CRP,
  _cRP,
  _CRRGA,
  _cRRGA,
  _CRSa,
  _cRSa,
  _CRSR,
  _CRT,
  _cRT,
  _CRTR,
  _CSr,
  _cSr,
  _CSRred,
  _CT,
  _cT,
  _CTC,
  _cTC,
  _CTo,
  _cTon,
  _CTr,
  _cTr,
  _CTS,
  _cTS,
  _CTSRo,
  _Da,
  _da,
  _DASi,
  _dASi,
  _DAT,
  _dAT,
  _De,
  _de,
  _DI,
  _dI,
  _DIesc,
  _DIis,
  _dIis,
  _DIiskm,
  _DIL,
  _DIRescr,
  _DIRescri,
  _DLTVe,
  _DLTVRes,
  _DLTVResc,
  _DN,
  _dN,
  _dNn,
  _DOT,
  _dOT,
  _DPGe,
  _DPGRe,
  _DPGRes,
  _DR,
  _dR,
  _DTCT,
  _DVe,
  _dVe,
  _Eb,
  _eb,
  _EC,
  _eC,
  _ECTP,
  _EGA,
  _EGAI,
  _eGAI,
  _EGAL,
  _EGAl,
  _EGAS,
  _eGAS,
  _eGASl,
  _EGAT,
  _eGAT,
  _eGI,
  _EGIl,
  _EGSL,
  _EGSla,
  _EGSlas,
  _EGSR,
  _EGSRL,
  _eGSS,
  _EIA,
  _EIAA,
  _eIAA,
  _EIAAI,
  _eIAAI,
  _EIAAL,
  _EIAAl,
  _EIAAla,
  _EIAAS,
  _eIAAS,
  _eIAASl,
  _EIAAT,
  _eIAAT,
  _EIAl,
  _eIAS,
  _EM,
  _eM,
  _En,
  _en,
  _Enc,
  _enc,
  _EO,
  _eO,
  _EOn,
  _eOn,
  _EOR,
  _EPI,
  _EQC,
  _eQC,
  _eQN,
  _ERNDAAAAR,
  _eRNDAAAAR,
  _ERNDAR,
  _eRNDAR,
  _Err,
  _ESE,
  _eSE,
  _ESna,
  _eSna,
  _ESr,
  _eSr,
  _ESS,
  _eSS,
  _ESUE,
  _eSUE,
  _ESUS,
  _eSUS,
  _FBDMR,
  _FBDMRL,
  _FEBDR,
  _Fi,
  _FIl,
  _Fil,
  _fIl,
  _fIS,
  _FLTCLR,
  _FLTCR,
  _FLTOLR,
  _FLTOR,
  _FLTSR,
  _FSCRR,
  _FSMSR,
  _G,
  _GIr,
  _gIr,
  _GIro,
  _GLTD,
  _GLTDR,
  _GLTDRe,
  _GN,
  _gN,
  _GNr,
  _gS,
  _h,
  _HE,
  _hE,
  _hI,
  _HIo,
  _HO,
  _hO,
  _HOR,
  _HPI,
  _hPI,
  _HPRHL,
  _hPRHL,
  _HRGA,
  _hRGA,
  _HT,
  _hT,
  _HTo,
  _hTo,
  _Hy,
  _IA,
  _IAC,
  _iAC,
  _IAESS,
  _IAESUS,
  _iAp,
  _IApv,
  _iApv,
  _iASp,
  _II,
  _iI,
  _IIA,
  _IIALR,
  _IIAR,
  _IIB,
  _iIB,
  _IILS,
  _IIm,
  _iIma,
  _IImp,
  _IIn,
  _iIn,
  _IIP,
  _iIP,
  _IIPL,
  _IIPLn,
  _IIPn,
  _IIPns,
  _IIRmp,
  _IIRmpo,
  _IISB,
  _iISB,
  _ILn,
  _iLn,
  _ILns,
  _Ima,
  _IMO,
  _iMOn,
  _IMOns,
  _IMOR,
  _IMORn,
  _IMORns,
  _IMT,
  _iMT,
  _In,
  _INI,
  _INIA,
  _INIAn,
  _INIL,
  _INIS,
  _INPO,
  _INPOR,
  _Ins,
  _Io,
  _io,
  _IOI,
  _iOIp,
  _IPC,
  _IPCp,
  _iPCp,
  _iPCpv,
  _IPIA,
  _IPIAL,
  _IPLR,
  _IPLRp,
  _IPp,
  _IPpv,
  _iPpv,
  _IPpvr,
  _iPpvr,
  _IPpvre,
  _iPSpv,
  _iPSpvr,
  _IPSRpv,
  _IPSRpvre,
  _IPTUC,
  _iR,
  _IRn,
  _iSn,
  _iSnst,
  _IT,
  _iT,
  _it,
  _iTd,
  _ITn,
  _iTnt,
  _KI,
  _kI,
  _KKI,
  _kKI,
  _KN,
  _kN,
  _L,
  _l,
  _LCA,
  _lCA,
  _LCi,
  _LCR,
  _Li,
  _LL,
  _LS,
  _LSa,
  _lSa,
  _LSi,
  _lSi,
  _LSLR,
  _LT,
  _lT,
  _LTAO,
  _lTAO,
  _LTau,
  _lTau,
  _LTBDM,
  _LTBDML,
  _LTBDMR,
  _LTBDMRL,
  _LTC,
  _LTCa,
  _LTCO,
  _LTCOR,
  _LTCRSR,
  _LTCRSRa,
  _LTD,
  _lTD,
  _LTEBD,
  _LTEBDR,
  _LTEIA,
  _LTEIAL,
  _LTEIAR,
  _LTEIARL,
  _LTEO,
  _LTEOR,
  _LTESS,
  _LTESUS,
  _LTHO,
  _LTHOR,
  _LTI,
  _lTI,
  _LTIIPS,
  _LTIIPSR,
  _LTIMO,
  _LTIMOa,
  _LTIMOau,
  _LTIMOR,
  _LTIMORa,
  _LTIMORau,
  _LTINIS,
  _LTINISL,
  _LTINISR,
  _LTINISRL,
  _LTLC,
  _LTLCR,
  _LTLL,
  _LTLSLR,
  _LTM,
  _LTMR,
  _LTN,
  _lTN,
  _LTNPO,
  _LTNPOR,
  _LTP,
  _LTPDNO,
  _LTPDNOR,
  _LTPR,
  _LTS,
  _LTSMO,
  _LTSMOR,
  _LTTS,
  _LTTSL,
  _LTTSR,
  _LTTSRL,
  _LTV,
  _lTV,
  _LTVa,
  _LTVS,
  _lTVS,
  _MAa,
  _mAa,
  _MCa,
  _MCin,
  _Me,
  _me,
  _MF,
  _MFR,
  _MFRo,
  _MIP,
  _MIPR,
  _MIPRo,
  _MO,
  _mO,
  _mo,
  _MOa,
  _mOa,
  _Mon,
  _mP,
  _MPax,
  _MR,
  _mR,
  _MSa,
  _MT,
  _mT,
  _MTC,
  _MTP,
  _MV,
  _MVa,
  _N,
  _n,
  _NCI,
  _nCI,
  _ND,
  _nD,
  _NIe,
  _nIe,
  _NIet,
  _NII,
  _nII,
  _nIS,
  _NPO,
  _nPO,
  _NTe,
  _nTe,
  _OA,
  _oA,
  _ODO,
  _ODOR,
  _ODTC,
  _OI,
  _oI,
  _Op,
  _ope,
  _Ov,
  _pC,
  _PCro,
  _PDl,
  _pDl,
  _PDN,
  _PDNO,
  _pDNO,
  _PDNOR,
  _PDNORr,
  _pDNr,
  _pDNu,
  _PDNub,
  _PGISL,
  _PGL,
  _PGl,
  _pGS,
  _PI,
  _pI,
  _PIAr,
  _pIAr,
  _PIAri,
  _pIAS,
  _PIAu,
  _PIr,
  _pIri,
  _Pl,
  _pl,
  _Pla,
  _pla,
  _PN,
  _pN,
  _Prim,
  _prim,
  _Prio,
  _R,
  _r,
  _RAe,
  _RDI,
  _rDI,
  _RDN,
  _rDN,
  _RDT,
  _rDT,
  _rea,
  _Rese,
  _Reser,
  _RIa,
  _rIa,
  _RIeq,
  _rIeq,
  _rIes,
  _RIeser,
  _RIRu,
  _RIu,
  _RIUD,
  _RLe,
  _RLTD,
  _RLTDe,
  _RMe,
  _rMe,
  _RSe,
  _rSes,
  _RTe,
  _rTe,
  _RUI,
  _SAZ,
  _SDC,
  _sDC,
  _SDp,
  _sDp,
  _SG,
  _SGe,
  _SGI,
  _SGIe,
  _sGIS,
  _sGS,
  _SGSL,
  _SIn,
  _sIn,
  _SIRI,
  _sIRI,
  _SIT,
  _sIT,
  _SITi,
  _SIu,
  _sIu,
  _SMO,
  _SNS,
  _sNSr,
  _SO,
  _sO,
  _SOR,
  _SPIAC,
  _sPIAC,
  _SRt,
  _sRt,
  _St,
  _st,
  _Sta,
  _sta,
  _STC,
  _STR,
  _SV,
  _T,
  _t,
  _Ta,
  _TCS,
  _TCSR,
  _TCUT,
  _TDe,
  _Te,
  _TET,
  _tET,
  _Th,
  _th,
  _TIWE,
  _TPC,
  _tPC,
  _TS,
  _tS,
  _TSa,
  _TSp,
  _tSp,
  _tSS,
  _TTC,
  _Ty,
  _ty,
  _UDs,
  _uDs,
  _UO,
  _uO,
  _UOUT,
  _uOUT,
  _US,
  _UST,
  _uST,
  _UTd,
  _uTd,
  _VD,
  _vD,
  _Ve,
  _VEa,
  _Ver,
  _VF,
  _VI,
  _vI,
  _VIR,
  _vIR,
  _VN,
  _vN,
  _VNe,
  _vNe,
  _Vol,
  _VSo,
  _vSo,
  _VT,
  _vT,
  _vTi,
  _VTir,
  _VU,
  _vU,
  _VW,
  _W,
  _w,
  _WCe,
  _xN,
  FilterList,
  n0,
  OperatorResponse,
  TagList,
  TagSpecificationList,
  ValueStringList,
} from "./schemas_0";
import {
  EnclaveOptions,
  GroupIdentifierList,
  InstanceBlockDeviceMappingList,
  InstanceNetworkInterfaceSpecificationList,
  RunInstancesMonitoringEnabled,
} from "./schemas_12_Describe";
import { InstanceRequirementsRequest } from "./schemas_16_Create";
import { ConversionTask, DiskImageDetail, VolumeDetail } from "./schemas_59_Describe";
import { InstanceState } from "./schemas_61_Instances";
import { VersionStringList } from "./schemas_72_LaunchTemplateVersions";
import { InstanceIdsSet, LaunchTemplateAndOverridesResponse } from "./schemas_92_Capacity";
import {
  EnaSrdSpecificationRequest,
  Ipv4PrefixList,
  Ipv6PrefixList,
  PrivateIpAddressSpecificationList,
} from "./schemas_94_Spot";
import { Monitoring } from "./schemas_98_Instances";
import { InstanceRequirements } from "./schemas_119_Fleet";
import { ProductCodeList } from "./schemas_120_Describe";
import { BlockDeviceMappingRequestList } from "./schemas_147_Describe";
import { GroupIdStringList } from "./schemas_162_LaunchTemplate";
import { CapacityReservationSpecification, CapacityReservationTarget } from "./schemas_176_LaunchTemplate";
import { IamInstanceProfileSpecification } from "./schemas_177_Instance";
import { IamInstanceProfile } from "./schemas_196_Instance";
import { LaunchTemplate } from "./schemas_213_Launch";
import { ConnectionTrackingSpecificationRequest, SecurityGroupIdStringList } from "./schemas_217_Spot";
import { InstanceIpv6AddressList } from "./schemas_218_Describe";
import { InstanceMetadataOptionsResponse } from "./schemas_262_Instance";
import { SensitiveUserData } from "./schemas_268_Spot";
import { OperatorRequest } from "./schemas_273_Create";
import { PlacementGroup } from "./schemas_280_Placement";
import { StateReason } from "./schemas_287_Describe";
import { InstanceIdStringList } from "./schemas_330_Instances";

/* eslint no-var: 0 */

export var RunInstancesUserData = sim(n0, _RIUD, 0, 8);
export var CapacityReservationOptionsRequest = struct(n0, _CROR, 0, [_US], [0]);
export var CapacityReservationSpecificationResponse = struct(
  n0,
  _CRSR,
  0,
  [_CRP, _CRT],
  [
    [
      0,
      {
        [_eQN]: `CapacityReservationPreference`,
        [_xN]: _cRP,
      },
    ],
    [
      () => CapacityReservationTargetResponse,
      {
        [_eQN]: `CapacityReservationTarget`,
        [_xN]: _cRT,
      },
    ],
  ]
);
export var CapacityReservationTargetResponse = struct(
  n0,
  _CRTR,
  0,
  [_CRI, _CRRGA],
  [
    [
      0,
      {
        [_eQN]: `CapacityReservationId`,
        [_xN]: _cRI,
      },
    ],
    [
      0,
      {
        [_eQN]: `CapacityReservationResourceGroupArn`,
        [_xN]: _cRRGA,
      },
    ],
  ]
);
export var ConnectionTrackingSpecification = struct(
  n0,
  _CTS,
  0,
  [_TET, _UTd, _UST],
  [
    [
      1,
      {
        [_eQN]: `TcpEstablishedTimeout`,
        [_xN]: _tET,
      },
    ],
    [
      1,
      {
        [_eQN]: `UdpTimeout`,
        [_xN]: _uTd,
      },
    ],
    [
      1,
      {
        [_eQN]: `UdpStreamTimeout`,
        [_xN]: _uST,
      },
    ],
  ]
);
export var ConnectionTrackingSpecificationResponse = struct(
  n0,
  _CTSRo,
  0,
  [_TET, _UST, _UTd],
  [
    [
      1,
      {
        [_eQN]: `TcpEstablishedTimeout`,
        [_xN]: _tET,
      },
    ],
    [
      1,
      {
        [_eQN]: `UdpStreamTimeout`,
        [_xN]: _uST,
      },
    ],
    [
      1,
      {
        [_eQN]: `UdpTimeout`,
        [_xN]: _uTd,
      },
    ],
  ]
);
export var CpuOptions = struct(
  n0,
  _CO,
  0,
  [_CCor, _TPC, _ASS],
  [
    [
      1,
      {
        [_eQN]: `CoreCount`,
        [_xN]: _cCo,
      },
    ],
    [
      1,
      {
        [_eQN]: `ThreadsPerCore`,
        [_xN]: _tPC,
      },
    ],
    [
      0,
      {
        [_eQN]: `AmdSevSnp`,
        [_xN]: _aSS,
      },
    ],
  ]
);
export var CpuOptionsRequest = struct(n0, _COR, 0, [_CCor, _TPC, _ASS], [1, 1, 0]);
export var CreateFleetError = struct(
  n0,
  _CFE,
  0,
  [_LTAO, _L, _EC, _EM],
  [
    [
      () => LaunchTemplateAndOverridesResponse,
      {
        [_eQN]: `LaunchTemplateAndOverrides`,
        [_xN]: _lTAO,
      },
    ],
    [
      0,
      {
        [_eQN]: `Lifecycle`,
        [_xN]: _l,
      },
    ],
    [
      0,
      {
        [_eQN]: `ErrorCode`,
        [_xN]: _eC,
      },
    ],
    [
      0,
      {
        [_eQN]: `ErrorMessage`,
        [_xN]: _eM,
      },
    ],
  ]
);
export var CreateFleetInstance = struct(
  n0,
  _CFI,
  0,
  [_LTAO, _L, _IIn, _IT, _Pl],
  [
    [
      () => LaunchTemplateAndOverridesResponse,
      {
        [_eQN]: `LaunchTemplateAndOverrides`,
        [_xN]: _lTAO,
      },
    ],
    [
      0,
      {
        [_eQN]: `Lifecycle`,
        [_xN]: _l,
      },
    ],
    [
      () => InstanceIdsSet,
      {
        [_eQN]: `InstanceIds`,
        [_xN]: _iIn,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceType`,
        [_xN]: _iT,
      },
    ],
    [
      0,
      {
        [_eQN]: `Platform`,
        [_xN]: _pl,
      },
    ],
  ]
);
export var CreateFleetRequest = struct(
  n0,
  _CFR,
  0,
  [_DR, _CT, _SO, _ODO, _ECTP, _LTC, _TCS, _TIWE, _Ty, _VF, _VU, _RUI, _TS, _Con],
  [
    2,
    [0, 4],
    () => SpotOptionsRequest,
    () => OnDemandOptionsRequest,
    0,
    [() => FleetLaunchTemplateConfigListRequest, 0],
    () => TargetCapacitySpecificationRequest,
    2,
    0,
    4,
    4,
    2,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    0,
  ]
);
export var CreateFleetResult = struct(
  n0,
  _CFRr,
  0,
  [_FIl, _Err, _Ins],
  [
    [
      0,
      {
        [_eQN]: `FleetId`,
        [_xN]: _fIl,
      },
    ],
    [
      () => CreateFleetErrorsSet,
      {
        [_eQN]: `ErrorSet`,
        [_xN]: _eSr,
      },
    ],
    [
      () => CreateFleetInstancesSet,
      {
        [_eQN]: `FleetInstanceSet`,
        [_xN]: _fIS,
      },
    ],
  ]
);
export var CreateLaunchTemplateRequest = struct(
  n0,
  _CLTR,
  0,
  [_DR, _CT, _LTN, _VD, _LTD, _Op, _TS],
  [
    2,
    [0, 4],
    0,
    0,
    [() => RequestLaunchTemplateData, 0],
    () => OperatorRequest,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
  ]
);
export var CreateLaunchTemplateResult = struct(
  n0,
  _CLTRr,
  0,
  [_LT, _W],
  [
    [
      () => LaunchTemplate,
      {
        [_eQN]: `LaunchTemplate`,
        [_xN]: _lT,
      },
    ],
    [
      () => ValidationWarning,
      {
        [_eQN]: `Warning`,
        [_xN]: _w,
      },
    ],
  ]
);
export var CreateLaunchTemplateVersionRequest = struct(
  n0,
  _CLTVR,
  0,
  [_DR, _CT, _LTI, _LTN, _SV, _VD, _LTD, _RAe],
  [2, [0, 4], 0, 0, 0, 0, [() => RequestLaunchTemplateData, 0], 2]
);
export var CreateLaunchTemplateVersionResult = struct(
  n0,
  _CLTVRr,
  0,
  [_LTV, _W],
  [
    [
      () => LaunchTemplateVersion,
      {
        [_eQN]: `LaunchTemplateVersion`,
        [_xN]: _lTV,
      },
    ],
    [
      () => ValidationWarning,
      {
        [_eQN]: `Warning`,
        [_xN]: _w,
      },
    ],
  ]
);
export var CreditSpecification = struct(
  n0,
  _CSr,
  0,
  [_CCp],
  [
    [
      0,
      {
        [_eQN]: `CpuCredits`,
        [_xN]: _cCp,
      },
    ],
  ]
);
export var CreditSpecificationRequest = struct(n0, _CSRred, 0, [_CCp], [0]);
export var DescribeInstancesRequest = struct(
  n0,
  _DIRescr,
  0,
  [_IIn, _DR, _Fi, _NTe, _MR],
  [
    [
      () => InstanceIdStringList,
      {
        [_xN]: _II,
      },
    ],
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      1,
      {
        [_eQN]: `MaxResults`,
        [_xN]: _mR,
      },
    ],
  ]
);
export var DescribeInstancesResult = struct(
  n0,
  _DIRescri,
  0,
  [_NTe, _Rese],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => ReservationList,
      {
        [_eQN]: `ReservationSet`,
        [_xN]: _rSes,
      },
    ],
  ]
);
export var DescribeLaunchTemplateVersionsRequest = struct(
  n0,
  _DLTVRes,
  0,
  [_DR, _LTI, _LTN, _Ve, _MV, _MVa, _NTe, _MR, _Fi, _RAe],
  [
    2,
    0,
    0,
    [
      () => VersionStringList,
      {
        [_xN]: _LTV,
      },
    ],
    0,
    0,
    0,
    1,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    2,
  ]
);
export var DescribeLaunchTemplateVersionsResult = struct(
  n0,
  _DLTVResc,
  0,
  [_LTVa, _NTe],
  [
    [
      () => LaunchTemplateVersionSet,
      {
        [_eQN]: `LaunchTemplateVersionSet`,
        [_xN]: _lTVS,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
  ]
);
export var DescribePlacementGroupsRequest = struct(
  n0,
  _DPGRe,
  0,
  [_GIro, _DR, _GNr, _Fi],
  [
    [
      () => PlacementGroupIdStringList,
      {
        [_xN]: _GIr,
      },
    ],
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      64 | 0,
      {
        [_eQN]: `GroupName`,
        [_xN]: _gN,
      },
    ],
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
  ]
);
export var DescribePlacementGroupsResult = struct(
  n0,
  _DPGRes,
  0,
  [_PGl],
  [
    [
      () => PlacementGroupList,
      {
        [_eQN]: `PlacementGroupSet`,
        [_xN]: _pGS,
      },
    ],
  ]
);
export var DiskImage = struct(
  n0,
  _DIis,
  0,
  [_De, _Ima, _Vol],
  [0, [() => DiskImageDetail, 0], [() => VolumeDetail, 0]]
);
export var ElasticGpuAssociation = struct(
  n0,
  _EGA,
  0,
  [_EGIl, _EGAI, _EGAS, _EGAT],
  [
    [
      0,
      {
        [_eQN]: `ElasticGpuId`,
        [_xN]: _eGI,
      },
    ],
    [
      0,
      {
        [_eQN]: `ElasticGpuAssociationId`,
        [_xN]: _eGAI,
      },
    ],
    [
      0,
      {
        [_eQN]: `ElasticGpuAssociationState`,
        [_xN]: _eGAS,
      },
    ],
    [
      0,
      {
        [_eQN]: `ElasticGpuAssociationTime`,
        [_xN]: _eGAT,
      },
    ],
  ]
);
export var ElasticGpuSpecification = struct(n0, _EGSla, 0, [_Ty], [0]);
export var ElasticGpuSpecificationResponse = struct(
  n0,
  _EGSR,
  0,
  [_Ty],
  [
    [
      0,
      {
        [_eQN]: `Type`,
        [_xN]: _ty,
      },
    ],
  ]
);
export var ElasticInferenceAccelerator = struct(n0, _EIA, 0, [_Ty, _Cou], [0, 1]);
export var ElasticInferenceAcceleratorAssociation = struct(
  n0,
  _EIAA,
  0,
  [_EIAAl, _EIAAI, _EIAAS, _EIAAT],
  [
    [
      0,
      {
        [_eQN]: `ElasticInferenceAcceleratorArn`,
        [_xN]: _eIAA,
      },
    ],
    [
      0,
      {
        [_eQN]: `ElasticInferenceAcceleratorAssociationId`,
        [_xN]: _eIAAI,
      },
    ],
    [
      0,
      {
        [_eQN]: `ElasticInferenceAcceleratorAssociationState`,
        [_xN]: _eIAAS,
      },
    ],
    [
      4,
      {
        [_eQN]: `ElasticInferenceAcceleratorAssociationTime`,
        [_xN]: _eIAAT,
      },
    ],
  ]
);
export var EnclaveOptionsRequest = struct(n0, _EOR, 0, [_En], [2]);
export var FleetBlockDeviceMappingRequest = struct(
  n0,
  _FBDMR,
  0,
  [_DN, _VN, _Eb, _ND],
  [0, 0, () => FleetEbsBlockDeviceRequest, 0]
);
export var FleetEbsBlockDeviceRequest = struct(
  n0,
  _FEBDR,
  0,
  [_Enc, _DOT, _Io, _Th, _KKI, _SIn, _VSo, _VT],
  [2, 2, 1, 1, 0, 0, 1, 0]
);
export var FleetLaunchTemplateConfigRequest = struct(
  n0,
  _FLTCR,
  0,
  [_LTS, _Ov],
  [() => FleetLaunchTemplateSpecificationRequest, [() => FleetLaunchTemplateOverridesListRequest, 0]]
);
export var FleetLaunchTemplateOverridesRequest = struct(
  n0,
  _FLTOR,
  0,
  [_IT, _MPax, _SIu, _AZ, _WCe, _Prio, _Pla, _BDMl, _IRn, _IIm],
  [
    0,
    0,
    0,
    0,
    1,
    1,
    [() => Placement, 0],
    [
      () => FleetBlockDeviceMappingRequestList,
      {
        [_xN]: _BDM,
      },
    ],
    [() => InstanceRequirementsRequest, 0],
    0,
  ]
);
export var FleetLaunchTemplateSpecificationRequest = struct(n0, _FLTSR, 0, [_LTI, _LTN, _Ver], [0, 0, 0]);
export var FleetSpotCapacityRebalanceRequest = struct(n0, _FSCRR, 0, [_RSe, _TDe], [0, 1]);
export var FleetSpotMaintenanceStrategiesRequest = struct(
  n0,
  _FSMSR,
  0,
  [_CRapa],
  [() => FleetSpotCapacityRebalanceRequest]
);
export var GetLaunchTemplateDataRequest = struct(n0, _GLTDR, 0, [_DR, _II], [2, 0]);
export var GetLaunchTemplateDataResult = struct(
  n0,
  _GLTDRe,
  0,
  [_LTD],
  [
    [
      () => ResponseLaunchTemplateData,
      {
        [_eQN]: `LaunchTemplateData`,
        [_xN]: _lTD,
      },
    ],
  ]
);
export var HibernationOptions = struct(
  n0,
  _HO,
  0,
  [_Conf],
  [
    [
      2,
      {
        [_eQN]: `Configured`,
        [_xN]: _conf,
      },
    ],
  ]
);
export var HibernationOptionsRequest = struct(n0, _HOR, 0, [_Conf], [2]);
export var ImportInstanceLaunchSpecification = struct(
  n0,
  _IILS,
  0,
  [_Arc, _GNr, _GIro, _AId, _UDs, _IT, _Pla, _Mon, _SIu, _IISB, _PIAr],
  [
    [
      0,
      {
        [_eQN]: `Architecture`,
        [_xN]: _arc,
      },
    ],
    [
      () => SecurityGroupStringList,
      {
        [_xN]: _GN,
      },
    ],
    [
      () => SecurityGroupIdStringList,
      {
        [_xN]: _GIr,
      },
    ],
    [
      0,
      {
        [_eQN]: `AdditionalInfo`,
        [_xN]: _aId,
      },
    ],
    [
      () => UserData,
      {
        [_eQN]: `UserData`,
        [_xN]: _uDs,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceType`,
        [_xN]: _iT,
      },
    ],
    [
      () => Placement,
      {
        [_eQN]: `Placement`,
        [_xN]: _pla,
      },
    ],
    [
      2,
      {
        [_eQN]: `Monitoring`,
        [_xN]: _mo,
      },
    ],
    [
      0,
      {
        [_eQN]: `SubnetId`,
        [_xN]: _sIu,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceInitiatedShutdownBehavior`,
        [_xN]: _iISB,
      },
    ],
    [
      0,
      {
        [_eQN]: `PrivateIpAddress`,
        [_xN]: _pIAr,
      },
    ],
  ]
);
export var ImportInstanceRequest = struct(
  n0,
  _IIRmp,
  0,
  [_DR, _De, _LSa, _DIiskm, _Pl],
  [
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      0,
      {
        [_eQN]: `Description`,
        [_xN]: _de,
      },
    ],
    [
      () => ImportInstanceLaunchSpecification,
      {
        [_eQN]: `LaunchSpecification`,
        [_xN]: _lSa,
      },
    ],
    [
      () => DiskImageList,
      {
        [_eQN]: `DiskImage`,
        [_xN]: _dIis,
      },
    ],
    [
      0,
      {
        [_eQN]: `Platform`,
        [_xN]: _pl,
      },
    ],
  ]
);
export var ImportInstanceResult = struct(
  n0,
  _IIRmpo,
  0,
  [_CTo],
  [
    [
      () => ConversionTask,
      {
        [_eQN]: `ConversionTask`,
        [_xN]: _cTon,
      },
    ],
  ]
);
export var Instance = struct(
  n0,
  _In,
  0,
  [
    _Arc,
    _BDMl,
    _CT,
    _EO,
    _ESna,
    _Hy,
    _IIP,
    _ILn,
    _EGAl,
    _EIAAla,
    _NIet,
    _OA,
    _RDN,
    _RDT,
    _SG,
    _SDC,
    _SIRI,
    _SNS,
    _SRt,
    _T,
    _VTir,
    _CO,
    _CBI,
    _CRI,
    _CRSa,
    _HO,
    _Li,
    _MO,
    _EOn,
    _BM,
    _PDl,
    _UO,
    _UOUT,
    _PDNO,
    _IApv,
    _TSp,
    _MOa,
    _CIBM,
    _NPO,
    _Op,
    _II,
    _IIm,
    _St,
    _PDN,
    _PDNub,
    _STR,
    _KN,
    _ALI,
    _PCro,
    _IT,
    _LTau,
    _Pla,
    _KI,
    _RIa,
    _Pl,
    _Mon,
    _SIu,
    _VI,
    _PIAr,
    _PIAu,
  ],
  [
    [
      0,
      {
        [_eQN]: `Architecture`,
        [_xN]: _arc,
      },
    ],
    [
      () => InstanceBlockDeviceMappingList,
      {
        [_eQN]: `BlockDeviceMapping`,
        [_xN]: _bDM,
      },
    ],
    [
      0,
      {
        [_eQN]: `ClientToken`,
        [_xN]: _cT,
      },
    ],
    [
      2,
      {
        [_eQN]: `EbsOptimized`,
        [_xN]: _eO,
      },
    ],
    [
      2,
      {
        [_eQN]: `EnaSupport`,
        [_xN]: _eSna,
      },
    ],
    [
      0,
      {
        [_eQN]: `Hypervisor`,
        [_xN]: _h,
      },
    ],
    [
      () => IamInstanceProfile,
      {
        [_eQN]: `IamInstanceProfile`,
        [_xN]: _iIP,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceLifecycle`,
        [_xN]: _iLn,
      },
    ],
    [
      () => ElasticGpuAssociationList,
      {
        [_eQN]: `ElasticGpuAssociationSet`,
        [_xN]: _eGASl,
      },
    ],
    [
      () => ElasticInferenceAcceleratorAssociationList,
      {
        [_eQN]: `ElasticInferenceAcceleratorAssociationSet`,
        [_xN]: _eIAASl,
      },
    ],
    [
      () => InstanceNetworkInterfaceList,
      {
        [_eQN]: `NetworkInterfaceSet`,
        [_xN]: _nIS,
      },
    ],
    [
      0,
      {
        [_eQN]: `OutpostArn`,
        [_xN]: _oA,
      },
    ],
    [
      0,
      {
        [_eQN]: `RootDeviceName`,
        [_xN]: _rDN,
      },
    ],
    [
      0,
      {
        [_eQN]: `RootDeviceType`,
        [_xN]: _rDT,
      },
    ],
    [
      () => GroupIdentifierList,
      {
        [_eQN]: `GroupSet`,
        [_xN]: _gS,
      },
    ],
    [
      2,
      {
        [_eQN]: `SourceDestCheck`,
        [_xN]: _sDC,
      },
    ],
    [
      0,
      {
        [_eQN]: `SpotInstanceRequestId`,
        [_xN]: _sIRI,
      },
    ],
    [
      0,
      {
        [_eQN]: `SriovNetSupport`,
        [_xN]: _sNSr,
      },
    ],
    [
      () => StateReason,
      {
        [_eQN]: `StateReason`,
        [_xN]: _sRt,
      },
    ],
    [
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
    [
      0,
      {
        [_eQN]: `VirtualizationType`,
        [_xN]: _vTi,
      },
    ],
    [
      () => CpuOptions,
      {
        [_eQN]: `CpuOptions`,
        [_xN]: _cO,
      },
    ],
    [
      0,
      {
        [_eQN]: `CapacityBlockId`,
        [_xN]: _cBI,
      },
    ],
    [
      0,
      {
        [_eQN]: `CapacityReservationId`,
        [_xN]: _cRI,
      },
    ],
    [
      () => CapacityReservationSpecificationResponse,
      {
        [_eQN]: `CapacityReservationSpecification`,
        [_xN]: _cRSa,
      },
    ],
    [
      () => HibernationOptions,
      {
        [_eQN]: `HibernationOptions`,
        [_xN]: _hO,
      },
    ],
    [
      () => LicenseList,
      {
        [_eQN]: `LicenseSet`,
        [_xN]: _lSi,
      },
    ],
    [
      () => InstanceMetadataOptionsResponse,
      {
        [_eQN]: `MetadataOptions`,
        [_xN]: _mO,
      },
    ],
    [
      () => EnclaveOptions,
      {
        [_eQN]: `EnclaveOptions`,
        [_xN]: _eOn,
      },
    ],
    [
      0,
      {
        [_eQN]: `BootMode`,
        [_xN]: _bM,
      },
    ],
    [
      0,
      {
        [_eQN]: `PlatformDetails`,
        [_xN]: _pDl,
      },
    ],
    [
      0,
      {
        [_eQN]: `UsageOperation`,
        [_xN]: _uO,
      },
    ],
    [
      4,
      {
        [_eQN]: `UsageOperationUpdateTime`,
        [_xN]: _uOUT,
      },
    ],
    [
      () => PrivateDnsNameOptionsResponse,
      {
        [_eQN]: `PrivateDnsNameOptions`,
        [_xN]: _pDNO,
      },
    ],
    [
      0,
      {
        [_eQN]: `Ipv6Address`,
        [_xN]: _iApv,
      },
    ],
    [
      0,
      {
        [_eQN]: `TpmSupport`,
        [_xN]: _tSp,
      },
    ],
    [
      () => InstanceMaintenanceOptions,
      {
        [_eQN]: `MaintenanceOptions`,
        [_xN]: _mOa,
      },
    ],
    [
      0,
      {
        [_eQN]: `CurrentInstanceBootMode`,
        [_xN]: _cIBM,
      },
    ],
    [
      () => InstanceNetworkPerformanceOptions,
      {
        [_eQN]: `NetworkPerformanceOptions`,
        [_xN]: _nPO,
      },
    ],
    [
      () => OperatorResponse,
      {
        [_eQN]: `Operator`,
        [_xN]: _ope,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
      },
    ],
    [
      0,
      {
        [_eQN]: `ImageId`,
        [_xN]: _iIma,
      },
    ],
    [
      () => InstanceState,
      {
        [_eQN]: `InstanceState`,
        [_xN]: _iSnst,
      },
    ],
    [
      0,
      {
        [_eQN]: `PrivateDnsName`,
        [_xN]: _pDNr,
      },
    ],
    [
      0,
      {
        [_eQN]: `DnsName`,
        [_xN]: _dNn,
      },
    ],
    [
      0,
      {
        [_eQN]: `Reason`,
        [_xN]: _rea,
      },
    ],
    [
      0,
      {
        [_eQN]: `KeyName`,
        [_xN]: _kN,
      },
    ],
    [
      1,
      {
        [_eQN]: `AmiLaunchIndex`,
        [_xN]: _aLI,
      },
    ],
    [
      () => ProductCodeList,
      {
        [_eQN]: `ProductCodes`,
        [_xN]: _pC,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceType`,
        [_xN]: _iT,
      },
    ],
    [
      4,
      {
        [_eQN]: `LaunchTime`,
        [_xN]: _lTau,
      },
    ],
    [
      () => Placement,
      {
        [_eQN]: `Placement`,
        [_xN]: _pla,
      },
    ],
    [
      0,
      {
        [_eQN]: `KernelId`,
        [_xN]: _kI,
      },
    ],
    [
      0,
      {
        [_eQN]: `RamdiskId`,
        [_xN]: _rIa,
      },
    ],
    [
      0,
      {
        [_eQN]: `Platform`,
        [_xN]: _pl,
      },
    ],
    [
      () => Monitoring,
      {
        [_eQN]: `Monitoring`,
        [_xN]: _mo,
      },
    ],
    [
      0,
      {
        [_eQN]: `SubnetId`,
        [_xN]: _sIu,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpcId`,
        [_xN]: _vI,
      },
    ],
    [
      0,
      {
        [_eQN]: `PrivateIpAddress`,
        [_xN]: _pIAr,
      },
    ],
    [
      0,
      {
        [_eQN]: `IpAddress`,
        [_xN]: _iAp,
      },
    ],
  ]
);
export var InstanceAttachmentEnaSrdSpecification = struct(
  n0,
  _IAESS,
  0,
  [_ESE, _ESUS],
  [
    [
      2,
      {
        [_eQN]: `EnaSrdEnabled`,
        [_xN]: _eSE,
      },
    ],
    [
      () => InstanceAttachmentEnaSrdUdpSpecification,
      {
        [_eQN]: `EnaSrdUdpSpecification`,
        [_xN]: _eSUS,
      },
    ],
  ]
);
export var InstanceAttachmentEnaSrdUdpSpecification = struct(
  n0,
  _IAESUS,
  0,
  [_ESUE],
  [
    [
      2,
      {
        [_eQN]: `EnaSrdUdpEnabled`,
        [_xN]: _eSUE,
      },
    ],
  ]
);
export var InstanceIpv4Prefix = struct(
  n0,
  _IIPn,
  0,
  [_IPpvre],
  [
    [
      0,
      {
        [_eQN]: `Ipv4Prefix`,
        [_xN]: _iPpv,
      },
    ],
  ]
);
export var InstanceIpv6AddressRequest = struct(n0, _IIAR, 0, [_IApv], [0]);
export var InstanceIpv6Prefix = struct(
  n0,
  _IIPns,
  0,
  [_IPpv],
  [
    [
      0,
      {
        [_eQN]: `Ipv6Prefix`,
        [_xN]: _iPpvr,
      },
    ],
  ]
);
export var InstanceMaintenanceOptions = struct(
  n0,
  _IMO,
  0,
  [_ARuto, _RMe],
  [
    [
      0,
      {
        [_eQN]: `AutoRecovery`,
        [_xN]: _aRut,
      },
    ],
    [
      0,
      {
        [_eQN]: `RebootMigration`,
        [_xN]: _rMe,
      },
    ],
  ]
);
export var InstanceMaintenanceOptionsRequest = struct(n0, _IMOR, 0, [_ARuto], [0]);
export var InstanceMarketOptionsRequest = struct(n0, _IMORn, 0, [_MT, _SO], [0, () => SpotMarketOptions]);
export var InstanceMetadataOptionsRequest = struct(n0, _IMORns, 0, [_HT, _HPRHL, _HE, _HPI, _IMT], [0, 1, 0, 0, 0]);
export var InstanceNetworkInterface = struct(
  n0,
  _INI,
  0,
  [
    _Ass,
    _Att,
    _De,
    _G,
    _IA,
    _MAa,
    _NII,
    _OI,
    _PDN,
    _PIAr,
    _PIAri,
    _SDC,
    _Sta,
    _SIu,
    _VI,
    _ITn,
    _IPpvr,
    _IPp,
    _CTC,
    _Op,
  ],
  [
    [
      () => InstanceNetworkInterfaceAssociation,
      {
        [_eQN]: `Association`,
        [_xN]: _ass,
      },
    ],
    [
      () => InstanceNetworkInterfaceAttachment,
      {
        [_eQN]: `Attachment`,
        [_xN]: _at,
      },
    ],
    [
      0,
      {
        [_eQN]: `Description`,
        [_xN]: _de,
      },
    ],
    [
      () => GroupIdentifierList,
      {
        [_eQN]: `GroupSet`,
        [_xN]: _gS,
      },
    ],
    [
      () => InstanceIpv6AddressList,
      {
        [_eQN]: `Ipv6AddressesSet`,
        [_xN]: _iASp,
      },
    ],
    [
      0,
      {
        [_eQN]: `MacAddress`,
        [_xN]: _mAa,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkInterfaceId`,
        [_xN]: _nII,
      },
    ],
    [
      0,
      {
        [_eQN]: `OwnerId`,
        [_xN]: _oI,
      },
    ],
    [
      0,
      {
        [_eQN]: `PrivateDnsName`,
        [_xN]: _pDNr,
      },
    ],
    [
      0,
      {
        [_eQN]: `PrivateIpAddress`,
        [_xN]: _pIAr,
      },
    ],
    [
      () => InstancePrivateIpAddressList,
      {
        [_eQN]: `PrivateIpAddressesSet`,
        [_xN]: _pIAS,
      },
    ],
    [
      2,
      {
        [_eQN]: `SourceDestCheck`,
        [_xN]: _sDC,
      },
    ],
    [
      0,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
      },
    ],
    [
      0,
      {
        [_eQN]: `SubnetId`,
        [_xN]: _sIu,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpcId`,
        [_xN]: _vI,
      },
    ],
    [
      0,
      {
        [_eQN]: `InterfaceType`,
        [_xN]: _iTnt,
      },
    ],
    [
      () => InstanceIpv4PrefixList,
      {
        [_eQN]: `Ipv4PrefixSet`,
        [_xN]: _iPSpv,
      },
    ],
    [
      () => InstanceIpv6PrefixList,
      {
        [_eQN]: `Ipv6PrefixSet`,
        [_xN]: _iPSpvr,
      },
    ],
    [
      () => ConnectionTrackingSpecificationResponse,
      {
        [_eQN]: `ConnectionTrackingConfiguration`,
        [_xN]: _cTC,
      },
    ],
    [
      () => OperatorResponse,
      {
        [_eQN]: `Operator`,
        [_xN]: _ope,
      },
    ],
  ]
);
export var InstanceNetworkInterfaceAssociation = struct(
  n0,
  _INIA,
  0,
  [_CI, _COI, _IOI, _PDNub, _PI],
  [
    [
      0,
      {
        [_eQN]: `CarrierIp`,
        [_xN]: _cI,
      },
    ],
    [
      0,
      {
        [_eQN]: `CustomerOwnedIp`,
        [_xN]: _cOI,
      },
    ],
    [
      0,
      {
        [_eQN]: `IpOwnerId`,
        [_xN]: _iOIp,
      },
    ],
    [
      0,
      {
        [_eQN]: `PublicDnsName`,
        [_xN]: _pDNu,
      },
    ],
    [
      0,
      {
        [_eQN]: `PublicIp`,
        [_xN]: _pI,
      },
    ],
  ]
);
export var InstanceNetworkInterfaceAttachment = struct(
  n0,
  _INIAn,
  0,
  [_ATtt, _AItt, _DOT, _DI, _Sta, _NCI, _ESS, _EQC],
  [
    [
      4,
      {
        [_eQN]: `AttachTime`,
        [_xN]: _aTt,
      },
    ],
    [
      0,
      {
        [_eQN]: `AttachmentId`,
        [_xN]: _aIt,
      },
    ],
    [
      2,
      {
        [_eQN]: `DeleteOnTermination`,
        [_xN]: _dOT,
      },
    ],
    [
      1,
      {
        [_eQN]: `DeviceIndex`,
        [_xN]: _dI,
      },
    ],
    [
      0,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
      },
    ],
    [
      1,
      {
        [_eQN]: `NetworkCardIndex`,
        [_xN]: _nCI,
      },
    ],
    [
      () => InstanceAttachmentEnaSrdSpecification,
      {
        [_eQN]: `EnaSrdSpecification`,
        [_xN]: _eSS,
      },
    ],
    [
      1,
      {
        [_eQN]: `EnaQueueCount`,
        [_xN]: _eQC,
      },
    ],
  ]
);
export var InstanceNetworkPerformanceOptions = struct(
  n0,
  _INPO,
  0,
  [_BW],
  [
    [
      0,
      {
        [_eQN]: `BandwidthWeighting`,
        [_xN]: _bW,
      },
    ],
  ]
);
export var InstanceNetworkPerformanceOptionsRequest = struct(n0, _INPOR, 0, [_BW], [0]);
export var InstancePrivateIpAddress = struct(
  n0,
  _IPIA,
  0,
  [_Ass, _Prim, _PDN, _PIAr],
  [
    [
      () => InstanceNetworkInterfaceAssociation,
      {
        [_eQN]: `Association`,
        [_xN]: _ass,
      },
    ],
    [
      2,
      {
        [_eQN]: `Primary`,
        [_xN]: _prim,
      },
    ],
    [
      0,
      {
        [_eQN]: `PrivateDnsName`,
        [_xN]: _pDNr,
      },
    ],
    [
      0,
      {
        [_eQN]: `PrivateIpAddress`,
        [_xN]: _pIAr,
      },
    ],
  ]
);
export var Ipv4PrefixSpecificationResponse = struct(
  n0,
  _IPSRpv,
  0,
  [_IPpvre],
  [
    [
      0,
      {
        [_eQN]: `Ipv4Prefix`,
        [_xN]: _iPpv,
      },
    ],
  ]
);
export var Ipv6PrefixSpecificationResponse = struct(
  n0,
  _IPSRpvre,
  0,
  [_IPpv],
  [
    [
      0,
      {
        [_eQN]: `Ipv6Prefix`,
        [_xN]: _iPpvr,
      },
    ],
  ]
);
export var LaunchTemplateBlockDeviceMapping = struct(
  n0,
  _LTBDM,
  0,
  [_DN, _VN, _Eb, _ND],
  [
    [
      0,
      {
        [_eQN]: `DeviceName`,
        [_xN]: _dN,
      },
    ],
    [
      0,
      {
        [_eQN]: `VirtualName`,
        [_xN]: _vN,
      },
    ],
    [
      () => LaunchTemplateEbsBlockDevice,
      {
        [_eQN]: `Ebs`,
        [_xN]: _eb,
      },
    ],
    [
      0,
      {
        [_eQN]: `NoDevice`,
        [_xN]: _nD,
      },
    ],
  ]
);
export var LaunchTemplateBlockDeviceMappingRequest = struct(
  n0,
  _LTBDMR,
  0,
  [_DN, _VN, _Eb, _ND],
  [0, 0, () => LaunchTemplateEbsBlockDeviceRequest, 0]
);
export var LaunchTemplateCapacityReservationSpecificationRequest = struct(
  n0,
  _LTCRSR,
  0,
  [_CRP, _CRT],
  [0, () => CapacityReservationTarget]
);
export var LaunchTemplateCapacityReservationSpecificationResponse = struct(
  n0,
  _LTCRSRa,
  0,
  [_CRP, _CRT],
  [
    [
      0,
      {
        [_eQN]: `CapacityReservationPreference`,
        [_xN]: _cRP,
      },
    ],
    [
      () => CapacityReservationTargetResponse,
      {
        [_eQN]: `CapacityReservationTarget`,
        [_xN]: _cRT,
      },
    ],
  ]
);
export var LaunchTemplateCpuOptions = struct(
  n0,
  _LTCO,
  0,
  [_CCor, _TPC, _ASS],
  [
    [
      1,
      {
        [_eQN]: `CoreCount`,
        [_xN]: _cCo,
      },
    ],
    [
      1,
      {
        [_eQN]: `ThreadsPerCore`,
        [_xN]: _tPC,
      },
    ],
    [
      0,
      {
        [_eQN]: `AmdSevSnp`,
        [_xN]: _aSS,
      },
    ],
  ]
);
export var LaunchTemplateCpuOptionsRequest = struct(n0, _LTCOR, 0, [_CCor, _TPC, _ASS], [1, 1, 0]);
export var LaunchTemplateEbsBlockDevice = struct(
  n0,
  _LTEBD,
  0,
  [_Enc, _DOT, _Io, _KKI, _SIn, _VSo, _VT, _Th, _VIR],
  [
    [
      2,
      {
        [_eQN]: `Encrypted`,
        [_xN]: _enc,
      },
    ],
    [
      2,
      {
        [_eQN]: `DeleteOnTermination`,
        [_xN]: _dOT,
      },
    ],
    [
      1,
      {
        [_eQN]: `Iops`,
        [_xN]: _io,
      },
    ],
    [
      0,
      {
        [_eQN]: `KmsKeyId`,
        [_xN]: _kKI,
      },
    ],
    [
      0,
      {
        [_eQN]: `SnapshotId`,
        [_xN]: _sIn,
      },
    ],
    [
      1,
      {
        [_eQN]: `VolumeSize`,
        [_xN]: _vSo,
      },
    ],
    [
      0,
      {
        [_eQN]: `VolumeType`,
        [_xN]: _vT,
      },
    ],
    [
      1,
      {
        [_eQN]: `Throughput`,
        [_xN]: _th,
      },
    ],
    [
      1,
      {
        [_eQN]: `VolumeInitializationRate`,
        [_xN]: _vIR,
      },
    ],
  ]
);
export var LaunchTemplateEbsBlockDeviceRequest = struct(
  n0,
  _LTEBDR,
  0,
  [_Enc, _DOT, _Io, _KKI, _SIn, _VSo, _VT, _Th, _VIR],
  [2, 2, 1, 0, 0, 1, 0, 1, 1]
);
export var LaunchTemplateElasticInferenceAccelerator = struct(n0, _LTEIA, 0, [_Ty, _Cou], [0, 1]);
export var LaunchTemplateElasticInferenceAcceleratorResponse = struct(
  n0,
  _LTEIAR,
  0,
  [_Ty, _Cou],
  [
    [
      0,
      {
        [_eQN]: `Type`,
        [_xN]: _ty,
      },
    ],
    [
      1,
      {
        [_eQN]: `Count`,
        [_xN]: _cou,
      },
    ],
  ]
);
export var LaunchTemplateEnaSrdSpecification = struct(
  n0,
  _LTESS,
  0,
  [_ESE, _ESUS],
  [
    [
      2,
      {
        [_eQN]: `EnaSrdEnabled`,
        [_xN]: _eSE,
      },
    ],
    [
      () => LaunchTemplateEnaSrdUdpSpecification,
      {
        [_eQN]: `EnaSrdUdpSpecification`,
        [_xN]: _eSUS,
      },
    ],
  ]
);
export var LaunchTemplateEnaSrdUdpSpecification = struct(
  n0,
  _LTESUS,
  0,
  [_ESUE],
  [
    [
      2,
      {
        [_eQN]: `EnaSrdUdpEnabled`,
        [_xN]: _eSUE,
      },
    ],
  ]
);
export var LaunchTemplateEnclaveOptions = struct(
  n0,
  _LTEO,
  0,
  [_En],
  [
    [
      2,
      {
        [_eQN]: `Enabled`,
        [_xN]: _en,
      },
    ],
  ]
);
export var LaunchTemplateEnclaveOptionsRequest = struct(n0, _LTEOR, 0, [_En], [2]);
export var LaunchTemplateHibernationOptions = struct(
  n0,
  _LTHO,
  0,
  [_Conf],
  [
    [
      2,
      {
        [_eQN]: `Configured`,
        [_xN]: _conf,
      },
    ],
  ]
);
export var LaunchTemplateHibernationOptionsRequest = struct(n0, _LTHOR, 0, [_Conf], [2]);
export var LaunchTemplateIamInstanceProfileSpecification = struct(
  n0,
  _LTIIPS,
  0,
  [_Ar, _N],
  [
    [
      0,
      {
        [_eQN]: `Arn`,
        [_xN]: _ar,
      },
    ],
    [
      0,
      {
        [_eQN]: `Name`,
        [_xN]: _n,
      },
    ],
  ]
);
export var LaunchTemplateIamInstanceProfileSpecificationRequest = struct(n0, _LTIIPSR, 0, [_Ar, _N], [0, 0]);
export var LaunchTemplateInstanceMaintenanceOptions = struct(
  n0,
  _LTIMO,
  0,
  [_ARuto],
  [
    [
      0,
      {
        [_eQN]: `AutoRecovery`,
        [_xN]: _aRut,
      },
    ],
  ]
);
export var LaunchTemplateInstanceMaintenanceOptionsRequest = struct(n0, _LTIMOR, 0, [_ARuto], [0]);
export var LaunchTemplateInstanceMarketOptions = struct(
  n0,
  _LTIMOa,
  0,
  [_MT, _SO],
  [
    [
      0,
      {
        [_eQN]: `MarketType`,
        [_xN]: _mT,
      },
    ],
    [
      () => LaunchTemplateSpotMarketOptions,
      {
        [_eQN]: `SpotOptions`,
        [_xN]: _sO,
      },
    ],
  ]
);
export var LaunchTemplateInstanceMarketOptionsRequest = struct(
  n0,
  _LTIMORa,
  0,
  [_MT, _SO],
  [0, () => LaunchTemplateSpotMarketOptionsRequest]
);
export var LaunchTemplateInstanceMetadataOptions = struct(
  n0,
  _LTIMOau,
  0,
  [_St, _HT, _HPRHL, _HE, _HPI, _IMT],
  [
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
    [
      0,
      {
        [_eQN]: `HttpTokens`,
        [_xN]: _hT,
      },
    ],
    [
      1,
      {
        [_eQN]: `HttpPutResponseHopLimit`,
        [_xN]: _hPRHL,
      },
    ],
    [
      0,
      {
        [_eQN]: `HttpEndpoint`,
        [_xN]: _hE,
      },
    ],
    [
      0,
      {
        [_eQN]: `HttpProtocolIpv6`,
        [_xN]: _hPI,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceMetadataTags`,
        [_xN]: _iMT,
      },
    ],
  ]
);
export var LaunchTemplateInstanceMetadataOptionsRequest = struct(
  n0,
  _LTIMORau,
  0,
  [_HT, _HPRHL, _HE, _HPI, _IMT],
  [0, 1, 0, 0, 0]
);
export var LaunchTemplateInstanceNetworkInterfaceSpecification = struct(
  n0,
  _LTINIS,
  0,
  [
    _ACIA,
    _APIAss,
    _DOT,
    _De,
    _DI,
    _G,
    _ITn,
    _IAC,
    _IA,
    _NII,
    _PIAr,
    _PIAri,
    _SPIAC,
    _SIu,
    _NCI,
    _IPpvr,
    _IPCp,
    _IPp,
    _IPC,
    _PIr,
    _ESS,
    _CTS,
    _EQC,
  ],
  [
    [
      2,
      {
        [_eQN]: `AssociateCarrierIpAddress`,
        [_xN]: _aCIA,
      },
    ],
    [
      2,
      {
        [_eQN]: `AssociatePublicIpAddress`,
        [_xN]: _aPIA,
      },
    ],
    [
      2,
      {
        [_eQN]: `DeleteOnTermination`,
        [_xN]: _dOT,
      },
    ],
    [
      0,
      {
        [_eQN]: `Description`,
        [_xN]: _de,
      },
    ],
    [
      1,
      {
        [_eQN]: `DeviceIndex`,
        [_xN]: _dI,
      },
    ],
    [
      () => GroupIdStringList,
      {
        [_eQN]: `GroupSet`,
        [_xN]: _gS,
      },
    ],
    [
      0,
      {
        [_eQN]: `InterfaceType`,
        [_xN]: _iTnt,
      },
    ],
    [
      1,
      {
        [_eQN]: `Ipv6AddressCount`,
        [_xN]: _iAC,
      },
    ],
    [
      () => InstanceIpv6AddressList,
      {
        [_eQN]: `Ipv6AddressesSet`,
        [_xN]: _iASp,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkInterfaceId`,
        [_xN]: _nII,
      },
    ],
    [
      0,
      {
        [_eQN]: `PrivateIpAddress`,
        [_xN]: _pIAr,
      },
    ],
    [
      () => PrivateIpAddressSpecificationList,
      {
        [_eQN]: `PrivateIpAddressesSet`,
        [_xN]: _pIAS,
      },
    ],
    [
      1,
      {
        [_eQN]: `SecondaryPrivateIpAddressCount`,
        [_xN]: _sPIAC,
      },
    ],
    [
      0,
      {
        [_eQN]: `SubnetId`,
        [_xN]: _sIu,
      },
    ],
    [
      1,
      {
        [_eQN]: `NetworkCardIndex`,
        [_xN]: _nCI,
      },
    ],
    [
      () => Ipv4PrefixListResponse,
      {
        [_eQN]: `Ipv4PrefixSet`,
        [_xN]: _iPSpv,
      },
    ],
    [
      1,
      {
        [_eQN]: `Ipv4PrefixCount`,
        [_xN]: _iPCp,
      },
    ],
    [
      () => Ipv6PrefixListResponse,
      {
        [_eQN]: `Ipv6PrefixSet`,
        [_xN]: _iPSpvr,
      },
    ],
    [
      1,
      {
        [_eQN]: `Ipv6PrefixCount`,
        [_xN]: _iPCpv,
      },
    ],
    [
      2,
      {
        [_eQN]: `PrimaryIpv6`,
        [_xN]: _pIri,
      },
    ],
    [
      () => LaunchTemplateEnaSrdSpecification,
      {
        [_eQN]: `EnaSrdSpecification`,
        [_xN]: _eSS,
      },
    ],
    [
      () => ConnectionTrackingSpecification,
      {
        [_eQN]: `ConnectionTrackingSpecification`,
        [_xN]: _cTS,
      },
    ],
    [
      1,
      {
        [_eQN]: `EnaQueueCount`,
        [_xN]: _eQC,
      },
    ],
  ]
);
export var LaunchTemplateInstanceNetworkInterfaceSpecificationRequest = struct(
  n0,
  _LTINISR,
  0,
  [
    _ACIA,
    _APIAss,
    _DOT,
    _De,
    _DI,
    _G,
    _ITn,
    _IAC,
    _IA,
    _NII,
    _PIAr,
    _PIAri,
    _SPIAC,
    _SIu,
    _NCI,
    _IPpvr,
    _IPCp,
    _IPp,
    _IPC,
    _PIr,
    _ESS,
    _CTS,
    _EQC,
  ],
  [
    2,
    2,
    2,
    0,
    1,
    [
      () => SecurityGroupIdStringList,
      {
        [_xN]: _SGI,
      },
    ],
    0,
    1,
    [() => InstanceIpv6AddressListRequest, 0],
    0,
    0,
    [() => PrivateIpAddressSpecificationList, 0],
    1,
    0,
    1,
    [
      () => Ipv4PrefixList,
      {
        [_xN]: _IPpvre,
      },
    ],
    1,
    [
      () => Ipv6PrefixList,
      {
        [_xN]: _IPpv,
      },
    ],
    1,
    2,
    () => EnaSrdSpecificationRequest,
    () => ConnectionTrackingSpecificationRequest,
    1,
  ]
);
export var LaunchTemplateLicenseConfiguration = struct(
  n0,
  _LTLC,
  0,
  [_LCA],
  [
    [
      0,
      {
        [_eQN]: `LicenseConfigurationArn`,
        [_xN]: _lCA,
      },
    ],
  ]
);
export var LaunchTemplateLicenseConfigurationRequest = struct(n0, _LTLCR, 0, [_LCA], [0]);
export var LaunchTemplateNetworkPerformanceOptions = struct(
  n0,
  _LTNPO,
  0,
  [_BW],
  [
    [
      0,
      {
        [_eQN]: `BandwidthWeighting`,
        [_xN]: _bW,
      },
    ],
  ]
);
export var LaunchTemplateNetworkPerformanceOptionsRequest = struct(n0, _LTNPOR, 0, [_BW], [0]);
export var LaunchTemplatePlacement = struct(
  n0,
  _LTP,
  0,
  [_AZ, _AZI, _Af, _GN, _HIo, _Te, _SDp, _HRGA, _PN, _GIr],
  [
    [
      0,
      {
        [_eQN]: `AvailabilityZone`,
        [_xN]: _aZ,
      },
    ],
    [
      0,
      {
        [_eQN]: `AvailabilityZoneId`,
        [_xN]: _aZI,
      },
    ],
    [
      0,
      {
        [_eQN]: `Affinity`,
        [_xN]: _af,
      },
    ],
    [
      0,
      {
        [_eQN]: `GroupName`,
        [_xN]: _gN,
      },
    ],
    [
      0,
      {
        [_eQN]: `HostId`,
        [_xN]: _hI,
      },
    ],
    [
      0,
      {
        [_eQN]: `Tenancy`,
        [_xN]: _t,
      },
    ],
    [
      0,
      {
        [_eQN]: `SpreadDomain`,
        [_xN]: _sDp,
      },
    ],
    [
      0,
      {
        [_eQN]: `HostResourceGroupArn`,
        [_xN]: _hRGA,
      },
    ],
    [
      1,
      {
        [_eQN]: `PartitionNumber`,
        [_xN]: _pN,
      },
    ],
    [
      0,
      {
        [_eQN]: `GroupId`,
        [_xN]: _gIr,
      },
    ],
  ]
);
export var LaunchTemplatePlacementRequest = struct(
  n0,
  _LTPR,
  0,
  [_AZ, _AZI, _Af, _GN, _HIo, _Te, _SDp, _HRGA, _PN, _GIr],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
);
export var LaunchTemplatePrivateDnsNameOptions = struct(
  n0,
  _LTPDNO,
  0,
  [_HTo, _ERNDAR, _ERNDAAAAR],
  [
    [
      0,
      {
        [_eQN]: `HostnameType`,
        [_xN]: _hTo,
      },
    ],
    [
      2,
      {
        [_eQN]: `EnableResourceNameDnsARecord`,
        [_xN]: _eRNDAR,
      },
    ],
    [
      2,
      {
        [_eQN]: `EnableResourceNameDnsAAAARecord`,
        [_xN]: _eRNDAAAAR,
      },
    ],
  ]
);
export var LaunchTemplatePrivateDnsNameOptionsRequest = struct(n0, _LTPDNOR, 0, [_HTo, _ERNDAR, _ERNDAAAAR], [0, 2, 2]);
export var LaunchTemplatesMonitoring = struct(
  n0,
  _LTM,
  0,
  [_En],
  [
    [
      2,
      {
        [_eQN]: `Enabled`,
        [_xN]: _en,
      },
    ],
  ]
);
export var LaunchTemplatesMonitoringRequest = struct(n0, _LTMR, 0, [_En], [2]);
export var LaunchTemplateSpecification = struct(n0, _LTS, 0, [_LTI, _LTN, _Ver], [0, 0, 0]);
export var LaunchTemplateSpotMarketOptions = struct(
  n0,
  _LTSMO,
  0,
  [_MPax, _SIT, _BDMlo, _VU, _IIB],
  [
    [
      0,
      {
        [_eQN]: `MaxPrice`,
        [_xN]: _mP,
      },
    ],
    [
      0,
      {
        [_eQN]: `SpotInstanceType`,
        [_xN]: _sIT,
      },
    ],
    [
      1,
      {
        [_eQN]: `BlockDurationMinutes`,
        [_xN]: _bDMl,
      },
    ],
    [
      4,
      {
        [_eQN]: `ValidUntil`,
        [_xN]: _vU,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceInterruptionBehavior`,
        [_xN]: _iIB,
      },
    ],
  ]
);
export var LaunchTemplateSpotMarketOptionsRequest = struct(
  n0,
  _LTSMOR,
  0,
  [_MPax, _SIT, _BDMlo, _VU, _IIB],
  [0, 0, 1, 4, 0]
);
export var LaunchTemplateTagSpecification = struct(
  n0,
  _LTTS,
  0,
  [_RTe, _T],
  [
    [
      0,
      {
        [_eQN]: `ResourceType`,
        [_xN]: _rTe,
      },
    ],
    [
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
  ]
);
export var LaunchTemplateTagSpecificationRequest = struct(
  n0,
  _LTTSR,
  0,
  [_RTe, _T],
  [
    0,
    [
      () => TagList,
      {
        [_xN]: _Ta,
      },
    ],
  ]
);
export var LaunchTemplateVersion = struct(
  n0,
  _LTV,
  0,
  [_LTI, _LTN, _VNe, _VD, _CTr, _CBr, _DVe, _LTD, _Op],
  [
    [
      0,
      {
        [_eQN]: `LaunchTemplateId`,
        [_xN]: _lTI,
      },
    ],
    [
      0,
      {
        [_eQN]: `LaunchTemplateName`,
        [_xN]: _lTN,
      },
    ],
    [
      1,
      {
        [_eQN]: `VersionNumber`,
        [_xN]: _vNe,
      },
    ],
    [
      0,
      {
        [_eQN]: `VersionDescription`,
        [_xN]: _vD,
      },
    ],
    [
      4,
      {
        [_eQN]: `CreateTime`,
        [_xN]: _cTr,
      },
    ],
    [
      0,
      {
        [_eQN]: `CreatedBy`,
        [_xN]: _cBr,
      },
    ],
    [
      2,
      {
        [_eQN]: `DefaultVersion`,
        [_xN]: _dVe,
      },
    ],
    [
      () => ResponseLaunchTemplateData,
      {
        [_eQN]: `LaunchTemplateData`,
        [_xN]: _lTD,
      },
    ],
    [
      () => OperatorResponse,
      {
        [_eQN]: `Operator`,
        [_xN]: _ope,
      },
    ],
  ]
);
export var LicenseConfiguration = struct(
  n0,
  _LCi,
  0,
  [_LCA],
  [
    [
      0,
      {
        [_eQN]: `LicenseConfigurationArn`,
        [_xN]: _lCA,
      },
    ],
  ]
);
export var LicenseConfigurationRequest = struct(n0, _LCR, 0, [_LCA], [0]);
export var ModifyFleetRequest = struct(
  n0,
  _MFR,
  0,
  [_DR, _ECTP, _LTC, _FIl, _TCS, _Con],
  [
    2,
    0,
    [
      () => FleetLaunchTemplateConfigListRequest,
      {
        [_xN]: _LTCa,
      },
    ],
    0,
    () => TargetCapacitySpecificationRequest,
    0,
  ]
);
export var ModifyFleetResult = struct(
  n0,
  _MFRo,
  0,
  [_R],
  [
    [
      2,
      {
        [_eQN]: `Return`,
        [_xN]: _r,
      },
    ],
  ]
);
export var ModifyInstancePlacementRequest = struct(
  n0,
  _MIPR,
  0,
  [_GN, _PN, _HRGA, _GIr, _II, _Te, _Af, _HIo],
  [
    0,
    1,
    0,
    0,
    [
      0,
      {
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
      },
    ],
    [
      0,
      {
        [_eQN]: `Tenancy`,
        [_xN]: _t,
      },
    ],
    [
      0,
      {
        [_eQN]: `Affinity`,
        [_xN]: _af,
      },
    ],
    [
      0,
      {
        [_eQN]: `HostId`,
        [_xN]: _hI,
      },
    ],
  ]
);
export var ModifyInstancePlacementResult = struct(
  n0,
  _MIPRo,
  0,
  [_R],
  [
    [
      2,
      {
        [_eQN]: `Return`,
        [_xN]: _r,
      },
    ],
  ]
);
export var OnDemandOptionsRequest = struct(
  n0,
  _ODOR,
  0,
  [_ASl, _CRO, _SITi, _SAZ, _MTC, _MTP],
  [0, () => CapacityReservationOptionsRequest, 2, 2, 1, 0]
);
export var Placement = struct(
  n0,
  _Pla,
  0,
  [_AZI, _Af, _GN, _PN, _HIo, _Te, _SDp, _HRGA, _GIr, _AZ],
  [
    [
      0,
      {
        [_eQN]: `AvailabilityZoneId`,
        [_xN]: _aZI,
      },
    ],
    [
      0,
      {
        [_eQN]: `Affinity`,
        [_xN]: _af,
      },
    ],
    [
      0,
      {
        [_eQN]: `GroupName`,
        [_xN]: _gN,
      },
    ],
    [
      1,
      {
        [_eQN]: `PartitionNumber`,
        [_xN]: _pN,
      },
    ],
    [
      0,
      {
        [_eQN]: `HostId`,
        [_xN]: _hI,
      },
    ],
    [
      0,
      {
        [_eQN]: `Tenancy`,
        [_xN]: _t,
      },
    ],
    [
      0,
      {
        [_eQN]: `SpreadDomain`,
        [_xN]: _sDp,
      },
    ],
    [
      0,
      {
        [_eQN]: `HostResourceGroupArn`,
        [_xN]: _hRGA,
      },
    ],
    [
      0,
      {
        [_eQN]: `GroupId`,
        [_xN]: _gIr,
      },
    ],
    [
      0,
      {
        [_eQN]: `AvailabilityZone`,
        [_xN]: _aZ,
      },
    ],
  ]
);
export var PrivateDnsNameOptionsRequest = struct(n0, _PDNOR, 0, [_HTo, _ERNDAR, _ERNDAAAAR], [0, 2, 2]);
export var PrivateDnsNameOptionsResponse = struct(
  n0,
  _PDNORr,
  0,
  [_HTo, _ERNDAR, _ERNDAAAAR],
  [
    [
      0,
      {
        [_eQN]: `HostnameType`,
        [_xN]: _hTo,
      },
    ],
    [
      2,
      {
        [_eQN]: `EnableResourceNameDnsARecord`,
        [_xN]: _eRNDAR,
      },
    ],
    [
      2,
      {
        [_eQN]: `EnableResourceNameDnsAAAARecord`,
        [_xN]: _eRNDAAAAR,
      },
    ],
  ]
);
export var RequestLaunchTemplateData = struct(
  n0,
  _RLTD,
  0,
  [
    _KI,
    _EO,
    _IIP,
    _BDMl,
    _NIet,
    _IIm,
    _IT,
    _KN,
    _Mon,
    _Pla,
    _RDI,
    _DAT,
    _IISB,
    _UDs,
    _TS,
    _EGSlas,
    _EIAl,
    _SGIe,
    _SG,
    _IMOns,
    _CSr,
    _CO,
    _CRSa,
    _LS,
    _HO,
    _MO,
    _EOn,
    _IRn,
    _PDNO,
    _MOa,
    _DASi,
    _Op,
    _NPO,
  ],
  [
    0,
    2,
    () => LaunchTemplateIamInstanceProfileSpecificationRequest,
    [
      () => LaunchTemplateBlockDeviceMappingRequestList,
      {
        [_xN]: _BDM,
      },
    ],
    [
      () => LaunchTemplateInstanceNetworkInterfaceSpecificationRequestList,
      {
        [_xN]: _NIe,
      },
    ],
    0,
    0,
    0,
    () => LaunchTemplatesMonitoringRequest,
    () => LaunchTemplatePlacementRequest,
    0,
    2,
    0,
    [() => SensitiveUserData, 0],
    [
      () => LaunchTemplateTagSpecificationRequestList,
      {
        [_xN]: _TSa,
      },
    ],
    [
      () => ElasticGpuSpecificationList,
      {
        [_xN]: _EGSla,
      },
    ],
    [
      () => LaunchTemplateElasticInferenceAcceleratorList,
      {
        [_xN]: _EIA,
      },
    ],
    [
      () => SecurityGroupIdStringList,
      {
        [_xN]: _SGI,
      },
    ],
    [
      () => SecurityGroupStringList,
      {
        [_xN]: _SGe,
      },
    ],
    () => LaunchTemplateInstanceMarketOptionsRequest,
    () => CreditSpecificationRequest,
    () => LaunchTemplateCpuOptionsRequest,
    () => LaunchTemplateCapacityReservationSpecificationRequest,
    [
      () => LaunchTemplateLicenseSpecificationListRequest,
      {
        [_xN]: _LSi,
      },
    ],
    () => LaunchTemplateHibernationOptionsRequest,
    () => LaunchTemplateInstanceMetadataOptionsRequest,
    () => LaunchTemplateEnclaveOptionsRequest,
    [() => InstanceRequirementsRequest, 0],
    () => LaunchTemplatePrivateDnsNameOptionsRequest,
    () => LaunchTemplateInstanceMaintenanceOptionsRequest,
    2,
    () => OperatorRequest,
    () => LaunchTemplateNetworkPerformanceOptionsRequest,
  ]
);
export var Reservation = struct(
  n0,
  _Reser,
  0,
  [_RIeser, _OI, _RIeq, _G, _Ins],
  [
    [
      0,
      {
        [_eQN]: `ReservationId`,
        [_xN]: _rIes,
      },
    ],
    [
      0,
      {
        [_eQN]: `OwnerId`,
        [_xN]: _oI,
      },
    ],
    [
      0,
      {
        [_eQN]: `RequesterId`,
        [_xN]: _rIeq,
      },
    ],
    [
      () => GroupIdentifierList,
      {
        [_eQN]: `GroupSet`,
        [_xN]: _gS,
      },
    ],
    [
      () => InstanceList,
      {
        [_eQN]: `InstancesSet`,
        [_xN]: _iSn,
      },
    ],
  ]
);
export var ResponseLaunchTemplateData = struct(
  n0,
  _RLTDe,
  0,
  [
    _KI,
    _EO,
    _IIP,
    _BDMl,
    _NIet,
    _IIm,
    _IT,
    _KN,
    _Mon,
    _Pla,
    _RDI,
    _DAT,
    _IISB,
    _UDs,
    _TS,
    _EGSlas,
    _EIAl,
    _SGIe,
    _SG,
    _IMOns,
    _CSr,
    _CO,
    _CRSa,
    _LS,
    _HO,
    _MO,
    _EOn,
    _IRn,
    _PDNO,
    _MOa,
    _DASi,
    _Op,
    _NPO,
  ],
  [
    [
      0,
      {
        [_eQN]: `KernelId`,
        [_xN]: _kI,
      },
    ],
    [
      2,
      {
        [_eQN]: `EbsOptimized`,
        [_xN]: _eO,
      },
    ],
    [
      () => LaunchTemplateIamInstanceProfileSpecification,
      {
        [_eQN]: `IamInstanceProfile`,
        [_xN]: _iIP,
      },
    ],
    [
      () => LaunchTemplateBlockDeviceMappingList,
      {
        [_eQN]: `BlockDeviceMappingSet`,
        [_xN]: _bDMS,
      },
    ],
    [
      () => LaunchTemplateInstanceNetworkInterfaceSpecificationList,
      {
        [_eQN]: `NetworkInterfaceSet`,
        [_xN]: _nIS,
      },
    ],
    [
      0,
      {
        [_eQN]: `ImageId`,
        [_xN]: _iIma,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceType`,
        [_xN]: _iT,
      },
    ],
    [
      0,
      {
        [_eQN]: `KeyName`,
        [_xN]: _kN,
      },
    ],
    [
      () => LaunchTemplatesMonitoring,
      {
        [_eQN]: `Monitoring`,
        [_xN]: _mo,
      },
    ],
    [
      () => LaunchTemplatePlacement,
      {
        [_eQN]: `Placement`,
        [_xN]: _pla,
      },
    ],
    [
      0,
      {
        [_eQN]: `RamDiskId`,
        [_xN]: _rDI,
      },
    ],
    [
      2,
      {
        [_eQN]: `DisableApiTermination`,
        [_xN]: _dAT,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceInitiatedShutdownBehavior`,
        [_xN]: _iISB,
      },
    ],
    [
      () => SensitiveUserData,
      {
        [_eQN]: `UserData`,
        [_xN]: _uDs,
      },
    ],
    [
      () => LaunchTemplateTagSpecificationList,
      {
        [_eQN]: `TagSpecificationSet`,
        [_xN]: _tSS,
      },
    ],
    [
      () => ElasticGpuSpecificationResponseList,
      {
        [_eQN]: `ElasticGpuSpecificationSet`,
        [_xN]: _eGSS,
      },
    ],
    [
      () => LaunchTemplateElasticInferenceAcceleratorResponseList,
      {
        [_eQN]: `ElasticInferenceAcceleratorSet`,
        [_xN]: _eIAS,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `SecurityGroupIdSet`,
        [_xN]: _sGIS,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `SecurityGroupSet`,
        [_xN]: _sGS,
      },
    ],
    [
      () => LaunchTemplateInstanceMarketOptions,
      {
        [_eQN]: `InstanceMarketOptions`,
        [_xN]: _iMOn,
      },
    ],
    [
      () => CreditSpecification,
      {
        [_eQN]: `CreditSpecification`,
        [_xN]: _cSr,
      },
    ],
    [
      () => LaunchTemplateCpuOptions,
      {
        [_eQN]: `CpuOptions`,
        [_xN]: _cO,
      },
    ],
    [
      () => LaunchTemplateCapacityReservationSpecificationResponse,
      {
        [_eQN]: `CapacityReservationSpecification`,
        [_xN]: _cRSa,
      },
    ],
    [
      () => LaunchTemplateLicenseList,
      {
        [_eQN]: `LicenseSet`,
        [_xN]: _lSi,
      },
    ],
    [
      () => LaunchTemplateHibernationOptions,
      {
        [_eQN]: `HibernationOptions`,
        [_xN]: _hO,
      },
    ],
    [
      () => LaunchTemplateInstanceMetadataOptions,
      {
        [_eQN]: `MetadataOptions`,
        [_xN]: _mO,
      },
    ],
    [
      () => LaunchTemplateEnclaveOptions,
      {
        [_eQN]: `EnclaveOptions`,
        [_xN]: _eOn,
      },
    ],
    [
      () => InstanceRequirements,
      {
        [_eQN]: `InstanceRequirements`,
        [_xN]: _iR,
      },
    ],
    [
      () => LaunchTemplatePrivateDnsNameOptions,
      {
        [_eQN]: `PrivateDnsNameOptions`,
        [_xN]: _pDNO,
      },
    ],
    [
      () => LaunchTemplateInstanceMaintenanceOptions,
      {
        [_eQN]: `MaintenanceOptions`,
        [_xN]: _mOa,
      },
    ],
    [
      2,
      {
        [_eQN]: `DisableApiStop`,
        [_xN]: _dASi,
      },
    ],
    [
      () => OperatorResponse,
      {
        [_eQN]: `Operator`,
        [_xN]: _ope,
      },
    ],
    [
      () => LaunchTemplateNetworkPerformanceOptions,
      {
        [_eQN]: `NetworkPerformanceOptions`,
        [_xN]: _nPO,
      },
    ],
  ]
);
export var RunInstancesRequest = struct(
  n0,
  _RIRu,
  0,
  [
    _BDMl,
    _IIm,
    _IT,
    _IAC,
    _IA,
    _KI,
    _KN,
    _MCa,
    _MCin,
    _Mon,
    _Pla,
    _RIa,
    _SGIe,
    _SG,
    _SIu,
    _UDs,
    _EGSla,
    _EIAl,
    _TS,
    _LT,
    _IMOns,
    _CSr,
    _CO,
    _CRSa,
    _HO,
    _LS,
    _MO,
    _EOn,
    _PDNO,
    _MOa,
    _DASi,
    _EPI,
    _NPO,
    _Op,
    _DR,
    _DAT,
    _IISB,
    _PIAr,
    _CT,
    _AId,
    _NIet,
    _IIP,
    _EO,
  ],
  [
    [
      () => BlockDeviceMappingRequestList,
      {
        [_xN]: _BDM,
      },
    ],
    0,
    0,
    1,
    [
      () => InstanceIpv6AddressList,
      {
        [_xN]: _IApv,
      },
    ],
    0,
    0,
    1,
    1,
    [() => RunInstancesMonitoringEnabled, 0],
    [() => Placement, 0],
    0,
    [
      () => SecurityGroupIdStringList,
      {
        [_xN]: _SGI,
      },
    ],
    [
      () => SecurityGroupStringList,
      {
        [_xN]: _SGe,
      },
    ],
    0,
    [() => RunInstancesUserData, 0],
    [() => ElasticGpuSpecifications, 0],
    [
      () => ElasticInferenceAccelerators,
      {
        [_xN]: _EIA,
      },
    ],
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    () => LaunchTemplateSpecification,
    () => InstanceMarketOptionsRequest,
    () => CreditSpecificationRequest,
    () => CpuOptionsRequest,
    () => CapacityReservationSpecification,
    () => HibernationOptionsRequest,
    [
      () => LicenseSpecificationListRequest,
      {
        [_xN]: _LSi,
      },
    ],
    () => InstanceMetadataOptionsRequest,
    () => EnclaveOptionsRequest,
    () => PrivateDnsNameOptionsRequest,
    () => InstanceMaintenanceOptionsRequest,
    2,
    2,
    () => InstanceNetworkPerformanceOptionsRequest,
    () => OperatorRequest,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      2,
      {
        [_eQN]: `DisableApiTermination`,
        [_xN]: _dAT,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceInitiatedShutdownBehavior`,
        [_xN]: _iISB,
      },
    ],
    [
      0,
      {
        [_eQN]: `PrivateIpAddress`,
        [_xN]: _pIAr,
      },
    ],
    [
      0,
      {
        [_eQN]: `ClientToken`,
        [_xN]: _cT,
        [_iTd]: 1,
      },
    ],
    [
      0,
      {
        [_eQN]: `AdditionalInfo`,
        [_xN]: _aId,
      },
    ],
    [
      () => InstanceNetworkInterfaceSpecificationList,
      {
        [_eQN]: `NetworkInterface`,
        [_xN]: _nIe,
      },
    ],
    [
      () => IamInstanceProfileSpecification,
      {
        [_eQN]: `IamInstanceProfile`,
        [_xN]: _iIP,
      },
    ],
    [
      2,
      {
        [_eQN]: `EbsOptimized`,
        [_xN]: _eO,
      },
    ],
  ]
);
export var SpotMarketOptions = struct(n0, _SMO, 0, [_MPax, _SIT, _BDMlo, _VU, _IIB], [0, 0, 1, 4, 0]);
export var SpotOptionsRequest = struct(
  n0,
  _SOR,
  0,
  [_ASl, _MSa, _IIB, _IPTUC, _SITi, _SAZ, _MTC, _MTP],
  [0, () => FleetSpotMaintenanceStrategiesRequest, 0, 1, 2, 2, 1, 0]
);
export var TargetCapacitySpecificationRequest = struct(
  n0,
  _TCSR,
  0,
  [_TTC, _ODTC, _STC, _DTCT, _TCUT],
  [1, 1, 1, 0, 0]
);
export var UserData = struct(
  n0,
  _UDs,
  8,
  [_Da],
  [
    [
      0,
      {
        [_eQN]: `Data`,
        [_xN]: _da,
      },
    ],
  ]
);
export var ValidationError = struct(
  n0,
  _VEa,
  0,
  [_Co, _Me],
  [
    [
      0,
      {
        [_eQN]: `Code`,
        [_xN]: _co,
      },
    ],
    [
      0,
      {
        [_eQN]: `Message`,
        [_xN]: _me,
      },
    ],
  ]
);
export var ValidationWarning = struct(
  n0,
  _VW,
  0,
  [_Err],
  [
    [
      () => ErrorSet,
      {
        [_eQN]: `ErrorSet`,
        [_xN]: _eSr,
      },
    ],
  ]
);
export var CreateFleetErrorsSet = list(n0, _CFES, 0, [
  () => CreateFleetError,
  {
    [_xN]: _it,
  },
]);
export var CreateFleetInstancesSet = list(n0, _CFIS, 0, [
  () => CreateFleetInstance,
  {
    [_xN]: _it,
  },
]);
export var DiskImageList = list(n0, _DIL, 0, [() => DiskImage, 0]);
export var ElasticGpuAssociationList = list(n0, _EGAL, 0, [
  () => ElasticGpuAssociation,
  {
    [_xN]: _it,
  },
]);
export var ElasticGpuSpecificationList = list(n0, _EGSL, 0, [
  () => ElasticGpuSpecification,
  {
    [_xN]: _EGSla,
  },
]);
export var ElasticGpuSpecificationResponseList = list(n0, _EGSRL, 0, [
  () => ElasticGpuSpecificationResponse,
  {
    [_xN]: _it,
  },
]);
export var ElasticGpuSpecifications = list(n0, _EGSlas, 0, [
  () => ElasticGpuSpecification,
  {
    [_xN]: _it,
  },
]);
export var ElasticInferenceAcceleratorAssociationList = list(n0, _EIAAL, 0, [
  () => ElasticInferenceAcceleratorAssociation,
  {
    [_xN]: _it,
  },
]);
export var ElasticInferenceAccelerators = list(n0, _EIAl, 0, [
  () => ElasticInferenceAccelerator,
  {
    [_xN]: _it,
  },
]);
export var ErrorSet = list(n0, _ESr, 0, [
  () => ValidationError,
  {
    [_xN]: _it,
  },
]);
export var FleetBlockDeviceMappingRequestList = list(n0, _FBDMRL, 0, [
  () => FleetBlockDeviceMappingRequest,
  {
    [_xN]: _BDM,
  },
]);
export var FleetLaunchTemplateConfigListRequest = list(n0, _FLTCLR, 0, [
  () => FleetLaunchTemplateConfigRequest,
  {
    [_xN]: _it,
  },
]);
export var FleetLaunchTemplateOverridesListRequest = list(n0, _FLTOLR, 0, [
  () => FleetLaunchTemplateOverridesRequest,
  {
    [_xN]: _it,
  },
]);
export var InstanceIpv4PrefixList = list(n0, _IIPL, 0, [
  () => InstanceIpv4Prefix,
  {
    [_xN]: _it,
  },
]);
export var InstanceIpv6AddressListRequest = list(n0, _IIALR, 0, [
  () => InstanceIpv6AddressRequest,
  {
    [_xN]: _IIA,
  },
]);
export var InstanceIpv6PrefixList = list(n0, _IIPLn, 0, [
  () => InstanceIpv6Prefix,
  {
    [_xN]: _it,
  },
]);
export var InstanceList = list(n0, _ILns, 0, [
  () => Instance,
  {
    [_xN]: _it,
  },
]);
export var InstanceNetworkInterfaceList = list(n0, _INIL, 0, [
  () => InstanceNetworkInterface,
  {
    [_xN]: _it,
  },
]);
export var InstancePrivateIpAddressList = list(n0, _IPIAL, 0, [
  () => InstancePrivateIpAddress,
  {
    [_xN]: _it,
  },
]);
export var Ipv4PrefixListResponse = list(n0, _IPLR, 0, [
  () => Ipv4PrefixSpecificationResponse,
  {
    [_xN]: _it,
  },
]);
export var Ipv6PrefixListResponse = list(n0, _IPLRp, 0, [
  () => Ipv6PrefixSpecificationResponse,
  {
    [_xN]: _it,
  },
]);
export var LaunchTemplateBlockDeviceMappingList = list(n0, _LTBDML, 0, [
  () => LaunchTemplateBlockDeviceMapping,
  {
    [_xN]: _it,
  },
]);
export var LaunchTemplateBlockDeviceMappingRequestList = list(n0, _LTBDMRL, 0, [
  () => LaunchTemplateBlockDeviceMappingRequest,
  {
    [_xN]: _BDM,
  },
]);
export var LaunchTemplateElasticInferenceAcceleratorList = list(n0, _LTEIAL, 0, [
  () => LaunchTemplateElasticInferenceAccelerator,
  {
    [_xN]: _it,
  },
]);
export var LaunchTemplateElasticInferenceAcceleratorResponseList = list(n0, _LTEIARL, 0, [
  () => LaunchTemplateElasticInferenceAcceleratorResponse,
  {
    [_xN]: _it,
  },
]);
export var LaunchTemplateInstanceNetworkInterfaceSpecificationList = list(n0, _LTINISL, 0, [
  () => LaunchTemplateInstanceNetworkInterfaceSpecification,
  {
    [_xN]: _it,
  },
]);
export var LaunchTemplateInstanceNetworkInterfaceSpecificationRequestList = list(n0, _LTINISRL, 0, [
  () => LaunchTemplateInstanceNetworkInterfaceSpecificationRequest,
  {
    [_xN]: _INIS,
  },
]);
export var LaunchTemplateLicenseList = list(n0, _LTLL, 0, [
  () => LaunchTemplateLicenseConfiguration,
  {
    [_xN]: _it,
  },
]);
export var LaunchTemplateLicenseSpecificationListRequest = list(n0, _LTLSLR, 0, [
  () => LaunchTemplateLicenseConfigurationRequest,
  {
    [_xN]: _it,
  },
]);
export var LaunchTemplateTagSpecificationList = list(n0, _LTTSL, 0, [
  () => LaunchTemplateTagSpecification,
  {
    [_xN]: _it,
  },
]);
export var LaunchTemplateTagSpecificationRequestList = list(n0, _LTTSRL, 0, [
  () => LaunchTemplateTagSpecificationRequest,
  {
    [_xN]: _LTTSR,
  },
]);
export var LaunchTemplateVersionSet = list(n0, _LTVS, 0, [
  () => LaunchTemplateVersion,
  {
    [_xN]: _it,
  },
]);
export var LicenseList = list(n0, _LL, 0, [
  () => LicenseConfiguration,
  {
    [_xN]: _it,
  },
]);
export var LicenseSpecificationListRequest = list(n0, _LSLR, 0, [
  () => LicenseConfigurationRequest,
  {
    [_xN]: _it,
  },
]);
export var PlacementGroupIdStringList = list(n0, _PGISL, 0, [
  0,
  {
    [_xN]: _GIr,
  },
]);
export var PlacementGroupList = list(n0, _PGL, 0, [
  () => PlacementGroup,
  {
    [_xN]: _it,
  },
]);
export var PlacementGroupStringList = 64 | 0;

export var ReservationList = list(n0, _RLe, 0, [
  () => Reservation,
  {
    [_xN]: _it,
  },
]);
export var SecurityGroupStringList = list(n0, _SGSL, 0, [
  0,
  {
    [_xN]: _SGe,
  },
]);
export var CreateFleet = op(
  n0,
  _CFr,
  0,
  () => CreateFleetRequest,
  () => CreateFleetResult
);
export var CreateLaunchTemplate = op(
  n0,
  _CLT,
  0,
  () => CreateLaunchTemplateRequest,
  () => CreateLaunchTemplateResult
);
export var CreateLaunchTemplateVersion = op(
  n0,
  _CLTV,
  0,
  () => CreateLaunchTemplateVersionRequest,
  () => CreateLaunchTemplateVersionResult
);
export var DescribeInstances = op(
  n0,
  _DIesc,
  0,
  () => DescribeInstancesRequest,
  () => DescribeInstancesResult
);
export var DescribeLaunchTemplateVersions = op(
  n0,
  _DLTVe,
  0,
  () => DescribeLaunchTemplateVersionsRequest,
  () => DescribeLaunchTemplateVersionsResult
);
export var DescribePlacementGroups = op(
  n0,
  _DPGe,
  0,
  () => DescribePlacementGroupsRequest,
  () => DescribePlacementGroupsResult
);
export var GetLaunchTemplateData = op(
  n0,
  _GLTD,
  0,
  () => GetLaunchTemplateDataRequest,
  () => GetLaunchTemplateDataResult
);
export var ImportInstance = op(
  n0,
  _IImp,
  0,
  () => ImportInstanceRequest,
  () => ImportInstanceResult
);
export var ModifyFleet = op(
  n0,
  _MF,
  0,
  () => ModifyFleetRequest,
  () => ModifyFleetResult
);
export var ModifyInstancePlacement = op(
  n0,
  _MIP,
  0,
  () => ModifyInstancePlacementRequest,
  () => ModifyInstancePlacementResult
);
export var RunInstances = op(
  n0,
  _RIu,
  0,
  () => RunInstancesRequest,
  () => Reservation
);
