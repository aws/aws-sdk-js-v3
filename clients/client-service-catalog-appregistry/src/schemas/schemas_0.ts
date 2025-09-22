export const _A = "Application";
export const _AAG = "AssociateAttributeGroup";
export const _AAGR = "AssociateAttributeGroupRequest";
export const _AAGRs = "AssociateAttributeGroupResponse";
export const _AG = "AttributeGroup";
export const _AGD = "AttributeGroupDetails";
export const _AGDL = "AttributeGroupDetailsList";
export const _AGS = "AttributeGroupSummary";
export const _AGSt = "AttributeGroupSummaries";
export const _AR = "AssociateResource";
export const _ARC = "AppRegistryConfiguration";
export const _ARR = "AssociateResourceRequest";
export const _ARRs = "AssociateResourceResponse";
export const _AS = "ApplicationSummary";
export const _ASp = "ApplicationSummaries";
export const _ATR = "ApplicationTagResult";
export const _CA = "CreateApplication";
export const _CAG = "CreateAttributeGroup";
export const _CAGR = "CreateAttributeGroupRequest";
export const _CAGRr = "CreateAttributeGroupResponse";
export const _CAR = "CreateApplicationRequest";
export const _CARr = "CreateApplicationResponse";
export const _CE = "ConflictException";
export const _DA = "DeleteApplication";
export const _DAG = "DeleteAttributeGroup";
export const _DAGR = "DeleteAttributeGroupRequest";
export const _DAGRe = "DeleteAttributeGroupResponse";
export const _DAGRi = "DisassociateAttributeGroupRequest";
export const _DAGRis = "DisassociateAttributeGroupResponse";
export const _DAGi = "DisassociateAttributeGroup";
export const _DAR = "DeleteApplicationRequest";
export const _DARe = "DeleteApplicationResponse";
export const _DR = "DisassociateResource";
export const _DRR = "DisassociateResourceRequest";
export const _DRRi = "DisassociateResourceResponse";
export const _GA = "GetApplication";
export const _GAG = "GetAttributeGroup";
export const _GAGR = "GetAttributeGroupRequest";
export const _GAGRe = "GetAttributeGroupResponse";
export const _GAR = "GetApplicationRequest";
export const _GARR = "GetAssociatedResourceRequest";
export const _GARRe = "GetAssociatedResourceResponse";
export const _GARe = "GetApplicationResponse";
export const _GARet = "GetAssociatedResource";
export const _GC = "GetConfiguration";
export const _GCR = "GetConfigurationResponse";
export const _I = "Integrations";
export const _ISE = "InternalServerException";
export const _LA = "ListApplications";
export const _LAAG = "ListAssociatedAttributeGroups";
export const _LAAGR = "ListAssociatedAttributeGroupsRequest";
export const _LAAGRi = "ListAssociatedAttributeGroupsResponse";
export const _LAG = "ListAttributeGroups";
export const _LAGFA = "ListAttributeGroupsForApplication";
export const _LAGFAR = "ListAttributeGroupsForApplicationRequest";
export const _LAGFARi = "ListAttributeGroupsForApplicationResponse";
export const _LAGR = "ListAttributeGroupsRequest";
export const _LAGRi = "ListAttributeGroupsResponse";
export const _LAR = "ListApplicationsRequest";
export const _LARR = "ListAssociatedResourcesRequest";
export const _LARRi = "ListAssociatedResourcesResponse";
export const _LARi = "ListApplicationsResponse";
export const _LARis = "ListAssociatedResources";
export const _LTFR = "ListTagsForResource";
export const _LTFRR = "ListTagsForResourceRequest";
export const _LTFRRi = "ListTagsForResourceResponse";
export const _PC = "PutConfiguration";
export const _PCR = "PutConfigurationRequest";
export const _R = "Resource";
export const _RD = "ResourceDetails";
export const _RG = "ResourceGroup";
export const _RI = "ResourceInfo";
export const _RIe = "ResourceIntegrations";
export const _RL = "ResourcesList";
export const _RLI = "ResourcesListItem";
export const _RNFE = "ResourceNotFoundException";
export const _Re = "Resources";
export const _SQEE = "ServiceQuotaExceededException";
export const _SR = "SyncResource";
export const _SRR = "SyncResourceRequest";
export const _SRRy = "SyncResourceResponse";
export const _TE = "ThrottlingException";
export const _TQC = "TagQueryConfiguration";
export const _TR = "TagResource";
export const _TRR = "TagResourceRequest";
export const _TRRa = "TagResourceResponse";
export const _UA = "UpdateApplication";
export const _UAG = "UpdateAttributeGroup";
export const _UAGR = "UpdateAttributeGroupRequest";
export const _UAGRp = "UpdateAttributeGroupResponse";
export const _UAR = "UpdateApplicationRequest";
export const _UARp = "UpdateApplicationResponse";
export const _UR = "UntagResource";
export const _URR = "UntagResourceRequest";
export const _URRn = "UntagResourceResponse";
export const _VE = "ValidationException";
export const _a = "arn";
export const _aA = "applicationArn";
export const _aG = "attributeGroup";
export const _aGA = "attributeGroupArn";
export const _aGD = "attributeGroupsDetails";
export const _aGt = "attributeGroups";
export const _aRC = "associatedResourceCount";
export const _aT = "applicationTag";
export const _aTR = "applicationTagResult";
export const _aTRG = "applicationTagResourceGroup";
export const _aTS = "applicationTagStatus";
export const _aTc = "actionTaken";
export const _aTs = "associationTime";
export const _ap = "application";
export const _app = "applications";
export const _at = "attributes";
export const _c = "client";
export const _cB = "createdBy";
export const _cT = "creationTime";
export const _cTl = "clientToken";
export const _co = "configuration";
export const _d = "description";
export const _e = "error";
export const _eM = "errorMessage";
export const _h = "http";
export const _hE = "httpError";
export const _hQ = "httpQuery";
export const _i = "id";
export const _in = "integrations";
export const _lUT = "lastUpdateTime";
export const _m = "message";
export const _mR = "maxResults";
export const _n = "name";
export const _nT = "nextToken";
export const _o = "options";
export const _r = "resources";
export const _rA = "resourceArn";
export const _rD = "resourceDetails";
export const _rG = "resourceGroup";
export const _rT = "resourceType";
export const _rTS = "resourceTagStatus";
export const _re = "resource";
export const _s = "server";
export const _sC = "serviceCode";
export const _st = "state";
export const _sta = "status";
export const _t = "tags";
export const _tK = "tagKey";
export const _tKa = "tagKeys";
export const _tQC = "tagQueryConfiguration";
export const _tV = "tagValue";
export const n0 = "com.amazonaws.servicecatalogappregistry";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ValidationException as __ValidationException,
} from "../models/index";
import { ServiceCatalogAppRegistryServiceException as __ServiceCatalogAppRegistryServiceException } from "../models/ServiceCatalogAppRegistryServiceException";

/* eslint no-var: 0 */

export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_m],
  [0],

  __InternalServerException
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __ResourceNotFoundException
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ValidationException
);
export var ServiceCatalogAppRegistryServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.servicecatalogappregistry",
  "ServiceCatalogAppRegistryServiceException",
  0,
  [],
  [],
  __ServiceCatalogAppRegistryServiceException
);
