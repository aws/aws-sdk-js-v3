// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AGI, _AI, _DAG, _DAGR, _h, _hCR, _hH, _hL, _xaai, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAccessGrantRequest = struct(
  n0,
  _DAGR,
  0,
  [_AI, _AGI],
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
export var DeleteAccessGrant = op(
  n0,
  _DAG,
  {
    [_h]: ["DELETE", "/v20180820/accessgrantsinstance/grant/{AccessGrantId}", 200],
    [_hCR]: 1,
  },
  () => DeleteAccessGrantRequest,
  () => Unit
);
