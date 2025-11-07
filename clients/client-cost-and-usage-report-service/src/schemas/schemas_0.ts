export const _AA = "AdditionalArtifacts";
export const _ASE = "AdditionalSchemaElements";
export const _BVA = "BillingViewArn";
export const _C = "Compression";
export const _DRD = "DeleteReportDefinition";
export const _DRDR = "DeleteReportDefinitionRequest";
export const _DRDRe = "DeleteReportDefinitionResponse";
export const _DRDRes = "DescribeReportDefinitionsRequest";
export const _DRDResc = "DescribeReportDefinitionsResponse";
export const _DRDe = "DescribeReportDefinitions";
export const _DRNE = "DuplicateReportNameException";
export const _F = "Format";
export const _IEE = "InternalErrorException";
export const _K = "Key";
export const _LTFR = "ListTagsForResource";
export const _LTFRR = "ListTagsForResourceRequest";
export const _LTFRRi = "ListTagsForResourceResponse";
export const _M = "Message";
export const _MR = "MaxResults";
export const _MRD = "ModifyReportDefinition";
export const _MRDR = "ModifyReportDefinitionRequest";
export const _MRDRo = "ModifyReportDefinitionResponse";
export const _NT = "NextToken";
export const _PRD = "PutReportDefinition";
export const _PRDR = "PutReportDefinitionRequest";
export const _PRDRu = "PutReportDefinitionResponse";
export const _RCR = "RefreshClosedReports";
export const _RD = "ReportDefinitions";
export const _RDL = "ReportDefinitionList";
export const _RDe = "ReportDefinition";
export const _RLRE = "ReportLimitReachedException";
export const _RM = "ResponseMessage";
export const _RN = "ReportName";
export const _RNFE = "ResourceNotFoundException";
export const _RS = "ReportStatus";
export const _RV = "ReportVersioning";
export const _SB = "S3Bucket";
export const _SP = "S3Prefix";
export const _SR = "S3Region";
export const _T = "Tags";
export const _TK = "TagKeys";
export const _TL = "TagList";
export const _TR = "TagResource";
export const _TRR = "TagResourceRequest";
export const _TRRa = "TagResourceResponse";
export const _TU = "TimeUnit";
export const _Ta = "Tag";
export const _UR = "UntagResource";
export const _URR = "UntagResourceRequest";
export const _URRn = "UntagResourceResponse";
export const _V = "Value";
export const _VE = "ValidationException";
export const _c = "client";
export const _e = "error";
export const _lD = "lastDelivery";
export const _lS = "lastStatus";
export const _s = "server";
export const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.costandusagereportservice";
export const n0 = "com.amazonaws.costandusagereportservice";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import { CostAndUsageReportServiceServiceException as __CostAndUsageReportServiceServiceException } from "../models/CostAndUsageReportServiceServiceException";
import {
  DuplicateReportNameException as __DuplicateReportNameException,
  InternalErrorException as __InternalErrorException,
  ReportLimitReachedException as __ReportLimitReachedException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ValidationException as __ValidationException,
} from "../models/index";

/* eslint no-var: 0 */

