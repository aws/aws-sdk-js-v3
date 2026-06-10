const _A = "Action";
const _ADE = "AccessDeniedException";
const _AT = "AccessToken";
const _C = "Condition";
const _CB = "ConditionBlock";
const _CE = "ConflictException";
const _COAT = "CreateOAuth2Token";
const _COATR = "CreateOAuth2TokenRequest";
const _COATRB = "CreateOAuth2TokenRequestBody";
const _COATRBr = "CreateOAuth2TokenResponseBody";
const _COATRr = "CreateOAuth2TokenResponse";
const _DCAC = "DeleteConsoleAuthorizationConfiguration";
const _DCACI = "DeleteConsoleAuthorizationConfigurationInput";
const _DCACO = "DeleteConsoleAuthorizationConfigurationOutput";
const _DRPS = "DeleteResourcePermissionStatement";
const _DRPSI = "DeleteResourcePermissionStatementInput";
const _DRPSO = "DeleteResourcePermissionStatementOutput";
const _E = "Effect";
const _GCAC = "GetConsoleAuthorizationConfiguration";
const _GCACI = "GetConsoleAuthorizationConfigurationInput";
const _GCACO = "GetConsoleAuthorizationConfigurationOutput";
const _GRP = "GetResourcePolicy";
const _GRPI = "GetResourcePolicyInput";
const _GRPO = "GetResourcePolicyOutput";
const _ISE = "InternalServerException";
const _LRPS = "ListResourcePermissionStatements";
const _LRPSI = "ListResourcePermissionStatementsInput";
const _LRPSO = "ListResourcePermissionStatementsOutput";
const _P = "Principal";
const _PCAC = "PutConsoleAuthorizationConfiguration";
const _PCACI = "PutConsoleAuthorizationConfigurationInput";
const _PCACO = "PutConsoleAuthorizationConfigurationOutput";
const _PRPS = "PutResourcePermissionStatement";
const _PRPSI = "PutResourcePermissionStatementInput";
const _PRPSO = "PutResourcePermissionStatementOutput";
const _PS = "PolicyStatement";
const _PSS = "PermissionStatementSummary";
const _PSSe = "PermissionStatementSummaries";
const _PSo = "PolicyStatements";
const _R = "Resource";
const _RNFE = "ResourceNotFoundException";
const _RT = "RefreshToken";
const _S = "Statement";
const _SQEE = "ServiceQuotaExceededException";
const _SRBP = "SigninResourceBasedPolicy";
const _TMRE = "TooManyRequestsError";
const _V = "Version";
const _VE = "ValidationException";
const _a = "action";
const _aKI = "accessKeyId";
const _aT = "accessToken";
const _c = "client";
const _cAE = "consoleAuthorizationEnabled";
const _cI = "clientId";
const _cSV = "consoleSourceVpce";
const _cT = "clientToken";
const _cV = "codeVerifier";
const _co = "code";
const _con = "condition";
const _e = "error";
const _eI = "expiresIn";
const _eP = "excludedPrincipal";
const _ef = "effect";
const _gT = "grantType";
const _h = "http";
const _hE = "httpError";
const _iT = "idToken";
const _jN = "jsonName";
const _m = "message";
const _mR = "maxResults";
const _nT = "nextToken";
const _p = "principal";
const _pS = "permissionStatements";
const _r = "resource";
const _rR = "requestedRegion";
const _rT = "refreshToken";
const _rU = "redirectUri";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.signin";
const _sAK = "secretAccessKey";
const _sI = "statementId";
const _sIo = "sourceIp";
const _sRBP = "signinResourceBasedPolicy";
const _sSV = "signinSourceVpce";
const _sT = "sessionToken";
const _sV = "sourceVpc";
const _sc = "scope";
const _se = "server";
const _si = "sid";
const _st = "statement";
const _tI = "tokenInput";
const _tIa = "targetId";
const _tO = "tokenOutput";
const _tT = "tokenType";
const _v = "version";
const _vSI = "vpcSourceIp";
const n0 = "com.amazonaws.signin";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  AccessDeniedException,
  ConflictException,
  InternalServerException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  TooManyRequestsError,
  ValidationException,
} from "../models/errors";
import { SigninServiceException } from "../models/SigninServiceException";

