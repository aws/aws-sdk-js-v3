// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _A,
  _AAFD,
  _AC,
  _ACu,
  _ADE,
  _AH,
  _AHR,
  _AK,
  _Al,
  _Ar,
  _Arr,
  _AT,
  _ATl,
  _ATp,
  _ATpp,
  _ATS,
  _AUT,
  _AV,
  _Av,
  _B,
  _BB,
  _BCD,
  _BCS,
  _BTS,
  _C,
  _c,
  _CA,
  _Ca,
  _CAH,
  _Car,
  _CC,
  _CCL,
  _CCo,
  _Ce,
  _CEC,
  _CHSD,
  _CI,
  _CIa,
  _CIR,
  _CIRa,
  _Cl,
  _Co,
  _Cod,
  _Con,
  _Conf,
  _Cons,
  _Cou,
  _Coun,
  _CP,
  _CR,
  _CRa,
  _CRM,
  _CRMR,
  _CRMRa,
  _CRR,
  _CRRa,
  _CSD,
  _CST,
  _Cu,
  _D,
  _DC,
  _DD,
  _DDO,
  _DDr,
  _De,
  _Dep,
  _Des,
  _Det,
  _Di,
  _Dir,
  _DM,
  _DN,
  _DO,
  _DOW,
  _DR,
  _Dr,
  _DS,
  _DSy,
  _DT,
  _DTi,
  _DTL,
  _Du,
  _E,
  _e,
  _EC,
  _EHSD,
  _EN,
  _Er,
  _Es,
  _ESD,
  _ET,
  _ETm,
  _ETn,
  _Ex,
  _F,
  _FC,
  _FCa,
  _FETO,
  _FL,
  _fL,
  _FLD,
  _FPI,
  _Fr,
  _G,
  _Ga,
  _Ge,
  _GO,
  _GW,
  _H,
  _h,
  _HAFA,
  _HC,
  _He,
  _hE,
  _hH,
  _Ho,
  _Hov,
  _hQ,
  _I,
  _IAA,
  _IAAG,
  _IAAGL,
  _IAAL,
  _IAO,
  _IAOs,
  _IAZC,
  _IAZCL,
  _IC,
  _ICG,
  _ICL,
  _ICO,
  _Id,
  _IDO,
  _IET,
  _IG,
  _IGF,
  _IGO,
  _IHCT,
  _IHCTL,
  _IL,
  _Im,
  _IMO,
  _IMS,
  _In,
  _Inc,
  _Ins,
  _IOO,
  _IRT,
  _Is,
  _ISE,
  _ISG,
  _ISGL,
  _ISO,
  _ISOSO,
  _IT,
  _ITMO,
  _ITO,
  _ITOs,
  _ITOso,
  _IVLP,
  _IW,
  _jN,
  _K,
  _k,
  _KL,
  _KSD,
  _L,
  _La,
  _Lab,
  _LAF,
  _LC,
  _LCo,
  _Le,
  _Leg,
  _LGF,
  _LP,
  _LPo,
  _LR,
  _LRi,
  _LS,
  _LSL,
  _LSo,
  _M,
  _m,
  _MA,
  _Ma,
  _Mar,
  _Max,
  _MH,
  _Mi,
  _MKL,
  _ML,
  _MP,
  _MPC,
  _MR,
  _MRa,
  _MRL,
  _MS,
  _MW,
  _MWa,
  _MWPA,
  _MWPAG,
  _N,
  _n,
  _Na,
  _Nam,
  _NH,
  _NR,
  _O,
  _Oc,
  _OIF,
  _OO,
  _OP,
  _Op,
  _Or,
  _ORF,
  _ORT,
  _OSF,
  _Ov,
  _OW,
  _OWp,
  _OWR,
  _OWRp,
  _P,
  _PA,
  _Pa,
  _PB,
  _PC,
  _PCa,
  _PCe,
  _PD,
  _Pe,
  _Ped,
  _Pl,
  _PLD,
  _PM,
  _Po,
  _Pos,
  _Posi,
  _PP,
  _PR,
  _Pr,
  _PRL,
  _PS,
  _PT,
  _PTW,
  _Q,
  _Qu,
  _R,
  _r,
  _RA,
  _Ra,
  _RAA,
  _RAAG,
  _RAAGL,
  _RAAL,
  _Ran,
  _RAO,
  _RAo,
  _RAOo,
  _Rat,
  _RAZC,
  _RAZCL,
  _RB,
  _RC,
  _RCe,
  _RCHSD,
  _RCO,
  _RCSD,
  _RD,
  _RDe,
  _RDO,
  _RDOo,
  _RDSI,
  _RDSIL,
  _RE,
  _Re,
  _Rea,
  _REHSD,
  _REO,
  _RESD,
  _RESDo,
  _RESDou,
  _RET,
  _RETo,
  _RFA,
  _RFATS,
  _RFATSL,
  _RFATST,
  _RFBTS,
  _RFBTSL,
  _RFBTST,
  _RFD,
  _RFLD,
  _RFN,
  _RFNL,
  _RFOS,
  _RFP,
  _RFS,
  _RFSL,
  _RFSo,
  _RFTOS,
  _RFTS,
  _RFTSL,
  _RFTST,
  _RHCT,
  _RHCTL,
  _RKSD,
  _RL,
  _RLAF,
  _RLAFL,
  _RLG,
  _RLL,
  _RLo,
  _RLT,
  _RLTM,
  _RM,
  _RMAA,
  _RMAAG,
  _RMAAL,
  _RMAC,
  _RMAO,
  _RMAOo,
  _RMAZC,
  _RMAZCL,
  _RMB,
  _RMBG,
  _RMCO,
  _RMD,
  _RMDL,
  _RMDO,
  _RME,
  _RMEO,
  _RMHCT,
  _RMHCTL,
  _RMMO,
  _RMO,
  _RMOL,
  _RMOO,
  _RMOo,
  _RMR,
  _RMRL,
  _RMRLL,
  _RMSO,
  _RMSOSO,
  _RMTMO,
  _RMTO,
  _RMTOo,
  _RMTOou,
  _RMTT,
  _RMVLP,
  _RMZC,
  _RN,
  _RNDR,
  _RNL,
  _RNo,
  _RNou,
  _RNout,
  _Ro,
  _ROO,
  _RP,
  _RPA,
  _RPD,
  _RPLD,
  _RPN,
  _RPNL,
  _RPO,
  _RPOS,
  _RPP,
  _RPS,
  _RPSD,
  _RPSL,
  _RPSo,
  _RPTOS,
  _RPTP,
  _RPTS,
  _RPTSL,
  _RPTST,
  _RPTW,
  _RPTWL,
  _RR,
  _RRESD,
  _RRESDo,
  _RRN,
  _RRNL,
  _RRPSD,
  _RRSD,
  _RRT,
  _RS,
  _RSCAA,
  _RSCAAL,
  _RSD,
  _RSDa,
  _RSDSD,
  _RSGA,
  _RSHCT,
  _RSHCTL,
  _RSL,
  _RSLL,
  _RSN,
  _RSNC,
  _RSNL,
  _RSO,
  _RSo,
  _RSOS,
  _RSOSO,
  _RSPAA,
  _RSPAAL,
  _RSRA,
  _RSRAL,
  _RSRCA,
  _RSSAA,
  _RSSAAL,
  _RSSG,
  _RSSLD,
  _RSSTP,
  _RSSTPL,
  _RSTAA,
  _RSTAAL,
  _RSTMO,
  _RSTO,
  _RSTOo,
  _RSTP,
  _RSTPIL,
  _RSTPL,
  _RT,
  _RTe,
  _RTI,
  _RTL,
  _RTLo,
  _RTMO,
  _RTO,
  _RTo,
  _RTOo,
  _RTOou,
  _RTOout,
  _RTP,
  _RTPM,
  _RTPML,
  _RTPo,
  _RTPS,
  _RTPSL,
  _RTPSo,
  _RTPVP,
  _RTPVPT,
  _RTPVR,
  _RTR,
  _RTRL,
  _RTS,
  _RTSD,
  _RTSL,
  _RTSo,
  _RTT,
  _RTVC,
  _RUTSD,
  _RV,
  _RVA,
  _RVC,
  _RVD,
  _RVI,
  _RVIL,
  _RVIS,
  _RVIT,
  _RVLD,
  _RVLP,
  _RVN,
  _RVND,
  _RVNDL,
  _RVNL,
  _RVOS,
  _RVP,
  _RVS,
  _RVSL,
  _RVSo,
  _RVTOS,
  _RVTS,
  _RVTSL,
  _RVTST,
  _RW,
  _RWC,
  _RWL,
  _RZ,
  _RZC,
  _RZL,
  _S,
  _s,
  _SA,
  _SAF,
  _SB,
  _SC,
  _Sc,
  _SCh,
  _Sch,
  _SD,
  _SDe,
  _SDn,
  _SDt,
  _SDto,
  _Se,
  _SG,
  _SGF,
  _SI,
  _Si,
  _Sin,
  _SKPH,
  _SL,
  _SN,
  _SO,
  _SOS,
  _SP,
  _Sp,
  _Spa,
  _SPe,
  _SR,
  _SS,
  _ST,
  _STP,
  _STR,
  _STRR,
  _STRRn,
  _Su,
  _Sy,
  _T,
  _TA,
  _Ta,
  _TAr,
  _TB,
  _TC,
  _TCi,
  _TCr,
  _TCri,
  _TD,
  _TDi,
  _TDr,
  _TDu,
  _TE,
  _Te,
  _TI,
  _Ti,
  _Tim,
  _Tit,
  _TM,
  _TMO,
  _TO,
  _To,
  _To_,
  _TOD,
  _Tot,
  _Tow,
  _TP,
  _TPI,
  _TPIr,
  _TR,
  _Tr,
  _Tra,
  _Tran,
  _TRC,
  _Tri,
  _TRT,
  _TRTL,
  _TRTr,
  _Tru,
  _TS,
  _TSD,
  _TSo,
  _TST,
  _TSTA,
  _TSy,
  _TT,
  _TTL,
  _TTo,
  _TTr,
  _Tu,
  _TWTO,
  _Ty,
  _U,
  _Un,
  _Unl,
  _UT,
  _UTSD,
  _UW,
  _V,
  _VC,
  _VCi,
  _VE,
  _VEF,
  _VEFL,
  _VLD,
  _VP,
  _W,
  _WD,
  _WDo,
  _WI,
  _Wi,
  _WK,
  _WOAA,
  _WOAAG,
  _WOAAL,
  _WOAH,
  _WOAHE,
  _WOAO,
  _WOC,
  _WOCA,
  _WOCa,
  _WOCL,
  _WOCO,
  _WODDO,
  _WODO,
  _WODOa,
  _WOEO,
  _WOFC,
  _WOFCL,
  _WOHCT,
  _WOHCTL,
  _WOIW,
  _WOIWL,
  _WOOO,
  _WOOW,
  _WOOWL,
  _WOPO,
  _WORC,
  _WORCD,
  _WORP,
  _WOSOSO,
  _WOSTT,
  _WOTB,
  _WOTMO,
  _WOTO,
  _WOTOa,
  _WOTOay,
  _WOTT,
  _WOW,
  _WOWL,
  _WPA,
  _WPAG,
  _xagpb,
  _Z,
  _ZC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ApiKey = sim(n0, _AK, 0, 8);
