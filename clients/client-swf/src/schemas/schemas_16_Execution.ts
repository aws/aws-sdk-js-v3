// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _do, _RCWE, _RCWEI, _rI, _wI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var RequestCancelWorkflowExecutionInput = struct(n0, _RCWEI, 0, [_do, _wI, _rI], [0, 0, 0]);
export var RequestCancelWorkflowExecution = op(
  n0,
  _RCWE,
  0,
  () => RequestCancelWorkflowExecutionInput,
  () => Unit
);
