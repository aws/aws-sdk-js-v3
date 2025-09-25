// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  OutpostOfflineException as __OutpostOfflineException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _ADE,
  _AT,
  _c,
  _CB,
  _CE,
  _CER,
  _CEr,
  _CERr,
  _CIB,
  _COIP,
  _CT,
  _DE,
  _DER,
  _E,
  _e,
  _EA,
  _EC,
  _EI,
  _eI,
  _En,
  _FR,
  _h,
  _hE,
  _hQ,
  _ISE,
  _LE,
  _LER,
  _LERi,
  _LOWS,
  _LOWSR,
  _LOWSRi,
  _LSE,
  _LSER,
  _LSERi,
  _M,
  _MR,
  _mR,
  _NI,
  _NIe,
  _NII,
  _NT,
  _nT,
  _O,
  _OA,
  _OI,
  _oI,
  _OIu,
  _OIw,
  _OOE,
  _Ou,
  _RNFE,
  _S,
  _s,
  _SGI,
  _SI,
  _SOA,
  _TE,
  _VE,
  _VI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

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
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ConflictException
);
export var CreateEndpointRequest = struct(n0, _CER, 0, [_OI, _SI, _SGI, _AT, _COIP], [0, 0, 0, 0, 0]);
export var CreateEndpointResult = struct(n0, _CERr, 0, [_EA], [0]);
export var DeleteEndpointRequest = struct(
  n0,
  _DER,
  0,
  [_EI, _OI],
  [
    [
      0,
      {
        [_hQ]: _eI,
      },
    ],
    [
      0,
      {
        [_hQ]: _oI,
      },
    ],
  ]
);
export var Endpoint = struct(
  n0,
  _E,
  0,
  [_EA, _OIu, _CB, _S, _CT, _NI, _VI, _SI, _SGI, _AT, _COIP, _FR],
  [0, 0, 0, 0, 4, () => NetworkInterfaces, 0, 0, 0, 0, 0, () => FailedReason]
);
export var FailedReason = struct(n0, _FR, 0, [_EC, _M], [0, 0]);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __InternalServerException
);
export var ListEndpointsRequest = struct(
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
export var ListEndpointsResult = struct(n0, _LERi, 0, [_En, _NT], [() => Endpoints, 0]);
export var ListOutpostsWithS3Request = struct(
  n0,
  _LOWSR,
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
export var ListOutpostsWithS3Result = struct(n0, _LOWSRi, 0, [_O, _NT], [() => Outposts, 0]);
export var ListSharedEndpointsRequest = struct(
  n0,
  _LSER,
  0,
  [_NT, _MR, _OI],
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
    [
      0,
      {
        [_hQ]: _oI,
      },
    ],
  ]
);
export var ListSharedEndpointsResult = struct(n0, _LSERi, 0, [_En, _NT], [() => Endpoints, 0]);
export var NetworkInterface = struct(n0, _NIe, 0, [_NII], [0]);
export var Outpost = struct(n0, _Ou, 0, [_OA, _SOA, _OI, _OIw, _CIB], [0, 0, 0, 0, 1]);
export var OutpostOfflineException = error(
  n0,
  _OOE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __OutpostOfflineException
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __ResourceNotFoundException
);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M],
  [0],

  __ThrottlingException
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __ValidationException
);
export var Unit = "unit" as const;

export var Endpoints = list(n0, _En, 0, () => Endpoint);
export var NetworkInterfaces = list(n0, _NI, 0, () => NetworkInterface);
export var Outposts = list(n0, _O, 0, () => Outpost);
export var CreateEndpoint = op(
  n0,
  _CEr,
  {
    [_h]: ["POST", "/S3Outposts/CreateEndpoint", 200],
  },
  () => CreateEndpointRequest,
  () => CreateEndpointResult
);
export var DeleteEndpoint = op(
  n0,
  _DE,
  {
    [_h]: ["DELETE", "/S3Outposts/DeleteEndpoint", 200],
  },
  () => DeleteEndpointRequest,
  () => Unit
);
export var ListEndpoints = op(
  n0,
  _LE,
  {
    [_h]: ["GET", "/S3Outposts/ListEndpoints", 200],
  },
  () => ListEndpointsRequest,
  () => ListEndpointsResult
);
export var ListOutpostsWithS3 = op(
  n0,
  _LOWS,
  {
    [_h]: ["GET", "/S3Outposts/ListOutpostsWithS3", 200],
  },
  () => ListOutpostsWithS3Request,
  () => ListOutpostsWithS3Result
);
export var ListSharedEndpoints = op(
  n0,
  _LSE,
  {
    [_h]: ["GET", "/S3Outposts/ListSharedEndpoints", 200],
  },
  () => ListSharedEndpointsRequest,
  () => ListSharedEndpointsResult
);
