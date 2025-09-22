// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _Ag,
  _CEJ,
  _CEJR,
  _CEJr,
  _CEJRa,
  _CEJRr,
  _CEJRre,
  _CIJ,
  _CIJR,
  _CIJRr,
  _CLD,
  _CLIA,
  _CLN,
  _CTo,
  _CTr,
  _D,
  _Des,
  _DF,
  _EAFL,
  _ED,
  _EDS,
  _EDx,
  _EDxp,
  _EJ,
  _EJS,
  _EJSL,
  _EMr,
  _EMx,
  _EMxp,
  _ERC,
  _ESFL,
  _EST,
  _ESx,
  _Ex,
  _FEA,
  _FI,
  _FRC,
  _FRSU,
  _GEJ,
  _GEJR,
  _GEJRe,
  _GIJ,
  _GIJR,
  _GIJRe,
  _h,
  _ID,
  _IDS,
  _IDT,
  _IJ,
  _IJS,
  _IJSL,
  _Inc,
  _Is,
  _JI,
  _JS,
  _LDE,
  _LEEa,
  _LEJ,
  _LEJR,
  _LEJRi,
  _LIJ,
  _LIJR,
  _LIJRi,
  _MDSe,
  _Met,
  _MIDS,
  _MIF,
  _MR,
  _N,
  _Na,
  _NT,
  _PRC,
  _PS,
  _SD,
  _SLD,
  _SLIA,
  _St,
  _SU,
  _Su,
  n0,
} from "./schemas_0";
import { EmailSubject, InsightsEmailAddress } from "./schemas_37_ExportJob";

/* eslint no-var: 0 */

export var CancelExportJobRequest = struct(n0, _CEJR, 0, [_JI], [[0, 1]]);
export var CancelExportJobResponse = struct(n0, _CEJRa, 0, [], []);
export var ContactListDestination = struct(n0, _CLD, 0, [_CLN, _CLIA], [0, 0]);
export var CreateExportJobRequest = struct(
  n0,
  _CEJRr,
  0,
  [_EDS, _EDx],
  [[() => ExportDataSource, 0], () => ExportDestination]
);
export var CreateExportJobResponse = struct(n0, _CEJRre, 0, [_JI], [0]);
export var CreateImportJobRequest = struct(
  n0,
  _CIJR,
  0,
  [_ID, _IDS],
  [() => ImportDestination, () => ImportDataSource]
);
export var CreateImportJobResponse = struct(n0, _CIJRr, 0, [_JI], [0]);
export var ExportDataSource = struct(
  n0,
  _EDS,
  0,
  [_MDSe, _MIDS],
  [() => MetricsDataSource, [() => MessageInsightsDataSource, 0]]
);
export var ExportDestination = struct(n0, _EDx, 0, [_DF, _SU], [0, 0]);
export var ExportJobSummary = struct(n0, _EJS, 0, [_JI, _EST, _JS, _CTr, _CTo], [0, 0, 0, 4, 4]);
export var ExportMetric = struct(n0, _EMx, 0, [_Na, _Ag], [0, 0]);
export var ExportStatistics = struct(n0, _ESx, 0, [_PRC, _ERC], [1, 1]);
export var FailureInfo = struct(n0, _FI, 0, [_FRSU, _EMr], [0, 0]);
export var GetExportJobRequest = struct(n0, _GEJR, 0, [_JI], [[0, 1]]);
export var GetExportJobResponse = struct(
  n0,
  _GEJRe,
  0,
  [_JI, _EST, _JS, _EDx, _EDS, _CTr, _CTo, _FI, _St],
  [0, 0, 0, () => ExportDestination, [() => ExportDataSource, 0], 4, 4, () => FailureInfo, () => ExportStatistics]
);
export var GetImportJobRequest = struct(n0, _GIJR, 0, [_JI], [[0, 1]]);
export var GetImportJobResponse = struct(
  n0,
  _GIJRe,
  0,
  [_JI, _ID, _IDS, _FI, _JS, _CTr, _CTo, _PRC, _FRC],
  [0, () => ImportDestination, () => ImportDataSource, () => FailureInfo, 0, 4, 4, 1, 1]
);
export var ImportDataSource = struct(n0, _IDS, 0, [_SU, _DF], [0, 0]);
export var ImportDestination = struct(
  n0,
  _ID,
  0,
  [_SLD, _CLD],
  [() => SuppressionListDestination, () => ContactListDestination]
);
export var ImportJobSummary = struct(
  n0,
  _IJS,
  0,
  [_JI, _ID, _JS, _CTr, _PRC, _FRC],
  [0, () => ImportDestination, 0, 4, 1, 1]
);
export var ListExportJobsRequest = struct(n0, _LEJR, 0, [_NT, _PS, _EST, _JS], [0, 1, 0, 0]);
export var ListExportJobsResponse = struct(n0, _LEJRi, 0, [_EJ, _NT], [() => ExportJobSummaryList, 0]);
export var ListImportJobsRequest = struct(n0, _LIJR, 0, [_IDT, _NT, _PS], [0, 0, 1]);
export var ListImportJobsResponse = struct(n0, _LIJRi, 0, [_IJ, _NT], [() => ImportJobSummaryList, 0]);
export var MessageInsightsDataSource = struct(
  n0,
  _MIDS,
  0,
  [_SD, _ED, _Inc, _Ex, _MR],
  [4, 4, [() => MessageInsightsFilters, 0], [() => MessageInsightsFilters, 0], 1]
);
export var MessageInsightsFilters = struct(
  n0,
  _MIF,
  0,
  [_FEA, _Des, _Su, _Is, _LDE, _LEEa],
  [
    [() => EmailAddressFilterList, 0],
    [() => EmailAddressFilterList, 0],
    [() => EmailSubjectFilterList, 0],
    64 | 0,
    64 | 0,
    64 | 0,
  ]
);
export var MetricsDataSource = struct(
  n0,
  _MDSe,
  0,
  [_D, _N, _Met, _SD, _ED],
  [map(n0, _EDxp, 0, 0, 64 | 0), 0, () => ExportMetrics, 4, 4]
);
export var SuppressionListDestination = struct(n0, _SLD, 0, [_SLIA], [0]);
export var EmailAddressFilterList = list(n0, _EAFL, 0, [() => InsightsEmailAddress, 0]);
export var EmailSubjectFilterList = list(n0, _ESFL, 0, [() => EmailSubject, 0]);
export var ExportDimensionValue = 64 | 0;

