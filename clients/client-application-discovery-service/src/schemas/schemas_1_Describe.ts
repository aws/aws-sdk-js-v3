// smithy-typescript generated code
import { error, list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  ConflictErrorException as __ConflictErrorException,
  ResourceInUseException as __ResourceInUseException,
} from "../models/index";
import {
  _aIF,
  _aIS,
  _BDCT,
  _c,
  _cDU,
  _CED,
  _CEDo,
  _CEE,
  _cIon,
  _con,
  _cPMB,
  _cRT,
  _CT,
  _cT,
  _CTS,
  _DBDCT,
  _DBDCTR,
  _DBDCTRe,
  _dC,
  _DCE,
  _DCER,
  _DCERe,
  _de,
  _DEC,
  _DECR,
  _DECRe,
  _DET,
  _DETR,
  _DETRe,
  _DIT,
  _DITFL,
  _DITR,
  _DITRe,
  _dS,
  _DTe,
  _DTRes,
  _DTResc,
  _DW,
  _dW,
  _DWL,
  _e,
  _eAFEZ,
  _eDF,
  _EF,
  _EFx,
  _EI,
  _eI,
  _eIT,
  _EIx,
  _eIx,
  _eIxp,
  _eM,
  _en,
  _EP,
  _EREP,
  _eRP,
  _eRT,
  _eS,
  _eSC,
  _eT,
  _FC,
  _fC,
  _fCi,
  _FCL,
  _fi,
  _hE,
  _i,
  _iCT,
  _iDT,
  _iRT,
  _IT,
  _iT,
  _ITF,
  _iTI,
  _ITL,
  _iU,
  _k,
  _m,
  _mR,
  _n,
  _nT,
  _oC,
  _p,
  _pA,
  _pO,
  _pR,
  _rC,
  _rET,
  _RIO,
  _rIO,
  _RIUE,
  _rPMB,
  _rST,
  _s,
  _sB,
  _SCE,
  _SCER,
  _SCERt,
  _SCERto,
  _SCERtop,
  _SCEt,
  _sD,
  _SET,
  _SETR,
  _SETRt,
  _sIF,
  _sIS,
  _SIT,
  _SITR,
  _SITRt,
  _sM,
  _sSC,
  _sT,
  _sTt,
  _t,
  _ta,
  _tas,
  _te,
  _TF,
  _TFa,
  _tI,
  _tL,
  _tOC,
  _UMB,
  _va,
  _val,
  _wC,
  _wT,
  _xN,
  n0,
} from "./schemas_0";
import { FilterValues } from "./schemas_12_Describe";

/* eslint no-var: 0 */

export var BatchDeleteConfigurationTask = struct(
  n0,
  _BDCT,
  0,
  [_tI, _s, _sT, _eT, _cT, _rC, _dC, _fC, _dW],
  [0, 0, 4, 4, 0, 64 | 0, 64 | 0, () => FailedConfigurationList, () => DeletionWarningsList]
);
export var ConfigurationTag = struct(n0, _CT, 0, [_cT, _cIon, _k, _va, _tOC], [0, 0, 0, 0, 4]);
export var ConflictErrorException = error(
  n0,
  _CEE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __ConflictErrorException
);
export var ContinuousExportDescription = struct(
  n0,
  _CED,
  0,
  [_eI, _s, _sD, _sB, _sT, _sTt, _dS, _sSC],
  [0, 0, 0, 0, 4, 4, 0, 128 | 0]
);
export var DeletionWarning = struct(n0, _DW, 0, [_cIon, _wC, _wT], [0, 1, 0]);
export var DescribeBatchDeleteConfigurationTaskRequest = struct(n0, _DBDCTR, 0, [_tI], [0]);
export var DescribeBatchDeleteConfigurationTaskResponse = struct(
  n0,
  _DBDCTRe,
  0,
  [_ta],
  [() => BatchDeleteConfigurationTask]
);
export var DescribeContinuousExportsRequest = struct(n0, _DCER, 0, [_eIx, _mR, _nT], [64 | 0, 1, 0]);
export var DescribeContinuousExportsResponse = struct(
  n0,
  _DCERe,
  0,
  [_de, _nT],
  [() => ContinuousExportDescriptions, 0]
);
export var DescribeExportConfigurationsRequest = struct(n0, _DECR, 0, [_eIx, _mR, _nT], [64 | 0, 1, 0]);
export var DescribeExportConfigurationsResponse = struct(n0, _DECRe, 0, [_eIxp, _nT], [() => ExportsInfo, 0]);
export var DescribeExportTasksRequest = struct(
  n0,
  _DETR,
  0,
  [_eIx, _fi, _mR, _nT],
  [64 | 0, [() => ExportFilters, 0], 1, 0]
);
export var DescribeExportTasksResponse = struct(n0, _DETRe, 0, [_eIxp, _nT], [() => ExportsInfo, 0]);
export var DescribeImportTasksRequest = struct(
  n0,
  _DITR,
  0,
  [_fi, _mR, _nT],
  [() => DescribeImportTasksFilterList, 1, 0]
);
export var DescribeImportTasksResponse = struct(n0, _DITRe, 0, [_nT, _tas], [0, () => ImportTaskList]);
export var DescribeTagsRequest = struct(n0, _DTRes, 0, [_fi, _mR, _nT], [[() => TagFilters, 0], 1, 0]);
export var DescribeTagsResponse = struct(n0, _DTResc, 0, [_t, _nT], [[() => ConfigurationTagSet, 0], 0]);
export var Ec2RecommendationsExportPreferences = struct(
  n0,
  _EREP,
  0,
  [_en, _cPMB, _rPMB, _te, _eIT, _pR, _rIO],
  [2, () => UsageMetricBasis, () => UsageMetricBasis, 0, 64 | 0, 0, () => ReservedInstanceOptions]
);
export var ExportFilter = struct(n0, _EF, 0, [_n, _val, _con], [0, [() => FilterValues, 0], 0]);
export var ExportInfo = struct(n0, _EI, 0, [_eI, _eS, _sM, _cDU, _eRT, _iT, _rST, _rET], [0, 0, 0, 0, 4, 2, 4, 4]);
export var FailedConfiguration = struct(n0, _FC, 0, [_cIon, _eSC, _eM], [0, 1, 0]);
export var ImportTask = struct(
  n0,
  _IT,
  0,
  [_iTI, _cRT, _n, _iU, _s, _iRT, _iCT, _iDT, _fCi, _sIS, _sIF, _aIS, _aIF, _eAFEZ],
  [0, 0, 0, 0, 0, 4, 4, 4, 0, 1, 1, 1, 1, 0]
);
export var ImportTaskFilter = struct(n0, _ITF, 0, [_n, _val], [0, 64 | 0]);
export var ReservedInstanceOptions = struct(n0, _RIO, 0, [_pO, _oC, _tL], [0, 0, 0]);
export var ResourceInUseException = error(
  n0,
  _RIUE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ResourceInUseException
);
export var StartContinuousExportRequest = struct(n0, _SCER, 0, [], []);
export var StartContinuousExportResponse = struct(n0, _SCERt, 0, [_eI, _sB, _sT, _dS, _sSC], [0, 0, 4, 0, 128 | 0]);
export var StartExportTaskRequest = struct(
  n0,
  _SETR,
  0,
  [_eDF, _fi, _sT, _eT, _p],
  [64 | 0, [() => ExportFilters, 0], 4, 4, () => ExportPreferences]
);
export var StartExportTaskResponse = struct(n0, _SETRt, 0, [_eI], [0]);
export var StartImportTaskRequest = struct(n0, _SITR, 0, [_cRT, _n, _iU], [[0, 4], 0, 0]);
export var StartImportTaskResponse = struct(n0, _SITRt, 0, [_ta], [() => ImportTask]);
export var StopContinuousExportRequest = struct(n0, _SCERto, 0, [_eI], [0]);
export var StopContinuousExportResponse = struct(n0, _SCERtop, 0, [_sT, _sTt], [4, 4]);
export var TagFilter = struct(n0, _TF, 0, [_n, _val], [0, [() => FilterValues, 0]]);
export var UsageMetricBasis = struct(n0, _UMB, 0, [_n, _pA], [0, 1]);
export var ConfigurationTagSet = list(n0, _CTS, 0, [
  () => ConfigurationTag,
  {
    [_xN]: _i,
  },
]);
export var ContinuousExportDescriptions = list(n0, _CEDo, 0, () => ContinuousExportDescription);
export var ContinuousExportIds = 64 | 0;

