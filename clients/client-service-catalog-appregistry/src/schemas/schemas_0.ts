const _A = "Application";
const _AAG = "AssociateAttributeGroup";
const _AAGR = "AssociateAttributeGroupRequest";
const _AAGRs = "AssociateAttributeGroupResponse";
const _AG = "AttributeGroup";
const _AGD = "AttributeGroupDetails";
const _AGDL = "AttributeGroupDetailsList";
const _AGS = "AttributeGroupSummary";
const _AGSt = "AttributeGroupSummaries";
const _AR = "AssociateResource";
const _ARC = "AppRegistryConfiguration";
const _ARR = "AssociateResourceRequest";
const _ARRs = "AssociateResourceResponse";
const _AS = "ApplicationSummary";
const _ASp = "ApplicationSummaries";
const _ATR = "ApplicationTagResult";
const _CA = "CreateApplication";
const _CAG = "CreateAttributeGroup";
const _CAGR = "CreateAttributeGroupRequest";
const _CAGRr = "CreateAttributeGroupResponse";
const _CAR = "CreateApplicationRequest";
const _CARr = "CreateApplicationResponse";
const _CE = "ConflictException";
const _DA = "DeleteApplication";
const _DAG = "DeleteAttributeGroup";
const _DAGR = "DeleteAttributeGroupRequest";
const _DAGRe = "DeleteAttributeGroupResponse";
const _DAGRi = "DisassociateAttributeGroupRequest";
const _DAGRis = "DisassociateAttributeGroupResponse";
const _DAGi = "DisassociateAttributeGroup";
const _DAR = "DeleteApplicationRequest";
const _DARe = "DeleteApplicationResponse";
const _DR = "DisassociateResource";
const _DRR = "DisassociateResourceRequest";
const _DRRi = "DisassociateResourceResponse";
const _GA = "GetApplication";
const _GAG = "GetAttributeGroup";
const _GAGR = "GetAttributeGroupRequest";
const _GAGRe = "GetAttributeGroupResponse";
const _GAR = "GetApplicationRequest";
const _GARR = "GetAssociatedResourceRequest";
const _GARRe = "GetAssociatedResourceResponse";
const _GARe = "GetApplicationResponse";
const _GARet = "GetAssociatedResource";
const _GC = "GetConfiguration";
const _GCR = "GetConfigurationResponse";
const _I = "Integrations";
const _ISE = "InternalServerException";
const _LA = "ListApplications";
const _LAAG = "ListAssociatedAttributeGroups";
const _LAAGR = "ListAssociatedAttributeGroupsRequest";
const _LAAGRi = "ListAssociatedAttributeGroupsResponse";
const _LAG = "ListAttributeGroups";
const _LAGFA = "ListAttributeGroupsForApplication";
const _LAGFAR = "ListAttributeGroupsForApplicationRequest";
const _LAGFARi = "ListAttributeGroupsForApplicationResponse";
const _LAGR = "ListAttributeGroupsRequest";
const _LAGRi = "ListAttributeGroupsResponse";
const _LAR = "ListApplicationsRequest";
const _LARR = "ListAssociatedResourcesRequest";
const _LARRi = "ListAssociatedResourcesResponse";
const _LARi = "ListApplicationsResponse";
const _LARis = "ListAssociatedResources";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _PC = "PutConfiguration";
const _PCR = "PutConfigurationRequest";
const _R = "Resource";
const _RD = "ResourceDetails";
const _RG = "ResourceGroup";
const _RI = "ResourceInfo";
const _RIe = "ResourceIntegrations";
const _RL = "ResourcesList";
const _RLI = "ResourcesListItem";
const _RNFE = "ResourceNotFoundException";
const _Re = "Resources";
const _SQEE = "ServiceQuotaExceededException";
const _SR = "SyncResource";
const _SRR = "SyncResourceRequest";
const _SRRy = "SyncResourceResponse";
const _TE = "ThrottlingException";
const _TQC = "TagQueryConfiguration";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _UA = "UpdateApplication";
const _UAG = "UpdateAttributeGroup";
const _UAGR = "UpdateAttributeGroupRequest";
const _UAGRp = "UpdateAttributeGroupResponse";
const _UAR = "UpdateApplicationRequest";
const _UARp = "UpdateApplicationResponse";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _VE = "ValidationException";
const _a = "arn";
const _aA = "applicationArn";
const _aG = "attributeGroup";
const _aGA = "attributeGroupArn";
const _aGD = "attributeGroupsDetails";
const _aGt = "attributeGroups";
const _aRC = "associatedResourceCount";
const _aT = "applicationTag";
const _aTR = "applicationTagResult";
const _aTRG = "applicationTagResourceGroup";
const _aTS = "applicationTagStatus";
const _aTc = "actionTaken";
const _aTs = "associationTime";
const _ap = "application";
const _app = "applications";
const _at = "attributes";
const _c = "client";
const _cB = "createdBy";
const _cT = "creationTime";
const _cTl = "clientToken";
const _co = "configuration";
const _d = "description";
const _e = "error";
const _eM = "errorMessage";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _i = "id";
const _in = "integrations";
const _lUT = "lastUpdateTime";
const _m = "message";
const _mR = "maxResults";
const _n = "name";
const _nT = "nextToken";
const _o = "options";
const _r = "resources";
const _rA = "resourceArn";
const _rD = "resourceDetails";
const _rG = "resourceGroup";
const _rT = "resourceType";
const _rTS = "resourceTagStatus";
const _re = "resource";
const _s = "server";
const _sC = "serviceCode";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.servicecatalogappregistry";
const _st = "state";
const _sta = "status";
const _t = "tags";
const _tK = "tagKey";
const _tKa = "tagKeys";
const _tQC = "tagQueryConfiguration";
const _tV = "tagValue";
const n0 = "com.amazonaws.servicecatalogappregistry";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/errors";
import { ServiceCatalogAppRegistryServiceException as __ServiceCatalogAppRegistryServiceException } from "../models/ServiceCatalogAppRegistryServiceException";

