const _A = "Arn";
const _ACRT = "AssociatedComputeResourceTypes";
const _C = "Configuration";
const _CNC = "CreateNetworkConnector";
const _CNCR = "CreateNetworkConnectorRequest";
const _CNCRr = "CreateNetworkConnectorResponse";
const _CT = "ClientToken";
const _DNC = "DeleteNetworkConnector";
const _DNCR = "DeleteNetworkConnectorRequest";
const _DNCRe = "DeleteNetworkConnectorResponse";
const _GNC = "GetNetworkConnector";
const _GNCR = "GetNetworkConnectorRequest";
const _GNCRe = "GetNetworkConnectorResponse";
const _I = "Id";
const _IPVE = "InvalidParameterValueException";
const _Id = "Identifier";
const _LM = "LastModified";
const _LNC = "ListNetworkConnectors";
const _LNCR = "ListNetworkConnectorsRequest";
const _LNCRi = "ListNetworkConnectorsResponse";
const _LUS = "LastUpdateStatus";
const _LUSR = "LastUpdateStatusReason";
const _LUSRC = "LastUpdateStatusReasonCode";
const _M = "Message";
const _MI = "MaxItems";
const _Ma = "Marker";
const _N = "Name";
const _NC = "NetworkConnectors";
const _NCC = "NetworkConnectorConfiguration";
const _NCL = "NetworkConnectorsList";
const _NCLEE = "NetworkConnectorLimitExceededException";
const _NCS = "NetworkConnectorSummary";
const _NCVEC = "NetworkConnectorVpcEgressConfiguration";
const _NM = "NextMarker";
const _NP = "NetworkProtocol";
const _OR = "OperatorRole";
const _R = "Reason";
const _RA = "Retry-After";
const _RCE = "ResourceConflictException";
const _RNFE = "ResourceNotFoundException";
const _S = "State";
const _SE = "ServiceException";
const _SGI = "SecurityGroupIds";
const _SI = "SubnetIds";
const _SR = "StateReason";
const _SRC = "StateReasonCode";
const _T = "Type";
const _TMRE = "TooManyRequestsException";
const _Ta = "Tags";
const _UNC = "UpdateNetworkConnector";
const _UNCR = "UpdateNetworkConnectorRequest";
const _UNCRp = "UpdateNetworkConnectorResponse";
const _V = "Version";
const _VEC = "VpcEgressConfiguration";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _hQ = "httpQuery";
const _m = "message";
const _rAS = "retryAfterSeconds";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.lambdacore";
const _se = "server";
const n0 = "com.amazonaws.lambdacore";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
  StaticUnionSchema,
} from "@smithy/types";

import {
  InvalidParameterValueException,
  NetworkConnectorLimitExceededException,
  ResourceConflictException,
  ResourceNotFoundException,
  ServiceException,
  TooManyRequestsException,
} from "../models/errors";
import { LambdaCoreServiceException } from "../models/LambdaCoreServiceException";

/* eslint no-var: 0 */
const _s_registry = TypeRegistry.for(_s);
export var LambdaCoreServiceException$: StaticErrorSchema = [-3, _s, "LambdaCoreServiceException", 0, [], []];
_s_registry.registerError(LambdaCoreServiceException$, LambdaCoreServiceException);
const n0_registry = TypeRegistry.for(n0);
export var InvalidParameterValueException$: StaticErrorSchema = [-3, n0, _IPVE,
  { [_e]: _c, [_hE]: 400 },
  [_T, _m],
  [0, 0]
];
n0_registry.registerError(InvalidParameterValueException$, InvalidParameterValueException);
export var NetworkConnectorLimitExceededException$: StaticErrorSchema = [-3, n0, _NCLEE,
  { [_e]: _c, [_hE]: 400 },
  [_T, _m],
  [0, 0]
];
n0_registry.registerError(NetworkConnectorLimitExceededException$, NetworkConnectorLimitExceededException);
export var ResourceConflictException$: StaticErrorSchema = [-3, n0, _RCE,
  { [_e]: _c, [_hE]: 409 },
  [_T, _m],
  [0, 0]
];
n0_registry.registerError(ResourceConflictException$, ResourceConflictException);
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_T, _M],
  [0, 0]
];
n0_registry.registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ServiceException$: StaticErrorSchema = [-3, n0, _SE,
  { [_e]: _se, [_hE]: 500 },
  [_T, _M],
  [0, 0]
];
n0_registry.registerError(ServiceException$, ServiceException);
export var TooManyRequestsException$: StaticErrorSchema = [-3, n0, _TMRE,
  { [_e]: _c, [_hE]: 429 },
  [_rAS, _T, _m, _R],
  [[0, { [_hH]: _RA }], 0, 0, 0]
];
n0_registry.registerError(TooManyRequestsException$, TooManyRequestsException);
/**
 * TypeRegistry instances containing modeled errors.
 * @internal
 *
 */
