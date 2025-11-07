export const _C = "Column";
export const _CA = "CreatedAt";
export const _CAo = "CompletedAt";
export const _CE = "CreateExport";
export const _CER = "CreateExportRequest";
export const _CERr = "CreateExportResponse";
export const _CL = "ColumnList";
export const _Co = "Compression";
export const _D = "Description";
export const _DC = "DestinationConfigurations";
export const _DE = "DeleteExport";
export const _DER = "DeleteExportRequest";
export const _DERe = "DeleteExportResponse";
export const _DQ = "DataQuery";
export const _DV = "DefaultValue";
export const _E = "Export";
export const _EA = "ExportArn";
export const _EI = "ExecutionId";
export const _EN = "ExportName";
export const _ER = "ExecutionReference";
export const _ERL = "ExecutionReferenceList";
export const _ERLx = "ExportReferenceList";
export const _ERx = "ExportReference";
export const _ES = "ExecutionStatus";
export const _ESx = "ExportStatus";
export const _Ex = "Executions";
export const _Exp = "Exports";
export const _F = "Frequency";
export const _Fi = "Fields";
export const _Fo = "Format";
export const _GE = "GetExecution";
export const _GER = "GetExecutionRequest";
export const _GERe = "GetExecutionResponse";
export const _GERet = "GetExportRequest";
export const _GERetx = "GetExportResponse";
export const _GEe = "GetExport";
export const _GT = "GetTable";
export const _GTR = "GetTableRequest";
export const _GTRe = "GetTableResponse";
export const _ISE = "InternalServerException";
export const _K = "Key";
export const _LE = "ListExecutions";
export const _LER = "ListExecutionsRequest";
export const _LERi = "ListExecutionsResponse";
export const _LERis = "ListExportsRequest";
export const _LERist = "ListExportsResponse";
export const _LEi = "ListExports";
export const _LRA = "LastRefreshedAt";
export const _LT = "ListTables";
export const _LTFR = "ListTagsForResource";
export const _LTFRR = "ListTagsForResourceRequest";
export const _LTFRRi = "ListTagsForResourceResponse";
export const _LTR = "ListTablesRequest";
export const _LTRi = "ListTablesResponse";
export const _LUA = "LastUpdatedAt";
export const _M = "Message";
export const _MR = "MaxResults";
export const _N = "Name";
export const _NT = "NextToken";
export const _O = "Overwrite";
export const _OT = "OutputType";
export const _QC = "QuotaCode";
export const _QS = "QueryStatement";
export const _R = "Reason";
export const _RA = "ResourceArn";
export const _RC = "RefreshCadence";
export const _RI = "ResourceId";
export const _RNFE = "ResourceNotFoundException";
export const _RT = "ResourceTags";
export const _RTK = "ResourceTagKeys";
export const _RTL = "ResourceTagList";
export const _RTe = "ResourceType";
export const _RTes = "ResourceTag";
export const _S = "Schema";
export const _SB = "S3Bucket";
export const _SC = "StatusCode";
export const _SCe = "ServiceCode";
export const _SD = "S3Destination";
export const _SOC = "S3OutputConfigurations";
export const _SP = "S3Prefix";
export const _SQEE = "ServiceQuotaExceededException";
export const _SR = "StatusReason";
export const _SRe = "S3Region";
export const _T = "Type";
export const _TC = "TableConfigurations";
export const _TE = "ThrottlingException";
export const _TL = "TableList";
export const _TN = "TableName";
export const _TP = "TableProperties";
export const _TPD = "TablePropertyDescription";
export const _TPDL = "TablePropertyDescriptionList";
export const _TR = "TagResource";
export const _TRR = "TagResourceRequest";
export const _TRRa = "TagResourceResponse";
export const _Ta = "Tables";
export const _Tab = "Table";
export const _UE = "UpdateExport";
export const _UER = "UpdateExportRequest";
export const _UERp = "UpdateExportResponse";
export const _UR = "UntagResource";
export const _URR = "UntagResourceRequest";
export const _URRn = "UntagResourceResponse";
export const _V = "Value";
export const _VE = "ValidationException";
export const _VEF = "ValidationExceptionField";
export const _VEFL = "ValidationExceptionFieldList";
export const _VV = "ValidValues";
export const _c = "client";
export const _e = "error";
export const _hE = "httpError";
export const _s = "server";
export const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.bcmdataexports";
export const n0 = "com.amazonaws.bcmdataexports";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { BCMDataExportsServiceException as __BCMDataExportsServiceException } from "../models/BCMDataExportsServiceException";
import {
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";

/* eslint no-var: 0 */

export var Column: StaticStructureSchema = [3, n0, _C, 0, [_N, _T, _D], [0, 0, 0]];
export var CreateExportRequest: StaticStructureSchema = [
  3,
  n0,
  _CER,
  0,
  [_E, _RT],
  [() => Export, () => ResourceTagList],
];
export var CreateExportResponse: StaticStructureSchema = [3, n0, _CERr, 0, [_EA], [0]];
export var DataQuery: StaticStructureSchema = [3, n0, _DQ, 0, [_QS, _TC], [0, [2, n0, _TC, 0, 0, 128 | 0]]];
export var DeleteExportRequest: StaticStructureSchema = [3, n0, _DER, 0, [_EA], [0]];
export var DeleteExportResponse: StaticStructureSchema = [3, n0, _DERe, 0, [_EA], [0]];
export var DestinationConfigurations: StaticStructureSchema = [3, n0, _DC, 0, [_SD], [() => S3Destination]];
export var ExecutionReference: StaticStructureSchema = [3, n0, _ER, 0, [_EI, _ES], [0, () => ExecutionStatus]];
export var ExecutionStatus: StaticStructureSchema = [3, n0, _ES, 0, [_SC, _SR, _CA, _CAo, _LUA], [0, 0, 5, 5, 5]];
export var Export: StaticStructureSchema = [
  3,
  n0,
  _E,
  0,
  [_EA, _N, _D, _DQ, _DC, _RC],
  [0, 0, 0, () => DataQuery, () => DestinationConfigurations, () => RefreshCadence],
];
export var ExportReference: StaticStructureSchema = [3, n0, _ERx, 0, [_EA, _EN, _ESx], [0, 0, () => ExportStatus]];
export var ExportStatus: StaticStructureSchema = [3, n0, _ESx, 0, [_SC, _SR, _CA, _LUA, _LRA], [0, 0, 5, 5, 5]];
export var GetExecutionRequest: StaticStructureSchema = [3, n0, _GER, 0, [_EA, _EI], [0, 0]];
export var GetExecutionResponse: StaticStructureSchema = [
  3,
  n0,
  _GERe,
  0,
  [_EI, _E, _ES],
  [0, () => Export, () => ExecutionStatus],
];
export var GetExportRequest: StaticStructureSchema = [3, n0, _GERet, 0, [_EA], [0]];
export var GetExportResponse: StaticStructureSchema = [
  3,
  n0,
  _GERetx,
  0,
  [_E, _ESx],
  [() => Export, () => ExportStatus],
];
export var GetTableRequest: StaticStructureSchema = [3, n0, _GTR, 0, [_TN, _TP], [0, 128 | 0]];
export var GetTableResponse: StaticStructureSchema = [
  3,
  n0,
  _GTRe,
  0,
  [_TN, _D, _TP, _S],
  [0, 0, 128 | 0, () => ColumnList],
];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var ListExecutionsRequest: StaticStructureSchema = [3, n0, _LER, 0, [_EA, _MR, _NT], [0, 1, 0]];
export var ListExecutionsResponse: StaticStructureSchema = [
  3,
  n0,
  _LERi,
  0,
  [_Ex, _NT],
  [() => ExecutionReferenceList, 0],
];
export var ListExportsRequest: StaticStructureSchema = [3, n0, _LERis, 0, [_MR, _NT], [1, 0]];
export var ListExportsResponse: StaticStructureSchema = [
  3,
  n0,
  _LERist,
  0,
  [_Exp, _NT],
  [() => ExportReferenceList, 0],
];
export var ListTablesRequest: StaticStructureSchema = [3, n0, _LTR, 0, [_NT, _MR], [0, 1]];
export var ListTablesResponse: StaticStructureSchema = [3, n0, _LTRi, 0, [_Ta, _NT], [() => TableList, 0]];
export var ListTagsForResourceRequest: StaticStructureSchema = [3, n0, _LTFRR, 0, [_RA, _MR, _NT], [0, 1, 0]];
export var ListTagsForResourceResponse: StaticStructureSchema = [
  3,
  n0,
  _LTFRRi,
  0,
  [_RT, _NT],
  [() => ResourceTagList, 0],
];
export var RefreshCadence: StaticStructureSchema = [3, n0, _RC, 0, [_F], [0]];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M, _RI, _RTe],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var ResourceTag: StaticStructureSchema = [3, n0, _RTes, 0, [_K, _V], [0, 0]];
export var S3Destination: StaticStructureSchema = [
  3,
  n0,
  _SD,
  0,
  [_SB, _SP, _SRe, _SOC],
  [0, 0, 0, () => S3OutputConfigurations],
];
export var S3OutputConfigurations: StaticStructureSchema = [3, n0, _SOC, 0, [_OT, _Fo, _Co, _O], [0, 0, 0, 0]];
export var ServiceQuotaExceededException: StaticErrorSchema = [
  -3,
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_M, _RI, _RTe, _QC, _SCe],
  [0, 0, 0, 0, 0],
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException, __ServiceQuotaExceededException);

