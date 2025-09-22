// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cT, _DRP, _DRPR, _h, _hQ, _iT, _rIe, _wI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteResourcePolicyRequest = struct(
  n0,
  _DRPR,
  0,
  [_wI, _cT, _rIe],
  [
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
    [
      0,
      {
        [_hQ]: _rIe,
      },
    ],
  ]
);
export var DeleteResourcePolicy = op(
  n0,
  _DRP,
  {
    [_h]: ["DELETE", "/workspaces/{workspaceId}/policy", 202],
  },
  () => DeleteResourcePolicyRequest,
  () => Unit
);
