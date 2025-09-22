// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CTM, _CTMR, _hQ, _ht, _mI, _tMA, _vI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelTrainedModelRequest = struct(
  n0,
  _CTMR,
  0,
  [_mI, _tMA, _vI],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _vI,
      },
    ],
  ]
);
export var CancelTrainedModel = op(
  n0,
  _CTM,
  {
    [_ht]: ["PATCH", "/memberships/{membershipIdentifier}/trained-models/{trainedModelArn}", 200],
  },
  () => CancelTrainedModelRequest,
  () => Unit
);