export var CountryCode = sim(n0, _CC, 0, 8);
export var CountryCode3 = sim(n0, _CCo, 0, 8);
export var DayOfWeek = sim(n0, _DOW, 0, 8);
export var DimensionCentimeters = sim(n0, _DC, 1, 8);
export var DistanceMeters = sim(n0, _DM, 1, 8);
export var DurationSeconds = sim(n0, _DS, 1, 8);
export var Heading = sim(n0, _H, 1, 8);
export var IsolineEngineType = sim(n0, _IET, 0, 8);
export var IsolineHazardousCargoType = sim(n0, _IHCT, 0, 8);
export var Polyline = sim(n0, _P, 0, 8);
export var PolylineRing = sim(n0, _PR, 0, 8);
export var RoadSnapHazardousCargoType = sim(n0, _RSHCT, 0, 8);
export var RoadSnapNoticeCode = sim(n0, _RSNC, 0, 8);
export var RouteDirection = sim(n0, _RD, 0, 8);
export var RouteEngineType = sim(n0, _RET, 0, 8);
export var RouteFerryAfterTravelStepType = sim(n0, _RFATST, 0, 8);
export var RouteFerryBeforeTravelStepType = sim(n0, _RFBTST, 0, 8);
export var RouteFerryTravelStepType = sim(n0, _RFTST, 0, 8);
export var RouteHazardousCargoType = sim(n0, _RHCT, 0, 8);
export var RouteLegAdditionalFeature = sim(n0, _RLAF, 0, 8);
export var RouteLegTravelMode = sim(n0, _RLTM, 0, 8);
export var RouteLegType = sim(n0, _RLT, 0, 8);
export var RouteMatrixHazardousCargoType = sim(n0, _RMHCT, 0, 8);
export var RouteMatrixTruckType = sim(n0, _RMTT, 0, 8);
export var RouteMatrixZoneCategory = sim(n0, _RMZC, 0, 8);
export var RoutePedestrianTravelStepType = sim(n0, _RPTST, 0, 8);
export var RouteRoadType = sim(n0, _RRT, 0, 8);
export var RouteSideOfStreet = sim(n0, _RSOS, 0, 8);
export var RouteSpanCarAccessAttribute = sim(n0, _RSCAA, 0, 8);
export var RouteSpanGateAttribute = sim(n0, _RSGA, 0, 8);
export var RouteSpanPedestrianAccessAttribute = sim(n0, _RSPAA, 0, 8);
export var RouteSpanRailwayCrossingAttribute = sim(n0, _RSRCA, 0, 8);
export var RouteSpanRoadAttribute = sim(n0, _RSRA, 0, 8);
export var RouteSpanScooterAccessAttribute = sim(n0, _RSSAA, 0, 8);
export var RouteSpanTruckAccessAttribute = sim(n0, _RSTAA, 0, 8);
export var RouteSteeringDirection = sim(n0, _RSD, 0, 8);
export var RouteTollPassValidityPeriodType = sim(n0, _RTPVPT, 0, 8);
export var RouteTollPaymentMethod = sim(n0, _RTPM, 0, 8);
export var RouteTollVehicleCategory = sim(n0, _RTVC, 0, 8);
export var RouteTruckType = sim(n0, _RTT, 0, 8);
export var RouteTurnIntensity = sim(n0, _RTI, 0, 8);
export var RouteVehicleIncidentSeverity = sim(n0, _RVIS, 0, 8);
export var RouteVehicleIncidentType = sim(n0, _RVIT, 0, 8);
export var RouteVehicleTravelStepType = sim(n0, _RVTST, 0, 8);
export var RouteZoneCategory = sim(n0, _RZC, 0, 8);
export var SensitiveBoolean = sim(n0, _SB, 2, 8);
export var SensitiveDouble = sim(n0, _SD, 1, 8);
export var SensitiveInteger = sim(n0, _SI, 1, 8);
export var SensitiveString = sim(n0, _SS, 0, 8);
export var SpeedKilometersPerHour = sim(n0, _SKPH, 1, 8);
export var TimeOfDay = sim(n0, _TOD, 0, 8);
export var TimestampWithTimezoneOffset = sim(n0, _TWTO, 0, 8);
export var TruckRoadType = sim(n0, _TRT, 0, 8);
export var TunnelRestrictionCode = sim(n0, _TRC, 0, 8);
export var WaypointOptimizationClusteringAlgorithm = sim(n0, _WOCA, 0, 8);
export var WaypointOptimizationConstraint = sim(n0, _WOC, 0, 8);
export var WaypointOptimizationHazardousCargoType = sim(n0, _WOHCT, 0, 8);
export var WaypointOptimizationServiceTimeTreatment = sim(n0, _WOSTT, 0, 8);
export var WaypointOptimizationTruckType = sim(n0, _WOTT, 0, 8);
export var WeightKilograms = sim(n0, _WK, 1, 8);
export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_M],
  [
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ],

  __AccessDeniedException
);
export var CalculateIsolinesRequest = struct(
  n0,
  _CIR,
  0,
  [_A, _AT, _Av, _DN, _DT, _D, _DO, _IGF, _IG, _K, _OIF, _ORF, _O, _OO, _T, _Tr, _TM, _TMO],
  [
    [() => IsolineAllowOptions, 0],
    [() => TimestampWithTimezoneOffset, 0],
    [() => IsolineAvoidanceOptions, 0],
    [() => SensitiveBoolean, 0],
    [() => TimestampWithTimezoneOffset, 0],
    [() => Position, 0],
    [() => IsolineDestinationOptions, 0],
    0,
    [() => IsolineGranularityOptions, 0],
    [
      () => ApiKey,
      {
        [_hQ]: _k,
      },
    ],
    0,
    0,
    [() => Position, 0],
    [() => IsolineOriginOptions, 0],
    [() => IsolineThresholds, 0],
    [() => IsolineTrafficOptions, 0],
    0,
    [() => IsolineTravelModeOptions, 0],
  ]
);
export var CalculateIsolinesResponse = struct(
  n0,
  _CIRa,
  0,
  [_AT, _DT, _IGF, _I, _PB, _SDn, _SO],
  [
    [() => TimestampWithTimezoneOffset, 0],
    [() => TimestampWithTimezoneOffset, 0],
    0,
    [() => IsolineList, 0],
    [
      0,
      {
        [_hH]: _xagpb,
      },
    ],
    [() => Position, 0],
    [() => Position, 0],
  ]
);
export var CalculateRouteMatrixRequest = struct(
  n0,
  _CRMR,
  0,
  [_A, _Av, _DN, _DT, _De, _E, _K, _ORF, _Or, _RB, _Tr, _TM, _TMO],
  [
    [() => RouteMatrixAllowOptions, 0],
    [() => RouteMatrixAvoidanceOptions, 0],
    [() => SensitiveBoolean, 0],
    [() => TimestampWithTimezoneOffset, 0],
    [() => RouteMatrixDestinationList, 0],
    [() => RouteMatrixExclusionOptions, 0],
    [
      () => ApiKey,
      {
        [_hQ]: _k,
      },
    ],
    0,
    [() => RouteMatrixOriginList, 0],
    [() => RouteMatrixBoundary, 0],
    [() => RouteMatrixTrafficOptions, 0],
    0,
    [() => RouteMatrixTravelModeOptions, 0],
  ]
);
export var CalculateRouteMatrixResponse = struct(
  n0,
  _CRMRa,
  0,
  [_EC, _PB, _RM, _RB],
  [
    1,
    [
      0,
      {
        [_hH]: _xagpb,
      },
    ],
    [() => RouteMatrix, 0],
    [() => RouteMatrixBoundary, 0],
  ]
);
export var CalculateRoutesRequest = struct(
  n0,
  _CRR,
  0,
  [
    _A,
    _AT,
    _Av,
    _DN,
    _DT,
    _D,
    _DO,
    _Dr,
    _E,
    _IMS,
    _K,
    _L,
    _LAF,
    _LGF,
    _MA,
    _ORF,
    _O,
    _OO,
    _SAF,
    _To,
    _Tr,
    _TM,
    _TMO,
    _TST,
    _W,
  ],
  [
    [() => RouteAllowOptions, 0],
    [() => TimestampWithTimezoneOffset, 0],
    [() => RouteAvoidanceOptions, 0],
    [() => SensitiveBoolean, 0],
    [() => TimestampWithTimezoneOffset, 0],
    [() => Position, 0],
    [() => RouteDestinationOptions, 0],
    [() => RouteDriverOptions, 0],
    [() => RouteExclusionOptions, 0],
    0,
    [
      () => ApiKey,
      {
        [_hQ]: _k,
      },
    ],
    64 | 0,
    [() => RouteLegAdditionalFeatureList, 0],
    0,
    1,
    0,
    [() => Position, 0],
    [() => RouteOriginOptions, 0],
    64 | 0,
    [() => RouteTollOptions, 0],
    [() => RouteTrafficOptions, 0],
    0,
    [() => RouteTravelModeOptions, 0],
    0,
    [() => RouteWaypointList, 0],
  ]
);
export var CalculateRoutesResponse = struct(
  n0,
  _CRRa,
  0,
  [_LGF, _N, _PB, _R],
  [
    0,
    () => RouteResponseNoticeList,
    [
      0,
      {
        [_hH]: _xagpb,
      },
    ],
    [() => RouteList, 0],
  ]
);
export var Circle = struct(
  n0,
  _C,
  8,
  [_Ce, _Ra],
  [
    [() => Position, 0],
    [() => SensitiveDouble, 0],
  ]
);
export var Corridor = struct(n0, _Co, 8, [_LS, _Ra], [[() => LineString, 0], 1]);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ],

  __InternalServerException
);
export var Isoline = struct(
  n0,
  _Is,
  0,
  [_Con, _DTi, _G, _TT],
  [
    [() => IsolineConnectionList, 0],
    [() => DistanceMeters, 0],
    [() => IsolineShapeGeometryList, 0],
    [() => DurationSeconds, 0],
  ]
);
export var IsolineAllowOptions = struct(
  n0,
  _IAO,
  0,
  [_Ho, _Hov],
  [
    [() => SensitiveBoolean, 0],
    [() => SensitiveBoolean, 0],
  ]
);
export var IsolineAvoidanceArea = struct(
  n0,
  _IAA,
  0,
  [_Ex, _Ge],
  [
    [() => IsolineAvoidanceAreaGeometryList, 0],
    [() => IsolineAvoidanceAreaGeometry, 0],
  ]
);
export var IsolineAvoidanceAreaGeometry = struct(
  n0,
  _IAAG,
  0,
  [_BB, _Co, _Po, _PC, _PP],
  [
    [() => BoundingBox, 0],
    [() => Corridor, 0],
    [() => LinearRings, 0],
    [() => PolylineCorridor, 0],
    [() => PolylineRingList, 0],
  ]
);
export var IsolineAvoidanceOptions = struct(
  n0,
  _IAOs,
  0,
  [_Ar, _CST, _CAH, _DR, _F, _SC, _TR, _TTo, _TRTr, _Tu, _UT, _ZC],
  [
    [() => IsolineAvoidanceAreaList, 0],
    [() => SensitiveBoolean, 0],
    [() => SensitiveBoolean, 0],
    [() => SensitiveBoolean, 0],
    [() => SensitiveBoolean, 0],
    [() => SensitiveBoolean, 0],
    [() => SensitiveBoolean, 0],
    [() => SensitiveBoolean, 0],
    [() => TruckRoadTypeList, 0],
    [() => SensitiveBoolean, 0],
    [() => SensitiveBoolean, 0],
    () => IsolineAvoidanceZoneCategoryList,
  ]
);
export var IsolineAvoidanceZoneCategory = struct(n0, _IAZC, 0, [_Ca], [0]);
export var IsolineCarOptions = struct(
  n0,
  _ICO,
  0,
  [_ET, _LP, _MS, _Oc],
  [
    [() => IsolineEngineType, 0],
    [() => IsolineVehicleLicensePlate, 0],
    [() => SpeedKilometersPerHour, 0],
    [() => SensitiveInteger, 0],
  ]
);
export var IsolineConnection = struct(n0, _IC, 0, [_FPI, _Ge, _TPI], [1, [() => IsolineConnectionGeometry, 0], 1]);
export var IsolineConnectionGeometry = struct(
  n0,
  _ICG,
  0,
  [_LS, _P],
  [
    [() => LineString, 0],
    [() => Polyline, 0],
  ]
);
export var IsolineDestinationOptions = struct(
  n0,
  _IDO,
  0,
  [_AAFD, _H, _Ma, _SOS],
  [
    [() => DistanceMeters, 0],
    [() => Heading, 0],
    [() => IsolineMatchingOptions, 0],
    [() => IsolineSideOfStreetOptions, 0],
  ]
);
export var IsolineGranularityOptions = struct(n0, _IGO, 0, [_MP, _MR], [1, [() => DistanceMeters, 0]]);
export var IsolineMatchingOptions = struct(
  n0,
  _IMO,
  0,
  [_NH, _ORT, _Ra, _S],
  [[() => SensitiveString, 0], [() => DistanceMeters, 0], [() => DistanceMeters, 0], 0]
);
export var IsolineOriginOptions = struct(
  n0,
  _IOO,
  0,
  [_AAFD, _H, _Ma, _SOS],
  [
    [() => DistanceMeters, 0],
    [() => Heading, 0],
    [() => IsolineMatchingOptions, 0],
    [() => IsolineSideOfStreetOptions, 0],
  ]
);
export var IsolineScooterOptions = struct(
  n0,
  _ISO,
  0,
  [_ET, _LP, _MS, _Oc],
  [
    [() => IsolineEngineType, 0],
    [() => IsolineVehicleLicensePlate, 0],
    [() => SpeedKilometersPerHour, 0],
    [() => SensitiveInteger, 0],
  ]
);
export var IsolineShapeGeometry = struct(
  n0,
  _ISG,
  0,
  [_Po, _PP],
  [
    [() => LinearRings, 0],
    [() => PolylineRingList, 0],
  ]
);
export var IsolineSideOfStreetOptions = struct(n0, _ISOSO, 0, [_Pos, _UW], [[() => Position, 0], 0]);
export var IsolineThresholds = struct(
  n0,
  _IT,
  0,
  [_Di, _Ti],
  [
    [() => DistanceThresholdList, 0],
    [() => TimeThresholdList, 0],
  ]
);
export var IsolineTrafficOptions = struct(n0, _ITO, 0, [_FETO, _U], [[() => DurationSeconds, 0], 0]);
export var IsolineTrailerOptions = struct(
  n0,
  _ITOs,
  0,
  [_AC, _TC],
  [
    [() => SensitiveInteger, 0],
    [() => SensitiveInteger, 0],
  ]
);
export var IsolineTravelModeOptions = struct(
  n0,
  _ITMO,
  0,
  [_Car, _Sc, _Tru],
  [
    [() => IsolineCarOptions, 0],
    [() => IsolineScooterOptions, 0],
    [() => IsolineTruckOptions, 0],
  ]
);
export var IsolineTruckOptions = struct(
  n0,
  _ITOso,
  0,
  [_AC, _ET, _GW, _HC, _He, _HAFA, _KL, _Le, _LP, _MS, _Oc, _PCa, _TCi, _Tra, _TTr, _TRC, _WPA, _WPAG, _Wi],
  [
    [() => SensitiveInteger, 0],
    [() => IsolineEngineType, 0],
    [() => WeightKilograms, 0],
    [() => IsolineHazardousCargoTypeList, 0],
    [() => DimensionCentimeters, 0],
    [() => DimensionCentimeters, 0],
    [() => DimensionCentimeters, 0],
    [() => DimensionCentimeters, 0],
    [() => IsolineVehicleLicensePlate, 0],
    [() => SpeedKilometersPerHour, 0],
    [() => SensitiveInteger, 0],
    [() => WeightKilograms, 0],
    [() => SensitiveInteger, 0],
    [() => IsolineTrailerOptions, 0],
    0,
    [() => TunnelRestrictionCode, 0],
    [() => WeightKilograms, 0],
    [() => WeightPerAxleGroup, 0],
    [() => DimensionCentimeters, 0],
  ]
);
export var IsolineVehicleLicensePlate = struct(n0, _IVLP, 8, [_LC], [0]);
export var LocalizedString = struct(n0, _LSo, 0, [_La, _V], [0, [() => SensitiveString, 0]]);
export var OptimizeWaypointsRequest = struct(
  n0,
  _OWR,
  0,
  [_Av, _Cl, _DT, _D, _DO, _Dr, _E, _K, _OSF, _O, _OO, _Tr, _TM, _TMO, _W],
  [
    [() => WaypointOptimizationAvoidanceOptions, 0],
    [() => WaypointOptimizationClusteringOptions, 0],
    [() => TimestampWithTimezoneOffset, 0],
    [() => Position, 0],
    [() => WaypointOptimizationDestinationOptions, 0],
    [() => WaypointOptimizationDriverOptions, 0],
    [() => WaypointOptimizationExclusionOptions, 0],
    [
      () => ApiKey,
      {
        [_hQ]: _k,
      },
    ],
    0,
    [() => Position, 0],
    () => WaypointOptimizationOriginOptions,
    () => WaypointOptimizationTrafficOptions,
    0,
    [() => WaypointOptimizationTravelModeOptions, 0],
    [() => WaypointOptimizationWaypointList, 0],
  ]
);
export var OptimizeWaypointsResponse = struct(
  n0,
  _OWRp,
  0,
  [_Con, _Di, _Du, _IW, _OW, _PB, _TB],
  [
    [() => WaypointOptimizationConnectionList, 0],
    [() => DistanceMeters, 0],
    [() => DurationSeconds, 0],
    [() => WaypointOptimizationImpedingWaypointList, 0],
    [() => WaypointOptimizationOptimizedWaypointList, 0],
    [
      0,
      {
        [_hH]: _xagpb,
      },
    ],
    [() => WaypointOptimizationTimeBreakdown, 0],
  ]
);
export var PolylineCorridor = struct(n0, _PC, 8, [_P, _Ra], [[() => Polyline, 0], 1]);
export var RoadSnapNotice = struct(
  n0,
  _RSN,
  0,
  [_Cod, _Tit, _TPIr],
  [
    [() => RoadSnapNoticeCode, 0],
    [() => SensitiveString, 0],
    [() => RoadSnapTracePointIndexList, 0],
  ]
);
export var RoadSnapSnappedGeometry = struct(
  n0,
  _RSSG,
  0,
  [_LS, _P],
  [
    [() => LineString, 0],
    [() => Polyline, 0],
  ]
);
export var RoadSnapSnappedTracePoint = struct(
  n0,
  _RSSTP,
  0,
  [_Conf, _OP, _SP],
  [
    [() => SensitiveDouble, 0],
    [() => Position, 0],
    [() => Position, 0],
  ]
);
export var RoadSnapTracePoint = struct(
  n0,
  _RSTP,
  0,
  [_H, _Pos, _Sp, _Tim],
  [
    [() => Heading, 0],
    [() => Position, 0],
    [() => SpeedKilometersPerHour, 0],
    [() => TimestampWithTimezoneOffset, 0],
  ]
);
export var RoadSnapTrailerOptions = struct(n0, _RSTO, 0, [_TC], [[() => SensitiveInteger, 0]]);
export var RoadSnapTravelModeOptions = struct(n0, _RSTMO, 0, [_Tru], [[() => RoadSnapTruckOptions, 0]]);
export var RoadSnapTruckOptions = struct(
  n0,
  _RSTOo,
  0,
  [_GW, _HC, _He, _Le, _Tra, _TRC, _Wi],
  [
    [() => WeightKilograms, 0],
    [() => RoadSnapHazardousCargoTypeList, 0],
    [() => DimensionCentimeters, 0],
    [() => DimensionCentimeters, 0],
    [() => RoadSnapTrailerOptions, 0],
    [() => TunnelRestrictionCode, 0],
    [() => DimensionCentimeters, 0],
  ]
);
export var Route = struct(
  n0,
  _Ro,
  0,
  [_Leg, _MRL, _Su],
  [
    [() => RouteLegList, 0],
    [() => RouteMajorRoadLabelList, 0],
    [() => RouteSummary, 0],
  ]
);
export var RouteAllowOptions = struct(
  n0,
  _RAO,
  0,
  [_Ho, _Hov],
  [
    [() => SensitiveBoolean, 0],
    [() => SensitiveBoolean, 0],
  ]
);
export var RouteAvoidanceArea = struct(
  n0,
  _RAA,
  0,
  [_Ex, _Ge],
  [
    [() => RouteAvoidanceAreaGeometryList, 0],
    [() => RouteAvoidanceAreaGeometry, 0],
  ]
);
export var RouteAvoidanceAreaGeometry = struct(
  n0,
  _RAAG,
  0,
  [_Co, _BB, _Po, _PC, _PP],
  [
    [() => Corridor, 0],
    [() => BoundingBox, 0],
    [() => LinearRings, 0],
    [() => PolylineCorridor, 0],
    [() => PolylineRingList, 0],
  ]
);
export var RouteAvoidanceOptions = struct(
  n0,
  _RAOo,
  0,
  [_Ar, _CST, _CAH, _DR, _F, _SC, _TR, _TTo, _TRTr, _Tu, _UT, _ZC],
  [
    [() => RouteAvoidanceAreaList, 0],
    [() => SensitiveBoolean, 0],
    [() => SensitiveBoolean, 0],
    [() => SensitiveBoolean, 0],
    [() => SensitiveBoolean, 0],
    [() => SensitiveBoolean, 0],
    [() => SensitiveBoolean, 0],
    [() => SensitiveBoolean, 0],
    [() => TruckRoadTypeList, 0],
    [() => SensitiveBoolean, 0],
    [() => SensitiveBoolean, 0],
    [() => RouteAvoidanceZoneCategoryList, 0],
  ]
);
export var RouteAvoidanceZoneCategory = struct(n0, _RAZC, 0, [_Ca], [[() => RouteZoneCategory, 0]]);
export var RouteCarOptions = struct(
  n0,
  _RCO,
  0,
  [_ET, _LP, _MS, _Oc],
  [
    [() => RouteEngineType, 0],
    [() => RouteVehicleLicensePlate, 0],
    [() => SpeedKilometersPerHour, 0],
    [() => SensitiveInteger, 0],
  ]
);
export var RouteContinueHighwayStepDetails = struct(
  n0,
  _RCHSD,
  0,
  [_In, _SDt, _TA, _TI],
  [[() => LocalizedStringList, 0], [() => RouteSteeringDirection, 0], 1, [() => RouteTurnIntensity, 0]]
);
export var RouteContinueStepDetails = struct(n0, _RCSD, 0, [_In], [[() => LocalizedStringList, 0]]);
export var RouteDestinationOptions = struct(
  n0,
  _RDO,
  0,
  [_AAFD, _AUT, _H, _Ma, _SOS, _SDto],
  [
    [() => DistanceMeters, 0],
    [() => SensitiveBoolean, 0],
    [() => Heading, 0],
    [() => RouteMatchingOptions, 0],
    [() => RouteSideOfStreetOptions, 0],
    [() => DurationSeconds, 0],
  ]
);
export var RouteDriverOptions = struct(n0, _RDOo, 0, [_Sch], [[() => RouteDriverScheduleIntervalList, 0]]);
export var RouteDriverScheduleInterval = struct(
  n0,
  _RDSI,
  0,
  [_DD, _RDe],
  [
    [() => DurationSeconds, 0],
    [() => DurationSeconds, 0],
  ]
);
export var RouteEmissionType = struct(
  n0,
  _RETo,
  0,
  [_CEC, _Ty],
  [
    [() => SensitiveString, 0],
    [() => SensitiveString, 0],
  ]
);
export var RouteEnterHighwayStepDetails = struct(
  n0,
  _REHSD,
  0,
  [_In, _SDt, _TA, _TI],
  [[() => LocalizedStringList, 0], [() => RouteSteeringDirection, 0], 1, [() => RouteTurnIntensity, 0]]
);
export var RouteExclusionOptions = struct(n0, _REO, 0, [_Cou], [[() => CountryCodeList, 0]]);
export var RouteExitStepDetails = struct(
  n0,
  _RESD,
  0,
  [_In, _RE, _SDt, _TA, _TI],
  [
    [() => LocalizedStringList, 0],
    [() => SensitiveInteger, 0],
    [() => RouteSteeringDirection, 0],
    1,
    [() => RouteTurnIntensity, 0],
  ]
);
export var RouteFerryAfterTravelStep = struct(
  n0,
  _RFATS,
  0,
  [_Du, _Ins, _Ty],
  [
    [() => DurationSeconds, 0],
    [() => SensitiveString, 0],
    [() => RouteFerryAfterTravelStepType, 0],
  ]
);
export var RouteFerryArrival = struct(
  n0,
  _RFA,
  0,
  [_Pl, _Ti],
  [
    [() => RouteFerryPlace, 0],
    [() => TimestampWithTimezoneOffset, 0],
  ]
);
export var RouteFerryBeforeTravelStep = struct(
  n0,
  _RFBTS,
  0,
  [_Du, _Ins, _Ty],
  [
    [() => DurationSeconds, 0],
    [() => SensitiveString, 0],
    [() => RouteFerryBeforeTravelStepType, 0],
  ]
);
export var RouteFerryDeparture = struct(
  n0,
  _RFD,
  0,
  [_Pl, _Ti],
  [
    [() => RouteFerryPlace, 0],
    [() => TimestampWithTimezoneOffset, 0],
  ]
);
export var RouteFerryLegDetails = struct(
  n0,
  _RFLD,
  0,
  [_ATS, _Arr, _BTS, _Dep, _N, _PTW, _RN, _Spa, _Su, _TS],
  [
    [() => RouteFerryAfterTravelStepList, 0],
    [() => RouteFerryArrival, 0],
    [() => RouteFerryBeforeTravelStepList, 0],
    [() => RouteFerryDeparture, 0],
    () => RouteFerryNoticeList,
    [() => RoutePassThroughWaypointList, 0],
    [() => SensitiveString, 0],
    [() => RouteFerrySpanList, 0],
    [() => RouteFerrySummary, 0],
    [() => RouteFerryTravelStepList, 0],
  ]
);
export var RouteFerryNotice = struct(n0, _RFN, 0, [_Cod, _Im], [0, 0]);
export var RouteFerryOverviewSummary = struct(
  n0,
  _RFOS,
  0,
  [_Di, _Du],
  [
    [() => DistanceMeters, 0],
    [() => DurationSeconds, 0],
  ]
);
export var RouteFerryPlace = struct(
  n0,
  _RFP,
  0,
  [_Na, _OP, _Pos, _WI],
  [
    [() => SensitiveString, 0],
    [() => Position23, 0],
    [() => Position23, 0],
    [() => SensitiveInteger, 0],
  ]
);
export var RouteFerrySpan = struct(
  n0,
  _RFS,
  0,
  [_Coun, _Di, _Du, _GO, _Nam, _Re],
  [
    [() => CountryCode3, 0],
    [() => DistanceMeters, 0],
    [() => DurationSeconds, 0],
    1,
    [() => LocalizedStringList, 0],
    [() => SensitiveString, 0],
  ]
);
export var RouteFerrySummary = struct(
  n0,
  _RFSo,
  0,
  [_Ov, _TO],
  [
    [() => RouteFerryOverviewSummary, 0],
    [() => RouteFerryTravelOnlySummary, 0],
  ]
);
export var RouteFerryTravelOnlySummary = struct(n0, _RFTOS, 0, [_Du], [[() => DurationSeconds, 0]]);
export var RouteFerryTravelStep = struct(
  n0,
  _RFTS,
  0,
  [_Di, _Du, _GO, _Ins, _Ty],
  [
    [() => DistanceMeters, 0],
    [() => DurationSeconds, 0],
    1,
    [() => SensitiveString, 0],
    [() => RouteFerryTravelStepType, 0],
  ]
);
export var RouteKeepStepDetails = struct(
  n0,
  _RKSD,
  0,
  [_In, _SDt, _TA, _TI],
  [[() => LocalizedStringList, 0], [() => RouteSteeringDirection, 0], 1, [() => RouteTurnIntensity, 0]]
);
export var RouteLeg = struct(
  n0,
  _RL,
  0,
  [_FLD, _Ge, _La, _PLD, _TM, _Ty, _VLD],
  [
    [() => RouteFerryLegDetails, 0],
    [() => RouteLegGeometry, 0],
    0,
    [() => RoutePedestrianLegDetails, 0],
    [() => RouteLegTravelMode, 0],
    [() => RouteLegType, 0],
    [() => RouteVehicleLegDetails, 0],
  ]
);
export var RouteLegGeometry = struct(
  n0,
  _RLG,
  0,
  [_LS, _P],
  [
    [() => LineString, 0],
    [() => Polyline, 0],
  ]
);
export var RouteMajorRoadLabel = struct(
  n0,
  _RMRL,
  0,
  [_RNo, _RNou],
  [
    [() => LocalizedString, 0],
    [() => RouteNumber, 0],
  ]
);
export var RouteMatchingOptions = struct(
  n0,
  _RMO,
  0,
  [_NH, _ORT, _Ra, _S],
  [[() => SensitiveString, 0], [() => DistanceMeters, 0], [() => DistanceMeters, 0], 0]
);
export var RouteMatrixAllowOptions = struct(
  n0,
  _RMAO,
  8,
  [_Ho, _Hov],
  [
    [() => SensitiveBoolean, 0],
    [() => SensitiveBoolean, 0],
  ]
);
export var RouteMatrixAutoCircle = struct(
  n0,
  _RMAC,
  0,
  [_Mar, _MRa],
  [
    [() => DistanceMeters, 0],
    [() => DistanceMeters, 0],
  ]
);
export var RouteMatrixAvoidanceArea = struct(n0, _RMAA, 0, [_Ge], [[() => RouteMatrixAvoidanceAreaGeometry, 0]]);
export var RouteMatrixAvoidanceAreaGeometry = struct(
  n0,
  _RMAAG,
  0,
  [_BB, _Po, _PP],
  [
    [() => BoundingBox, 0],
    [() => LinearRings, 0],
    [() => PolylineRingList, 0],
  ]
);
export var RouteMatrixAvoidanceOptions = struct(
  n0,
  _RMAOo,
  0,
  [_Ar, _CST, _CAH, _DR, _F, _TR, _TTo, _TRTr, _Tu, _UT, _ZC],
  [
    [() => RouteMatrixAvoidanceAreaList, 0],
    [() => SensitiveBoolean, 0],
    [() => SensitiveBoolean, 0],
    [() => SensitiveBoolean, 0],
    [() => SensitiveBoolean, 0],
    [() => SensitiveBoolean, 0],
    [() => SensitiveBoolean, 0],
    [() => TruckRoadTypeList, 0],
    [() => SensitiveBoolean, 0],
    [() => SensitiveBoolean, 0],
    [() => RouteMatrixAvoidanceZoneCategoryList, 0],
  ]
);
export var RouteMatrixAvoidanceZoneCategory = struct(n0, _RMAZC, 0, [_Ca], [[() => RouteMatrixZoneCategory, 0]]);
export var RouteMatrixBoundary = struct(
  n0,
  _RMB,
  0,
  [_Ge, _Un],
  [
    [() => RouteMatrixBoundaryGeometry, 0],
    [() => SensitiveBoolean, 0],
  ]
);
export var RouteMatrixBoundaryGeometry = struct(
  n0,
  _RMBG,
  0,
  [_ACu, _C, _BB, _Po],
  [
    [() => RouteMatrixAutoCircle, 0],
    [() => Circle, 0],
    [() => BoundingBox, 0],
    [() => LinearRings, 0],
  ]
);
export var RouteMatrixCarOptions = struct(
  n0,
  _RMCO,
  0,
  [_LP, _MS, _Oc],
  [
    [() => RouteMatrixVehicleLicensePlate, 0],
    [() => SpeedKilometersPerHour, 0],
    [() => SensitiveInteger, 0],
  ]
);
export var RouteMatrixDestination = struct(
  n0,
  _RMD,
  0,
  [_Op, _Pos],
  [
    [() => RouteMatrixDestinationOptions, 0],
    [() => Position, 0],
  ]
);
export var RouteMatrixDestinationOptions = struct(
  n0,
  _RMDO,
  0,
  [_AAFD, _H, _Ma, _SOS],
  [
    [() => DistanceMeters, 0],
    [() => Heading, 0],
    [() => RouteMatrixMatchingOptions, 0],
    [() => RouteMatrixSideOfStreetOptions, 0],
  ]
);
export var RouteMatrixEntry = struct(
  n0,
  _RME,
  0,
  [_Di, _Du, _Er],
  [[() => DistanceMeters, 0], [() => DurationSeconds, 0], 0]
);
export var RouteMatrixExclusionOptions = struct(n0, _RMEO, 0, [_Cou], [[() => CountryCodeList, 0]]);
export var RouteMatrixMatchingOptions = struct(
  n0,
  _RMMO,
  0,
  [_NH, _ORT, _Ra, _S],
  [[() => SensitiveString, 0], [() => DistanceMeters, 0], [() => DistanceMeters, 0], 0]
);
export var RouteMatrixOrigin = struct(
  n0,
  _RMOo,
  0,
  [_Op, _Pos],
  [
    [() => RouteMatrixOriginOptions, 0],
    [() => Position, 0],
  ]
);
export var RouteMatrixOriginOptions = struct(
  n0,
  _RMOO,
  0,
  [_AAFD, _H, _Ma, _SOS],
  [
    [() => DistanceMeters, 0],
    [() => Heading, 0],
    [() => RouteMatrixMatchingOptions, 0],
    [() => RouteMatrixSideOfStreetOptions, 0],
  ]
);
export var RouteMatrixScooterOptions = struct(
  n0,
  _RMSO,
  0,
  [_LP, _MS, _Oc],
  [
    [() => RouteMatrixVehicleLicensePlate, 0],
    [() => SpeedKilometersPerHour, 0],
    [() => SensitiveInteger, 0],
  ]
);
export var RouteMatrixSideOfStreetOptions = struct(n0, _RMSOSO, 0, [_Pos, _UW], [[() => Position, 0], 0]);
export var RouteMatrixTrafficOptions = struct(n0, _RMTO, 0, [_FETO, _U], [[() => DurationSeconds, 0], 0]);
export var RouteMatrixTrailerOptions = struct(n0, _RMTOo, 0, [_TC], [[() => SensitiveInteger, 0]]);
export var RouteMatrixTravelModeOptions = struct(
  n0,
  _RMTMO,
  0,
  [_Car, _Sc, _Tru],
  [
    [() => RouteMatrixCarOptions, 0],
    [() => RouteMatrixScooterOptions, 0],
    [() => RouteMatrixTruckOptions, 0],
  ]
);
export var RouteMatrixTruckOptions = struct(
  n0,
  _RMTOou,
  0,
  [_AC, _GW, _HC, _He, _KL, _Le, _LP, _MS, _Oc, _PCa, _Tra, _TTr, _TRC, _WPA, _WPAG, _Wi],
  [
    [() => SensitiveInteger, 0],
    [() => WeightKilograms, 0],
    [() => RouteMatrixHazardousCargoTypeList, 0],
    [() => DimensionCentimeters, 0],
    [() => DimensionCentimeters, 0],
    [() => DimensionCentimeters, 0],
    [() => RouteMatrixVehicleLicensePlate, 0],
    [() => SpeedKilometersPerHour, 0],
    [() => SensitiveInteger, 0],
    [() => WeightKilograms, 0],
    [() => RouteMatrixTrailerOptions, 0],
    [() => RouteMatrixTruckType, 0],
    [() => TunnelRestrictionCode, 0],
    [() => WeightKilograms, 0],
    [() => WeightPerAxleGroup, 0],
    [() => DimensionCentimeters, 0],
  ]
);
export var RouteMatrixVehicleLicensePlate = struct(n0, _RMVLP, 8, [_LC], [0]);
export var RouteNoticeDetailRange = struct(n0, _RNDR, 0, [_Mi, _Max], [1, 1]);
export var RouteNumber = struct(
  n0,
  _RNou,
  0,
  [_Dir, _La, _V],
  [[() => RouteDirection, 0], 0, [() => SensitiveString, 0]]
);
export var RouteOriginOptions = struct(
  n0,
  _ROO,
  0,
  [_AAFD, _AUT, _H, _Ma, _SOS],
  [
    [() => DistanceMeters, 0],
    [() => SensitiveBoolean, 0],
    [() => Heading, 0],
    [() => RouteMatchingOptions, 0],
    [() => RouteSideOfStreetOptions, 0],
  ]
);
export var RoutePassThroughPlace = struct(
  n0,
  _RPTP,
  0,
  [_OP, _Pos, _WI],
  [
    [() => Position23, 0],
    [() => Position23, 0],
    [() => SensitiveInteger, 0],
  ]
);
export var RoutePassThroughWaypoint = struct(n0, _RPTW, 0, [_GO, _Pl], [1, [() => RoutePassThroughPlace, 0]]);
export var RoutePedestrianArrival = struct(
  n0,
  _RPA,
  0,
  [_Pl, _Ti],
  [
    [() => RoutePedestrianPlace, 0],
    [() => TimestampWithTimezoneOffset, 0],
  ]
);
export var RoutePedestrianDeparture = struct(
  n0,
  _RPD,
  0,
  [_Pl, _Ti],
  [
    [() => RoutePedestrianPlace, 0],
    [() => TimestampWithTimezoneOffset, 0],
  ]
);
export var RoutePedestrianLegDetails = struct(
  n0,
  _RPLD,
  0,
  [_Arr, _Dep, _N, _PTW, _Spa, _Su, _TS],
  [
    [() => RoutePedestrianArrival, 0],
    [() => RoutePedestrianDeparture, 0],
    () => RoutePedestrianNoticeList,
    [() => RoutePassThroughWaypointList, 0],
    [() => RoutePedestrianSpanList, 0],
    [() => RoutePedestrianSummary, 0],
    [() => RoutePedestrianTravelStepList, 0],
  ]
);
export var RoutePedestrianNotice = struct(n0, _RPN, 0, [_Cod, _Im], [0, 0]);
export var RoutePedestrianOptions = struct(n0, _RPO, 0, [_Sp], [[() => SpeedKilometersPerHour, 0]]);
export var RoutePedestrianOverviewSummary = struct(
  n0,
  _RPOS,
  0,
  [_Di, _Du],
  [
    [() => DistanceMeters, 0],
    [() => DurationSeconds, 0],
  ]
);
export var RoutePedestrianPlace = struct(
  n0,
  _RPP,
  0,
  [_Na, _OP, _Pos, _SOS, _WI],
  [
    [() => SensitiveString, 0],
    [() => Position23, 0],
    [() => Position23, 0],
    [() => RouteSideOfStreet, 0],
    [() => SensitiveInteger, 0],
  ]
);
export var RoutePedestrianSpan = struct(
  n0,
  _RPS,
  0,
  [_BCD, _Coun, _Di, _Du, _DSy, _FC, _GO, _Inc, _Nam, _PA, _Re, _RA, _RNout, _SL, _TD],
  [
    [() => DurationSeconds, 0],
    [() => CountryCode3, 0],
    [() => DistanceMeters, 0],
    [() => DurationSeconds, 0],
    [() => RouteSpanDynamicSpeedDetails, 0],
    [() => SensitiveInteger, 0],
    1,
    64 | 1,
    [() => LocalizedStringList, 0],
    [() => RouteSpanPedestrianAccessAttributeList, 0],
    [() => SensitiveString, 0],
    [() => RouteSpanRoadAttributeList, 0],
    [() => RouteNumberList, 0],
    [() => RouteSpanSpeedLimitDetails, 0],
    [() => DurationSeconds, 0],
  ]
);
export var RoutePedestrianSummary = struct(
  n0,
  _RPSo,
  0,
  [_Ov, _TO],
  [
    [() => RoutePedestrianOverviewSummary, 0],
    [() => RoutePedestrianTravelOnlySummary, 0],
  ]
);
export var RoutePedestrianTravelOnlySummary = struct(n0, _RPTOS, 0, [_Du], [[() => DurationSeconds, 0]]);
export var RoutePedestrianTravelStep = struct(
  n0,
  _RPTS,
  0,
  [_CSD, _CR, _Di, _Du, _EN, _GO, _Ins, _KSD, _NR, _RESDo, _RESDou, _RPSD, _Si, _TSD, _Ty],
  [
    [() => RouteContinueStepDetails, 0],
    [() => RouteRoad, 0],
    [() => DistanceMeters, 0],
    [() => DurationSeconds, 0],
    [() => LocalizedStringList, 0],
    1,
    [() => SensitiveString, 0],
    [() => RouteKeepStepDetails, 0],
    [() => RouteRoad, 0],
    [() => RouteRoundaboutEnterStepDetails, 0],
    [() => RouteRoundaboutExitStepDetails, 0],
    [() => RouteRoundaboutPassStepDetails, 0],
    [() => RouteSignpost, 0],
    [() => RouteTurnStepDetails, 0],
    [() => RoutePedestrianTravelStepType, 0],
  ]
);
export var RouteRampStepDetails = struct(
  n0,
  _RRSD,
  0,
  [_In, _SDt, _TA, _TI],
  [[() => LocalizedStringList, 0], [() => RouteSteeringDirection, 0], 1, [() => RouteTurnIntensity, 0]]
);
export var RouteResponseNotice = struct(n0, _RRN, 0, [_Cod, _Im], [0, 0]);
export var RouteRoad = struct(
  n0,
  _RR,
  0,
  [_RNo, _RNou, _Tow, _Ty],
  [
    [() => LocalizedStringList, 0],
    [() => RouteNumberList, 0],
    [() => LocalizedStringList, 0],
    [() => RouteRoadType, 0],
  ]
);
export var RouteRoundaboutEnterStepDetails = struct(
  n0,
  _RRESD,
  0,
  [_In, _SDt, _TA, _TI],
  [[() => LocalizedStringList, 0], [() => RouteSteeringDirection, 0], 1, [() => RouteTurnIntensity, 0]]
);
export var RouteRoundaboutExitStepDetails = struct(
  n0,
  _RRESDo,
  0,
  [_In, _RE, _RAo, _SDt],
  [[() => LocalizedStringList, 0], [() => SensitiveInteger, 0], 1, [() => RouteSteeringDirection, 0]]
);
export var RouteRoundaboutPassStepDetails = struct(
  n0,
  _RRPSD,
  0,
  [_In, _SDt, _TA, _TI],
  [[() => LocalizedStringList, 0], [() => RouteSteeringDirection, 0], 1, [() => RouteTurnIntensity, 0]]
);
export var RouteScooterOptions = struct(
  n0,
  _RSO,
  0,
  [_ET, _LP, _MS, _Oc],
  [
    [() => RouteEngineType, 0],
    [() => RouteVehicleLicensePlate, 0],
    [() => SpeedKilometersPerHour, 0],
    [() => SensitiveInteger, 0],
  ]
);
export var RouteSideOfStreetOptions = struct(n0, _RSOSO, 0, [_Pos, _UW], [[() => Position, 0], 0]);
export var RouteSignpost = struct(n0, _RS, 0, [_Lab], [[() => RouteSignpostLabelList, 0]]);
export var RouteSignpostLabel = struct(
  n0,
  _RSL,
  0,
  [_RNou, _Te],
  [
    [() => RouteNumber, 0],
    [() => LocalizedString, 0],
  ]
);
export var RouteSpanDynamicSpeedDetails = struct(
  n0,
  _RSDSD,
  0,
  [_BCS, _TDu, _TSy],
  [
    [() => SpeedKilometersPerHour, 0],
    [() => DurationSeconds, 0],
    [() => SpeedKilometersPerHour, 0],
  ]
);
export var RouteSpanSpeedLimitDetails = struct(
  n0,
  _RSSLD,
  0,
  [_MS, _Unl],
  [
    [() => SpeedKilometersPerHour, 0],
    [() => SensitiveBoolean, 0],
  ]
);
export var RouteSummary = struct(
  n0,
  _RSo,
  0,
  [_Di, _Du, _To],
  [
    [() => DistanceMeters, 0],
    [() => DurationSeconds, 0],
    [() => RouteTollSummary, 0],
  ]
);
export var RouteToll = struct(
  n0,
  _RT,
  0,
  [_Coun, _PS, _Rat, _Sy],
  [[() => CountryCode3, 0], [() => RouteTollPaymentSiteList, 0], [() => RouteTollRateList, 0], 64 | 1]
);
export var RouteTollOptions = struct(
  n0,
  _RTO,
  0,
  [_ATl, _AV, _Cu, _ETm, _VC],
  [
    [() => SensitiveBoolean, 0],
    [() => SensitiveBoolean, 0],
    0,
    [() => RouteEmissionType, 0],
    [() => RouteTollVehicleCategory, 0],
  ]
);
export var RouteTollPass = struct(
  n0,
  _RTP,
  0,
  [_IRT, _SPe, _TCr, _TCri, _VP],
  [
    [() => SensitiveBoolean, 0],
    [() => SensitiveBoolean, 0],
    [() => SensitiveInteger, 0],
    [() => SensitiveInteger, 0],
    [() => RouteTollPassValidityPeriod, 0],
  ]
);
export var RouteTollPassValidityPeriod = struct(
  n0,
  _RTPVP,
  0,
  [_Pe, _PCe],
  [
    [() => RouteTollPassValidityPeriodType, 0],
    [() => SensitiveInteger, 0],
  ]
);
export var RouteTollPaymentSite = struct(n0, _RTPS, 0, [_Na, _Pos], [0, [() => Position23, 0]]);
export var RouteTollPrice = struct(
  n0,
  _RTPo,
  0,
  [_Cu, _Es, _PD, _Ran, _RV, _V],
  [
    0,
    [() => SensitiveBoolean, 0],
    [() => DurationSeconds, 0],
    [() => SensitiveBoolean, 0],
    [() => RouteTollPriceValueRange, 0],
    [() => SensitiveDouble, 0],
  ]
);
export var RouteTollPriceSummary = struct(
  n0,
  _RTPSo,
  0,
  [_Cu, _Es, _Ran, _RV, _V],
  [
    0,
    [() => SensitiveBoolean, 0],
    [() => SensitiveBoolean, 0],
    [() => RouteTollPriceValueRange, 0],
    [() => SensitiveDouble, 0],
  ]
);
export var RouteTollPriceValueRange = struct(
  n0,
  _RTPVR,
  0,
  [_Mi, _Max],
  [
    [() => SensitiveDouble, 0],
    [() => SensitiveDouble, 0],
  ]
);
export var RouteTollRate = struct(
  n0,
  _RTR,
  0,
  [_ATp, _CP, _Id, _LPo, _Na, _Pa, _PM, _Tran],
  [
    [() => SensitiveString, 0],
    [() => RouteTollPrice, 0],
    [() => SensitiveString, 0],
    [() => RouteTollPrice, 0],
    [() => SensitiveString, 0],
    [() => RouteTollPass, 0],
    [() => RouteTollPaymentMethodList, 0],
    [() => RouteTransponderList, 0],
  ]
);
export var RouteTollSummary = struct(n0, _RTS, 0, [_Tot], [[() => RouteTollPriceSummary, 0]]);
export var RouteTollSystem = struct(n0, _RTSo, 0, [_Na], [[() => SensitiveString, 0]]);
export var RouteTrafficOptions = struct(n0, _RTOo, 0, [_FETO, _U], [[() => DurationSeconds, 0], 0]);
export var RouteTrailerOptions = struct(
  n0,
  _RTOou,
  0,
  [_AC, _TC],
  [
    [() => SensitiveInteger, 0],
    [() => SensitiveInteger, 0],
  ]
);
export var RouteTransponder = struct(n0, _RTo, 0, [_SN], [[() => SensitiveString, 0]]);
export var RouteTravelModeOptions = struct(
  n0,
  _RTMO,
  0,
  [_Car, _Ped, _Sc, _Tru],
  [
    [() => RouteCarOptions, 0],
    [() => RoutePedestrianOptions, 0],
    [() => RouteScooterOptions, 0],
    [() => RouteTruckOptions, 0],
  ]
);
export var RouteTruckOptions = struct(
  n0,
  _RTOout,
  0,
  [_AC, _ET, _GW, _HC, _He, _HAFA, _KL, _Le, _LP, _MS, _Oc, _PCa, _TCi, _Tra, _TTr, _TRC, _WPA, _WPAG, _Wi],
  [
    [() => SensitiveInteger, 0],
    [() => RouteEngineType, 0],
    [() => WeightKilograms, 0],
    [() => RouteHazardousCargoTypeList, 0],
    [() => DimensionCentimeters, 0],
    [() => DimensionCentimeters, 0],
    [() => DimensionCentimeters, 0],
    [() => DimensionCentimeters, 0],
    [() => RouteVehicleLicensePlate, 0],
    [() => SpeedKilometersPerHour, 0],
    [() => SensitiveInteger, 0],
    [() => WeightKilograms, 0],
    [() => SensitiveInteger, 0],
    [() => RouteTrailerOptions, 0],
    [() => RouteTruckType, 0],
    [() => TunnelRestrictionCode, 0],
    [() => WeightKilograms, 0],
    [() => WeightPerAxleGroup, 0],
    [() => DimensionCentimeters, 0],
  ]
);
export var RouteTurnStepDetails = struct(
  n0,
  _RTSD,
  0,
  [_In, _SDt, _TA, _TI],
  [[() => LocalizedStringList, 0], [() => RouteSteeringDirection, 0], 1, [() => RouteTurnIntensity, 0]]
);
export var RouteUTurnStepDetails = struct(
  n0,
  _RUTSD,
  0,
  [_In, _SDt, _TA, _TI],
  [[() => LocalizedStringList, 0], [() => RouteSteeringDirection, 0], 1, [() => RouteTurnIntensity, 0]]
);
export var RouteVehicleArrival = struct(
  n0,
  _RVA,
  0,
  [_Pl, _Ti],
  [
    [() => RouteVehiclePlace, 0],
    [() => TimestampWithTimezoneOffset, 0],
  ]
);
export var RouteVehicleDeparture = struct(
  n0,
  _RVD,
  0,
  [_Pl, _Ti],
  [
    [() => RouteVehiclePlace, 0],
    [() => TimestampWithTimezoneOffset, 0],
  ]
);
export var RouteVehicleIncident = struct(
  n0,
  _RVI,
  0,
  [_Des, _ETn, _Se, _ST, _Ty],
  [
    [() => SensitiveString, 0],
    [() => TimestampWithTimezoneOffset, 0],
    [() => RouteVehicleIncidentSeverity, 0],
    [() => TimestampWithTimezoneOffset, 0],
    [() => RouteVehicleIncidentType, 0],
  ]
);
export var RouteVehicleLegDetails = struct(
  n0,
  _RVLD,
  0,
  [_Arr, _Dep, _Inc, _N, _PTW, _Spa, _Su, _To, _TSo, _TS, _TRTr, _Z],
  [
    [() => RouteVehicleArrival, 0],
    [() => RouteVehicleDeparture, 0],
    [() => RouteVehicleIncidentList, 0],
    [() => RouteVehicleNoticeList, 0],
    [() => RoutePassThroughWaypointList, 0],
    [() => RouteVehicleSpanList, 0],
    [() => RouteVehicleSummary, 0],
    [() => RouteTollList, 0],
    [() => RouteTollSystemList, 0],
    [() => RouteVehicleTravelStepList, 0],
    [() => TruckRoadTypeList, 0],
    [() => RouteZoneList, 0],
  ]
);
export var RouteVehicleLicensePlate = struct(n0, _RVLP, 0, [_LC], [[() => SensitiveString, 0]]);
export var RouteVehicleNotice = struct(n0, _RVN, 0, [_Cod, _Det, _Im], [0, [() => RouteVehicleNoticeDetailList, 0], 0]);
export var RouteVehicleNoticeDetail = struct(
  n0,
  _RVND,
  0,
  [_Tit, _VCi],
  [
    [() => SensitiveString, 0],
    [() => RouteViolatedConstraints, 0],
  ]
);
export var RouteVehicleOverviewSummary = struct(
  n0,
  _RVOS,
  0,
  [_BCD, _Di, _Du, _TD],
  [
    [() => DurationSeconds, 0],
    [() => DistanceMeters, 0],
    [() => DurationSeconds, 0],
    [() => DurationSeconds, 0],
  ]
);
export var RouteVehiclePlace = struct(
  n0,
  _RVP,
  0,
  [_Na, _OP, _Pos, _SOS, _WI],
  [
    [() => SensitiveString, 0],
    [() => Position23, 0],
    [() => Position23, 0],
    [() => RouteSideOfStreet, 0],
    [() => SensitiveInteger, 0],
  ]
);
export var RouteVehicleSpan = struct(
  n0,
  _RVS,
  0,
  [
    _BCD,
    _CA,
    _Coun,
    _Di,
    _Du,
    _DSy,
    _FC,
    _Ga,
    _GO,
    _Inc,
    _Nam,
    _N,
    _RC,
    _Re,
    _RA,
    _RNout,
    _SA,
    _SL,
    _TSo,
    _TAr,
    _TRTr,
    _TD,
    _Z,
  ],
  [
    [() => DurationSeconds, 0],
    [() => RouteSpanCarAccessAttributeList, 0],
    [() => CountryCode3, 0],
    [() => DistanceMeters, 0],
    [() => DurationSeconds, 0],
    [() => RouteSpanDynamicSpeedDetails, 0],
    [() => SensitiveInteger, 0],
    [() => RouteSpanGateAttribute, 0],
    1,
    64 | 1,
    [() => LocalizedStringList, 0],
    64 | 1,
    [() => RouteSpanRailwayCrossingAttribute, 0],
    [() => SensitiveString, 0],
    [() => RouteSpanRoadAttributeList, 0],
    [() => RouteNumberList, 0],
    [() => RouteSpanScooterAccessAttributeList, 0],
    [() => RouteSpanSpeedLimitDetails, 0],
    64 | 1,
    [() => RouteSpanTruckAccessAttributeList, 0],
    64 | 1,
    [() => DurationSeconds, 0],
    64 | 1,
  ]
);
export var RouteVehicleSummary = struct(
  n0,
  _RVSo,
  0,
  [_Ov, _TO],
  [
    [() => RouteVehicleOverviewSummary, 0],
    [() => RouteVehicleTravelOnlySummary, 0],
  ]
);
export var RouteVehicleTravelOnlySummary = struct(
  n0,
  _RVTOS,
  0,
  [_BCD, _Du, _TD],
  [
    [() => DurationSeconds, 0],
    [() => DurationSeconds, 0],
    [() => DurationSeconds, 0],
  ]
);
export var RouteVehicleTravelStep = struct(
  n0,
  _RVTS,
  0,
  [
    _CHSD,
    _CSD,
    _CR,
    _Di,
    _Du,
    _EHSD,
    _EN,
    _ESD,
    _GO,
    _Ins,
    _KSD,
    _NR,
    _RSDa,
    _RESDo,
    _RESDou,
    _RPSD,
    _Si,
    _TSD,
    _Ty,
    _UTSD,
  ],
  [
    [() => RouteContinueHighwayStepDetails, 0],
    [() => RouteContinueStepDetails, 0],
    [() => RouteRoad, 0],
    [() => DistanceMeters, 0],
    [() => DurationSeconds, 0],
    [() => RouteEnterHighwayStepDetails, 0],
    [() => LocalizedStringList, 0],
    [() => RouteExitStepDetails, 0],
    1,
    [() => SensitiveString, 0],
    [() => RouteKeepStepDetails, 0],
    [() => RouteRoad, 0],
    [() => RouteRampStepDetails, 0],
    [() => RouteRoundaboutEnterStepDetails, 0],
    [() => RouteRoundaboutExitStepDetails, 0],
    [() => RouteRoundaboutPassStepDetails, 0],
    [() => RouteSignpost, 0],
    [() => RouteTurnStepDetails, 0],
    [() => RouteVehicleTravelStepType, 0],
    [() => RouteUTurnStepDetails, 0],
  ]
);
export var RouteViolatedConstraints = struct(
  n0,
  _RVC,
  0,
  [_AHR, _AC, _HC, _MH, _MKL, _ML, _MPC, _MW, _MWPA, _MWPAG, _MWa, _Oc, _RTe, _TDi, _TC, _TM, _TRT, _TTr, _TRC],
  [
    [() => SensitiveBoolean, 0],
    () => RouteNoticeDetailRange,
    [() => RouteHazardousCargoTypeList, 0],
    [() => DimensionCentimeters, 0],
    [() => DimensionCentimeters, 0],
    [() => DimensionCentimeters, 0],
    [() => WeightKilograms, 0],
    [() => RouteWeightConstraint, 0],
    [() => WeightKilograms, 0],
    [() => WeightPerAxleGroup, 0],
    [() => DimensionCentimeters, 0],
    () => RouteNoticeDetailRange,
    0,
    [() => SensitiveBoolean, 0],
    () => RouteNoticeDetailRange,
    [() => SensitiveBoolean, 0],
    0,
    [() => RouteTruckType, 0],
    [() => TunnelRestrictionCode, 0],
  ]
);
export var RouteWaypoint = struct(
  n0,
  _RW,
  0,
  [_AAFD, _AUT, _H, _Ma, _PT, _Pos, _SOS, _SDto],
  [
    [() => DistanceMeters, 0],
    [() => SensitiveBoolean, 0],
    [() => Heading, 0],
    [() => RouteMatchingOptions, 0],
    [() => SensitiveBoolean, 0],
    [() => Position, 0],
    [() => RouteSideOfStreetOptions, 0],
    [() => DurationSeconds, 0],
  ]
);
export var RouteWeightConstraint = struct(n0, _RWC, 0, [_Ty, _V], [0, [() => WeightKilograms, 0]]);
export var RouteZone = struct(
  n0,
  _RZ,
  0,
  [_Ca, _Na],
  [
    [() => RouteZoneCategory, 0],
    [() => SensitiveString, 0],
  ]
);
export var SnapToRoadsRequest = struct(
  n0,
  _STRR,
  0,
  [_K, _SGF, _SR, _TP, _TM, _TMO],
  [
    [
      () => ApiKey,
      {
        [_hQ]: _k,
      },
    ],
    0,
    [() => DistanceMeters, 0],
    [() => RoadSnapTracePointList, 0],
    0,
    [() => RoadSnapTravelModeOptions, 0],
  ]
);
export var SnapToRoadsResponse = struct(
  n0,
  _STRRn,
  0,
  [_N, _PB, _SG, _SGF, _STP],
  [
    [() => RoadSnapNoticeList, 0],
    [
      0,
      {
        [_hH]: _xagpb,
      },
    ],
    [() => RoadSnapSnappedGeometry, 0],
    0,
    [() => RoadSnapSnappedTracePointList, 0],
  ]
);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M],
  [
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ],

  __ThrottlingException
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _Rea, _FL],
  [
    [
      0,
      {
        [_jN]: _m,
      },
    ],
    [
      0,
      {
        [_jN]: _r,
      },
    ],
    [
      () => ValidationExceptionFieldList,
      {
        [_jN]: _fL,
      },
    ],
  ],

  __ValidationException
);
export var ValidationExceptionField = struct(
  n0,
  _VEF,
  0,
  [_Na, _M],
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
        [_jN]: _m,
      },
    ],
  ]
);
export var WaypointOptimizationAccessHours = struct(
  n0,
  _WOAH,
  0,
  [_Fr, _To_],
  [
    [() => WaypointOptimizationAccessHoursEntry, 0],
    [() => WaypointOptimizationAccessHoursEntry, 0],
  ]
);
export var WaypointOptimizationAccessHoursEntry = struct(
  n0,
  _WOAHE,
  0,
  [_DOW, _TOD],
  [
    [() => DayOfWeek, 0],
    [() => TimeOfDay, 0],
  ]
);
export var WaypointOptimizationAvoidanceArea = struct(
  n0,
  _WOAA,
  0,
  [_Ge],
  [[() => WaypointOptimizationAvoidanceAreaGeometry, 0]]
);
export var WaypointOptimizationAvoidanceAreaGeometry = struct(n0, _WOAAG, 0, [_BB], [[() => BoundingBox, 0]]);
export var WaypointOptimizationAvoidanceOptions = struct(
  n0,
  _WOAO,
  0,
  [_Ar, _CST, _CAH, _DR, _F, _TR, _Tu, _UT],
  [
    [() => WaypointOptimizationAvoidanceAreaList, 0],
    [() => SensitiveBoolean, 0],
    [() => SensitiveBoolean, 0],
    [() => SensitiveBoolean, 0],
    [() => SensitiveBoolean, 0],
    [() => SensitiveBoolean, 0],
    [() => SensitiveBoolean, 0],
    [() => SensitiveBoolean, 0],
  ]
);
export var WaypointOptimizationClusteringOptions = struct(
  n0,
  _WOCO,
  0,
  [_Al, _DDO],
  [
    [() => WaypointOptimizationClusteringAlgorithm, 0],
    [() => WaypointOptimizationDrivingDistanceOptions, 0],
  ]
);
export var WaypointOptimizationConnection = struct(
  n0,
  _WOCa,
  0,
  [_Di, _Fr, _RDe, _To_, _TDr, _WD],
  [[() => DistanceMeters, 0], 0, [() => DurationSeconds, 0], 0, [() => DurationSeconds, 0], [() => DurationSeconds, 0]]
);
export var WaypointOptimizationDestinationOptions = struct(
  n0,
  _WODO,
  0,
  [_AH, _ATpp, _H, _Id, _SDe, _SOS],
  [
    [() => WaypointOptimizationAccessHours, 0],
    [() => TimestampWithTimezoneOffset, 0],
    [() => Heading, 0],
    0,
    [() => DurationSeconds, 0],
    [() => WaypointOptimizationSideOfStreetOptions, 0],
  ]
);
export var WaypointOptimizationDriverOptions = struct(
  n0,
  _WODOa,
  0,
  [_RCe, _RP, _TSTA],
  [
    [() => WaypointOptimizationRestCycles, 0],
    [() => WaypointOptimizationRestProfile, 0],
    [() => WaypointOptimizationServiceTimeTreatment, 0],
  ]
);
export var WaypointOptimizationDrivingDistanceOptions = struct(n0, _WODDO, 0, [_DDr], [[() => DistanceMeters, 0]]);
export var WaypointOptimizationExclusionOptions = struct(n0, _WOEO, 0, [_Cou], [[() => CountryCodeList, 0]]);
export var WaypointOptimizationFailedConstraint = struct(
  n0,
  _WOFC,
  0,
  [_Cons, _Rea],
  [
    [() => WaypointOptimizationConstraint, 0],
    [() => SensitiveString, 0],
  ]
);
export var WaypointOptimizationImpedingWaypoint = struct(
  n0,
  _WOIW,
  0,
  [_FCa, _Id, _Pos],
  [[() => WaypointOptimizationFailedConstraintList, 0], 0, [() => Position, 0]]
);
export var WaypointOptimizationOptimizedWaypoint = struct(
  n0,
  _WOOW,
  0,
  [_AT, _CI, _DT, _Id, _Pos],
  [[() => TimestampWithTimezoneOffset, 0], 1, [() => TimestampWithTimezoneOffset, 0], 0, [() => Position, 0]]
);
export var WaypointOptimizationOriginOptions = struct(n0, _WOOO, 0, [_Id], [0]);
export var WaypointOptimizationPedestrianOptions = struct(n0, _WOPO, 0, [_Sp], [[() => SpeedKilometersPerHour, 0]]);
export var WaypointOptimizationRestCycleDurations = struct(
  n0,
  _WORCD,
  0,
  [_RDe, _WDo],
  [
    [() => DurationSeconds, 0],
    [() => DurationSeconds, 0],
  ]
);
export var WaypointOptimizationRestCycles = struct(
  n0,
  _WORC,
  0,
  [_LCo, _SCh],
  [
    [() => WaypointOptimizationRestCycleDurations, 0],
    [() => WaypointOptimizationRestCycleDurations, 0],
  ]
);
export var WaypointOptimizationRestProfile = struct(n0, _WORP, 0, [_Pr], [[() => SensitiveString, 0]]);
export var WaypointOptimizationSideOfStreetOptions = struct(n0, _WOSOSO, 0, [_Pos, _UW], [[() => Position, 0], 0]);
export var WaypointOptimizationTimeBreakdown = struct(
  n0,
  _WOTB,
  0,
  [_RDe, _SDe, _TDr, _WD],
  [
    [() => DurationSeconds, 0],
    [() => DurationSeconds, 0],
    [() => DurationSeconds, 0],
    [() => DurationSeconds, 0],
  ]
);
export var WaypointOptimizationTrafficOptions = struct(n0, _WOTO, 0, [_U], [0]);
export var WaypointOptimizationTrailerOptions = struct(n0, _WOTOa, 0, [_TC], [[() => SensitiveInteger, 0]]);
export var WaypointOptimizationTravelModeOptions = struct(
  n0,
  _WOTMO,
  0,
  [_Ped, _Tru],
  [
    [() => WaypointOptimizationPedestrianOptions, 0],
    [() => WaypointOptimizationTruckOptions, 0],
  ]
);
export var WaypointOptimizationTruckOptions = struct(
  n0,
  _WOTOay,
  0,
  [_GW, _HC, _He, _Le, _Tra, _TTr, _TRC, _WPA, _Wi],
  [
    [() => WeightKilograms, 0],
    [() => WaypointOptimizationHazardousCargoTypeList, 0],
    [() => DimensionCentimeters, 0],
    [() => DimensionCentimeters, 0],
    [() => WaypointOptimizationTrailerOptions, 0],
    [() => WaypointOptimizationTruckType, 0],
    [() => TunnelRestrictionCode, 0],
    [() => WeightKilograms, 0],
    [() => DimensionCentimeters, 0],
  ]
);
export var WaypointOptimizationWaypoint = struct(
  n0,
  _WOW,
  0,
  [_AH, _ATpp, _B, _H, _Id, _Pos, _SDe, _SOS],
  [
    [() => WaypointOptimizationAccessHours, 0],
    [() => TimestampWithTimezoneOffset, 0],
    64 | 1,
    [() => Heading, 0],
    0,
    [() => Position, 0],
    [() => DurationSeconds, 0],
    [() => WaypointOptimizationSideOfStreetOptions, 0],
  ]
);
export var WeightPerAxleGroup = struct(
  n0,
  _WPAG,
  0,
  [_Sin, _Ta, _Tri, _Q, _Qu],
  [
    [() => WeightKilograms, 0],
    [() => WeightKilograms, 0],
    [() => WeightKilograms, 0],
    [() => WeightKilograms, 0],
    [() => WeightKilograms, 0],
  ]
);
export var BeforeWaypointsList = 64 | 1;