export var DeleteReportDefinitionRequest: StaticStructureSchema = [3, n0, _DRDR, 0, [_RN], [0]];
export var DeleteReportDefinitionResponse: StaticStructureSchema = [3, n0, _DRDRe, 0, [_RM], [0]];
export var DescribeReportDefinitionsRequest: StaticStructureSchema = [3, n0, _DRDRes, 0, [_MR, _NT], [1, 0]];
export var DescribeReportDefinitionsResponse: StaticStructureSchema = [
  3,
  n0,
  _DRDResc,
  0,
  [_RD, _NT],
  [() => ReportDefinitionList, 0],
];
export var DuplicateReportNameException: StaticErrorSchema = [
  -3,
  n0,
  _DRNE,
  {
    [_e]: _c,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(DuplicateReportNameException, __DuplicateReportNameException);

export var InternalErrorException: StaticErrorSchema = [
  -3,
  n0,
  _IEE,
  {
    [_e]: _s,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InternalErrorException, __InternalErrorException);

export var ListTagsForResourceRequest: StaticStructureSchema = [3, n0, _LTFRR, 0, [_RN], [0]];
export var ListTagsForResourceResponse: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_T], [() => TagList]];
export var ModifyReportDefinitionRequest: StaticStructureSchema = [
  3,
  n0,
  _MRDR,
  0,
  [_RN, _RDe],
  [0, () => ReportDefinition],
];
export var ModifyReportDefinitionResponse: StaticStructureSchema = [3, n0, _MRDRo, 0, [], []];
export var PutReportDefinitionRequest: StaticStructureSchema = [
  3,
  n0,
  _PRDR,
  0,
  [_RDe, _T],
  [() => ReportDefinition, () => TagList],
];
export var PutReportDefinitionResponse: StaticStructureSchema = [3, n0, _PRDRu, 0, [], []];
export var ReportDefinition: StaticStructureSchema = [
  3,
  n0,
  _RDe,
  0,
  [_RN, _TU, _F, _C, _ASE, _SB, _SP, _SR, _AA, _RCR, _RV, _BVA, _RS],
  [0, 0, 0, 0, 64 | 0, 0, 0, 0, 64 | 0, 2, 0, 0, () => ReportStatus],
];
export var ReportLimitReachedException: StaticErrorSchema = [
  -3,
  n0,
  _RLRE,
  {
    [_e]: _c,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ReportLimitReachedException, __ReportLimitReachedException);

export var ReportStatus: StaticStructureSchema = [3, n0, _RS, 0, [_lD, _lS], [0, 0]];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var Tag: StaticStructureSchema = [3, n0, _Ta, 0, [_K, _V], [0, 0]];
export var TagResourceRequest: StaticStructureSchema = [3, n0, _TRR, 0, [_RN, _T], [0, () => TagList]];
export var TagResourceResponse: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var UntagResourceRequest: StaticStructureSchema = [3, n0, _URR, 0, [_RN, _TK], [0, 64 | 0]];
export var UntagResourceResponse: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  {
    [_e]: _c,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var __Unit = "unit" as const;

export var CostAndUsageReportServiceServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "CostAndUsageReportServiceServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(
  CostAndUsageReportServiceServiceException,
  __CostAndUsageReportServiceServiceException
);

export var AdditionalArtifactList = 64 | 0;

export var ReportDefinitionList: StaticListSchema = [1, n0, _RDL, 0, () => ReportDefinition];
export var SchemaElementList = 64 | 0;

export var TagKeyList = 64 | 0;

export var TagList: StaticListSchema = [1, n0, _TL, 0, () => Tag];
export var DeleteReportDefinition: StaticOperationSchema = [
  9,
  n0,
  _DRD,
  0,
  () => DeleteReportDefinitionRequest,
  () => DeleteReportDefinitionResponse,
];
export var DescribeReportDefinitions: StaticOperationSchema = [
  9,
  n0,
  _DRDe,
  0,
  () => DescribeReportDefinitionsRequest,
  () => DescribeReportDefinitionsResponse,
];
export var ListTagsForResource: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse,
];
export var ModifyReportDefinition: StaticOperationSchema = [
  9,
  n0,
  _MRD,
  0,
  () => ModifyReportDefinitionRequest,
  () => ModifyReportDefinitionResponse,
];
export var PutReportDefinition: StaticOperationSchema = [
  9,
  n0,
  _PRD,
  0,
  () => PutReportDefinitionRequest,
  () => PutReportDefinitionResponse,
];
export var TagResource: StaticOperationSchema = [9, n0, _TR, 0, () => TagResourceRequest, () => TagResourceResponse];
export var UntagResource: StaticOperationSchema = [
  9,
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse,
];
