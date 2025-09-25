// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CSE, _CSER, _CSERa, _DI, _SEI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelSchemaExtensionRequest = struct(n0, _CSER, 0, [_DI, _SEI], [0, 0]);
export var CancelSchemaExtensionResult = struct(n0, _CSERa, 0, [], []);
export var CancelSchemaExtension = op(
  n0,
  _CSE,
  0,
  () => CancelSchemaExtensionRequest,
  () => CancelSchemaExtensionResult
);