export var BoundingBox = list(n0, _BB, 8, 1);
export var CountryCodeList = list(n0, _CCL, 0, [() => CountryCode, 0]);
export var DistanceThresholdList = list(n0, _DTL, 0, [() => DistanceMeters, 0]);
export var IndexList = 64 | 1;

export var IsolineAvoidanceAreaGeometryList = list(n0, _IAAGL, 0, [() => IsolineAvoidanceAreaGeometry, 0]);
export var IsolineAvoidanceAreaList = list(n0, _IAAL, 0, [() => IsolineAvoidanceArea, 0]);
export var IsolineAvoidanceZoneCategoryList = list(n0, _IAZCL, 0, () => IsolineAvoidanceZoneCategory);
export var IsolineConnectionList = list(n0, _ICL, 0, [() => IsolineConnection, 0]);
export var IsolineHazardousCargoTypeList = list(n0, _IHCTL, 0, [() => IsolineHazardousCargoType, 0]);
export var IsolineList = list(n0, _IL, 0, [() => Isoline, 0]);
export var IsolineShapeGeometryList = list(n0, _ISGL, 0, [() => IsolineShapeGeometry, 0]);
export var LanguageTagList = 64 | 0;

export var LinearRing = list(n0, _LR, 0, [() => Position, 0]);
export var LinearRings = list(n0, _LRi, 0, [() => LinearRing, 0]);
export var LineString = list(n0, _LS, 0, [() => Position, 0]);
export var LocalizedStringList = list(n0, _LSL, 0, [() => LocalizedString, 0]);
export var PolylineRingList = list(n0, _PRL, 0, [() => PolylineRing, 0]);
export var Position = list(n0, _Pos, 8, 1);
export var Position23 = list(n0, _Posi, 8, 1);
export var RoadSnapHazardousCargoTypeList = list(n0, _RSHCTL, 0, [() => RoadSnapHazardousCargoType, 0]);
export var RoadSnapNoticeList = list(n0, _RSNL, 0, [() => RoadSnapNotice, 0]);
export var RoadSnapSnappedTracePointList = list(n0, _RSSTPL, 0, [() => RoadSnapSnappedTracePoint, 0]);
export var RoadSnapTracePointIndexList = list(n0, _RSTPIL, 8, 1);
export var RoadSnapTracePointList = list(n0, _RSTPL, 0, [() => RoadSnapTracePoint, 0]);
export var RouteAvoidanceAreaGeometryList = list(n0, _RAAGL, 0, [() => RouteAvoidanceAreaGeometry, 0]);
export var RouteAvoidanceAreaList = list(n0, _RAAL, 0, [() => RouteAvoidanceArea, 0]);
export var RouteAvoidanceZoneCategoryList = list(n0, _RAZCL, 0, [() => RouteAvoidanceZoneCategory, 0]);
export var RouteDriverScheduleIntervalList = list(n0, _RDSIL, 0, [() => RouteDriverScheduleInterval, 0]);
export var RouteFerryAfterTravelStepList = list(n0, _RFATSL, 0, [() => RouteFerryAfterTravelStep, 0]);
export var RouteFerryBeforeTravelStepList = list(n0, _RFBTSL, 0, [() => RouteFerryBeforeTravelStep, 0]);
export var RouteFerryNoticeList = list(n0, _RFNL, 0, () => RouteFerryNotice);
export var RouteFerrySpanList = list(n0, _RFSL, 0, [() => RouteFerrySpan, 0]);
export var RouteFerryTravelStepList = list(n0, _RFTSL, 0, [() => RouteFerryTravelStep, 0]);
export var RouteHazardousCargoTypeList = list(n0, _RHCTL, 0, [() => RouteHazardousCargoType, 0]);
export var RouteLegAdditionalFeatureList = list(n0, _RLAFL, 0, [() => RouteLegAdditionalFeature, 0]);
export var RouteLegList = list(n0, _RLL, 0, [() => RouteLeg, 0]);
export var RouteList = list(n0, _RLo, 0, [() => Route, 0]);
export var RouteMajorRoadLabelList = list(n0, _RMRLL, 0, [() => RouteMajorRoadLabel, 0]);
export var RouteMatrix = list(n0, _RM, 0, [() => RouteMatrixRow, 0]);
export var RouteMatrixAvoidanceAreaList = list(n0, _RMAAL, 0, [() => RouteMatrixAvoidanceArea, 0]);
export var RouteMatrixAvoidanceZoneCategoryList = list(n0, _RMAZCL, 0, [() => RouteMatrixAvoidanceZoneCategory, 0]);
export var RouteMatrixDestinationList = list(n0, _RMDL, 0, [() => RouteMatrixDestination, 0]);
export var RouteMatrixHazardousCargoTypeList = list(n0, _RMHCTL, 0, [() => RouteMatrixHazardousCargoType, 0]);
export var RouteMatrixOriginList = list(n0, _RMOL, 0, [() => RouteMatrixOrigin, 0]);
export var RouteMatrixRow = list(n0, _RMR, 0, [() => RouteMatrixEntry, 0]);
export var RouteNumberList = list(n0, _RNL, 0, [() => RouteNumber, 0]);
export var RoutePassThroughWaypointList = list(n0, _RPTWL, 0, [() => RoutePassThroughWaypoint, 0]);
export var RoutePedestrianNoticeList = list(n0, _RPNL, 0, () => RoutePedestrianNotice);
export var RoutePedestrianSpanList = list(n0, _RPSL, 0, [() => RoutePedestrianSpan, 0]);
export var RoutePedestrianTravelStepList = list(n0, _RPTSL, 0, [() => RoutePedestrianTravelStep, 0]);
export var RouteResponseNoticeList = list(n0, _RRNL, 0, () => RouteResponseNotice);
export var RouteSignpostLabelList = list(n0, _RSLL, 0, [() => RouteSignpostLabel, 0]);
export var RouteSpanAdditionalFeatureList = 64 | 0;

