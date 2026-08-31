const _AACD = "A2aAgentCardDescriptor";
const _ADE = "AccessDeniedException";
const _ASAD = "AgentSkillsAdditionalData";
const _ASDD = "AgentSkillsDefinitionDescriptor";
const _ASMD = "AgentSkillsMdDescriptor";
const _BGDRR = "BatchGetDiscoverableRegistryRecord";
const _BGDRRE = "BatchGetDiscoverableRegistryRecordError";
const _BGDRREL = "BatchGetDiscoverableRegistryRecordErrorList";
const _BGDRRR = "BatchGetDiscoverableRegistryRecordRequest";
const _BGDRRRa = "BatchGetDiscoverableRegistryRecordResponse";
const _CD = "CustomDescriptor";
const _D = "Description";
const _DD = "DescriptorData";
const _DRRS = "DiscoverableRegistryRecordSummary";
const _DRRSL = "DiscoverableRegistryRecordSummaryList";
const _DS = "DescriptorSource";
const _DSFU = "DescriptorSourceFromUrl";
const _De = "Descriptors";
const _ISE = "InternalServerException";
const _LDRR = "ListDiscoverableRegistryRecords";
const _LDRRR = "ListDiscoverableRegistryRecordsRequest";
const _LDRRRi = "ListDiscoverableRegistryRecordsResponse";
const _MFE = "MetadataFilterExpression";
const _MSAD = "McpServerAdditionalData";
const _MSD = "McpServerDescriptor";
const _MTD = "McpToolsDescriptor";
const _RNFE = "ResourceNotFoundException";
const _RRE = "RegistryRecordsEntry";
const _RREL = "RegistryRecordsEntryList";
const _RRF = "RegistryRecordFilter";
const _RRFL = "RegistryRecordFilterList";
const _RRS = "RegistryRecordSummary";
const _RRSL = "RegistryRecordSummaryList";
const _SDRR = "SearchDiscoverableRegistryRecords";
const _SDRRR = "SearchDiscoverableRegistryRecordsRequest";
const _SDRRRe = "SearchDiscoverableRegistryRecordsResponse";
const _SQ = "SearchQuery";
const _TE = "ThrottlingException";
const _UE = "UnauthorizedException";
const _VE = "ValidationException";
const _VEF = "ValidationExceptionField";
const _VEFL = "ValidationExceptionFieldList";
const _aAC = "a2aAgentCard";
const _aD = "additionalData";
const _aSD = "agentSkillsDefinition";
const _c = "client";
const _cA = "createdAt";
const _cu = "custom";
const _d = "data";
const _dN = "displayName";
const _dSV = "dataSchemaVersion";
const _dT = "descriptorTypes";
const _de = "description";
const _des = "descriptors";
const _e = "error";
const _eC = "errorCode";
const _en = "entries";
const _er = "errors";
const _f = "filters";
const _fL = "fieldList";
const _fU = "fromUrl";
const _h = "http";
const _hE = "httpError";
const _m = "message";
const _mR = "maxResults";
const _mS = "mcpServer";
const _n = "name";
const _nT = "nextToken";
const _r = "reason";
const _rA = "registryArn";
const _rAe = "recordArn";
const _rI = "registryId";
const _rIe = "recordId";
const _rIec = "recordIds";
const _rIeg = "registryIds";
const _rR = "registryRecords";
const _rT = "recordType";
const _rV = "recordVersion";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.agentregistry";
const _sM = "skillMd";
const _sQ = "searchQuery";
const _se = "server";
const _so = "source";
const _st = "status";
const _t = "tools";
const _u = "url";
const _uA = "updatedAt";
const _v = "values";
const n0 = "com.amazonaws.agentregistry";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { AgentRegistryServiceException } from "../models/AgentRegistryServiceException";
import {
  AccessDeniedException,
  InternalServerException,
  ResourceNotFoundException,
  ThrottlingException,
  UnauthorizedException,
  ValidationException,
} from "../models/errors";

