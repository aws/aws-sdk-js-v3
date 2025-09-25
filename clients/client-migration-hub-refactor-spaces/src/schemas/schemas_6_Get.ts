// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AD,
  _AGI,
  _AGP,
  _AGPC,
  _AI,
  _AIc,
  _AIp,
  _C,
  _CBAI,
  _CT,
  _D,
  _E,
  _EI,
  _EIn,
  _ER,
  _ES,
  _ESL,
  _ESn,
  _ET,
  _GA,
  _GAR,
  _GARe,
  _GE,
  _GER,
  _GERe,
  _h,
  _hQ,
  _LEi,
  _LER,
  _LERi,
  _LUT,
  _M,
  _MR,
  _mR,
  _N,
  _NA,
  _NFT,
  _NN,
  _NT,
  _nT,
  _OAI,
  _PT,
  _PU,
  _RIe,
  _RT,
  _S,
  _SN,
  _T,
  _TGI,
  _VI,
  _VLI,
  n0,
  TagMap,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ApiGatewayProxyConfig = struct(n0, _AGPC, 0, [_PU, _AGI, _VLI, _NA, _NN, _ET, _SN], [0, 0, 0, 0, 0, 0, 0]);
export var EnvironmentSummary = struct(
  n0,
  _ES,
  0,
  [_N, _A, _D, _EI, _NFT, _OAI, _TGI, _S, _T, _E, _LUT, _CT],
  [0, 0, 0, 0, 0, 0, 0, 0, [() => TagMap, 0], () => ErrorResponse, 4, 4]
);
export var ErrorResponse = struct(n0, _ER, 0, [_C, _M, _AIc, _RIe, _RT, _AD], [0, 0, 0, 0, 0, 128 | 0]);
export var GetApplicationRequest = struct(
  n0,
  _GAR,
  0,
  [_EIn, _AIp],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetApplicationResponse = struct(
  n0,
  _GARe,
  0,
  [_N, _A, _OAI, _CBAI, _AI, _EI, _VI, _PT, _AGP, _S, _T, _E, _LUT, _CT],
  [0, 0, 0, 0, 0, 0, 0, 0, () => ApiGatewayProxyConfig, 0, [() => TagMap, 0], () => ErrorResponse, 4, 4]
);
export var GetEnvironmentRequest = struct(n0, _GER, 0, [_EIn], [[0, 1]]);
export var GetEnvironmentResponse = struct(
  n0,
  _GERe,
  0,
  [_N, _A, _D, _EI, _NFT, _OAI, _TGI, _S, _T, _E, _LUT, _CT],
  [0, 0, 0, 0, 0, 0, 0, 0, [() => TagMap, 0], () => ErrorResponse, 4, 4]
);
export var ListEnvironmentsRequest = struct(
  n0,
  _LER,
  0,
  [_NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListEnvironmentsResponse = struct(n0, _LERi, 0, [_ESL, _NT], [[() => EnvironmentSummaries, 0], 0]);
export var EnvironmentSummaries = list(n0, _ESn, 0, [() => EnvironmentSummary, 0]);
export var AdditionalDetails = 128 | 0;

export var GetApplication = op(
  n0,
  _GA,
  {
    [_h]: ["GET", "/environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}", 200],
  },
  () => GetApplicationRequest,
  () => GetApplicationResponse
);
export var GetEnvironment = op(
  n0,
  _GE,
  {
    [_h]: ["GET", "/environments/{EnvironmentIdentifier}", 200],
  },
  () => GetEnvironmentRequest,
  () => GetEnvironmentResponse
);
export var ListEnvironments = op(
  n0,
  _LEi,
  {
    [_h]: ["GET", "/environments", 200],
  },
  () => ListEnvironmentsRequest,
  () => ListEnvironmentsResponse
);
