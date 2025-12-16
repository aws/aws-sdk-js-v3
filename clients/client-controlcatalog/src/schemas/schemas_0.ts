const _A = "Arn";
const _ADE = "AccessDeniedException";
const _ADS = "AssociatedDomainSummary";
const _AOS = "AssociatedObjectiveSummary";
const _Al = "Aliases";
const _B = "Behavior";
const _C = "Controls";
const _CA = "ControlArn";
const _CAo = "ControlArns";
const _CC = "CommonControls";
const _CCA = "CommonControlArn";
const _CCAo = "CommonControlArns";
const _CCF = "CommonControlFilter";
const _CCMD = "CommonControlMappingDetails";
const _CCS = "CommonControlSummary";
const _CCSL = "CommonControlSummaryList";
const _CCo = "CommonControl";
const _CF = "ControlFilter";
const _CM = "ControlMapping";
const _CMF = "ControlMappingFilter";
const _CMo = "ControlMappings";
const _CP = "ControlParameter";
const _CPo = "ControlParameters";
const _CS = "ControlSummary";
const _CT = "CreateTime";
const _D = "Description";
const _DR = "DeployableRegions";
const _DRF = "DomainResourceFilter";
const _DRFL = "DomainResourceFilterList";
const _DS = "DomainSummary";
const _DSL = "DomainSummaryList";
const _Do = "Domain";
const _Dom = "Domains";
const _F = "Filter";
const _FMD = "FrameworkMappingDetails";
const _Fr = "Framework";
const _GC = "GetControl";
const _GCR = "GetControlRequest";
const _GCRe = "GetControlResponse";
const _GR = "GovernedResources";
const _I = "Implementations";
const _ID = "ImplementationDetails";
const _IF = "ImplementationFilter";
const _IS = "ImplementationSummary";
const _ISE = "InternalServerException";
const _Id = "Identifier";
const _Ide = "Identifiers";
const _Im = "Implementation";
const _It = "Item";
const _LC = "ListControls";
const _LCC = "ListCommonControls";
const _LCCR = "ListCommonControlsRequest";
const _LCCRi = "ListCommonControlsResponse";
const _LCM = "ListControlMappings";
const _LCMR = "ListControlMappingsRequest";
const _LCMRi = "ListControlMappingsResponse";
const _LCR = "ListControlsRequest";
const _LCRi = "ListControlsResponse";
const _LD = "ListDomains";
const _LDR = "ListDomainsRequest";
const _LDRi = "ListDomainsResponse";
const _LO = "ListObjectives";
const _LOR = "ListObjectivesRequest";
const _LORi = "ListObjectivesResponse";
const _LUT = "LastUpdateTime";
const _M = "Message";
const _MR = "MaxResults";
const _MT = "MappingType";
const _MTa = "MappingTypes";
const _Ma = "Mapping";
const _N = "Name";
const _NT = "NextToken";
const _O = "Objectives";
const _OF = "ObjectiveFilter";
const _ORF = "ObjectiveResourceFilter";
const _ORFL = "ObjectiveResourceFilterList";
const _OS = "ObjectiveSummary";
const _OSL = "ObjectiveSummaryList";
const _Ob = "Objective";
const _P = "Parameters";
const _RC = "RegionConfiguration";
const _RCMD = "RelatedControlMappingDetails";
const _RCe = "RelatedControl";
const _RNFE = "ResourceNotFoundException";
const _RT = "RelationType";
const _S = "Severity";
const _Sc = "Scope";
const _T = "Type";
const _TE = "ThrottlingException";
const _Ty = "Types";
const _VE = "ValidationException";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _mR = "maxResults";
const _nT = "nextToken";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.controlcatalog";
const n0 = "com.amazonaws.controlcatalog";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import { ControlCatalogServiceException } from "../models/ControlCatalogServiceException";
import {
  AccessDeniedException,
  InternalServerException,
  ResourceNotFoundException,
  ThrottlingException,
  ValidationException,
} from "../models/errors";

