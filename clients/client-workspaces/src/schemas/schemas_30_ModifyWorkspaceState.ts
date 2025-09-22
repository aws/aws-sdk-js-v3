// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _MWS, _MWSR, _MWSRo, _WI, _WS, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ModifyWorkspaceStateRequest = struct(n0, _MWSR, 0, [_WI, _WS], [0, 0]);
export var ModifyWorkspaceStateResult = struct(n0, _MWSRo, 0, [], []);
export var ModifyWorkspaceState = op(
  n0,
  _MWS,
  0,
  () => ModifyWorkspaceStateRequest,
  () => ModifyWorkspaceStateResult
);
