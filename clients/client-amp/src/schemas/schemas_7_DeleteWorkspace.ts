// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cT, _DW, _DWR, _h, _hQ, _iT, _wI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteWorkspaceRequest = struct(
  n0,
  _DWR,
  0,
  [_wI, _cT],
  [
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
  ]
);
export var DeleteWorkspace = op(
  n0,
  _DW,
  {
    [_h]: ["DELETE", "/workspaces/{workspaceId}", 202],
  },
  () => DeleteWorkspaceRequest,
  () => Unit
);
