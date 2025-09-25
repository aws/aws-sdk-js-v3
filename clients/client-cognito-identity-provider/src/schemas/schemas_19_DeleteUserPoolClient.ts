// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CI, _DUPC, _DUPCR, _UPI, ClientIdType, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteUserPoolClientRequest = struct(n0, _DUPCR, 0, [_UPI, _CI], [0, [() => ClientIdType, 0]]);
export var DeleteUserPoolClient = op(
  n0,
  _DUPC,
  0,
  () => DeleteUserPoolClientRequest,
  () => Unit
);
