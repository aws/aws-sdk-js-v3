// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _a,
  _ALG,
  _aLG,
  _AMVU,
  _aMVU,
  _AN,
  _aN,
  _AR,
  _aR,
  _ARC,
  _ARc,
  _aRC,
  _ARI,
  _aRI,
  _AS,
  _aS,
  _Au,
  _au,
  _BA,
  _bA,
  _BI,
  _bI,
  _BIr,
  _bIr,
  _BIro,
  _BN,
  _bN,
  _BS,
  _bS,
  _BSr,
  _bSr,
  _BSro,
  _C,
  _CC,
  _CCR,
  _CCRr,
  _CI,
  _cI,
  _Co,
  _Con,
  _con,
  _CR,
  _cr,
  _Cu,
  _cu,
  _CURL,
  _cURL,
  _D,
  _d,
  _Da,
  _da,
  _DBe,
  _DBRes,
  _DBResc,
  _DCe,
  _DCRes,
  _DCResc,
  _DCRescr,
  _DCRR,
  _DCRRe,
  _DM,
  _dM,
  _DRM,
  _dRM,
  _DRMa,
  _dRMa,
  _E,
  _EN,
  _eN,
  _en,
  _EO,
  _eO,
  _ET,
  _eT,
  _EVn,
  _eVn,
  _Ge,
  _ge,
  _GLG,
  _gLG,
  _H,
  _h,
  _HIT,
  _hIT,
  _hQ,
  _ht,
  _I,
  _i,
  _IA,
  _iA,
  _jN,
  _L,
  _l,
  _LB,
  _LBR,
  _LBRi,
  _LC,
  _LCR,
  _LCRi,
  _LCRis,
  _LCRR,
  _LCRRi,
  _lOAR,
  _lOBI,
  _lOBS,
  _lOC,
  _lOCI,
  _lOCR,
  _lOSW,
  _LR,
  _lR,
  _LS,
  _LSM,
  _lSM,
  _MR,
  _mR,
  _MWST,
  _mWST,
  _N,
  _n,
  _NT,
  _nT,
  _P,
  _p,
  _PA,
  _pA,
  _PAS,
  _pAS,
  _PDRM,
  _pDRM,
  _PDRMe,
  _pDRMe,
  _PEV,
  _pEV,
  _PHIT,
  _pHIT,
  _PL,
  _PLSM,
  _pLSM,
  _PSG,
  _pSG,
  _R,
  _r,
  _Rea,
  _rea,
  _Rev,
  _rev,
  _SG,
  _sG,
  _SI,
  _sI,
  _ST,
  _sT,
  _SW,
  _T,
  _t,
  _U,
  _u,
  _UC,
  _UCR,
  _UCRp,
  _W,
  _w,
  n0,
} from "./schemas_0";
import {
  ConfigurationId,
  DataReplicationMetadataOutput,
  EncryptionOptions,
  LdapServerMetadataOutput,
  WeeklyStartTime,
} from "./schemas_5_Broker";
import { __listOfUserSummary } from "./schemas_7_Describe";

/* eslint no-var: 0 */

