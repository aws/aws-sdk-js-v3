// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  FilterPolicyLimitExceededException as __FilterPolicyLimitExceededException,
  ReplayLimitExceededException as __ReplayLimitExceededException,
  SubscriptionLimitExceededException as __SubscriptionLimitExceededException,
} from "../models/index";
import {
  _AOU,
  _aQE,
  _c,
  _CS,
  _CSI,
  _CSR,
  _E,
  _e,
  _FPLEE,
  _hE,
  _LS,
  _LSBT,
  _LSBTI,
  _LSBTR,
  _LSI,
  _LSR,
  _m,
  _NT,
  _O,
  _Pr,
  _RLEE,
  _S,
  _SA,
  _SL,
  _SLEE,
  _Sub,
  _T,
  _TA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConfirmSubscriptionInput = struct(n0, _CSI, 0, [_TA, _T, _AOU], [0, 0, 0]);
export var ConfirmSubscriptionResponse = struct(n0, _CSR, 0, [_SA], [0]);
export var FilterPolicyLimitExceededException = error(
  n0,
  _FPLEE,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`FilterPolicyLimitExceeded`, 403],
  },
  [_m],
  [0],

  __FilterPolicyLimitExceededException
);
export var ListSubscriptionsByTopicInput = struct(n0, _LSBTI, 0, [_TA, _NT], [0, 0]);
export var ListSubscriptionsByTopicResponse = struct(n0, _LSBTR, 0, [_S, _NT], [() => SubscriptionsList, 0]);
export var ListSubscriptionsInput = struct(n0, _LSI, 0, [_NT], [0]);
export var ListSubscriptionsResponse = struct(n0, _LSR, 0, [_S, _NT], [() => SubscriptionsList, 0]);
export var ReplayLimitExceededException = error(
  n0,
  _RLEE,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`ReplayLimitExceeded`, 403],
  },
  [_m],
  [0],

  __ReplayLimitExceededException
);
export var Subscription = struct(n0, _Sub, 0, [_SA, _O, _Pr, _E, _TA], [0, 0, 0, 0, 0]);
export var SubscriptionLimitExceededException = error(
  n0,
  _SLEE,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`SubscriptionLimitExceeded`, 403],
  },
  [_m],
  [0],

  __SubscriptionLimitExceededException
);
export var SubscriptionsList = list(n0, _SL, 0, () => Subscription);
export var ConfirmSubscription = op(
  n0,
  _CS,
  0,
  () => ConfirmSubscriptionInput,
  () => ConfirmSubscriptionResponse
);
export var ListSubscriptions = op(
  n0,
  _LS,
  0,
  () => ListSubscriptionsInput,
  () => ListSubscriptionsResponse
);
export var ListSubscriptionsByTopic = op(
  n0,
  _LSBT,
  0,
  () => ListSubscriptionsByTopicInput,
  () => ListSubscriptionsByTopicResponse
);
