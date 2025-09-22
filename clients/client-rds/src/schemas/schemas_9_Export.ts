// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ExportTaskNotFoundFault as __ExportTaskNotFoundFault,
  InvalidExportTaskStateFault as __InvalidExportTaskStateFault,
} from "../models/index";
import {
  _aQE,
  _c,
  _CETa,
  _CETM,
  _e,
  _EO,
  _ETI,
  _ETNFF,
  _ETx,
  _FCa,
  _hE,
  _IETSF,
  _IRA,
  _KKI,
  _m,
  _PP,
  _SA,
  _SBu,
  _SP,
  _St,
  _STnap,
  _STo,
  _TEDIGB,
  _TET,
  _TSTas,
  _WM,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CancelExportTaskMessage = struct(n0, _CETM, 0, [_ETI], [0]);
export var ExportTask = struct(
  n0,
  _ETx,
  0,
  [_ETI, _SA, _EO, _STnap, _TSTas, _TET, _SBu, _SP, _IRA, _KKI, _St, _PP, _TEDIGB, _FCa, _WM, _STo],
  [0, 0, 64 | 0, 4, 4, 4, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]
);
export var ExportTaskNotFoundFault = error(
  n0,
  _ETNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ExportTaskNotFound`, 404],
  },
  [_m],
  [0],

  __ExportTaskNotFoundFault
);
export var InvalidExportTaskStateFault = error(
  n0,
  _IETSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidExportTaskStateFault`, 400],
  },
  [_m],
  [0],

  __InvalidExportTaskStateFault
);
export var CancelExportTask = op(
  n0,
  _CETa,
  0,
  () => CancelExportTaskMessage,
  () => ExportTask
);
