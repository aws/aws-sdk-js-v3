// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AA, _AAR, _AARp, _AI, _OR, _RF, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ApproveAssignmentRequest = struct(n0, _AAR, 0, [_AI, _RF, _OR], [0, 0, 2]);
export var ApproveAssignmentResponse = struct(n0, _AARp, 0, [], []);
export var ApproveAssignment = op(
  n0,
  _AA,
  2,
  () => ApproveAssignmentRequest,
  () => ApproveAssignmentResponse
);