export var ActionRequired = struct(
  n0,
  _AR,
  0,
  [_ARC, _ARI],
  [
    [
      0,
      {
        [_jN]: _aRC,
      },
    ],
    [
      0,
      {
        [_jN]: _aRI,
      },
    ],
  ]
);
export var BrokerInstance = struct(
  n0,
  _BI,
  0,
  [_CURL, _E, _IA],
  [
    [
      0,
      {
        [_jN]: _cURL,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _en,
      },
    ],
    [
      0,
      {
        [_jN]: _iA,
      },
    ],
  ]
);
export var BrokerSummary = struct(
  n0,
  _BS,
  0,
  [_BA, _BIr, _BN, _BSr, _C, _DM, _ET, _HIT],
  [
    [
      0,
      {
        [_jN]: _bA,
      },
    ],
    [
      0,
      {
        [_jN]: _bI,
      },
    ],
    [
      0,
      {
        [_jN]: _bN,
      },
    ],
    [
      0,
      {
        [_jN]: _bS,
      },
    ],
    [
      5,
      {
        [_jN]: _cr,
      },
    ],
    [
      0,
      {
        [_jN]: _dM,
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
        [_jN]: _hIT,
      },
    ],
  ]
);
export var Configuration = struct(
  n0,
  _Co,
  0,
  [_A, _AS, _C, _D, _ET, _EVn, _I, _LR, _N, _T],
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
        [_jN]: _aS,
      },
    ],
    [
      5,
      {
        [_jN]: _cr,
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
        [_jN]: _eT,
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
        [_jN]: _i,
      },
    ],
    [
      () => ConfigurationRevision,
      {
        [_jN]: _lR,
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
        [_jN]: _t,
      },
    ],
  ]
);
export var ConfigurationRevision = struct(
  n0,
  _CR,
  0,
  [_C, _D, _R],
  [
    [
      5,
      {
        [_jN]: _cr,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      1,
      {
        [_jN]: _r,
      },
    ],
  ]
);
export var Configurations = struct(
  n0,
  _Con,
  0,
  [_Cu, _H, _P],
  [
    [
      () => ConfigurationId,
      {
        [_jN]: _cu,
      },
    ],
    [
      () => __listOfConfigurationId,
      {
        [_jN]: _h,
      },
    ],
    [
      () => ConfigurationId,
      {
        [_jN]: _p,
      },
    ],
  ]
);
export var CreateConfigurationRequest = struct(
  n0,
  _CCR,
  0,
  [_AS, _ET, _EVn, _N, _T],
  [
    [
      0,
      {
        [_jN]: _aS,
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
        [_jN]: _eVn,
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
        [_jN]: _t,
      },
    ],
  ]
);
export var CreateConfigurationResponse = struct(
  n0,
  _CCRr,
  0,
  [_A, _AS, _C, _I, _LR, _N],
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
        [_jN]: _aS,
      },
    ],
    [
      5,
      {
        [_jN]: _cr,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      () => ConfigurationRevision,
      {
        [_jN]: _lR,
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
export var DescribeBrokerRequest = struct(n0, _DBRes, 0, [_BIr], [[0, 1]]);
export var DescribeBrokerResponse = struct(
  n0,
  _DBResc,
  0,
  [
    _ARc,
    _AS,
    _AMVU,
    _BA,
    _BIr,
    _BIro,
    _BN,
    _BSr,
    _Con,
    _C,
    _DM,
    _EO,
    _ET,
    _EVn,
    _HIT,
    _LSM,
    _L,
    _MWST,
    _PAS,
    _PEV,
    _PHIT,
    _PLSM,
    _PSG,
    _PA,
    _SG,
    _ST,
    _SI,
    _T,
    _U,
    _DRMa,
    _DRM,
    _PDRM,
    _PDRMe,
  ],
  [
    [
      () => __listOfActionRequired,
      {
        [_jN]: _aR,
      },
    ],
    [
      0,
      {
        [_jN]: _aS,
      },
    ],
    [
      2,
      {
        [_jN]: _aMVU,
      },
    ],
    [
      0,
      {
        [_jN]: _bA,
      },
    ],
    [
      0,
      {
        [_jN]: _bI,
      },
    ],
    [
      () => __listOfBrokerInstance,
      {
        [_jN]: _bIr,
      },
    ],
    [
      0,
      {
        [_jN]: _bN,
      },
    ],
    [
      0,
      {
        [_jN]: _bS,
      },
    ],
    [
      () => Configurations,
      {
        [_jN]: _con,
      },
    ],
    [
      5,
      {
        [_jN]: _cr,
      },
    ],
    [
      0,
      {
        [_jN]: _dM,
      },
    ],
    [
      () => EncryptionOptions,
      {
        [_jN]: _eO,
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
        [_jN]: _eVn,
      },
    ],
    [
      0,
      {
        [_jN]: _hIT,
      },
    ],
    [
      () => LdapServerMetadataOutput,
      {
        [_jN]: _lSM,
      },
    ],
    [
      () => LogsSummary,
      {
        [_jN]: _l,
      },
    ],
    [
      () => WeeklyStartTime,
      {
        [_jN]: _mWST,
      },
    ],
    [
      0,
      {
        [_jN]: _pAS,
      },
    ],
    [
      0,
      {
        [_jN]: _pEV,
      },
    ],
    [
      0,
      {
        [_jN]: _pHIT,
      },
    ],
    [
      () => LdapServerMetadataOutput,
      {
        [_jN]: _pLSM,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _pSG,
      },
    ],
    [
      2,
      {
        [_jN]: _pA,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sG,
      },
    ],
    [
      0,
      {
        [_jN]: _sT,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sI,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    [
      () => __listOfUserSummary,
      {
        [_jN]: _u,
      },
    ],
    [
      () => DataReplicationMetadataOutput,
      {
        [_jN]: _dRMa,
      },
    ],
    [
      0,
      {
        [_jN]: _dRM,
      },
    ],
    [
      () => DataReplicationMetadataOutput,
      {
        [_jN]: _pDRM,
      },
    ],
    [
      0,
      {
        [_jN]: _pDRMe,
      },
    ],
  ]
);
export var DescribeConfigurationRequest = struct(n0, _DCRes, 0, [_CI], [[0, 1]]);
export var DescribeConfigurationResponse = struct(
  n0,
  _DCResc,
  0,
  [_A, _AS, _C, _D, _ET, _EVn, _I, _LR, _N, _T],
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
        [_jN]: _aS,
      },
    ],
    [
      5,
      {
        [_jN]: _cr,
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
        [_jN]: _eT,
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
        [_jN]: _i,
      },
    ],
    [
      () => ConfigurationRevision,
      {
        [_jN]: _lR,
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
        [_jN]: _t,
      },
    ],
  ]
);
export var DescribeConfigurationRevisionRequest = struct(
  n0,
  _DCRR,
  0,
  [_CI, _CR],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeConfigurationRevisionResponse = struct(
  n0,
  _DCRRe,
  0,
  [_CI, _C, _Da, _D],
  [
    [
      0,
      {
        [_jN]: _cI,
      },
    ],
    [
      5,
      {
        [_jN]: _cr,
      },
    ],
    [
      0,
      {
        [_jN]: _da,
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
export var ListBrokersRequest = struct(
  n0,
  _LBR,
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
export var ListBrokersResponse = struct(
  n0,
  _LBRi,
  0,
  [_BSro, _NT],
  [
    [
      () => __listOfBrokerSummary,
      {
        [_jN]: _bSr,
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
export var ListConfigurationRevisionsRequest = struct(
  n0,
  _LCRR,
  0,
  [_CI, _MR, _NT],
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
export var ListConfigurationRevisionsResponse = struct(
  n0,
  _LCRRi,
  0,
  [_CI, _MR, _NT, _Rev],
  [
    [
      0,
      {
        [_jN]: _cI,
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
    [
      () => __listOfConfigurationRevision,
      {
        [_jN]: _rev,
      },
    ],
  ]
);
export var ListConfigurationsRequest = struct(
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
export var ListConfigurationsResponse = struct(
  n0,
  _LCRi,
  0,
  [_Con, _MR, _NT],
  [
    [
      () => __listOfConfiguration,
      {
        [_jN]: _con,
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
export var LogsSummary = struct(
  n0,
  _LS,
  0,
  [_Au, _ALG, _Ge, _GLG, _P],
  [
    [
      2,
      {
        [_jN]: _au,
      },
    ],
    [
      0,
      {
        [_jN]: _aLG,
      },
    ],
    [
      2,
      {
        [_jN]: _ge,
      },
    ],
    [
      0,
      {
        [_jN]: _gLG,
      },
    ],
    [
      () => PendingLogs,
      {
        [_jN]: _p,
      },
    ],
  ]
);
export var PendingLogs = struct(
  n0,
  _PL,
  0,
  [_Au, _Ge],
  [
    [
      2,
      {
        [_jN]: _au,
      },
    ],
    [
      2,
      {
        [_jN]: _ge,
      },
    ],
  ]
);
export var SanitizationWarning = struct(
  n0,
  _SW,
  0,
  [_AN, _EN, _Rea],
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
        [_jN]: _eN,
      },
    ],
    [
      0,
      {
        [_jN]: _rea,
      },
    ],
  ]
);
export var UpdateConfigurationRequest = struct(
  n0,
  _UCR,
  0,
  [_CI, _Da, _D],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _da,
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
export var UpdateConfigurationResponse = struct(
  n0,
  _UCRp,
  0,
  [_A, _C, _I, _LR, _N, _W],
  [
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      5,
      {
        [_jN]: _cr,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      () => ConfigurationRevision,
      {
        [_jN]: _lR,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => __listOfSanitizationWarning,
      {
        [_jN]: _w,
      },
    ],
  ]
);
export var __listOfActionRequired = list(n0, _lOAR, 0, [() => ActionRequired, 0]);
export var __listOfBrokerInstance = list(n0, _lOBI, 0, [() => BrokerInstance, 0]);
export var __listOfBrokerSummary = list(n0, _lOBS, 0, [() => BrokerSummary, 0]);
export var __listOfConfiguration = list(n0, _lOC, 0, [() => Configuration, 0]);
export var __listOfConfigurationId = list(n0, _lOCI, 0, [() => ConfigurationId, 0]);
export var __listOfConfigurationRevision = list(n0, _lOCR, 0, [() => ConfigurationRevision, 0]);
export var __listOfSanitizationWarning = list(n0, _lOSW, 0, [() => SanitizationWarning, 0]);
export var CreateConfiguration = op(
  n0,
  _CC,
  {
    [_ht]: ["POST", "/v1/configurations", 200],
  },
  () => CreateConfigurationRequest,
  () => CreateConfigurationResponse
);
export var DescribeBroker = op(
  n0,
  _DBe,
  {
    [_ht]: ["GET", "/v1/brokers/{BrokerId}", 200],
  },
  () => DescribeBrokerRequest,
  () => DescribeBrokerResponse
);
export var DescribeConfiguration = op(
  n0,
  _DCe,
  {
    [_ht]: ["GET", "/v1/configurations/{ConfigurationId}", 200],
  },
  () => DescribeConfigurationRequest,
  () => DescribeConfigurationResponse
);
export var DescribeConfigurationRevision = op(
  n0,
  _DCRescr,
  {
    [_ht]: ["GET", "/v1/configurations/{ConfigurationId}/revisions/{ConfigurationRevision}", 200],
  },
  () => DescribeConfigurationRevisionRequest,
  () => DescribeConfigurationRevisionResponse
);
export var ListBrokers = op(
  n0,
  _LB,
  {
    [_ht]: ["GET", "/v1/brokers", 200],
  },
  () => ListBrokersRequest,
  () => ListBrokersResponse
);
export var ListConfigurationRevisions = op(
  n0,
  _LCRis,
  {
    [_ht]: ["GET", "/v1/configurations/{ConfigurationId}/revisions", 200],
  },
  () => ListConfigurationRevisionsRequest,
  () => ListConfigurationRevisionsResponse
);
export var ListConfigurations = op(
  n0,
  _LC,
  {
    [_ht]: ["GET", "/v1/configurations", 200],
  },
  () => ListConfigurationsRequest,
  () => ListConfigurationsResponse
);
export var UpdateConfiguration = op(
  n0,
  _UC,
  {
    [_ht]: ["PUT", "/v1/configurations/{ConfigurationId}", 200],
  },
  () => UpdateConfigurationRequest,
  () => UpdateConfigurationResponse
);
