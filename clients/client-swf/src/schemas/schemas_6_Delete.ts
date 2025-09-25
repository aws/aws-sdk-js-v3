// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { TypeNotDeprecatedFault as __TypeNotDeprecatedFault } from "../models/index";
import { _cl, _do, _DWT, _DWTI, _er, _m, _TNDF, _wT, n0, Unit } from "./schemas_0";
import { WorkflowType } from "./schemas_7_Workflow";

/* eslint no-var: 0 */

export var DeleteWorkflowTypeInput = struct(n0, _DWTI, 0, [_do, _wT], [0, () => WorkflowType]);
export var TypeNotDeprecatedFault = error(
  n0,
  _TNDF,
  {
    [_er]: _cl,
  },
  [_m],
  [0],

  __TypeNotDeprecatedFault
);
export var DeleteWorkflowType = op(
  n0,
  _DWT,
  0,
  () => DeleteWorkflowTypeInput,
  () => Unit
);
