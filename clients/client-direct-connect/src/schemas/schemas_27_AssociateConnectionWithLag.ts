// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ACWL, _ACWLR, _cI, _lI, Connection, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateConnectionWithLagRequest = struct(n0, _ACWLR, 0, [_cI, _lI], [0, 0]);
export var AssociateConnectionWithLag = op(
  n0,
  _ACWL,
  0,
  () => AssociateConnectionWithLagRequest,
  () => Connection
);
