// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _ar,
  _CAr,
  _cAr,
  _CO,
  _cO,
  _CSM,
  _CSMR,
  _CSMRr,
  _CWAT,
  _cWAT,
  _CWATG,
  _cWATG,
  _CWATGI,
  _cWATGI,
  _CWATGIl,
  _cWATGIl,
  _CWATGIlo,
  _cWATGIlo,
  _CWATGS,
  _CWATS,
  _DEPA,
  _dEPA,
  _Des,
  _des,
  _Desc,
  _desc,
  _DRr,
  _dRr,
  _DTA,
  _dTA,
  _DUe,
  _dUe,
  _EBRT,
  _eBRT,
  _EBRTG,
  _eBRTG,
  _EBRTGI,
  _eBRTGI,
  _EBRTGIv,
  _eBRTGIv,
  _EBRTGIve,
  _eBRTGIve,
  _EBRTGS,
  _EBRTS,
  _EM,
  _eM,
  _EP,
  _eP,
  _ETC,
  _eTC,
  _ETv,
  _eTv,
  _FMRM,
  _fMRM,
  _FRo,
  _fRo,
  _GI,
  _gI,
  _GIr,
  _gIr,
  _GSM,
  _GSMR,
  _GSMRe,
  _hQ,
  _ht,
  _I,
  _i,
  _Id,
  _iTd,
  _jN,
  _LCWAT,
  _LCWATG,
  _LCWATGR,
  _LCWATGRi,
  _LCWATR,
  _LCWATRi,
  _LDA,
  _lDA,
  _LEBRT,
  _LEBRTG,
  _LEBRTGR,
  _LEBRTGRi,
  _LEBRTR,
  _LEBRTRi,
  _lOCWATGS,
  _lOCWATS,
  _lOEBRTGS,
  _lOEBRTS,
  _lOMRN,
  _lOSMS,
  _LSM,
  _LSMD,
  _lSMD,
  _LSMR,
  _LSMRi,
  _MA,
  _mA,
  _MCPD,
  _mCPD,
  _MD,
  _mD,
  _MDS,
  _mDS,
  _MN,
  _mN,
  _MR,
  _mR,
  _MRe,
  _MRM,
  _mRM,
  _MRN,
  _N,
  _n,
  _NT,
  _nT,
  _Pe,
  _pe,
  _RIe,
  _rIe,
  _Sc,
  _sc,
  _SDMD,
  _SDMDR,
  _SDMDRt,
  _SMD,
  _SMDR,
  _SMDRt,
  _SMDt,
  _SMI,
  _SMi,
  _sMI,
  _sMi,
  _SMS,
  _So,
  _so,
  _Sta,
  _sta,
  _Stat,
  _stat,
  _SUSM,
  _SUSMR,
  _SUSMRt,
  _Ta,
  _ta,
  _TC,
  _tC,
  _Th,
  _th,
  _TMD,
  _tMD,
  _TRT,
  _tRT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CloudWatchAlarmTemplateGroupSummary = struct(
  n0,
  _CWATGS,
  0,
  [_Ar, _CAr, _Desc, _I, _MA, _N, _Ta, _TC],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      5,
      {
        [_jN]: _cAr,
      },
    ],
    [
      0,
      {
        [_jN]: _desc,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      5,
      {
        [_jN]: _mA,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      1,
      {
        [_jN]: _tC,
      },
    ],
  ]
);
export var CloudWatchAlarmTemplateSummary = struct(
  n0,
  _CWATS,
  0,
  [_Ar, _CO, _CAr, _DTA, _Desc, _EP, _GI, _I, _MN, _MA, _N, _Pe, _Sta, _Ta, _TRT, _Th, _TMD],
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
        [_jN]: _cO,
      },
    ],
    [
      5,
      {
        [_jN]: _cAr,
      },
    ],
    [
      1,
      {
        [_jN]: _dTA,
      },
    ],
    [
      0,
      {
        [_jN]: _desc,
      },
    ],
    [
      1,
      {
        [_jN]: _eP,
      },
    ],
    [
      0,
      {
        [_jN]: _gI,
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
        [_jN]: _mN,
      },
    ],
    [
      5,
      {
        [_jN]: _mA,
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
        [_jN]: _pe,
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
    [
      0,
      {
        [_jN]: _tRT,
      },
    ],
    [
      1,
      {
        [_jN]: _th,
      },
    ],
    [
      0,
      {
        [_jN]: _tMD,
      },
    ],
  ]
);
export var CreateSignalMapRequest = struct(
  n0,
  _CSMR,
  0,
  [_CWATGI, _Desc, _DEPA, _EBRTGI, _N, _Ta, _RIe],
  [
    [
      64 | 0,
      {
        [_jN]: _cWATGI,
      },
    ],
    [
      0,
      {
        [_jN]: _desc,
      },
    ],
    [
      0,
      {
        [_jN]: _dEPA,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _eBRTGI,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      0,
      {
        [_jN]: _rIe,
        [_iTd]: 1,
      },
    ],
  ]
);
export var CreateSignalMapResponse = struct(
  n0,
  _CSMRr,
  0,
  [_Ar, _CWATGIl, _CAr, _Desc, _DEPA, _EM, _EBRTGIv, _FMRM, _I, _LDA, _LSMD, _MRM, _MA, _MCPD, _MD, _N, _Stat, _Ta],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _cWATGIl,
      },
    ],
    [
      5,
      {
        [_jN]: _cAr,
      },
    ],
    [
      0,
      {
        [_jN]: _desc,
      },
    ],
    [
      0,
      {
        [_jN]: _dEPA,
      },
    ],
    [
      0,
      {
        [_jN]: _eM,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _eBRTGIv,
      },
    ],
    [
      () => FailedMediaResourceMap,
      {
        [_jN]: _fMRM,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      5,
      {
        [_jN]: _lDA,
      },
    ],
    [
      () => SuccessfulMonitorDeployment,
      {
        [_jN]: _lSMD,
      },
    ],
    [
      () => MediaResourceMap,
      {
        [_jN]: _mRM,
      },
    ],
    [
      5,
      {
        [_jN]: _mA,
      },
    ],
    [
      2,
      {
        [_jN]: _mCPD,
      },
    ],
    [
      () => MonitorDeployment,
      {
        [_jN]: _mD,
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
        [_jN]: _stat,
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
export var EventBridgeRuleTemplateGroupSummary = struct(
  n0,
  _EBRTGS,
  0,
  [_Ar, _CAr, _Desc, _I, _MA, _N, _Ta, _TC],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      5,
      {
        [_jN]: _cAr,
      },
    ],
    [
      0,
      {
        [_jN]: _desc,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      5,
      {
        [_jN]: _mA,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      1,
      {
        [_jN]: _tC,
      },
    ],
  ]
);
export var EventBridgeRuleTemplateSummary = struct(
  n0,
  _EBRTS,
  0,
  [_Ar, _CAr, _Desc, _ETC, _ETv, _GI, _I, _MA, _N, _Ta],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      5,
      {
        [_jN]: _cAr,
      },
    ],
    [
      0,
      {
        [_jN]: _desc,
      },
    ],
    [
      1,
      {
        [_jN]: _eTC,
      },
    ],
    [
      0,
      {
        [_jN]: _eTv,
      },
    ],
    [
      0,
      {
        [_jN]: _gI,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      5,
      {
        [_jN]: _mA,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
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
export var GetSignalMapRequest = struct(n0, _GSMR, 0, [_Id], [[0, 1]]);
export var GetSignalMapResponse = struct(
  n0,
  _GSMRe,
  0,
  [_Ar, _CWATGIl, _CAr, _Desc, _DEPA, _EM, _EBRTGIv, _FMRM, _I, _LDA, _LSMD, _MRM, _MA, _MCPD, _MD, _N, _Stat, _Ta],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _cWATGIl,
      },
    ],
    [
      5,
      {
        [_jN]: _cAr,
      },
    ],
    [
      0,
      {
        [_jN]: _desc,
      },
    ],
    [
      0,
      {
        [_jN]: _dEPA,
      },
    ],
    [
      0,
      {
        [_jN]: _eM,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _eBRTGIv,
      },
    ],
    [
      () => FailedMediaResourceMap,
      {
        [_jN]: _fMRM,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      5,
      {
        [_jN]: _lDA,
      },
    ],
    [
      () => SuccessfulMonitorDeployment,
      {
        [_jN]: _lSMD,
      },
    ],
    [
      () => MediaResourceMap,
      {
        [_jN]: _mRM,
      },
    ],
    [
      5,
      {
        [_jN]: _mA,
      },
    ],
    [
      2,
      {
        [_jN]: _mCPD,
      },
    ],
    [
      () => MonitorDeployment,
      {
        [_jN]: _mD,
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
        [_jN]: _stat,
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
export var ListCloudWatchAlarmTemplateGroupsRequest = struct(
  n0,
  _LCWATGR,
  0,
  [_MR, _NT, _Sc, _SMI],
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
    [
      0,
      {
        [_hQ]: _sc,
      },
    ],
    [
      0,
      {
        [_hQ]: _sMI,
      },
    ],
  ]
);
export var ListCloudWatchAlarmTemplateGroupsResponse = struct(
  n0,
  _LCWATGRi,
  0,
  [_CWATG, _NT],
  [
    [
      () => __listOfCloudWatchAlarmTemplateGroupSummary,
      {
        [_jN]: _cWATG,
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
export var ListCloudWatchAlarmTemplatesRequest = struct(
  n0,
  _LCWATR,
  0,
  [_GIr, _MR, _NT, _Sc, _SMI],
  [
    [
      0,
      {
        [_hQ]: _gIr,
      },
    ],
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
    [
      0,
      {
        [_hQ]: _sc,
      },
    ],
    [
      0,
      {
        [_hQ]: _sMI,
      },
    ],
  ]
);
export var ListCloudWatchAlarmTemplatesResponse = struct(
  n0,
  _LCWATRi,
  0,
  [_CWAT, _NT],
  [
    [
      () => __listOfCloudWatchAlarmTemplateSummary,
      {
        [_jN]: _cWAT,
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
export var ListEventBridgeRuleTemplateGroupsRequest = struct(
  n0,
  _LEBRTGR,
  0,
  [_MR, _NT, _SMI],
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
    [
      0,
      {
        [_hQ]: _sMI,
      },
    ],
  ]
);
export var ListEventBridgeRuleTemplateGroupsResponse = struct(
  n0,
  _LEBRTGRi,
  0,
  [_EBRTG, _NT],
  [
    [
      () => __listOfEventBridgeRuleTemplateGroupSummary,
      {
        [_jN]: _eBRTG,
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
export var ListEventBridgeRuleTemplatesRequest = struct(
  n0,
  _LEBRTR,
  0,
  [_GIr, _MR, _NT, _SMI],
  [
    [
      0,
      {
        [_hQ]: _gIr,
      },
    ],
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
    [
      0,
      {
        [_hQ]: _sMI,
      },
    ],
  ]
);
export var ListEventBridgeRuleTemplatesResponse = struct(
  n0,
  _LEBRTRi,
  0,
  [_EBRT, _NT],
  [
    [
      () => __listOfEventBridgeRuleTemplateSummary,
      {
        [_jN]: _eBRT,
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
export var ListSignalMapsRequest = struct(
  n0,
  _LSMR,
  0,
  [_CWATGIlo, _EBRTGIve, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _cWATGIlo,
      },
    ],
    [
      0,
      {
        [_hQ]: _eBRTGIve,
      },
    ],
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
export var ListSignalMapsResponse = struct(
  n0,
  _LSMRi,
  0,
  [_NT, _SMi],
  [
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      () => __listOfSignalMapSummary,
      {
        [_jN]: _sMi,
      },
    ],
  ]
);
export var MediaResource = struct(
  n0,
  _MRe,
  0,
  [_Des, _N, _So],
  [
    [
      () => __listOfMediaResourceNeighbor,
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
      () => __listOfMediaResourceNeighbor,
      {
        [_jN]: _so,
      },
    ],
  ]
);
export var MediaResourceNeighbor = struct(
  n0,
  _MRN,
  0,
  [_Ar, _N],
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
  ]
);
export var MonitorDeployment = struct(
  n0,
  _MD,
  0,
  [_DUe, _EM, _Stat],
  [
    [
      0,
      {
        [_jN]: _dUe,
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
        [_jN]: _stat,
      },
    ],
  ]
);
export var SignalMapSummary = struct(
  n0,
  _SMS,
  0,
  [_Ar, _CAr, _Desc, _I, _MA, _MDS, _N, _Stat, _Ta],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      5,
      {
        [_jN]: _cAr,
      },
    ],
    [
      0,
      {
        [_jN]: _desc,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      5,
      {
        [_jN]: _mA,
      },
    ],
    [
      0,
      {
        [_jN]: _mDS,
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
        [_jN]: _stat,
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
export var StartDeleteMonitorDeploymentRequest = struct(n0, _SDMDR, 0, [_Id], [[0, 1]]);
export var StartDeleteMonitorDeploymentResponse = struct(
  n0,
  _SDMDRt,
  0,
  [_Ar, _CWATGIl, _CAr, _Desc, _DEPA, _EM, _EBRTGIv, _FMRM, _I, _LDA, _LSMD, _MRM, _MA, _MCPD, _MD, _N, _Stat, _Ta],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _cWATGIl,
      },
    ],
    [
      5,
      {
        [_jN]: _cAr,
      },
    ],
    [
      0,
      {
        [_jN]: _desc,
      },
    ],
    [
      0,
      {
        [_jN]: _dEPA,
      },
    ],
    [
      0,
      {
        [_jN]: _eM,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _eBRTGIv,
      },
    ],
    [
      () => FailedMediaResourceMap,
      {
        [_jN]: _fMRM,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      5,
      {
        [_jN]: _lDA,
      },
    ],
    [
      () => SuccessfulMonitorDeployment,
      {
        [_jN]: _lSMD,
      },
    ],
    [
      () => MediaResourceMap,
      {
        [_jN]: _mRM,
      },
    ],
    [
      5,
      {
        [_jN]: _mA,
      },
    ],
    [
      2,
      {
        [_jN]: _mCPD,
      },
    ],
    [
      () => MonitorDeployment,
      {
        [_jN]: _mD,
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
        [_jN]: _stat,
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
export var StartMonitorDeploymentRequest = struct(
  n0,
  _SMDR,
  0,
  [_DRr, _Id],
  [
    [
      2,
      {
        [_jN]: _dRr,
      },
    ],
    [0, 1],
  ]
);
export var StartMonitorDeploymentResponse = struct(
  n0,
  _SMDRt,
  0,
  [_Ar, _CWATGIl, _CAr, _Desc, _DEPA, _EM, _EBRTGIv, _FMRM, _I, _LDA, _LSMD, _MRM, _MA, _MCPD, _MD, _N, _Stat, _Ta],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _cWATGIl,
      },
    ],
    [
      5,
      {
        [_jN]: _cAr,
      },
    ],
    [
      0,
      {
        [_jN]: _desc,
      },
    ],
    [
      0,
      {
        [_jN]: _dEPA,
      },
    ],
    [
      0,
      {
        [_jN]: _eM,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _eBRTGIv,
      },
    ],
    [
      () => FailedMediaResourceMap,
      {
        [_jN]: _fMRM,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      5,
      {
        [_jN]: _lDA,
      },
    ],
    [
      () => SuccessfulMonitorDeployment,
      {
        [_jN]: _lSMD,
      },
    ],
    [
      () => MediaResourceMap,
      {
        [_jN]: _mRM,
      },
    ],
    [
      5,
      {
        [_jN]: _mA,
      },
    ],
    [
      2,
      {
        [_jN]: _mCPD,
      },
    ],
    [
      () => MonitorDeployment,
      {
        [_jN]: _mD,
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
        [_jN]: _stat,
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
export var StartUpdateSignalMapRequest = struct(
  n0,
  _SUSMR,
  0,
  [_CWATGI, _Desc, _DEPA, _EBRTGI, _FRo, _Id, _N],
  [
    [
      64 | 0,
      {
        [_jN]: _cWATGI,
      },
    ],
    [
      0,
      {
        [_jN]: _desc,
      },
    ],
    [
      0,
      {
        [_jN]: _dEPA,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _eBRTGI,
      },
    ],
    [
      2,
      {
        [_jN]: _fRo,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
  ]
);
export var StartUpdateSignalMapResponse = struct(
  n0,
  _SUSMRt,
  0,
  [_Ar, _CWATGIl, _CAr, _Desc, _DEPA, _EM, _EBRTGIv, _FMRM, _I, _LDA, _LSMD, _MRM, _MA, _MCPD, _MD, _N, _Stat, _Ta],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _cWATGIl,
      },
    ],
    [
      5,
      {
        [_jN]: _cAr,
      },
    ],
    [
      0,
      {
        [_jN]: _desc,
      },
    ],
    [
      0,
      {
        [_jN]: _dEPA,
      },
    ],
    [
      0,
      {
        [_jN]: _eM,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _eBRTGIv,
      },
    ],
    [
      () => FailedMediaResourceMap,
      {
        [_jN]: _fMRM,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      5,
      {
        [_jN]: _lDA,
      },
    ],
    [
      () => SuccessfulMonitorDeployment,
      {
        [_jN]: _lSMD,
      },
    ],
    [
      () => MediaResourceMap,
      {
        [_jN]: _mRM,
      },
    ],
    [
      5,
      {
        [_jN]: _mA,
      },
    ],
    [
      2,
      {
        [_jN]: _mCPD,
      },
    ],
    [
      () => MonitorDeployment,
      {
        [_jN]: _mD,
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
        [_jN]: _stat,
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
export var SuccessfulMonitorDeployment = struct(
  n0,
  _SMD,
  0,
  [_DUe, _Stat],
  [
    [
      0,
      {
        [_jN]: _dUe,
      },
    ],
    [
      0,
      {
        [_jN]: _stat,
      },
    ],
  ]
);
export var __listOf__stringMin7Max11PatternAws097 = 64 | 0;

export var __listOf__stringPatternS = 64 | 0;

export var __listOfCloudWatchAlarmTemplateGroupSummary = list(n0, _lOCWATGS, 0, [
  () => CloudWatchAlarmTemplateGroupSummary,
  0,
]);
export var __listOfCloudWatchAlarmTemplateSummary = list(n0, _lOCWATS, 0, [() => CloudWatchAlarmTemplateSummary, 0]);
export var __listOfEventBridgeRuleTemplateGroupSummary = list(n0, _lOEBRTGS, 0, [
  () => EventBridgeRuleTemplateGroupSummary,
  0,
]);
export var __listOfEventBridgeRuleTemplateSummary = list(n0, _lOEBRTS, 0, [() => EventBridgeRuleTemplateSummary, 0]);
export var __listOfMediaResourceNeighbor = list(n0, _lOMRN, 0, [() => MediaResourceNeighbor, 0]);
export var __listOfSignalMapSummary = list(n0, _lOSMS, 0, [() => SignalMapSummary, 0]);
export var FailedMediaResourceMap = map(n0, _FMRM, 0, [0, 0], [() => MediaResource, 0]);
export var MediaResourceMap = map(n0, _MRM, 0, [0, 0], [() => MediaResource, 0]);
export var CreateSignalMap = op(
  n0,
  _CSM,
  {
    [_ht]: ["POST", "/prod/signal-maps", 201],
  },
  () => CreateSignalMapRequest,
  () => CreateSignalMapResponse
);
export var GetSignalMap = op(
  n0,
  _GSM,
  {
    [_ht]: ["GET", "/prod/signal-maps/{Identifier}", 200],
  },
  () => GetSignalMapRequest,
  () => GetSignalMapResponse
);
export var ListCloudWatchAlarmTemplateGroups = op(
  n0,
  _LCWATG,
  {
    [_ht]: ["GET", "/prod/cloudwatch-alarm-template-groups", 200],
  },
  () => ListCloudWatchAlarmTemplateGroupsRequest,
  () => ListCloudWatchAlarmTemplateGroupsResponse
);
export var ListCloudWatchAlarmTemplates = op(
  n0,
  _LCWAT,
  {
    [_ht]: ["GET", "/prod/cloudwatch-alarm-templates", 200],
  },
  () => ListCloudWatchAlarmTemplatesRequest,
  () => ListCloudWatchAlarmTemplatesResponse
);
export var ListEventBridgeRuleTemplateGroups = op(
  n0,
  _LEBRTG,
  {
    [_ht]: ["GET", "/prod/eventbridge-rule-template-groups", 200],
  },
  () => ListEventBridgeRuleTemplateGroupsRequest,
  () => ListEventBridgeRuleTemplateGroupsResponse
);
export var ListEventBridgeRuleTemplates = op(
  n0,
  _LEBRT,
  {
    [_ht]: ["GET", "/prod/eventbridge-rule-templates", 200],
  },
  () => ListEventBridgeRuleTemplatesRequest,
  () => ListEventBridgeRuleTemplatesResponse
);
export var ListSignalMaps = op(
  n0,
  _LSM,
  {
    [_ht]: ["GET", "/prod/signal-maps", 200],
  },
  () => ListSignalMapsRequest,
  () => ListSignalMapsResponse
);
export var StartDeleteMonitorDeployment = op(
  n0,
  _SDMD,
  {
    [_ht]: ["DELETE", "/prod/signal-maps/{Identifier}/monitor-deployment", 202],
  },
  () => StartDeleteMonitorDeploymentRequest,
  () => StartDeleteMonitorDeploymentResponse
);
export var StartMonitorDeployment = op(
  n0,
  _SMDt,
  {
    [_ht]: ["POST", "/prod/signal-maps/{Identifier}/monitor-deployment", 202],
  },
  () => StartMonitorDeploymentRequest,
  () => StartMonitorDeploymentResponse
);
export var StartUpdateSignalMap = op(
  n0,
  _SUSM,
  {
    [_ht]: ["PATCH", "/prod/signal-maps/{Identifier}", 202],
  },
  () => StartUpdateSignalMapRequest,
  () => StartUpdateSignalMapResponse
);
