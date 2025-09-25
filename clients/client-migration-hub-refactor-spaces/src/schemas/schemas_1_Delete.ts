// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
} from "../models/index";
import {
  _A,
  _AGI,
  _AGP,
  _AGPI,
  _AGPS,
  _AI,
  _AIp,
  _AS,
  _ASc,
  _ASL,
  _ASP,
  _ASp,
  _c,
  _CA,
  _CAR,
  _CARr,
  _CBAI,
  _CE,
  _CER,
  _CEr,
  _CERr,
  _CR,
  _CRR,
  _CRRr,
  _CS,
  _CSR,
  _CSRr,
  _CT,
  _CTl,
  _D,
  _DA,
  _DAR,
  _DARe,
  _DE,
  _DER,
  _DERe,
  _DR,
  _DRe,
  _DRI,
  _DRR,
  _DRRe,
  _DS,
  _DSR,
  _DSRe,
  _E,
  _e,
  _EI,
  _EIn,
  _ET,
  _h,
  _hE,
  _hQ,
  _HU,
  _ICP,
  _LA,
  _LAR,
  _LARi,
  _LE,
  _LEI,
  _LES,
  _LR,
  _LRR,
  _LRRi,
  _LS,
  _LSR,
  _LSRi,
  _LUT,
  _M,
  _Me,
  _MR,
  _mR,
  _N,
  _NA,
  _NFT,
  _NN,
  _NT,
  _nT,
  _OAI,
  _PRTI,
  _PT,
  _PU,
  _QC,
  _RI,
  _RIo,
  _RIou,
  _RS,
  _RSL,
  _RSo,
  _RT,
  _RTo,
  _S,
  _SC,
  _SI,
  _SIe,
  _SN,
  _SP,
  _SQEE,
  _SS,
  _SSe,
  _SSL,
  _T,
  _U,
  _UE,
  _UEI,
  _UES,
  _UPR,
  _UPRI,
  _VI,
  _VLI,
  n0,
  TagMap,
} from "./schemas_0";
import { ErrorResponse } from "./schemas_6_Get";

/* eslint no-var: 0 */

