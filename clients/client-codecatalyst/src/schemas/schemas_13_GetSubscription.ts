// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aAN, _GSe, _GSRet, _GSRetu, _ht, _pSST, _pST, _sN, _sTu, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetSubscriptionRequest = struct(n0, _GSRet, 0, [_sN], [[0, 1]]);
export var GetSubscriptionResponse = struct(n0, _GSRetu, 0, [_sTu, _aAN, _pST, _pSST], [0, 0, 0, 5]);
export var GetSubscription = op(
  n0,
  _GSe,
  {
    [_ht]: ["GET", "/v1/spaces/{spaceName}/subscription", 200],
  },
  () => GetSubscriptionRequest,
  () => GetSubscriptionResponse
);
