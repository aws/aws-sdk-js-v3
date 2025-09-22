// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aI,
  _bN,
  _CFRa,
  _CFRR,
  _CFRRa,
  _co,
  _CSEa,
  _CSER,
  _CSEr,
  _CSERa,
  _CSERr,
  _CSERre,
  _D,
  _eC,
  _eIT,
  _eITc,
  _eM,
  _eRN,
  _fCi,
  _fo,
  _GSE,
  _GSER,
  _GSERe,
  _ht,
  _k,
  _kKA,
  _kP,
  _lFN,
  _lFT,
  _rF,
  _RFC,
  _rFC,
  _rIe,
  _rIep,
  _RMF,
  _RMFL,
  _RSF,
  _RSFL,
  _rT,
  _s,
  _sDe,
  _va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CancelFindingsReportRequest = struct(n0, _CFRR, 0, [_rIep], [0]);
export var CancelFindingsReportResponse = struct(n0, _CFRRa, 0, [_rIep], [0]);
export var CancelSbomExportRequest = struct(n0, _CSER, 0, [_rIep], [0]);
export var CancelSbomExportResponse = struct(n0, _CSERa, 0, [_rIep], [0]);
export var CreateSbomExportRequest = struct(
  n0,
  _CSERr,
  0,
  [_rFC, _rF, _sDe],
  [() => ResourceFilterCriteria, 0, () => Destination]
);
export var CreateSbomExportResponse = struct(n0, _CSERre, 0, [_rIep], [0]);
export var Destination = struct(n0, _D, 0, [_bN, _kP, _kKA], [0, 0, 0]);
export var GetSbomExportRequest = struct(n0, _GSER, 0, [_rIep], [0]);
export var GetSbomExportResponse = struct(
  n0,
  _GSERe,
  0,
  [_rIep, _fo, _s, _eC, _eM, _sDe, _fCi],
  [0, 0, 0, 0, 0, () => Destination, () => ResourceFilterCriteria]
);
export var ResourceFilterCriteria = struct(
  n0,
  _RFC,
  0,
  [_aI, _rIe, _rT, _eRN, _lFN, _eIT, _eITc, _lFT],
  [
    () => ResourceStringFilterList,
    () => ResourceStringFilterList,
    () => ResourceStringFilterList,
    () => ResourceStringFilterList,
    () => ResourceStringFilterList,
    () => ResourceStringFilterList,
    () => ResourceMapFilterList,
    () => ResourceMapFilterList,
  ]
);
export var ResourceMapFilter = struct(n0, _RMF, 0, [_co, _k, _va], [0, 0, 0]);
export var ResourceStringFilter = struct(n0, _RSF, 0, [_co, _va], [0, 0]);
export var ResourceMapFilterList = list(n0, _RMFL, 0, () => ResourceMapFilter);
export var ResourceStringFilterList = list(n0, _RSFL, 0, () => ResourceStringFilter);
export var CancelFindingsReport = op(
  n0,
  _CFRa,
  {
    [_ht]: ["POST", "/reporting/cancel", 200],
  },
  () => CancelFindingsReportRequest,
  () => CancelFindingsReportResponse
);
export var CancelSbomExport = op(
  n0,
  _CSEa,
  {
    [_ht]: ["POST", "/sbomexport/cancel", 200],
  },
  () => CancelSbomExportRequest,
  () => CancelSbomExportResponse
);
export var CreateSbomExport = op(
  n0,
  _CSEr,
  {
    [_ht]: ["POST", "/sbomexport/create", 200],
  },
  () => CreateSbomExportRequest,
  () => CreateSbomExportResponse
);
export var GetSbomExport = op(
  n0,
  _GSE,
  {
    [_ht]: ["POST", "/sbomexport/get", 200],
  },
  () => GetSbomExportRequest,
  () => GetSbomExportResponse
);
