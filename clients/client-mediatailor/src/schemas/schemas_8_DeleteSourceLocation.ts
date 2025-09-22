// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSL, _DSLR, _DSLRe, _h, _SLN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSourceLocationRequest = struct(n0, _DSLR, 0, [_SLN], [[0, 1]]);
export var DeleteSourceLocationResponse = struct(n0, _DSLRe, 0, [], []);
export var DeleteSourceLocation = op(
  n0,
  _DSL,
  {
    [_h]: ["DELETE", "/sourceLocation/{SourceLocationName}", 200],
  },
  () => DeleteSourceLocationRequest,
  () => DeleteSourceLocationResponse
);
