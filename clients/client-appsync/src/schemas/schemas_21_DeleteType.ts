// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _DT, _DTR, _DTRe, _h, _tN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTypeRequest = struct(
  n0,
  _DTR,
  0,
  [_aI, _tN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteTypeResponse = struct(n0, _DTRe, 0, [], []);
export var DeleteType = op(
  n0,
  _DT,
  {
    [_h]: ["DELETE", "/v1/apis/{apiId}/types/{typeName}", 200],
  },
  () => DeleteTypeRequest,
  () => DeleteTypeResponse
);
