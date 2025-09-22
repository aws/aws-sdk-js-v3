// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _dR, _DSDS, _DSDSR, _eQN, _xN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSpotDatafeedSubscriptionRequest = struct(
  n0,
  _DSDSR,
  0,
  [_DR],
  [
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var DeleteSpotDatafeedSubscription = op(
  n0,
  _DSDS,
  0,
  () => DeleteSpotDatafeedSubscriptionRequest,
  () => Unit
);
