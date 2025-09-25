// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _C, _FN, _GFC, _GFCR, _GFCRe, _h, _PFC, _PFCR, _RCE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var Concurrency = struct(n0, _C, 0, [_RCE], [1]);
export var GetFunctionConcurrencyRequest = struct(n0, _GFCR, 0, [_FN], [[0, 1]]);
export var GetFunctionConcurrencyResponse = struct(n0, _GFCRe, 0, [_RCE], [1]);
export var PutFunctionConcurrencyRequest = struct(n0, _PFCR, 0, [_FN, _RCE], [[0, 1], 1]);
export var GetFunctionConcurrency = op(
  n0,
  _GFC,
  {
    [_h]: ["GET", "/2019-09-30/functions/{FunctionName}/concurrency", 200],
  },
  () => GetFunctionConcurrencyRequest,
  () => GetFunctionConcurrencyResponse
);
export var PutFunctionConcurrency = op(
  n0,
  _PFC,
  {
    [_h]: ["PUT", "/2017-10-31/functions/{FunctionName}/concurrency", 200],
  },
  () => PutFunctionConcurrencyRequest,
  () => Concurrency
);
