// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  InvalidSubscriptionStateFault as __InvalidSubscriptionStateFault,
  SubscriptionNotFoundFault as __SubscriptionNotFoundFault,
} from "../models/index";
import { _aQE, _c, _DES, _DESM, _e, _hE, _ISSF, _m, _SN, _SNFFu, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEventSubscriptionMessage = struct(n0, _DESM, 0, [_SN], [0]);
export var InvalidSubscriptionStateFault = error(
  n0,
  _ISSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidSubscriptionStateFault`, 400],
  },
  [_m],
  [0],

  __InvalidSubscriptionStateFault
);
export var SubscriptionNotFoundFault = error(
  n0,
  _SNFFu,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`SubscriptionNotFound`, 404],
  },
  [_m],
  [0],

  __SubscriptionNotFoundFault
);
export var DeleteEventSubscription = op(
  n0,
  _DES,
  0,
  () => DeleteEventSubscriptionMessage,
  () => Unit
);
