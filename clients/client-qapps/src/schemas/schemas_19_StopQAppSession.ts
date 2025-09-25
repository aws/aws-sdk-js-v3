// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _hH, _iI, _ii, _sI, _SQASIt, _SQASt, n0 } from "./schemas_0";
import { Unit } from "./schemas_7_App";

/* eslint no-var: 0 */

export var StopQAppSessionInput = struct(
  n0,
  _SQASIt,
  0,
  [_iI, _sI],
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
export var StopQAppSession = op(
  n0,
  _SQASt,
  {
    [_h]: ["POST", "/runtime.deleteMiniAppRun", 200],
  },
  () => StopQAppSessionInput,
  () => Unit
);
