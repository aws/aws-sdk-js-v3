// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  AutomationExecutionNotFoundException as __AutomationExecutionNotFoundException,
  InvalidAutomationStatusUpdateException as __InvalidAutomationStatusUpdateException,
} from "../models/index";
import { _AEI, _AENFE, _aQE, _c, _e, _IASUE, _M, _SAERto, _SAERtop, _SAEt, _Ty, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AutomationExecutionNotFoundException = error(
  n0,
  _AENFE,
  {
    [_e]: _c,
    [_aQE]: [`AutomationExecutionNotFound`, 404],
  },
  [_M],
  [0],

  __AutomationExecutionNotFoundException
);
export var InvalidAutomationStatusUpdateException = error(
  n0,
  _IASUE,
  {
    [_e]: _c,
    [_aQE]: [`InvalidAutomationStatusUpdateException`, 400],
  },
  [_M],
  [0],

  __InvalidAutomationStatusUpdateException
);
export var StopAutomationExecutionRequest = struct(n0, _SAERto, 0, [_AEI, _Ty], [0, 0]);
export var StopAutomationExecutionResult = struct(n0, _SAERtop, 0, [], []);
export var StopAutomationExecution = op(
  n0,
  _SAEt,
  0,
  () => StopAutomationExecutionRequest,
  () => StopAutomationExecutionResult
);
