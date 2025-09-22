// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DWAK, _DWAKR, _DWAKRe, _h, _kN, _wI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteWorkspaceApiKeyRequest = struct(
  n0,
  _DWAKR,
  0,
  [_kN, _wI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteWorkspaceApiKeyResponse = struct(n0, _DWAKRe, 0, [_kN, _wI], [0, 0]);
export var DeleteWorkspaceApiKey = op(
  n0,
  _DWAK,
  {
    [_h]: ["DELETE", "/workspaces/{workspaceId}/apikeys/{keyName}", 200],
  },
  () => DeleteWorkspaceApiKeyRequest,
  () => DeleteWorkspaceApiKeyResponse
);
