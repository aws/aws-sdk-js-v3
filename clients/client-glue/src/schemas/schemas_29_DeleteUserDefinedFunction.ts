// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CI, _DN, _DUDF, _DUDFR, _DUDFRe, _FNu, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteUserDefinedFunctionRequest = struct(n0, _DUDFR, 0, [_CI, _DN, _FNu], [0, 0, 0]);
export var DeleteUserDefinedFunctionResponse = struct(n0, _DUDFRe, 0, [], []);
export var DeleteUserDefinedFunction = op(
  n0,
  _DUDF,
  0,
  () => DeleteUserDefinedFunctionRequest,
  () => DeleteUserDefinedFunctionResponse
);
