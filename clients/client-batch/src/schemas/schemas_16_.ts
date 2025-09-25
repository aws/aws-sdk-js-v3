// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cRA, _cRN, _cRo, _cT, _ht, _ope, _q, _tQ, _UCR, _UCRR, _UCRRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateConsumableResourceRequest = struct(n0, _UCRR, 0, [_cRo, _ope, _q, _cT], [0, 0, 1, [0, 4]]);
export var UpdateConsumableResourceResponse = struct(n0, _UCRRp, 0, [_cRN, _cRA, _tQ], [0, 0, 1]);
export var UpdateConsumableResource = op(
  n0,
  _UCR,
  {
    [_ht]: ["POST", "/v1/updateconsumableresource", 200],
  },
  () => UpdateConsumableResourceRequest,
  () => UpdateConsumableResourceResponse
);
