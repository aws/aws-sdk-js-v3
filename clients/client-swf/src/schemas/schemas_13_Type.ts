// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { TypeAlreadyExistsFault as __TypeAlreadyExistsFault } from "../models/index";
import { _cl, _do, _er, _m, _TAEF, _UWT, _UWTI, _wT, n0, Unit } from "./schemas_0";
import { WorkflowType } from "./schemas_7_Workflow";

/* eslint no-var: 0 */

export var TypeAlreadyExistsFault = error(
  n0,
  _TAEF,
  {
    [_er]: _cl,
  },
  [_m],
  [0],

  __TypeAlreadyExistsFault
);
export var UndeprecateWorkflowTypeInput = struct(n0, _UWTI, 0, [_do, _wT], [0, () => WorkflowType]);
export var UndeprecateWorkflowType = op(
  n0,
  _UWT,
  0,
  () => UndeprecateWorkflowTypeInput,
  () => Unit
);
