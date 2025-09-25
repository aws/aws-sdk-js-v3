// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aTAs, _aTN, _rGA, _UAT, _UATR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateAssessmentTargetRequest = struct(n0, _UATR, 0, [_aTAs, _aTN, _rGA], [0, 0, 0]);
export var UpdateAssessmentTarget = op(
  n0,
  _UAT,
  0,
  () => UpdateAssessmentTargetRequest,
  () => Unit
);
