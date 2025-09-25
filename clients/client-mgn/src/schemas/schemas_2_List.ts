// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aC,
  _ap,
  _cC,
  _cDT,
  _cTl,
  _eDTn,
  _eID,
  _eIDxp,
  _EL,
  _ET,
  _ETS,
  _eTx,
  _f,
  _ht,
  _i,
  _iID,
  _iIDm,
  _IL,
  _IT,
  _iT,
  _ITS,
  _ITSA,
  _ITSS,
  _ITSW,
  _LE,
  _LER,
  _LERF,
  _LERi,
  _LIi,
  _LIR,
  _LIRF,
  _LIRi,
  _mC,
  _mR,
  _nT,
  _pP,
  _sB,
  _sBO,
  _SBS,
  _sBS,
  _sC,
  _SE,
  _se,
  _SER,
  _SERt,
  _SI,
  _SIR,
  _SIRt,
  _sK,
  _sta,
  _su,
  _w,
  _wC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ExportTask = struct(
  n0,
  _ET,
  0,
  [_eID, _sB, _sK, _sBO, _cDT, _eDTn, _sta, _pP, _su],
  [0, 0, 0, 0, 0, 0, 0, 1, () => ExportTaskSummary]
);
export var ExportTaskSummary = struct(n0, _ETS, 0, [_sC, _aC, _wC], [1, 1, 1]);
export var ImportTask = struct(
  n0,
  _IT,
  0,
  [_iID, _sBS, _cDT, _eDTn, _sta, _pP, _su],
  [0, () => S3BucketSource, 0, 0, 0, 1, () => ImportTaskSummary]
);
export var ImportTaskSummary = struct(
  n0,
  _ITS,
  0,
  [_w, _ap, _se],
  [() => ImportTaskSummaryWaves, () => ImportTaskSummaryApplications, () => ImportTaskSummaryServers]
);
export var ImportTaskSummaryApplications = struct(n0, _ITSA, 0, [_cC, _mC], [1, 1]);
export var ImportTaskSummaryServers = struct(n0, _ITSS, 0, [_cC, _mC], [1, 1]);
export var ImportTaskSummaryWaves = struct(n0, _ITSW, 0, [_cC, _mC], [1, 1]);
export var ListExportsRequest = struct(n0, _LER, 0, [_f, _mR, _nT], [() => ListExportsRequestFilters, 1, 0]);
export var ListExportsRequestFilters = struct(n0, _LERF, 0, [_eIDxp], [64 | 0]);
export var ListExportsResponse = struct(n0, _LERi, 0, [_i, _nT], [() => ExportsList, 0]);
export var ListImportsRequest = struct(n0, _LIR, 0, [_f, _mR, _nT], [() => ListImportsRequestFilters, 1, 0]);
export var ListImportsRequestFilters = struct(n0, _LIRF, 0, [_iIDm], [64 | 0]);
export var ListImportsResponse = struct(n0, _LIRi, 0, [_i, _nT], [() => ImportList, 0]);
export var S3BucketSource = struct(n0, _SBS, 0, [_sB, _sK, _sBO], [0, 0, 0]);
export var StartExportRequest = struct(n0, _SER, 0, [_sB, _sK, _sBO], [0, 0, 0]);
export var StartExportResponse = struct(n0, _SERt, 0, [_eTx], [() => ExportTask]);
export var StartImportRequest = struct(n0, _SIR, 0, [_cTl, _sBS], [[0, 4], () => S3BucketSource]);
export var StartImportResponse = struct(n0, _SIRt, 0, [_iT], [() => ImportTask]);
export var ExportsList = list(n0, _EL, 0, () => ExportTask);
export var ImportIDsFilter = 64 | 0;

export var ImportList = list(n0, _IL, 0, () => ImportTask);
export var ListExportsRequestFiltersExportIDs = 64 | 0;

export var ListExports = op(
  n0,
  _LE,
  {
    [_ht]: ["POST", "/ListExports", 200],
  },
  () => ListExportsRequest,
  () => ListExportsResponse
);
export var ListImports = op(
  n0,
  _LIi,
  {
    [_ht]: ["POST", "/ListImports", 200],
  },
  () => ListImportsRequest,
  () => ListImportsResponse
);
export var StartExport = op(
  n0,
  _SE,
  {
    [_ht]: ["POST", "/StartExport", 202],
  },
  () => StartExportRequest,
  () => StartExportResponse
);
export var StartImport = op(
  n0,
  _SI,
  {
    [_ht]: ["POST", "/StartImport", 202],
  },
  () => StartImportRequest,
  () => StartImportResponse
);
