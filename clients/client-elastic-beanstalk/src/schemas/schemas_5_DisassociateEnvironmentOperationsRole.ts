// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DEOR, _DEORM, _EN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateEnvironmentOperationsRoleMessage = struct(n0, _DEORM, 0, [_EN], [0]);
export var DisassociateEnvironmentOperationsRole = op(
  n0,
  _DEOR,
  0,
  () => DisassociateEnvironmentOperationsRoleMessage,
  () => Unit
);
