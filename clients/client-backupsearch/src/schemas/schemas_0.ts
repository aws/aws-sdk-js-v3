const _ADE = "AccessDeniedException";
const _BCT = "BackupCreationTime";
const _BCTF = "BackupCreationTimeFilter";
const _BRA = "BackupResourceArn";
const _BRAa = "BackupResourceArns";
const _BRCT = "BackupResourceCreationTime";
const _BRT = "BackupResourceTypes";
const _BRTa = "BackupResourceTags";
const _BS = "ByStatus";
const _BVN = "BackupVaultName";
const _CA = "CreatedAfter";
const _CB = "CreatedBefore";
const _CE = "ConflictException";
const _CSP = "CurrentSearchProgress";
const _CT = "CreationTimes";
const _CTl = "ClientToken";
const _CTo = "CompletionTime";
const _CTr = "CreationTime";
const _DB = "DestinationBucket";
const _DP = "DestinationPrefix";
const _EBSIF = "EBSItemFilter";
const _EBSIFt = "EBSItemFilters";
const _EBSRI = "EBSResultItem";
const _EJ = "ExportJobs";
const _EJA = "ExportJobArn";
const _EJI = "ExportJobIdentifier";
const _EJS = "ExportJobSummary";
const _EJSx = "ExportJobSummaries";
const _EKA = "EncryptionKeyArn";
const _ES = "ExportSpecification";
const _ET = "ETags";
const _ETa = "ETag";
const _FP = "FilePath";
const _FPi = "FilePaths";
const _FS = "FileSize";
const _FSI = "FileSystemIdentifier";
const _GSJ = "GetSearchJob";
const _GSJI = "GetSearchJobInput";
const _GSJO = "GetSearchJobOutput";
const _GSREJ = "GetSearchResultExportJob";
const _GSREJI = "GetSearchResultExportJobInput";
const _GSREJO = "GetSearchResultExportJobOutput";
const _ICT = "IndexCreationTime";
const _IF = "ItemFilters";
const _IMC = "ItemsMatchedCount";
const _ISC = "ItemsScannedCount";
const _ISE = "InternalServerException";
const _LC = "LongCondition";
const _LCL = "LongConditionList";
const _LMT = "LastModificationTimes";
const _LMTa = "LastModifiedTime";
const _LSJ = "ListSearchJobs";
const _LSJB = "ListSearchJobBackups";
const _LSJBI = "ListSearchJobBackupsInput";
const _LSJBO = "ListSearchJobBackupsOutput";
const _LSJI = "ListSearchJobsInput";
const _LSJO = "ListSearchJobsOutput";
const _LSJR = "ListSearchJobResults";
const _LSJRI = "ListSearchJobResultsInput";
const _LSJRO = "ListSearchJobResultsOutput";
const _LSREJ = "ListSearchResultExportJobs";
const _LSREJI = "ListSearchResultExportJobsInput";
const _LSREJO = "ListSearchResultExportJobsOutput";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _MR = "MaxResults";
const _N = "Name";
const _NT = "NextToken";
const _O = "Operator";
const _OK = "ObjectKey";
const _OKb = "ObjectKeys";
const _OS = "ObjectSize";
const _R = "Results";
const _RA = "Retry-After";
const _RAe = "ResourceArn";
const _RAo = "RoleArn";
const _RI = "ResultItem";
const _RNFE = "ResourceNotFoundException";
const _RPSC = "RecoveryPointsScannedCount";
const _RT = "ResourceType";
const _S = "Sizes";
const _SC = "StringCondition";
const _SCL = "StringConditionList";
const _SES = "S3ExportSpecification";
const _SIF = "S3ItemFilters";
const _SIFt = "S3ItemFilter";
const _SJ = "SearchJobs";
const _SJA = "SearchJobArn";
const _SJBR = "SearchJobBackupsResult";
const _SJBRe = "SearchJobBackupsResults";
const _SJI = "SearchJobIdentifier";
const _SJS = "SearchJobSummary";
const _SM = "StatusMessage";
const _SQEE = "ServiceQuotaExceededException";
const _SRA = "SourceResourceArn";
const _SRAo = "SourceResourceArns";
const _SRI = "S3ResultItem";
const _SS = "SearchScope";
const _SSJ = "StartSearchJob";
const _SSJI = "StartSearchJobInput";
const _SSJIt = "StopSearchJobInput";
const _SSJO = "StartSearchJobOutput";
const _SSJOt = "StopSearchJobOutput";
const _SSJt = "StopSearchJob";
const _SSREJ = "StartSearchResultExportJob";
const _SSREJI = "StartSearchResultExportJobInput";
const _SSREJO = "StartSearchResultExportJobOutput";
const _SSS = "SearchScopeSummary";
const _St = "Status";
const _T = "Tags";
const _TC = "TimeCondition";
const _TCL = "TimeConditionList";
const _TE = "ThrottlingException";
const _TITSC = "TotalItemsToScanCount";
const _TK = "TagKeys";
const _TM = "TagMap";
const _TR = "TagResource";
const _TRPTSC = "TotalRecoveryPointsToScanCount";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _V = "Value";
const _VE = "ValidationException";
const _VI = "VersionIds";
const _VIe = "VersionId";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _hQ = "httpQuery";
const _m = "message";
const _mR = "maxResults";
const _nT = "nextToken";
const _qC = "quotaCode";
const _rAS = "retryAfterSeconds";
const _rI = "resourceId";
const _rT = "resourceType";
const _s = "server";
const _sC = "serviceCode";
const _sES = "s3ExportSpecification";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.backupsearch";
const _sp = "sparse";
const _tK = "tagKeys";
const n0 = "com.amazonaws.backupsearch";

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

