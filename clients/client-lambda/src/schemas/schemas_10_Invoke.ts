// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import {
  InvalidRequestContentException as __InvalidRequestContentException,
  InvalidRuntimeException as __InvalidRuntimeException,
} from "../models/index";
import {
  _BS,
  _c,
  _e,
  _FN,
  _h,
  _hE,
  _IA,
  _IAn,
  _IAR,
  _IARn,
  _IRCE,
  _IRE,
  _M,
  _m,
  _s,
  _se,
  _Sta,
  _T,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BlobStream = sim(n0, _BS, 42, {
  [_s]: 1,
});
export var InvalidRequestContentException = error(
  n0,
  _IRCE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_T, _m],
  [0, 0],

  __InvalidRequestContentException
);
export var InvalidRuntimeException = error(
  n0,
  _IRE,
  {
    [_e]: _se,
    [_hE]: 502,
  },
  [_T, _M],
  [0, 0],

  __InvalidRuntimeException
);
export var InvokeAsyncRequest = struct(
  n0,
  _IAR,
  0,
  [_FN, _IA],
  [
    [0, 1],
    [() => BlobStream, 16],
  ]
);
export var InvokeAsyncResponse = struct(n0, _IARn, 0, [_Sta], [[1, 32]]);
export var InvokeAsync = op(
  n0,
  _IAn,
  {
    [_h]: ["POST", "/2014-11-13/functions/{FunctionName}/invoke-async", 202],
  },
  () => InvokeAsyncRequest,
  () => InvokeAsyncResponse
);
