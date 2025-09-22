// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CSBSE, _D, _DI, _LC, _SEI, _SSE, _SSER, _SSERt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StartSchemaExtensionRequest = struct(n0, _SSER, 0, [_DI, _CSBSE, _LC, _D], [0, 2, 0, 0]);
export var StartSchemaExtensionResult = struct(n0, _SSERt, 0, [_SEI], [0]);
export var StartSchemaExtension = op(
  n0,
  _SSE,
  0,
  () => StartSchemaExtensionRequest,
  () => StartSchemaExtensionResult
);