export const errorTypeRegistries = [
  _s_registry,
  n0_registry,
]
export var CreateNetworkConnectorRequest$: StaticStructureSchema = [3, n0, _CNCR,
  0,
  [_N, _C, _OR, _CT, _Ta],
  [0, () => NetworkConnectorConfiguration$, 0, [0, 4], 128 | 0], 2
];
export var CreateNetworkConnectorResponse$: StaticStructureSchema = [3, n0, _CNCRr,
  0,
  [_A, _N, _I, _C, _OR, _S],
  [0, 0, 0, () => NetworkConnectorConfiguration$, 0, 0], 3
];
export var DeleteNetworkConnectorRequest$: StaticStructureSchema = [3, n0, _DNCR,
  0,
  [_Id],
  [[0, 1]], 1
];
export var DeleteNetworkConnectorResponse$: StaticStructureSchema = [3, n0, _DNCRe,
  0,
  [_A, _N, _I, _C, _OR, _S],
  [0, 0, 0, () => NetworkConnectorConfiguration$, 0, 0], 3
];
export var GetNetworkConnectorRequest$: StaticStructureSchema = [3, n0, _GNCR,
  0,
  [_Id],
  [[0, 1]], 1
];
export var GetNetworkConnectorResponse$: StaticStructureSchema = [3, n0, _GNCRe,
  0,
  [_A, _N, _I, _V, _C, _OR, _S, _SR, _SRC, _LUS, _LUSR, _LUSRC, _LM],
  [0, 0, 0, 1, () => NetworkConnectorConfiguration$, 0, 0, 0, 0, 0, 0, 0, 5], 3
];
export var ListNetworkConnectorsRequest$: StaticStructureSchema = [3, n0, _LNCR,
  0,
  [_S, _Ma, _MI],
  [[0, { [_hQ]: _S }], [0, { [_hQ]: _Ma }], [1, { [_hQ]: _MI }]]
];
export var ListNetworkConnectorsResponse$: StaticStructureSchema = [3, n0, _LNCRi,
  0,
  [_NC, _NM],
  [() => NetworkConnectorsList, 0], 1
];
export var NetworkConnectorSummary$: StaticStructureSchema = [3, n0, _NCS,
  0,
  [_A, _N, _I, _T, _S, _LM],
  [0, 0, 0, 0, 0, 5], 4
];
export var NetworkConnectorVpcEgressConfiguration$: StaticStructureSchema = [3, n0, _NCVEC,
  0,
  [_SI, _SGI, _NP, _ACRT],
  [64 | 0, 64 | 0, 0, 64 | 0]
];
export var UpdateNetworkConnectorRequest$: StaticStructureSchema = [3, n0, _UNCR,
  0,
  [_Id, _C, _OR, _CT],
  [[0, 1], () => NetworkConnectorConfiguration$, 0, [0, 4]], 1
];
export var UpdateNetworkConnectorResponse$: StaticStructureSchema = [3, n0, _UNCRp,
  0,
  [_A, _N, _I, _OR, _C, _S, _LUS, _LUSR, _LM],
  [0, 0, 0, 0, () => NetworkConnectorConfiguration$, 0, 0, 0, 5], 3
];
var AssociatedComputeResourceTypesList = 64 | 0;
var NetworkConnectorSecurityGroupIds = 64 | 0;
var NetworkConnectorsList: StaticListSchema = [1, n0, _NCL,
  0, () => NetworkConnectorSummary$
];
var NetworkConnectorSubnetIds = 64 | 0;
var NetworkConnectorTags = 128 | 0;
export var NetworkConnectorConfiguration$: StaticUnionSchema = [4, n0, _NCC,
  0,
  [_VEC],
  [() => NetworkConnectorVpcEgressConfiguration$]
];
export var CreateNetworkConnector$: StaticOperationSchema = [9, n0, _CNC,
  { [_h]: ["POST", "/2026-04-04/network-connectors", 202] }, () => CreateNetworkConnectorRequest$, () => CreateNetworkConnectorResponse$
];
export var DeleteNetworkConnector$: StaticOperationSchema = [9, n0, _DNC,
  { [_h]: ["DELETE", "/2026-04-04/network-connectors/{Identifier}", 202] }, () => DeleteNetworkConnectorRequest$, () => DeleteNetworkConnectorResponse$
];
export var GetNetworkConnector$: StaticOperationSchema = [9, n0, _GNC,
  { [_h]: ["GET", "/2026-04-04/network-connectors/{Identifier}", 200] }, () => GetNetworkConnectorRequest$, () => GetNetworkConnectorResponse$
];
export var ListNetworkConnectors$: StaticOperationSchema = [9, n0, _LNC,
  { [_h]: ["GET", "/2026-04-04/network-connectors", 200] }, () => ListNetworkConnectorsRequest$, () => ListNetworkConnectorsResponse$
];
export var UpdateNetworkConnector$: StaticOperationSchema = [9, n0, _UNC,
  { [_h]: ["PUT", "/2026-04-04/network-connectors/{Identifier}", 202] }, () => UpdateNetworkConnectorRequest$, () => UpdateNetworkConnectorResponse$
];
