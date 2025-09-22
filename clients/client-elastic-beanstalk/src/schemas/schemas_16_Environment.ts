// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AEOR, _AEORM, _EN, _OR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateEnvironmentOperationsRoleMessage = struct(n0, _AEORM, 0, [_EN, _OR], [0, 0]);
export var AssociateEnvironmentOperationsRole = op(
  n0,
  _AEOR,
  0,
  () => AssociateEnvironmentOperationsRoleMessage,
  () => Unit
);
