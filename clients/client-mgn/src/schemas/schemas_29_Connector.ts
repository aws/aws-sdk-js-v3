// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cID, _DC, _DCR, _ht, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteConnectorRequest = struct(n0, _DCR, 0, [_cID], [0]);
export var DeleteConnector = op(
  n0,
  _DC,
  {
    [_ht]: ["POST", "/DeleteConnector", 204],
  },
  () => DeleteConnectorRequest,
  () => Unit
);
