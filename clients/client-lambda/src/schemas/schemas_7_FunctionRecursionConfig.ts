// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _FN, _GFRC, _GFRCR, _GFRCRe, _h, _PFRC, _PFRCR, _PFRCRu, _RL, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetFunctionRecursionConfigRequest = struct(n0, _GFRCR, 0, [_FN], [[0, 1]]);
export var GetFunctionRecursionConfigResponse = struct(n0, _GFRCRe, 0, [_RL], [0]);
export var PutFunctionRecursionConfigRequest = struct(n0, _PFRCR, 0, [_FN, _RL], [[0, 1], 0]);
export var PutFunctionRecursionConfigResponse = struct(n0, _PFRCRu, 0, [_RL], [0]);
export var GetFunctionRecursionConfig = op(
  n0,
  _GFRC,
  {
    [_h]: ["GET", "/2024-08-31/functions/{FunctionName}/recursion-config", 200],
  },
  () => GetFunctionRecursionConfigRequest,
  () => GetFunctionRecursionConfigResponse
);
export var PutFunctionRecursionConfig = op(
  n0,
  _PFRC,
  {
    [_h]: ["PUT", "/2024-08-31/functions/{FunctionName}/recursion-config", 200],
  },
  () => PutFunctionRecursionConfigRequest,
  () => PutFunctionRecursionConfigResponse
);
