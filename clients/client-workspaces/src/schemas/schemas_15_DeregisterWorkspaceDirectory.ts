// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DI, _DWD, _DWDR, _DWDRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeregisterWorkspaceDirectoryRequest = struct(n0, _DWDR, 0, [_DI], [0]);
export var DeregisterWorkspaceDirectoryResult = struct(n0, _DWDRe, 0, [], []);
export var DeregisterWorkspaceDirectory = op(
  n0,
  _DWD,
  0,
  () => DeregisterWorkspaceDirectoryRequest,
  () => DeregisterWorkspaceDirectoryResult
);
