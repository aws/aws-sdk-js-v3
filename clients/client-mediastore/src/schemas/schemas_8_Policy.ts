// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { CorsPolicyNotFoundException as __CorsPolicyNotFoundException } from "../models/index";
import { _c, _CN, _CPNFE, _DCPe, _DCPIe, _DCPOe, _e, _M, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CorsPolicyNotFoundException = error(
  n0,
  _CPNFE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __CorsPolicyNotFoundException
);
export var DeleteCorsPolicyInput = struct(n0, _DCPIe, 0, [_CN], [0]);
export var DeleteCorsPolicyOutput = struct(n0, _DCPOe, 0, [], []);
export var DeleteCorsPolicy = op(
  n0,
  _DCPe,
  0,
  () => DeleteCorsPolicyInput,
  () => DeleteCorsPolicyOutput
);