export var Table: StaticStructureSchema = [3, n0, _Tab, 0, [_TN, _D, _TP], [0, 0, () => TablePropertyDescriptionList]];
export var TablePropertyDescription: StaticStructureSchema = [3, n0, _TPD, 0, [_N, _VV, _DV, _D], [0, 64 | 0, 0, 0]];
export var TagResourceRequest: StaticStructureSchema = [3, n0, _TRR, 0, [_RA, _RT], [0, () => ResourceTagList]];
export var TagResourceResponse: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M, _QC, _SCe],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);

export var UntagResourceRequest: StaticStructureSchema = [3, n0, _URR, 0, [_RA, _RTK], [0, 64 | 0]];
export var UntagResourceResponse: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var UpdateExportRequest: StaticStructureSchema = [3, n0, _UER, 0, [_EA, _E], [0, () => Export]];
export var UpdateExportResponse: StaticStructureSchema = [3, n0, _UERp, 0, [_EA], [0]];
export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _R, _Fi],
  [0, 0, () => ValidationExceptionFieldList],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var ValidationExceptionField: StaticStructureSchema = [3, n0, _VEF, 0, [_N, _M], [0, 0]];
export var __Unit = "unit" as const;

export var BCMDataExportsServiceException: StaticErrorSchema = [-3, _sm, "BCMDataExportsServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(BCMDataExportsServiceException, __BCMDataExportsServiceException);

export var ColumnList: StaticListSchema = [1, n0, _CL, 0, () => Column];
export var ExecutionReferenceList: StaticListSchema = [1, n0, _ERL, 0, () => ExecutionReference];
export var ExportReferenceList: StaticListSchema = [1, n0, _ERLx, 0, () => ExportReference];
export var GenericStringList = 64 | 0;

export var ResourceTagKeyList = 64 | 0;

export var ResourceTagList: StaticListSchema = [1, n0, _RTL, 0, () => ResourceTag];
export var TableList: StaticListSchema = [1, n0, _TL, 0, () => Table];
export var TablePropertyDescriptionList: StaticListSchema = [1, n0, _TPDL, 0, () => TablePropertyDescription];
export var ValidationExceptionFieldList: StaticListSchema = [1, n0, _VEFL, 0, () => ValidationExceptionField];
export var TableConfigurations: StaticMapSchema = [2, n0, _TC, 0, 0, 128 | 0];
export var TableProperties = 128 | 0;

export var CreateExport: StaticOperationSchema = [9, n0, _CE, 0, () => CreateExportRequest, () => CreateExportResponse];
export var DeleteExport: StaticOperationSchema = [9, n0, _DE, 2, () => DeleteExportRequest, () => DeleteExportResponse];
export var GetExecution: StaticOperationSchema = [9, n0, _GE, 0, () => GetExecutionRequest, () => GetExecutionResponse];
export var GetExport: StaticOperationSchema = [9, n0, _GEe, 0, () => GetExportRequest, () => GetExportResponse];
export var GetTable: StaticOperationSchema = [9, n0, _GT, 0, () => GetTableRequest, () => GetTableResponse];
export var ListExecutions: StaticOperationSchema = [
  9,
  n0,
  _LE,
  0,
  () => ListExecutionsRequest,
  () => ListExecutionsResponse,
];
export var ListExports: StaticOperationSchema = [9, n0, _LEi, 0, () => ListExportsRequest, () => ListExportsResponse];
export var ListTables: StaticOperationSchema = [9, n0, _LT, 0, () => ListTablesRequest, () => ListTablesResponse];
export var ListTagsForResource: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse,
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
export var UpdateExport: StaticOperationSchema = [9, n0, _UE, 0, () => UpdateExportRequest, () => UpdateExportResponse];
