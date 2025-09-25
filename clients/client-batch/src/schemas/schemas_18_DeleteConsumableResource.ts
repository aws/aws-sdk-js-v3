// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cRo, _DCR, _DCRR, _DCRRe, _ht, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteConsumableResourceRequest = struct(n0, _DCRR, 0, [_cRo], [0]);
export var DeleteConsumableResourceResponse = struct(n0, _DCRRe, 0, [], []);
export var DeleteConsumableResource = op(
  n0,
  _DCR,
  {
    [_ht]: ["POST", "/v1/deleteconsumableresource", 200],
  },
  () => DeleteConsumableResourceRequest,
  () => DeleteConsumableResourceResponse
);