/* eslint no-var: 0 */

export var Application: StaticStructureSchema = [
  3,
  n0,
  _A,
  0,
  [_i, _a, _n, _d, _cT, _lUT, _t, _aT],
  [0, 0, 0, 0, 5, 5, 128 | 0, 128 | 0],
];
export var ApplicationSummary: StaticStructureSchema = [3, n0, _AS, 0, [_i, _a, _n, _d, _cT, _lUT], [0, 0, 0, 0, 5, 5]];
export var ApplicationTagResult: StaticStructureSchema = [
  3,
  n0,
  _ATR,
  0,
  [_aTS, _eM, _r, _nT],
  [0, 0, () => ResourcesList, 0],
];
export var AppRegistryConfiguration: StaticStructureSchema = [3, n0, _ARC, 0, [_tQC], [() => TagQueryConfiguration]];
export var AssociateAttributeGroupRequest: StaticStructureSchema = [
  3,
  n0,
  _AAGR,
  0,
  [_ap, _aG],
  [
    [0, 1],
    [0, 1],
  ],
];
export var AssociateAttributeGroupResponse: StaticStructureSchema = [3, n0, _AAGRs, 0, [_aA, _aGA], [0, 0]];
export var AssociateResourceRequest: StaticStructureSchema = [
  3,
  n0,
  _ARR,
  0,
  [_ap, _rT, _re, _o],
  [[0, 1], [0, 1], [0, 1], 64 | 0],
];
export var AssociateResourceResponse: StaticStructureSchema = [3, n0, _ARRs, 0, [_aA, _rA, _o], [0, 0, 64 | 0]];
export var AttributeGroup: StaticStructureSchema = [
  3,
  n0,
  _AG,
  0,
  [_i, _a, _n, _d, _cT, _lUT, _t],
  [0, 0, 0, 0, 5, 5, 128 | 0],
];
export var AttributeGroupDetails: StaticStructureSchema = [3, n0, _AGD, 0, [_i, _a, _n, _cB], [0, 0, 0, 0]];
export var AttributeGroupSummary: StaticStructureSchema = [
  3,
  n0,
  _AGS,
  0,
  [_i, _a, _n, _d, _cT, _lUT, _cB],
  [0, 0, 0, 0, 5, 5, 0],
];
export var ConflictException: StaticErrorSchema = [
  -3,
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);