/* eslint no-var: 0 */
const _s_registry = TypeRegistry.for(_s);
export var AgentRegistryServiceException$: StaticErrorSchema = [-3, _s, "AgentRegistryServiceException", 0, [], []];
_s_registry.registerError(AgentRegistryServiceException$, AgentRegistryServiceException);
const n0_registry = TypeRegistry.for(n0);
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c, [_hE]: 403 },
  [_m],
  [0]
];
n0_registry.registerError(AccessDeniedException$, AccessDeniedException);
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _se, [_hE]: 500 },
  [_m],
  [0]
];
n0_registry.registerError(InternalServerException$, InternalServerException);
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_m],
  [0]
];
n0_registry.registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE,
  { [_e]: _c, [_hE]: 429 },
  [_m],
  [0]
];
n0_registry.registerError(ThrottlingException$, ThrottlingException);
export var UnauthorizedException$: StaticErrorSchema = [-3, n0, _UE,
  { [_e]: _c, [_hE]: 401 },
  [_m],
  [0]
];
n0_registry.registerError(UnauthorizedException$, UnauthorizedException);
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c, [_hE]: 400 },
  [_m, _r, _fL],
  [0, 0, () => ValidationExceptionFieldList], 2
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
var Description: StaticSimpleSchema = [0, n0, _D, 8, 0];
var DescriptorData: StaticSimpleSchema = [0, n0, _DD, 8, 0];
var MetadataFilterExpression: StaticSimpleSchema = [0, n0, _MFE, 8, 15];
var SearchQuery: StaticSimpleSchema = [0, n0, _SQ, 8, 0];
export var A2aAgentCardDescriptor$: StaticStructureSchema = [3, n0, _AACD,
  0,
  [_d, _dSV, _so],
  [[() => DescriptorData, 0], 0, () => DescriptorSource$]
];
export var AgentSkillsAdditionalData$: StaticStructureSchema = [3, n0, _ASAD,
  0,
  [_sM],
  [[() => AgentSkillsMdDescriptor$, 0]]
];
export var AgentSkillsDefinitionDescriptor$: StaticStructureSchema = [3, n0, _ASDD,
  0,
  [_d, _dSV, _aD],
  [[() => DescriptorData, 0], 0, [() => AgentSkillsAdditionalData$, 0]]
];
export var AgentSkillsMdDescriptor$: StaticStructureSchema = [3, n0, _ASMD,
  0,
  [_d, _dSV, _so],
  [[() => DescriptorData, 0], 0, () => DescriptorSource$]
];
export var BatchGetDiscoverableRegistryRecordError$: StaticStructureSchema = [3, n0, _BGDRRE,
  0,
  [_rI, _rIe, _eC, _m],
  [0, 0, 0, 0], 3
];
export var BatchGetDiscoverableRegistryRecordRequest$: StaticStructureSchema = [3, n0, _BGDRRR,
  0,
  [_en],
  [() => RegistryRecordsEntryList], 1
];
export var BatchGetDiscoverableRegistryRecordResponse$: StaticStructureSchema = [3, n0, _BGDRRRa,
  0,
  [_rR, _er],
  [[() => RegistryRecordSummaryList, 0], () => BatchGetDiscoverableRegistryRecordErrorList], 2
];
export var CustomDescriptor$: StaticStructureSchema = [3, n0, _CD,
  0,
  [_d],
  [[() => DescriptorData, 0]]
];
export var Descriptors$: StaticStructureSchema = [3, n0, _De,
  0,
  [_mS, _aAC, _aSD, _cu],
  [[() => McpServerDescriptor$, 0], [() => A2aAgentCardDescriptor$, 0], [() => AgentSkillsDefinitionDescriptor$, 0], [() => CustomDescriptor$, 0]]
];
export var DescriptorSource$: StaticStructureSchema = [3, n0, _DS,
  0,
  [_fU],
  [() => DescriptorSourceFromUrl$]
];
export var DescriptorSourceFromUrl$: StaticStructureSchema = [3, n0, _DSFU,
  0,
  [_u],
  [0], 1
];
export var DiscoverableRegistryRecordSummary$: StaticStructureSchema = [3, n0, _DRRS,
  0,
  [_rA, _rAe, _rIe, _n, _rT, _rV, _st, _cA, _uA, _de, _dN, _dT],
  [0, 0, 0, 0, 0, 0, 0, 5, 5, [() => Description, 0], 0, 64 | 0], 9
];
export var ListDiscoverableRegistryRecordsRequest$: StaticStructureSchema = [3, n0, _LDRRR,
  0,
  [_rI, _mR, _nT, _f],
  [[0, 1], 1, 0, () => RegistryRecordFilterList], 1
];
export var ListDiscoverableRegistryRecordsResponse$: StaticStructureSchema = [3, n0, _LDRRRi,
  0,
  [_rR, _nT],
  [[() => DiscoverableRegistryRecordSummaryList, 0], 0], 1
];
export var McpServerAdditionalData$: StaticStructureSchema = [3, n0, _MSAD,
  0,
  [_t],
  [[() => McpToolsDescriptor$, 0]]
];
export var McpServerDescriptor$: StaticStructureSchema = [3, n0, _MSD,
  0,
  [_d, _dSV, _aD, _so],
  [[() => DescriptorData, 0], 0, [() => McpServerAdditionalData$, 0], () => DescriptorSource$]
];
export var McpToolsDescriptor$: StaticStructureSchema = [3, n0, _MTD,
  0,
  [_d, _dSV],
  [[() => DescriptorData, 0], 0]
];
export var RegistryRecordFilter$: StaticStructureSchema = [3, n0, _RRF,
  0,
  [_n, _v],
  [0, 64 | 0], 2
];
export var RegistryRecordsEntry$: StaticStructureSchema = [3, n0, _RRE,
  0,
  [_rI, _rIec],
  [0, 64 | 0], 2
];
export var RegistryRecordSummary$: StaticStructureSchema = [3, n0, _RRS,
  0,
  [_rA, _rAe, _rIe, _n, _rT, _des, _rV, _st, _cA, _uA, _de, _dN],
  [0, 0, 0, 0, 0, [() => Descriptors$, 0], 0, 0, 5, 5, [() => Description, 0], 0], 10
];
export var SearchDiscoverableRegistryRecordsRequest$: StaticStructureSchema = [3, n0, _SDRRR,
  0,
  [_sQ, _rIeg, _mR, _f],
  [[() => SearchQuery, 0], 64 | 0, 1, [() => MetadataFilterExpression, 0]], 2
];
export var SearchDiscoverableRegistryRecordsResponse$: StaticStructureSchema = [3, n0, _SDRRRe,
  0,
  [_rR],
  [[() => RegistryRecordSummaryList, 0]], 1
];
export var ValidationExceptionField$: StaticStructureSchema = [3, n0, _VEF,
  0,
  [_n, _m],
  [0, 0], 2
];
var BatchGetDiscoverableRegistryRecordErrorList: StaticListSchema = [1, n0, _BGDRREL,
  0, () => BatchGetDiscoverableRegistryRecordError$
];
var DescriptorTypeList = 64 | 0;
var DiscoverableFilterValues = 64 | 0;
var DiscoverableRegistryRecordSummaryList: StaticListSchema = [1, n0, _DRRSL,
  0, [() => DiscoverableRegistryRecordSummary$,
    0]
];
var RegistryIdList = 64 | 0;
var RegistryRecordFilterList: StaticListSchema = [1, n0, _RRFL,
  0, () => RegistryRecordFilter$
];
var RegistryRecordIdList = 64 | 0;
var RegistryRecordsEntryList: StaticListSchema = [1, n0, _RREL,
  0, () => RegistryRecordsEntry$
];
var RegistryRecordSummaryList: StaticListSchema = [1, n0, _RRSL,
  0, [() => RegistryRecordSummary$,
    0]
];
var ValidationExceptionFieldList: StaticListSchema = [1, n0, _VEFL,
  0, () => ValidationExceptionField$
];
export var BatchGetDiscoverableRegistryRecord$: StaticOperationSchema = [9, n0, _BGDRR,
  { [_h]: ["POST", "/discoverable-records-batch", 200] }, () => BatchGetDiscoverableRegistryRecordRequest$, () => BatchGetDiscoverableRegistryRecordResponse$
];
export var ListDiscoverableRegistryRecords$: StaticOperationSchema = [9, n0, _LDRR,
  { [_h]: ["POST", "/registries/{registryId}/discoverable-records-list", 200] }, () => ListDiscoverableRegistryRecordsRequest$, () => ListDiscoverableRegistryRecordsResponse$
];
export var SearchDiscoverableRegistryRecords$: StaticOperationSchema = [9, n0, _SDRR,
  { [_h]: ["POST", "/discoverable-records-search", 200] }, () => SearchDiscoverableRegistryRecordsRequest$, () => SearchDiscoverableRegistryRecordsResponse$
];
