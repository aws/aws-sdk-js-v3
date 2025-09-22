// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DW, _DWR, _DWRe, _end, _h, _m, _wI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteWorkspaceRequest = struct(n0, _DWR, 0, [_wI], [[0, 1]]);
export var DeleteWorkspaceResponse = struct(n0, _DWRe, 0, [_m], [0]);
export var DeleteWorkspace = op(
  n0,
  _DW,
  {
    [_h]: ["DELETE", "/workspaces/{workspaceId}", 200],
    [_end]: ["api."],
  },
  () => DeleteWorkspaceRequest,
  () => DeleteWorkspaceResponse
);
