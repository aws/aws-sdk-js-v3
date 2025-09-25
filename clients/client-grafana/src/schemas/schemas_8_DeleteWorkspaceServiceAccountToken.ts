// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DWSAT, _DWSATR, _DWSATRe, _h, _sAI, _tI, _wI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteWorkspaceServiceAccountTokenRequest = struct(
  n0,
  _DWSATR,
  0,
  [_tI, _sAI, _wI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteWorkspaceServiceAccountTokenResponse = struct(n0, _DWSATRe, 0, [_tI, _sAI, _wI], [0, 0, 0]);
export var DeleteWorkspaceServiceAccountToken = op(
  n0,
  _DWSAT,
  {
    [_h]: ["DELETE", "/workspaces/{workspaceId}/serviceaccounts/{serviceAccountId}/tokens/{tokenId}", 200],
  },
  () => DeleteWorkspaceServiceAccountTokenRequest,
  () => DeleteWorkspaceServiceAccountTokenResponse
);
