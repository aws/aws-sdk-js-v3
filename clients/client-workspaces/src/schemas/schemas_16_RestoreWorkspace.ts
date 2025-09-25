// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _RWes, _RWRes, _RWRest, _WI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RestoreWorkspaceRequest = struct(n0, _RWRes, 0, [_WI], [0]);
export var RestoreWorkspaceResult = struct(n0, _RWRest, 0, [], []);
export var RestoreWorkspace = op(
  n0,
  _RWes,
  0,
  () => RestoreWorkspaceRequest,
  () => RestoreWorkspaceResult
);
