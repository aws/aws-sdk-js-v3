// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _eD, _eDTr, _EE, _EED, _eID, _ETE, _ht, _i, _LEE, _LEER, _LEERi, _mR, _nT, _rE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ExportErrorData = struct(n0, _EED, 0, [_rE], [0]);
export var ExportTaskError = struct(n0, _ETE, 0, [_eDTr, _eD], [0, () => ExportErrorData]);
export var ListExportErrorsRequest = struct(n0, _LEER, 0, [_eID, _mR, _nT], [0, 1, 0]);
export var ListExportErrorsResponse = struct(n0, _LEERi, 0, [_i, _nT], [() => ExportErrors, 0]);
export var ExportErrors = list(n0, _EE, 0, () => ExportTaskError);
export var ListExportErrors = op(
  n0,
  _LEE,
  {
    [_ht]: ["POST", "/ListExportErrors", 200],
  },
  () => ListExportErrorsRequest,
  () => ListExportErrorsResponse
);
