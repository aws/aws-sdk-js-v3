// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { CodeSigningConfigNotFoundException as __CodeSigningConfigNotFoundException } from "../models/index";
import { _c, _CSCNFE, _DFCSC, _DFCSCR, _e, _FN, _h, _hE, _M, _T, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var CodeSigningConfigNotFoundException = error(
  n0,
  _CSCNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_T, _M],
  [0, 0],

  __CodeSigningConfigNotFoundException
);
export var DeleteFunctionCodeSigningConfigRequest = struct(n0, _DFCSCR, 0, [_FN], [[0, 1]]);
export var DeleteFunctionCodeSigningConfig = op(
  n0,
  _DFCSC,
  {
    [_h]: ["DELETE", "/2020-06-30/functions/{FunctionName}/code-signing-config", 204],
  },
  () => DeleteFunctionCodeSigningConfigRequest,
  () => Unit
);
