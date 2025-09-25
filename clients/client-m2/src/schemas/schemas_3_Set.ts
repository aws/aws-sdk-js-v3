// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aI,
  _DSES,
  _DSIS,
  _f,
  _GDSET,
  _GDSETR,
  _GDSETRe,
  _GDSIT,
  _GDSITR,
  _GDSITRe,
  _h,
  _iP,
  _kKA,
  _p,
  _s,
  _sR,
  _su,
  _sum,
  _tI,
  _to,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DataSetExportSummary = struct(n0, _DSES, 0, [_to, _su, _f, _p, _iP], [1, 1, 1, 1, 1]);
export var DataSetImportSummary = struct(n0, _DSIS, 0, [_to, _su, _f, _p, _iP], [1, 1, 1, 1, 1]);
export var GetDataSetExportTaskRequest = struct(
  n0,
  _GDSETR,
  0,
  [_aI, _tI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetDataSetExportTaskResponse = struct(
  n0,
  _GDSETRe,
  0,
  [_tI, _s, _sum, _sR, _kKA],
  [0, 0, () => DataSetExportSummary, 0, 0]
);
export var GetDataSetImportTaskRequest = struct(
  n0,
  _GDSITR,
  0,
  [_aI, _tI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetDataSetImportTaskResponse = struct(n0, _GDSITRe, 0, [_tI, _s, _sum], [0, 0, () => DataSetImportSummary]);
export var GetDataSetExportTask = op(
  n0,
  _GDSET,
  {
    [_h]: ["GET", "/applications/{applicationId}/dataset-export-tasks/{taskId}", 200],
  },
  () => GetDataSetExportTaskRequest,
  () => GetDataSetExportTaskResponse
);
export var GetDataSetImportTask = op(
  n0,
  _GDSIT,
  {
    [_h]: ["GET", "/applications/{applicationId}/dataset-import-tasks/{taskId}", 200],
  },
  () => GetDataSetImportTaskRequest,
  () => GetDataSetImportTaskResponse
);
