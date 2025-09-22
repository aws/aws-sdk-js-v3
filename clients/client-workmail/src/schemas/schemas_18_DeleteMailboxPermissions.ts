// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMP, _DMPR, _DMPRe, _EI, _GIr, _OI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMailboxPermissionsRequest = struct(n0, _DMPR, 0, [_OI, _EI, _GIr], [0, 0, 0]);
export var DeleteMailboxPermissionsResponse = struct(n0, _DMPRe, 0, [], []);
export var DeleteMailboxPermissions = op(
  n0,
  _DMP,
  2,
  () => DeleteMailboxPermissionsRequest,
  () => DeleteMailboxPermissionsResponse
);
