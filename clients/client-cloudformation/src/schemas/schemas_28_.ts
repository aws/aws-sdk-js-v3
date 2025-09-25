// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  InvalidStateTransitionException as __InvalidStateTransitionException,
  OperationStatusCheckFailedException as __OperationStatusCheckFailedException,
} from "../models/index";
import {
  _aQE,
  _BT,
  _c,
  _COS,
  _CRT,
  _e,
  _EC,
  _hE,
  _ISTE,
  _M,
  _OS,
  _OSCFE,
  _RHP,
  _RHPI,
  _RHPO,
  _RMe,
  _SM,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var InvalidStateTransitionException = error(
  n0,
  _ISTE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidStateTransition`, 400],
  },
  [_M],
  [0],

  __InvalidStateTransitionException
);
export var OperationStatusCheckFailedException = error(
  n0,
  _OSCFE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ConditionalCheckFailed`, 400],
  },
  [_M],
  [0],

  __OperationStatusCheckFailedException
);
export var RecordHandlerProgressInput = struct(
  n0,
  _RHPI,
  0,
  [_BT, _OS, _COS, _SM, _EC, _RMe, _CRT],
  [0, 0, 0, 0, 0, 0, 0]
);
export var RecordHandlerProgressOutput = struct(n0, _RHPO, 0, [], []);
export var RecordHandlerProgress = op(
  n0,
  _RHP,
  2,
  () => RecordHandlerProgressInput,
  () => RecordHandlerProgressOutput
);
