// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _DF, _DFR, _DFRe, _fI, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteFunctionRequest = struct(
  n0,
  _DFR,
  0,
  [_aI, _fI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteFunctionResponse = struct(n0, _DFRe, 0, [], []);
export var DeleteFunction = op(
  n0,
  _DF,
  {
    [_h]: ["DELETE", "/v1/apis/{apiId}/functions/{functionId}", 200],
  },
  () => DeleteFunctionRequest,
  () => DeleteFunctionResponse
);
