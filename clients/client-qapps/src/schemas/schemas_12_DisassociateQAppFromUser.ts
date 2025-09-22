// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _DQAFU, _DQAFUI, _h, _hH, _iI, _ii, n0 } from "./schemas_0";
import { Unit } from "./schemas_7_App";

/* eslint no-var: 0 */

export var DisassociateQAppFromUserInput = struct(
  n0,
  _DQAFUI,
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
export var DisassociateQAppFromUser = op(
  n0,
  _DQAFU,
  {
    [_h]: ["POST", "/apps.uninstall", 200],
  },
  () => DisassociateQAppFromUserInput,
  () => Unit
);
