// smithy-typescript generated code
import { error, list, map, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
} from "../models/index";
import {
  _BCT,
  _BCTF,
  _BRA,
  _BRAa,
  _BRCT,
  _BRT,
  _BRTa,
  _BVN,
  _c,
  _CA,
  _CB,
  _CE,
  _CSP,
  _CT,
  _CTl,
  _CTo,
  _CTr,
  _DB,
  _DP,
  _e,
  _EBSIF,
  _EBSIFt,
  _EBSRI,
  _EJ,
  _EJA,
  _EJI,
  _EJS,
  _EJSx,
  _EKA,
  _ES,
  _ET,
  _ETa,
  _FP,
  _FPi,
  _FS,
  _FSI,
  _GSJ,
  _GSJI,
  _GSJO,
  _GSREJ,
  _GSREJI,
  _GSREJO,
  _h,
  _hE,
  _hQ,
  _ICT,
  _IF,
  _IMC,
  _ISC,
  _LC,
  _LCL,
  _LMT,
  _LMTa,
  _LSJB,
  _LSJBI,
  _LSJBO,
  _LSJR,
  _LSJRI,
  _LSJRO,
  _LSREJ,
  _LSREJI,
  _LSREJO,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _m,
  _MR,
  _mR,
  _N,
  _NT,
  _nT,
  _O,
  _OK,
  _OKb,
  _OS,
  _qC,
  _R,
  _RAe,
  _RAo,
  _RI,
  _rI,
  _RNFE,
  _RPSC,
  _RT,
  _rT,
  _S,
  _SC,
  _sC,
  _SCL,
  _SES,
  _sES,
  _SIF,
  _SIFt,
  _SJA,
  _SJBR,
  _SJBRe,
  _SJI,
  _SM,
  _sp,
  _SQEE,
  _SRA,
  _SRAo,
  _SRI,
  _SS,
  _SSJ,
  _SSJI,
  _SSJIt,
  _SSJO,
  _SSJOt,
  _SSJt,
  _SSREJ,
  _SSREJI,
  _SSREJO,
  _SSS,
  _St,
  _T,
  _TC,
  _TCL,
  _TK,
  _tK,
  _TM,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  _V,
  _VI,
  _VIe,
  n0,
} from "./schemas_0";
import { SearchScopeSummary } from "./schemas_2_Search";

/* eslint no-var: 0 */

