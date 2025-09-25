// smithy-typescript generated code
import { error, list, map, op, sim, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  RestApiClientException as __RestApiClientException,
  RestApiServerException as __RestApiServerException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _A,
  _ACO,
  _ADE,
  _AI,
  _AV,
  _B,
  _c,
  _CA,
  _CE,
  _CEI,
  _CEO,
  _CEQ,
  _CV,
  _CWLGA,
  _CWLT,
  _CWLTR,
  _CWLTRr,
  _D,
  _DE,
  _DEI,
  _DEO,
  _Di,
  _DPL,
  _DSP,
  _DVES,
  _E,
  _e,
  _EC,
  _ECr,
  _EM,
  _EMr,
  _EN,
  _En,
  _en,
  _Ena,
  _Er,
  _ERA,
  _GE,
  _GEI,
  _GEO,
  _h,
  _hE,
  _hQ,
  _II,
  _IRA,
  _IRAR,
  _IRARn,
  _ISE,
  _KK,
  _LC,
  _LCI,
  _LE,
  _LEI,
  _LEO,
  _LL,
  _LTFR,
  _LTFRI,
  _LTFRO,
  _LU,
  _M,
  _m,
  _Ma,
  _MD,
  _MDe,
  _Me,
  _Mi,
  _MLC,
  _MLCI,
  _MN,
  _MR,
  _MW,
  _MWa,
  _MWi,
  _MWin,
  _N,
  _NC,
  _NT,
  _P,
  _PM,
  _PMI,
  _PMO,
  _PSOV,
  _PSP,
  _QP,
  _RA,
  _RACE,
  _RAR,
  _RARB,
  _RASC,
  _RASE,
  _RSOV,
  _RSP,
  _S,
  _s,
  _SBA,
  _SC,
  _SGI,
  _SI,
  _SL,
  _So,
  _SRA,
  _SS,
  _SSSOV,
  _SSSP,
  _St,
  _Su,
  _SV,
  _Ta,
  _Ti,
  _tK,
  _TL,
  _TR,
  _TRI,
  _TRO,
  _U,
  _UE,
  _UEI,
  _UEO,
  _UEp,
  _UNCI,
  _UR,
  _URI,
  _URO,
  _V,
  _VE,
  _WAM,
  _WL,
  _WLo,
  _WMWS,
  _WRS,
  _WSH,
  _WT,
  _WU,
  _WVES,
  n0,
} from "./schemas_0";
import { Token } from "./schemas_2_Resource";

/* eslint no-var: 0 */

