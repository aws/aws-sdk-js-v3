// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _ADu,
  _aDu,
  _AGM,
  _aGM,
  _AI,
  _ALS,
  _aLS,
  _CA,
  _cA,
  _CCI,
  _cCI,
  _CD,
  _cD,
  _CHS,
  _cHS,
  _CI,
  _cI,
  _CIR,
  _CIr,
  _CIRr,
  _CS,
  _CSR,
  _CSRr,
  _CT,
  _cT,
  _D,
  _d,
  _DA,
  _dA,
  _DI,
  _dI,
  _DME,
  _dME,
  _DRS,
  _dRS,
  _DTE,
  _dTE,
  _F,
  _f,
  _GI,
  _GIe,
  _GIR,
  _GIRe,
  _GIRet,
  _GIRetn,
  _GS,
  _GSe,
  _GSR,
  _GSRe,
  _GSRet,
  _GSRett,
  _hQ,
  _ht,
  _I,
  _i,
  _IIn,
  _iIn,
  _IM,
  _iM,
  _In,
  _IRSE,
  _iRSE,
  _ISn,
  _iSn,
  _IT,
  _iT,
  _IU,
  _iU,
  _jN,
  _LDSM,
  _lDSM,
  _LL,
  _lL,
  _lOI,
  _lOS,
  _LUD,
  _lUD,
  _MR,
  _mR,
  _NT,
  _nT,
  _PB,
  _pB,
  _PFV,
  _pFV,
  _RP,
  _rP,
  _RPe,
  _rPe,
  _RS,
  _rS,
  _RSM,
  _RT,
  _rT,
  _S,
  _SN,
  _sN,
  _SNTV,
  _sNTV,
  _SV,
  _sV,
  _T,
  _t,
  _TBL,
  _tBL,
  _TC,
  _tC,
  _TCI,
  _TIM,
  _tIM,
  _TRL,
  _tRL,
  _TSE,
  _tSE,
  _UI,
  _UIR,
  _UIRp,
  _US,
  _USR,
  _USRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessLogSettings = struct(
  n0,
  _ALS,
  0,
  [_DA, _F],
  [
    [
      0,
      {
        [_jN]: _dA,
      },
    ],
    [
      0,
      {
        [_jN]: _f,
      },
    ],
  ]
);
export var CreateIntegrationRequest = struct(
  n0,
  _CIR,
  0,
  [_AI, _CI, _CT, _CHS, _CA, _D, _IM, _ISn, _IT, _IU, _PB, _PFV, _RP, _RT, _RPe, _TSE, _TIM, _TC],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _cI,
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
        [_jN]: _cHS,
      },
    ],
    [
      0,
      {
        [_jN]: _cA,
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
        [_jN]: _iM,
      },
    ],
    [
      0,
      {
        [_jN]: _iSn,
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
        [_jN]: _iU,
      },
    ],
    [
      0,
      {
        [_jN]: _pB,
      },
    ],
    [
      0,
      {
        [_jN]: _pFV,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rP,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rT,
      },
    ],
    [
      map(n0, _RPe, 0, 0, 128 | 0),
      {
        [_jN]: _rPe,
      },
    ],
    [
      0,
      {
        [_jN]: _tSE,
      },
    ],
    [
      1,
      {
        [_jN]: _tIM,
      },
    ],
    [
      () => TlsConfigInput,
      {
        [_jN]: _tC,
      },
    ],
  ]
);
export var CreateIntegrationResult = struct(
  n0,
  _CIRr,
  0,
  [_AGM, _CI, _CT, _CHS, _CA, _D, _IIn, _IM, _IRSE, _ISn, _IT, _IU, _PB, _PFV, _RP, _RT, _RPe, _TSE, _TIM, _TC],
  [
    [
      2,
      {
        [_jN]: _aGM,
      },
    ],
    [
      0,
      {
        [_jN]: _cI,
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
        [_jN]: _cHS,
      },
    ],
    [
      0,
      {
        [_jN]: _cA,
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
        [_jN]: _iIn,
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
        [_jN]: _iRSE,
      },
    ],
    [
      0,
      {
        [_jN]: _iSn,
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
        [_jN]: _iU,
      },
    ],
    [
      0,
      {
        [_jN]: _pB,
      },
    ],
    [
      0,
      {
        [_jN]: _pFV,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rP,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rT,
      },
    ],
    [
      map(n0, _RPe, 0, 0, 128 | 0),
      {
        [_jN]: _rPe,
      },
    ],
    [
      0,
      {
        [_jN]: _tSE,
      },
    ],
    [
      1,
      {
        [_jN]: _tIM,
      },
    ],
    [
      () => TlsConfig,
      {
        [_jN]: _tC,
      },
    ],
  ]
);
export var CreateStageRequest = struct(
  n0,
  _CSR,
  0,
  [_ALS, _AI, _ADu, _CCI, _DRS, _DI, _D, _RS, _SN, _SV, _T],
  [
    [
      () => AccessLogSettings,
      {
        [_jN]: _aLS,
      },
    ],
    [0, 1],
    [
      2,
      {
        [_jN]: _aDu,
      },
    ],
    [
      0,
      {
        [_jN]: _cCI,
      },
    ],
    [
      () => RouteSettings,
      {
        [_jN]: _dRS,
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
        [_jN]: _d,
      },
    ],
    [
      () => RouteSettingsMap,
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
    [
      128 | 0,
      {
        [_jN]: _sV,
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
export var CreateStageResponse = struct(
  n0,
  _CSRr,
  0,
  [_ALS, _AGM, _ADu, _CCI, _CD, _DRS, _DI, _D, _LDSM, _LUD, _RS, _SN, _SV, _T],
  [
    [
      () => AccessLogSettings,
      {
        [_jN]: _aLS,
      },
    ],
    [
      2,
      {
        [_jN]: _aGM,
      },
    ],
    [
      2,
      {
        [_jN]: _aDu,
      },
    ],
    [
      0,
      {
        [_jN]: _cCI,
      },
    ],
    [
      5,
      {
        [_jN]: _cD,
      },
    ],
    [
      () => RouteSettings,
      {
        [_jN]: _dRS,
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
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _lDSM,
      },
    ],
    [
      5,
      {
        [_jN]: _lUD,
      },
    ],
    [
      () => RouteSettingsMap,
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
    [
      128 | 0,
      {
        [_jN]: _sV,
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
export var GetIntegrationRequest = struct(
  n0,
  _GIR,
  0,
  [_AI, _IIn],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetIntegrationResult = struct(
  n0,
  _GIRe,
  0,
  [_AGM, _CI, _CT, _CHS, _CA, _D, _IIn, _IM, _IRSE, _ISn, _IT, _IU, _PB, _PFV, _RP, _RT, _RPe, _TSE, _TIM, _TC],
  [
    [
      2,
      {
        [_jN]: _aGM,
      },
    ],
    [
      0,
      {
        [_jN]: _cI,
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
        [_jN]: _cHS,
      },
    ],
    [
      0,
      {
        [_jN]: _cA,
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
        [_jN]: _iIn,
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
        [_jN]: _iRSE,
      },
    ],
    [
      0,
      {
        [_jN]: _iSn,
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
        [_jN]: _iU,
      },
    ],
    [
      0,
      {
        [_jN]: _pB,
      },
    ],
    [
      0,
      {
        [_jN]: _pFV,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rP,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rT,
      },
    ],
    [
      map(n0, _RPe, 0, 0, 128 | 0),
      {
        [_jN]: _rPe,
      },
    ],
    [
      0,
      {
        [_jN]: _tSE,
      },
    ],
    [
      1,
      {
        [_jN]: _tIM,
      },
    ],
    [
      () => TlsConfig,
      {
        [_jN]: _tC,
      },
    ],
  ]
);
export var GetIntegrationsRequest = struct(
  n0,
  _GIRet,
  0,
  [_AI, _MR, _NT],
  [
    [0, 1],
    [
      0,
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
export var GetIntegrationsResponse = struct(
  n0,
  _GIRetn,
  0,
  [_I, _NT],
  [
    [
      () => __listOfIntegration,
      {
        [_jN]: _i,
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
export var GetStageRequest = struct(
  n0,
  _GSR,
  0,
  [_AI, _SN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetStageResponse = struct(
  n0,
  _GSRe,
  0,
  [_ALS, _AGM, _ADu, _CCI, _CD, _DRS, _DI, _D, _LDSM, _LUD, _RS, _SN, _SV, _T],
  [
    [
      () => AccessLogSettings,
      {
        [_jN]: _aLS,
      },
    ],
    [
      2,
      {
        [_jN]: _aGM,
      },
    ],
    [
      2,
      {
        [_jN]: _aDu,
      },
    ],
    [
      0,
      {
        [_jN]: _cCI,
      },
    ],
    [
      5,
      {
        [_jN]: _cD,
      },
    ],
    [
      () => RouteSettings,
      {
        [_jN]: _dRS,
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
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _lDSM,
      },
    ],
    [
      5,
      {
        [_jN]: _lUD,
      },
    ],
    [
      () => RouteSettingsMap,
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
    [
      128 | 0,
      {
        [_jN]: _sV,
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
export var GetStagesRequest = struct(
  n0,
  _GSRet,
  0,
  [_AI, _MR, _NT],
  [
    [0, 1],
    [
      0,
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
export var GetStagesResponse = struct(
  n0,
  _GSRett,
  0,
  [_I, _NT],
  [
    [
      () => __listOfStage,
      {
        [_jN]: _i,
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
export var Integration = struct(
  n0,
  _In,
  0,
  [_AGM, _CI, _CT, _CHS, _CA, _D, _IIn, _IM, _IRSE, _ISn, _IT, _IU, _PB, _PFV, _RP, _RT, _RPe, _TSE, _TIM, _TC],
  [
    [
      2,
      {
        [_jN]: _aGM,
      },
    ],
    [
      0,
      {
        [_jN]: _cI,
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
        [_jN]: _cHS,
      },
    ],
    [
      0,
      {
        [_jN]: _cA,
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
        [_jN]: _iIn,
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
        [_jN]: _iRSE,
      },
    ],
    [
      0,
      {
        [_jN]: _iSn,
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
        [_jN]: _iU,
      },
    ],
    [
      0,
      {
        [_jN]: _pB,
      },
    ],
    [
      0,
      {
        [_jN]: _pFV,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rP,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rT,
      },
    ],
    [
      map(n0, _RPe, 0, 0, 128 | 0),
      {
        [_jN]: _rPe,
      },
    ],
    [
      0,
      {
        [_jN]: _tSE,
      },
    ],
    [
      1,
      {
        [_jN]: _tIM,
      },
    ],
    [
      () => TlsConfig,
      {
        [_jN]: _tC,
      },
    ],
  ]
);
export var RouteSettings = struct(
  n0,
  _RS,
  0,
  [_DTE, _DME, _LL, _TBL, _TRL],
  [
    [
      2,
      {
        [_jN]: _dTE,
      },
    ],
    [
      2,
      {
        [_jN]: _dME,
      },
    ],
    [
      0,
      {
        [_jN]: _lL,
      },
    ],
    [
      1,
      {
        [_jN]: _tBL,
      },
    ],
    [
      1,
      {
        [_jN]: _tRL,
      },
    ],
  ]
);
export var Stage = struct(
  n0,
  _S,
  0,
  [_ALS, _AGM, _ADu, _CCI, _CD, _DRS, _DI, _D, _LDSM, _LUD, _RS, _SN, _SV, _T],
  [
    [
      () => AccessLogSettings,
      {
        [_jN]: _aLS,
      },
    ],
    [
      2,
      {
        [_jN]: _aGM,
      },
    ],
    [
      2,
      {
        [_jN]: _aDu,
      },
    ],
    [
      0,
      {
        [_jN]: _cCI,
      },
    ],
    [
      5,
      {
        [_jN]: _cD,
      },
    ],
    [
      () => RouteSettings,
      {
        [_jN]: _dRS,
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
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _lDSM,
      },
    ],
    [
      5,
      {
        [_jN]: _lUD,
      },
    ],
    [
      () => RouteSettingsMap,
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
    [
      128 | 0,
      {
        [_jN]: _sV,
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
export var TlsConfig = struct(
  n0,
  _TC,
  0,
  [_SNTV],
  [
    [
      0,
      {
        [_jN]: _sNTV,
      },
    ],
  ]
);
export var TlsConfigInput = struct(
  n0,
  _TCI,
  0,
  [_SNTV],
  [
    [
      0,
      {
        [_jN]: _sNTV,
      },
    ],
  ]
);
export var UpdateIntegrationRequest = struct(
  n0,
  _UIR,
  0,
  [_AI, _CI, _CT, _CHS, _CA, _D, _IIn, _IM, _ISn, _IT, _IU, _PB, _PFV, _RP, _RT, _RPe, _TSE, _TIM, _TC],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _cI,
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
        [_jN]: _cHS,
      },
    ],
    [
      0,
      {
        [_jN]: _cA,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_jN]: _iM,
      },
    ],
    [
      0,
      {
        [_jN]: _iSn,
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
        [_jN]: _iU,
      },
    ],
    [
      0,
      {
        [_jN]: _pB,
      },
    ],
    [
      0,
      {
        [_jN]: _pFV,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rP,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rT,
      },
    ],
    [
      map(n0, _RPe, 0, 0, 128 | 0),
      {
        [_jN]: _rPe,
      },
    ],
    [
      0,
      {
        [_jN]: _tSE,
      },
    ],
    [
      1,
      {
        [_jN]: _tIM,
      },
    ],
    [
      () => TlsConfigInput,
      {
        [_jN]: _tC,
      },
    ],
  ]
);
export var UpdateIntegrationResult = struct(
  n0,
  _UIRp,
  0,
  [_AGM, _CI, _CT, _CHS, _CA, _D, _IIn, _IM, _IRSE, _ISn, _IT, _IU, _PB, _PFV, _RP, _RT, _RPe, _TSE, _TIM, _TC],
  [
    [
      2,
      {
        [_jN]: _aGM,
      },
    ],
    [
      0,
      {
        [_jN]: _cI,
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
        [_jN]: _cHS,
      },
    ],
    [
      0,
      {
        [_jN]: _cA,
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
        [_jN]: _iIn,
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
        [_jN]: _iRSE,
      },
    ],
    [
      0,
      {
        [_jN]: _iSn,
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
        [_jN]: _iU,
      },
    ],
    [
      0,
      {
        [_jN]: _pB,
      },
    ],
    [
      0,
      {
        [_jN]: _pFV,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rP,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rT,
      },
    ],
    [
      map(n0, _RPe, 0, 0, 128 | 0),
      {
        [_jN]: _rPe,
      },
    ],
    [
      0,
      {
        [_jN]: _tSE,
      },
    ],
    [
      1,
      {
        [_jN]: _tIM,
      },
    ],
    [
      () => TlsConfig,
      {
        [_jN]: _tC,
      },
    ],
  ]
);
export var UpdateStageRequest = struct(
  n0,
  _USR,
  0,
  [_ALS, _AI, _ADu, _CCI, _DRS, _DI, _D, _RS, _SN, _SV],
  [
    [
      () => AccessLogSettings,
      {
        [_jN]: _aLS,
      },
    ],
    [0, 1],
    [
      2,
      {
        [_jN]: _aDu,
      },
    ],
    [
      0,
      {
        [_jN]: _cCI,
      },
    ],
    [
      () => RouteSettings,
      {
        [_jN]: _dRS,
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
        [_jN]: _d,
      },
    ],
    [
      () => RouteSettingsMap,
      {
        [_jN]: _rS,
      },
    ],
    [0, 1],
    [
      128 | 0,
      {
        [_jN]: _sV,
      },
    ],
  ]
);
export var UpdateStageResponse = struct(
  n0,
  _USRp,
  0,
  [_ALS, _AGM, _ADu, _CCI, _CD, _DRS, _DI, _D, _LDSM, _LUD, _RS, _SN, _SV, _T],
  [
    [
      () => AccessLogSettings,
      {
        [_jN]: _aLS,
      },
    ],
    [
      2,
      {
        [_jN]: _aGM,
      },
    ],
    [
      2,
      {
        [_jN]: _aDu,
      },
    ],
    [
      0,
      {
        [_jN]: _cCI,
      },
    ],
    [
      5,
      {
        [_jN]: _cD,
      },
    ],
    [
      () => RouteSettings,
      {
        [_jN]: _dRS,
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
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _lDSM,
      },
    ],
    [
      5,
      {
        [_jN]: _lUD,
      },
    ],
    [
      () => RouteSettingsMap,
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
    [
      128 | 0,
      {
        [_jN]: _sV,
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
export var __listOfIntegration = list(n0, _lOI, 0, [() => Integration, 0]);
export var __listOfStage = list(n0, _lOS, 0, [() => Stage, 0]);
export var ResponseParameters = map(n0, _RPe, 0, 0, 128 | 0);
export var RouteSettingsMap = map(n0, _RSM, 0, [0, 0], [() => RouteSettings, 0]);
export var StageVariablesMap = 128 | 0;

export var CreateIntegration = op(
  n0,
  _CIr,
  {
    [_ht]: ["POST", "/v2/apis/{ApiId}/integrations", 201],
  },
  () => CreateIntegrationRequest,
  () => CreateIntegrationResult
);
export var CreateStage = op(
  n0,
  _CS,
  {
    [_ht]: ["POST", "/v2/apis/{ApiId}/stages", 201],
  },
  () => CreateStageRequest,
  () => CreateStageResponse
);
export var GetIntegration = op(
  n0,
  _GI,
  {
    [_ht]: ["GET", "/v2/apis/{ApiId}/integrations/{IntegrationId}", 200],
  },
  () => GetIntegrationRequest,
  () => GetIntegrationResult
);
export var GetIntegrations = op(
  n0,
  _GIe,
  {
    [_ht]: ["GET", "/v2/apis/{ApiId}/integrations", 200],
  },
  () => GetIntegrationsRequest,
  () => GetIntegrationsResponse
);
export var GetStage = op(
  n0,
  _GS,
  {
    [_ht]: ["GET", "/v2/apis/{ApiId}/stages/{StageName}", 200],
  },
  () => GetStageRequest,
  () => GetStageResponse
);
export var GetStages = op(
  n0,
  _GSe,
  {
    [_ht]: ["GET", "/v2/apis/{ApiId}/stages", 200],
  },
  () => GetStagesRequest,
  () => GetStagesResponse
);
export var UpdateIntegration = op(
  n0,
  _UI,
  {
    [_ht]: ["PATCH", "/v2/apis/{ApiId}/integrations/{IntegrationId}", 200],
  },
  () => UpdateIntegrationRequest,
  () => UpdateIntegrationResult
);
export var UpdateStage = op(
  n0,
  _US,
  {
    [_ht]: ["PATCH", "/v2/apis/{ApiId}/stages/{StageName}", 200],
  },
  () => UpdateStageRequest,
  () => UpdateStageResponse
);
