// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aIp, _DPi, _DPRi, _DPRis, _ht, _sI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociatePermissionRequest = struct(
  n0,
  _DPRi,
  0,
  [_aIp, _sI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DisassociatePermissionResponse = struct(n0, _DPRis, 0, [], []);
export var DisassociatePermission = op(
  n0,
  _DPi,
  {
    [_ht]: ["DELETE", "/applications/{applicationId}/policy/{statementId}", 200],
  },
  () => DisassociatePermissionRequest,
  () => DisassociatePermissionResponse
);
