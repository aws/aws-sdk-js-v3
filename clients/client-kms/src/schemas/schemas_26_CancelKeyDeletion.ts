// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CKD, _CKDR, _CKDRa, _KI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelKeyDeletionRequest = struct(n0, _CKDR, 0, [_KI], [0]);
export var CancelKeyDeletionResponse = struct(n0, _CKDRa, 0, [_KI], [0]);
export var CancelKeyDeletion = op(
  n0,
  _CKD,
  0,
  () => CancelKeyDeletionRequest,
  () => CancelKeyDeletionResponse
);
