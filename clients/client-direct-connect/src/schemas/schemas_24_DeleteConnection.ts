// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cI, _DC, _DCR, Connection, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteConnectionRequest = struct(n0, _DCR, 0, [_cI], [0]);
export var DeleteConnection = op(
  n0,
  _DC,
  0,
  () => DeleteConnectionRequest,
  () => Connection
);