export var FilePath = sim(n0, _FP, 0, 8);
export var ObjectKey = sim(n0, _OK, 0, 8);
export var BackupCreationTimeFilter = struct(n0, _BCTF, 0, [_CA, _CB], [4, 4]);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m, _rI, _rT],
  [0, 0, 0],

  __ConflictException
);
export var CurrentSearchProgress = struct(n0, _CSP, 0, [_RPSC, _ISC, _IMC], [1, 1, 1]);
export var EBSItemFilter = struct(
  n0,
  _EBSIF,
  0,
  [_FPi, _S, _CT, _LMT],
  [() => StringConditionList, () => LongConditionList, () => TimeConditionList, () => TimeConditionList]
);
export var EBSResultItem = struct(
  n0,
  _EBSRI,
  0,
  [_BRA, _SRA, _BVN, _FSI, _FP, _FS, _CTr, _LMTa],
  [0, 0, 0, 0, [() => FilePath, 0], 1, 4, 4]
);
export var ExportJobSummary = struct(n0, _EJS, 0, [_EJI, _EJA, _St, _CTr, _CTo, _SM, _SJA], [0, 0, 0, 4, 4, 0, 0]);
export var GetSearchJobInput = struct(n0, _GSJI, 0, [_SJI], [[0, 1]]);
export var GetSearchJobOutput = struct(
  n0,
  _GSJO,
  0,
  [_N, _SSS, _CSP, _SM, _EKA, _CTo, _St, _SS, _IF, _CTr, _SJI, _SJA],
  [
    0,
    () => SearchScopeSummary,
    () => CurrentSearchProgress,
    0,
    0,
    4,
    0,
    [() => SearchScope, 0],
    () => ItemFilters,
    4,
    0,
    0,
  ]
);
export var GetSearchResultExportJobInput = struct(n0, _GSREJI, 0, [_EJI], [[0, 1]]);
export var GetSearchResultExportJobOutput = struct(
  n0,
  _GSREJO,
  0,
  [_EJI, _EJA, _St, _CTr, _CTo, _SM, _ES, _SJA],
  [0, 0, 0, 4, 4, 0, () => ExportSpecification, 0]
);
export var ItemFilters = struct(n0, _IF, 0, [_SIF, _EBSIFt], [() => S3ItemFilters, () => EBSItemFilters]);
export var ListSearchJobBackupsInput = struct(
  n0,
  _LSJBI,
  0,
  [_SJI, _NT, _MR],
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
  ]
);
export var ListSearchJobBackupsOutput = struct(n0, _LSJBO, 0, [_R, _NT], [() => SearchJobBackupsResults, 0]);
export var ListSearchJobResultsInput = struct(
  n0,
  _LSJRI,
  0,
  [_SJI, _NT, _MR],
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
  ]
);
export var ListSearchJobResultsOutput = struct(n0, _LSJRO, 0, [_R, _NT], [[() => Results, 0], 0]);
export var ListSearchResultExportJobsInput = struct(
  n0,
  _LSREJI,
  0,
  [_St, _SJI, _NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _St,
      },
    ],
    [
      0,
      {
        [_hQ]: _SJI,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
  ]
);
export var ListSearchResultExportJobsOutput = struct(n0, _LSREJO, 0, [_EJ, _NT], [() => ExportJobSummaries, 0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RAe], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_T], [[() => TagMap, 0]]);
export var LongCondition = struct(n0, _LC, 0, [_V, _O], [1, 0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m, _rI, _rT],
  [0, 0, 0],

  __ResourceNotFoundException
);
export var S3ExportSpecification = struct(n0, _SES, 0, [_DB, _DP], [0, 0]);
export var S3ItemFilter = struct(
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
  ]
);
export var S3ResultItem = struct(
  n0,
  _SRI,
  0,
  [_BRA, _SRA, _BVN, _OK, _OS, _CTr, _ETa, _VIe],
  [0, 0, 0, [() => ObjectKey, 0], 1, 4, 0, 0]
);
export var SearchJobBackupsResult = struct(
  n0,
  _SJBR,
  0,
  [_St, _SM, _RT, _BRA, _SRA, _ICT, _BCT],
  [0, 0, 0, 0, 0, 4, 4]
);
export var SearchScope = struct(
  n0,
  _SS,
  0,
  [_BRT, _BRCT, _SRAo, _BRAa, _BRTa],
  [64 | 0, () => BackupCreationTimeFilter, 64 | 0, 64 | 0, [() => TagMap, 0]]
);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m, _rI, _rT, _sC, _qC],
  [0, 0, 0, 0, 0],

  __ServiceQuotaExceededException
);
export var StartSearchJobInput = struct(
  n0,
  _SSJI,
  0,
  [_T, _N, _EKA, _CTl, _SS, _IF],
  [[() => TagMap, 0], 0, 0, 0, [() => SearchScope, 0], () => ItemFilters]
);
export var StartSearchJobOutput = struct(n0, _SSJO, 0, [_SJA, _CTr, _SJI], [0, 4, 0]);
export var StartSearchResultExportJobInput = struct(
  n0,
  _SSREJI,
  0,
  [_SJI, _ES, _CTl, _T, _RAo],
  [0, () => ExportSpecification, 0, [() => TagMap, 0], 0]
);
export var StartSearchResultExportJobOutput = struct(n0, _SSREJO, 0, [_EJA, _EJI], [0, 0]);
export var StopSearchJobInput = struct(n0, _SSJIt, 0, [_SJI], [[0, 1]]);
export var StopSearchJobOutput = struct(n0, _SSJOt, 0, [], []);
export var StringCondition = struct(n0, _SC, 0, [_V, _O], [0, 0]);
export var TagResourceRequest = struct(
  n0,
  _TRR,
  0,
  [_RAe, _T],
  [
    [0, 1],
    [() => TagMap, 0],
  ]
);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TimeCondition = struct(n0, _TC, 0, [_V, _O], [4, 0]);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_RAe, _TK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var EBSItemFilters = list(n0, _EBSIFt, 0, () => EBSItemFilter);
export var ExportJobSummaries = list(n0, _EJSx, 0, () => ExportJobSummary);
export var LongConditionList = list(n0, _LCL, 0, () => LongCondition);
export var RecoveryPointArnList = 64 | 0;

