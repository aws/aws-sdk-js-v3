// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _DQA, _DQAI, _h, _hH, _iI, _ii, n0 } from "./schemas_0";
import { Unit } from "./schemas_7_App";

/* eslint no-var: 0 */

export var DeleteQAppInput = struct(
  n0,
  _DQAI,
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
export var DeleteQApp = op(
  n0,
  _DQA,
  {
    [_h]: ["POST", "/apps.delete", 200],
  },
  () => DeleteQAppInput,
  () => Unit
);
