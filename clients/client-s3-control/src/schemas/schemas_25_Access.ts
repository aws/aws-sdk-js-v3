// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AGLI, _AI, _DAGL, _DAGLR, _h, _hCR, _hH, _hL, _xaai, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAccessGrantsLocationRequest = struct(
  n0,
  _DAGLR,
  0,
  [_AI, _AGLI],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
  ]
);
export var DeleteAccessGrantsLocation = op(
  n0,
  _DAGL,
  {
    [_h]: ["DELETE", "/v20180820/accessgrantsinstance/location/{AccessGrantsLocationId}", 200],
    [_hCR]: 1,
  },
  () => DeleteAccessGrantsLocationRequest,
  () => Unit
);