export var ConfigValue = sim(n0, _CV, 0, 8);
export var RestApiRequestBody = sim(n0, _RARB, 15, 8);
export var RestApiResponse = sim(n0, _RAR, 15, 8);
export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_M],
  [0],

  __AccessDeniedException
);
export var CreateEnvironmentInput = struct(
  n0,
  _CEI,
  0,
  [
    _N,
    _ERA,
    _SBA,
    _DSP,
    _NC,
    _PSP,
    _PSOV,
    _RSP,
    _RSOV,
    _SSSP,
    _SSSOV,
    _ACO,
    _EC,
    _MW,
    _KK,
    _AV,
    _LC,
    _WMWS,
    _Ta,
    _WAM,
    _MWi,
    _S,
    _EM,
    _MWin,
    _MWa,
  ],
  [
    [0, 1],
    0,
    0,
    0,
    () => NetworkConfiguration,
    0,
    0,
    0,
    0,
    0,
    0,
    [() => AirflowConfigurationOptions, 0],
    0,
    1,
    0,
    0,
    () => LoggingConfigurationInput,
    0,
    128 | 0,
    0,
    1,
    1,
    0,
    1,
    1,
  ]
);
export var CreateEnvironmentOutput = struct(n0, _CEO, 0, [_A], [0]);
export var CreateWebLoginTokenRequest = struct(n0, _CWLTR, 0, [_N], [[0, 1]]);
export var CreateWebLoginTokenResponse = struct(n0, _CWLTRr, 0, [_WT, _WSH, _II, _AI], [[() => Token, 0], 0, 0, 0]);
export var DeleteEnvironmentInput = struct(n0, _DEI, 0, [_N], [[0, 1]]);
export var DeleteEnvironmentOutput = struct(n0, _DEO, 0, [], []);
export var Dimension = struct(n0, _D, 0, [_N, _V], [0, 0]);
export var Environment = struct(
  n0,
  _E,
  0,
  [
    _N,
    _St,
    _A,
    _CA,
    _WU,
    _ERA,
    _SRA,
    _KK,
    _AV,
    _SBA,
    _DSP,
    _PSP,
    _PSOV,
    _RSP,
    _RSOV,
    _SSSP,
    _SSSOV,
    _ACO,
    _EC,
    _MW,
    _NC,
    _LC,
    _LU,
    _WMWS,
    _Ta,
    _WAM,
    _MWi,
    _S,
    _WVES,
    _DVES,
    _CEQ,
    _EM,
    _MWin,
    _MWa,
  ],
  [
    0,
    0,
    0,
    4,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    [() => AirflowConfigurationOptions, 0],
    0,
    1,
    () => NetworkConfiguration,
    () => LoggingConfiguration,
    () => LastUpdate,
    0,
    128 | 0,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    1,
  ]
);
export var GetEnvironmentInput = struct(n0, _GEI, 0, [_N], [[0, 1]]);
export var GetEnvironmentOutput = struct(n0, _GEO, 0, [_E], [[() => Environment, 0]]);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_m],
  [0],

  __InternalServerException
);
export var InvokeRestApiRequest = struct(
  n0,
  _IRAR,
  0,
  [_N, _P, _Me, _QP, _B],
  [[0, 1], 0, 0, 15, [() => RestApiRequestBody, 0]]
);
export var InvokeRestApiResponse = struct(n0, _IRARn, 0, [_RASC, _RAR], [1, [() => RestApiResponse, 0]]);
export var LastUpdate = struct(n0, _LU, 0, [_St, _CA, _Er, _So, _WRS], [0, 4, () => UpdateError, 0, 0]);
export var ListEnvironmentsInput = struct(
  n0,
  _LEI,
  0,
  [_NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
  ]
);
export var ListEnvironmentsOutput = struct(n0, _LEO, 0, [_En, _NT], [64 | 0, 0]);
export var ListTagsForResourceInput = struct(n0, _LTFRI, 0, [_RA], [[0, 1]]);
export var ListTagsForResourceOutput = struct(n0, _LTFRO, 0, [_Ta], [128 | 0]);
export var LoggingConfiguration = struct(
  n0,
  _LC,
  0,
  [_DPL, _SL, _WL, _WLo, _TL],
  [
    () => ModuleLoggingConfiguration,
    () => ModuleLoggingConfiguration,
    () => ModuleLoggingConfiguration,
    () => ModuleLoggingConfiguration,
    () => ModuleLoggingConfiguration,
  ]
);
export var LoggingConfigurationInput = struct(
  n0,
  _LCI,
  0,
  [_DPL, _SL, _WL, _WLo, _TL],
  [
    () => ModuleLoggingConfigurationInput,
    () => ModuleLoggingConfigurationInput,
    () => ModuleLoggingConfigurationInput,
    () => ModuleLoggingConfigurationInput,
    () => ModuleLoggingConfigurationInput,
  ]
);
export var MetricDatum = struct(
  n0,
  _MD,
  0,
  [_MN, _Ti, _Di, _V, _U, _SV],
  [0, 4, () => Dimensions, 1, 0, () => StatisticSet]
);
export var ModuleLoggingConfiguration = struct(n0, _MLC, 0, [_Ena, _LL, _CWLGA], [2, 0, 0]);
export var ModuleLoggingConfigurationInput = struct(n0, _MLCI, 0, [_Ena, _LL], [2, 0]);
export var NetworkConfiguration = struct(n0, _NC, 0, [_SI, _SGI], [64 | 0, 64 | 0]);
export var PublishMetricsInput = struct(n0, _PMI, 0, [_EN, _MDe], [[0, 1], () => MetricData]);
export var PublishMetricsOutput = struct(n0, _PMO, 0, [], []);
export var RestApiClientException = error(
  n0,
  _RACE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_RASC, _RAR],
  [1, [() => RestApiResponse, 0]],

  __RestApiClientException
);
export var RestApiServerException = error(
  n0,
  _RASE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_RASC, _RAR],
  [1, [() => RestApiResponse, 0]],

  __RestApiServerException
);
export var StatisticSet = struct(n0, _SS, 0, [_SC, _Su, _Mi, _Ma], [1, 1, 1, 1]);
export var TagResourceInput = struct(n0, _TRI, 0, [_RA, _Ta], [[0, 1], 128 | 0]);
export var TagResourceOutput = struct(n0, _TRO, 0, [], []);
export var UntagResourceInput = struct(
  n0,
  _URI,
  0,
  [_RA, _tK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceOutput = struct(n0, _URO, 0, [], []);
export var UpdateEnvironmentInput = struct(
  n0,
  _UEI,
  0,
  [
    _N,
    _ERA,
    _ACO,
    _AV,
    _DSP,
    _EC,
    _LC,
    _MW,
    _MWi,
    _MWa,
    _MWin,
    _WRS,
    _NC,
    _PSP,
    _PSOV,
    _RSP,
    _RSOV,
    _S,
    _SBA,
    _SSSP,
    _SSSOV,
    _WAM,
    _WMWS,
  ],
  [
    [0, 1],
    0,
    [() => AirflowConfigurationOptions, 0],
    0,
    0,
    0,
    () => LoggingConfigurationInput,
    1,
    1,
    1,
    1,
    0,
    () => UpdateNetworkConfigurationInput,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
  ]
);
export var UpdateEnvironmentOutput = struct(n0, _UEO, 0, [_A], [0]);
export var UpdateError = struct(n0, _UE, 0, [_ECr, _EMr], [0, 0]);
export var UpdateNetworkConfigurationInput = struct(n0, _UNCI, 0, [_SGI], [64 | 0]);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ValidationException
);
export var Dimensions = list(n0, _Di, 0, () => Dimension);
export var EnvironmentList = 64 | 0;

export var MetricData = list(n0, _MDe, 0, () => MetricDatum);
export var SecurityGroupList = 64 | 0;

export var SubnetList = 64 | 0;

export var TagKeyList = 64 | 0;

export var AirflowConfigurationOptions = map(n0, _ACO, 8, [0, 0], [() => ConfigValue, 0]);
export var TagMap = 128 | 0;

export var CreateEnvironment = op(
  n0,
  _CE,
  {
    [_h]: ["PUT", "/environments/{Name}", 200],
    [_en]: ["api."],
  },
  () => CreateEnvironmentInput,
  () => CreateEnvironmentOutput
);
export var CreateWebLoginToken = op(
  n0,
  _CWLT,
  {
    [_h]: ["POST", "/webtoken/{Name}", 200],
    [_en]: ["env."],
  },
  () => CreateWebLoginTokenRequest,
  () => CreateWebLoginTokenResponse
);
export var DeleteEnvironment = op(
  n0,
  _DE,
  {
    [_h]: ["DELETE", "/environments/{Name}", 200],
    [_en]: ["api."],
  },
  () => DeleteEnvironmentInput,
  () => DeleteEnvironmentOutput
);
export var GetEnvironment = op(
  n0,
  _GE,
  {
    [_h]: ["GET", "/environments/{Name}", 200],
    [_en]: ["api."],
  },
  () => GetEnvironmentInput,
  () => GetEnvironmentOutput
);
export var InvokeRestApi = op(
  n0,
  _IRA,
  {
    [_h]: ["POST", "/restapi/{Name}", 200],
    [_en]: ["env."],
  },
  () => InvokeRestApiRequest,
  () => InvokeRestApiResponse
);
export var ListEnvironments = op(
  n0,
  _LE,
  {
    [_h]: ["GET", "/environments", 200],
    [_en]: ["api."],
  },
  () => ListEnvironmentsInput,
  () => ListEnvironmentsOutput
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{ResourceArn}", 200],
    [_en]: ["api."],
  },
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput
);
export var PublishMetrics = op(
  n0,
  _PM,
  {
    [_h]: ["POST", "/metrics/environments/{EnvironmentName}", 200],
    [_en]: ["ops."],
  },
  () => PublishMetricsInput,
  () => PublishMetricsOutput
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{ResourceArn}", 200],
    [_en]: ["api."],
  },
  () => TagResourceInput,
  () => TagResourceOutput
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{ResourceArn}", 200],
    [_en]: ["api."],
  },
  () => UntagResourceInput,
  () => UntagResourceOutput
);
export var UpdateEnvironment = op(
  n0,
  _UEp,
  {
    [_h]: ["PATCH", "/environments/{Name}", 200],
    [_en]: ["api."],
  },
  () => UpdateEnvironmentInput,
  () => UpdateEnvironmentOutput
);