/* eslint no-var: 0 */
const _s_registry = TypeRegistry.for(_s);
export var SigninServiceException$: StaticErrorSchema = [-3, _s, "SigninServiceException", 0, [], []];
_s_registry.registerError(SigninServiceException$, SigninServiceException);
const n0_registry = TypeRegistry.for(n0);
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c },
  [_e, _m],
  [0, 0], 2
];
n0_registry.registerError(AccessDeniedException$, AccessDeniedException);
export var ConflictException$: StaticErrorSchema = [-3, n0, _CE,
  { [_e]: _c, [_hE]: 409 },
  [_e, _m],
  [0, 0], 2
];
n0_registry.registerError(ConflictException$, ConflictException);
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _se, [_hE]: 500 },
  [_e, _m],
  [0, 0], 2
];
n0_registry.registerError(InternalServerException$, InternalServerException);
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_e, _m],
  [0, 0], 2
];
n0_registry.registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ServiceQuotaExceededException$: StaticErrorSchema = [-3, n0, _SQEE,
  { [_e]: _c, [_hE]: 402 },
  [_e, _m],
  [0, 0], 2
];
n0_registry.registerError(ServiceQuotaExceededException$, ServiceQuotaExceededException);
export var TooManyRequestsError$: StaticErrorSchema = [-3, n0, _TMRE,
  { [_e]: _c, [_hE]: 429 },
  [_e, _m],
  [0, 0], 2
];
n0_registry.registerError(TooManyRequestsError$, TooManyRequestsError);
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c, [_hE]: 400 },
  [_e, _m],
  [0, 0], 2
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
var RefreshToken: StaticSimpleSchema = [0, n0, _RT, 8, 0];
export var AccessToken$: StaticStructureSchema = [3, n0, _AT,
  8,
  [_aKI, _sAK, _sT],
  [[0, { [_jN]: _aKI }], [0, { [_jN]: _sAK }], [0, { [_jN]: _sT }]], 3
];
export var CreateOAuth2TokenRequest$: StaticStructureSchema = [3, n0, _COATR,
  0,
  [_tI],
  [[() => CreateOAuth2TokenRequestBody$, 16]], 1
];
export var CreateOAuth2TokenRequestBody$: StaticStructureSchema = [3, n0, _COATRB,
  0,
  [_cI, _gT, _co, _rU, _cV, _rT],
  [[0, { [_jN]: _cI }], [0, { [_jN]: _gT }], 0, [0, { [_jN]: _rU }], [0, { [_jN]: _cV }], [() => RefreshToken, { [_jN]: _rT }]], 2
];
export var CreateOAuth2TokenResponse$: StaticStructureSchema = [3, n0, _COATRr,
  0,
  [_tO],
  [[() => CreateOAuth2TokenResponseBody$, 16]], 1
];
export var CreateOAuth2TokenResponseBody$: StaticStructureSchema = [3, n0, _COATRBr,
  0,
  [_aT, _tT, _eI, _rT, _iT],
  [[() => AccessToken$, { [_jN]: _aT }], [0, { [_jN]: _tT }], [1, { [_jN]: _eI }], [() => RefreshToken, { [_jN]: _rT }], [0, { [_jN]: _iT }]], 4
];
export var DeleteConsoleAuthorizationConfigurationInput$: StaticStructureSchema = [3, n0, _DCACI,
  0,
  [_tIa],
  [0]
];
export var DeleteConsoleAuthorizationConfigurationOutput$: StaticStructureSchema = [3, n0, _DCACO,
  0,
  [_tIa, _sc, _cAE],
  [0, 0, 2], 3
];
export var DeleteResourcePermissionStatementInput$: StaticStructureSchema = [3, n0, _DRPSI,
  0,
  [_sI, _cT],
  [0, [0, 4]], 1
];
export var DeleteResourcePermissionStatementOutput$: StaticStructureSchema = [3, n0, _DRPSO,
  0,
  [],
  []
];
export var GetConsoleAuthorizationConfigurationInput$: StaticStructureSchema = [3, n0, _GCACI,
  0,
  [_tIa],
  [0]
];
export var GetConsoleAuthorizationConfigurationOutput$: StaticStructureSchema = [3, n0, _GCACO,
  0,
  [_tIa, _sc, _cAE],
  [0, 0, 2], 3
];
export var GetResourcePolicyInput$: StaticStructureSchema = [3, n0, _GRPI,
  0,
  [],
  []
];
export var GetResourcePolicyOutput$: StaticStructureSchema = [3, n0, _GRPO,
  0,
  [_sRBP],
  [[() => SigninResourceBasedPolicy$, 0]], 1
];
export var ListResourcePermissionStatementsInput$: StaticStructureSchema = [3, n0, _LRPSI,
  0,
  [_mR, _nT],
  [1, 0]
];
export var ListResourcePermissionStatementsOutput$: StaticStructureSchema = [3, n0, _LRPSO,
  0,
  [_pS, _nT],
  [() => PermissionStatementSummaries, 0], 1
];
export var PermissionStatementSummary$: StaticStructureSchema = [3, n0, _PSS,
  0,
  [_si, _con],
  [0, [2, n0, _CB, 0, 0, [2, n0, _C, 0, 0, 64 | 0]]], 1
];
export var PolicyStatement$: StaticStructureSchema = [3, n0, _PS,
  0,
  [_ef, _p, _a, _r, _con],
  [[0, { [_jN]: _E }], [128 | 0, { [_jN]: _P }], [64 | 0, { [_jN]: _A }], [0, { [_jN]: _R }], [[2, n0, _CB, 0, 0, [2, n0, _C, 0, 0, 64 | 0]], { [_jN]: _C }]]
];
export var PutConsoleAuthorizationConfigurationInput$: StaticStructureSchema = [3, n0, _PCACI,
  0,
  [_tIa],
  [0]
];
export var PutConsoleAuthorizationConfigurationOutput$: StaticStructureSchema = [3, n0, _PCACO,
  0,
  [_tIa, _sc, _cAE],
  [0, 0, 2], 3
];
export var PutResourcePermissionStatementInput$: StaticStructureSchema = [3, n0, _PRPSI,
  0,
  [_sV, _sSV, _cSV, _vSI, _sIo, _rR, _eP, _cT],
  [0, 0, 0, 0, 0, 0, 0, [0, 4]]
];
export var PutResourcePermissionStatementOutput$: StaticStructureSchema = [3, n0, _PRPSO,
  0,
  [_sI],
  [0], 1
];
export var SigninResourceBasedPolicy$: StaticStructureSchema = [3, n0, _SRBP,
  0,
  [_v, _st],
  [[0, { [_jN]: _V }], [() => PolicyStatements, { [_jN]: _S }]]
];
var ConditionValues = 64 | 0;
var PermissionStatementSummaries: StaticListSchema = [1, n0, _PSSe,
  0, () => PermissionStatementSummary$
];
var PolicyActions = 64 | 0;
var PolicyStatements: StaticListSchema = [1, n0, _PSo,
  0, [() => PolicyStatement$,
    0]
];
var Condition: StaticMapSchema = [2, n0, _C,
  0, 0, 64 | 0
];
var ConditionBlock: StaticMapSchema = [2, n0, _CB,
  0, 0, [2, n0, _C, 0, 0, 64 | 0]
];
var Principal = 128 | 0;
export var CreateOAuth2Token$: StaticOperationSchema = [9, n0, _COAT,
  { [_h]: ["POST", "/v1/token", 200] }, () => CreateOAuth2TokenRequest$, () => CreateOAuth2TokenResponse$
];
export var DeleteConsoleAuthorizationConfiguration$: StaticOperationSchema = [9, n0, _DCAC,
  { [_h]: ["POST", "/delete-console-authorization-configuration", 200] }, () => DeleteConsoleAuthorizationConfigurationInput$, () => DeleteConsoleAuthorizationConfigurationOutput$
];
export var DeleteResourcePermissionStatement$: StaticOperationSchema = [9, n0, _DRPS,
  { [_h]: ["POST", "/delete-resource-permission-statement", 200] }, () => DeleteResourcePermissionStatementInput$, () => DeleteResourcePermissionStatementOutput$
];
export var GetConsoleAuthorizationConfiguration$: StaticOperationSchema = [9, n0, _GCAC,
  { [_h]: ["POST", "/get-console-authorization-configuration", 200] }, () => GetConsoleAuthorizationConfigurationInput$, () => GetConsoleAuthorizationConfigurationOutput$
];
export var GetResourcePolicy$: StaticOperationSchema = [9, n0, _GRP,
  { [_h]: ["POST", "/get-resource-policy", 200] }, () => GetResourcePolicyInput$, () => GetResourcePolicyOutput$
];
export var ListResourcePermissionStatements$: StaticOperationSchema = [9, n0, _LRPS,
  { [_h]: ["POST", "/list-resource-permission-statements", 200] }, () => ListResourcePermissionStatementsInput$, () => ListResourcePermissionStatementsOutput$
];
export var PutConsoleAuthorizationConfiguration$: StaticOperationSchema = [9, n0, _PCAC,
  { [_h]: ["POST", "/put-console-authorization-configuration", 200] }, () => PutConsoleAuthorizationConfigurationInput$, () => PutConsoleAuthorizationConfigurationOutput$
];
export var PutResourcePermissionStatement$: StaticOperationSchema = [9, n0, _PRPS,
  { [_h]: ["POST", "/put-resource-permission-statement", 200] }, () => PutResourcePermissionStatementInput$, () => PutResourcePermissionStatementOutput$
];
