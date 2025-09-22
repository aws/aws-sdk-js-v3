// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aIp,
  _cS,
  _CSa,
  _CSR,
  _CSr,
  _CSRa,
  _CSRr,
  _CSRre,
  _cT,
  _gr,
  _hQ,
  _ht,
  _LS,
  _LSR,
  _LSRi,
  _mRa,
  _nS,
  _nT,
  _pr,
  _sAu,
  _SD,
  _sIu,
  _SP,
  _Su,
  _Sub,
  _sub,
  _t,
  _US,
  _use,
  _USR,
  _USRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CancelSubscriptionRequest = struct(
  n0,
  _CSR,
  0,
  [_aIp, _sIu],
  [
    [0, 1],
    [0, 1],
  ]
);
export var CancelSubscriptionResponse = struct(
  n0,
  _CSRa,
  0,
  [_sAu, _cS, _nS],
  [0, () => SubscriptionDetails, () => SubscriptionDetails]
);
export var CreateSubscriptionRequest = struct(
  n0,
  _CSRr,
  0,
  [_aIp, _pr, _t, _cT],
  [[0, 1], () => SubscriptionPrincipal, 0, [0, 4]]
);
export var CreateSubscriptionResponse = struct(
  n0,
  _CSRre,
  0,
  [_sIu, _sAu, _cS, _nS],
  [0, 0, () => SubscriptionDetails, () => SubscriptionDetails]
);
export var ListSubscriptionsRequest = struct(
  n0,
  _LSR,
  0,
  [_aIp, _nT, _mRa],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListSubscriptionsResponse = struct(n0, _LSRi, 0, [_nT, _sub], [0, () => Subscriptions]);
export var Subscription = struct(
  n0,
  _Su,
  0,
  [_sIu, _sAu, _pr, _cS, _nS],
  [0, 0, () => SubscriptionPrincipal, () => SubscriptionDetails, () => SubscriptionDetails]
);
export var SubscriptionDetails = struct(n0, _SD, 0, [_t], [0]);
export var UpdateSubscriptionRequest = struct(n0, _USR, 0, [_aIp, _sIu, _t], [[0, 1], [0, 1], 0]);
export var UpdateSubscriptionResponse = struct(
  n0,
  _USRp,
  0,
  [_sAu, _cS, _nS],
  [0, () => SubscriptionDetails, () => SubscriptionDetails]
);
export var Subscriptions = list(n0, _Sub, 0, () => Subscription);
export var SubscriptionPrincipal = uni(n0, _SP, 0, [_use, _gr], [0, 0]);
export var CancelSubscription = op(
  n0,
  _CSa,
  {
    [_ht]: ["DELETE", "/applications/{applicationId}/subscriptions/{subscriptionId}", 200],
  },
  () => CancelSubscriptionRequest,
  () => CancelSubscriptionResponse
);
export var CreateSubscription = op(
  n0,
  _CSr,
  {
    [_ht]: ["POST", "/applications/{applicationId}/subscriptions", 200],
  },
  () => CreateSubscriptionRequest,
  () => CreateSubscriptionResponse
);
export var ListSubscriptions = op(
  n0,
  _LS,
  {
    [_ht]: ["GET", "/applications/{applicationId}/subscriptions", 200],
  },
  () => ListSubscriptionsRequest,
  () => ListSubscriptionsResponse
);
export var UpdateSubscription = op(
  n0,
  _US,
  {
    [_ht]: ["PUT", "/applications/{applicationId}/subscriptions/{subscriptionId}", 200],
  },
  () => UpdateSubscriptionRequest,
  () => UpdateSubscriptionResponse
);