export var CreateApplicationRequest: StaticStructureSchema = [
  3,
  n0,
  _CAR,
  0,
  [_n, _d, _t, _cTl],
  [0, 0, 128 | 0, [0, 4]],
];
export var CreateApplicationResponse: StaticStructureSchema = [3, n0, _CARr, 0, [_ap], [() => Application]];
export var CreateAttributeGroupRequest: StaticStructureSchema = [
  3,
  n0,
  _CAGR,
  0,
  [_n, _d, _at, _t, _cTl],
  [0, 0, 0, 128 | 0, [0, 4]],
];
export var CreateAttributeGroupResponse: StaticStructureSchema = [3, n0, _CAGRr, 0, [_aG], [() => AttributeGroup]];
export var DeleteApplicationRequest: StaticStructureSchema = [3, n0, _DAR, 0, [_ap], [[0, 1]]];
export var DeleteApplicationResponse: StaticStructureSchema = [3, n0, _DARe, 0, [_ap], [() => ApplicationSummary]];
export var DeleteAttributeGroupRequest: StaticStructureSchema = [3, n0, _DAGR, 0, [_aG], [[0, 1]]];
export var DeleteAttributeGroupResponse: StaticStructureSchema = [
  3,
  n0,
  _DAGRe,
  0,
  [_aG],
  [() => AttributeGroupSummary],
];
export var DisassociateAttributeGroupRequest: StaticStructureSchema = [
  3,
  n0,
  _DAGRi,
  0,
  [_ap, _aG],
  [
    [0, 1],
    [0, 1],
  ],
];
export var DisassociateAttributeGroupResponse: StaticStructureSchema = [3, n0, _DAGRis, 0, [_aA, _aGA], [0, 0]];
export var DisassociateResourceRequest: StaticStructureSchema = [
  3,
  n0,
  _DRR,
  0,
  [_ap, _rT, _re],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ],
];
export var DisassociateResourceResponse: StaticStructureSchema = [3, n0, _DRRi, 0, [_aA, _rA], [0, 0]];
export var GetApplicationRequest: StaticStructureSchema = [3, n0, _GAR, 0, [_ap], [[0, 1]]];
export var GetApplicationResponse: StaticStructureSchema = [
  3,
  n0,
  _GARe,
  0,
  [_i, _a, _n, _d, _cT, _lUT, _aRC, _t, _in, _aT],
  [0, 0, 0, 0, 5, 5, 1, 128 | 0, () => Integrations, 128 | 0],
];
export var GetAssociatedResourceRequest: StaticStructureSchema = [
  3,
  n0,
  _GARR,
  0,
  [_ap, _rT, _re, _nT, _rTS, _mR],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _rTS,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ],
];
export var GetAssociatedResourceResponse: StaticStructureSchema = [
  3,
  n0,
  _GARRe,
  0,
  [_re, _o, _aTR],
  [() => Resource, 64 | 0, () => ApplicationTagResult],
];
export var GetAttributeGroupRequest: StaticStructureSchema = [3, n0, _GAGR, 0, [_aG], [[0, 1]]];
export var GetAttributeGroupResponse: StaticStructureSchema = [
  3,
  n0,
  _GAGRe,
  0,
  [_i, _a, _n, _d, _at, _cT, _lUT, _t, _cB],
  [0, 0, 0, 0, 0, 5, 5, 128 | 0, 0],
];
export var GetConfigurationResponse: StaticStructureSchema = [3, n0, _GCR, 0, [_co], [() => AppRegistryConfiguration]];
export var Integrations: StaticStructureSchema = [
  3,
  n0,
  _I,
  0,
  [_rG, _aTRG],
  [() => ResourceGroup, () => ResourceGroup],
];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var ListApplicationsRequest: StaticStructureSchema = [
  3,
  n0,
  _LAR,
  0,
  [_nT, _mR],
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
  ],
];
export var ListApplicationsResponse: StaticStructureSchema = [
  3,
  n0,
  _LARi,
  0,
  [_app, _nT],
  [() => ApplicationSummaries, 0],
];
export var ListAssociatedAttributeGroupsRequest: StaticStructureSchema = [
  3,
  n0,
  _LAAGR,
  0,
  [_ap, _nT, _mR],
  [
    [0, 1],
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
  ],
];
export var ListAssociatedAttributeGroupsResponse: StaticStructureSchema = [3, n0, _LAAGRi, 0, [_aGt, _nT], [64 | 0, 0]];
export var ListAssociatedResourcesRequest: StaticStructureSchema = [
  3,
  n0,
  _LARR,
  0,
  [_ap, _nT, _mR],
  [
    [0, 1],
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
  ],
];
export var ListAssociatedResourcesResponse: StaticStructureSchema = [3, n0, _LARRi, 0, [_r, _nT], [() => Resources, 0]];
export var ListAttributeGroupsForApplicationRequest: StaticStructureSchema = [
  3,
  n0,
  _LAGFAR,
  0,
  [_ap, _nT, _mR],
  [
    [0, 1],
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
  ],
];
export var ListAttributeGroupsForApplicationResponse: StaticStructureSchema = [
  3,
  n0,
  _LAGFARi,
  0,
  [_aGD, _nT],
  [() => AttributeGroupDetailsList, 0],
];
export var ListAttributeGroupsRequest: StaticStructureSchema = [
  3,
  n0,
  _LAGR,
  0,
  [_nT, _mR],
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
  ],
];
export var ListAttributeGroupsResponse: StaticStructureSchema = [
  3,
  n0,
  _LAGRi,
  0,
  [_aGt, _nT],
  [() => AttributeGroupSummaries, 0],
];
export var ListTagsForResourceRequest: StaticStructureSchema = [3, n0, _LTFRR, 0, [_rA], [[0, 1]]];
export var ListTagsForResourceResponse: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_t], [128 | 0]];
export var PutConfigurationRequest: StaticStructureSchema = [3, n0, _PCR, 0, [_co], [() => AppRegistryConfiguration]];
export var Resource: StaticStructureSchema = [3, n0, _R, 0, [_n, _a, _aTs, _in], [0, 0, 5, () => ResourceIntegrations]];
export var ResourceDetails: StaticStructureSchema = [3, n0, _RD, 0, [_tV], [0]];
export var ResourceGroup: StaticStructureSchema = [3, n0, _RG, 0, [_st, _a, _eM], [0, 0, 0]];
export var ResourceInfo: StaticStructureSchema = [
  3,
  n0,
  _RI,
  0,
  [_n, _a, _rT, _rD, _o],
  [0, 0, 0, () => ResourceDetails, 64 | 0],
];
export var ResourceIntegrations: StaticStructureSchema = [3, n0, _RIe, 0, [_rG], [() => ResourceGroup]];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var ResourcesListItem: StaticStructureSchema = [3, n0, _RLI, 0, [_rA, _eM, _sta, _rT], [0, 0, 0, 0]];
export var ServiceQuotaExceededException: StaticErrorSchema = [
  -3,
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException, __ServiceQuotaExceededException);

