// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _ET,
  _GPFE,
  _GPFEI,
  _GPFEO,
  _GPFI,
  _GPFII,
  _GPFIO,
  _IT,
  _KMT,
  _PVUT,
  _SKA,
  _SKC,
  _SKCC,
  _WKA,
  _WKCC,
  _WKCr,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetParametersForExportInput = struct(n0, _GPFEI, 0, [_KMT, _SKA], [0, 0]);
export var GetParametersForExportOutput = struct(n0, _GPFEO, 0, [_SKC, _SKCC, _SKA, _ET, _PVUT], [0, 0, 0, 0, 4]);
export var GetParametersForImportInput = struct(n0, _GPFII, 0, [_KMT, _WKA], [0, 0]);
export var GetParametersForImportOutput = struct(n0, _GPFIO, 0, [_WKCr, _WKCC, _WKA, _IT, _PVUT], [0, 0, 0, 0, 4]);
export var GetParametersForExport = op(
  n0,
  _GPFE,
  0,
  () => GetParametersForExportInput,
  () => GetParametersForExportOutput
);
export var GetParametersForImport = op(
  n0,
  _GPFI,
  0,
  () => GetParametersForImportInput,
  () => GetParametersForImportOutput
);
