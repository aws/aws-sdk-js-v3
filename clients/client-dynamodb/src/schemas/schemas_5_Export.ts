// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _EA, _ES, _ESx, _ESxp, _ETxp, _LE, _LEI, _LEO, _MR, _NT, _TA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ExportSummary = struct(n0, _ESx, 0, [_EA, _ES, _ETxp], [0, 0, 0]);
export var ListExportsInput = struct(n0, _LEI, 0, [_TA, _MR, _NT], [0, 1, 0]);
export var ListExportsOutput = struct(n0, _LEO, 0, [_ESxp, _NT], [() => ExportSummaries, 0]);
export var ExportSummaries = list(n0, _ESxp, 0, () => ExportSummary);
export var ListExports = op(
  n0,
  _LE,
  0,
  () => ListExportsInput,
  () => ListExportsOutput
);
