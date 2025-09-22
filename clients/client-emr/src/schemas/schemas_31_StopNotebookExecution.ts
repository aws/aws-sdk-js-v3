// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _NEI, _SNEIt, _SNEt, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var StopNotebookExecutionInput = struct(n0, _SNEIt, 0, [_NEI], [0]);
export var StopNotebookExecution = op(
  n0,
  _SNEt,
  0,
  () => StopNotebookExecutionInput,
  () => Unit
);