import { BackupSearchServiceException } from "../models/BackupSearchServiceException";
import {
  AccessDeniedException,
  ConflictException,
  InternalServerException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "../models/errors";

/* eslint no-var: 0 */
var FilePath: StaticSimpleSchema = [0, n0, _FP, 8, 0];
var ObjectKey: StaticSimpleSchema = [0, n0, _OK, 8, 0];
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE, { [_e]: _c, [_hE]: 403 }, [_m], [0]];
TypeRegistry.for(n0).registerError(AccessDeniedException$, AccessDeniedException);
export var BackupCreationTimeFilter$: StaticStructureSchema = [3, n0, _BCTF, 0, [_CA, _CB], [4, 4]];
export var ConflictException$: StaticErrorSchema = [-3, n0, _CE, { [_e]: _c, [_hE]: 409 }, [_m, _rI, _rT], [0, 0, 0]];
TypeRegistry.for(n0).registerError(ConflictException$, ConflictException);
export var CurrentSearchProgress$: StaticStructureSchema = [3, n0, _CSP, 0, [_RPSC, _ISC, _IMC], [1, 1, 1]];
export var EBSItemFilter$: StaticStructureSchema = [
  3,
  n0,
  _EBSIF,
  0,
  [_FPi, _S, _CT, _LMT],
  [() => StringConditionList, () => LongConditionList, () => TimeConditionList, () => TimeConditionList],
];
export var EBSResultItem$: StaticStructureSchema = [
  3,
  n0,
  _EBSRI,
  0,
  [_BRA, _SRA, _BVN, _FSI, _FP, _FS, _CTr, _LMTa],
  [0, 0, 0, 0, [() => FilePath, 0], 1, 4, 4],
];
export var ExportJobSummary$: StaticStructureSchema = [
  3,
  n0,
  _EJS,
  0,
  [_EJI, _EJA, _St, _CTr, _CTo, _SM, _SJA],
  [0, 0, 0, 4, 4, 0, 0],
];
export var GetSearchJobInput$: StaticStructureSchema = [3, n0, _GSJI, 0, [_SJI], [[0, 1]]];
export var GetSearchJobOutput$: StaticStructureSchema = [
  3,
  n0,
  _GSJO,
  0,
  [_N, _SSS, _CSP, _SM, _EKA, _CTo, _St, _SS, _IF, _CTr, _SJI, _SJA],
  [
    0,
    () => SearchScopeSummary$,
    () => CurrentSearchProgress$,
    0,
    0,
    4,
    0,
    [() => SearchScope$, 0],
    () => ItemFilters$,
    4,
    0,
    0,
  ],
];
export var GetSearchResultExportJobInput$: StaticStructureSchema = [3, n0, _GSREJI, 0, [_EJI], [[0, 1]]];
export var GetSearchResultExportJobOutput$: StaticStructureSchema = [
  3,
  n0,
  _GSREJO,
  0,
  [_EJI, _EJA, _St, _CTr, _CTo, _SM, _ES, _SJA],
  [0, 0, 0, 4, 4, 0, () => ExportSpecification$, 0],
];
export var InternalServerException$: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  { [_e]: _s, [_hE]: 500 },
  [_m, _rAS],
  [0, [1, { [_hH]: _RA }]],
];
TypeRegistry.for(n0).registerError(InternalServerException$, InternalServerException);
export var ItemFilters$: StaticStructureSchema = [
  3,
  n0,
  _IF,
  0,
  [_SIF, _EBSIFt],
  [() => S3ItemFilters, () => EBSItemFilters],
];
export var ListSearchJobBackupsInput$: StaticStructureSchema = [
  3,
  n0,
  _LSJBI,
  0,
  [_SJI, _NT, _MR],
  [
    [0, 1],
    [0, { [_hQ]: _nT }],
    [1, { [_hQ]: _mR }],
  ],
];
export var ListSearchJobBackupsOutput$: StaticStructureSchema = [
  3,
  n0,
  _LSJBO,
  0,
  [_R, _NT],
  [() => SearchJobBackupsResults, 0],
];
export var ListSearchJobResultsInput$: StaticStructureSchema = [
  3,
  n0,
  _LSJRI,
  0,
  [_SJI, _NT, _MR],
  [
    [0, 1],
    [0, { [_hQ]: _nT }],
    [1, { [_hQ]: _mR }],
  ],
];
export var ListSearchJobResultsOutput$: StaticStructureSchema = [3, n0, _LSJRO, 0, [_R, _NT], [[() => Results, 0], 0]];
export var ListSearchJobsInput$: StaticStructureSchema = [
  3,
  n0,
  _LSJI,
  0,
  [_BS, _NT, _MR],
  [
    [0, { [_hQ]: _St }],
    [0, { [_hQ]: _NT }],
    [1, { [_hQ]: _MR }],
  ],
];
export var ListSearchJobsOutput$: StaticStructureSchema = [3, n0, _LSJO, 0, [_SJ, _NT], [() => SearchJobs, 0]];
export var ListSearchResultExportJobsInput$: StaticStructureSchema = [
  3,
  n0,
  _LSREJI,
  0,
  [_St, _SJI, _NT, _MR],
  [
    [0, { [_hQ]: _St }],
    [0, { [_hQ]: _SJI }],
    [0, { [_hQ]: _NT }],
    [1, { [_hQ]: _MR }],
  ],
];
export var ListSearchResultExportJobsOutput$: StaticStructureSchema = [
  3,
  n0,
  _LSREJO,
  0,
  [_EJ, _NT],
  [() => ExportJobSummaries, 0],
];
export var ListTagsForResourceRequest$: StaticStructureSchema = [3, n0, _LTFRR, 0, [_RAe], [[0, 1]]];
export var ListTagsForResourceResponse$: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_T], [[() => TagMap, 0]]];
export var LongCondition$: StaticStructureSchema = [3, n0, _LC, 0, [_V, _O], [1, 0]];
export var ResourceNotFoundException$: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_m, _rI, _rT],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var S3ExportSpecification$: StaticStructureSchema = [3, n0, _SES, 0, [_DB, _DP], [0, 0]];
export var S3ItemFilter$: StaticStructureSchema = [
  3,
  n0,
  _SIFt,
  0,
  [_OKb, _S, _CT, _VI, _ET],
  [
    () => StringConditionList,
    () => LongConditionList,
    () => TimeConditionList,
    () => StringConditionList,
    () => StringConditionList,
  ],
];
export var S3ResultItem$: StaticStructureSchema = [
  3,
  n0,
  _SRI,
  0,
  [_BRA, _SRA, _BVN, _OK, _OS, _CTr, _ETa, _VIe],
  [0, 0, 0, [() => ObjectKey, 0], 1, 4, 0, 0],
];
export var SearchJobBackupsResult$: StaticStructureSchema = [
  3,
  n0,
  _SJBR,
  0,
  [_St, _SM, _RT, _BRA, _SRA, _ICT, _BCT],
  [0, 0, 0, 0, 0, 4, 4],
];
export var SearchJobSummary$: StaticStructureSchema = [
  3,
  n0,
  _SJS,
  0,
  [_SJI, _SJA, _N, _St, _CTr, _CTo, _SSS, _SM],
  [0, 0, 0, 0, 4, 4, () => SearchScopeSummary$, 0],
];
export var SearchScope$: StaticStructureSchema = [
  3,
  n0,
  _SS,
  0,
  [_BRT, _BRCT, _SRAo, _BRAa, _BRTa],
  [64 | 0, () => BackupCreationTimeFilter$, 64 | 0, 64 | 0, [() => TagMap, 0]],
];
export var SearchScopeSummary$: StaticStructureSchema = [3, n0, _SSS, 0, [_TRPTSC, _TITSC], [1, 1]];
export var ServiceQuotaExceededException$: StaticErrorSchema = [
  -3,
  n0,
  _SQEE,
  { [_e]: _c, [_hE]: 402 },
  [_m, _rI, _rT, _sC, _qC],
  [0, 0, 0, 0, 0],
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException$, ServiceQuotaExceededException);
export var StartSearchJobInput$: StaticStructureSchema = [
  3,
  n0,
  _SSJI,
  0,
  [_T, _N, _EKA, _CTl, _SS, _IF],
  [[() => TagMap, 0], 0, 0, 0, [() => SearchScope$, 0], () => ItemFilters$],
];
export var StartSearchJobOutput$: StaticStructureSchema = [3, n0, _SSJO, 0, [_SJA, _CTr, _SJI], [0, 4, 0]];
export var StartSearchResultExportJobInput$: StaticStructureSchema = [
  3,
  n0,
  _SSREJI,
  0,
  [_SJI, _ES, _CTl, _T, _RAo],
  [0, () => ExportSpecification$, 0, [() => TagMap, 0], 0],
];
export var StartSearchResultExportJobOutput$: StaticStructureSchema = [3, n0, _SSREJO, 0, [_EJA, _EJI], [0, 0]];
export var StopSearchJobInput$: StaticStructureSchema = [3, n0, _SSJIt, 0, [_SJI], [[0, 1]]];
export var StopSearchJobOutput$: StaticStructureSchema = [3, n0, _SSJOt, 0, [], []];
export var StringCondition$: StaticStructureSchema = [3, n0, _SC, 0, [_V, _O], [0, 0]];
export var TagResourceRequest$: StaticStructureSchema = [
  3,
  n0,
  _TRR,
  0,
  [_RAe, _T],
  [
    [0, 1],
    [() => TagMap, 0],
  ],
];
export var TagResourceResponse$: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var ThrottlingException$: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  { [_e]: _c, [_hE]: 429 },
  [_m, _sC, _qC, _rAS],
  [0, 0, 0, [1, { [_hH]: _RA }]],
];
TypeRegistry.for(n0).registerError(ThrottlingException$, ThrottlingException);
export var TimeCondition$: StaticStructureSchema = [3, n0, _TC, 0, [_V, _O], [4, 0]];
export var UntagResourceRequest$: StaticStructureSchema = [
  3,
  n0,
  _URR,
  0,
  [_RAe, _TK],
  [
    [0, 1],
    [64 | 0, { [_hQ]: _tK }],
  ],
];
export var UntagResourceResponse$: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE, { [_e]: _c, [_hE]: 400 }, [_m], [0]];
TypeRegistry.for(n0).registerError(ValidationException$, ValidationException);
export var BackupSearchServiceException$: StaticErrorSchema = [-3, _sm, "BackupSearchServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(BackupSearchServiceException$, BackupSearchServiceException);
var EBSItemFilters: StaticListSchema = [1, n0, _EBSIFt, 0, () => EBSItemFilter$];
var ExportJobSummaries: StaticListSchema = [1, n0, _EJSx, 0, () => ExportJobSummary$];
var LongConditionList: StaticListSchema = [1, n0, _LCL, 0, () => LongCondition$];
var RecoveryPointArnList = 64 | 0;
var ResourceArnList = 64 | 0;
var ResourceTypeList = 64 | 0;
var Results: StaticListSchema = [1, n0, _R, 0, [() => ResultItem$, 0]];
var S3ItemFilters: StaticListSchema = [1, n0, _SIF, 0, () => S3ItemFilter$];
var SearchJobBackupsResults: StaticListSchema = [1, n0, _SJBRe, 0, () => SearchJobBackupsResult$];
var SearchJobs: StaticListSchema = [1, n0, _SJ, 0, () => SearchJobSummary$];
var StringConditionList: StaticListSchema = [1, n0, _SCL, 0, () => StringCondition$];
var TagKeys = 64 | 0;
var TimeConditionList: StaticListSchema = [1, n0, _TCL, 0, () => TimeCondition$];
var TagMap: StaticMapSchema = [2, n0, _TM, { [_sp]: 1 }, 0, 0];
export var ExportSpecification$: StaticStructureSchema = [3, n0, _ES, 0, [_sES], [() => S3ExportSpecification$]];
export var ResultItem$: StaticStructureSchema = [
  3,
  n0,
  _RI,
  0,
  [_SRI, _EBSRI],
  [
    [() => S3ResultItem$, 0],
    [() => EBSResultItem$, 0],
  ],
];
export var GetSearchJob$: StaticOperationSchema = [
  9,
  n0,
  _GSJ,
  { [_h]: ["GET", "/search-jobs/{SearchJobIdentifier}", 200] },
  () => GetSearchJobInput$,
  () => GetSearchJobOutput$,
];
export var GetSearchResultExportJob$: StaticOperationSchema = [
  9,
  n0,
  _GSREJ,
  { [_h]: ["GET", "/export-search-jobs/{ExportJobIdentifier}", 200] },
  () => GetSearchResultExportJobInput$,
  () => GetSearchResultExportJobOutput$,
];
export var ListSearchJobBackups$: StaticOperationSchema = [
  9,
  n0,
  _LSJB,
  { [_h]: ["GET", "/search-jobs/{SearchJobIdentifier}/backups", 200] },
  () => ListSearchJobBackupsInput$,
  () => ListSearchJobBackupsOutput$,
];
export var ListSearchJobResults$: StaticOperationSchema = [
  9,
  n0,
  _LSJR,
  { [_h]: ["GET", "/search-jobs/{SearchJobIdentifier}/search-results", 200] },
  () => ListSearchJobResultsInput$,
  () => ListSearchJobResultsOutput$,
];
export var ListSearchJobs$: StaticOperationSchema = [
  9,
  n0,
  _LSJ,
  { [_h]: ["GET", "/search-jobs", 200] },
  () => ListSearchJobsInput$,
  () => ListSearchJobsOutput$,
];
export var ListSearchResultExportJobs$: StaticOperationSchema = [
  9,
  n0,
  _LSREJ,
  { [_h]: ["GET", "/export-search-jobs", 200] },
  () => ListSearchResultExportJobsInput$,
  () => ListSearchResultExportJobsOutput$,
];
export var ListTagsForResource$: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  { [_h]: ["GET", "/tags/{ResourceArn}", 200] },
  () => ListTagsForResourceRequest$,
  () => ListTagsForResourceResponse$,
];
export var StartSearchJob$: StaticOperationSchema = [
  9,
  n0,
  _SSJ,
  { [_h]: ["PUT", "/search-jobs", 200] },
  () => StartSearchJobInput$,
  () => StartSearchJobOutput$,
];
export var StartSearchResultExportJob$: StaticOperationSchema = [
  9,
  n0,
  _SSREJ,
  { [_h]: ["PUT", "/export-search-jobs", 200] },
  () => StartSearchResultExportJobInput$,
  () => StartSearchResultExportJobOutput$,
];
export var StopSearchJob$: StaticOperationSchema = [
  9,
  n0,
  _SSJt,
  { [_h]: ["PUT", "/search-jobs/{SearchJobIdentifier}/actions/cancel", 200] },
  () => StopSearchJobInput$,
  () => StopSearchJobOutput$,
];
export var TagResource$: StaticOperationSchema = [
  9,
  n0,
  _TR,
  { [_h]: ["POST", "/tags/{ResourceArn}", 200] },
  () => TagResourceRequest$,
  () => TagResourceResponse$,
];
export var UntagResource$: StaticOperationSchema = [
  9,
  n0,
  _UR,
  { [_h]: ["DELETE", "/tags/{ResourceArn}", 200] },
  () => UntagResourceRequest$,
  () => UntagResourceResponse$,
];
