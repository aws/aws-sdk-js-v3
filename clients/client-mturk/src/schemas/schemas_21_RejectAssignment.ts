// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _RAej, _RAR, _RARe, _RF, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RejectAssignmentRequest = struct(n0, _RAR, 0, [_AI, _RF], [0, 0]);
export var RejectAssignmentResponse = struct(n0, _RARe, 0, [], []);
export var RejectAssignment = op(
  n0,
  _RAej,
  2,
  () => RejectAssignmentRequest,
  () => RejectAssignmentResponse
);
