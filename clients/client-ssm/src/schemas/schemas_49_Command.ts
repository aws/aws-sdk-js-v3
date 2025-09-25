// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InvalidCommandId as __InvalidCommandId } from "../models/index";
import { _aQE, _c, _CCa, _CCR, _CCRa, _CI, _e, _ICI, _IIn, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelCommandRequest = struct(n0, _CCR, 0, [_CI, _IIn], [0, 64 | 0]);
export var CancelCommandResult = struct(n0, _CCRa, 0, [], []);
export var InvalidCommandId = error(
  n0,
  _ICI,
  {
    [_e]: _c,
    [_aQE]: [`InvalidCommandId`, 404],
  },
  [],
  [],

  __InvalidCommandId
);
export var CancelCommand = op(
  n0,
  _CCa,
  0,
  () => CancelCommandRequest,
  () => CancelCommandResult
);
