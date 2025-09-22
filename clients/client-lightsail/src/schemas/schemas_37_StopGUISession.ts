// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _o, _rN, _SGUISRto, _SGUISRtop, _SGUISt, n0, OperationList } from "./schemas_0";

/* eslint no-var: 0 */

export var StopGUISessionRequest = struct(n0, _SGUISRto, 0, [_rN], [0]);
export var StopGUISessionResult = struct(n0, _SGUISRtop, 0, [_o], [() => OperationList]);
export var StopGUISession = op(
  n0,
  _SGUISt,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/stop-gui-session", 200],
  },
  () => StopGUISessionRequest,
  () => StopGUISessionResult
);
