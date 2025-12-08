const _C = "Column";
const _CA = "CreatedAt";
const _CAo = "CompletedAt";
const _CE = "CreateExport";
const _CER = "CreateExportRequest";
const _CERr = "CreateExportResponse";
const _CL = "ColumnList";
const _Co = "Compression";
const _D = "Description";
const _DC = "DestinationConfigurations";
const _DE = "DeleteExport";
const _DER = "DeleteExportRequest";
const _DERe = "DeleteExportResponse";
const _DQ = "DataQuery";
const _DV = "DefaultValue";
const _E = "Export";
const _EA = "ExportArn";
const _EI = "ExecutionId";
const _EN = "ExportName";
const _ER = "ExecutionReference";
const _ERL = "ExecutionReferenceList";
const _ERLx = "ExportReferenceList";
const _ERx = "ExportReference";
const _ES = "ExecutionStatus";
const _ESx = "ExportStatus";
const _Ex = "Executions";
const _Exp = "Exports";
const _F = "Frequency";
const _Fi = "Fields";
const _Fo = "Format";
const _GE = "GetExecution";
const _GER = "GetExecutionRequest";
const _GERe = "GetExecutionResponse";
const _GERet = "GetExportRequest";
const _GERetx = "GetExportResponse";
const _GEe = "GetExport";
const _GT = "GetTable";
const _GTR = "GetTableRequest";
const _GTRe = "GetTableResponse";
const _ISE = "InternalServerException";
const _K = "Key";
const _LE = "ListExecutions";
const _LER = "ListExecutionsRequest";
const _LERi = "ListExecutionsResponse";
const _LERis = "ListExportsRequest";
const _LERist = "ListExportsResponse";
const _LEi = "ListExports";
const _LRA = "LastRefreshedAt";
const _LT = "ListTables";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _LTR = "ListTablesRequest";
const _LTRi = "ListTablesResponse";
const _LUA = "LastUpdatedAt";
const _M = "Message";
const _MR = "MaxResults";
const _N = "Name";
const _NT = "NextToken";
const _O = "Overwrite";
const _OT = "OutputType";
const _QC = "QuotaCode";
const _QS = "QueryStatement";
const _R = "Reason";
const _RA = "ResourceArn";
const _RC = "RefreshCadence";
const _RI = "ResourceId";
const _RNFE = "ResourceNotFoundException";
const _RT = "ResourceTags";
const _RTK = "ResourceTagKeys";
const _RTL = "ResourceTagList";
const _RTe = "ResourceType";
const _RTes = "ResourceTag";
const _S = "Schema";
const _SB = "S3Bucket";
const _SC = "StatusCode";
const _SCe = "ServiceCode";
const _SD = "S3Destination";
const _SOC = "S3OutputConfigurations";
const _SP = "S3Prefix";
const _SQEE = "ServiceQuotaExceededException";
const _SR = "StatusReason";
const _SRe = "S3Region";
const _T = "Type";
const _TC = "TableConfigurations";
const _TE = "ThrottlingException";
const _TL = "TableList";
const _TN = "TableName";
const _TP = "TableProperties";
const _TPD = "TablePropertyDescription";
const _TPDL = "TablePropertyDescriptionList";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _Ta = "Tables";
const _Tab = "Table";
const _UE = "UpdateExport";
const _UER = "UpdateExportRequest";
const _UERp = "UpdateExportResponse";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _V = "Value";
const _VE = "ValidationException";
const _VEF = "ValidationExceptionField";
const _VEFL = "ValidationExceptionFieldList";
const _VV = "ValidValues";
const _c = "client";
const _e = "error";
const _hE = "httpError";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.bcmdataexports";
const n0 = "com.amazonaws.bcmdataexports";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
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
} from "../models/errors";

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
export var InternalServerException: StaticErrorSchema = [-3, n0, _ISE, { [_e]: _s, [_hE]: 500 }, [_M], [0]];
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
  { [_e]: _c, [_hE]: 404 },
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
  { [_e]: _c, [_hE]: 402 },
  [_M, _RI, _RTe, _QC, _SCe],
  [0, 0, 0, 0, 0],
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException, __ServiceQuotaExceededException);
export var Table: StaticStructureSchema = [3, n0, _Tab, 0, [_TN, _D, _TP], [0, 0, () => TablePropertyDescriptionList]];
export var TablePropertyDescription: StaticStructureSchema = [3, n0, _TPD, 0, [_N, _VV, _DV, _D], [0, 64 | 0, 0, 0]];
export var TagResourceRequest: StaticStructureSchema = [3, n0, _TRR, 0, [_RA, _RT], [0, () => ResourceTagList]];
export var TagResourceResponse: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var ThrottlingException: StaticErrorSchema = [-3, n0, _TE, { [_e]: _c, [_hE]: 429 }, [_M, _QC, _SCe], [0, 0, 0]];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);
export var UntagResourceRequest: StaticStructureSchema = [3, n0, _URR, 0, [_RA, _RTK], [0, 64 | 0]];
export var UntagResourceResponse: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var UpdateExportRequest: StaticStructureSchema = [3, n0, _UER, 0, [_EA, _E], [0, () => Export]];
export var UpdateExportResponse: StaticStructureSchema = [3, n0, _UERp, 0, [_EA], [0]];
export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  { [_e]: _c, [_hE]: 400 },
  [_M, _R, _Fi],
  [0, 0, () => ValidationExceptionFieldList],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);
export var ValidationExceptionField: StaticStructureSchema = [3, n0, _VEF, 0, [_N, _M], [0, 0]];
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
