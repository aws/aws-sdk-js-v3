const _AI = "AccountId";
const _AKI = "AccessKeyId";
const _C = "Credentials";
const _CRA = "CustomRoleArn";
const _E = "Expiration";
const _ESE = "ExternalServiceException";
const _GCFI = "GetCredentialsForIdentity";
const _GCFII = "GetCredentialsForIdentityInput";
const _GCFIR = "GetCredentialsForIdentityResponse";
const _GI = "GetId";
const _GII = "GetIdInput";
const _GIR = "GetIdResponse";
const _IEE = "InternalErrorException";
const _II = "IdentityId";
const _IIPCE = "InvalidIdentityPoolConfigurationException";
const _IPE = "InvalidParameterException";
const _IPI = "IdentityPoolId";
const _IPT = "IdentityProviderToken";
const _L = "Logins";
const _LEE = "LimitExceededException";
const _LM = "LoginsMap";
const _NAE = "NotAuthorizedException";
const _RCE = "ResourceConflictException";
const _RNFE = "ResourceNotFoundException";
const _SK = "SecretKey";
const _SKS = "SecretKeyString";
const _ST = "SessionToken";
const _TMRE = "TooManyRequestsException";
const _c = "client";
const _e = "error";
const _hE = "httpError";
const _m = "message";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.cognitoidentity";
const _se = "server";
const n0 = "com.amazonaws.cognitoidentity";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { CognitoIdentityServiceException } from "../models/CognitoIdentityServiceException";
import {
  ExternalServiceException,
  InternalErrorException,
  InvalidIdentityPoolConfigurationException,
  InvalidParameterException,
  LimitExceededException,
  NotAuthorizedException,
  ResourceConflictException,
  ResourceNotFoundException,
  TooManyRequestsException,
} from "../models/errors";

/* eslint no-var: 0 */
const _s_registry = TypeRegistry.for(_s);
export var CognitoIdentityServiceException$: StaticErrorSchema = [-3, _s, "CognitoIdentityServiceException", 0, [], []];
_s_registry.registerError(CognitoIdentityServiceException$, CognitoIdentityServiceException);
const n0_registry = TypeRegistry.for(n0);
export var ExternalServiceException$: StaticErrorSchema = [-3, n0, _ESE, { [_e]: _c, [_hE]: 400 }, [_m], [0]];
n0_registry.registerError(ExternalServiceException$, ExternalServiceException);
export var InternalErrorException$: StaticErrorSchema = [-3, n0, _IEE, { [_e]: _se }, [_m], [0]];
n0_registry.registerError(InternalErrorException$, InternalErrorException);
export var InvalidIdentityPoolConfigurationException$: StaticErrorSchema = [
  -3,
  n0,
  _IIPCE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0],
];
n0_registry.registerError(InvalidIdentityPoolConfigurationException$, InvalidIdentityPoolConfigurationException);
export var InvalidParameterException$: StaticErrorSchema = [-3, n0, _IPE, { [_e]: _c, [_hE]: 400 }, [_m], [0]];
n0_registry.registerError(InvalidParameterException$, InvalidParameterException);
export var LimitExceededException$: StaticErrorSchema = [-3, n0, _LEE, { [_e]: _c, [_hE]: 400 }, [_m], [0]];
n0_registry.registerError(LimitExceededException$, LimitExceededException);
export var NotAuthorizedException$: StaticErrorSchema = [-3, n0, _NAE, { [_e]: _c, [_hE]: 403 }, [_m], [0]];
n0_registry.registerError(NotAuthorizedException$, NotAuthorizedException);
export var ResourceConflictException$: StaticErrorSchema = [-3, n0, _RCE, { [_e]: _c, [_hE]: 409 }, [_m], [0]];
n0_registry.registerError(ResourceConflictException$, ResourceConflictException);
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE, { [_e]: _c, [_hE]: 404 }, [_m], [0]];
n0_registry.registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var TooManyRequestsException$: StaticErrorSchema = [-3, n0, _TMRE, { [_e]: _c, [_hE]: 429 }, [_m], [0]];
n0_registry.registerError(TooManyRequestsException$, TooManyRequestsException);
/**
 * TypeRegistry instances containing modeled errors.
 * @internal
 *
 */
export const errorTypeRegistries = [_s_registry, n0_registry];
var IdentityProviderToken: StaticSimpleSchema = [0, n0, _IPT, 8, 0];
var SecretKeyString: StaticSimpleSchema = [0, n0, _SKS, 8, 0];
export var Credentials$: StaticStructureSchema = [
  3,
  n0,
  _C,
  0,
  [_AKI, _SK, _ST, _E],
  [0, [() => SecretKeyString, 0], 0, 4],
];
export var GetCredentialsForIdentityInput$: StaticStructureSchema = [
  3,
  n0,
  _GCFII,
  0,
  [_II, _L, _CRA],
  [0, [() => LoginsMap, 0], 0],
  1,
];
export var GetCredentialsForIdentityResponse$: StaticStructureSchema = [
  3,
  n0,
  _GCFIR,
  0,
  [_II, _C],
  [0, [() => Credentials$, 0]],
];
export var GetIdInput$: StaticStructureSchema = [3, n0, _GII, 0, [_IPI, _AI, _L], [0, 0, [() => LoginsMap, 0]], 1];
export var GetIdResponse$: StaticStructureSchema = [3, n0, _GIR, 0, [_II], [0]];
var LoginsMap: StaticMapSchema = [2, n0, _LM, 0, [0, 0], [() => IdentityProviderToken, 0]];
export var GetCredentialsForIdentity$: StaticOperationSchema = [
  9,
  n0,
  _GCFI,
  0,
  () => GetCredentialsForIdentityInput$,
  () => GetCredentialsForIdentityResponse$,
];
export var GetId$: StaticOperationSchema = [9, n0, _GI, 0, () => GetIdInput$, () => GetIdResponse$];
