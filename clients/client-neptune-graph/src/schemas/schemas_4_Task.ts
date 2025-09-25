// smithy-typescript generated code
import { list, map, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aN,
  _bNH,
  _CET,
  _CETI,
  _CETO,
  _CIT,
  _CITI,
  _CITO,
  _d,
  _dEC,
  _eC,
  _eD,
  _EF,
  _eF,
  _EFE,
  _EFPA,
  _EFPLM,
  _EFPM,
  _eFx,
  _ETD,
  _eTD,
  _ETS,
  _ETSL,
  _f,
  _fOE,
  _GET,
  _GETI,
  _GETO,
  _gI,
  _gIr,
  _GIT,
  _GITI,
  _GITO,
  _h,
  _hQ,
  _IO,
  _iO,
  _ITD,
  _iTD,
  _ITS,
  _ITSL,
  _kKI,
  _LET,
  _LETI,
  _LETO,
  _LIT,
  _LITI,
  _LITO,
  _mR,
  _mVH,
  _ne,
  _nEW,
  _NIO,
  _nT,
  _nVW,
  _oT,
  _pDVL,
  _pEI,
  _pP,
  _pr,
  _pT,
  _rA,
  _sC,
  _sEKKI,
  _sEP,
  _SET,
  _SETI,
  _SETO,
  _SIT,
  _SITI,
  _SITO,
  _so,
  _sPN,
  _sR,
  _sT,
  _st,
  _t,
  _ta,
  _tES,
  _tI,
  _tIa,
  _vF,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CancelExportTaskInput = struct(n0, _CETI, 0, [_tI], [[0, 1]]);
export var CancelExportTaskOutput = struct(
  n0,
  _CETO,
  0,
  [_gI, _rA, _tIa, _st, _f, _d, _kKI, _pT, _sR],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var CancelImportTaskInput = struct(n0, _CITI, 0, [_tI], [[0, 1]]);
export var CancelImportTaskOutput = struct(n0, _CITO, 0, [_gI, _tIa, _so, _f, _pT, _rA, _st], [0, 0, 0, 0, 0, 0, 0]);
export var ExportFilter = struct(
  n0,
  _EF,
  0,
  [_vF, _eF],
  [() => ExportFilterPerLabelMap, () => ExportFilterPerLabelMap]
);
export var ExportFilterElement = struct(n0, _EFE, 0, [_pr], [() => ExportFilterPropertyMap]);
export var ExportFilterPropertyAttributes = struct(n0, _EFPA, 0, [_oT, _sPN, _mVH], [0, 0, 0]);
export var ExportTaskDetails = struct(n0, _ETD, 0, [_sT, _tES, _pP, _nVW, _nEW], [4, 1, 1, 1, 1]);
export var ExportTaskSummary = struct(
  n0,
  _ETS,
  0,
  [_gI, _rA, _tIa, _st, _f, _d, _kKI, _pT, _sR],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var GetExportTaskInput = struct(n0, _GETI, 0, [_tI], [[0, 1]]);
export var GetExportTaskOutput = struct(
  n0,
  _GETO,
  0,
  [_gI, _rA, _tIa, _st, _f, _d, _kKI, _pT, _sR, _eTD, _eFx],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, () => ExportTaskDetails, () => ExportFilter]
);
export var GetImportTaskInput = struct(n0, _GITI, 0, [_tI], [[0, 1]]);
export var GetImportTaskOutput = struct(
  n0,
  _GITO,
  0,
  [_gI, _tIa, _so, _f, _pT, _rA, _st, _iO, _iTD, _aN, _sR],
  [0, 0, 0, 0, 0, 0, 0, () => ImportOptions, () => ImportTaskDetails, 1, 0]
);
export var ImportTaskDetails = struct(
  n0,
  _ITD,
  0,
  [_st, _sT, _tES, _pP, _eC, _eD, _sC, _dEC],
  [0, 4, 1, 1, 1, 0, 1, 1]
);
export var ImportTaskSummary = struct(n0, _ITS, 0, [_gI, _tIa, _so, _f, _pT, _rA, _st], [0, 0, 0, 0, 0, 0, 0]);
export var ListExportTasksInput = struct(
  n0,
  _LETI,
  0,
  [_gIr, _nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _gIr,
      },
    ],
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
export var ListExportTasksOutput = struct(n0, _LETO, 0, [_ta, _nT], [() => ExportTaskSummaryList, 0]);
export var ListImportTasksInput = struct(
  n0,
  _LITI,
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
  ]
);
export var ListImportTasksOutput = struct(n0, _LITO, 0, [_ta, _nT], [() => ImportTaskSummaryList, 0]);
export var NeptuneImportOptions = struct(n0, _NIO, 0, [_sEP, _sEKKI, _pDVL, _pEI], [0, 0, 2, 2]);
export var StartExportTaskInput = struct(
  n0,
  _SETI,
  0,
  [_gIr, _rA, _f, _d, _kKI, _pT, _eFx, _t],
  [0, 0, 0, 0, 0, 0, () => ExportFilter, 128 | 0]
);
export var StartExportTaskOutput = struct(
  n0,
  _SETO,
  0,
  [_gI, _rA, _tIa, _st, _f, _d, _kKI, _pT, _sR, _eFx],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, () => ExportFilter]
);
export var StartImportTaskInput = struct(
  n0,
  _SITI,
  0,
  [_iO, _fOE, _so, _f, _pT, _bNH, _gIr, _rA],
  [() => ImportOptions, 2, 0, 0, 0, 0, [0, 1], 0]
);
export var StartImportTaskOutput = struct(
  n0,
  _SITO,
  0,
  [_gI, _tIa, _so, _f, _pT, _rA, _st, _iO],
  [0, 0, 0, 0, 0, 0, 0, () => ImportOptions]
);
export var ExportTaskSummaryList = list(n0, _ETSL, 0, () => ExportTaskSummary);
export var ImportTaskSummaryList = list(n0, _ITSL, 0, () => ImportTaskSummary);
export var ExportFilterPerLabelMap = map(n0, _EFPLM, 0, 0, () => ExportFilterElement);
export var ExportFilterPropertyMap = map(n0, _EFPM, 0, 0, () => ExportFilterPropertyAttributes);
export var ImportOptions = uni(n0, _IO, 0, [_ne], [() => NeptuneImportOptions]);
export var CancelExportTask = op(
  n0,
  _CET,
  {
    [_h]: ["DELETE", "/exporttasks/{taskIdentifier}", 200],
  },
  () => CancelExportTaskInput,
  () => CancelExportTaskOutput
);
export var CancelImportTask = op(
  n0,
  _CIT,
  {
    [_h]: ["DELETE", "/importtasks/{taskIdentifier}", 200],
  },
  () => CancelImportTaskInput,
  () => CancelImportTaskOutput
);
export var GetExportTask = op(
  n0,
  _GET,
  {
    [_h]: ["GET", "/exporttasks/{taskIdentifier}", 200],
  },
  () => GetExportTaskInput,
  () => GetExportTaskOutput
);
export var GetImportTask = op(
  n0,
  _GIT,
  {
    [_h]: ["GET", "/importtasks/{taskIdentifier}", 200],
  },
  () => GetImportTaskInput,
  () => GetImportTaskOutput
);
export var ListExportTasks = op(
  n0,
  _LET,
  {
    [_h]: ["GET", "/exporttasks", 200],
  },
  () => ListExportTasksInput,
  () => ListExportTasksOutput
);
export var ListImportTasks = op(
  n0,
  _LIT,
  {
    [_h]: ["GET", "/importtasks", 200],
  },
  () => ListImportTasksInput,
  () => ListImportTasksOutput
);
export var StartExportTask = op(
  n0,
  _SET,
  {
    [_h]: ["POST", "/exporttasks", 201],
  },
  () => StartExportTaskInput,
  () => StartExportTaskOutput
);
export var StartImportTask = op(
  n0,
  _SIT,
  {
    [_h]: ["POST", "/graphs/{graphIdentifier}/importtasks", 201],
  },
  () => StartImportTaskInput,
  () => StartImportTaskOutput
);
