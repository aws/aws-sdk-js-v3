// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cI, _DCFL, _DCFLR, _lI, Connection, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateConnectionFromLagRequest = struct(n0, _DCFLR, 0, [_cI, _lI], [0, 0]);
export var DisassociateConnectionFromLag = op(
  n0,
  _DCFL,
  0,
  () => DisassociateConnectionFromLagRequest,
  () => Connection
);
