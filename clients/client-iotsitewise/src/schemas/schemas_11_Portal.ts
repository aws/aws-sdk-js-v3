// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cod, _cT, _DP, _DPR, _DPRe, _e, _end, _hQ, _ht, _iT, _m, _MED, _pIo, _PS, _pS, _st, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePortalRequest = struct(
  n0,
  _DPR,
  0,
  [_pIo, _cT],
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
export var DeletePortalResponse = struct(n0, _DPRe, 0, [_pS], [() => PortalStatus]);
export var MonitorErrorDetails = struct(n0, _MED, 0, [_cod, _m], [0, 0]);
export var PortalStatus = struct(n0, _PS, 0, [_st, _e], [0, () => MonitorErrorDetails]);
export var DeletePortal = op(
  n0,
  _DP,
  {
    [_ht]: ["DELETE", "/portals/{portalId}", 202],
    [_end]: ["monitor."],
  },
  () => DeletePortalRequest,
  () => DeletePortalResponse
);
