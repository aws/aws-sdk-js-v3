// smithy-typescript generated code
import { error, list, op, struct, struct as uni } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import {
  _aI,
  _c,
  _CDSET,
  _CDSETR,
  _CDSETRr,
  _cTl,
  _dN,
  _dSat,
  _DSEC,
  _DSEI,
  _DSEL,
  _e,
  _eC,
  _EL,
  _eL,
  _h,
  _hE,
  _kKI,
  _m,
  _qC,
  _rI,
  _rT,
  _sCe,
  _sL,
  _SQEE,
  _tI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateDataSetExportTaskRequest = struct(
  n0,
  _CDSETR,
  0,
  [_aI, _eC, _cTl, _kKI],
  [[0, 1], () => DataSetExportConfig, [0, 4], 0]
);
export var CreateDataSetExportTaskResponse = struct(n0, _CDSETRr, 0, [_tI], [0]);
export var DataSetExportItem = struct(n0, _DSEI, 0, [_dN, _eL], [0, () => ExternalLocation]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m, _rI, _rT, _sCe, _qC],
  [0, 0, 0, 0, 0],

  __ServiceQuotaExceededException
);
export var DataSetExportList = list(n0, _DSEL, 0, () => DataSetExportItem);
export var DataSetExportConfig = uni(n0, _DSEC, 0, [_sL, _dSat], [0, () => DataSetExportList]);
export var ExternalLocation = uni(n0, _EL, 0, [_sL], [0]);
export var CreateDataSetExportTask = op(
  n0,
  _CDSET,
  {
    [_h]: ["POST", "/applications/{applicationId}/dataset-export-task", 200],
  },
  () => CreateDataSetExportTaskRequest,
  () => CreateDataSetExportTaskResponse
);