export var ExportJobSummaryList = list(n0, _EJSL, 0, () => ExportJobSummary);
export var ExportMetrics = list(n0, _EMxp, 0, () => ExportMetric);
export var ImportJobSummaryList = list(n0, _IJSL, 0, () => ImportJobSummary);
export var IspFilterList = 64 | 0;

export var LastDeliveryEventList = 64 | 0;

export var LastEngagementEventList = 64 | 0;

export var ExportDimensions = map(n0, _EDxp, 0, 0, 64 | 0);
export var CancelExportJob = op(
  n0,
  _CEJ,
  {
    [_h]: ["PUT", "/v2/email/export-jobs/{JobId}/cancel", 200],
  },
  () => CancelExportJobRequest,
  () => CancelExportJobResponse
);
export var CreateExportJob = op(
  n0,
  _CEJr,
  {
    [_h]: ["POST", "/v2/email/export-jobs", 200],
  },
  () => CreateExportJobRequest,
  () => CreateExportJobResponse
);
export var CreateImportJob = op(
  n0,
  _CIJ,
  {
    [_h]: ["POST", "/v2/email/import-jobs", 200],
  },
  () => CreateImportJobRequest,
  () => CreateImportJobResponse
);
export var GetExportJob = op(
  n0,
  _GEJ,
  {
    [_h]: ["GET", "/v2/email/export-jobs/{JobId}", 200],
  },
  () => GetExportJobRequest,
  () => GetExportJobResponse
);
export var GetImportJob = op(
  n0,
  _GIJ,
  {
    [_h]: ["GET", "/v2/email/import-jobs/{JobId}", 200],
  },
  () => GetImportJobRequest,
  () => GetImportJobResponse
);
export var ListExportJobs = op(
  n0,
  _LEJ,
  {
    [_h]: ["POST", "/v2/email/list-export-jobs", 200],
  },
  () => ListExportJobsRequest,
  () => ListExportJobsResponse
);
export var ListImportJobs = op(
  n0,
  _LIJ,
  {
    [_h]: ["POST", "/v2/email/import-jobs/list", 200],
  },
  () => ListImportJobsRequest,
  () => ListImportJobsResponse
);
