// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DAA, _DAAR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateAdminAccountRequest = struct(n0, _DAAR, 0, [], []);
export var DisassociateAdminAccount = op(
  n0,
  _DAA,
  0,
  () => DisassociateAdminAccountRequest,
  () => Unit
);
