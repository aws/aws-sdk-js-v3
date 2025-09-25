// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AA, _AAA, _AAAR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateAdminAccountRequest = struct(n0, _AAAR, 0, [_AA], [0]);
export var AssociateAdminAccount = op(
  n0,
  _AAA,
  0,
  () => AssociateAdminAccountRequest,
  () => Unit
);