export var DeletionWarningsList = list(n0, _DWL, 0, () => DeletionWarning);
export var DescribeImportTasksFilterList = list(n0, _DITFL, 0, () => ImportTaskFilter);
export var ExcludedInstanceTypes = 64 | 0;

export var ExportDataFormats = 64 | 0;

export var ExportFilters = list(n0, _EFx, 0, [() => ExportFilter, 0]);
export var ExportIds = 64 | 0;

export var ExportsInfo = list(n0, _EIx, 0, () => ExportInfo);
export var FailedConfigurationList = list(n0, _FCL, 0, () => FailedConfiguration);
export var ImportTaskFilterValueList = 64 | 0;

export var ImportTaskList = list(n0, _ITL, 0, () => ImportTask);
export var TagFilters = list(n0, _TFa, 0, [() => TagFilter, 0]);
export var SchemaStorageConfig = 128 | 0;

export var ExportPreferences = uni(n0, _EP, 0, [_eRP], [() => Ec2RecommendationsExportPreferences]);
export var DescribeBatchDeleteConfigurationTask = op(
  n0,
  _DBDCT,
  0,
  () => DescribeBatchDeleteConfigurationTaskRequest,
  () => DescribeBatchDeleteConfigurationTaskResponse
);
export var DescribeContinuousExports = op(
  n0,
  _DCE,
  0,
  () => DescribeContinuousExportsRequest,
  () => DescribeContinuousExportsResponse
);
export var DescribeExportConfigurations = op(
  n0,
  _DEC,
  0,
  () => DescribeExportConfigurationsRequest,
  () => DescribeExportConfigurationsResponse
);
export var DescribeExportTasks = op(
  n0,
  _DET,
  0,
  () => DescribeExportTasksRequest,
  () => DescribeExportTasksResponse
);
export var DescribeImportTasks = op(
  n0,
  _DIT,
  0,
  () => DescribeImportTasksRequest,
  () => DescribeImportTasksResponse
);
export var DescribeTags = op(
  n0,
  _DTe,
  0,
  () => DescribeTagsRequest,
  () => DescribeTagsResponse
);
export var StartContinuousExport = op(
  n0,
  _SCE,
  0,
  () => StartContinuousExportRequest,
  () => StartContinuousExportResponse
);
export var StartExportTask = op(
  n0,
  _SET,
  0,
  () => StartExportTaskRequest,
  () => StartExportTaskResponse
);
export var StartImportTask = op(
  n0,
  _SIT,
  0,
  () => StartImportTaskRequest,
  () => StartImportTaskResponse
);
export var StopContinuousExport = op(
  n0,
  _SCEt,
  0,
  () => StopContinuousExportRequest,
  () => StopContinuousExportResponse
);
