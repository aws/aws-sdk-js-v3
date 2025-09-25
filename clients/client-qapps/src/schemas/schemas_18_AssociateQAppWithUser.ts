// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _AQAWU, _AQAWUI, _h, _hH, _iI, _ii, n0 } from "./schemas_0";
import { Unit } from "./schemas_7_App";

/* eslint no-var: 0 */

export var AssociateQAppWithUserInput = struct(
  n0,
  _AQAWUI,
  0,
  [_iI, _aI],
  [
    [
      0,
      {
        [_hH]: _ii,
      },
    ],
    0,
  ]
);
export var AssociateQAppWithUser = op(
  n0,
  _AQAWU,
  {
    [_h]: ["POST", "/apps.install", 200],
  },
  () => AssociateQAppWithUserInput,
  () => Unit
);
