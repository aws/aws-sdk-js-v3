const _CA = "ConnectedAt";
const _CI = "ConnectionId";
const _D = "Data";
const _DC = "DeleteConnection";
const _DCR = "DeleteConnectionRequest";
const _FE = "ForbiddenException";
const _GC = "GetConnection";
const _GCR = "GetConnectionRequest";
const _GCRe = "GetConnectionResponse";
const _GE = "GoneException";
const _I = "Identity";
const _LAA = "LastActiveAt";
const _LEE = "LimitExceededException";
const _M = "Message";
const _PTC = "PostToConnection";
const _PTCR = "PostToConnectionRequest";
const _PTLE = "PayloadTooLargeException";
const _SI = "SourceIp";
const _UA = "UserAgent";
const _c = "client";
const _cA = "connectedAt";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _i = "identity";
const _jN = "jsonName";
const _lAA = "lastActiveAt";
const _m = "message";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.apigatewaymanagementapi";
const _sI = "sourceIp";
const _uA = "userAgent";
const n0 = "com.amazonaws.apigatewaymanagementapi";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import { ApiGatewayManagementApiServiceException as __ApiGatewayManagementApiServiceException } from "../models/ApiGatewayManagementApiServiceException";
import {
  ForbiddenException as __ForbiddenException,
  GoneException as __GoneException,
  LimitExceededException as __LimitExceededException,
  PayloadTooLargeException as __PayloadTooLargeException,
} from "../models/errors";

/* eslint no-var: 0 */

export var DeleteConnectionRequest: StaticStructureSchema = [3, n0, _DCR, 0, [_CI], [[0, 1]]];
export var ForbiddenException: StaticErrorSchema = [
  -3,
  n0,
  _FE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [],
  [],
];
TypeRegistry.for(n0).registerError(ForbiddenException, __ForbiddenException);

export var GetConnectionRequest: StaticStructureSchema = [3, n0, _GCR, 0, [_CI], [[0, 1]]];
export var GetConnectionResponse: StaticStructureSchema = [
  3,
  n0,
  _GCRe,
  0,
  [_CA, _I, _LAA],
  [
    [
      5,
      {
        [_jN]: _cA,
      },
    ],
    [
      () => Identity,
      {
        [_jN]: _i,
      },
    ],
    [
      5,
      {
        [_jN]: _lAA,
      },
    ],
  ],
];
export var GoneException: StaticErrorSchema = [
  -3,
  n0,
  _GE,
  {
    [_e]: _c,
    [_hE]: 410,
  },
  [],
  [],
];
TypeRegistry.for(n0).registerError(GoneException, __GoneException);

export var Identity: StaticStructureSchema = [
  3,
  n0,
  _I,
  0,
  [_SI, _UA],
  [
    [
      0,
      {
        [_jN]: _sI,
      },
    ],
    [
      0,
      {
        [_jN]: _uA,
      },
    ],
  ],
];
export var LimitExceededException: StaticErrorSchema = [
  -3,
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [],
  [],
];
TypeRegistry.for(n0).registerError(LimitExceededException, __LimitExceededException);

export var PayloadTooLargeException: StaticErrorSchema = [
  -3,
  n0,
  _PTLE,
  {
    [_e]: _c,
    [_hE]: 413,
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
];
TypeRegistry.for(n0).registerError(PayloadTooLargeException, __PayloadTooLargeException);

export var PostToConnectionRequest: StaticStructureSchema = [
  3,
  n0,
  _PTCR,
  0,
  [_D, _CI],
  [
    [21, 16],
    [0, 1],
  ],
];
export var __Unit = "unit" as const;

export var ApiGatewayManagementApiServiceException: StaticErrorSchema = [
  -3,
  _s,
  "ApiGatewayManagementApiServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_s).registerError(ApiGatewayManagementApiServiceException, __ApiGatewayManagementApiServiceException);

export var DeleteConnection: StaticOperationSchema = [
  9,
  n0,
  _DC,
  {
    [_h]: ["DELETE", "/@connections/{ConnectionId}", 204],
  },
  () => DeleteConnectionRequest,
  () => __Unit,
];
export var GetConnection: StaticOperationSchema = [
  9,
  n0,
  _GC,
  {
    [_h]: ["GET", "/@connections/{ConnectionId}", 200],
  },
  () => GetConnectionRequest,
  () => GetConnectionResponse,
];
export var PostToConnection: StaticOperationSchema = [
  9,
  n0,
  _PTC,
  {
    [_h]: ["POST", "/@connections/{ConnectionId}", 200],
  },
  () => PostToConnectionRequest,
  () => __Unit,
];