/* eslint no-var: 0 */
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE, { [_e]: _c, [_hE]: 403 }, [_M], [0]];
TypeRegistry.for(n0).registerError(AccessDeniedException$, AccessDeniedException);
export var AssociatedDomainSummary$: StaticStructureSchema = [3, n0, _ADS, 0, [_A, _N], [0, 0]];
export var AssociatedObjectiveSummary$: StaticStructureSchema = [3, n0, _AOS, 0, [_A, _N], [0, 0]];
export var CommonControlFilter$: StaticStructureSchema = [3, n0, _CCF, 0, [_O], [() => ObjectiveResourceFilterList]];
export var CommonControlMappingDetails$: StaticStructureSchema = [3, n0, _CCMD, 0, [_CCA], [0]];
export var CommonControlSummary$: StaticStructureSchema = [
  3,
  n0,
  _CCS,
  0,
  [_A, _N, _D, _Do, _Ob, _CT, _LUT],
  [0, 0, 0, () => AssociatedDomainSummary$, () => AssociatedObjectiveSummary$, 4, 4],
];
export var ControlFilter$: StaticStructureSchema = [3, n0, _CF, 0, [_I], [() => ImplementationFilter$]];
export var ControlMapping$: StaticStructureSchema = [3, n0, _CM, 0, [_CA, _MT, _Ma], [0, 0, () => Mapping$]];
export var ControlMappingFilter$: StaticStructureSchema = [
  3,
  n0,
  _CMF,
  0,
  [_CAo, _CCAo, _MTa],
  [64 | 0, 64 | 0, 64 | 0],
];
export var ControlParameter$: StaticStructureSchema = [3, n0, _CP, 0, [_N], [0]];
export var ControlSummary$: StaticStructureSchema = [
  3,
  n0,
  _CS,
  0,
  [_A, _Al, _N, _D, _B, _S, _Im, _CT, _GR],
  [0, 64 | 0, 0, 0, 0, 0, () => ImplementationSummary$, 4, 64 | 0],
];
export var DomainResourceFilter$: StaticStructureSchema = [3, n0, _DRF, 0, [_A], [0]];
export var DomainSummary$: StaticStructureSchema = [3, n0, _DS, 0, [_A, _N, _D, _CT, _LUT], [0, 0, 0, 4, 4]];
export var FrameworkMappingDetails$: StaticStructureSchema = [3, n0, _FMD, 0, [_N, _It], [0, 0]];
export var GetControlRequest$: StaticStructureSchema = [3, n0, _GCR, 0, [_CA], [0]];
export var GetControlResponse$: StaticStructureSchema = [
  3,
  n0,
  _GCRe,
  0,
  [_A, _Al, _N, _D, _B, _S, _RC, _Im, _P, _CT, _GR],
  [0, 64 | 0, 0, 0, 0, 0, () => RegionConfiguration$, () => ImplementationDetails$, () => ControlParameters, 4, 64 | 0],
];
export var ImplementationDetails$: StaticStructureSchema = [3, n0, _ID, 0, [_T, _Id], [0, 0]];
export var ImplementationFilter$: StaticStructureSchema = [3, n0, _IF, 0, [_Ty, _Ide], [64 | 0, 64 | 0]];
export var ImplementationSummary$: StaticStructureSchema = [3, n0, _IS, 0, [_T, _Id], [0, 0]];
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE, { [_e]: _s, [_hE]: 500 }, [_M], [0]];
TypeRegistry.for(n0).registerError(InternalServerException$, InternalServerException);
export var ListCommonControlsRequest$: StaticStructureSchema = [
  3,
  n0,
  _LCCR,
  0,
  [_MR, _NT, _CCF],
  [[1, { [_hQ]: _mR }], [0, { [_hQ]: _nT }], () => CommonControlFilter$],
];
export var ListCommonControlsResponse$: StaticStructureSchema = [
  3,
  n0,
  _LCCRi,
  0,
  [_CC, _NT],
  [() => CommonControlSummaryList, 0],
];
export var ListControlMappingsRequest$: StaticStructureSchema = [
  3,
  n0,
  _LCMR,
  0,
  [_NT, _MR, _F],
  [[0, { [_hQ]: _nT }], [1, { [_hQ]: _mR }], () => ControlMappingFilter$],
];
export var ListControlMappingsResponse$: StaticStructureSchema = [
  3,
  n0,
  _LCMRi,
  0,
  [_CMo, _NT],
  [() => ControlMappings, 0],
];
export var ListControlsRequest$: StaticStructureSchema = [
  3,
  n0,
  _LCR,
  0,
  [_NT, _MR, _F],
  [[0, { [_hQ]: _nT }], [1, { [_hQ]: _mR }], () => ControlFilter$],
];
export var ListControlsResponse$: StaticStructureSchema = [3, n0, _LCRi, 0, [_C, _NT], [() => Controls, 0]];
export var ListDomainsRequest$: StaticStructureSchema = [
  3,
  n0,
  _LDR,
  0,
  [_MR, _NT],
  [
    [1, { [_hQ]: _mR }],
    [0, { [_hQ]: _nT }],
  ],
];
export var ListDomainsResponse$: StaticStructureSchema = [3, n0, _LDRi, 0, [_Dom, _NT], [() => DomainSummaryList, 0]];
export var ListObjectivesRequest$: StaticStructureSchema = [
  3,
  n0,
  _LOR,
  0,
  [_MR, _NT, _OF],
  [[1, { [_hQ]: _mR }], [0, { [_hQ]: _nT }], () => ObjectiveFilter$],
];
export var ListObjectivesResponse$: StaticStructureSchema = [
  3,
  n0,
  _LORi,
  0,
  [_O, _NT],
  [() => ObjectiveSummaryList, 0],
];
export var ObjectiveFilter$: StaticStructureSchema = [3, n0, _OF, 0, [_Dom], [() => DomainResourceFilterList]];
export var ObjectiveResourceFilter$: StaticStructureSchema = [3, n0, _ORF, 0, [_A], [0]];
export var ObjectiveSummary$: StaticStructureSchema = [
  3,
  n0,
  _OS,
  0,
  [_A, _N, _D, _Do, _CT, _LUT],
  [0, 0, 0, () => AssociatedDomainSummary$, 4, 4],
];
export var RegionConfiguration$: StaticStructureSchema = [3, n0, _RC, 0, [_Sc, _DR], [0, 64 | 0]];
export var RelatedControlMappingDetails$: StaticStructureSchema = [3, n0, _RCMD, 0, [_CA, _RT], [0, 0]];
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE, { [_e]: _c, [_hE]: 404 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE, { [_e]: _c, [_hE]: 429 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ThrottlingException$, ThrottlingException);
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE, { [_e]: _c, [_hE]: 400 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ValidationException$, ValidationException);
export var ControlCatalogServiceException$: StaticErrorSchema = [-3, _sm, "ControlCatalogServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(ControlCatalogServiceException$, ControlCatalogServiceException);
var CommonControlArnFilterList = 64 | 0;
var CommonControlSummaryList: StaticListSchema = [1, n0, _CCSL, 0, () => CommonControlSummary$];
var ControlAliases = 64 | 0;
var ControlArnFilterList = 64 | 0;
var ControlMappings: StaticListSchema = [1, n0, _CMo, 0, () => ControlMapping$];
var ControlParameters: StaticListSchema = [1, n0, _CPo, 0, () => ControlParameter$];
var Controls: StaticListSchema = [1, n0, _C, 0, () => ControlSummary$];
var DeployableRegions = 64 | 0;
var DomainResourceFilterList: StaticListSchema = [1, n0, _DRFL, 0, () => DomainResourceFilter$];
var DomainSummaryList: StaticListSchema = [1, n0, _DSL, 0, () => DomainSummary$];
var GovernedResources = 64 | 0;
var ImplementationIdentifierFilterList = 64 | 0;
var ImplementationTypeFilterList = 64 | 0;
var MappingTypeFilterList = 64 | 0;
var ObjectiveResourceFilterList: StaticListSchema = [1, n0, _ORFL, 0, () => ObjectiveResourceFilter$];
var ObjectiveSummaryList: StaticListSchema = [1, n0, _OSL, 0, () => ObjectiveSummary$];
export var Mapping$: StaticStructureSchema = [
  3,
  n0,
  _Ma,
  0,
  [_Fr, _CCo, _RCe],
  [() => FrameworkMappingDetails$, () => CommonControlMappingDetails$, () => RelatedControlMappingDetails$],
];
export var GetControl$: StaticOperationSchema = [
  9,
  n0,
  _GC,
  { [_h]: ["POST", "/get-control", 200] },
  () => GetControlRequest$,
  () => GetControlResponse$,
];
export var ListCommonControls$: StaticOperationSchema = [
  9,
  n0,
  _LCC,
  { [_h]: ["POST", "/common-controls", 200] },
  () => ListCommonControlsRequest$,
  () => ListCommonControlsResponse$,
];
export var ListControlMappings$: StaticOperationSchema = [
  9,
  n0,
  _LCM,
  { [_h]: ["POST", "/list-control-mappings", 200] },
  () => ListControlMappingsRequest$,
  () => ListControlMappingsResponse$,
];
export var ListControls$: StaticOperationSchema = [
  9,
  n0,
  _LC,
  { [_h]: ["POST", "/list-controls", 200] },
  () => ListControlsRequest$,
  () => ListControlsResponse$,
];
export var ListDomains$: StaticOperationSchema = [
  9,
  n0,
  _LD,
  { [_h]: ["POST", "/domains", 200] },
  () => ListDomainsRequest$,
  () => ListDomainsResponse$,
];
export var ListObjectives$: StaticOperationSchema = [
  9,
  n0,
  _LO,
  { [_h]: ["POST", "/objectives", 200] },
  () => ListObjectivesRequest$,
  () => ListObjectivesResponse$,
];
