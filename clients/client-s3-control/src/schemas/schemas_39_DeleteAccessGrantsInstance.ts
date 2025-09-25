// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _DAGI, _DAGIR, _h, _hCR, _hH, _hL, _xaai, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAccessGrantsInstanceRequest = struct(
  n0,
  _DAGIR,
  0,
  [_AI],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
  ]
);
export var DeleteAccessGrantsInstance = op(
  n0,
  _DAGI,
  {
    [_h]: ["DELETE", "/v20180820/accessgrantsinstance", 200],
    [_hCR]: 1,
  },
  () => DeleteAccessGrantsInstanceRequest,
  () => Unit
);
