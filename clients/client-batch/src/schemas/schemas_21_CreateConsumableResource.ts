// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CCR, _CCRR, _CCRRr, _cRA, _cRN, _ht, _rT, _t, _tQ, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateConsumableResourceRequest = struct(n0, _CCRR, 0, [_cRN, _tQ, _rT, _t], [0, 1, 0, 128 | 0]);
export var CreateConsumableResourceResponse = struct(n0, _CCRRr, 0, [_cRN, _cRA], [0, 0]);
export var CreateConsumableResource = op(
  n0,
  _CCR,
  {
    [_ht]: ["POST", "/v1/createconsumableresource", 200],
  },
  () => CreateConsumableResourceRequest,
  () => CreateConsumableResourceResponse
);
