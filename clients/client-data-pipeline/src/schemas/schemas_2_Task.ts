// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { TaskNotFoundException as __TaskNotFoundException } from "../models/index";
import { _c, _e, _EE, _EEI, _EEO, _eEv, _er, _me, _oIb, _pI, _TNFE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var EvaluateExpressionInput = struct(n0, _EEI, 0, [_pI, _oIb, _e], [0, 0, 0]);
export var EvaluateExpressionOutput = struct(n0, _EEO, 0, [_eEv], [0]);
export var TaskNotFoundException = error(
  n0,
  _TNFE,
  {
    [_er]: _c,
  },
  [_me],
  [0],

  __TaskNotFoundException
);
export var EvaluateExpression = op(
  n0,
  _EE,
  0,
  () => EvaluateExpressionInput,
  () => EvaluateExpressionOutput
);
