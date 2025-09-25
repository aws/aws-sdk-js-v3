// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { UnknownSubscriptionException as __UnknownSubscriptionException } from "../models/index";
import { _c, _DAS, _DASR, _DASRe, _e, _hE, _M, _SA, _USE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAnomalySubscriptionRequest = struct(n0, _DASR, 0, [_SA], [0]);
export var DeleteAnomalySubscriptionResponse = struct(n0, _DASRe, 0, [], []);
export var UnknownSubscriptionException = error(
  n0,
  _USE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __UnknownSubscriptionException
);
export var DeleteAnomalySubscription = op(
  n0,
  _DAS,
  0,
  () => DeleteAnomalySubscriptionRequest,
  () => DeleteAnomalySubscriptionResponse
);
