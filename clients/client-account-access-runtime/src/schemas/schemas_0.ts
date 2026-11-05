const _AD = "AccessDetails";
const _ADE = "AccessDeniedException";
const _ADL = "AccessDetailsList";
const _CD = "CredentialsDetails";
const _GRC = "GetRoleCredentials";
const _GRCR = "GetRoleCredentialsRequest";
const _GRCRe = "GetRoleCredentialsResponse";
const _ISE = "InternalServerException";
const _LR = "ListRoles";
const _LRR = "ListRolesRequest";
const _LRRi = "ListRolesResponse";
const _PAD = "ProgrammaticAccessDetails";
const _TE = "ThrottlingException";
const _UE = "UnauthorizedException";
const _VE = "ValidationException";
const _aI = "accountId";
const _aKI = "accessKeyId";
const _aN = "accountName";
const _aT = "accessType";
const _c = "client";
const _cD = "credentialsDetails";
const _e = "error";
const _eA = "expiresAt";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _m = "message";
const _mR = "maxResults";
const _nT = "nextToken";
const _pA = "programmaticAccess";
const _r = "roles";
const _rA = "roleArn";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.accountaccessruntime";
const _sAK = "secretAccessKey";
const _sD = "sessionDuration";
const _sN = "sessionName";
const _sT = "sessionToken";
const _se = "server";
const _tI = "tenantId";
const n0 = "com.amazonaws.accountaccessruntime";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticOperationSchema,
  StaticStructureSchema,
  StaticUnionSchema,
} from "@smithy/types";

import { AccountAccessRuntimeServiceException } from "../models/AccountAccessRuntimeServiceException";
import {
  AccessDeniedException,
  InternalServerException,
  ThrottlingException,
  UnauthorizedException,
  ValidationException,
} from "../models/errors";

/* eslint no-var: 0 */
const _s_registry = new TypeRegistry(_s);
export var AccountAccessRuntimeServiceException$: StaticErrorSchema = [-3, _s, "AccountAccessRuntimeServiceException", 0, [], []];
_s_registry.registerError(AccountAccessRuntimeServiceException$, AccountAccessRuntimeServiceException);
const n0_registry = new TypeRegistry(n0);
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c, [_hE]: 403 },
  [_m],
  [0], 1
];
n0_registry.registerError(AccessDeniedException$, AccessDeniedException);
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _se },
  [_m],
  [0], 1
];
n0_registry.registerError(InternalServerException$, InternalServerException);
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE,
  { [_e]: _c, [_hE]: 429 },
  [_m],
  [0], 1
];
n0_registry.registerError(ThrottlingException$, ThrottlingException);
export var UnauthorizedException$: StaticErrorSchema = [-3, n0, _UE,
  { [_e]: _c, [_hE]: 401 },
  [_m],
  [0], 1
];
n0_registry.registerError(UnauthorizedException$, UnauthorizedException);
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0], 1
];
n0_registry.registerError(ValidationException$, ValidationException);
/**
 * TypeRegistry instances containing modeled errors.
 * @internal
 *
 */
export const errorTypeRegistries = [
  _s_registry,
  n0_registry,
]
export var AccessDetails$: StaticStructureSchema = [3, n0, _AD,
  0,
  [_aI, _rA, _aN],
  [0, 0, 0], 2
];
export var GetRoleCredentialsRequest$: StaticStructureSchema = [3, n0, _GRCR,
  0,
  [_tI, _rA, _aT, _sN, _sD],
  [[0, { [_hQ]: _tI }], [0, { [_hQ]: _rA }], [0, { [_hQ]: _aT }], [0, { [_hQ]: _sN }], [1, { [_hQ]: _sD }]], 3
];
export var GetRoleCredentialsResponse$: StaticStructureSchema = [3, n0, _GRCRe,
  0,
  [_cD],
  [[() => CredentialsDetails$, 0]]
];
export var ListRolesRequest$: StaticStructureSchema = [3, n0, _LRR,
  0,
  [_tI, _mR, _nT],
  [[0, { [_hQ]: _tI }], [1, { [_hQ]: _mR }], [0, { [_hQ]: _nT }]], 1
];
export var ListRolesResponse$: StaticStructureSchema = [3, n0, _LRRi,
  0,
  [_r, _nT],
  [() => AccessDetailsList, 0], 1
];
export var ProgrammaticAccessDetails$: StaticStructureSchema = [3, n0, _PAD,
  8,
  [_aKI, _sAK, _sT, _eA],
  [0, 0, 0, 4], 4
];
var AccessDetailsList: StaticListSchema = [1, n0, _ADL,
  0, () => AccessDetails$
];
export var CredentialsDetails$: StaticUnionSchema = [4, n0, _CD,
  8,
  [_pA],
  [[() => ProgrammaticAccessDetails$, 0]]
];
export var GetRoleCredentials$: StaticOperationSchema = [9, n0, _GRC,
  { [_h]: ["GET", "/access/credentials", 200] }, () => GetRoleCredentialsRequest$, () => GetRoleCredentialsResponse$
];
export var ListRoles$: StaticOperationSchema = [9, n0, _LR,
  { [_h]: ["GET", "/access", 200] }, () => ListRolesRequest$, () => ListRolesResponse$
];
