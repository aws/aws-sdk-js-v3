// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _BES,
  _bES,
  _bI,
  _BLES,
  _bLES,
  _bV,
  _cDT,
  _CER,
  _CEr,
  _CERr,
  _CVES,
  _cVES,
  _DE,
  _DER,
  _DERe,
  _eI,
  _ERS,
  _eSx,
  _fF,
  _fP,
  _h,
  _lI,
  _lUDT,
  _rS,
  _TSES,
  _tSES,
  _tSI,
  _UE,
  _UER,
  _UERp,
  n0,
} from "./schemas_0";
import { ImportExportFilePassword } from "./schemas_37_Export";

/* eslint no-var: 0 */

export var BotExportSpecification = struct(n0, _BES, 0, [_bI, _bV], [0, 0]);
export var BotLocaleExportSpecification = struct(n0, _BLES, 0, [_bI, _bV, _lI], [0, 0, 0]);
export var CreateExportRequest = struct(
  n0,
  _CER,
  0,
  [_rS, _fF, _fP],
  [() => ExportResourceSpecification, 0, [() => ImportExportFilePassword, 0]]
);
export var CreateExportResponse = struct(
  n0,
  _CERr,
  0,
  [_eI, _rS, _fF, _eSx, _cDT],
  [0, () => ExportResourceSpecification, 0, 0, 4]
);
export var CustomVocabularyExportSpecification = struct(n0, _CVES, 0, [_bI, _bV, _lI], [0, 0, 0]);
export var DeleteExportRequest = struct(n0, _DER, 0, [_eI], [[0, 1]]);
export var DeleteExportResponse = struct(n0, _DERe, 0, [_eI, _eSx], [0, 0]);
export var ExportResourceSpecification = struct(
  n0,
  _ERS,
  0,
  [_bES, _bLES, _cVES, _tSES],
  [
    () => BotExportSpecification,
    () => BotLocaleExportSpecification,
    () => CustomVocabularyExportSpecification,
    () => TestSetExportSpecification,
  ]
);
export var TestSetExportSpecification = struct(n0, _TSES, 0, [_tSI], [0]);
export var UpdateExportRequest = struct(
  n0,
  _UER,
  0,
  [_eI, _fP],
  [
    [0, 1],
    [() => ImportExportFilePassword, 0],
  ]
);
export var UpdateExportResponse = struct(
  n0,
  _UERp,
  0,
  [_eI, _rS, _fF, _eSx, _cDT, _lUDT],
  [0, () => ExportResourceSpecification, 0, 0, 4, 4]
);
export var CreateExport = op(
  n0,
  _CEr,
  {
    [_h]: ["PUT", "/exports", 202],
  },
  () => CreateExportRequest,
  () => CreateExportResponse
);
export var DeleteExport = op(
  n0,
  _DE,
  {
    [_h]: ["DELETE", "/exports/{exportId}", 202],
  },
  () => DeleteExportRequest,
  () => DeleteExportResponse
);
export var UpdateExport = op(
  n0,
  _UE,
  {
    [_h]: ["PUT", "/exports/{exportId}", 202],
  },
  () => UpdateExportRequest,
  () => UpdateExportResponse
);
