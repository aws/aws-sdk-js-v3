// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _a, _cDT, _d, _end, _h, _lS, _LW, _LWR, _LWRi, _mR, _nTe, _uDT, _wI, _WS, _wS, _WSo, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListWorkspacesRequest = struct(n0, _LWR, 0, [_mR, _nTe], [1, 0]);
export var ListWorkspacesResponse = struct(n0, _LWRi, 0, [_wS, _nTe], [() => WorkspaceSummaries, 0]);
export var WorkspaceSummary = struct(n0, _WS, 0, [_wI, _a, _d, _lS, _cDT, _uDT], [0, 0, 0, 64 | 0, 4, 4]);
export var LinkedServices = 64 | 0;

export var WorkspaceSummaries = list(n0, _WSo, 0, () => WorkspaceSummary);
export var ListWorkspaces = op(
  n0,
  _LW,
  {
    [_h]: ["POST", "/workspaces-list", 200],
    [_end]: ["api."],
  },
  () => ListWorkspacesRequest,
  () => ListWorkspacesResponse
);
