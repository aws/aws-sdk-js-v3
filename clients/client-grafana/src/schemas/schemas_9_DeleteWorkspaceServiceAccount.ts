// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DWSA, _DWSAR, _DWSARe, _h, _sAI, _wI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteWorkspaceServiceAccountRequest = struct(
  n0,
  _DWSAR,
  0,
  [_sAI, _wI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteWorkspaceServiceAccountResponse = struct(n0, _DWSARe, 0, [_sAI, _wI], [0, 0]);
export var DeleteWorkspaceServiceAccount = op(
  n0,
  _DWSA,
  {
    [_h]: ["DELETE", "/workspaces/{workspaceId}/serviceaccounts/{serviceAccountId}", 200],
  },
  () => DeleteWorkspaceServiceAccountRequest,
  () => DeleteWorkspaceServiceAccountResponse
);
