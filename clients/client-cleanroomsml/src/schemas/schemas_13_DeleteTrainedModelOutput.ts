// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DTMO, _DTMOR, _hQ, _ht, _mI, _tMA, _vI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTrainedModelOutputRequest = struct(
  n0,
  _DTMOR,
  0,
  [_tMA, _mI, _vI],
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
export var DeleteTrainedModelOutput = op(
  n0,
  _DTMO,
  {
    [_ht]: ["DELETE", "/memberships/{membershipIdentifier}/trained-models/{trainedModelArn}", 200],
  },
  () => DeleteTrainedModelOutputRequest,
  () => Unit
);
