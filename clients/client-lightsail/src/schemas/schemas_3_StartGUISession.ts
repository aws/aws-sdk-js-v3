// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _o, _rN, _SGUIS, _SGUISR, _SGUISRt, n0, OperationList } from "./schemas_0";

/* eslint no-var: 0 */

export var StartGUISessionRequest = struct(n0, _SGUISR, 0, [_rN], [0]);
export var StartGUISessionResult = struct(n0, _SGUISRt, 0, [_o], [() => OperationList]);
export var StartGUISession = op(
  n0,
  _SGUIS,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/start-gui-session", 200],
  },
  () => StartGUISessionRequest,
  () => StartGUISessionResult
);