export var SyncResourceRequest: StaticStructureSchema = [
  3,
  n0,
  _SRR,
  0,
  [_rT, _re],
  [
    [0, 1],
    [0, 1],
  ],
];
export var SyncResourceResponse: StaticStructureSchema = [3, n0, _SRRy, 0, [_aA, _rA, _aTc], [0, 0, 0]];
export var TagQueryConfiguration: StaticStructureSchema = [3, n0, _TQC, 0, [_tK], [0]];
export var TagResourceRequest: StaticStructureSchema = [3, n0, _TRR, 0, [_rA, _t], [[0, 1], 128 | 0]];
export var TagResourceResponse: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m, _sC],
  [0, 0],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);

export var UntagResourceRequest: StaticStructureSchema = [
  3,
  n0,
  _URR,
  0,
  [_rA, _tKa],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tKa,
      },
    ],
  ],
];
export var UntagResourceResponse: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var UpdateApplicationRequest: StaticStructureSchema = [3, n0, _UAR, 0, [_ap, _n, _d], [[0, 1], 0, 0]];
export var UpdateApplicationResponse: StaticStructureSchema = [3, n0, _UARp, 0, [_ap], [() => Application]];
export var UpdateAttributeGroupRequest: StaticStructureSchema = [
  3,
  n0,
  _UAGR,
  0,
  [_aG, _n, _d, _at],
  [[0, 1], 0, 0, 0],
];
export var UpdateAttributeGroupResponse: StaticStructureSchema = [3, n0, _UAGRp, 0, [_aG], [() => AttributeGroup]];
export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var __Unit = "unit" as const;

export var ServiceCatalogAppRegistryServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "ServiceCatalogAppRegistryServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(
  ServiceCatalogAppRegistryServiceException,
  __ServiceCatalogAppRegistryServiceException
);

export var ApplicationSummaries: StaticListSchema = [1, n0, _ASp, 0, () => ApplicationSummary];
export var AttributeGroupDetailsList: StaticListSchema = [1, n0, _AGDL, 0, () => AttributeGroupDetails];
export var AttributeGroupIds = 64 | 0;

export var AttributeGroupSummaries: StaticListSchema = [1, n0, _AGSt, 0, () => AttributeGroupSummary];
export var GetAssociatedResourceFilter = 64 | 0;

export var Options = 64 | 0;

export var Resources: StaticListSchema = [1, n0, _Re, 0, () => ResourceInfo];
export var ResourcesList: StaticListSchema = [1, n0, _RL, 0, () => ResourcesListItem];
export var TagKeys = 64 | 0;

export var ApplicationTagDefinition = 128 | 0;

export var Tags = 128 | 0;

export var AssociateAttributeGroup: StaticOperationSchema = [
  9,
  n0,
  _AAG,
  {
    [_h]: ["PUT", "/applications/{application}/attribute-groups/{attributeGroup}", 200],
  },
  () => AssociateAttributeGroupRequest,
  () => AssociateAttributeGroupResponse,
];
export var AssociateResource: StaticOperationSchema = [
  9,
  n0,
  _AR,
  {
    [_h]: ["PUT", "/applications/{application}/resources/{resourceType}/{resource}", 200],
  },
  () => AssociateResourceRequest,
  () => AssociateResourceResponse,
];
export var CreateApplication: StaticOperationSchema = [
  9,
  n0,
  _CA,
  {
    [_h]: ["POST", "/applications", 201],
  },
  () => CreateApplicationRequest,
  () => CreateApplicationResponse,
];
export var CreateAttributeGroup: StaticOperationSchema = [
  9,
  n0,
  _CAG,
  {
    [_h]: ["POST", "/attribute-groups", 201],
  },
  () => CreateAttributeGroupRequest,
  () => CreateAttributeGroupResponse,
];
export var DeleteApplication: StaticOperationSchema = [
  9,
  n0,
  _DA,
  {
    [_h]: ["DELETE", "/applications/{application}", 200],
  },
  () => DeleteApplicationRequest,
  () => DeleteApplicationResponse,
];
export var DeleteAttributeGroup: StaticOperationSchema = [
  9,
  n0,
  _DAG,
  {
    [_h]: ["DELETE", "/attribute-groups/{attributeGroup}", 200],
  },
  () => DeleteAttributeGroupRequest,
  () => DeleteAttributeGroupResponse,
];
export var DisassociateAttributeGroup: StaticOperationSchema = [
  9,
  n0,
  _DAGi,
  {
    [_h]: ["DELETE", "/applications/{application}/attribute-groups/{attributeGroup}", 200],
  },
  () => DisassociateAttributeGroupRequest,
  () => DisassociateAttributeGroupResponse,
];
export var DisassociateResource: StaticOperationSchema = [
  9,
  n0,
  _DR,
  {
    [_h]: ["DELETE", "/applications/{application}/resources/{resourceType}/{resource}", 200],
  },
  () => DisassociateResourceRequest,
  () => DisassociateResourceResponse,
];
export var GetApplication: StaticOperationSchema = [
  9,
  n0,
  _GA,
  {
    [_h]: ["GET", "/applications/{application}", 200],
  },
  () => GetApplicationRequest,
  () => GetApplicationResponse,
];
export var GetAssociatedResource: StaticOperationSchema = [
  9,
  n0,
  _GARet,
  {
    [_h]: ["GET", "/applications/{application}/resources/{resourceType}/{resource}", 200],
  },
  () => GetAssociatedResourceRequest,
  () => GetAssociatedResourceResponse,
];
export var GetAttributeGroup: StaticOperationSchema = [
  9,
  n0,
  _GAG,
  {
    [_h]: ["GET", "/attribute-groups/{attributeGroup}", 200],
  },
  () => GetAttributeGroupRequest,
  () => GetAttributeGroupResponse,
];
export var GetConfiguration: StaticOperationSchema = [
  9,
  n0,
  _GC,
  {
    [_h]: ["GET", "/configuration", 200],
  },
  () => __Unit,
  () => GetConfigurationResponse,
];
export var ListApplications: StaticOperationSchema = [
  9,
  n0,
  _LA,
  {
    [_h]: ["GET", "/applications", 200],
  },
  () => ListApplicationsRequest,
  () => ListApplicationsResponse,
];
export var ListAssociatedAttributeGroups: StaticOperationSchema = [
  9,
  n0,
  _LAAG,
  {
    [_h]: ["GET", "/applications/{application}/attribute-groups", 200],
  },
  () => ListAssociatedAttributeGroupsRequest,
  () => ListAssociatedAttributeGroupsResponse,
];
export var ListAssociatedResources: StaticOperationSchema = [
  9,
  n0,
  _LARis,
  {
    [_h]: ["GET", "/applications/{application}/resources", 200],
  },
  () => ListAssociatedResourcesRequest,
  () => ListAssociatedResourcesResponse,
];
export var ListAttributeGroups: StaticOperationSchema = [
  9,
  n0,
  _LAG,
  {
    [_h]: ["GET", "/attribute-groups", 200],
  },
  () => ListAttributeGroupsRequest,
  () => ListAttributeGroupsResponse,
];
export var ListAttributeGroupsForApplication: StaticOperationSchema = [
  9,
  n0,
  _LAGFA,
  {
    [_h]: ["GET", "/applications/{application}/attribute-group-details", 200],
  },
  () => ListAttributeGroupsForApplicationRequest,
  () => ListAttributeGroupsForApplicationResponse,
];
export var ListTagsForResource: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse,
];
export var PutConfiguration: StaticOperationSchema = [
  9,
  n0,
  _PC,
  {
    [_h]: ["PUT", "/configuration", 200],
  },
  () => PutConfigurationRequest,
  () => __Unit,
];
export var SyncResource: StaticOperationSchema = [
  9,
  n0,
  _SR,
  {
    [_h]: ["POST", "/sync/{resourceType}/{resource}", 200],
  },
  () => SyncResourceRequest,
  () => SyncResourceResponse,
];
export var TagResource: StaticOperationSchema = [
  9,
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{resourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse,
];
export var UntagResource: StaticOperationSchema = [
  9,
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{resourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse,
];
export var UpdateApplication: StaticOperationSchema = [
  9,
  n0,
  _UA,
  {
    [_h]: ["PATCH", "/applications/{application}", 200],
  },
  () => UpdateApplicationRequest,
  () => UpdateApplicationResponse,
];
export var UpdateAttributeGroup: StaticOperationSchema = [
  9,
  n0,
  _UAG,
  {
    [_h]: ["PATCH", "/attribute-groups/{attributeGroup}", 200],
  },
  () => UpdateAttributeGroupRequest,
  () => UpdateAttributeGroupResponse,
];
