const _ADE = "AccessDeniedException";
const _DRD = "DeleteReportDefinition";
const _DRDR = "DeleteReportDefinitionRequest";
const _DRDRe = "DeleteReportDefinitionResult";
const _GRD = "GetReportDefinition";
const _GRDR = "GetReportDefinitionRequest";
const _GRDRe = "GetReportDefinitionResult";
const _IAU = "ImportApplicationUsage";
const _IAUR = "ImportApplicationUsageRequest";
const _IAURm = "ImportApplicationUsageResult";
const _ISE = "InternalServerException";
const _LRD = "ListReportDefinitions";
const _LRDR = "ListReportDefinitionsRequest";
const _LRDRi = "ListReportDefinitionsResult";
const _PRD = "PutReportDefinition";
const _PRDR = "PutReportDefinitionRequest";
const _PRDRu = "PutReportDefinitionResult";
const _RD = "ReportDefinition";
const _RDL = "ReportDefinitionList";
const _SL = "S3Location";
const _SQEE = "ServiceQuotaExceededException";
const _SSL = "SourceS3Location";
const _TE = "ThrottlingException";
const _URD = "UpdateReportDefinition";
const _URDR = "UpdateReportDefinitionRequest";
const _URDRp = "UpdateReportDefinitionResult";
const _VE = "ValidationException";
const _b = "bucket";
const _c = "client";
const _cA = "createdAt";
const _dSL = "destinationS3Location";
const _e = "error";
const _f = "format";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _iI = "importId";
const _k = "key";
const _lU = "lastUpdated";
const _lUA = "lastUpdatedAt";
const _m = "message";
const _mR = "maxResults";
const _nT = "nextToken";
const _p = "prefix";
const _r = "region";
const _rD = "reportDescription";
const _rDe = "reportDefinitions";
const _rF = "reportFrequency";
const _rI = "reportId";
const _s = "server";
const _sSL = "sourceS3Location";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.applicationcostprofiler";
const n0 = "com.amazonaws.applicationcostprofiler";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import { ApplicationCostProfilerServiceException as __ApplicationCostProfilerServiceException } from "../models/ApplicationCostProfilerServiceException";
import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";

/* eslint no-var: 0 */

export var AccessDeniedException: StaticErrorSchema = [
  -3,
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);

export var DeleteReportDefinitionRequest: StaticStructureSchema = [3, n0, _DRDR, 0, [_rI], [[0, 1]]];
export var DeleteReportDefinitionResult: StaticStructureSchema = [3, n0, _DRDRe, 0, [_rI], [0]];
export var GetReportDefinitionRequest: StaticStructureSchema = [3, n0, _GRDR, 0, [_rI], [[0, 1]]];
export var GetReportDefinitionResult: StaticStructureSchema = [
  3,
  n0,
  _GRDRe,
  0,
  [_rI, _rD, _rF, _f, _dSL, _cA, _lU],
  [0, 0, 0, 0, () => S3Location, 4, 4],
];
export var ImportApplicationUsageRequest: StaticStructureSchema = [3, n0, _IAUR, 0, [_sSL], [() => SourceS3Location]];
export var ImportApplicationUsageResult: StaticStructureSchema = [3, n0, _IAURm, 0, [_iI], [0]];
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

export var ListReportDefinitionsRequest: StaticStructureSchema = [
  3,
  n0,
  _LRDR,
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
export var ListReportDefinitionsResult: StaticStructureSchema = [
  3,
  n0,
  _LRDRi,
  0,
  [_rDe, _nT],
  [() => ReportDefinitionList, 0],
];
export var PutReportDefinitionRequest: StaticStructureSchema = [
  3,
  n0,
  _PRDR,
  0,
  [_rI, _rD, _rF, _f, _dSL],
  [0, 0, 0, 0, () => S3Location],
];
export var PutReportDefinitionResult: StaticStructureSchema = [3, n0, _PRDRu, 0, [_rI], [0]];
export var ReportDefinition: StaticStructureSchema = [
  3,
  n0,
  _RD,
  0,
  [_rI, _rD, _rF, _f, _dSL, _cA, _lUA],
  [0, 0, 0, 0, () => S3Location, 4, 4],
];
export var S3Location: StaticStructureSchema = [3, n0, _SL, 0, [_b, _p], [0, 0]];
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

export var SourceS3Location: StaticStructureSchema = [3, n0, _SSL, 0, [_b, _k, _r], [0, 0, 0]];
export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);

export var UpdateReportDefinitionRequest: StaticStructureSchema = [
  3,
  n0,
  _URDR,
  0,
  [_rI, _rD, _rF, _f, _dSL],
  [[0, 1], 0, 0, 0, () => S3Location],
];
export var UpdateReportDefinitionResult: StaticStructureSchema = [3, n0, _URDRp, 0, [_rI], [0]];
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

export var ApplicationCostProfilerServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "ApplicationCostProfilerServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(ApplicationCostProfilerServiceException, __ApplicationCostProfilerServiceException);

export var ReportDefinitionList: StaticListSchema = [1, n0, _RDL, 0, () => ReportDefinition];
export var DeleteReportDefinition: StaticOperationSchema = [
  9,
  n0,
  _DRD,
  {
    [_h]: ["DELETE", "/reportDefinition/{reportId}", 200],
  },
  () => DeleteReportDefinitionRequest,
  () => DeleteReportDefinitionResult,
];
export var GetReportDefinition: StaticOperationSchema = [
  9,
  n0,
  _GRD,
  {
    [_h]: ["GET", "/reportDefinition/{reportId}", 200],
  },
  () => GetReportDefinitionRequest,
  () => GetReportDefinitionResult,
];
export var ImportApplicationUsage: StaticOperationSchema = [
  9,
  n0,
  _IAU,
  {
    [_h]: ["POST", "/importApplicationUsage", 200],
  },
  () => ImportApplicationUsageRequest,
  () => ImportApplicationUsageResult,
];
export var ListReportDefinitions: StaticOperationSchema = [
  9,
  n0,
  _LRD,
  {
    [_h]: ["GET", "/reportDefinition", 200],
  },
  () => ListReportDefinitionsRequest,
  () => ListReportDefinitionsResult,
];
export var PutReportDefinition: StaticOperationSchema = [
  9,
  n0,
  _PRD,
  {
    [_h]: ["POST", "/reportDefinition", 200],
  },
  () => PutReportDefinitionRequest,
  () => PutReportDefinitionResult,
];
export var UpdateReportDefinition: StaticOperationSchema = [
  9,
  n0,
  _URD,
  {
    [_h]: ["PUT", "/reportDefinition/{reportId}", 200],
  },
  () => UpdateReportDefinitionRequest,
  () => UpdateReportDefinitionResult,
];
