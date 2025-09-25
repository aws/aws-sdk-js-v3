// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  BulkLoadIdNotFoundException as __BulkLoadIdNotFoundException,
  InternalFailureException as __InternalFailureException,
  LoadUrlAccessDeniedException as __LoadUrlAccessDeniedException,
} from "../models/index";
import {
  _BLINFE,
  _c,
  _CLJ,
  _CLJI,
  _CLJO,
  _co,
  _dM,
  _e,
  _h,
  _hE,
  _IFE,
  _lI,
  _LUADE,
  _rI,
  _s,
  _se,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BulkLoadIdNotFoundException = error(
  n0,
  _BLINFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_dM, _rI, _co],
  [0, 0, 0],

  __BulkLoadIdNotFoundException
);
export var CancelLoaderJobInput = struct(n0, _CLJI, 0, [_lI], [[0, 1]]);
export var CancelLoaderJobOutput = struct(n0, _CLJO, 0, [_s], [0]);
export var InternalFailureException = error(
  n0,
  _IFE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_dM, _rI, _co],
  [0, 0, 0],

  __InternalFailureException
);
export var LoadUrlAccessDeniedException = error(
  n0,
  _LUADE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_dM, _rI, _co],
  [0, 0, 0],

  __LoadUrlAccessDeniedException
);
export var CancelLoaderJob = op(
  n0,
  _CLJ,
  {
    [_h]: ["DELETE", "/loader/{loadId}", 200],
  },
  () => CancelLoaderJobInput,
  () => CancelLoaderJobOutput
);
