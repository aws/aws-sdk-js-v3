// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { TypeDeprecatedFault as __TypeDeprecatedFault } from "../models/index";
import { _cl, _do, _DWTe, _DWTIe, _er, _m, _TDF, _wT, n0, Unit } from "./schemas_0";
import { WorkflowType } from "./schemas_7_Workflow";

/* eslint no-var: 0 */

export var DeprecateWorkflowTypeInput = struct(n0, _DWTIe, 0, [_do, _wT], [0, () => WorkflowType]);
export var TypeDeprecatedFault = error(
  n0,
  _TDF,
  {
    [_er]: _cl,
  },
  [_m],
  [0],

  __TypeDeprecatedFault
);
export var DeprecateWorkflowType = op(
  n0,
  _DWTe,
  0,
  () => DeprecateWorkflowTypeInput,
  () => Unit
);
