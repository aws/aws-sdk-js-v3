// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DFS, _DFSI, _DFSO, _FD, _FSARN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteFileShareInput = struct(n0, _DFSI, 0, [_FSARN, _FD], [0, 2]);
export var DeleteFileShareOutput = struct(n0, _DFSO, 0, [_FSARN], [0]);
export var DeleteFileShare = op(
  n0,
  _DFS,
  0,
  () => DeleteFileShareInput,
  () => DeleteFileShareOutput
);
