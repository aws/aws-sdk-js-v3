// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _LSP, _LSPR, _LSPRi, _MR, _N, _NT, _SP, _SPL, _SPt, _St, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListStreamProcessorsRequest = struct(n0, _LSPR, 0, [_NT, _MR], [0, 1]);
export var ListStreamProcessorsResponse = struct(n0, _LSPRi, 0, [_NT, _SP], [0, () => StreamProcessorList]);
export var StreamProcessor = struct(n0, _SPt, 0, [_N, _St], [0, 0]);
export var StreamProcessorList = list(n0, _SPL, 0, () => StreamProcessor);
export var ListStreamProcessors = op(
  n0,
  _LSP,
  0,
  () => ListStreamProcessorsRequest,
  () => ListStreamProcessorsResponse
);