export var ResourceArnList = 64 | 0;

export var ResourceTypeList = 64 | 0;

export var Results = list(n0, _R, 0, [() => ResultItem, 0]);
export var S3ItemFilters = list(n0, _SIF, 0, () => S3ItemFilter);
export var SearchJobBackupsResults = list(n0, _SJBRe, 0, () => SearchJobBackupsResult);
export var StringConditionList = list(n0, _SCL, 0, () => StringCondition);
export var TagKeys = 64 | 0;

export var TimeConditionList = list(n0, _TCL, 0, () => TimeCondition);
export var TagMap = map(
  n0,
  _TM,
  {
    [_sp]: 1,
  },
  0,
  0
);
export var ExportSpecification = uni(n0, _ES, 0, [_sES], [() => S3ExportSpecification]);
export var ResultItem = uni(
  n0,
  _RI,
  0,
  [_SRI, _EBSRI],
  [
    [() => S3ResultItem, 0],
    [() => EBSResultItem, 0],
  ]
);
export var GetSearchJob = op(
  n0,
  _GSJ,
  {
    [_h]: ["GET", "/search-jobs/{SearchJobIdentifier}", 200],
  },
  () => GetSearchJobInput,
  () => GetSearchJobOutput
);
export var GetSearchResultExportJob = op(
  n0,
  _GSREJ,
  {
    [_h]: ["GET", "/export-search-jobs/{ExportJobIdentifier}", 200],
  },
  () => GetSearchResultExportJobInput,
  () => GetSearchResultExportJobOutput
);
export var ListSearchJobBackups = op(
  n0,
  _LSJB,
  {
    [_h]: ["GET", "/search-jobs/{SearchJobIdentifier}/backups", 200],
  },
  () => ListSearchJobBackupsInput,
  () => ListSearchJobBackupsOutput
);
export var ListSearchJobResults = op(
  n0,
  _LSJR,
  {
    [_h]: ["GET", "/search-jobs/{SearchJobIdentifier}/search-results", 200],
  },
  () => ListSearchJobResultsInput,
  () => ListSearchJobResultsOutput
);
export var ListSearchResultExportJobs = op(
  n0,
  _LSREJ,
  {
    [_h]: ["GET", "/export-search-jobs", 200],
  },
  () => ListSearchResultExportJobsInput,
  () => ListSearchResultExportJobsOutput
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{ResourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var StartSearchJob = op(
  n0,
  _SSJ,
  {
    [_h]: ["PUT", "/search-jobs", 200],
  },
  () => StartSearchJobInput,
  () => StartSearchJobOutput
);
export var StartSearchResultExportJob = op(
  n0,
  _SSREJ,
  {
    [_h]: ["PUT", "/export-search-jobs", 200],
  },
  () => StartSearchResultExportJobInput,
  () => StartSearchResultExportJobOutput
);
export var StopSearchJob = op(
  n0,
  _SSJt,
  {
    [_h]: ["PUT", "/search-jobs/{SearchJobIdentifier}/actions/cancel", 200],
  },
  () => StopSearchJobInput,
  () => StopSearchJobOutput
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{ResourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{ResourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
