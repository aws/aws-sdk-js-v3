// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _EI, _GIr, _OI, _PMP, _PMPR, _PMPRu, _PV, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PutMailboxPermissionsRequest = struct(n0, _PMPR, 0, [_OI, _EI, _GIr, _PV], [0, 0, 0, 64 | 0]);
export var PutMailboxPermissionsResponse = struct(n0, _PMPRu, 0, [], []);
export var PermissionValues = 64 | 0;

export var PutMailboxPermissions = op(
  n0,
  _PMP,
  2,
  () => PutMailboxPermissionsRequest,
  () => PutMailboxPermissionsResponse
);
