const _ADE = "AccessDeniedException";
const _ARFPI = "AssumeRoleForPodIdentity";
const _ARFPIR = "AssumeRoleForPodIdentityRequest";
const _ARFPIRs = "AssumeRoleForPodIdentityResponse";
const _ARU = "AssumedRoleUser";
const _C = "Credentials";
const _ETE = "ExpiredTokenException";
const _IPE = "InvalidParameterException";
const _IRE = "InvalidRequestException";
const _ISE = "InternalServerException";
const _ITE = "InvalidTokenException";
const _JT = "JwtToken";
const _PIA = "PodIdentityAssociation";
const _RNFE = "ResourceNotFoundException";
const _S = "Subject";
const _SUE = "ServiceUnavailableException";
const _TE = "ThrottlingException";
const _a = "arn";
const _aA = "associationArn";
const _aI = "associationId";
const _aKI = "accessKeyId";
const _aRI = "assumeRoleId";
const _aRU = "assumedRoleUser";
const _au = "audience";
const _c = "client";
const _cN = "clusterName";
const _cr = "credentials";
const _e = "error";
const _ex = "expiration";
const _h = "http";
const _hE = "httpError";
const _m = "message";
const _n = "namespace";
const _pIA = "podIdentityAssociation";
const _s = "subject";
const _sA = "serviceAccount";
const _sAK = "secretAccessKey";
const _sT = "sessionToken";
const _se = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.eksauth";
const _t = "token";
const n0 = "com.amazonaws.eksauth";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { EKSAuthServiceException } from "../models/EKSAuthServiceException";
import {
  AccessDeniedException,
  ExpiredTokenException,
  InternalServerException,
  InvalidParameterException,
  InvalidRequestException,
  InvalidTokenException,
  ResourceNotFoundException,
  ServiceUnavailableException,
  ThrottlingException,
} from "../models/errors";

/* eslint no-var: 0 */
var JwtToken: StaticSimpleSchema = [0, n0, _JT, 8, 0];
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(AccessDeniedException$, AccessDeniedException);
export var AssumedRoleUser$: StaticStructureSchema = [3, n0, _ARU,
  0,
  [_a, _aRI],
  [0, 0]
];
export var AssumeRoleForPodIdentityRequest$: StaticStructureSchema = [3, n0, _ARFPIR,
  0,
  [_cN, _t],
  [[0, 1], [() => JwtToken, 0]]
];
export var AssumeRoleForPodIdentityResponse$: StaticStructureSchema = [3, n0, _ARFPIRs,
  0,
  [_s, _au, _pIA, _aRU, _cr],
  [() => Subject$, 0, () => PodIdentityAssociation$, () => AssumedRoleUser$, [() => Credentials$, 0]]
];
export var Credentials$: StaticStructureSchema = [3, n0, _C,
  8,
  [_sT, _sAK, _aKI, _ex],
  [0, 0, 0, 4]
];
export var ExpiredTokenException$: StaticErrorSchema = [-3, n0, _ETE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(ExpiredTokenException$, ExpiredTokenException);
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _se, [_hE]: 500 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(InternalServerException$, InternalServerException);
export var InvalidParameterException$: StaticErrorSchema = [-3, n0, _IPE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(InvalidParameterException$, InvalidParameterException);
export var InvalidRequestException$: StaticErrorSchema = [-3, n0, _IRE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(InvalidRequestException$, InvalidRequestException);
export var InvalidTokenException$: StaticErrorSchema = [-3, n0, _ITE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(InvalidTokenException$, InvalidTokenException);
export var PodIdentityAssociation$: StaticStructureSchema = [3, n0, _PIA,
  0,
  [_aA, _aI],
  [0, 0]
];
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ServiceUnavailableException$: StaticErrorSchema = [-3, n0, _SUE,
  { [_e]: _se, [_hE]: 503 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(ServiceUnavailableException$, ServiceUnavailableException);
export var Subject$: StaticStructureSchema = [3, n0, _S,
  0,
  [_n, _sA],
  [0, 0]
];
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE,
  { [_e]: _c, [_hE]: 429 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(ThrottlingException$, ThrottlingException);
export var EKSAuthServiceException$: StaticErrorSchema = [-3, _sm, "EKSAuthServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(EKSAuthServiceException$, EKSAuthServiceException);
export var AssumeRoleForPodIdentity$: StaticOperationSchema = [9, n0, _ARFPI,
  { [_h]: ["POST", "/clusters/{clusterName}/assume-role-for-pod-identity", 200] }, () => AssumeRoleForPodIdentityRequest$, () => AssumeRoleForPodIdentityResponse$
];
