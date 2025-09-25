// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _DAS, _DASR, _DASRe, _h, _RI, _St, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAccountSubscriptionRequest = struct(n0, _DASR, 0, [_AAI], [[0, 1]]);
export var DeleteAccountSubscriptionResponse = struct(n0, _DASRe, 0, [_RI, _St], [0, [1, 32]]);
export var DeleteAccountSubscription = op(
  n0,
  _DAS,
  {
    [_h]: ["DELETE", "/account/{AwsAccountId}", 200],
  },
  () => DeleteAccountSubscriptionRequest,
  () => DeleteAccountSubscriptionResponse
);
