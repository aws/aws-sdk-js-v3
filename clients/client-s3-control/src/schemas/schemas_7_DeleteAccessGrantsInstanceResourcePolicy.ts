// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _DAGIRP, _DAGIRPR, _h, _hCR, _hH, _hL, _xaai, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAccessGrantsInstanceResourcePolicyRequest = struct(
  n0,
  _DAGIRPR,
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
export var DeleteAccessGrantsInstanceResourcePolicy = op(
  n0,
  _DAGIRP,
  {
    [_h]: ["DELETE", "/v20180820/accessgrantsinstance/resourcepolicy", 200],
    [_hCR]: 1,
  },
  () => DeleteAccessGrantsInstanceResourcePolicyRequest,
  () => Unit
);
