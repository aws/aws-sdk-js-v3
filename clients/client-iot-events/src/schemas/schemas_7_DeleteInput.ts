// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DI, _DIR, _DIRe, _h, _iN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteInputRequest = struct(n0, _DIR, 0, [_iN], [[0, 1]]);
export var DeleteInputResponse = struct(n0, _DIRe, 0, [], []);
export var DeleteInput = op(
  n0,
  _DI,
  {
    [_h]: ["DELETE", "/inputs/{inputName}", 200],
  },
  () => DeleteInputRequest,
  () => DeleteInputResponse
);
