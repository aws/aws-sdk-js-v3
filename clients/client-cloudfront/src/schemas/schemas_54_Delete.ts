// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { CannotDeleteEntityWhileInUse as __CannotDeleteEntityWhileInUse } from "../models/index";
import { _c, _CDEWIU, _DCG, _DCGR, _e, _h, _hE, _hH, _Id, _IM, _IM_, _M, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var CannotDeleteEntityWhileInUse = error(
  n0,
  _CDEWIU,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __CannotDeleteEntityWhileInUse
);
export var DeleteConnectionGroupRequest = struct(
  n0,
  _DCGR,
  0,
  [_Id, _IM],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _IM_,
      },
    ],
  ]
);
export var DeleteConnectionGroup = op(
  n0,
  _DCG,
  {
    [_h]: ["DELETE", "/2020-05-31/connection-group/{Id}", 204],
  },
  () => DeleteConnectionGroupRequest,
  () => Unit
);
