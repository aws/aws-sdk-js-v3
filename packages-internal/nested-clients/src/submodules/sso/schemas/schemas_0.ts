const _ATT = "AccessTokenType";
const _GRC = "GetRoleCredentials";
const _GRCR = "GetRoleCredentialsRequest";
const _GRCRe = "GetRoleCredentialsResponse";
const _IRE = "InvalidRequestException";
const _RC = "RoleCredentials";
const _RNFE = "ResourceNotFoundException";
const _SAKT = "SecretAccessKeyType";
const _STT = "SessionTokenType";
const _TMRE = "TooManyRequestsException";
const _UE = "UnauthorizedException";
const _aI = "accountId";
const _aKI = "accessKeyId";
const _aT = "accessToken";
const _ai = "account_id";
const _c = "client";
const _e = "error";
const _ex = "expiration";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _hQ = "httpQuery";
const _m = "message";
const _rC = "roleCredentials";
const _rN = "roleName";
const _rn = "role_name";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.sso";
const _sAK = "secretAccessKey";
const _sT = "sessionToken";
const _xasbt = "x-amz-sso_bearer_token";
const n0 = "com.amazonaws.sso";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  InvalidRequestException,
  ResourceNotFoundException,
  TooManyRequestsException,
  UnauthorizedException,
} from "../models/errors";
import { SSOServiceException } from "../models/SSOServiceException";

/* eslint no-var: 0 */
const _s_registry = TypeRegistry.for(_s);
export var SSOServiceException$: StaticErrorSchema = [-3, _s, "SSOServiceException", 0, [], []];
_s_registry.registerError(SSOServiceException$, SSOServiceException);
const n0_registry = TypeRegistry.for(n0);
export var InvalidRequestException$: StaticErrorSchema = [-3, n0, _IRE, { [_e]: _c, [_hE]: 400 }, [_m], [0]];
n0_registry.registerError(InvalidRequestException$, InvalidRequestException);
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE, { [_e]: _c, [_hE]: 404 }, [_m], [0]];
n0_registry.registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var TooManyRequestsException$: StaticErrorSchema = [-3, n0, _TMRE, { [_e]: _c, [_hE]: 429 }, [_m], [0]];
n0_registry.registerError(TooManyRequestsException$, TooManyRequestsException);
export var UnauthorizedException$: StaticErrorSchema = [-3, n0, _UE, { [_e]: _c, [_hE]: 401 }, [_m], [0]];
n0_registry.registerError(UnauthorizedException$, UnauthorizedException);
/**
 * TypeRegistry instances containing modeled errors.
 * @internal
 *
 */
export const errorTypeRegistries = [_s_registry, n0_registry];
var AccessTokenType: StaticSimpleSchema = [0, n0, _ATT, 8, 0];
var SecretAccessKeyType: StaticSimpleSchema = [0, n0, _SAKT, 8, 0];
var SessionTokenType: StaticSimpleSchema = [0, n0, _STT, 8, 0];
export var GetRoleCredentialsRequest$: StaticStructureSchema = [
  3,
  n0,
  _GRCR,
  0,
  [_rN, _aI, _aT],
  [
    [0, { [_hQ]: _rn }],
    [0, { [_hQ]: _ai }],
    [() => AccessTokenType, { [_hH]: _xasbt }],
  ],
  3,
];
export var GetRoleCredentialsResponse$: StaticStructureSchema = [
  3,
  n0,
  _GRCRe,
  0,
  [_rC],
  [[() => RoleCredentials$, 0]],
];
export var RoleCredentials$: StaticStructureSchema = [
  3,
  n0,
  _RC,
  0,
  [_aKI, _sAK, _sT, _ex],
  [0, [() => SecretAccessKeyType, 0], [() => SessionTokenType, 0], 1],
];
export var GetRoleCredentials$: StaticOperationSchema = [
  9,
  n0,
  _GRC,
  { [_h]: ["GET", "/federation/credentials", 200] },
  () => GetRoleCredentialsRequest$,
  () => GetRoleCredentialsResponse$,
];