export var RouteSpanCarAccessAttributeList = list(n0, _RSCAAL, 0, [() => RouteSpanCarAccessAttribute, 0]);
export var RouteSpanPedestrianAccessAttributeList = list(n0, _RSPAAL, 0, [() => RouteSpanPedestrianAccessAttribute, 0]);
export var RouteSpanRoadAttributeList = list(n0, _RSRAL, 0, [() => RouteSpanRoadAttribute, 0]);
export var RouteSpanScooterAccessAttributeList = list(n0, _RSSAAL, 0, [() => RouteSpanScooterAccessAttribute, 0]);
export var RouteSpanTruckAccessAttributeList = list(n0, _RSTAAL, 0, [() => RouteSpanTruckAccessAttribute, 0]);
export var RouteTollList = list(n0, _RTL, 0, [() => RouteToll, 0]);
export var RouteTollPaymentMethodList = list(n0, _RTPML, 0, [() => RouteTollPaymentMethod, 0]);
export var RouteTollPaymentSiteList = list(n0, _RTPSL, 0, [() => RouteTollPaymentSite, 0]);
export var RouteTollRateList = list(n0, _RTRL, 0, [() => RouteTollRate, 0]);
export var RouteTollSystemList = list(n0, _RTSL, 0, [() => RouteTollSystem, 0]);
export var RouteTransponderList = list(n0, _RTLo, 0, [() => RouteTransponder, 0]);
export var RouteVehicleIncidentList = list(n0, _RVIL, 0, [() => RouteVehicleIncident, 0]);
export var RouteVehicleNoticeDetailList = list(n0, _RVNDL, 0, [() => RouteVehicleNoticeDetail, 0]);
export var RouteVehicleNoticeList = list(n0, _RVNL, 0, [() => RouteVehicleNotice, 0]);
export var RouteVehicleSpanList = list(n0, _RVSL, 0, [() => RouteVehicleSpan, 0]);
export var RouteVehicleTravelStepList = list(n0, _RVTSL, 0, [() => RouteVehicleTravelStep, 0]);
export var RouteWaypointList = list(n0, _RWL, 0, [() => RouteWaypoint, 0]);
export var RouteZoneList = list(n0, _RZL, 0, [() => RouteZone, 0]);
export var TimeThresholdList = list(n0, _TTL, 0, [() => DurationSeconds, 0]);
export var TruckRoadTypeList = list(n0, _TRTL, 0, [() => TruckRoadType, 0]);
export var ValidationExceptionFieldList = list(n0, _VEFL, 0, [() => ValidationExceptionField, 0]);
export var WaypointOptimizationAvoidanceAreaList = list(n0, _WOAAL, 0, [() => WaypointOptimizationAvoidanceArea, 0]);
export var WaypointOptimizationConnectionList = list(n0, _WOCL, 0, [() => WaypointOptimizationConnection, 0]);
export var WaypointOptimizationFailedConstraintList = list(n0, _WOFCL, 0, [
  () => WaypointOptimizationFailedConstraint,
  0,
]);
export var WaypointOptimizationHazardousCargoTypeList = list(n0, _WOHCTL, 0, [
  () => WaypointOptimizationHazardousCargoType,
  0,
]);
export var WaypointOptimizationImpedingWaypointList = list(n0, _WOIWL, 0, [
  () => WaypointOptimizationImpedingWaypoint,
  0,
]);
export var WaypointOptimizationOptimizedWaypointList = list(n0, _WOOWL, 0, [
  () => WaypointOptimizationOptimizedWaypoint,
  0,
]);
export var WaypointOptimizationWaypointList = list(n0, _WOWL, 0, [() => WaypointOptimizationWaypoint, 0]);
export var CalculateIsolines = op(
  n0,
  _CIa,
  {
    [_h]: ["POST", "/isolines", 200],
  },
  () => CalculateIsolinesRequest,
  () => CalculateIsolinesResponse
);
export var CalculateRouteMatrix = op(
  n0,
  _CRM,
  {
    [_h]: ["POST", "/route-matrix", 200],
  },
  () => CalculateRouteMatrixRequest,
  () => CalculateRouteMatrixResponse
);
export var CalculateRoutes = op(
  n0,
  _CRa,
  {
    [_h]: ["POST", "/routes", 200],
  },
  () => CalculateRoutesRequest,
  () => CalculateRoutesResponse
);
export var OptimizeWaypoints = op(
  n0,
  _OWp,
  {
    [_h]: ["POST", "/optimize-waypoints", 200],
  },
  () => OptimizeWaypointsRequest,
  () => OptimizeWaypointsResponse
);
export var SnapToRoads = op(
  n0,
  _STR,
  {
    [_h]: ["POST", "/snap-to-roads", 200],
  },
  () => SnapToRoadsRequest,
  () => SnapToRoadsResponse
);