export var ApiGatewayProxyInput = struct(n0, _AGPI, 0, [_ET, _SN], [0, 0]);
export var ApiGatewayProxySummary = struct(n0, _AGPS, 0, [_PU, _AGI, _VLI, _NA, _NN, _ET, _SN], [0, 0, 0, 0, 0, 0, 0]);
export var ApplicationSummary = struct(
  n0,
  _AS,
  0,
  [_N, _A, _OAI, _CBAI, _AI, _EI, _VI, _PT, _AGP, _S, _T, _E, _LUT, _CT],
  [0, 0, 0, 0, 0, 0, 0, 0, () => ApiGatewayProxySummary, 0, [() => TagMap, 0], () => ErrorResponse, 4, 4]
);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M, _RI, _RT],
  [0, 0, 0],

  __ConflictException
);
export var CreateApplicationRequest = struct(
  n0,
  _CAR,
  0,
  [_N, _EIn, _VI, _PT, _AGP, _T, _CTl],
  [0, [0, 1], 0, 0, () => ApiGatewayProxyInput, [() => TagMap, 0], [0, 4]]
);
export var CreateApplicationResponse = struct(
  n0,
  _CARr,
  0,
  [_N, _A, _OAI, _CBAI, _AI, _EI, _VI, _PT, _AGP, _S, _T, _LUT, _CT],
  [0, 0, 0, 0, 0, 0, 0, 0, () => ApiGatewayProxyInput, 0, [() => TagMap, 0], 4, 4]
);
export var CreateEnvironmentRequest = struct(
  n0,
  _CER,
  0,
  [_N, _D, _NFT, _T, _CTl],
  [0, 0, 0, [() => TagMap, 0], [0, 4]]
);
export var CreateEnvironmentResponse = struct(
  n0,
  _CERr,
  0,
  [_N, _A, _D, _EI, _NFT, _OAI, _S, _T, _LUT, _CT],
  [0, 0, 0, 0, 0, 0, 0, [() => TagMap, 0], 4, 4]
);
export var CreateRouteRequest = struct(
  n0,
  _CRR,
  0,
  [_EIn, _AIp, _SI, _RTo, _DR, _UPR, _T, _CTl],
  [[0, 1], [0, 1], 0, 0, () => DefaultRouteInput, () => UriPathRouteInput, [() => TagMap, 0], [0, 4]]
);
export var CreateRouteResponse = struct(
  n0,
  _CRRr,
  0,
  [_RIo, _A, _OAI, _CBAI, _RTo, _SIe, _AI, _UPR, _S, _T, _LUT, _CT],
  [0, 0, 0, 0, 0, 0, 0, () => UriPathRouteInput, 0, [() => TagMap, 0], 4, 4]
);
export var CreateServiceRequest = struct(
  n0,
  _CSR,
  0,
  [_N, _D, _EIn, _AIp, _VI, _ET, _UE, _LE, _T, _CTl],
  [0, 0, [0, 1], [0, 1], 0, 0, () => UrlEndpointInput, () => LambdaEndpointInput, [() => TagMap, 0], [0, 4]]
);
export var CreateServiceResponse = struct(
  n0,
  _CSRr,
  0,
  [_SIe, _N, _A, _OAI, _CBAI, _D, _EI, _AI, _VI, _ET, _UE, _LE, _S, _T, _LUT, _CT],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, () => UrlEndpointInput, () => LambdaEndpointInput, 0, [() => TagMap, 0], 4, 4]
);
export var DefaultRouteInput = struct(n0, _DRI, 0, [_ASc], [0]);
export var DeleteApplicationRequest = struct(
  n0,
  _DAR,
  0,
  [_EIn, _AIp],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteApplicationResponse = struct(n0, _DARe, 0, [_N, _A, _AI, _EI, _S, _LUT], [0, 0, 0, 0, 0, 4]);
export var DeleteEnvironmentRequest = struct(n0, _DER, 0, [_EIn], [[0, 1]]);
export var DeleteEnvironmentResponse = struct(n0, _DERe, 0, [_N, _A, _EI, _S, _LUT], [0, 0, 0, 0, 4]);
export var DeleteRouteRequest = struct(
  n0,
  _DRR,
  0,
  [_EIn, _AIp, _RIou],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteRouteResponse = struct(n0, _DRRe, 0, [_RIo, _A, _SIe, _AI, _S, _LUT], [0, 0, 0, 0, 0, 4]);
export var DeleteServiceRequest = struct(
  n0,
  _DSR,
  0,
  [_EIn, _AIp, _SI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteServiceResponse = struct(n0, _DSRe, 0, [_SIe, _N, _A, _EI, _AI, _S, _LUT], [0, 0, 0, 0, 0, 0, 4]);
export var LambdaEndpointInput = struct(n0, _LEI, 0, [_A], [0]);
export var LambdaEndpointSummary = struct(n0, _LES, 0, [_A], [0]);
export var ListApplicationsRequest = struct(
  n0,
  _LAR,
  0,
  [_EIn, _NT, _MR],
  [
    [0, 1],
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
export var ListApplicationsResponse = struct(n0, _LARi, 0, [_ASL, _NT], [[() => ApplicationSummaries, 0], 0]);
export var ListRoutesRequest = struct(
  n0,
  _LRR,
  0,
  [_EIn, _AIp, _NT, _MR],
  [
    [0, 1],
    [0, 1],
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
export var ListRoutesResponse = struct(n0, _LRRi, 0, [_RSL, _NT], [[() => RouteSummaries, 0], 0]);
export var ListServicesRequest = struct(
  n0,
  _LSR,
  0,
  [_EIn, _AIp, _NT, _MR],
  [
    [0, 1],
    [0, 1],
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
export var ListServicesResponse = struct(n0, _LSRi, 0, [_SSL, _NT], [[() => ServiceSummaries, 0], 0]);
export var RouteSummary = struct(
  n0,
  _RS,
  0,
  [_RIo, _A, _OAI, _CBAI, _RTo, _SIe, _AI, _EI, _SP, _Me, _ICP, _PRTI, _S, _T, _E, _LUT, _CT, _ASP],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 64 | 0, 2, 128 | 0, 0, [() => TagMap, 0], () => ErrorResponse, 4, 4, 2]
);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_M, _RI, _RT, _QC, _SC],
  [0, 0, 0, 0, 0],

  __ServiceQuotaExceededException
);
export var ServiceSummary = struct(
  n0,
  _SS,
  0,
  [_SIe, _N, _A, _OAI, _CBAI, _D, _EI, _AI, _VI, _ET, _UE, _LE, _S, _T, _E, _LUT, _CT],
  [
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
    () => UrlEndpointSummary,
    () => LambdaEndpointSummary,
    0,
    [() => TagMap, 0],
    () => ErrorResponse,
    4,
    4,
  ]
);
export var UriPathRouteInput = struct(n0, _UPRI, 0, [_SP, _ASc, _Me, _ICP, _ASP], [0, 0, 64 | 0, 2, 2]);
export var UrlEndpointInput = struct(n0, _UEI, 0, [_U, _HU], [0, 0]);
export var UrlEndpointSummary = struct(n0, _UES, 0, [_U, _HU], [0, 0]);
export var ApplicationSummaries = list(n0, _ASp, 0, [() => ApplicationSummary, 0]);
export var RouteSummaries = list(n0, _RSo, 0, [() => RouteSummary, 0]);
export var ServiceSummaries = list(n0, _SSe, 0, [() => ServiceSummary, 0]);
export var CreateApplication = op(
  n0,
  _CA,
  {
    [_h]: ["POST", "/environments/{EnvironmentIdentifier}/applications", 200],
  },
  () => CreateApplicationRequest,
  () => CreateApplicationResponse
);
export var CreateEnvironment = op(
  n0,
  _CEr,
  {
    [_h]: ["POST", "/environments", 200],
  },
  () => CreateEnvironmentRequest,
  () => CreateEnvironmentResponse
);
export var CreateRoute = op(
  n0,
  _CR,
  {
    [_h]: ["POST", "/environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/routes", 200],
  },
  () => CreateRouteRequest,
  () => CreateRouteResponse
);
export var CreateService = op(
  n0,
  _CS,
  {
    [_h]: ["POST", "/environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/services", 200],
  },
  () => CreateServiceRequest,
  () => CreateServiceResponse
);
export var DeleteApplication = op(
  n0,
  _DA,
  {
    [_h]: ["DELETE", "/environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}", 200],
  },
  () => DeleteApplicationRequest,
  () => DeleteApplicationResponse
);
export var DeleteEnvironment = op(
  n0,
  _DE,
  {
    [_h]: ["DELETE", "/environments/{EnvironmentIdentifier}", 200],
  },
  () => DeleteEnvironmentRequest,
  () => DeleteEnvironmentResponse
);
export var DeleteRoute = op(
  n0,
  _DRe,
  {
    [_h]: [
      "DELETE",
      "/environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/routes/{RouteIdentifier}",
      200,
    ],
  },
  () => DeleteRouteRequest,
  () => DeleteRouteResponse
);
export var DeleteService = op(
  n0,
  _DS,
  {
    [_h]: [
      "DELETE",
      "/environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/services/{ServiceIdentifier}",
      200,
    ],
  },
  () => DeleteServiceRequest,
  () => DeleteServiceResponse
);
export var ListApplications = op(
  n0,
  _LA,
  {
    [_h]: ["GET", "/environments/{EnvironmentIdentifier}/applications", 200],
  },
  () => ListApplicationsRequest,
  () => ListApplicationsResponse
);
export var ListRoutes = op(
  n0,
  _LR,
  {
    [_h]: ["GET", "/environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/routes", 200],
  },
  () => ListRoutesRequest,
  () => ListRoutesResponse
);
export var ListServices = op(
  n0,
  _LS,
  {
    [_h]: ["GET", "/environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/services", 200],
  },
  () => ListServicesRequest,
  () => ListServicesResponse
);
