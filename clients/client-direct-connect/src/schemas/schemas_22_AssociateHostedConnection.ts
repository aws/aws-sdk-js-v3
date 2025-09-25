// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AHCRs, _AHCs, _cI, _pCI, Connection, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateHostedConnectionRequest = struct(n0, _AHCRs, 0, [_cI, _pCI], [0, 0]);
export var AssociateHostedConnection = op(
  n0,
  _AHCs,
  0,
  () => AssociateHostedConnectionRequest,
  () => Connection
);
