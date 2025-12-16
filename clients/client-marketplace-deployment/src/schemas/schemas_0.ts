const _ADE = "AccessDeniedException";
const _CE = "ConflictException";
const _DPI = "DeploymentParameterInput";
const _ISE = "InternalServerException";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _PDP = "PutDeploymentParameter";
const _PDPR = "PutDeploymentParameterRequest";
const _PDPRu = "PutDeploymentParameterResponse";
const _RNFE = "ResourceNotFoundException";
const _SQEE = "ServiceQuotaExceededException";
const _SS = "SecretString";
const _TE = "ThrottlingException";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _VE = "ValidationException";
const _aI = "agreementId";
const _c = "client";
const _cT = "clientToken";
const _ca = "catalog";
const _dP = "deploymentParameter";
const _dPI = "deploymentParameterId";
const _e = "error";
const _eD = "expirationDate";
const _fN = "fieldName";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _m = "message";
const _n = "name";
const _pI = "productId";
const _rA = "resourceArn";
const _rI = "resourceId";
const _s = "server";
const _sS = "secretString";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.marketplacedeployment";
const _t = "tags";
const _tK = "tagKeys";
const n0 = "com.amazonaws.marketplacedeployment";

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
  ThrottlingException,
  ValidationException,
} from "../models/errors";
import { MarketplaceDeploymentServiceException } from "../models/MarketplaceDeploymentServiceException";

/* eslint no-var: 0 */
var SecretString: StaticSimpleSchema = [0, n0, _SS, 8, 0];
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE, { [_e]: _c, [_hE]: 403 }, [_m], [0]];
TypeRegistry.for(n0).registerError(AccessDeniedException$, AccessDeniedException);
export var ConflictException$: StaticErrorSchema = [-3, n0, _CE, { [_e]: _c, [_hE]: 409 }, [_m, _rI], [0, 0]];
TypeRegistry.for(n0).registerError(ConflictException$, ConflictException);
export var DeploymentParameterInput$: StaticStructureSchema = [3, n0, _DPI, 0, [_n, _sS], [0, [() => SecretString, 0]]];
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE, { [_e]: _s, [_hE]: 500 }, [_m], [0]];
TypeRegistry.for(n0).registerError(InternalServerException$, InternalServerException);
export var ListTagsForResourceRequest$: StaticStructureSchema = [3, n0, _LTFRR, 0, [_rA], [[0, 1]]];
export var ListTagsForResourceResponse$: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_t], [128 | 0]];
export var PutDeploymentParameterRequest$: StaticStructureSchema = [
  3,
  n0,
  _PDPR,
  0,
  [_ca, _pI, _aI, _dP, _t, _eD, _cT],
  [[0, 1], [0, 1], 0, [() => DeploymentParameterInput$, 0], 128 | 0, 5, [0, 4]],
];
export var PutDeploymentParameterResponse$: StaticStructureSchema = [
  3,
  n0,
  _PDPRu,
  0,
  [_rA, _aI, _dPI, _t],
  [0, 0, 0, 128 | 0],
];
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE, { [_e]: _c, [_hE]: 404 }, [_m], [0]];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ServiceQuotaExceededException$: StaticErrorSchema = [-3, n0, _SQEE, { [_e]: _c, [_hE]: 402 }, [_m], [0]];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException$, ServiceQuotaExceededException);
export var TagResourceRequest$: StaticStructureSchema = [3, n0, _TRR, 0, [_rA, _t], [[0, 1], 128 | 0]];
export var TagResourceResponse$: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE, { [_e]: _c, [_hE]: 429 }, [_m], [0]];
TypeRegistry.for(n0).registerError(ThrottlingException$, ThrottlingException);
export var UntagResourceRequest$: StaticStructureSchema = [
  3,
  n0,
  _URR,
  0,
  [_rA, _tK],
  [
    [0, 1],
    [64 | 0, { [_hQ]: _tK }],
  ],
];
export var UntagResourceResponse$: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE, { [_e]: _c, [_hE]: 400 }, [_m, _fN], [0, 0]];
TypeRegistry.for(n0).registerError(ValidationException$, ValidationException);
export var MarketplaceDeploymentServiceException$: StaticErrorSchema = [
  -3,
  _sm,
  "MarketplaceDeploymentServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(MarketplaceDeploymentServiceException$, MarketplaceDeploymentServiceException);
var StringList = 64 | 0;
var Tags = 128 | 0;
var TagsMap = 128 | 0;
export var ListTagsForResource$: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  { [_h]: ["GET", "/tags/{resourceArn}", 200] },
  () => ListTagsForResourceRequest$,
  () => ListTagsForResourceResponse$,
];
export var PutDeploymentParameter$: StaticOperationSchema = [
  9,
  n0,
  _PDP,
  { [_h]: ["POST", "/catalogs/{catalog}/products/{productId}/deployment-parameters", 200] },
  () => PutDeploymentParameterRequest$,
  () => PutDeploymentParameterResponse$,
];
export var TagResource$: StaticOperationSchema = [
  9,
  n0,
  _TR,
  { [_h]: ["POST", "/tags/{resourceArn}", 204] },
  () => TagResourceRequest$,
  () => TagResourceResponse$,
];
export var UntagResource$: StaticOperationSchema = [
  9,
  n0,
  _UR,
  { [_h]: ["DELETE", "/tags/{resourceArn}", 204] },
  () => UntagResourceRequest$,
  () => UntagResourceResponse$,
];
