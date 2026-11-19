const _ADE = "AccessDeniedException";
const _CE = "ConflictException";
const _DAASCD = "DataAsAServiceConfigurationDetail";
const _DCD = "DeploymentConfigurationDetail";
const _DCJS = "DeploymentConfigurationJobSummary";
const _DCJSe = "DeploymentConfigurationJobSummaries";
const _DPI = "DeploymentParameterInput";
const _GDC = "GetDeploymentConfiguration";
const _GDCJ = "GetDeploymentConfigurationJob";
const _GDCJR = "GetDeploymentConfigurationJobRequest";
const _GDCJRe = "GetDeploymentConfigurationJobResponse";
const _GDCR = "GetDeploymentConfigurationRequest";
const _GDCRe = "GetDeploymentConfigurationResponse";
const _ISE = "InternalServerException";
const _LDCJ = "ListDeploymentConfigurationJobs";
const _LDCJR = "ListDeploymentConfigurationJobsRequest";
const _LDCJRi = "ListDeploymentConfigurationJobsResponse";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _PDP = "PutDeploymentParameter";
const _PDPR = "PutDeploymentParameterRequest";
const _PDPRu = "PutDeploymentParameterResponse";
const _RNFE = "ResourceNotFoundException";
const _SDCJ = "StartDeploymentConfigurationJob";
const _SDCJR = "StartDeploymentConfigurationJobRequest";
const _SDCJRt = "StartDeploymentConfigurationJobResponse";
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
const _cA = "createdAt";
const _cAo = "configurationArn";
const _cT = "clientToken";
const _ca = "catalog";
const _co = "configuration";
const _dAAS = "dataAsAService";
const _dOT = "deliveryOptionType";
const _dP = "deploymentParameter";
const _dPI = "deploymentParameterId";
const _e = "error";
const _eA = "endedAt";
const _eC = "errorCode";
const _eD = "expirationDate";
const _fN = "fieldName";
const _fU = "fulfillmentUrl";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _j = "jobs";
const _jI = "jobId";
const _m = "message";
const _mR = "maxResults";
const _n = "name";
const _nT = "nextToken";
const _pI = "productId";
const _rA = "resourceArn";
const _rI = "resourceId";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.marketplacedeployment";
const _sS = "secretString";
const _se = "server";
const _st = "status";
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
  StaticUnionSchema,
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
const _s_registry = new TypeRegistry(_s);
export var MarketplaceDeploymentServiceException$: StaticErrorSchema = [-3, _s, "MarketplaceDeploymentServiceException", 0, [], []];
_s_registry.registerError(MarketplaceDeploymentServiceException$, MarketplaceDeploymentServiceException);
const n0_registry = new TypeRegistry(n0);
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c, [_hE]: 403 },
  [_m],
  [0], 1
];
n0_registry.registerError(AccessDeniedException$, AccessDeniedException);
export var ConflictException$: StaticErrorSchema = [-3, n0, _CE,
  { [_e]: _c, [_hE]: 409 },
  [_m, _rI],
  [0, 0], 2
];
n0_registry.registerError(ConflictException$, ConflictException);
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _se, [_hE]: 500 },
  [_m],
  [0], 1
];
n0_registry.registerError(InternalServerException$, InternalServerException);
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_m],
  [0], 1
];
n0_registry.registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ServiceQuotaExceededException$: StaticErrorSchema = [-3, n0, _SQEE,
  { [_e]: _c, [_hE]: 402 },
  [_m],
  [0], 1
];
n0_registry.registerError(ServiceQuotaExceededException$, ServiceQuotaExceededException);
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE,
  { [_e]: _c, [_hE]: 429 },
  [_m],
  [0], 1
];
n0_registry.registerError(ThrottlingException$, ThrottlingException);
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c, [_hE]: 400 },
  [_m, _fN],
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
var SecretString: StaticSimpleSchema = [0, n0, _SS, 8, 0];
export var DataAsAServiceConfigurationDetail$: StaticStructureSchema = [3, n0, _DAASCD,
  0,
  [_fU],
  [0], 1
];
export var DeploymentConfigurationJobSummary$: StaticStructureSchema = [3, n0, _DCJS,
  0,
  [_jI, _st, _co, _cA],
  [0, 0, () => DeploymentConfigurationDetail$, 5], 4
];
export var DeploymentParameterInput$: StaticStructureSchema = [3, n0, _DPI,
  0,
  [_n, _sS],
  [0, [() => SecretString, 0]], 2
];
export var GetDeploymentConfigurationJobRequest$: StaticStructureSchema = [3, n0, _GDCJR,
  0,
  [_ca, _pI, _dOT, _jI],
  [[0, 1], [0, 1], [0, 1], [0, 1]], 4
];
export var GetDeploymentConfigurationJobResponse$: StaticStructureSchema = [3, n0, _GDCJRe,
  0,
  [_jI, _co, _st, _cA, _cAo, _eA, _eC, _m],
  [0, () => DeploymentConfigurationDetail$, 0, 5, 0, 5, 0, 0], 4
];
export var GetDeploymentConfigurationRequest$: StaticStructureSchema = [3, n0, _GDCR,
  0,
  [_ca, _pI, _dOT],
  [[0, 1], [0, 1], [0, 1]], 3
];
export var GetDeploymentConfigurationResponse$: StaticStructureSchema = [3, n0, _GDCRe,
  0,
  [_co],
  [() => DeploymentConfigurationDetail$], 1
];
export var ListDeploymentConfigurationJobsRequest$: StaticStructureSchema = [3, n0, _LDCJR,
  0,
  [_ca, _pI, _dOT, _mR, _nT],
  [[0, 1], [0, 1], [0, 1], [1, { [_hQ]: _mR }], [0, { [_hQ]: _nT }]], 3
];
export var ListDeploymentConfigurationJobsResponse$: StaticStructureSchema = [3, n0, _LDCJRi,
  0,
  [_j, _nT],
  [() => DeploymentConfigurationJobSummaries, 0], 1
];
export var ListTagsForResourceRequest$: StaticStructureSchema = [3, n0, _LTFRR,
  0,
  [_rA],
  [[0, 1]], 1
];
export var ListTagsForResourceResponse$: StaticStructureSchema = [3, n0, _LTFRRi,
  0,
  [_t],
  [128 | 0]
];
export var PutDeploymentParameterRequest$: StaticStructureSchema = [3, n0, _PDPR,
  0,
  [_ca, _pI, _aI, _dP, _t, _eD, _cT],
  [[0, 1], [0, 1], 0, [() => DeploymentParameterInput$, 0], 128 | 0, 5, [0, 4]], 4
];
export var PutDeploymentParameterResponse$: StaticStructureSchema = [3, n0, _PDPRu,
  0,
  [_rA, _aI, _dPI, _t],
  [0, 0, 0, 128 | 0], 3
];
export var StartDeploymentConfigurationJobRequest$: StaticStructureSchema = [3, n0, _SDCJR,
  0,
  [_ca, _pI, _dOT, _co, _t, _cT],
  [[0, 1], [0, 1], [0, 1], () => DeploymentConfigurationDetail$, 128 | 0, [0, 4]], 4
];
export var StartDeploymentConfigurationJobResponse$: StaticStructureSchema = [3, n0, _SDCJRt,
  0,
  [_jI, _co, _st, _cA],
  [0, () => DeploymentConfigurationDetail$, 0, 5], 4
];
export var TagResourceRequest$: StaticStructureSchema = [3, n0, _TRR,
  0,
  [_rA, _t],
  [[0, 1], 128 | 0], 1
];
export var TagResourceResponse$: StaticStructureSchema = [3, n0, _TRRa,
  0,
  [],
  []
];
export var UntagResourceRequest$: StaticStructureSchema = [3, n0, _URR,
  0,
  [_rA, _tK],
  [[0, 1], [64 | 0, { [_hQ]: _tK }]], 2
];
export var UntagResourceResponse$: StaticStructureSchema = [3, n0, _URRn,
  0,
  [],
  []
];
var DeploymentConfigurationJobSummaries: StaticListSchema = [1, n0, _DCJSe,
  0, () => DeploymentConfigurationJobSummary$
];
var StringList = 64 | 0;
var Tags = 128 | 0;
var TagsMap = 128 | 0;
export var DeploymentConfigurationDetail$: StaticUnionSchema = [4, n0, _DCD,
  0,
  [_dAAS],
  [() => DataAsAServiceConfigurationDetail$]
];
export var GetDeploymentConfiguration$: StaticOperationSchema = [9, n0, _GDC,
  { [_h]: ["GET", "/catalogs/{catalog}/products/{productId}/delivery-options/{deliveryOptionType}/deployment-configuration", 200] }, () => GetDeploymentConfigurationRequest$, () => GetDeploymentConfigurationResponse$
];
export var GetDeploymentConfigurationJob$: StaticOperationSchema = [9, n0, _GDCJ,
  { [_h]: ["GET", "/catalogs/{catalog}/products/{productId}/delivery-options/{deliveryOptionType}/deployment-configuration/jobs/{jobId}", 200] }, () => GetDeploymentConfigurationJobRequest$, () => GetDeploymentConfigurationJobResponse$
];
export var ListDeploymentConfigurationJobs$: StaticOperationSchema = [9, n0, _LDCJ,
  { [_h]: ["GET", "/catalogs/{catalog}/products/{productId}/delivery-options/{deliveryOptionType}/deployment-configuration/jobs", 200] }, () => ListDeploymentConfigurationJobsRequest$, () => ListDeploymentConfigurationJobsResponse$
];
export var ListTagsForResource$: StaticOperationSchema = [9, n0, _LTFR,
  { [_h]: ["GET", "/tags/{resourceArn}", 200] }, () => ListTagsForResourceRequest$, () => ListTagsForResourceResponse$
];
export var PutDeploymentParameter$: StaticOperationSchema = [9, n0, _PDP,
  { [_h]: ["POST", "/catalogs/{catalog}/products/{productId}/deployment-parameters", 200] }, () => PutDeploymentParameterRequest$, () => PutDeploymentParameterResponse$
];
export var StartDeploymentConfigurationJob$: StaticOperationSchema = [9, n0, _SDCJ,
  { [_h]: ["POST", "/catalogs/{catalog}/products/{productId}/delivery-options/{deliveryOptionType}/deployment-configuration/jobs", 200] }, () => StartDeploymentConfigurationJobRequest$, () => StartDeploymentConfigurationJobResponse$
];
export var TagResource$: StaticOperationSchema = [9, n0, _TR,
  { [_h]: ["POST", "/tags/{resourceArn}", 204] }, () => TagResourceRequest$, () => TagResourceResponse$
];
export var UntagResource$: StaticOperationSchema = [9, n0, _UR,
  { [_h]: ["DELETE", "/tags/{resourceArn}", 204] }, () => UntagResourceRequest$, () => UntagResourceResponse$
];
