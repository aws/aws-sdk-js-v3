// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _DAPP, _DAPPR, _h, _hH, _hL, _N, _xaai, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAccessPointPolicyRequest = struct(
  n0,
  _DAPPR,
  0,
  [_AI, _N],
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
export var DeleteAccessPointPolicy = op(
  n0,
  _DAPP,
  {
    [_h]: ["DELETE", "/v20180820/accesspoint/{Name}/policy", 200],
  },
  () => DeleteAccessPointPolicyRequest,
  () => Unit
);
