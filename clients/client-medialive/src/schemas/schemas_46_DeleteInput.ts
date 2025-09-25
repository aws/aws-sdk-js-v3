// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DIe, _DIR, _DIRe, _ht, _IIn, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteInputRequest = struct(n0, _DIR, 0, [_IIn], [[0, 1]]);
export var DeleteInputResponse = struct(n0, _DIRe, 0, [], []);
export var DeleteInput = op(
  n0,
  _DIe,
  {
    [_ht]: ["DELETE", "/prod/inputs/{InputId}", 200],
  },
  () => DeleteInputRequest,
  () => DeleteInputResponse
);
