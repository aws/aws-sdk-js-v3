// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _EI, _SAERto, _SAERtop, _SAEt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopArchiveExportRequest = struct(n0, _SAERto, 0, [_EI], [0]);
export var StopArchiveExportResponse = struct(n0, _SAERtop, 0, [], []);
export var StopArchiveExport = op(
  n0,
  _SAEt,
  0,
  () => StopArchiveExportRequest,
  () => StopArchiveExportResponse
);
