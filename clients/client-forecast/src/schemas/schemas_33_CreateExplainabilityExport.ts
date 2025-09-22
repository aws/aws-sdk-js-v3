// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CEE, _CEER, _CEERr, _De, _EA, _EEA, _EEN, _F, _Ta, n0, Tags } from "./schemas_0";
import { DataDestination } from "./schemas_44_Export";

/* eslint no-var: 0 */

export var CreateExplainabilityExportRequest = struct(
  n0,
  _CEER,
  0,
  [_EEN, _EA, _De, _Ta, _F],
  [0, 0, () => DataDestination, [() => Tags, 0], 0]
);
export var CreateExplainabilityExportResponse = struct(n0, _CEERr, 0, [_EEA], [0]);
export var CreateExplainabilityExport = op(
  n0,
  _CEE,
  0,
  () => CreateExplainabilityExportRequest,
  () => CreateExplainabilityExportResponse
);
