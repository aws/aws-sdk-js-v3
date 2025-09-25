// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  OperationInProgressException as __OperationInProgressException,
  StackSetNotEmptyException as __StackSetNotEmptyException,
} from "../models/index";
import { _aQE, _c, _CA, _DSS, _DSSI, _DSSO, _e, _hE, _M, _OIPE, _SSN, _SSNEE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteStackSetInput = struct(n0, _DSSI, 0, [_SSN, _CA], [0, 0]);
export var DeleteStackSetOutput = struct(n0, _DSSO, 0, [], []);
export var OperationInProgressException = error(
  n0,
  _OIPE,
  {
    [_e]: _c,
    [_hE]: 409,
    [_aQE]: [`OperationInProgressException`, 409],
  },
  [_M],
  [0],

  __OperationInProgressException
);
export var StackSetNotEmptyException = error(
  n0,
  _SSNEE,
  {
    [_e]: _c,
    [_hE]: 409,
    [_aQE]: [`StackSetNotEmptyException`, 409],
  },
  [_M],
  [0],

  __StackSetNotEmptyException
);
export var DeleteStackSet = op(
  n0,
  _DSS,
  0,
  () => DeleteStackSetInput,
  () => DeleteStackSetOutput
);
